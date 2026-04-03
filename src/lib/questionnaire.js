import { supabase } from './supabase';
import { generateChecklist } from './checklist';

/**
 * BE-09: Questionnaire auto-save and submission logic.
 *
 * Flow:
 * 1. Client opens questionnaire → loadQuestionnaire() fetches template + existing responses
 * 2. Client fills out a section → autoSave() persists partial answers
 * 3. Client clicks Next → saveSection() saves current section and advances
 * 4. Client finishes all sections → submitQuestionnaire() marks as completed
 *    → triggers BE-08 generateChecklist() to enrich the asset checklist
 */

/**
 * Load the questionnaire for a project.
 * Returns the template (sections/fields) and existing response (saved answers).
 */
export async function loadQuestionnaire(projectId) {
  // Get the response (which links to the template)
  const { data: response, error: responseError } = await supabase
    .from('questionnaire_responses')
    .select('*, questionnaire_templates(*)')
    .eq('project_id', projectId)
    .single();

  if (responseError) throw responseError;

  return {
    template: response.questionnaire_templates,
    response: {
      id: response.id,
      responses: response.responses,
      currentSection: response.current_section,
      completedAt: response.completed_at,
    },
  };
}

/**
 * Auto-save responses for the current section.
 * Called on field blur or after a debounce while typing.
 * Merges new answers into existing responses object.
 *
 * @param {string} responseId - questionnaire_responses.id
 * @param {Object} sectionAnswers - { fieldId: value, ... } for the current section
 * @param {string} sectionId - the section being saved (used as key in responses JSONB)
 */
export async function autoSave(responseId, sectionId, sectionAnswers) {
  // Fetch current responses to merge
  const { data: current, error: fetchError } = await supabase
    .from('questionnaire_responses')
    .select('responses')
    .eq('id', responseId)
    .single();

  if (fetchError) throw fetchError;

  const merged = {
    ...current.responses,
    [sectionId]: {
      ...(current.responses?.[sectionId] || {}),
      ...sectionAnswers,
    },
  };

  const { error } = await supabase
    .from('questionnaire_responses')
    .update({ responses: merged })
    .eq('id', responseId);

  if (error) throw error;
}

/**
 * Save the current section and advance to the next.
 * Used when the client clicks "Next" or "Save & Continue."
 *
 * @param {string} responseId - questionnaire_responses.id
 * @param {string} sectionId - the section being completed
 * @param {Object} sectionAnswers - final answers for this section
 * @param {number} nextSectionIndex - index of the next section
 */
export async function saveSection(responseId, sectionId, sectionAnswers, nextSectionIndex) {
  const { data: current, error: fetchError } = await supabase
    .from('questionnaire_responses')
    .select('responses')
    .eq('id', responseId)
    .single();

  if (fetchError) throw fetchError;

  const merged = {
    ...current.responses,
    [sectionId]: sectionAnswers,
  };

  const { error } = await supabase
    .from('questionnaire_responses')
    .update({
      responses: merged,
      current_section: nextSectionIndex,
    })
    .eq('id', responseId);

  if (error) throw error;
}

/**
 * Submit the questionnaire (mark as completed).
 * Called when the client finishes the final section.
 * Sets completed_at timestamp — this is irreversible from the client side.
 * After submission, triggers checklist generation (BE-08) to enrich the
 * asset checklist with items derived from questionnaire answers.
 *
 * @param {string} responseId - questionnaire_responses.id
 * @param {string} sectionId - the final section being submitted
 * @param {Object} sectionAnswers - final answers for the last section
 * @param {string} projectId - the project this questionnaire belongs to
 * @param {string} projectType - the project type (for checklist derivation)
 */
export async function submitQuestionnaire(responseId, sectionId, sectionAnswers, projectId, projectType) {
  const { data: current, error: fetchError } = await supabase
    .from('questionnaire_responses')
    .select('responses')
    .eq('id', responseId)
    .single();

  if (fetchError) throw fetchError;

  const merged = {
    ...current.responses,
    [sectionId]: sectionAnswers,
  };

  const { error } = await supabase
    .from('questionnaire_responses')
    .update({
      responses: merged,
      completed_at: new Date().toISOString(),
    })
    .eq('id', responseId);

  if (error) throw error;

  // BE-08: Enrich the asset checklist based on questionnaire answers
  await generateChecklist(projectId, projectType, merged);
}

/**
 * Admin: fetch all questionnaire responses for a project.
 * Returns the full response with template for rendering.
 */
export async function getQuestionnaireForAdmin(projectId) {
  return loadQuestionnaire(projectId);
}
