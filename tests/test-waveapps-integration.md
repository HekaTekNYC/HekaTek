# TEST-05: WaveApps Integration Verification

Test the billing integration with real WaveApps data.

## Prerequisites
- [ ] WaveApps OAuth configured (see supabase/functions/waveapps-billing/SETUP.md)
- [ ] Edge Function deployed: `supabase functions deploy waveapps-billing`
- [ ] At least one WaveApps customer with matching portal email
- [ ] At least one invoice (paid, pending, overdue) for that customer

## Tests

### Edge Function
- [ ] Call function directly with valid email → returns invoice data
- [ ] Call with non-matching email → returns `{ found: false }`
- [ ] Call without auth header → returns 401
- [ ] Call without email in body → returns 400

### Client Billing Page
- [ ] Matching client sees invoice list with correct amounts
- [ ] Status badges correct: paid (teal), pending (amber), overdue (coral)
- [ ] Payment progress bar shows correct ratio (paid / total)
- [ ] Installment text correct: "Payment X of Y — $X of $Y paid"
- [ ] PDF download link opens correct PDF
- [ ] Payment history shows chronological entries
- [ ] Non-matching client sees "No invoices found" state

### Admin Billing Overview
- [ ] All clients listed with their billing summary
- [ ] Outstanding and overdue stat cards show correct totals
- [ ] Overdue accounts highlighted with coral badge
- [ ] Clients without WaveApps data show "No billing data"

### Accuracy
- [ ] Invoice amounts match WaveApps dashboard exactly
- [ ] Due dates correct
- [ ] Overdue detection works (past due date + unpaid)
