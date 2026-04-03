import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './client-timeline.scss';

export default function ClientTimeline() {
  const [phases, setPhases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimeline() {
      // Get client's project
      const { data: project } = await supabase
        .from('projects')
        .select('id')
        .limit(1)
        .single();

      if (!project) { setLoading(false); return; }

      const { data } = await supabase
        .from('project_phases')
        .select('*')
        .eq('project_id', project.id)
        .order('sort_order');

      setPhases(data || []);
      setLoading(false);
    }
    fetchTimeline();
  }, []);

  if (loading) {
    return (
      <div className="client-timeline">
        <h2>Project Timeline</h2>
        <div className="timeline">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="timeline__item timeline__item--skeleton">
              <div className="timeline__node" />
              <div className="timeline__card portal-card">
                <div className="skeleton-line skeleton-line--short" />
                <div className="skeleton-line skeleton-line--wide" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="client-timeline">
      <h2>Project Timeline</h2>

      {phases.length === 0 ? (
        <div className="client-timeline__empty portal-card">
          <p>No phases scheduled yet. Your timeline will appear here once your project kicks off.</p>
        </div>
      ) : (
        <div className="timeline">
          {phases.map((phase, idx) => (
            <div
              key={phase.id}
              className={`timeline__item timeline__item--${phase.status}`}
            >
              <div className="timeline__connector">
                <div className="timeline__node">
                  {phase.status === 'completed' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {phase.status === 'in_progress' && <span className="timeline__pulse" />}
                </div>
                {idx < phases.length - 1 && <div className="timeline__line" />}
              </div>

              <div className="timeline__card portal-card">
                <div className="timeline__card-header">
                  <h4>{phase.phase_name}</h4>
                  <span className={`portal-badge portal-badge--${phaseColor(phase.status)}`}>
                    {formatPhaseStatus(phase.status)}
                  </span>
                </div>
                {(phase.start_date || phase.end_date) && (
                  <div className="timeline__dates">
                    {phase.start_date && <span>{formatDate(phase.start_date)}</span>}
                    {phase.start_date && phase.end_date && <span className="timeline__arrow">→</span>}
                    {phase.end_date && <span>{formatDate(phase.end_date)}</span>}
                  </div>
                )}
                {phase.updated_at && phase.start_date && (
                  <span className="timeline__updated">Updated {formatDate(phase.updated_at)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function phaseColor(status) {
  return { completed: 'teal', in_progress: 'purple', upcoming: 'blue' }[status] || 'blue';
}

function formatPhaseStatus(status) {
  return { completed: 'Complete', in_progress: 'In Progress', upcoming: 'Upcoming' }[status] || status;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
