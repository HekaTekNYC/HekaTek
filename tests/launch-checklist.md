# TEST-06 + TEST-07: Production Setup & Launch Checklist

## TEST-06: Supabase Production Environment

### Create Production Project
- [ ] Create new Supabase project (separate from dev)
- [ ] Note production URL and anon key

### Migrate Schema
- [ ] Run `supabase/migrations/000_all_combined.sql` in production SQL Editor
- [ ] Verify all tables created: profiles, projects, questionnaire_templates, questionnaire_responses, asset_checklists, asset_checklist_templates, project_phases, deliverables, approval_comments, messages
- [ ] Verify RLS enabled on all tables
- [ ] Verify `is_admin()` function exists
- [ ] Verify triggers: on_auth_user_created, updated_at triggers

### Seed Data
- [ ] Run `npm run seed` against production (update .env.local with prod keys temporarily)
- [ ] Verify questionnaire templates seeded (5 project types)
- [ ] Verify asset checklist templates seeded (5 project types)

### Storage
- [ ] Create "client-assets" bucket in Supabase Dashboard
  - Private bucket
  - 50MB file size limit
  - Allowed MIME types configured
- [ ] Verify storage RLS policies applied

### Realtime
- [ ] Verify `messages` table added to realtime publication

### Edge Functions
- [ ] Deploy waveapps-billing: `supabase functions deploy waveapps-billing`
- [ ] Set secrets: WAVEAPPS_ACCESS_TOKEN, WAVEAPPS_BUSINESS_ID

### Auth Configuration
- [ ] Configure invite email template in Supabase Auth settings
- [ ] Set redirect URLs for production domain
- [ ] Configure password reset email template
- [ ] Set minimum password length (8 chars)

### Create Admin Account
- [ ] Create admin user in Supabase Auth
- [ ] Set `role: 'admin'` in user metadata
- [ ] Verify admin profile auto-created by trigger
- [ ] Test admin login on production

### Configure Netlify
- [ ] Set environment variables on Netlify:
  - `VITE_SUPABASE_URL` = production project URL
  - `VITE_SUPABASE_ANON_KEY` = production anon key
- [ ] DO NOT commit production keys to git

---

## TEST-07: Deploy to Production

### Pre-Deploy
- [ ] All tests (TEST-01 through TEST-05) pass on dev
- [ ] No console errors in browser dev tools
- [ ] `npm run build` succeeds locally
- [ ] Git status clean (no uncommitted changes)

### Deploy
- [ ] Push `feature/client-portal` to remote
- [ ] Create PR against `dev` branch
- [ ] Code review complete
- [ ] Merge to `dev`
- [ ] Verify Netlify build succeeds
- [ ] Check Netlify deploy preview URL

### Smoke Test (Production)
- [ ] Marketing site loads correctly (no regressions)
- [ ] `/login` page renders with glassmorphic card
- [ ] Admin can log in → dashboard loads with stat cards
- [ ] Admin can invite a test client
- [ ] Client receives invite email
- [ ] Client sets password → portal loads
- [ ] Client can navigate all portal sections
- [ ] Real-time messaging works between admin and client
- [ ] Light/dark mode toggle works
- [ ] Mobile responsive — test on actual phone
- [ ] Supabase RLS prevents cross-client data access

### Post-Launch
- [ ] Monitor Supabase dashboard for errors
- [ ] Check Netlify function logs for Edge Function errors
- [ ] Invite first real client
