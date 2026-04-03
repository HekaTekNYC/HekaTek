-- ============================================================
-- INFRA-07: Questionnaire tables
-- ============================================================

-- Templates: one per project type, stores section definitions as JSONB
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

-- Responses: one per project, stores answers as JSONB
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

-- RLS
alter table public.questionnaire_templates enable row level security;
alter table public.questionnaire_responses enable row level security;

-- Templates: readable by all authenticated users, writable by admins
create policy "Authenticated users can view templates"
  on public.questionnaire_templates for select
  using (auth.uid() is not null);

create policy "Admins can manage templates"
  on public.questionnaire_templates for all
  using (public.is_admin());

-- Responses: admins see all, clients see own project's responses
create policy "Admins can view all responses"
  on public.questionnaire_responses for select
  using (public.is_admin());

create policy "Admins can manage responses"
  on public.questionnaire_responses for all
  using (public.is_admin());

create policy "Clients can view own responses"
  on public.questionnaire_responses for select
  using (
    project_id in (
      select id from public.projects where client_id = auth.uid()
    )
  );

create policy "Clients can insert own responses"
  on public.questionnaire_responses for insert
  with check (
    project_id in (
      select id from public.projects where client_id = auth.uid()
    )
  );

create policy "Clients can update own responses"
  on public.questionnaire_responses for update
  using (
    project_id in (
      select id from public.projects where client_id = auth.uid()
    )
  );
