import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../../lib/auth';
import './invite-accept-page.scss';

export default function InviteAcceptPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setSubmitting(true);
    try {
      const { error: updateError } = await updatePassword(newPassword);
      if (updateError) throw updateError;
      navigate('/portal', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to set password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="invite-accept-page portal">
      <div className="invite-accept-card">
        <div className="invite-accept-header">
          <h2 className="invite-accept-title">hekatek</h2>
          <p className="invite-accept-subtitle">Client Portal</p>
        </div>

        <div className="invite-accept-intro">
          <h3 className="invite-accept-heading">Set Your Password</h3>
          <p className="invite-accept-description">Welcome! Choose a password to activate your account.</p>
        </div>

        <form className="invite-accept-form" onSubmit={handleSubmit}>
          {error && <div className="invite-accept-error">{error}</div>}

          <div className="portal-form-group">
            <label className="portal-label" htmlFor="new-password">New Password</label>
            <input id="new-password" className="portal-input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="At least 8 characters" required autoComplete="new-password" autoFocus />
          </div>

          <div className="portal-form-group">
            <label className="portal-label" htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" className="portal-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter your password" required autoComplete="new-password" />
          </div>

          <button type="submit" className="portal-btn portal-btn--primary portal-btn--md portal-btn--full" disabled={submitting}>
            {submitting ? 'Setting password...' : 'Activate Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
