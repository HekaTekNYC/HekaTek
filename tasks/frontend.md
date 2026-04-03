# Frontend Tasks

UI components, pages, layouts, theming, and responsive design.
Use ui-ux-pro-max skill for all component builds.

---

## Theming & Foundation

- [x] FE-01 Create SCSS theme foundation — CSS custom properties for light/dark color palette, typography (Satoshi, Tanker), spacing, border-radius tokens
  - source: 1.7
  - depends: none
  - notes: DONE. src/styles/_portal-tokens.scss (CSS vars), _portal-mixins.scss (reusable patterns), portal.scss (entry point). Usage: @use '../../styles/portal' as *;

- [x] FE-02 Create theme toggle component — light/dark switch, persists to Supabase user metadata
  - source: 5.1
  - depends: FE-01 ✓, BE-02 ✓
  - notes: DONE. src/components/portal/theme-toggle/. Persists to localStorage + Supabase user metadata. Defaults to light.

- [x] FE-03 Implement light mode SCSS — glassmorphic backgrounds (backdrop-filter blur, semi-transparent whites, lavender borders)
  - source: 5.2
  - depends: FE-01 ✓
  - notes: DONE. src/styles/_portal-components.scss — .portal-card, .portal-btn, .portal-input, .portal-badge, .portal-stat-card, .portal-progress, .portal-avatar. All use glass tokens.

- [x] FE-04 Implement dark mode SCSS — deep navy/charcoal, solid sidebar/topbar, adjusted contrast, vibrant accents on dark
  - source: 5.3
  - depends: FE-01 ✓
  - notes: DONE. Dark mode auto-applies via .portal.dark class. Same component classes, different tokens. Blur/glass disabled in dark mode (solid surfaces).

- [x] FE-05 Apply theme class to root element on load from stored preference
  - source: 5.4
  - depends: FE-02 ✓
  - notes: DONE. Built into ThemeToggle — getInitialTheme() checks user_metadata > localStorage > light default. applyTheme() exported for pre-render use.

## Auth Pages

- [x] FE-06 Build login page (`/login`) — email + password form, glassmorphic card, Hekatek branding
  - source: 2.2
  - depends: FE-01 ✓, BE-01 ✓
  - notes: DONE. src/routes/login/LoginPage.jsx. Glassmorphic card, Hekatek branding, error display, redirect on auth.

- [x] FE-07 Build password setup page (`/invite/accept`) — set password on first visit from invite link
  - source: 2.3
  - depends: BE-01 ✓
  - notes: DONE. src/routes/invite/InviteAcceptPage.jsx. Password + confirm, 8 char min, glassmorphic card.

- [x] FE-08 Build forgot password page
  - source: 2.8
  - depends: BE-03 ✓
  - notes: DONE. src/routes/forgot-password/ForgotPasswordPage.jsx. Email input, success state with teal checkmark, back-to-login link.

## Routing

- [x] FE-09 Create ProtectedRoute component — redirect unauthenticated to /login
  - source: 2.5
  - depends: BE-02 ✓
  - notes: DONE. src/components/portal/protected-route/ProtectedRoute.jsx. Preserves intended location in state for post-login redirect.

- [x] FE-10 Create RoleRoute component — route by role, block cross-role access
  - source: 2.6
  - depends: BE-02 ✓
  - notes: DONE. src/components/portal/role-route/RoleRoute.jsx. Redirects wrong-role users to their correct dashboard.

