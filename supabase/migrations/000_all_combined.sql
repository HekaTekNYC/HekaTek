-- ============================================================
-- Hekatek Client Portal — Complete Database Setup
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ============================================================

-- ============================================================
-- 1. CORE TABLES (profiles, projects)
-- ============================================================

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

create index idx_projects_client_id on public.projects(client_id);
create index idx_projects_status on public.projects(status);

-- ============================================================
-- 2. RLS POLICIES
-- ============================================================

create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- Profiles RLS
alter table public.profiles enable row level security;

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

create policy "Users can view own profile"
  on public.profiles for select
  using (id = auth.uid());

create policy "Users can update own profile"
  on public.profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "Admins can update any profile"
  on public.profiles for update
  using (public.is_admin());

create policy "Admins can insert profiles"
  on public.profiles for insert
  with check (public.is_admin());

create policy "Service can insert profiles"
  on public.profiles for insert
  with check (true);

-- Projects RLS
alter table public.projects enable row level security;

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

create policy "Clients can view own projects"
  on public.projects for select
  using (client_id = auth.uid());

-- ============================================================
-- 3. QUESTIONNAIRE TABLES
-- ============================================================

create table public.questionnaire_templates (
  id uuid primary key default gen_random_uuid(),
  project_type text not null unique check (project_type in ('static_website', 'shopify', 'agent_development', 'crm', 'workflow_consulting')),
  title text not null,
  sections jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger questionnaire_templates_updated_at
  before update on public.questionnaire_templates
  for each row execute function public.set_updated_at();

create table public.questionnaire_responses (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  template_id uuid not null references public.questionnaire_templates(id),
  responses jsonb not null default '{}',
  current_section int not null default 0,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id)
);

create trigger questionnaire_responses_updated_at
  before update on public.questionnaire_responses
  for each row execute function public.set_updated_at();

create index idx_questionnaire_responses_project on public.questionnaire_responses(project_id);

alter table public.questionnaire_templates enable row level security;
alter table public.questionnaire_responses enable row level security;

create policy "Authenticated users can view templates"
  on public.questionnaire_templates for select
  using (auth.uid() is not null);

create policy "Admins can manage templates"
  on public.questionnaire_templates for all
  using (public.is_admin());

create policy "Admins can view all responses"
  on public.questionnaire_responses for select
  using (public.is_admin());

create policy "Admins can manage responses"
  on public.questionnaire_responses for all
  using (public.is_admin());

create policy "Clients can view own responses"
  on public.questionnaire_responses for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

create policy "Clients can insert own responses"
  on public.questionnaire_responses for insert
  with check (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

create policy "Clients can update own responses"
  on public.questionnaire_responses for update
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- ============================================================
-- 4. ASSET CHECKLIST TABLES
-- ============================================================

create table public.asset_checklist_templates (
  id uuid primary key default gen_random_uuid(),
  project_type text not null unique check (project_type in ('static_website', 'shopify', 'agent_development', 'crm', 'workflow_consulting')),
  items jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger asset_checklist_templates_updated_at
  before update on public.asset_checklist_templates
  for each row execute function public.set_updated_at();

create table public.asset_checklists (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  items jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id)
);

create trigger asset_checklists_updated_at
  before update on public.asset_checklists
  for each row execute function public.set_updated_at();

create index idx_asset_checklists_project on public.asset_checklists(project_id);

alter table public.asset_checklist_templates enable row level security;
alter table public.asset_checklists enable row level security;

create policy "Authenticated users can view checklist templates"
  on public.asset_checklist_templates for select
  using (auth.uid() is not null);

create policy "Admins can manage checklist templates"
  on public.asset_checklist_templates for all
  using (public.is_admin());

create policy "Admins can view all checklists"
  on public.asset_checklists for select
  using (public.is_admin());

create policy "Admins can manage checklists"
  on public.asset_checklists for all
  using (public.is_admin());

create policy "Clients can view own checklists"
  on public.asset_checklists for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

create policy "Clients can update own checklists"
  on public.asset_checklists for update
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- ============================================================
-- 5. PROJECT PHASES
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

alter table public.project_phases enable row level security;

create policy "Admins can view all phases"
  on public.project_phases for select
  using (public.is_admin());

create policy "Admins can manage phases"
  on public.project_phases for all
  using (public.is_admin());

create policy "Clients can view own project phases"
  on public.project_phases for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

-- ============================================================
-- 6. DELIVERABLES & APPROVALS
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

create table public.approval_comments (
  id uuid primary key default gen_random_uuid(),
  deliverable_id uuid not null references public.deliverables(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  comment text not null,
  action text check (action in ('comment', 'approved', 'changes_requested')),
  created_at timestamptz not null default now()
);

create index idx_approval_comments_deliverable on public.approval_comments(deliverable_id);

alter table public.deliverables enable row level security;
alter table public.approval_comments enable row level security;

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

create policy "Clients can update own deliverable status"
  on public.deliverables for update
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

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

-- ============================================================
-- 7. MESSAGES
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

alter table public.messages enable row level security;

create policy "Admins can view all messages"
  on public.messages for select
  using (public.is_admin());

create policy "Admins can insert messages"
  on public.messages for insert
  with check (public.is_admin() and sender_id = auth.uid());

create policy "Clients can view own project messages"
  on public.messages for select
  using (
    project_id in (select id from public.projects where client_id = auth.uid())
  );

create policy "Clients can send messages in own project"
  on public.messages for insert
  with check (
    sender_id = auth.uid()
    and project_id in (select id from public.projects where client_id = auth.uid())
  );

-- ============================================================
-- 8. STORAGE BUCKET (INFRA-12)
-- Note: Bucket creation uses the Supabase API, not SQL.
-- The policies below secure the bucket once created.
-- Create the bucket via Dashboard > Storage > New Bucket:
--   Name: client-assets
--   Public: false
--   File size limit: 52428800 (50MB)
--   Allowed MIME types: image/png, image/jpeg, image/svg+xml, image/webp,
--     application/pdf, application/msword,
--     application/vnd.openxmlformats-officedocument.wordprocessingml.document,
--     video/mp4, video/quicktime, application/postscript,
--     image/vnd.adobe.photoshop
-- ============================================================

-- Storage RLS policies (applied after bucket creation)
create policy "Admins can access all files"
  on storage.objects for all
  using (bucket_id = 'client-assets' and public.is_admin());

create policy "Clients can view own project files"
  on storage.objects for select
  using (
    bucket_id = 'client-assets'
    and (storage.foldername(name))[1] in (
      select id::text from public.projects where client_id = auth.uid()
    )
  );

create policy "Clients can upload to own project"
  on storage.objects for insert
  with check (
    bucket_id = 'client-assets'
    and (storage.foldername(name))[1] in (
      select id::text from public.projects where client_id = auth.uid()
    )
  );

-- ============================================================
-- 9. REALTIME (INFRA-13)
-- Enable Realtime on the messages table for live chat.
-- ============================================================

alter publication supabase_realtime add table public.messages;
