import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './admin-feature-pages.scss';

export default function AdminDeliverables() {
  const [projects, setProjects] = useState([]);
  const [deliverables, setDeliverables] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  async function fetchAll() {
    const [{ data: projs }, { data: delivs }] = await Promise.all([
      supabase.from('projects').select('id, name, profiles(full_name)'),
      supabase.from('deliverables').select('*, projects(name), project_phases(phase_name)').order('created_at', { ascending: false }),
    ]);
    setProjects(projs || []);
    setDeliverables(delivs || []);
    setLoading(false);
  }

  const filtered = filter === 'all' ? deliverables : deliverables.filter(d => d.status === filter);
  const counts = {
    all: deliverables.length,
    pending: deliverables.filter(d => d.status === 'pending').length,
    approved: deliverables.filter(d => d.status === 'approved').length,
    changes_requested: deliverables.filter(d => d.status === 'changes_requested').length,
  };

  if (loading) return <div className="admin-feature-page"><h2>Deliverables</h2></div>;

  return (
    <div className="admin-feature-page">
      <div className="admin-feature-page__header-row">
        <h2>Deliverables</h2>
        <button className="portal-btn portal-btn--primary portal-btn--sm" onClick={() => setShowUpload(true)}>
          + Upload Deliverable
        </button>
      </div>

      <div className="admin-deliverables__filters">
        {['all', 'pending', 'approved', 'changes_requested'].map(f => (
          <button
            key={f}
            className={`admin-deliverables__filter ${filter === f ? 'admin-deliverables__filter--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f === 'changes_requested' ? 'Changes' : f.charAt(0).toUpperCase() + f.slice(1)} ({counts[f]})
          </button>
        ))}
      </div>

      {showUpload && (
        <UploadForm projects={projects} onClose={() => setShowUpload(false)} onSuccess={() => { setShowUpload(false); fetchAll(); }} />
      )}

      {filtered.length === 0 ? (
        <div className="admin-feature-page__empty"><p>No deliverables{filter !== 'all' ? ` with status "${filter}"` : ''}</p></div>
      ) : (
        <div className="admin-deliverables__list">
          {filtered.map(d => (
            <div key={d.id} className="portal-card admin-deliverables__card">
              <div className="admin-deliverables__card-header">
                <div>
                  <h4>{d.title}</h4>
                  <span className="admin-deliverables__meta">
                    {d.projects?.name} {d.project_phases?.phase_name && `· ${d.project_phases.phase_name}`}
                  </span>
                </div>
                <span className={`portal-badge portal-badge--${statusColor(d.status)}`}>
                  {formatStatus(d.status)}
                </span>
              </div>
              {d.figma_url && (
                <a href={d.figma_url} target="_blank" rel="noopener noreferrer" className="admin-deliverables__figma-link">
                  View in Figma ↗
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function UploadForm({ projects, onClose, onSuccess }) {
  const [form, setForm] = useState({ projectId: '', title: '', description: '', figmaUrl: '', phaseId: '' });
  const [phases, setPhases] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  useEffect(() => {
    if (!form.projectId) return;
    supabase.from('project_phases').select('id, phase_name').eq('project_id', form.projectId).order('sort_order')
      .then(({ data }) => setPhases(data || []));
  }, [form.projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('deliverables').insert({
        project_id: form.projectId,
        title: form.title,
        description: form.description || null,
        figma_url: form.figmaUrl || null,
        phase_id: form.phaseId || null,
      });
      if (err) throw err;
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="invite-overlay" onClick={onClose}>
      <div className="invite-modal portal-card" onClick={e => e.stopPropagation()}>
        <div className="invite-modal__header">
          <h3>Upload Deliverable</h3>
          <button className="invite-modal__close" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}
          <div className="portal-form-group">
            <label className="portal-label">Project</label>
            <select className="portal-select" value={form.projectId} onChange={update('projectId')} required>
              <option value="">Select project</option>
              {projects.map(p => <option key={p.id} value={p.id}>{p.profiles?.full_name} — {p.name}</option>)}
            </select>
          </div>
          <div className="portal-form-group">
            <label className="portal-label">Title</label>
            <input className="portal-input" value={form.title} onChange={update('title')} required />
          </div>
          <div className="portal-form-group">
            <label className="portal-label">Figma Share Link</label>
            <input className="portal-input" value={form.figmaUrl} onChange={update('figmaUrl')} placeholder="https://www.figma.com/file/..." />
          </div>
          {phases.length > 0 && (
            <div className="portal-form-group">
              <label className="portal-label">Phase</label>
              <select className="portal-select" value={form.phaseId} onChange={update('phaseId')}>
                <option value="">No phase</option>
                {phases.map(p => <option key={p.id} value={p.id}>{p.phase_name}</option>)}
              </select>
            </div>
          )}
          <div className="portal-form-group">
            <label className="portal-label">Description (optional)</label>
            <textarea className="portal-input" value={form.description} onChange={update('description')} rows={3} style={{ resize: 'vertical', minHeight: 60 }} />
          </div>
          <div className="invite-modal__actions">
            <button type="button" className="portal-btn portal-btn--secondary portal-btn--sm" onClick={onClose}>Cancel</button>
            <button type="submit" className="portal-btn portal-btn--primary portal-btn--sm" disabled={submitting}>
              {submitting ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function statusColor(s) { return { pending: 'amber', approved: 'teal', changes_requested: 'coral' }[s] || 'blue'; }
function formatStatus(s) { return { pending: 'Pending', approved: 'Approved', changes_requested: 'Changes Requested' }[s] || s; }
