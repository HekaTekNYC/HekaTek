-- ============================================================
-- INFRA-06: Row Level Security policies
-- Admin: read/write all. Client: read/write own data only.
-- ============================================================

-- Helper: check if current user is admin
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- ---- PROFILES ----
alter table public.profiles enable row level security;

-- Admins can see all profiles
create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

-- Clients can see their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (id = auth.uid());

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- Admins can update any profile
create policy "Admins can update any profile"
  on public.profiles for update
  using (public.is_admin());

-- Admins can insert profiles (for invite flow)
create policy "Admins can insert profiles"
  on public.profiles for insert
  with check (public.is_admin());

-- Allow trigger-based insert (service role)
create policy "Service can insert profiles"
  on public.profiles for insert
  with check (true);

-- ---- PROJECTS ----
alter table public.projects enable row level security;

-- Admins can do everything with projects
create policy "Admins can view all projects"
  on public.projects for select
  using (public.is_admin());

create policy "Admins can insert projects"
  on public.projects for insert
  with check (public.is_admin());

create policy "Admins can update projects"
  on public.projects for update
  using (public.is_admin());

create policy "Admins can delete projects"
  on public.projects for delete
  using (public.is_admin());

-- Clients can view their own projects
create policy "Clients can view own projects"
  on public.projects for select
  using (client_id = auth.uid());
