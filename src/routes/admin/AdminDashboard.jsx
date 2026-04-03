import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import './admin-dashboard.scss';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    activeClients: 0,
    projectsInProgress: 0,
    pendingApprovals: 0,
    overdueItems: 0,
  });
  const [recentClients, setRecentClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [
          { count: clientCount },
          { data: projects },
          { count: pendingCount },
          { data: clients },
        ] = await Promise.all([
          supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'client'),
          supabase.from('projects').select('status'),
          supabase.from('deliverables').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('profiles').select('id, full_name, company_name, email, created_at').eq('role', 'client').order('created_at', { ascending: false }).limit(5),
        ]);

        const activeProjects = projects?.filter(p => p.status === 'active').length || 0;

        setStats({
          activeClients: clientCount || 0,
          projectsInProgress: activeProjects,
          pendingApprovals: pendingCount || 0,
          overdueItems: 0,
        });

        setRecentClients(clients || []);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="admin-dashboard">
        <h2>Dashboard</h2>
        <div className="admin-dashboard__stats">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="portal-stat-card portal-stat-card--skeleton">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    { label: 'Active Clients', value: stats.activeClients, color: 'purple' },
    { label: 'Projects in Progress', value: stats.projectsInProgress, color: 'blue' },
    { label: 'Pending Approvals', value: stats.pendingApprovals, color: 'amber' },
    { label: 'Overdue Items', value: stats.overdueItems, color: 'coral' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h2>Dashboard</h2>
        <Link to="/admin/clients" className="portal-btn portal-btn--primary portal-btn--sm">
          + Invite Client
        </Link>
      </div>

      <div className="admin-dashboard__stats">
        {statCards.map(({ label, value, color }) => (
          <div key={label} className="portal-stat-card">
            <span className="stat-label">{label}</span>
            <span className={`stat-value stat-value--${color}`}>{value}</span>
          </div>
        ))}
      </div>

      <div className="admin-dashboard__section">
        <h3>Recent Clients</h3>
        {recentClients.length === 0 ? (
          <div className="admin-dashboard__empty">
            <p>No clients yet. Invite your first client to get started.</p>
          </div>
        ) : (
          <div className="admin-dashboard__client-list">
            {recentClients.map(client => (
              <div key={client.id} className="portal-card admin-dashboard__client-row">
                <div className="portal-avatar portal-avatar--sm">
                  {(client.full_name || client.email).slice(0, 2).toUpperCase()}
                </div>
                <div className="admin-dashboard__client-info">
                  <span className="admin-dashboard__client-name">
                    {client.full_name || 'Unnamed'}
                  </span>
                  <span className="admin-dashboard__client-detail">
                    {client.company_name || client.email}
                  </span>
                </div>
                <span className="admin-dashboard__client-date">
                  {new Date(client.created_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
