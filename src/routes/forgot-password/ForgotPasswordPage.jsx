import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../lib/auth';
import './forgot-password-page.scss';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { error: resetError } = await resetPassword(email);
      if (resetError) throw resetError;
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-page portal">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <h2 className="forgot-password-title">hekatek</h2>
          <p className="forgot-password-subtitle">Client Portal</p>
        </div>

        {submitted ? (
          <div className="forgot-password-success">
            <div className="forgot-password-success__icon">&#10003;</div>
            <h3 className="forgot-password-success__heading">Check your email</h3>
            <p className="forgot-password-success__body">
              We sent a reset link to <strong>{email}</strong>. Follow the link to choose a new password.
            </p>
            <Link to="/login" className="forgot-password-back">Back to sign in</Link>
          </div>
        ) : (
          <>
            <div className="forgot-password-intro">
              <h3 className="forgot-password-heading">Forgot your password?</h3>
              <p className="forgot-password-description">Enter your email and we'll send you a reset link.</p>
            </div>

            <form className="forgot-password-form" onSubmit={handleSubmit}>
              {error && <div className="forgot-password-error">{error}</div>}
              <div className="portal-form-group">
                <label className="portal-label" htmlFor="email">Email</label>
                <input id="email" className="portal-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required autoComplete="email" autoFocus />
              </div>
              <button type="submit" className="portal-btn portal-btn--primary portal-btn--md portal-btn--full" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <Link to="/login" className="forgot-password-back">Back to sign in</Link>
          </>
        )}
      </div>
    </div>
  );
}
