-- ============================================================
-- INFRA-09: Project phases table
-- ============================================================

create table public.project_phases (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  phase_name text not null,
  sort_order int not null default 0,
  status text not null default 'upcoming' check (status in ('upcoming', 'in_progress', 'completed')),
  start_date date,
  end_date date,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create trigger project_phases_updated_at
  before update on public.project_phases
  for each row execute function public.set_updated_at();

create index idx_project_phases_project on public.project_phases(project_id);

-- RLS
alter table public.project_phases enable row level security;

create policy "Admins can view all phases"
  on public.project_phases for select
  using (public.is_admin());

create policy "Admins can manage phases"
  on public.project_phases for all
  using (public.is_admin());

-- Clients: read-only on own project phases
create policy "Clients can view own project phases"
  on public.project_phases for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );
