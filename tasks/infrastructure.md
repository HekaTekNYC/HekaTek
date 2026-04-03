# Infrastructure Tasks

Supabase project setup, database schema, RLS policies, environment config.
These must be completed first — backend and frontend depend on them.

---

## Phase A: Project Setup

- [x] INFRA-01 Initialize Supabase project (create org, project, get API keys and project URL)
  - source: 1.1
  - depends: none
  - notes: project live at wzwjopjqrgtqoiqqeuxv.supabase.co, .env.local created

- [x] INFRA-02 Install Supabase client SDK (`@supabase/supabase-js`)
  - source: 1.2
  - depends: INFRA-01
  - notes: installed @supabase/supabase-js@2.101.1

- [x] INFRA-03 Create Supabase client config file with env vars (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
  - source: 1.3
  - depends: INFRA-02
  - notes: src/lib/supabase.js — single client instance with env validation

- [x] INFRA-04 Add `.env.local` to `.gitignore` and create `.env.example`
  - source: 1.4
  - depends: INFRA-03
  - notes: .env.example created with placeholder values, .gitignore updated

## Phase A: Database Schema

- [x] INFRA-05 Create core tables — `profiles`, `projects`
  - source: 1.5
  - depends: INFRA-01
  - notes: SQL in supabase/migrations/001_core_tables.sql. profiles (id, role, full_name, company_name, email, avatar_url). projects (id, name, type, status, client_id). Auto-create profile trigger on auth.users insert. updated_at triggers on both.

- [x] INFRA-06 Set up RLS policies — admin read/write all, clients read/write own data
  - source: 1.6
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/002_rls_policies.sql. is_admin() helper function. Full RLS on profiles + projects. ⚠️ NEEDS VERIFICATION after applying SQL to live DB.

- [x] INFRA-07 Create questionnaire tables — `questionnaire_templates`, `questionnaire_responses`
  - source: 6.1
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/003_questionnaires.sql. templates (project_type unique, sections JSONB). responses (project_id unique, template_id, responses JSONB, current_section, completed_at). RLS included.

- [x] INFRA-08 Create asset tables — `asset_checklists`, `asset_checklist_templates`
  - source: 7.1
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/004_asset_checklists.sql. templates per project_type. checklists per project with items JSONB (name, required, status, file_url, file_name, uploaded_at). RLS included.

- [x] INFRA-09 Create project phases table — `project_phases`
  - source: 8.1
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/005_project_phases.sql. (project_id, phase_name, sort_order, status, start_date, end_date). Client read-only. RLS included.

- [x] INFRA-10 Create deliverables and approval tables — `deliverables`, `approval_comments`
  - source: 9.1
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/006_deliverables_approvals.sql. deliverables (project_id, phase_id, title, figma_url, status). approval_comments (deliverable_id, user_id, comment, action). RLS included.

- [x] INFRA-11 Create messages table with RLS
  - source: 10.1
  - depends: INFRA-05
  - notes: SQL in supabase/migrations/007_messages.sql. (project_id, sender_id, content, created_at). RLS: admins see all, clients see/send in own project only.

## Phase A: Storage & Realtime

- [x] INFRA-12 Create Supabase Storage bucket for client assets
  - source: 7.4
  - depends: INFRA-01
  - notes: Storage RLS policies in 000_all_combined.sql. ⚠️ BUCKET MUST BE CREATED MANUALLY in Dashboard > Storage > New Bucket: name "client-assets", private, 50MB limit. MIME types listed in SQL comments.

- [x] INFRA-13 Set up Supabase Realtime on messages table
  - source: 10.2
  - depends: INFRA-11
  - notes: `alter publication supabase_realtime add table public.messages` included in 000_all_combined.sql.

## Phase E: External Integrations

- [ ] INFRA-14 Set up WaveApps OAuth application
  - source: 11.1
  - depends: none
  - notes: register app, get client ID/secret, configure redirect

- [ ] INFRA-15 Create Supabase Edge Function for WaveApps GraphQL API
  - source: 11.2
  - depends: INFRA-14
  - notes: OAuth auth, queries invoices/payments by customer email
