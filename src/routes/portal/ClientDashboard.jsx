import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth.context';
import './client-dashboard.scss';

export default function ClientDashboard() {
  const { user } = useAuth();
  const [project, setProject] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(null);
  const [questionnaire, setQuestionnaire] = useState(null);
  const [assetProgress, setAssetProgress] = useState({ done: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  const displayName = user?.user_metadata?.full_name
    || user?.user_metadata?.name
    || user?.email?.split('@')[0]
    || 'there';

  useEffect(() => {
    async function fetchClientData() {
      try {
        // Get client's project
        const { data: projects } = await supabase
          .from('projects')
          .select('id, name, type, status')
          .limit(1)
          .single();

        if (!projects) { setLoading(false); return; }
        setProject(projects);

        // Fetch phase, questionnaire, and assets in parallel
        const [
          { data: phases },
          { data: response },
          { data: checklist },
        ] = await Promise.all([
          supabase
            .from('project_phases')
            .select('phase_name, status, start_date, end_date')
            .eq('project_id', projects.id)
            .order('sort_order'),
          supabase
            .from('questionnaire_responses')
            .select('completed_at, current_section')
            .eq('project_id', projects.id)
            .maybeSingle(),
          supabase
            .from('asset_checklists')
            .select('items')
            .eq('project_id', projects.id)
            .maybeSingle(),
        ]);

        // Current phase
        const active = phases?.find(p => p.status === 'in_progress');
        const next = phases?.find(p => p.status === 'upcoming');
        setCurrentPhase(active || next || null);

        // Questionnaire status
        setQuestionnaire(response);

        // Asset progress
        if (checklist?.items && Array.isArray(checklist.items)) {
          const total = checklist.items.length;
          const done = checklist.items.filter(i => i.status === 'uploaded' || i.status === 'received').length;
          setAssetProgress({ done, total });
        }
      } catch (err) {
        console.error('Client dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchClientData();
  }, []);

  if (loading) {
    return (
      <div className="client-dashboard">
        <div className="client-dashboard__welcome">
          <div className="skeleton-line skeleton-line--wide" />
          <div className="skeleton-line skeleton-line--short" />
        </div>
        <div className="client-dashboard__grid">
          {[1, 2, 3].map(i => (
            <div key={i} className="portal-card client-dashboard__card--skeleton">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const questionnaireComplete = !!questionnaire?.completed_at;
  const totalProgress = calculateOverallProgress(questionnaireComplete, assetProgress);

  return (
    <div className="client-dashboard">
      <div className="client-dashboard__welcome">
        <h2>Welcome back, {displayName}</h2>
        {project && (
          <p className="client-dashboard__project-name">
            {project.name}
            <span className={`portal-badge portal-badge--${statusColor(project.status)}`}>
              {formatStatus(project.status)}
            </span>
          </p>
        )}
      </div>

      <div className="client-dashboard__grid">
        {/* Progress ring card */}
        <div className="portal-card client-dashboard__progress-card">
          <h4>Overall Progress</h4>
          <div className="progress-ring">
            <svg viewBox="0 0 120 120" className="progress-ring__svg">
              <circle className="progress-ring__bg" cx="60" cy="60" r="52" />
              <circle
                className="progress-ring__fill"
                cx="60" cy="60" r="52"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - totalProgress / 100)}`}
              />
            </svg>
            <span className="progress-ring__label">{totalProgress}%</span>
          </div>
          <div className="progress-ring__breakdown">
            <div className="progress-ring__item">
              <span className={`progress-ring__dot ${questionnaireComplete ? 'progress-ring__dot--done' : ''}`} />
              <span>Questionnaire {questionnaireComplete ? 'complete' : 'in progress'}</span>
            </div>
            <div className="progress-ring__item">
              <span className={`progress-ring__dot ${assetProgress.done === assetProgress.total && assetProgress.total > 0 ? 'progress-ring__dot--done' : ''}`} />
              <span>Assets {assetProgress.total > 0 ? `${assetProgress.done} of ${assetProgress.total}` : 'pending'}</span>
            </div>
          </div>
        </div>

        {/* Current phase card */}
        <div className="portal-card client-dashboard__phase-card">
          <h4>Current Phase</h4>
          {currentPhase ? (
            <>
              <span className="client-dashboard__phase-name">{currentPhase.phase_name}</span>
              <span className={`portal-badge portal-badge--${currentPhase.status === 'in_progress' ? 'purple' : 'amber'}`}>
                {currentPhase.status === 'in_progress' ? 'In Progress' : 'Upcoming'}
              </span>
              {currentPhase.end_date && (
                <p className="client-dashboard__phase-date">
                  Target: {new Date(currentPhase.end_date).toLocaleDateString()}
                </p>
              )}
            </>
          ) : (
            <p className="client-dashboard__empty-text">No phases scheduled yet</p>
          )}
          <Link to="/portal/timeline" className="client-dashboard__card-link">
            View full timeline
          </Link>
        </div>

        {/* Quick actions card */}
        <div className="portal-card client-dashboard__actions-card">
          <h4>Quick Actions</h4>
          <div className="client-dashboard__action-list">
            {!questionnaireComplete && (
              <Link to="/portal/onboarding" className="portal-btn portal-btn--primary portal-btn--sm portal-btn--full">
                {questionnaire ? 'Continue Questionnaire' : 'Start Onboarding'}
              </Link>
            )}
            <Link to="/portal/assets" className="portal-btn portal-btn--secondary portal-btn--sm portal-btn--full">
              Upload Assets
            </Link>
            <Link to="/portal/messages" className="portal-btn portal-btn--ghost portal-btn--sm portal-btn--full">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateOverallProgress(questionnaireComplete, assetProgress) {
  let total = 0;
  let done = 0;

  // Questionnaire is 40% of progress
  total += 40;
  if (questionnaireComplete) done += 40;

  // Assets are 60% of progress
  if (assetProgress.total > 0) {
    total += 60;
    done += Math.round((assetProgress.done / assetProgress.total) * 60);
  }

  return total > 0 ? Math.round((done / total) * 100) : 0;
}

function statusColor(status) {
  const map = { onboarding: 'amber', active: 'purple', completed: 'teal', paused: 'coral' };
  return map[status] || 'blue';
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}
