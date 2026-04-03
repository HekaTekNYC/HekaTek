import { supabase } from './supabase';

/**
 * BE-08: Checklist generation logic.
 *
 * Called after a client submits their questionnaire. Reads the questionnaire
 * responses and derives additional asset checklist items beyond the base
 * template. Merges them into the project's existing checklist, deduplicating
 * by item name.
 *
 * The base checklist is created at invite time (admin.js → createAssetChecklist).
 * This function enriches it based on what we now know from the questionnaire.
 */

/**
 * Generate and merge derived checklist items from questionnaire answers.
 *
 * @param {string} projectId
 * @param {string} projectType
 * @param {Object} responses - The full questionnaire responses JSONB (keyed by section ID)
 */
export async function generateChecklist(projectId, projectType, responses) {
  // 1. Derive additional items from answers
  const derivedItems = deriveItems(projectType, responses);

  if (derivedItems.length === 0) return;

  // 2. Fetch current checklist
  const { data: checklist, error: fetchError } = await supabase
    .from('asset_checklists')
    .select('id, items')
    .eq('project_id', projectId)
    .single();

  if (fetchError) throw fetchError;

  // 3. Merge: add derived items that don't already exist (by name)
  const existingNames = new Set(checklist.items.map((i) => i.name));
  const newItems = derivedItems
    .filter((item) => !existingNames.has(item.name))
    .map((item) => ({
      ...item,
      status: 'pending',
      file_url: null,
      file_name: null,
      uploaded_at: null,
    }));

  // 4. Also upgrade any existing items from optional to required if the
  //    questionnaire answers indicate they're now needed
  const upgrades = deriveUpgrades(projectType, responses);
  const updatedItems = checklist.items.map((item) => {
    if (upgrades[item.name]) {
      return { ...item, ...upgrades[item.name] };
    }
    return item;
  });

  const mergedItems = [...updatedItems, ...newItems];

  // 5. Write back
  const { error: updateError } = await supabase
    .from('asset_checklists')
    .update({ items: mergedItems })
    .eq('id', checklist.id);

  if (updateError) throw updateError;
}

/**
 * Derive additional checklist items based on questionnaire answers.
 * Returns an array of new item objects (without runtime status fields).
 */
function deriveItems(projectType, responses) {
  const items = [];

  switch (projectType) {
    case 'static_website':
      items.push(...deriveStaticSiteItems(responses));
      break;
    case 'shopify':
      items.push(...deriveShopifyItems(responses));
      break;
    case 'agent_development':
      items.push(...deriveAgentItems(responses));
      break;
    case 'crm':
      items.push(...deriveCrmItems(responses));
      break;
    case 'workflow_consulting':
      items.push(...deriveWorkflowItems(responses));
      break;
  }

  return items;
}

// ── Static Website ──────────────────────────────────────────

function deriveStaticSiteItems(responses) {
  const items = [];
  const details = responses.static_site_details || {};
  const pages = details.pages_needed || [];

  if (pages.includes('Portfolio / Gallery')) {
    items.push({
      name: 'Portfolio / Gallery Images',
      required: true,
      description: 'Project photos or work samples for your portfolio page. High-res, at least 1200px wide.',
      accepts: 'image',
    });
  }

  if (pages.includes('Blog')) {
    items.push({
      name: 'Blog Post Drafts',
      required: false,
      description: 'Draft content for initial blog posts (at least 1-2 posts for launch). Document format.',
      accepts: 'document',
    });
  }

  if (pages.includes('Team')) {
    items.push({
      name: 'Team Member Bios',
      required: true,
      description: 'Short bio (2-3 sentences) for each team member to display on the Team page.',
      accepts: 'document',
    });
  }

  if (pages.includes('Testimonials')) {
    items.push({
      name: 'Client Testimonials',
      required: true,
      description: 'Quotes from clients with their name, title, and company. Photo optional but recommended.',
      accepts: 'document',
    });
  }

  if (pages.includes('Pricing')) {
    items.push({
      name: 'Pricing Details',
      required: true,
      description: 'Your pricing tiers, packages, or rate information for the Pricing page.',
      accepts: 'document',
    });
  }

  if (pages.includes('FAQ')) {
    items.push({
      name: 'FAQ Content',
      required: true,
      description: 'List of frequently asked questions and answers for your FAQ page.',
      accepts: 'document',
    });
  }

  if (pages.includes('Other') && details.pages_other) {
    items.push({
      name: 'Additional Page Copy',
      required: true,
      description: `Content for your custom page(s): ${details.pages_other.substring(0, 100)}`,
      accepts: 'document',
    });
  }

  // Features-based items
  const features = details.features || [];

  if (features.includes('Video embed')) {
    items.push({
      name: 'Video Files or Links',
      required: true,
      description: 'Video files (MP4/MOV, max 50MB) or YouTube/Vimeo URLs for embedding.',
      accepts: 'video',
    });
  }

  if (features.includes('Newsletter signup')) {
    items.push({
      name: 'Email Marketing Platform Details',
      required: false,
      description: 'Which email platform (Mailchimp, ConvertKit, etc.) and your API key or embed code.',
      accepts: 'document',
    });
  }

  return items;
}

