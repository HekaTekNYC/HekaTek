# TEST-02: Full Admin Journey — E2E Test Checklist

Manual walkthrough covering the complete admin experience.

## Test Steps

### 1. Dashboard
- [ ] Admin logs in → sees dashboard with 4 stat cards
- [ ] Stat cards show real data (clients, projects, approvals, messages)
- [ ] Recent clients list shows latest clients
- [ ] "+ Invite Client" button navigates to clients page

### 2. Client Management
- [ ] `/admin/clients` shows all clients with status badges
- [ ] Invite modal opens, all fields validate
- [ ] After invite, new client appears in list immediately
- [ ] Client row shows project name and status

### 3. Phase Management
- [ ] `/admin/phases` shows project list in sidebar
- [ ] Select a project → phases load
- [ ] Edit start date → saves immediately
- [ ] Edit end date → saves immediately
- [ ] Change status dropdown → saves, "Updated" timestamp shown
- [ ] Client sees updated dates in their timeline

### 4. Deliverable Upload
- [ ] `/admin/deliverables` shows all deliverables
- [ ] Filter tabs work (All/Pending/Approved/Changes)
- [ ] "+ Upload Deliverable" modal opens
- [ ] Select project → phases dropdown populates
- [ ] Enter title + Figma link → submit
- [ ] New deliverable appears in list with "Pending" badge

### 5. Approval Monitoring
- [ ] Deliverables page shows status badges updating after client actions
- [ ] Filter by "Changes Requested" shows only those

### 6. Questionnaire Review
- [ ] `/admin/questionnaires` shows project list
- [ ] Select a project → client's completed responses shown
- [ ] Responses organized by section with field labels and values
- [ ] Incomplete questionnaires show "In Progress" badge

### 7. Asset Review
- [ ] `/admin/assets` shows project list
- [ ] Select a project → checklist with progress bar
- [ ] Download link works for uploaded files
- [ ] "Mark Received" button changes status to teal
- [ ] Progress bar updates

### 8. Messaging
- [ ] `/admin/messages` shows all threads with client names
- [ ] Last message preview shown per thread
- [ ] Select a thread → full conversation loads
- [ ] Send a reply → message appears
- [ ] Client sees it in real-time

### 9. Billing
- [ ] `/admin/billing` shows all clients with payment data
- [ ] Total outstanding and overdue counts shown
- [ ] Overdue accounts show coral badge
- [ ] Clients without WaveApps data show "No billing data"
