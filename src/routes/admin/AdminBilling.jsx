import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './admin-feature-pages.scss';
import './admin-billing.scss';

export default function AdminBilling() {
  const [clients, setClients] = useState([]);
  const [billingData, setBillingData] = useState({});
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({ totalOutstanding: 0, overdueCount: 0 });

  useEffect(() => {
    async function fetchAll() {
      const { data: clientList } = await supabase
        .from('profiles')
        .select('id, full_name, company_name, email')
        .eq('role', 'client')
        .order('full_name');

      if (!clientList?.length) { setLoading(false); return; }
      setClients(clientList);

      // Fetch billing for each client in parallel
      const results = await Promise.allSettled(
        clientList.map(async (client) => {
          const { data } = await supabase.functions.invoke('waveapps-billing', {
            body: { email: client.email },
          });
          return { clientId: client.id, data };
        })
      );

      const billingMap = {};
      let totalOutstanding = 0;
      let overdueCount = 0;

      results.forEach((result) => {
        if (result.status === 'fulfilled' && result.value.data) {
          const { clientId, data } = result.value;
          billingMap[clientId] = data;
          if (data.summary) {
            totalOutstanding += data.summary.totalDue || 0;
            overdueCount += data.summary.overdueCount || 0;
          }
        }
      });

      setBillingData(billingMap);
      setSummary({ totalOutstanding, overdueCount });
      setLoading(false);
    }

    fetchAll();
  }, []);

  if (loading) {
    return (
      <div className="admin-feature-page">
        <h2>Billing Overview</h2>
        <div className="admin-billing__stats">
          {[1, 2].map(i => (
            <div key={i} className="portal-stat-card">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-feature-page">
      <h2>Billing Overview</h2>

      {/* FE-52: Summary stat cards */}
      <div className="admin-billing__stats">
        <div className="portal-stat-card">
          <span className="stat-label">Total Outstanding</span>
          <span className="stat-value stat-value--amber">{formatCurrency(summary.totalOutstanding)}</span>
        </div>
        <div className="portal-stat-card">
          <span className="stat-label">Overdue Accounts</span>
          <span className="stat-value stat-value--coral">{summary.overdueCount}</span>
        </div>
      </div>

      {/* FE-51: Client billing list */}
      <div className="admin-billing__list">
        {clients.map((client) => {
          const data = billingData[client.id];
          const found = data?.found;
          const s = data?.summary;

          return (
            <div key={client.id} className="portal-card admin-billing__row">
              <div className="portal-avatar portal-avatar--sm">
                {(client.full_name || client.email).slice(0, 2).toUpperCase()}
              </div>
              <div className="admin-billing__client-info">
                <span className="admin-billing__client-name">{client.full_name || 'Unnamed'}</span>
                <span className="admin-billing__client-company">{client.company_name || client.email}</span>
              </div>

              {!found ? (
                <span className="admin-billing__no-data">No billing data</span>
              ) : (
                <div className="admin-billing__amounts">
                  <div className="admin-billing__amount">
                    <span className="admin-billing__amount-label">Paid</span>
                    <span className="admin-billing__amount-value">{formatCurrency(s?.totalPaid)}</span>
                  </div>
                  <div className="admin-billing__amount">
                    <span className="admin-billing__amount-label">Due</span>
                    <span className="admin-billing__amount-value">{formatCurrency(s?.totalDue)}</span>
                  </div>
                  {s?.overdueCount > 0 && (
                    <span className="portal-badge portal-badge--coral">{s.overdueCount} overdue</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount || 0);
}
