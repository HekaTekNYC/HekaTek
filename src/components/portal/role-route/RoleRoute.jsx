import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/auth.context';

export default function RoleRoute({ allowedRole, children }) {
  const { role, loading } = useAuth();

  if (loading) {
    return (
      <div className="portal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="portal-loading-spinner" />
      </div>
    );
  }

  if (role !== allowedRole) {
    // Wrong role — redirect to their correct dashboard
    if (role === 'admin') return <Navigate to="/admin" replace />;
    if (role === 'client') return <Navigate to="/portal" replace />;
    // No role at all — back to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
