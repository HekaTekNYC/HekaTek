-- ============================================================
-- INFRA-05: Core tables — profiles, projects
-- ============================================================

-- profiles extends auth.users with app-specific fields
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'client' check (role in ('admin', 'client')),
  full_name text,
  company_name text,
  email text not null,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-create profile on signup/invite
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'role', 'client'),
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- projects
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('static_website', 'shopify', 'agent_development', 'crm', 'workflow_consulting')),
  status text not null default 'onboarding' check (status in ('onboarding', 'active', 'completed', 'paused')),
  client_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger projects_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- Indexes
create index idx_projects_client_id on public.projects(client_id);
create index idx_projects_status on public.projects(status);