// ── Shopify ─────────────────────────────────────────────────

function deriveShopifyItems(responses) {
  const items = [];
  const details = responses.shopify_details || {};

  // Migrating from another platform
  if (details.existing_inventory === 'Yes — in another platform (specify below)') {
    items.push({
      name: 'Platform Migration Export',
      required: true,
      description: `Full data export from ${details.existing_platform || 'your current platform'}. Include products, customers, and order history if available.`,
      accepts: 'document',
    });
  }

  // Large catalogs need structured data
  const bigCatalog = ['100-500', '500+'].includes(details.product_count);
  if (bigCatalog) {
    items.push({
      name: 'Product Variant Matrix',
      required: true,
      description: 'Spreadsheet mapping all product variants (sizes, colors, etc.) with SKUs and prices. We\'ll provide a Shopify-compatible template.',
      accepts: 'document',
    });
  }

  // International shipping needs tax docs
  const regions = details.shipping_regions || [];
  if (regions.includes('International')) {
    items.push({
      name: 'International Shipping Rates',
      required: true,
      description: 'Shipping rates and delivery estimates for international zones. Include any countries you exclude.',
      accepts: 'document',
    });
  }

  // Klarna/Afterpay requires extra setup
  const payments = details.payment_providers || [];
  if (payments.includes('Klarna / Afterpay')) {
    items.push({
      name: 'BNPL Provider Credentials',
      required: true,
      description: 'Klarna or Afterpay merchant account details for integration setup.',
      accepts: 'document',
    });
  }

  return items;
}

// ── Agent Development ───────────────────────────────────────

function deriveAgentItems(responses) {
  const items = [];
  const details = responses.agent_details || {};
  const tools = details.existing_tools || [];

  // If they use tools beyond the standard list, they'll have API docs
  if (tools.includes('Other') && details.tools_other) {
    items.push({
      name: 'Custom Tool Documentation',
      required: true,
      description: `API docs or integration guides for: ${details.tools_other.substring(0, 100)}`,
      accepts: 'document',
    });
  }

  // If they specified high volume, we need performance requirements
  if (details.volume) {
    items.push({
      name: 'Volume & Performance Requirements',
      required: false,
      description: 'Detailed breakdown of expected throughput, peak times, and acceptable latency.',
      accepts: 'document',
    });
  }

  // Custom database means we need schema docs
  if (tools.includes('Custom database')) {
    items.push({
      name: 'Database Schema Documentation',
      required: true,
      description: 'Schema docs, ERD, or table definitions for your custom database. Include access credentials securely.',
      accepts: 'document',
    });
  }

  return items;
}

// ── CRM ─────────────────────────────────────────────────────

