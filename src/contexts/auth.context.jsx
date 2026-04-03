import { createContext, useContext, useEffect, useState } from 'react';
import { getUser, getUserRole, onAuthStateChange, signIn, signOut } from '../lib/auth';

const AuthContext = createContext({
  user: null,
  role: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial session
    getUser()
      .then((u) => {
        setUser(u);
        setRole(getUserRole(u));
      })
      .catch(() => {
        setUser(null);
        setRole(null);
      })
      .finally(() => setLoading(false));

    // Subscribe to auth changes
    const unsubscribe = onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setRole(getUserRole(currentUser));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async (email, password) => {
    const { data, error } = await signIn(email, password);
    if (error) throw error;
    return data;
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) throw error;
  };

  const value = {
    user,
    role,
    loading,
    isAdmin: role === 'admin',
    isClient: role === 'client',
    isAuthenticated: !!user,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
