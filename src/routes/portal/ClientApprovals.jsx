import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth.context';
import FigmaEmbed from '../../components/portal/figma-embed/FigmaEmbed';
import './client-approvals.scss';

export default function ClientApprovals() {
  const { user } = useAuth();
  const [deliverables, setDeliverables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeliverables();
  }, []);

  async function fetchDeliverables() {
    const { data: project } = await supabase.from('projects').select('id').limit(1).single();
    if (!project) { setLoading(false); return; }

    const { data } = await supabase
      .from('deliverables')
      .select('*, project_phases(phase_name)')
      .eq('project_id', project.id)
      .order('created_at', { ascending: false });

    setDeliverables(data || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="client-approvals">
        <h2>Approvals</h2>
        <div className="client-approvals__list">
          {[1, 2].map(i => (
            <div key={i} className="portal-card client-approvals__skeleton">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const pending = deliverables.filter(d => d.status === 'pending');
  const changesRequested = deliverables.filter(d => d.status === 'changes_requested');
  const approved = deliverables.filter(d => d.status === 'approved');

  return (
    <div className="client-approvals">
      <h2>Approvals</h2>

      {deliverables.length === 0 ? (
        <div className="client-approvals__empty portal-card">
          <p>No deliverables to review yet. They'll appear here when your team uploads designs.</p>
        </div>
      ) : (
        <>
          {pending.length > 0 && <DeliverableGroup title="Pending Review" items={pending} userId={user?.id} onUpdate={fetchDeliverables} />}
          {changesRequested.length > 0 && <DeliverableGroup title="Changes Requested" items={changesRequested} userId={user?.id} onUpdate={fetchDeliverables} />}
          {approved.length > 0 && <DeliverableGroup title="Approved" items={approved} userId={user?.id} onUpdate={fetchDeliverables} />}
        </>
      )}
    </div>
  );
}

function DeliverableGroup({ title, items, userId, onUpdate }) {
  return (
    <div className="client-approvals__group">
      <h3>{title}</h3>
      <div className="client-approvals__list">
        {items.map(d => (
          <DeliverableCard key={d.id} deliverable={d} userId={userId} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
}

function DeliverableCard({ deliverable, userId, onUpdate }) {
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyCount, setHistoryCount] = useState(0);

  useEffect(() => {
    supabase
      .from('approval_comments')
      .select('*', { count: 'exact', head: true })
      .eq('deliverable_id', deliverable.id)
      .then(({ count }) => setHistoryCount(count || 0));
  }, [deliverable.id]);

  const handleAction = async (action) => {
    if (action === 'changes_requested' && !comment.trim()) return;
    setSubmitting(true);

    try {
      await supabase.from('approval_comments').insert({
        deliverable_id: deliverable.id,
        user_id: userId,
        comment: comment.trim() || (action === 'approved' ? 'Approved' : ''),
        action,
      });

      await supabase
        .from('deliverables')
        .update({ status: action })
        .eq('id', deliverable.id);

      setComment('');
      onUpdate();
    } catch (err) {
      console.error('Approval action failed:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleHistory = async () => {
    if (!showHistory && history.length === 0) {
      const { data } = await supabase
        .from('approval_comments')
        .select('*, profiles(full_name)')
        .eq('deliverable_id', deliverable.id)
        .order('created_at');
      setHistory(data || []);
    }
    setShowHistory(!showHistory);
  };

  const isPending = deliverable.status === 'pending' || deliverable.status === 'changes_requested';

  return (
    <div className="portal-card deliverable-card">
      <div className="deliverable-card__header">
        <div>
          <h4 className="deliverable-card__title">{deliverable.title}</h4>
          {deliverable.project_phases?.phase_name && (
            <span className="portal-badge portal-badge--blue">{deliverable.project_phases.phase_name}</span>
          )}
        </div>
        <span className={`portal-badge portal-badge--${statusColor(deliverable.status)}`}>
          {formatStatus(deliverable.status)}
        </span>
      </div>

      {deliverable.description && (
        <p className="deliverable-card__desc">{deliverable.description}</p>
      )}

      {deliverable.figma_url && (
        <div className="deliverable-card__embed">
          <FigmaEmbed url={deliverable.figma_url} title={deliverable.title} />
        </div>
      )}

      {isPending && (
        <div className="deliverable-card__actions">
          <textarea
            className="portal-input deliverable-card__comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment (required for change requests)..."
            rows={2}
          />
          <div className="deliverable-card__buttons">
            <button
              className="portal-btn portal-btn--success portal-btn--sm"
              onClick={() => handleAction('approved')}
              disabled={submitting}
            >
              Approve
            </button>
            <button
              className="portal-btn portal-btn--secondary portal-btn--sm"
              onClick={() => handleAction('changes_requested')}
              disabled={submitting || !comment.trim()}
            >
              Request Changes
            </button>
          </div>
        </div>
      )}

      {historyCount > 0 && (
        <div className="deliverable-card__history">
          <button className="deliverable-card__history-toggle" onClick={toggleHistory}>
            {showHistory ? 'Hide' : 'View'} history ({historyCount})
          </button>

          {showHistory && (
            <div className="deliverable-card__history-list">
              {history.map(entry => (
                <div key={entry.id} className="history-entry">
                  <span className={`portal-badge portal-badge--${actionColor(entry.action)}`}>
                    {formatAction(entry.action)}
                  </span>
                  <span className="history-entry__author">{entry.profiles?.full_name || 'Unknown'}</span>
                  <span className="history-entry__date">{new Date(entry.created_at).toLocaleDateString()}</span>
                  {entry.comment && <p className="history-entry__comment">{entry.comment}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function statusColor(s) {
  return { pending: 'amber', approved: 'teal', changes_requested: 'coral' }[s] || 'blue';
}
function formatStatus(s) {
  return { pending: 'Pending', approved: 'Approved', changes_requested: 'Changes Requested' }[s] || s;
}
function actionColor(a) {
  return { approved: 'teal', changes_requested: 'coral', comment: 'blue' }[a] || 'blue';
}
function formatAction(a) {
  return { approved: 'Approved', changes_requested: 'Changes Requested', comment: 'Comment' }[a] || a;
}
