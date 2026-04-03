import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import './login-page.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { signIn, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already authenticated, redirect to their dashboard
  if (isAuthenticated && role) {
    const dest = role === 'admin' ? '/admin' : '/portal';
    navigate(dest, { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await signIn(email, password);
      const from = location.state?.from?.pathname;
      navigate(from || '/portal', { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page portal">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">hekatek</h2>
          <p className="login-subtitle">Client Portal</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="login-error">{error}</div>
          )}

          <div className="portal-form-group">
            <label className="portal-label" htmlFor="email">Email</label>
            <input
              id="email"
              className="portal-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              autoFocus
            />
          </div>

          <div className="portal-form-group">
            <label className="portal-label" htmlFor="password">Password</label>
            <input
              id="password"
              className="portal-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="portal-btn portal-btn--primary portal-btn--md portal-btn--full"
            disabled={submitting}
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>

          <Link to="/forgot-password" className="login-forgot">
            Forgot your password?
          </Link>
        </form>
      </div>
    </div>
  );
}
