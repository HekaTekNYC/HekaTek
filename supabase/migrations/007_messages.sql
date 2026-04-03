-- ============================================================
-- INFRA-11: Messages table with RLS
-- ============================================================

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create index idx_messages_project on public.messages(project_id);
create index idx_messages_created on public.messages(project_id, created_at);

-- RLS
alter table public.messages enable row level security;

-- Admins can see all messages (unified inbox)
create policy "Admins can view all messages"
  on public.messages for select
  using (public.is_admin());

create policy "Admins can insert messages"
  on public.messages for insert
  with check (public.is_admin() and sender_id = auth.uid());

-- Clients can view messages in their own project thread
create policy "Clients can view own project messages"
  on public.messages for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- Clients can send messages in their own project thread
create policy "Clients can send messages in own project"
  on public.messages for insert
  with check (
    sender_id = auth.uid()
    and project_id in (select id from public.projects where client_id = auth.uid())
  );
