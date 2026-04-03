import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { inviteClient } from '../../lib/admin';
import './admin-clients.scss';

const PROJECT_TYPES = [
  { value: 'static_website', label: 'Static Website' },
  { value: 'shopify', label: 'Shopify Ecommerce' },
  { value: 'agent_development', label: 'Agent Development' },
  { value: 'crm', label: 'CRM' },
  { value: 'workflow_consulting', label: 'Workflow Consulting' },
];

export default function AdminClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInvite, setShowInvite] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    const { data } = await supabase
      .from('profiles')
      .select('id, full_name, company_name, email, created_at, projects(id, name, type, status)')
      .eq('role', 'client')
      .order('created_at', { ascending: false });

    setClients(data || []);
    setLoading(false);
  }

  return (
    <div className="admin-clients">
      <div className="admin-clients__header">
        <h2>Clients</h2>
        <button
          className="portal-btn portal-btn--primary portal-btn--sm"
          onClick={() => setShowInvite(true)}
        >
          + Invite Client
        </button>
      </div>

      {showInvite && (
        <InviteForm
          onClose={() => setShowInvite(false)}
          onSuccess={() => { setShowInvite(false); fetchClients(); }}
        />
      )}

      {loading ? (
        <div className="admin-clients__list">
          {[1, 2, 3].map(i => (
            <div key={i} className="portal-card admin-clients__skeleton">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      ) : clients.length === 0 ? (
        <div className="admin-clients__empty">
          <p>No clients yet. Invite your first client to get started.</p>
        </div>
      ) : (
        <div className="admin-clients__list">
          {clients.map(client => (
            <div key={client.id} className="portal-card admin-clients__row">
              <div className="portal-avatar portal-avatar--md">
                {(client.full_name || client.email).slice(0, 2).toUpperCase()}
              </div>
              <div className="admin-clients__info">
                <span className="admin-clients__name">{client.full_name || 'Unnamed'}</span>
                <span className="admin-clients__company">{client.company_name || client.email}</span>
              </div>
              <div className="admin-clients__project">
                {client.projects?.[0] ? (
                  <>
                    <span className="admin-clients__project-name">{client.projects[0].name}</span>
                    <span className={`portal-badge portal-badge--${statusColor(client.projects[0].status)}`}>
                      {client.projects[0].status}
                    </span>
                  </>
                ) : (
                  <span className="admin-clients__no-project">No project</span>
                )}
              </div>
              <span className="admin-clients__date">
                {new Date(client.created_at).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InviteForm({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    email: '', fullName: '', companyName: '', projectName: '', projectType: 'static_website',
  });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await inviteClient(form);
      onSuccess();
    } catch (err) {
      setError(err.message || 'Failed to invite client');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="invite-overlay" onClick={onClose}>
      <div className="invite-modal portal-card" onClick={e => e.stopPropagation()}>
        <div className="invite-modal__header">
          <h3>Invite Client</h3>
          <button className="invite-modal__close" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}

          <div className="portal-form-group">
            <label className="portal-label">Email</label>
            <input className="portal-input" type="email" value={form.email} onChange={update('email')} required autoFocus />
          </div>

          <div className="portal-form-group">
            <label className="portal-label">Full Name</label>
            <input className="portal-input" type="text" value={form.fullName} onChange={update('fullName')} required />
          </div>

          <div className="portal-form-group">
            <label className="portal-label">Company Name</label>
            <input className="portal-input" type="text" value={form.companyName} onChange={update('companyName')} />
          </div>

          <div className="portal-form-group">
            <label className="portal-label">Project Name</label>
            <input className="portal-input" type="text" value={form.projectName} onChange={update('projectName')} required />
          </div>

          <div className="portal-form-group">
            <label className="portal-label">Project Type</label>
            <select className="portal-select" value={form.projectType} onChange={update('projectType')}>
              {PROJECT_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div className="invite-modal__actions">
            <button type="button" className="portal-btn portal-btn--secondary portal-btn--sm" onClick={onClose}>Cancel</button>
            <button type="submit" className="portal-btn portal-btn--primary portal-btn--sm" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Invite'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function statusColor(status) {
  const map = { onboarding: 'amber', active: 'purple', completed: 'teal', paused: 'coral' };
  return map[status] || 'blue';
}
