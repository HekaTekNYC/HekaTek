# TEST-03: RLS Policy Verification

Test that Row Level Security correctly isolates client data.
Requires two test client accounts linked to different projects.

## Setup
- [ ] Create Client A (email: testa@example.com, project: "Project A")
- [ ] Create Client B (email: testb@example.com, project: "Project B")
- [ ] Add test data to both projects (messages, assets, deliverables)

## Isolation Tests (run queries as each client via Supabase client SDK)

### Profiles
- [ ] Client A can read their own profile
- [ ] Client A CANNOT read Client B's profile
- [ ] Admin can read both profiles

### Projects
- [ ] Client A sees only Project A in `projects` table
- [ ] Client A CANNOT see Project B
- [ ] Admin sees both projects

### Questionnaire Responses
- [ ] Client A sees only their questionnaire response
- [ ] Client A CANNOT insert a response for Project B
- [ ] Admin sees all responses

### Asset Checklists
- [ ] Client A sees only their checklist
- [ ] Client A CANNOT update Client B's checklist

### Project Phases
- [ ] Client A sees only their project's phases
- [ ] Client A CANNOT see Client B's phases

### Deliverables & Approvals
- [ ] Client A sees only deliverables for Project A
- [ ] Client A CANNOT approve Client B's deliverables
- [ ] Client A can insert approval comments only on their own deliverables

### Messages
- [ ] Client A sees only messages for Project A
- [ ] Client A CANNOT read Client B's messages
- [ ] Client A can only send messages in their own project
- [ ] Admin sees all messages

### Storage
- [ ] Client A can upload to `client-assets/projectA_id/*`
- [ ] Client A CANNOT access `client-assets/projectB_id/*`
- [ ] Admin can access all files
