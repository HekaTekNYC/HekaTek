import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/auth.context';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import './portal-layout.scss';

export default function PortalLayout({ navItems, title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const initials = user?.user_metadata?.name
    ? user.user_metadata.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : user?.email?.slice(0, 2).toUpperCase() || '??';

  return (
    <div className={`portal-layout portal ${sidebarOpen ? '' : 'portal-layout--collapsed'}`}>
      {/* Sidebar */}
      <aside className="portal-sidebar">
        <div className="portal-sidebar__header">
          <span className="portal-sidebar__logo">hekatek</span>
          <button
            className="portal-sidebar__collapse"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {sidebarOpen
                ? <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        <nav className="portal-sidebar__nav">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to.split('/').length <= 2}
              className={({ isActive }) =>
                `portal-sidebar__link ${isActive ? 'portal-sidebar__link--active' : ''}`
              }
            >
              <span className="portal-sidebar__link-icon">{icon}</span>
              <span className="portal-sidebar__link-label">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="portal-sidebar__footer">
          <button className="portal-sidebar__signout" onClick={handleSignOut}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span className="portal-sidebar__link-label">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="portal-main">
        {/* Topbar */}
        <header className="portal-topbar">
          <button
            className="portal-topbar__hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <h4 className="portal-topbar__title">{title}</h4>

          <div className="portal-topbar__actions">
            <ThemeToggle />
            <div className="portal-avatar portal-avatar--sm" title={user?.email}>
              {initials}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="portal-content">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="portal-layout__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
