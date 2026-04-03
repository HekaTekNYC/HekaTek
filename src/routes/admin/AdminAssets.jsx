import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './admin-feature-pages.scss';

export default function AdminAssets() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [checklist, setChecklist] = useState(null);
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

  async function loadChecklist(projectId) {
    setSelectedProject(projectId);
    const { data } = await supabase
      .from('asset_checklists')
      .select('*')
      .eq('project_id', projectId)
      .single();
    setChecklist(data);
  }

  async function markReceived(itemIndex) {
    if (!checklist) return;
    const updated = [...checklist.items];
    updated[itemIndex] = { ...updated[itemIndex], status: 'received' };
    await supabase.from('asset_checklists').update({ items: updated }).eq('id', checklist.id);
    setChecklist({ ...checklist, items: updated });
  }

  if (loading) return <div className="admin-feature-page"><h2>Asset Management</h2></div>;

  const items = checklist?.items || [];
  const uploaded = items.filter(i => i.status === 'uploaded' || i.status === 'received').length;

  return (
    <div className="admin-feature-page">
      <h2>Asset Management</h2>

      <div className="admin-feature-page__split">
        <div className="admin-feature-page__sidebar-list">
          {projects.map(p => (
            <button
              key={p.id}
              className={`admin-feature-page__list-item ${selectedProject === p.id ? 'admin-feature-page__list-item--active' : ''}`}
              onClick={() => loadChecklist(p.id)}
            >
              <span className="admin-feature-page__list-name">{p.profiles?.full_name || 'Unnamed'}</span>
              <span className="admin-feature-page__list-sub">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="admin-feature-page__detail">
          {!checklist ? (
            <div className="admin-feature-page__select-prompt"><p>Select a client to view their assets</p></div>
          ) : (
            <>
              <div className="admin-assets__progress">
                <span>{uploaded} of {items.length} items received</span>
                <div className="portal-progress">
                  <div className="portal-progress__fill portal-progress__fill--teal" style={{ width: `${items.length > 0 ? (uploaded / items.length) * 100 : 0}%` }} />
                </div>
              </div>

              <div className="admin-assets__list">
                {items.map((item, idx) => (
                  <div key={idx} className="portal-card admin-assets__item">
                    <div className="admin-assets__item-header">
                      <span className="admin-assets__item-name">{item.name}</span>
                      <span className={`portal-badge portal-badge--${item.status === 'received' ? 'teal' : item.status === 'uploaded' ? 'amber' : 'blue'}`}>
                        {item.status === 'received' ? '✓ Received' : item.status === 'uploaded' ? 'Uploaded' : 'Pending'}
                      </span>
                    </div>

                    {item.file_url && (
                      <div className="admin-assets__item-file">
                        <a href={item.file_url} target="_blank" rel="noopener noreferrer" className="admin-assets__download">
                          {item.file_name || 'Download'}
                        </a>
                        {item.status === 'uploaded' && (
                          <button className="portal-btn portal-btn--success portal-btn--sm" onClick={() => markReceived(idx)}>
                            Mark Received
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
