import { supabase } from './supabase';
import { DEFAULT_PHASES } from '../data/seed/project-phases';

/**
 * BE-04: Invite client flow.
 * 1. Sends Supabase Auth invite email (creates auth.users row)
 * 2. The on_auth_user_created trigger auto-creates the profile
 * 3. Creates a project record linked to the new client
 * 4. Seeds default project phases for the project
 * 5. Creates an empty questionnaire response linked to the correct template
 * 6. Creates an empty asset checklist from the template
 *
 * NOTE: inviteUserByEmail requires the service_role key.
 * In production, this should be called via a Supabase Edge Function.
 * For local dev/admin use, set VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local
 * and use the serviceClient below.
 */

/**
 * Invite a new client and set up their project.
 * @param {Object} params
 * @param {string} params.email - Client's email address
 * @param {string} params.fullName - Client's full name
 * @param {string} params.companyName - Client's company name
 * @param {string} params.projectName - Name of the project
 * @param {string} params.projectType - One of: static_website, shopify, agent_development, crm, workflow_consulting
 */
export async function inviteClient({ email, fullName, companyName, projectName, projectType }) {
  // 1. Send invite via Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.admin.inviteUserByEmail(email, {
    data: {
      role: 'client',
      full_name: fullName,
      company_name: companyName,
    },
  });

  if (authError) throw authError;

  const userId = authData.user.id;

  // 2. Update the auto-created profile with company name
  const { error: profileError } = await supabase
    .from('profiles')
    .update({ company_name: companyName, full_name: fullName })
    .eq('id', userId);

  if (profileError) throw profileError;

  // 3. Create the project
  const { data: project, error: projectError } = await supabase
    .from('projects')
    .insert({
      name: projectName,
      type: projectType,
      status: 'onboarding',
      client_id: userId,
    })
    .select()
    .single();

  if (projectError) throw projectError;

  // 4. Seed default project phases
  await seedProjectPhases(project.id);

  // 5. Link questionnaire template and create empty response
  await createQuestionnaireResponse(project.id, projectType);

  // 6. Create asset checklist from template
  await createAssetChecklist(project.id, projectType);

  return { user: authData.user, project };
}

/**
 * BE-07: Seed default project phases for a new project.
 */
async function seedProjectPhases(projectId) {
  const phases = DEFAULT_PHASES.map((phase, index) => ({
    project_id: projectId,
    phase_name: phase.name,
    sort_order: index,
    status: 'upcoming',
    start_date: null,
    end_date: null,
  }));

  const { error } = await supabase.from('project_phases').insert(phases);
  if (error) throw error;
}

/**
 * Create a questionnaire response row linked to the correct template.
 */
async function createQuestionnaireResponse(projectId, projectType) {
  // Look up the template for this project type
  const { data: template, error: templateError } = await supabase
    .from('questionnaire_templates')
    .select('id')
    .eq('project_type', projectType)
    .single();

  if (templateError) throw templateError;

  const { error } = await supabase
    .from('questionnaire_responses')
    .insert({
      project_id: projectId,
      template_id: template.id,
      responses: {},
      current_section: 0,
    });

  if (error) throw error;
}

/**
 * Create an asset checklist for a project from the template.
 */
async function createAssetChecklist(projectId, projectType) {
  const { data: template, error: templateError } = await supabase
    .from('asset_checklist_templates')
    .select('items')
    .eq('project_type', projectType)
    .single();

  if (templateError) throw templateError;

  // Copy template items with default status
  const items = (template.items || []).map((item) => ({
    ...item,
    status: 'pending',
    file_url: null,
    file_name: null,
    uploaded_at: null,
  }));

  const { error } = await supabase
    .from('asset_checklists')
    .insert({
      project_id: projectId,
      items,
    });

  if (error) throw error;
}
