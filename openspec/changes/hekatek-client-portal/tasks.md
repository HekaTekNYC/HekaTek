# Hekatek Client Portal — Tasks

## 1. Project Setup & Infrastructure

- [ ] 1.1 Initialize Supabase project (create org, project, get API keys and project URL)
- [ ] 1.2 Install Supabase client SDK in the HekaTek React app (`@supabase/supabase-js`)
- [ ] 1.3 Create Supabase client config file with environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- [ ] 1.4 Add `.env.local` to `.gitignore` and create `.env.example` with placeholder values
- [ ] 1.5 Set up database schema — create core tables: `profiles` (extends Supabase auth.users with role, company name, project type), `projects` (name, type, status, client_id, created_at)
- [ ] 1.6 Set up Row Level Security (RLS) policies — admins can read/write all rows, clients can only read/write their own data
- [ ] 1.7 Create SCSS theme foundation — CSS custom properties for light/dark mode color palette, typography variables (Satoshi, Tanker), spacing scale, border-radius tokens

## 2. Authentication & Role-Based Routing

- [ ] 2.1 Create Supabase Auth helper functions — signIn, signOut, getSession, onAuthStateChange
- [ ] 2.2 Build login page (`/login`) with email + password form, styled with glassmorphic card, Hekatek branding
- [ ] 2.3 Build password setup page for invited clients (`/invite/accept`) — set password on first visit from invite link
- [ ] 2.4 Create AuthContext provider — wraps app, provides current user + role, handles session persistence
- [ ] 2.5 Create ProtectedRoute component — redirects unauthenticated users to `/login`
- [ ] 2.6 Create RoleRoute component — routes admins to `/admin/*` and clients to `/portal/*`, blocks cross-role access
- [ ] 2.7 Add portal and admin route groups to the existing React Router config
- [ ] 2.8 Build password reset flow — forgot password page + Supabase Auth reset email

## 3. Admin Dashboard Shell

- [ ] 3.1 Create admin layout component — sidebar + topbar + content area, glassmorphic styling (light), dark styling (dark mode)
- [ ] 3.2 Build admin sidebar navigation — links to: Dashboard, Clients, Messages, Billing, with active state indicators (purple accent)
- [ ] 3.3 Build admin topbar — Hekatek logo, search placeholder, dark/light mode toggle, user menu (profile, logout)
- [ ] 3.4 Build admin dashboard landing page — stat cards (active clients, projects in progress, pending approvals, overdue items) pulling from Supabase
- [ ] 3.5 Build client list view — table/card list of all clients with status badges (onboarding/active/completed), project type, last activity timestamp
- [ ] 3.6 Build invite client flow — form to enter client email + name + project type + project name, triggers Supabase Auth invite email, creates profile and project records

## 4. Client Dashboard Shell

- [ ] 4.1 Create client portal layout component — sidebar + topbar + content area, same glassmorphic/dark mode approach as admin
- [ ] 4.2 Build client sidebar navigation — links to: Dashboard, Onboarding, Assets, Timeline, Approvals, Messages, Billing, Resources
- [ ] 4.3 Build client topbar — project name, dark/light mode toggle, user menu (profile, logout)
- [ ] 4.4 Build client dashboard landing page — welcome message, onboarding progress ring, current project phase, recent activity feed

## 5. Light/Dark Mode

- [ ] 5.1 Create theme toggle component — switch that flips between light and dark, persists preference to Supabase user metadata
- [ ] 5.2 Implement light mode SCSS — glassmorphic backgrounds (`backdrop-filter: blur`, semi-transparent whites), soft lavender borders, light card shadows
- [ ] 5.3 Implement dark mode SCSS — deep navy/charcoal backgrounds, solid sidebar/topbar, adjusted text contrast (white/light gray), vibrant accent colors on dark
- [ ] 5.4 Apply theme class to root element on load based on stored preference, default to light mode for new users

## 6. Dynamic Onboarding Questionnaires

