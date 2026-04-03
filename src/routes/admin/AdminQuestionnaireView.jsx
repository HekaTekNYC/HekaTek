import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useSearchParams } from 'react-router-dom';
import './admin-feature-pages.scss';

export default function AdminQuestionnaireView() {
  const [searchParams] = useSearchParams();
  const [clients, setClients] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [questionnaire, setQuestionnaire] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      const { data } = await supabase
        .from('projects')
        .select('id, name, type, profiles(full_name, company_name)')
        .order('created_at', { ascending: false });
      setClients(data || []);
      setLoading(false);

      const preselect = searchParams.get('project');
      if (preselect) loadQuestionnaire(preselect);
    }
    fetchClients();
  }, []);

  async function loadQuestionnaire(projectId) {
    setSelectedProject(projectId);
    const { data } = await supabase
      .from('questionnaire_responses')
      .select('*, questionnaire_templates(title, sections)')
      .eq('project_id', projectId)
      .single();
    setQuestionnaire(data);
  }

  if (loading) return <AdminPageSkeleton title="Questionnaire Responses" />;

  return (
    <div className="admin-feature-page">
      <h2>Questionnaire Responses</h2>

      <div className="admin-feature-page__split">
        <div className="admin-feature-page__sidebar-list">
          {clients.map(c => (
            <button
              key={c.id}
              className={`admin-feature-page__list-item ${selectedProject === c.id ? 'admin-feature-page__list-item--active' : ''}`}
              onClick={() => loadQuestionnaire(c.id)}
            >
              <span className="admin-feature-page__list-name">{c.profiles?.full_name || 'Unnamed'}</span>
              <span className="admin-feature-page__list-sub">{c.name}</span>
            </button>
          ))}
          {clients.length === 0 && <p className="admin-feature-page__empty-text">No projects yet</p>}
        </div>

        <div className="admin-feature-page__detail">
          {!questionnaire ? (
            <div className="admin-feature-page__select-prompt">
              <p>Select a client to view their questionnaire responses</p>
            </div>
          ) : !questionnaire.completed_at ? (
            <div className="portal-card">
              <span className="portal-badge portal-badge--amber">In Progress</span>
              <p style={{ marginTop: 'var(--space-3)' }}>This client hasn't completed their questionnaire yet.</p>
            </div>
          ) : (
            <div className="admin-questionnaire-responses">
              <div className="admin-questionnaire-responses__header">
                <h3>{questionnaire.questionnaire_templates?.title}</h3>
                <span className="portal-badge portal-badge--teal">Complete</span>
              </div>
              {questionnaire.questionnaire_templates?.sections?.map((section) => (
                <div key={section.id} className="portal-card admin-questionnaire-responses__section">
                  <h4>{section.title}</h4>
                  {section.fields?.map((field) => {
                    const answer = questionnaire.responses?.[section.id]?.[field.id];
                    return (
                      <div key={field.id} className="admin-questionnaire-responses__field">
                        <span className="admin-questionnaire-responses__label">{field.label}</span>
                        <span className="admin-questionnaire-responses__value">
                          {Array.isArray(answer) ? answer.join(', ') : answer?.toString() || '—'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminPageSkeleton({ title }) {
  return (
    <div className="admin-feature-page">
      <h2>{title}</h2>
      <div className="portal-card" style={{ minHeight: 200 }}>
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line skeleton-line--wide" />
      </div>
    </div>
  );
}
