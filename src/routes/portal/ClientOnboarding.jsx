import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { loadQuestionnaire, autoSave, saveSection, submitQuestionnaire } from '../../lib/questionnaire';
import QuestionnaireRenderer from '../../components/portal/questionnaire-renderer/QuestionnaireRenderer';
import './client-onboarding.scss';

export default function ClientOnboarding() {
  const [template, setTemplate] = useState(null);
  const [response, setResponse] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const autoSaveTimer = useRef(null);

  useEffect(() => {
    async function init() {
      try {
        const { data: project } = await supabase.from('projects').select('id').limit(1).single();
        if (!project) { setLoading(false); return; }

        const { template: tmpl, response: resp } = await loadQuestionnaire(project.id);
        setTemplate(tmpl);
        setResponse(resp);
        setCurrentStep(resp.currentSection || 0);
        setAnswers(resp.responses || {});
      } catch (err) {
        console.error('Failed to load questionnaire:', err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const sections = template?.sections || [];
  const currentSection = sections[currentStep];
  const isLastStep = currentStep === sections.length - 1;
  const isComplete = !!response?.completedAt;

  const handleChange = useCallback((fieldId, value) => {
    if (!currentSection) return;
    setAnswers(prev => ({
      ...prev,
      [currentSection.id]: { ...(prev[currentSection.id] || {}), [fieldId]: value },
    }));
  }, [currentSection]);

  const handleBlur = useCallback(() => {
    if (!response || !currentSection) return;

    clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(async () => {
      try {
        await autoSave(response.id, currentSection.id, answers[currentSection.id] || {});
      } catch (err) {
        console.error('Auto-save failed:', err);
      }
    }, 1000);
  }, [response, currentSection, answers]);

  const handleNext = async () => {
    if (!response || !currentSection) return;
    setSaving(true);
    try {
      await saveSection(response.id, currentSection.id, answers[currentSection.id] || {}, currentStep + 1);
      setCurrentStep(currentStep + 1);
    } catch (err) {
      console.error('Save failed:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!response || !currentSection) return;
    setSubmitting(true);
    try {
      await submitQuestionnaire(response.id, currentSection.id, answers[currentSection.id] || {});
      setResponse(prev => ({ ...prev, completedAt: new Date().toISOString() }));
    } catch (err) {
      console.error('Submit failed:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="client-onboarding">
        <h2>Onboarding</h2>
        <div className="portal-card onboarding-skeleton">
          <div className="skeleton-line skeleton-line--short" />
          <div className="skeleton-line skeleton-line--wide" />
          <div className="skeleton-line skeleton-line--wide" />
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="client-onboarding">
        <h2>Onboarding</h2>
        <div className="portal-card onboarding-complete">
          <div className="onboarding-complete__icon">&#10003;</div>
          <h3>Questionnaire Complete</h3>
          <p>Thank you! Your responses have been submitted. The Hekatek team will review them shortly.</p>
        </div>
      </div>
    );
  }

  if (!template || sections.length === 0) {
    return (
      <div className="client-onboarding">
        <h2>Onboarding</h2>
        <div className="portal-card onboarding-empty">
          <p>No questionnaire available yet. Please check back later.</p>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / sections.length) * 100;

  return (
    <div className="client-onboarding">
      <h2>Onboarding</h2>

      <div className="onboarding-progress">
        <span className="onboarding-progress__label">Step {currentStep + 1} of {sections.length}</span>
        <div className="portal-progress">
          <div className="portal-progress__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="portal-card onboarding-section">
        <h3 className="onboarding-section__title">{currentSection.title}</h3>
        {currentSection.description && (
          <p className="onboarding-section__desc">{currentSection.description}</p>
        )}

        <QuestionnaireRenderer
          fields={currentSection.fields || []}
          answers={answers[currentSection.id] || {}}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="onboarding-section__actions">
          {currentStep > 0 && (
            <button className="portal-btn portal-btn--secondary portal-btn--md" onClick={handleBack} disabled={saving}>
              Back
            </button>
          )}
          <div className="onboarding-section__spacer" />
          {isLastStep ? (
            <button className="portal-btn portal-btn--primary portal-btn--md" onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          ) : (
            <button className="portal-btn portal-btn--primary portal-btn--md" onClick={handleNext} disabled={saving}>
              {saving ? 'Saving...' : 'Save & Continue'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