- [ ] 6.1 Create database tables — `questionnaire_templates` (project_type, sections JSON), `questionnaire_responses` (project_id, client_id, responses JSON, completed_at)
- [ ] 6.2 Seed questionnaire templates for all 5 project types (static website, Shopify, agent development, CRM, workflow consulting) with base questions + type-specific sections
- [ ] 6.3 Build questionnaire renderer component — reads template by project type, renders form fields dynamically (text, textarea, select, multi-select, checkbox)
- [ ] 6.4 Build multi-step questionnaire flow — base questions first, then project-type-specific sections, progress indicator showing steps completed
- [ ] 6.5 Save responses to Supabase on each step (auto-save) with final submission state
- [ ] 6.6 Build admin questionnaire view — read-only view of a client's completed responses, organized by section
- [ ] 6.7 Update client dashboard to show questionnaire completion status and link to resume if incomplete

## 7. Asset/Document Upload with Smart Checklists

- [ ] 7.1 Create database tables — `asset_checklists` (project_id, items JSON array with name, required, status, file_url), `asset_checklist_templates` (project_type, default items)
- [ ] 7.2 Seed default checklist templates per project type (e.g., static website needs: logo, brand guidelines, homepage copy, about page copy, images; Shopify needs: product photos, inventory CSV, etc.)
- [ ] 7.3 Build checklist generation logic — after questionnaire completion, auto-generate checklist from template + any custom items derived from questionnaire answers
- [ ] 7.4 Create Supabase Storage bucket for client assets with folder structure: `/{project_id}/{checklist_item_name}/`
- [ ] 7.5 Build asset upload page — displays checklist with status per item, drag-and-drop upload zone per item, file type and size validation (50MB max, accepted formats)
- [ ] 7.6 Build progress bar component — calculates and displays "X of Y items submitted" with visual fill
- [ ] 7.7 Build admin asset view — per-client checklist progress, ability to download uploaded files, mark items as received/reviewed
- [ ] 7.8 Update client dashboard progress ring to reflect asset checklist completion percentage

## 8. Project Phase Timeline

- [ ] 8.1 Create database table — `project_phases` (project_id, phase_name, start_date, end_date, status [upcoming/in_progress/completed], updated_at)
- [ ] 8.2 Seed default phases when a new project is created (Kickoff, Design, Development, Revisions, Launch) with null dates
- [ ] 8.3 Build admin phase management — edit start/end dates per phase, update phase status, auto-records "Updated [date]" on change
- [ ] 8.4 Build client timeline view — visual timeline showing all phases, current phase highlighted, dates displayed, "Updated [date]" indicator where dates have shifted
- [ ] 8.5 Build timeline component — horizontal or vertical layout with phase nodes, color-coded by status (teal=complete, purple=in progress, gray=upcoming)
- [ ] 8.6 Update client dashboard to show current phase name and next milestone date

## 9. Approval Workflows with Figma Embeds

- [ ] 9.1 Create database tables — `deliverables` (project_id, phase_id, title, figma_url, status [pending/approved/changes_requested], created_at), `approval_comments` (deliverable_id, user_id, comment, created_at)
- [ ] 9.2 Build admin deliverable upload form — title, Figma share link input, assign to project phase
- [ ] 9.3 Build Figma embed component — takes share URL, renders embedded Figma frame via iframe with proper sizing
- [ ] 9.4 Build client approval page — lists pending deliverables, shows Figma embed, "Approve" and "Request Changes" buttons, comment text area for change requests
- [ ] 9.5 Build approval history view — timeline of all approval actions per deliverable with timestamps and comments
- [ ] 9.6 Build admin approval status view — all deliverables across projects with status badges, filter by pending/approved/changes requested
- [ ] 9.7 Update admin dashboard stat card to show count of pending approvals

## 10. Project Chat Messaging

