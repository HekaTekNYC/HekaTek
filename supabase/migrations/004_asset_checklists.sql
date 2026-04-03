-- ============================================================
-- INFRA-08: Asset checklist tables
-- ============================================================

-- Templates: default checklist items per project type
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

-- Per-project checklists (generated from template + questionnaire)
create table public.asset_checklists (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  items jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id)
);

-- items JSONB structure:
-- [
--   {
--     "name": "Logo (SVG or high-res PNG)",
--     "required": true,
--     "status": "pending" | "uploaded" | "received",
--     "file_url": null | "path/to/file",
--     "file_name": null | "logo.svg",
--     "uploaded_at": null | "2026-04-03T..."
--   }
-- ]

create trigger asset_checklists_updated_at
  before update on public.asset_checklists
  for each row execute function public.set_updated_at();

create index idx_asset_checklists_project on public.asset_checklists(project_id);

-- RLS
alter table public.asset_checklist_templates enable row level security;
alter table public.asset_checklists enable row level security;

-- Templates: readable by authenticated, writable by admins
create policy "Authenticated users can view checklist templates"
  on public.asset_checklist_templates for select
  using (auth.uid() is not null);

create policy "Admins can manage checklist templates"
  on public.asset_checklist_templates for all
  using (public.is_admin());

-- Checklists: admins see all, clients see/update own
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
