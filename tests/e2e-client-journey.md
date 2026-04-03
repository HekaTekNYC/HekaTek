# TEST-01: Full Client Journey — E2E Test Checklist

Manual walkthrough covering the complete client experience.
Run with two browser windows: one admin, one client (incognito).

## Prerequisites
- [ ] Supabase project running with schema applied
- [ ] `.env.local` configured with valid credentials
- [ ] `npm run dev` running locally
- [ ] At least one admin account created in Supabase Auth

## Test Steps

### 1. Invite Flow
- [ ] Admin logs in at `/login` → redirected to `/admin`
- [ ] Admin navigates to `/admin/clients` → clicks "+ Invite Client"
- [ ] Admin fills out invite form (email, name, company, project name, project type)
- [ ] Admin submits → no errors, modal closes, client appears in list
- [ ] Verify: client list shows new client with "onboarding" status badge

### 2. Client Onboarding
- [ ] Client receives invite email (check Supabase Auth logs if using local dev)
- [ ] Client clicks invite link → arrives at `/invite/accept`
- [ ] Client sets password (8+ chars) → redirected to `/portal`
- [ ] Client sees welcome message with their name
- [ ] Client sees progress ring at 0%

### 3. Questionnaire
- [ ] Client navigates to `/portal/onboarding`
- [ ] Step indicator shows "Step 1 of N"
- [ ] Client fills in base questions → clicks "Save & Continue"
- [ ] Progress bar advances
- [ ] Client fills type-specific questions
- [ ] On final step, clicks "Submit"
- [ ] Questionnaire shows "Complete" with teal checkmark
- [ ] Dashboard progress ring updates

### 4. Asset Upload
- [ ] Client navigates to `/portal/assets`
- [ ] Checklist items displayed with "Pending" badges
- [ ] Progress bar shows "0 of N submitted"
- [ ] Client drags a file onto a checklist item drop zone
- [ ] File validates (size + type) → uploads → status changes to "Uploaded"
- [ ] Progress bar updates
- [ ] Try invalid file (>50MB or wrong type) → error shown inline

### 5. Timeline
- [ ] Client navigates to `/portal/timeline`
- [ ] Shows 5 default phases (Kickoff → Launch)
- [ ] All show "Upcoming" status initially
- [ ] Admin updates phase dates and sets one to "In Progress"
- [ ] Client refreshes → sees purple pulse on active phase, dates shown

### 6. Approvals
- [ ] Admin uploads a deliverable at `/admin/deliverables` with Figma link
- [ ] Client navigates to `/portal/approvals`
- [ ] Deliverable shows with Figma embed and "Pending" badge
- [ ] Client clicks "Approve" → status changes to "Approved" (teal)
- [ ] Admin uploads another deliverable
- [ ] Client clicks "Request Changes" with comment → status updates
- [ ] "View history" shows the actions with timestamps

### 7. Messaging
- [ ] Client navigates to `/portal/messages`
- [ ] Empty state shown ("No messages yet")
- [ ] Client types a message → hits Enter → message appears as purple bubble
- [ ] Admin opens `/admin/messages` → sees the client's thread
- [ ] Admin replies → client sees the reply appear in real-time (no refresh)

### 8. Billing
- [ ] Client navigates to `/portal/billing`
- [ ] If WaveApps not configured: shows "No invoices found" state
- [ ] If configured: shows invoice list with status badges, payment progress, history
- [ ] PDF download link works (if available)

### 9. Resources
- [ ] Client navigates to `/portal/resources`
- [ ] Project-type guide shown first (auto-filtered)
- [ ] Base FAQs shown below
- [ ] Search filters results
- [ ] Accordions expand/collapse

### 10. Auth Edge Cases
- [ ] Client clicks "Forgot password" from login → enters email → success message shown
- [ ] Client tries accessing `/admin` → redirected to `/portal`
- [ ] Admin tries accessing `/portal` → redirected to `/admin`
- [ ] Unauthenticated user tries `/portal` or `/admin` → redirected to `/login`
- [ ] After login, user redirected to their intended destination