- [ ] 10.1 Create database table — `messages` (project_id, sender_id, content, created_at) with RLS policies (admins see all, clients see only their project)
- [ ] 10.2 Set up Supabase Realtime subscription on the `messages` table for live updates
- [ ] 10.3 Build chat thread component — message list with sender name, timestamp, content, auto-scroll to latest message
- [ ] 10.4 Build message input component — text area with send button, enter-to-send
- [ ] 10.5 Build client messages page — single chat thread for their project, full conversation history
- [ ] 10.6 Build admin messaging inbox — list of all project threads with last message preview and unread indicator, click to open thread
- [ ] 10.7 Update admin dashboard to show count of unread messages

## 11. Billing & Invoice Display

- [ ] 11.1 Set up WaveApps OAuth application — register app, get client ID and secret, configure OAuth redirect
- [ ] 11.2 Create Supabase Edge Function for WaveApps GraphQL API — authenticates via OAuth, queries invoices and payments by customer email
- [ ] 11.3 Build client billing page — list of invoices with date, amount, status (paid/pending/overdue with color-coded badges), PDF download link
- [ ] 11.4 Build payment progress component — visual indicator showing installment plan progress (e.g., "Payment 2 of 3"), amount paid vs. total, per-installment status
- [ ] 11.5 Build payment history section — chronological list of payments made with dates and amounts
- [ ] 11.6 Handle no-match state — if client email doesn't match WaveApps, show "No invoices found — contact Hekatek" message
- [ ] 11.7 Build admin billing overview — all clients' payment status at a glance, highlight overdue accounts (coral badge)
- [ ] 11.8 Update admin dashboard stat card to show total outstanding and overdue count

## 12. Knowledge Base

- [ ] 12.1 Create knowledge base data structure — JSON or markdown files organized by: base FAQs (all clients) + per-project-type resources
- [ ] 12.2 Write base FAQ content — revision policy, accepted file formats, how uploads work, launch process, communication expectations
- [ ] 12.3 Write project-type-specific content — static website guide, Shopify product catalog prep, agent development requirements doc, CRM migration guide, workflow consulting expectations
- [ ] 12.4 Build knowledge base page — sidebar or tab navigation by category, search/filter, renders FAQ items as expandable accordions
- [ ] 12.5 Auto-filter resources by client's project type — show relevant section first, base FAQs always visible

## 13. Responsive Design & Polish

- [ ] 13.1 Audit and adjust all portal pages for tablet breakpoints (768px) — sidebar collapses to hamburger menu, cards stack vertically
- [ ] 13.2 Audit and adjust all portal pages for mobile breakpoints (430px) — simplified layouts, touch-friendly tap targets, full-width components
- [ ] 13.3 Add loading states — skeleton screens for dashboard cards, spinner for data fetches, optimistic UI for message sends
- [ ] 13.4 Add empty states — friendly messages and illustrations for sections with no data yet ("No messages yet", "No invoices found", etc.)
- [ ] 13.5 Add error handling — toast notifications for failed actions, retry options, graceful fallbacks for WaveApps API downtime
- [ ] 13.6 Cross-browser testing — verify glassmorphic effects (backdrop-filter) degrade gracefully in unsupported browsers
- [ ] 13.7 Final visual QA — verify all accent colors are vibrant (not muddy), spacing is consistent, hover states work, dark mode has proper contrast

## 14. Testing & Launch Prep

- [ ] 14.1 End-to-end test: full client journey — receive invite → set password → complete questionnaire → upload assets → view timeline → approve deliverable → send message → view invoice
- [ ] 14.2 End-to-end test: full admin journey — invite client → view onboarding progress → update phases → upload deliverable → respond to messages → check billing
- [ ] 14.3 Test RLS policies — verify clients cannot access other clients' data, verify admin can access all data
- [ ] 14.4 Test real-time messaging — verify messages appear instantly for both parties without page refresh
- [ ] 14.5 Test WaveApps integration with real invoice data — verify amounts, statuses, PDF downloads, and installment tracking are accurate
- [ ] 14.6 Set up Supabase production environment — separate project from dev, migrate schema, configure environment variables on Netlify
- [ ] 14.7 Deploy to production — push feature branch, merge to dev, verify Netlify build, smoke test all features on live URL
