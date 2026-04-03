# Hekatek Client Portal

## Why

Hekatek is a growing software and web development agency (currently ~5 active clients, scaling quickly) that manually manages client onboarding, asset collection, project updates, invoicing, and communication. This creates bottlenecks:

- **Chasing clients for assets and content** — logos, images, copy, brand guidelines arrive piecemeal over email with no central tracking
- **Repetitive status update requests** — clients constantly ask "where are we at?" because they have no visibility into project progress
- **Scattered communication** — conversations split across email, text, and calls with no unified history
- **Manual invoicing visibility** — clients can't see their payment status or history without reaching out
- **Inconsistent onboarding** — different project types (static sites, Shopify, agent development, CRMs, workflow consulting) require different intake information but there's no structured process

As the agency scales, these manual processes won't hold. The portal solves this by giving clients a self-service hub and giving Hekatek back the hours currently spent on coordination.

## Business Value Analysis

### User Personas & How They Benefit

**Persona 1: The Overwhelmed Small Business Owner (Client)**
- *Who:* A bakery owner, a fitness studio, a local law firm — they hired Hekatek to build their web presence but tech is not their world
- *Pain today:* Confused by what Hekatek needs from them. Assets arrive late because they don't know what's expected. They email asking for updates because they have zero visibility. They lose track of invoices.
- *Portal value:* Guided onboarding tells them exactly what to do. Checklists show what's missing. Progress timeline answers "where are we at?" without a single email. Invoice view shows what they owe and what they've paid. They feel in control instead of lost.
- *Emotional shift:* From anxious and confused → informed and confident

**Persona 2: The Hands-On Ecommerce Entrepreneur (Client)**
- *Who:* Launching a Shopify store, has product photos and inventory spreadsheets, moves fast, expects responsiveness
- *Pain today:* Sends assets via email, Slack, text — whatever's fastest. Gets frustrated when things feel slow or disorganized. Wants to approve designs quickly and see momentum.
- *Portal value:* One place to dump all assets with a clear checklist. Figma embeds let them approve designs in seconds. Real-time chat keeps the conversation flowing. Payment tracking shows exactly where their installments stand.
- *Emotional shift:* From impatient and scattered → engaged and moving fast

**Persona 3: The Hekatek Co-Founder (Admin — You & Your Partner)**
- *Who:* Running the agency, managing clients, doing the actual development work, and handling all the coordination on top of it
- *Pain today:* Hours spent each week chasing assets, answering "where are we at?", forwarding invoices, re-explaining processes. Every new client adds more coordination overhead. The work that actually makes money (building) gets squeezed.
- *Portal value:* Admin dashboard shows all clients at a glance. Invite a client and they self-onboard. Asset uploads track themselves. Approvals create accountability. Messaging is centralized. Billing is visible without you touching WaveApps. You reclaim 5-10+ hours per week as the client count grows.
- *Emotional shift:* From drowning in coordination → focused on building

### The Problem — Deeper Than It Looks

On the surface, this is "clients can't see their project status." But the real problem is **Hekatek's ability to scale is capped by manual coordination.**

