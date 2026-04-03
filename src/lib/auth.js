import { supabase } from './supabase';

/**
 * Sign in with email and password.
 * Returns { data, error } — data.session and data.user on success.
 */
export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

/**
 * Sign out the current user. Clears session from browser.
 */
export async function signOut() {
  return supabase.auth.signOut();
}

/**
 * Get the current session (JWT + user). Returns null if not authenticated.
 */
export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

/**
 * Get the current user from session. Returns null if not authenticated.
 */
export async function getUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

/**
 * Extract user role from Supabase user metadata.
 * Returns 'admin', 'client', or null.
 */
export function getUserRole(user) {
  return user?.user_metadata?.role ?? null;
}

/**
 * Subscribe to auth state changes (sign in, sign out, token refresh).
 * Returns an unsubscribe function.
 */
export function onAuthStateChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => callback(event, session)
  );
  return subscription.unsubscribe;
}

/**
 * Send password reset email via Supabase Auth.
 */
export async function resetPassword(email) {
  return supabase.auth.resetPasswordForEmail(email);
}

/**
 * Update password (used after clicking reset link).
 */
export async function updatePassword(newPassword) {
  return supabase.auth.updateUser({ password: newPassword });
}

/**
 * Admin-only: Invite a new client by email.
 * Sets role to 'client' in user metadata.
 * Requires service_role key — call via Edge Function in production.
 */
export async function inviteClient(email, metadata = {}) {
  return supabase.auth.admin.inviteUserByEmail(email, {
    data: { role: 'client', ...metadata },
  });
}
