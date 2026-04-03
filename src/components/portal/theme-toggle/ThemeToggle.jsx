import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../lib/supabase';
import { useAuth } from '../../../contexts/auth.context';
import './theme-toggle.scss';

const STORAGE_KEY = 'hekatek-theme';

function getInitialTheme(user) {
  // Priority: user metadata > localStorage > default light
  const metaTheme = user?.user_metadata?.theme;
  if (metaTheme === 'dark' || metaTheme === 'light') return metaTheme;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage unavailable
  }

  return 'light';
}

function applyTheme(theme) {
  const portal = document.querySelector('.portal');
  if (!portal) return;

  if (theme === 'dark') {
    portal.classList.add('dark');
  } else {
    portal.classList.remove('dark');
  }
}

export default function ThemeToggle() {
  const { user } = useAuth();
  const [theme, setTheme] = useState(() => getInitialTheme(user));

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Sync when user changes (e.g., login)
  useEffect(() => {
    const preferred = getInitialTheme(user);
    setTheme(preferred);
  }, [user]);

  const toggle = useCallback(async () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    applyTheme(next);

    // Persist to localStorage immediately
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable
    }

    // Persist to Supabase user metadata (fire and forget)
    if (user) {
      supabase.auth.updateUser({ data: { theme: next } }).catch(() => {});
    }
  }, [theme, user]);

  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__track" data-active={isDark ? 'dark' : 'light'}>
        <span className="theme-toggle__icon theme-toggle__icon--sun">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </span>
        <span className="theme-toggle__thumb" />
        <span className="theme-toggle__icon theme-toggle__icon--moon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

// Export helper for applying theme before React renders (prevents flash)
export { getInitialTheme, applyTheme };