- [x] FE-11 Add portal and admin route groups to React Router config
  - source: 2.7
  - depends: FE-09 ✓, FE-10 ✓
  - notes: DONE. src/App.jsx updated. /admin/* and /portal/* nested routes with ProtectedRoute + RoleRoute guards. Marketing routes preserved with existing Layout.

## Admin Dashboard

- [x] FE-12 Create admin layout — sidebar + topbar + content area
  - source: 3.1
  - depends: FE-01 ✓, FE-03 ✓, FE-04 ✓
  - notes: DONE. src/routes/admin/AdminLayout.jsx + shared PortalLayout component. Sidebar nav: Dashboard, Clients, Messages, Billing.

- [x] FE-13 Build admin sidebar navigation
  - source: 3.2
  - depends: FE-12 ✓
  - notes: DONE. Built into AdminLayout.jsx via shared PortalLayout. 4 nav items with SVG icons, purple active state via NavLink.

- [x] FE-14 Build admin topbar — logo, search placeholder, theme toggle, user menu
  - source: 3.3
  - depends: FE-12 ✓, FE-02 ✓
  - notes: DONE. Built into PortalLayout.jsx. Title, ThemeToggle, avatar with initials.

- [x] FE-15 Build admin dashboard landing — stat cards pulling from Supabase
  - source: 3.4
  - depends: FE-12 ✓, INFRA-05 ✓
  - notes: DONE. src/routes/admin/AdminDashboard.jsx. 4 stat cards (clients, projects, approvals, overdue), recent clients list, skeleton loading state, invite CTA.

- [x] FE-16 Build client list view — status badges, project type, last activity
  - source: 3.5
  - depends: FE-12 ✓, INFRA-05 ✓
  - notes: DONE. src/routes/admin/AdminClients.jsx. Client rows with avatar, name, company, project + status badge, date.

- [x] FE-17 Build invite client form — email + name + project type + project name
  - source: 3.6
  - depends: FE-12 ✓, BE-04 ✓
  - notes: DONE. Built into AdminClients.jsx as modal. Email, name, company, project name, type dropdown. Calls inviteClient() from admin.js.

## Client Dashboard

- [x] FE-18 Create client portal layout — sidebar + topbar + content area
  - source: 4.1
  - depends: FE-01 ✓, FE-03 ✓, FE-04 ✓
  - notes: DONE. src/routes/portal/ClientLayout.jsx. Sidebar nav: Dashboard, Onboarding, Assets, Timeline, Approvals, Messages, Billing, Resources.

- [x] FE-19 Build client sidebar navigation
  - source: 4.2
  - depends: FE-18 ✓
  - notes: DONE. Built into ClientLayout.jsx via shared PortalLayout. 8 nav items with SVG icons.

- [x] FE-20 Build client topbar — project name, theme toggle, user menu
  - source: 4.3
  - depends: FE-18 ✓, FE-02 ✓
  - notes: DONE. Built into PortalLayout.jsx. Shows "Client Portal" title, ThemeToggle, avatar.

- [x] FE-21 Build client dashboard landing — welcome, progress ring, current phase, activity feed
  - source: 4.4
  - depends: FE-18 ✓
  - notes: DONE. src/routes/portal/ClientDashboard.jsx. SVG progress ring (questionnaire 40% + assets 60%), current phase card, quick actions (onboarding, assets, messages), skeleton loading state.

## Feature Pages — Client

- [x] FE-22 Build questionnaire renderer — dynamic form fields from template
  - source: 6.3
  - depends: BE-05 ✓, FE-18 ✓
  - notes: DONE. src/components/portal/questionnaire-renderer/. Dynamic fields: text, textarea, select, multi_select, checkbox.

- [x] FE-23 Build multi-step questionnaire flow — base questions then type-specific, progress indicator
  - source: 6.4
  - depends: FE-22 ✓
  - notes: DONE. src/routes/portal/ClientOnboarding.jsx. Step indicator, progress bar, auto-save, back/next/submit, completion state.

- [x] FE-24 Update client dashboard to show questionnaire status
  - source: 6.7
  - depends: FE-23, FE-21
  - notes: link to resume if incomplete

- [x] FE-25 Build asset upload page — checklist with drag-and-drop upload, file validation
  - source: 7.5
  - depends: INFRA-12 ✓, INFRA-08 ✓, FE-18 ✓
  - notes: DONE. src/routes/portal/ClientAssets.jsx. Drag-and-drop + click-to-browse, 50MB validation, MIME check, Supabase Storage upload.

- [x] FE-26 Build upload progress bar — "X of Y items submitted"
  - source: 7.6
  - depends: FE-25 ✓
  - notes: DONE. Built into ClientAssets. Top-of-page portal-progress bar + counter.

- [x] FE-27 Update client dashboard progress ring for asset completion
  - source: 7.8
  - depends: FE-26, FE-21
  - notes: combines questionnaire + asset checklist completion

- [x] FE-28 Build client timeline view — phases with dates, current phase highlighted
  - source: 8.4
  - depends: INFRA-09 ✓, FE-18 ✓
  - notes: DONE. src/routes/portal/ClientTimeline.jsx. Vertical timeline with connected nodes.

- [x] FE-29 Build timeline component — horizontal or vertical phase nodes
  - source: 8.5
  - depends: FE-28 ✓
  - notes: DONE. Built into ClientTimeline. Teal completed nodes with checkmarks, purple in-progress with pulse animation, connected lines. "Updated [date]" indicator.

- [x] FE-30 Update client dashboard with current phase + next milestone
  - source: 8.6
  - depends: FE-29, FE-21
  - notes: simple text display

- [x] FE-31 Build Figma embed component — renders iframe from share URL
  - source: 9.3
  - depends: none
  - notes: DONE. src/components/portal/figma-embed/FigmaEmbed.jsx. Converts share URLs to embed URLs. 16:10 aspect ratio, error/empty states.

- [x] FE-32 Build client approval page — pending deliverables, Figma embed, approve/request changes + comments
  - source: 9.4
  - depends: FE-31, INFRA-10, FE-18
  - notes: comment textarea for change requests

- [x] FE-33 Build approval history view — timeline of actions with timestamps
  - source: 9.5
  - depends: FE-32
  - notes: per-deliverable history

- [x] FE-34 Build client messages page — chat thread with full history
  - source: 10.5
  - depends: INFRA-13 ✓, FE-18 ✓
  - notes: DONE. src/routes/portal/ClientMessages.jsx. Supabase Realtime subscription for live messages. Auto-scroll on new messages.

- [x] FE-35 Build chat thread component — message list with sender, timestamp, content
  - source: 10.3
  - depends: FE-34 ✓
  - notes: DONE. src/components/portal/chat-thread/ChatThread.jsx. Self/other bubble styling, date dividers, sender names, timestamps. Shared between client and admin.

- [x] FE-36 Build message input component — textarea with send button, enter-to-send
  - source: 10.4
  - depends: FE-35 ✓
  - notes: DONE. src/components/portal/message-input/MessageInput.jsx. Auto-growing textarea, Enter to send, Shift+Enter for newline, purple send button.

- [ ] FE-37 Build client billing page — invoices list with status badges, PDF download
  - source: 11.3
  - depends: INFRA-15, FE-18
  - notes: paid (teal), pending (amber), overdue (coral)

- [ ] FE-38 Build payment progress component — installment plan visual
  - source: 11.4
  - depends: FE-37
  - notes: "Payment 2 of 3 — $1,500 of $4,500 paid"

- [ ] FE-39 Build payment history section
  - source: 11.5
  - depends: FE-37
  - notes: chronological list of payments with dates and amounts

- [ ] FE-40 Handle billing no-match state
  - source: 11.6
  - depends: FE-37
  - notes: "No invoices found — contact Hekatek"

- [x] FE-41 Build knowledge base page — sidebar/tab nav, search, expandable accordions
  - source: 12.4
  - depends: BE-10, BE-11, FE-18
  - notes: renders FAQ items as expandable accordions

- [x] FE-42 Auto-filter knowledge base by client's project type — relevant section first, base FAQs always visible
  - source: 12.5
  - depends: FE-41
  - notes: project type from user profile determines default filter

## Feature Pages — Admin

- [x] FE-43 Build admin questionnaire view — read-only view of client responses
  - source: 6.6
  - depends: FE-23, FE-12
  - notes: organized by section

- [x] FE-44 Build admin asset view — per-client checklist progress, download, mark received
  - source: 7.7
  - depends: FE-25, FE-12
  - notes: admin can download uploaded files

- [x] FE-45 Build admin phase management — edit dates, update status
  - source: 8.3
  - depends: INFRA-09, FE-12
  - notes: auto-records "Updated [date]" on change

- [x] FE-46 Build admin deliverable upload form — title, Figma link, assign to phase
  - source: 9.2
  - depends: INFRA-10, FE-12
  - notes: creates pending deliverable for client review

- [x] FE-47 Build admin approval status view — all deliverables across projects, filter by status
  - source: 9.6
  - depends: FE-46
  - notes: pending/approved/changes requested badges

- [x] FE-48 Update admin dashboard stat card — pending approvals count
  - source: 9.7
  - depends: FE-47, FE-15
  - notes: pulls from deliverables table

- [x] FE-49 Build admin messaging inbox — all threads, last message preview, unread indicator
  - source: 10.6
  - depends: FE-35, FE-12
  - notes: click to open thread

- [x] FE-50 Update admin dashboard — unread messages count
  - source: 10.7
  - depends: FE-49, FE-15
  - notes: pulls from messages table

- [ ] FE-51 Build admin billing overview — all clients payment status, highlight overdue
  - source: 11.7
  - depends: INFRA-15, FE-12
  - notes: coral badge on overdue accounts

- [ ] FE-52 Update admin dashboard — total outstanding and overdue count
  - source: 11.8
  - depends: FE-51, FE-15
  - notes: stat card update

## Responsive & Polish

- [x] FE-53 Tablet breakpoints (768px) — sidebar collapse, card stacking
  - source: 13.1
  - depends: FE-12, FE-18
  - notes: hamburger menu for sidebar

- [x] FE-54 Mobile breakpoints (430px) — simplified layouts, touch targets
  - source: 13.2
  - depends: FE-53
  - notes: full-width components

- [x] FE-55 Loading states — skeleton screens, spinners, optimistic UI
  - source: 13.3
  - depends: FE-15, FE-21
  - notes: skeleton screens for dashboard cards

- [x] FE-56 Empty states — friendly messages for no-data sections
  - source: 13.4
  - depends: all feature pages
  - notes: "No messages yet", "No invoices found", etc.

- [x] FE-57 Error handling — toast notifications, retry options, API fallbacks
  - source: 13.5
  - depends: all feature pages
  - notes: graceful WaveApps downtime handling

- [x] FE-58 Cross-browser testing — backdrop-filter graceful degradation
  - source: 13.6
  - depends: FE-03
  - notes: glassmorphic effects in unsupported browsers

- [x] FE-59 Final visual QA — colors vibrant, spacing consistent, hover states, dark mode contrast
  - source: 13.7
  - depends: all
  - notes: last pass before launch
