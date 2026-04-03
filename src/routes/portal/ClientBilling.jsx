import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth.context';
import './client-billing.scss';

export default function ClientBilling() {
  const { user } = useAuth();
  const [billing, setBilling] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBilling() {
      try {
        const { data, error: fnError } = await supabase.functions.invoke('waveapps-billing', {
          body: { email: user?.email },
        });

        if (fnError) throw fnError;
        setBilling(data);
      } catch (err) {
        console.error('Billing fetch error:', err);
        setError(err.message || 'Unable to load billing information');
      } finally {
        setLoading(false);
      }
    }

    if (user?.email) fetchBilling();
    else setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <div className="client-billing">
        <h2>Billing</h2>
        <div className="client-billing__skeleton">
          {[1, 2, 3].map(i => (
            <div key={i} className="portal-card">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="client-billing">
        <h2>Billing</h2>
        <div className="portal-card client-billing__error">
          <p>Unable to load billing information. Please try again later or contact Hekatek.</p>
        </div>
      </div>
    );
  }

  // FE-40: No-match state
  if (!billing?.found) {
    return (
      <div className="client-billing">
        <h2>Billing</h2>
        <div className="portal-card client-billing__no-match">
          <div className="client-billing__no-match-icon">$</div>
          <h3>No invoices found</h3>
          <p>We couldn't find any invoices linked to your email. If you believe this is an error, please contact Hekatek.</p>
        </div>
      </div>
    );
  }

  const { invoices, summary } = billing;

  return (
    <div className="client-billing">
      <h2>Billing</h2>

      {/* FE-38: Payment progress */}
      {summary && (
        <div className="portal-card client-billing__summary">
          <div className="client-billing__summary-grid">
            <div className="client-billing__summary-item">
              <span className="client-billing__summary-label">Total</span>
              <span className="client-billing__summary-value">{formatCurrency(summary.totalAmount)}</span>
            </div>
            <div className="client-billing__summary-item">
              <span className="client-billing__summary-label">Paid</span>
              <span className="client-billing__summary-value client-billing__summary-value--teal">{formatCurrency(summary.totalPaid)}</span>
            </div>
            <div className="client-billing__summary-item">
              <span className="client-billing__summary-label">Outstanding</span>
              <span className="client-billing__summary-value client-billing__summary-value--amber">{formatCurrency(summary.totalDue)}</span>
            </div>
          </div>

          {summary.invoiceCount > 0 && (
            <div className="client-billing__progress-section">
              <span className="client-billing__progress-label">
                Payment {summary.paidCount} of {summary.invoiceCount} — {formatCurrency(summary.totalPaid)} of {formatCurrency(summary.totalAmount)} paid
              </span>
              <div className="portal-progress">
                <div
                  className="portal-progress__fill portal-progress__fill--teal"
                  style={{ width: `${summary.totalAmount > 0 ? (summary.totalPaid / summary.totalAmount) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}

          {summary.overdueCount > 0 && (
            <div className="client-billing__overdue-warning">
              <span className="portal-badge portal-badge--coral">{summary.overdueCount} overdue</span>
            </div>
          )}
        </div>
      )}

      {/* FE-37: Invoice list */}
      <div className="client-billing__section">
        <h3>Invoices</h3>
        {invoices.length === 0 ? (
          <div className="portal-card client-billing__empty">
            <p>No invoices yet.</p>
          </div>
        ) : (
          <div className="client-billing__invoice-list">
            {invoices.map((inv) => (
              <div key={inv.id} className="portal-card client-billing__invoice">
                <div className="client-billing__invoice-header">
                  <div>
                    <span className="client-billing__invoice-number">#{inv.number}</span>
                    <span className="client-billing__invoice-date">{formatDate(inv.date)}</span>
                  </div>
                  <span className={`portal-badge portal-badge--${statusColor(inv.status)}`}>
                    {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                  </span>
                </div>

                <div className="client-billing__invoice-amounts">
                  <div className="client-billing__invoice-amount">
                    <span className="client-billing__invoice-amount-label">Total</span>
                    <span className="client-billing__invoice-amount-value">{formatCurrency(inv.total)}</span>
                  </div>
                  <div className="client-billing__invoice-amount">
                    <span className="client-billing__invoice-amount-label">Paid</span>
                    <span className="client-billing__invoice-amount-value">{formatCurrency(inv.amountPaid)}</span>
                  </div>
                  <div className="client-billing__invoice-amount">
                    <span className="client-billing__invoice-amount-label">Due</span>
                    <span className="client-billing__invoice-amount-value">{formatCurrency(inv.amountDue)}</span>
                  </div>
                </div>

                {inv.dueDate && inv.status !== 'paid' && (
                  <span className={`client-billing__due-date ${inv.status === 'overdue' ? 'client-billing__due-date--overdue' : ''}`}>
                    Due {formatDate(inv.dueDate)}
                  </span>
                )}

                {inv.pdfUrl && (
                  <a href={inv.pdfUrl} target="_blank" rel="noopener noreferrer" className="client-billing__pdf-link">
                    Download PDF ↓
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FE-39: Payment history */}
      {invoices.some(inv => inv.amountPaid > 0) && (
        <div className="client-billing__section">
          <h3>Payment History</h3>
          <div className="client-billing__history">
            {invoices
              .filter(inv => inv.amountPaid > 0)
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((inv) => (
                <div key={inv.id} className="client-billing__history-row">
                  <span className="client-billing__history-date">{formatDate(inv.date)}</span>
                  <span className="client-billing__history-desc">Invoice #{inv.number}</span>
                  <span className="client-billing__history-amount">{formatCurrency(inv.amountPaid)}</span>
                  <span className="portal-badge portal-badge--teal">Paid</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount || 0);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function statusColor(status) {
  return { paid: 'teal', pending: 'amber', overdue: 'coral' }[status] || 'blue';
}
