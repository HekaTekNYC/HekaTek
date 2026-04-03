# WaveApps Billing Integration Setup (INFRA-14)

## 1. Register WaveApps OAuth Application

1. Go to https://developer.waveapps.com/
2. Create a new application
3. Note your **Client ID** and **Client Secret**
4. Set redirect URI to your Supabase project URL

## 2. Get Access Token

1. Complete the OAuth flow to get an access token
2. The token grants access to your WaveApps business data

## 3. Get Business ID

1. Query the WaveApps API: `query { businesses { edges { node { id name } } } }`
2. Note your business ID

## 4. Configure Supabase Edge Function Secrets

In Supabase Dashboard > Edge Functions > Secrets, add:

```
WAVEAPPS_ACCESS_TOKEN=your_access_token_here
WAVEAPPS_BUSINESS_ID=your_business_id_here
```

## 5. Deploy the Edge Function

```bash
supabase functions deploy waveapps-billing
```

## 6. Test

```bash
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/waveapps-billing \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "client@example.com"}'
```