Every new client today adds:
- 1-2 hours of onboarding coordination (back-and-forth on what's needed)
- 30-60 minutes/week of status update conversations
- Ongoing asset-chasing that can delay projects by days or weeks
- Scattered communication that leads to misunderstandings and rework

At 5 clients, this is manageable but painful. At 10 clients, it's unsustainable. At 20, it's impossible without hiring someone whose entire job is client coordination — a cost that eats directly into margins.

The portal doesn't just improve the client experience — it **removes the linear relationship between client count and coordination hours.** Client #20 requires the same admin effort as client #5 because the portal handles the rest.

### Priority Ranking by Business Value

| Rank | Feature | Value Delivered | Why This Order |
|------|---------|----------------|----------------|
| 1 | Auth + Dashboards | Foundation | Nothing works without login and navigation |
| 2 | Onboarding Questionnaires | High — immediate time savings | Biggest pain point: inconsistent intake across project types. Every new client benefits day one |
| 3 | Asset Uploads + Checklists | High — removes #1 bottleneck | Asset-chasing delays projects and frustrates both sides. Auto-checklists eliminate guesswork |
| 4 | Project Timeline | High — eliminates "where are we at?" | Directly kills the most frequent client question. Frees hours per week |
| 5 | Approval Workflows | High — prevents rework | Creates accountability and a paper trail. Prevents costly misunderstandings |
| 6 | Chat Messaging | Medium — centralizes communication | Valuable but clients can still reach you via email until this ships |
| 7 | Billing/Invoicing | Medium — improves transparency | Nice to have but clients can still check WaveApps directly until this ships |
| 8 | Knowledge Base | Lower — reduces repetitive questions | Helpful but not blocking anything. Content can live in onboarding emails temporarily |
| 9 | Light/Dark Mode | Lower — polish | Nice UX but purely cosmetic. Can ship after core features work |

### What Happens If We Don't Build This

**Short term (next 3-6 months):**
- You keep managing. It's painful but survivable at 5 clients.
- Onboarding stays inconsistent. Some clients get a smooth experience, others flounder.
- You spend 10-15 hours/week on coordination instead of billable work.

**Medium term (6-12 months, 10-15 clients):**
- Coordination becomes a full-time job on top of the actual work.
- Client experience degrades as you're stretched thin — slower responses, missed details.
- Projects get delayed because assets aren't collected efficiently.
- You either turn away clients or burn out.

**Long term (12+ months, 15-25+ clients):**
- You're forced to hire a project coordinator ($40-60K/year) just to manage communication.
- Or you cap your client count to what you can manually handle — limiting revenue.
- Competitors with better client tooling win deals you could have closed.

**The portal pays for itself the moment it saves you from hiring a coordinator or losing a client due to a disorganized experience.**

### Success Metrics — How We Know It's Working

**Onboarding Efficiency**
- *Baseline:* Track how long onboarding takes today (first contact → all assets received)
- *Target:* Reduce onboarding time by 50% within 3 months of launch
- *Measure:* Average days from invite sent → questionnaire complete → all assets uploaded

**Coordination Time Saved**
- *Baseline:* Estimate current hours/week spent on status updates, asset-chasing, and invoice questions
- *Target:* Reduce by 60% within 2 months
- *Measure:* Self-reported weekly hours + reduction in "where are we at?" messages

**Asset Collection Speed**
- *Baseline:* How many days/weeks it currently takes to collect all client assets
- *Target:* 80% of assets uploaded within first 2 weeks of onboarding
- *Measure:* Checklist completion rate per client, tracked in admin dashboard

**Client Engagement**
- *Target:* 90% of invited clients complete onboarding questionnaire within 1 week
- *Target:* 80% of clients log into the portal at least once per week during active projects
- *Measure:* Supabase Auth login frequency + questionnaire completion timestamps

**Approval Turnaround**
- *Baseline:* How long it currently takes to get design approval (emails, calls, back-and-forth)
- *Target:* Average approval within 48 hours of deliverable upload
- *Measure:* Time between deliverable upload → client approve/reject action

**Payment Visibility**
- *Target:* Zero client emails asking "what do I owe?" or "did my payment go through?"
- *Measure:* Reduction in billing-related messages in chat/email

**Scalability Test**
- *The ultimate metric:* Can you onboard client #15 with the same effort as client #5?
- If yes, the portal is working. If no, identify which manual steps remain and automate them.

## What Changes

### Proposed Solution

A client portal integrated into the existing Hekatek React + Vite website, accessible via authenticated routes (e.g., `/portal/dashboard`, `/portal/messages`). Role-based access controls the experience — Hekatek team members log in and see the admin dashboard; clients log in and see their portal. Clients are invited by the Hekatek team after signing on — no public signup.

### Core Features (MVP)

Features are listed in recommended build order — each layer builds on the previous.

#### Phase A: Foundation

**1. Role-Based Authentication (Supabase Auth)**
- Single login system — role determines experience (admin vs. client)
- Hekatek team: log in with team email → admin dashboard
- Clients: receive invite email (sent via Supabase Auth) → click link → set password → client portal
- Supabase Auth handles sessions, JWT tokens, password reset, and invite emails
- Role stored in Supabase user metadata (`admin` or `client`)
- No public registration

**2. Admin Dashboard Shell (Hekatek Team)**
- **Landing view:** Summary dashboard with at-a-glance stats — active clients, projects in progress, pending approvals, overdue items
- **Client list:** All clients with status indicators (onboarding, active, completed), project type, and last activity
- **Invite clients** — send invite emails to new clients, assign project type and project name
- **Project management** — update phase status and timeline dates, view/respond to asset checklists
- **Deliverable uploads** — upload Figma embeds and other deliverables for client approval, track approval status
- **Messaging inbox** — view and respond to all client message threads from one place
- **Billing overview** — see payment status across all clients (who's paid, who's overdue)
- Role-based access: only Hekatek team members (admin role) can access

**3. Client Dashboard Shell**
- Landing view after login: welcome message, onboarding progress, current project phase, recent activity
- Sidebar navigation to all portal sections
- Light/dark mode toggle (persisted per user preference)

#### Phase B: Immediate Value

**4. Dynamic Onboarding Questionnaires**
- Base questions every client answers (company name, contact info, timeline, budget, goals)
- Project-type-specific sections that load dynamically based on assigned project type:
  - **Static Website** — pages needed, content readiness, design preferences, reference sites
  - **Shopify Ecommerce** — product count, categories, payment providers, shipping needs, existing inventory
  - **Agent Development** — workflows to automate, existing tools/integrations, data sources
  - **CRM** — current CRM (if any), contact volume, pipeline stages, integrations needed
  - **Workflow Consulting** — current pain points, tools in use, team size, desired outcomes
- Responses stored in Supabase and accessible to both client and Hekatek team
- Admin can view completed questionnaires per client

**5. Asset/Document Upload with Smart Checklists**
- Auto-generated checklist based on project type and questionnaire answers
- Items like: logo files, brand guidelines, copy/content, images, videos, icons, product photos
- Progress bar showing completion (e.g., "6 of 12 items submitted")
- Drag-and-drop file uploads stored in Supabase Storage, organized per client/project
- File restrictions: max 50MB per file, accepted formats (images: PNG/JPG/SVG/WebP, documents: PDF/DOCX, video: MP4/MOV, design: AI/PSD/Figma links)
- Admin view: see per-client upload progress, download assets, mark checklist items as received

#### Phase C: Workflow

**6. Project Phase Timeline**
- Simple phase-based tracking: Kickoff → Design → Development → Revisions → Launch
- Each phase has start and end dates, updatable by Hekatek team via admin dashboard
- Client sees current phase highlighted with timeline view
- Dates update transparently when timelines shift (with "Updated [date]" indicator)
- Admin updates phase status and dates; client view is read-only

**7. Approval Workflows with Figma Embeds**
- Hekatek uploads deliverables with embedded Figma frames (via share link → auto-rendered embed)
- Client can Approve or Request Changes with comments directly in the portal
- Creates a paper trail — no more "I never approved that"
- Approval history logged with timestamps
- Phase advancement tied to client approval

#### Phase D: Communication

**8. Project Chat Messaging**
- Simple chat thread per project
- Full conversation history visible to both parties
- Real-time message delivery via Supabase Realtime
- Admin sees all threads in a unified inbox; client sees only their project thread
- Foundation for more structured messaging later (threading, deliverable-linked comments)

#### Phase E: Billing

**9. Billing & Invoice Display**
- WaveApps GraphQL API integration (OAuth authenticated) via Supabase Edge Function
- Client-to-WaveApps matching by email address
- PDF download of each invoice
- Payment progress indicator for installment plans (e.g., "Payment 2 of 3 — $1,500 of $4,500 paid")
- Per-installment status: Paid, Pending, Overdue (color-coded with teal/amber/coral)
- Payment history with dates and amounts
- Admin billing overview: all clients' payment status at a glance

#### Phase F: Resources

**10. Knowledge Base**
- Base FAQs visible to all clients (revision policy, file formats, launch process, how uploads work)
- Project-type-specific resources loaded automatically (e.g., Shopify clients see "Preparing your product catalog")
- Content is hardcoded in MVP — admin content editor deferred to Phase 2
- Reduces repetitive questions

**11. Light/Dark Mode**
- User-facing toggle in the portal header/sidebar
- Light mode: Glassmorphic UI (blurred, semi-transparent backgrounds)
- Dark mode: Solid deep navy/charcoal backgrounds
- Preference persisted per user in Supabase user metadata
- Implemented via CSS custom properties and a theme class on the root element

### Technical Approach

**Frontend**
- React + Vite + SCSS (extends existing Hekatek site)
- Portal lives within the current app as authenticated routes (`/portal/*` for clients, `/admin/*` for team)
- SCSS with CSS custom properties for light/dark mode theming
- No component library — custom-built with SCSS to match Hekatek's glassmorphic design language
- Responsive design — desktop-first but mobile-usable (clients may check progress on their phone)

**Backend — Supabase (BaaS)**
- Supabase PostgreSQL database with Row Level Security (RLS) for role-based data access
- Supabase Auth for invite-based registration flow (built-in invite emails, JWT sessions, role management)
- Supabase Storage for asset/document uploads (organized per client/project, with file size and type restrictions)
- Supabase Realtime for chat messaging (live message delivery without custom WebSocket setup)
- Supabase Edge Functions for server-side logic (WaveApps GraphQL API calls, complex operations)
- Frontend communicates directly with Supabase via SDK — no separate API server needed

**Hosting & Infrastructure**
- Frontend: Netlify (current hosting — no change)
- Backend: Fully managed by Supabase (database, auth, storage, realtime, edge functions)
- No separate server to deploy or maintain
- Cost: Free tier to start, $25/month Pro plan as usage grows

**Email Delivery**
- Auth emails (invites, password reset): handled by Supabase Auth built-in email
- Future consideration (Phase 2): custom transactional emails for notifications via Resend or similar service

**Design Direction**
- Sidebar + topbar dashboard layout
- Light mode: Glassmorphic sidebar, topbar, and cards (blur + saturation + semi-transparent backgrounds)
- Dark mode: Solid deep navy/charcoal sidebar and topbar, dark card backgrounds
- Typography: Satoshi (body/UI), Tanker (section headers)
- Color palette:
  - Primary text: `#444d82` (light), white/light gray (dark)
  - Secondary: `#9ea6df` (lavender)
  - Purple `#b46ff8` — primary actions, active states
  - Blue `#7285fd` — links, info indicators
  - Coral `#ff7d79` — alerts, overdue, attention
  - Teal `#2dd4bf` — success, completed, paid
  - Amber `#f59e0b` — pending, in-progress, waiting
- Spacious layout with generous whitespace
- Rounded corners (12-20px cards, 40px buttons)
- Hover lifts with shadow transitions
- All colors vibrant and clean — no muddy or dusty tones

### Data & Migration Considerations
- No existing client data to migrate — this is a greenfield portal
- WaveApps client matching: portal users linked to WaveApps customer records via email address
- If client email in portal doesn't match WaveApps, billing section shows "No invoices found — contact Hekatek"

### Phase 2 (Future)
- Admin content editor for knowledge base and form templates (no-code management)
- Advanced messaging (threading, tied to deliverables)
- Email and in-app notifications (new message, phase update, invoice due) via Resend or similar
- Calendly embed for scheduling
- Self-service signup tier for leads

### Phase 3 (Down the Road)
- In-house payments via Stripe
- Advanced reporting and analytics
- Client satisfaction surveys and feedback collection
