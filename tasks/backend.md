# Backend Tasks

Authentication logic, data seeding, server-side helpers, and API integration.
Most depend on infrastructure being in place.

---

## Authentication

- [x] BE-01 Create Supabase Auth helper functions — signIn, signOut, getSession, onAuthStateChange
  - source: 2.1
  - depends: INFRA-03
  - notes: src/lib/auth.js — signIn, signOut, getSession, getUser, getUserRole, onAuthStateChange, resetPassword, updatePassword, inviteClient

- [x] BE-02 Create AuthContext provider — current user + role, session persistence
  - source: 2.4
  - depends: BE-01
  - notes: src/contexts/auth.context.jsx — exposes user, role, loading, isAdmin, isClient, isAuthenticated, signIn, signOut. useAuth() hook exported.

- [x] BE-03 Build password reset flow — forgot password trigger + Supabase Auth reset email
  - source: 2.8
  - depends: BE-01
  - notes: resetPassword() and updatePassword() in src/lib/auth.js. Frontend form still needed (Yoruichi).

- [x] BE-04 Build invite client flow — create profile + project records, trigger Supabase invite email
  - source: 3.6
  - depends: INFRA-05, BE-02
  - notes: src/lib/admin.js — inviteClient() does: 1) auth invite, 2) update profile, 3) create project, 4) seed phases, 5) create questionnaire response, 6) create asset checklist. Requires service_role key (Edge Function in prod).

## Data Seeding

- [x] BE-05 Seed questionnaire templates for all 5 project types
  - source: 6.2
  - depends: INFRA-07
  - notes: src/data/seed/questionnaire-templates.js — base section (9 fields) + type-specific sections. Run `npm run seed` to push to DB (needs VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local).

- [x] BE-06 Seed default asset checklist templates per project type
  - source: 7.2
  - depends: INFRA-08
  - notes: src/data/seed/asset-checklist-templates.js — 7-12 items per type with name, required, description, accepts. Run `npm run seed` to push to DB.

- [x] BE-07 Seed default project phases on new project creation
  - source: 8.2
  - depends: INFRA-09
  - notes: src/data/seed/project-phases.js — Kickoff, Design, Development, Revisions, Launch. Seeded per-project via inviteClient() in admin.js.

## Business Logic

- [x] BE-08 Checklist generation logic — auto-generate from template + questionnaire answers
  - source: 7.3
  - depends: BE-05, BE-06
  - notes: src/lib/checklist.js — generateChecklist() called automatically on questionnaire submission. Derives new items from answers (e.g., selected pages → page-specific copy/images, migration → export files, large catalogs → variant matrix). Also upgrades existing items from optional→required based on answers. Deduplicates by name. Wired into submitQuestionnaire() in questionnaire.js.

- [x] BE-09 Questionnaire auto-save and submission logic
  - source: 6.5
  - depends: INFRA-07
  - notes: src/lib/questionnaire.js — loadQuestionnaire(), autoSave(), saveSection(), submitQuestionnaire(). Auto-save merges per-section answers into JSONB. Submission sets completed_at.

## Knowledge Base Content

- [x] BE-10 Create knowledge base data structure — JSON or markdown files for base FAQs + per-type resources
  - source: 12.1
  - depends: none
  - notes: src/data/knowledge-base/index.js — getKnowledgeBase(projectType) returns faqs + type-specific guide

- [x] BE-11 Write base FAQ content
  - source: 12.2
  - depends: BE-10
  - notes: 8 FAQs in src/data/knowledge-base/base-faqs.js — revisions, file formats, uploads, launch, comms, timeline, payments, approvals

- [x] BE-12 Write project-type-specific resource content
  - source: 12.3
  - depends: none
  - notes: 5 guides in src/data/knowledge-base/ — static-site.js, shopify.js, agent-dev.js, crm.js, workflow.js