function deriveCrmItems(responses) {
  const items = [];
  const details = responses.crm_details || {};
  const integrations = details.integrations_needed || [];

  // If migrating, Current CRM Export becomes more critical
  // (it's already in the template as optional — we'll upgrade it via deriveUpgrades)

  // Large contact volumes need deduplication prep
  const bigVolume = ['2,000-10,000', '10,000+'].includes(details.contact_volume);
  if (bigVolume) {
    items.push({
      name: 'Deduplication Rules',
      required: false,
      description: 'How should we identify duplicate contacts? (e.g., match by email, phone, company name). Helps us clean data during import.',
      accepts: 'document',
    });
  }

  // Marketing integration needs existing templates/lists
  if (integrations.includes('Marketing (Mailchimp, etc.)')) {
    items.push({
      name: 'Marketing Platform Access',
      required: true,
      description: 'Admin or API access to your marketing platform (Mailchimp, Constant Contact, etc.) for CRM integration.',
      accepts: 'document',
    });
  }

  // Website forms integration
  if (integrations.includes('Website forms')) {
    items.push({
      name: 'Website Form Examples',
      required: false,
      description: 'URLs or screenshots of website forms you want connected to the CRM. Include what fields each form captures.',
      accepts: 'document',
    });
  }

  if (details.custom_fields) {
    items.push({
      name: 'Custom Field Specifications',
      required: true,
      description: 'Detailed list of custom fields with data types (text, number, date, dropdown) and any dropdown option values.',
      accepts: 'document',
    });
  }

  return items;
}

// ── Workflow Consulting ─────────────────────────────────────

function deriveWorkflowItems(responses) {
  const items = [];
  const details = responses.workflow_details || {};
  const tools = details.current_tools || [];
  const departments = details.departments || [];

  // Multi-department means we need handoff documentation
  if (departments.length > 1) {
    items.push({
      name: 'Cross-Department Handoff Map',
      required: true,
      description: `Document how work passes between ${departments.join(', ')}. Include triggers, owners, and common failure points.`,
      accepts: 'document',
    });
  }

  // If they have existing automations, we need the configs
  if (tools.includes('Zapier / Make')) {
    items.push({
      name: 'Automation Configs Export',
      required: true,
      description: 'Export your existing Zapier Zaps or Make scenarios so we can audit and optimize them.',
      accepts: 'document',
    });
  }

  // Paper/manual processes need extra documentation
  if (tools.includes('Paper / manual processes')) {
    items.push({
      name: 'Manual Process Recordings',
      required: false,
      description: 'Screen recordings or photos of manual/paper processes. Helps us understand exactly what needs digitizing.',
      accepts: 'video',
    });
  }

  if (details.previous_attempts) {
    items.push({
      name: 'Previous Improvement Attempts',
      required: false,
      description: 'Documentation from past workflow improvement efforts — what was tried, what worked, what failed.',
      accepts: 'document',
    });
  }

  return items;
}

/**
 * Derive upgrades to existing checklist items based on answers.
 * Returns { "Item Name": { required: true, description: "..." }, ... }
 */
function deriveUpgrades(projectType, responses) {
  const upgrades = {};

  switch (projectType) {
    case 'static_website': {
      const details = responses.static_site_details || {};
      // If client has no brand assets, the Brand Guidelines item isn't useful
      // but if they have a logo, make it required
      if (details.brand_assets === 'Yes — I have a full brand guide') {
        upgrades['Brand Guidelines'] = { required: true };
      }
      // If pages include About, make About Page Copy required
      const pages = details.pages_needed || [];
      if (pages.includes('About')) {
        upgrades['About Page Copy'] = { required: true };
      }
      if (pages.includes('Services')) {
        upgrades['Services / Offerings Copy'] = { required: true };
      }
      if (pages.includes('Team')) {
        upgrades['Team Photos'] = { required: true };
      }
      break;
    }

    case 'crm': {
      const details = responses.crm_details || {};
      // If migrating, make the CRM export required
      if (details.current_crm === 'Yes — and I want to migrate') {
        upgrades['Current CRM Export'] = {
          required: true,
          description: `Full data export from ${details.current_crm_name || 'your current CRM'}. Include contacts, deals, activities, and custom fields.`,
        };
      }
      break;
    }

    case 'shopify': {
      const details = responses.shopify_details || {};
      // If they have an existing CSV, make Product Data required and update description
      if (details.existing_inventory === 'Yes — I have a CSV / spreadsheet') {
        upgrades['Product Data (CSV or Spreadsheet)'] = {
          description: 'Upload your existing product spreadsheet. We\'ll map it to Shopify\'s format. Include all variants, prices, and SKUs.',
        };
      }
      break;
    }
  }

  return upgrades;
}
