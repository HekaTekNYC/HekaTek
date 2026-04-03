import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './admin-feature-pages.scss';

export default function AdminPhases() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [phases, setPhases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from('projects')
        .select('id, name, profiles(full_name)')
        .order('created_at', { ascending: false });
      setProjects(data || []);
      setLoading(false);
    }
    fetch();
  }, []);

  async function loadPhases(projectId) {
    setSelectedProject(projectId);
    const { data } = await supabase
      .from('project_phases')
      .select('*')
      .eq('project_id', projectId)
      .order('sort_order');
    setPhases(data || []);
  }

  async function updatePhase(phaseId, field, value) {
    await supabase.from('project_phases').update({ [field]: value }).eq('id', phaseId);
    setPhases(prev => prev.map(p => p.id === phaseId ? { ...p, [field]: value, updated_at: new Date().toISOString() } : p));
  }

  if (loading) return <div className="admin-feature-page"><h2>Phase Management</h2></div>;

  return (
    <div className="admin-feature-page">
      <h2>Phase Management</h2>

      <div className="admin-feature-page__split">
        <div className="admin-feature-page__sidebar-list">
          {projects.map(p => (
            <button
              key={p.id}
              className={`admin-feature-page__list-item ${selectedProject === p.id ? 'admin-feature-page__list-item--active' : ''}`}
              onClick={() => loadPhases(p.id)}
            >
              <span className="admin-feature-page__list-name">{p.profiles?.full_name || 'Unnamed'}</span>
              <span className="admin-feature-page__list-sub">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="admin-feature-page__detail">
          {!selectedProject ? (
            <div className="admin-feature-page__select-prompt"><p>Select a project to manage phases</p></div>
          ) : (
            <div className="admin-phases__list">
              {phases.map(phase => (
                <div key={phase.id} className="portal-card admin-phases__card">
                  <div className="admin-phases__header">
                    <h4>{phase.phase_name}</h4>
                    <select
                      className="portal-select admin-phases__status-select"
                      value={phase.status}
                      onChange={(e) => updatePhase(phase.id, 'status', e.target.value)}
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="admin-phases__dates">
                    <div className="portal-form-group admin-phases__date-field">
                      <label className="portal-label">Start Date</label>
                      <input
                        className="portal-input"
                        type="date"
                        value={phase.start_date || ''}
                        onChange={(e) => updatePhase(phase.id, 'start_date', e.target.value || null)}
                      />
                    </div>
                    <div className="portal-form-group admin-phases__date-field">
                      <label className="portal-label">End Date</label>
                      <input
                        className="portal-input"
                        type="date"
                        value={phase.end_date || ''}
                        onChange={(e) => updatePhase(phase.id, 'end_date', e.target.value || null)}
                      />
                    </div>
                  </div>

                  {phase.updated_at && (
                    <span className="admin-phases__updated">
                      Updated {new Date(phase.updated_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
