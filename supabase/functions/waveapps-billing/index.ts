// Supabase Edge Function — WaveApps Billing Integration (INFRA-15)
// Queries WaveApps GraphQL API for invoices and payments by customer email.
//
// Environment variables required (set in Supabase Dashboard > Edge Functions > Secrets):
//   WAVEAPPS_ACCESS_TOKEN — OAuth access token from WaveApps
//   WAVEAPPS_BUSINESS_ID  — Your WaveApps business ID
//
// Called from the frontend via:
//   supabase.functions.invoke('waveapps-billing', { body: { email } })

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const WAVEAPPS_GRAPHQL_URL = 'https://gql.waveapps.com/graphql/public'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Verify the caller is authenticated
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { email } = await req.json()
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const accessToken = Deno.env.get('WAVEAPPS_ACCESS_TOKEN')
    const businessId = Deno.env.get('WAVEAPPS_BUSINESS_ID')

    if (!accessToken || !businessId) {
      return new Response(JSON.stringify({ error: 'WaveApps not configured' }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Query WaveApps for customer by email
    const customerQuery = `
      query ($businessId: ID!, $email: String!) {
        business(id: $businessId) {
          customers(
            filter: { email: $email }
            page: 1
            pageSize: 1
          ) {
            edges {
              node {
                id
                name
                email
              }
            }
          }
        }
      }
    `

    const customerRes = await fetch(WAVEAPPS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: customerQuery,
        variables: { businessId, email },
      }),
    })

    const customerData = await customerRes.json()
    const customer = customerData?.data?.business?.customers?.edges?.[0]?.node

    if (!customer) {
      return new Response(JSON.stringify({
        found: false,
        invoices: [],
        payments: [],
        summary: null,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Query invoices for this customer
    const invoiceQuery = `
      query ($businessId: ID!, $customerId: ID!) {
        business(id: $businessId) {
          invoices(
            customerId: $customerId
            page: 1
            pageSize: 50
          ) {
            edges {
              node {
                id
                invoiceNumber
                invoiceDate
                dueDate
                status
                currency { code }
                amountDue { value }
                amountPaid { value }
                total { value }
                pdfUrl
                items {
                  description
                  quantity
                  unitPrice { value }
                  amount { value }
                }
              }
            }
          }
        }
      }
    `

    const invoiceRes = await fetch(WAVEAPPS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: invoiceQuery,
        variables: { businessId, customerId: customer.id },
      }),
    })

    const invoiceData = await invoiceRes.json()
    const invoices = (invoiceData?.data?.business?.invoices?.edges || []).map(
      (e: any) => e.node
    )

    // Calculate summary
    const totalAmount = invoices.reduce((sum: number, inv: any) => sum + parseFloat(inv.total?.value || 0), 0)
    const totalPaid = invoices.reduce((sum: number, inv: any) => sum + parseFloat(inv.amountPaid?.value || 0), 0)
    const totalDue = invoices.reduce((sum: number, inv: any) => sum + parseFloat(inv.amountDue?.value || 0), 0)
    const overdueCount = invoices.filter((inv: any) =>
      inv.status === 'OVERDUE' || (inv.status === 'SENT' && new Date(inv.dueDate) < new Date())
    ).length

    return new Response(JSON.stringify({
      found: true,
      customer: { id: customer.id, name: customer.name, email: customer.email },
      invoices: invoices.map((inv: any) => ({
        id: inv.id,
        number: inv.invoiceNumber,
        date: inv.invoiceDate,
        dueDate: inv.dueDate,
        status: normalizeStatus(inv),
        currency: inv.currency?.code || 'USD',
        total: parseFloat(inv.total?.value || 0),
        amountPaid: parseFloat(inv.amountPaid?.value || 0),
        amountDue: parseFloat(inv.amountDue?.value || 0),
        pdfUrl: inv.pdfUrl,
      })),
      summary: {
        totalAmount,
        totalPaid,
        totalDue,
        invoiceCount: invoices.length,
        paidCount: invoices.filter((inv: any) => inv.status === 'PAID').length,
        overdueCount,
      },
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

function normalizeStatus(invoice: any): string {
  if (invoice.status === 'PAID') return 'paid'
  if (invoice.status === 'OVERDUE' || (invoice.status === 'SENT' && new Date(invoice.dueDate) < new Date())) return 'overdue'
  return 'pending'
}
