-- ============================================================
-- INFRA-10: Deliverables and approval tables
-- ============================================================

create table public.deliverables (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  phase_id uuid references public.project_phases(id) on delete set null,
  title text not null,
  description text,
  figma_url text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'changes_requested')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger deliverables_updated_at
  before update on public.deliverables
  for each row execute function public.set_updated_at();

create index idx_deliverables_project on public.deliverables(project_id);
create index idx_deliverables_phase on public.deliverables(phase_id);
create index idx_deliverables_status on public.deliverables(status);

-- Approval comments / history
create table public.approval_comments (
  id uuid primary key default gen_random_uuid(),
  deliverable_id uuid not null references public.deliverables(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  comment text not null,
  action text check (action in ('comment', 'approved', 'changes_requested')),
  created_at timestamptz not null default now()
);

create index idx_approval_comments_deliverable on public.approval_comments(deliverable_id);

-- RLS
alter table public.deliverables enable row level security;
alter table public.approval_comments enable row level security;

-- Deliverables
create policy "Admins can view all deliverables"
  on public.deliverables for select
  using (public.is_admin());

create policy "Admins can manage deliverables"
  on public.deliverables for all
  using (public.is_admin());

create policy "Clients can view own deliverables"
  on public.deliverables for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- Clients can update status (approve / request changes)
create policy "Clients can update own deliverable status"
  on public.deliverables for update
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- Approval comments
create policy "Admins can view all comments"
  on public.approval_comments for select
  using (public.is_admin());

create policy "Admins can manage comments"
  on public.approval_comments for all
  using (public.is_admin());

create policy "Clients can view own project comments"
  on public.approval_comments for select
  using (
    deliverable_id in (
      select d.id from public.deliverables d
      join public.projects p on d.project_id = p.id
      where p.client_id = auth.uid()
    )
  );

create policy "Clients can insert comments on own deliverables"
  on public.approval_comments for insert
  with check (
    user_id = auth.uid()
    and deliverable_id in (
      select d.id from public.deliverables d
      join public.projects p on d.project_id = p.id
      where p.client_id = auth.uid()
    )
  );
