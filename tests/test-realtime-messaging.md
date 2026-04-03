# TEST-04: Real-Time Messaging Verification

Test that Supabase Realtime delivers messages instantly.

## Setup
- [ ] Two browser windows open side-by-side
- [ ] Window 1: Admin logged in at `/admin/messages`
- [ ] Window 2: Client logged in at `/portal/messages`

## Tests

### Instant Delivery
- [ ] Client sends message → appears in admin inbox within 1 second (no refresh)
- [ ] Admin replies → appears in client chat within 1 second (no refresh)

### Auto-Scroll
- [ ] Send 20+ messages to create scroll → new messages auto-scroll into view

### Message Integrity
- [ ] Sender name shows correctly (client name vs "Hekatek")
- [ ] Timestamps accurate and formatted correctly
- [ ] Long messages don't break layout (word-break works)
- [ ] Special characters render correctly (no XSS: try `<script>alert(1)</script>`)

### Connection Recovery
- [ ] Disconnect WiFi briefly → reconnect → new messages still arrive
- [ ] Refresh one window → conversation history loads, realtime resumes
