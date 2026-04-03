/**
 * BE-05: Questionnaire templates for all 5 project types.
 *
 * Structure:
 * - Each template has a project_type, title, and sections array
 * - Section 0 is always the shared "Base" section (every client answers)
 * - Sections 1+ are project-type-specific
 * - Each section has: id, title, description, fields[]
 * - Each field has: id, label, type, required, placeholder, options (for select/radio/checkbox)
 *
 * Field types: text, textarea, email, phone, url, number, select, radio, checkbox, multi_select
 */

const BASE_SECTION = {
  id: 'base',
  title: 'About You & Your Project',
  description: 'Basic information we need from every client.',
  fields: [
    { id: 'company_name', label: 'Company / Business Name', type: 'text', required: true, placeholder: 'e.g., Sunrise Bakery' },
    { id: 'contact_name', label: 'Primary Contact Name', type: 'text', required: true, placeholder: 'Your full name' },
    { id: 'contact_email', label: 'Contact Email', type: 'email', required: true, placeholder: 'you@company.com' },
    { id: 'contact_phone', label: 'Contact Phone', type: 'phone', required: false, placeholder: '(555) 123-4567' },
    { id: 'timeline', label: 'Desired Timeline', type: 'select', required: true, options: [
      'ASAP (1-2 weeks)',
      'Short (2-4 weeks)',
      'Standard (4-8 weeks)',
      'Flexible (8+ weeks)',
      'No rush — whenever it\'s ready',
    ]},
    { id: 'budget_range', label: 'Budget Range', type: 'select', required: true, options: [
      'Under $2,000',
      '$2,000 – $5,000',
      '$5,000 – $10,000',
      '$10,000 – $25,000',
      '$25,000+',
      'Not sure yet',
    ]},
    { id: 'goals', label: 'What are the main goals for this project?', type: 'textarea', required: true, placeholder: 'What does success look like? What problem are we solving?' },
    { id: 'existing_site', label: 'Do you have an existing website?', type: 'text', required: false, placeholder: 'URL or "No"' },
    { id: 'anything_else', label: 'Anything else we should know upfront?', type: 'textarea', required: false, placeholder: 'Deadlines, events, special requirements...' },
  ],
};

export const QUESTIONNAIRE_TEMPLATES = [
  {
    project_type: 'static_website',
    title: 'Static Website Questionnaire',
    sections: [
      BASE_SECTION,
      {
        id: 'static_site_details',
        title: 'Website Details',
        description: 'Help us understand what your site needs.',
        fields: [
          { id: 'pages_needed', label: 'What pages do you need?', type: 'multi_select', required: true, options: [
            'Home', 'About', 'Services', 'Portfolio / Gallery', 'Blog', 'Contact', 'FAQ', 'Pricing', 'Team', 'Testimonials', 'Other',
          ]},
          { id: 'pages_other', label: 'If "Other," describe additional pages', type: 'textarea', required: false, placeholder: 'e.g., Careers page, Events page...' },
          { id: 'content_readiness', label: 'How ready is your content?', type: 'radio', required: true, options: [
            'All written and ready to go',
            'Partially written — need help finishing',
            'Not written yet — need guidance',
            'Want to hire a copywriter (can recommend)',
          ]},
          { id: 'design_preferences', label: 'Describe the look and feel you want', type: 'textarea', required: true, placeholder: 'Modern & minimal? Bold & colorful? Professional & clean?' },
          { id: 'reference_sites', label: 'Reference websites you like (up to 3)', type: 'textarea', required: false, placeholder: 'Paste URLs and note what you like about each' },
          { id: 'brand_assets', label: 'Do you have brand assets (logo, colors, fonts)?', type: 'radio', required: true, options: [
            'Yes — I have a full brand guide',
            'Yes — I have a logo but no formal guide',
            'No — I need branding from scratch',
          ]},
          { id: 'features', label: 'Any special features needed?', type: 'multi_select', required: false, options: [
            'Contact form', 'Newsletter signup', 'Social media links', 'Google Maps embed', 'Photo gallery / lightbox', 'Video embed', 'Animations / scroll effects', 'Multi-language',
          ]},
        ],
      },
    ],
  },
  {
    project_type: 'shopify',
    title: 'Shopify Ecommerce Questionnaire',
    sections: [
      BASE_SECTION,
      {
        id: 'shopify_details',
        title: 'Store Details',
        description: 'Tell us about your products and store needs.',
        fields: [
          { id: 'product_count', label: 'How many products will you launch with?', type: 'select', required: true, options: [
            '1-10', '11-50', '51-100', '100-500', '500+',
          ]},
          { id: 'product_categories', label: 'List your product categories', type: 'textarea', required: true, placeholder: 'e.g., T-Shirts, Hoodies, Accessories' },
          { id: 'product_photos_ready', label: 'Are your product photos ready?', type: 'radio', required: true, options: [
            'Yes — all products photographed',
            'Partially — some products still need photos',
            'No — I need photography guidance',
          ]},
          { id: 'existing_inventory', label: 'Do you have an existing inventory spreadsheet or system?', type: 'radio', required: true, options: [
            'Yes — I have a CSV / spreadsheet',
            'Yes — in another platform (specify below)',
            'No — starting from scratch',
          ]},
          { id: 'existing_platform', label: 'If migrating, which platform?', type: 'text', required: false, placeholder: 'e.g., WooCommerce, Etsy, Square' },
          { id: 'payment_providers', label: 'Preferred payment provider(s)', type: 'multi_select', required: true, options: [
            'Shopify Payments', 'PayPal', 'Apple Pay', 'Google Pay', 'Klarna / Afterpay', 'Other',
          ]},
          { id: 'shipping_strategy', label: 'Shipping strategy', type: 'select', required: true, options: [
            'Flat rate shipping',
            'Weight-based shipping',
            'Free shipping (all orders)',
            'Free shipping over a threshold',
            'Local pickup only',
            'Not sure yet',
          ]},
          { id: 'shipping_regions', label: 'Where do you ship?', type: 'multi_select', required: true, options: [
            'United States', 'Canada', 'International', 'Local only',
          ]},
          { id: 'design_preferences', label: 'Describe the look and feel you want for your store', type: 'textarea', required: true, placeholder: 'Luxury? Playful? Minimal? Reference any stores you like.' },
          { id: 'reference_sites', label: 'Reference stores you admire (up to 3)', type: 'textarea', required: false, placeholder: 'Paste URLs and note what you like about each' },
        ],
      },
    ],
  },
  {
    project_type: 'agent_development',
    title: 'Agent Development Questionnaire',
    sections: [
      BASE_SECTION,
      {
        id: 'agent_details',
        title: 'Agent Requirements',
        description: 'Help us understand the workflows you want to automate.',
        fields: [
          { id: 'workflows', label: 'What tasks or workflows should the agent handle?', type: 'textarea', required: true, placeholder: 'Describe what you want automated — be as specific as possible' },
          { id: 'current_process', label: 'How do you currently handle these tasks?', type: 'textarea', required: true, placeholder: 'Manual steps, tools used, who does the work, time spent...' },
          { id: 'existing_tools', label: 'What tools and systems does your team use?', type: 'multi_select', required: true, options: [
            'Gmail / Google Workspace', 'Outlook / Microsoft 365', 'Slack', 'HubSpot', 'Salesforce', 'Notion', 'Airtable', 'Zapier', 'Spreadsheets (Google Sheets / Excel)', 'Custom database', 'Other',
          ]},
          { id: 'tools_other', label: 'If "Other," list additional tools', type: 'textarea', required: false, placeholder: 'e.g., Intercom, Zendesk, custom API...' },
          { id: 'data_sources', label: 'What data does the agent need access to?', type: 'textarea', required: true, placeholder: 'Databases, APIs, documents, emails, spreadsheets...' },
          { id: 'guardrails', label: 'What rules or guardrails should the agent follow?', type: 'textarea', required: true, placeholder: 'What should it never do? Approval steps? Escalation rules?' },
          { id: 'volume', label: 'Expected volume (tasks per day/week)', type: 'text', required: false, placeholder: 'e.g., 50 emails/day, 200 records/week' },
          { id: 'success_criteria', label: 'How will you measure success?', type: 'textarea', required: true, placeholder: 'Time saved? Error reduction? Response speed? Cost savings?' },
        ],
      },
    ],
  },
  {
    project_type: 'crm',
    title: 'CRM Setup Questionnaire',
    sections: [
      BASE_SECTION,
      {
        id: 'crm_details',
        title: 'CRM Requirements',
        description: 'Tell us about your contacts, pipeline, and current setup.',
        fields: [
          { id: 'current_crm', label: 'Are you currently using a CRM?', type: 'radio', required: true, options: [
            'Yes — and I want to migrate',
            'Yes — but I want to start fresh',
            'No — first CRM',
          ]},
          { id: 'current_crm_name', label: 'If yes, which CRM?', type: 'text', required: false, placeholder: 'e.g., HubSpot, Salesforce, Zoho, spreadsheets' },
          { id: 'contact_volume', label: 'Approximately how many contacts/leads do you manage?', type: 'select', required: true, options: [
            'Under 100', '100-500', '500-2,000', '2,000-10,000', '10,000+',
          ]},
          { id: 'pipeline_stages', label: 'Describe your sales or client pipeline stages', type: 'textarea', required: true, placeholder: 'e.g., Lead → Contacted → Proposal → Negotiation → Closed Won / Lost' },
          { id: 'team_size', label: 'How many people will use the CRM?', type: 'select', required: true, options: [
            'Just me', '2-5', '6-15', '15+',
          ]},
          { id: 'integrations_needed', label: 'What tools should the CRM connect to?', type: 'multi_select', required: true, options: [
            'Email (Gmail/Outlook)', 'Calendar', 'Invoicing / Accounting', 'Marketing (Mailchimp, etc.)', 'Phone / VoIP', 'Website forms', 'Social media', 'Other',
          ]},
          { id: 'integrations_other', label: 'If "Other," list additional integrations', type: 'text', required: false, placeholder: '' },
          { id: 'custom_fields', label: 'Any custom data fields you track?', type: 'textarea', required: false, placeholder: 'e.g., Industry, Referral Source, Contract Value, Renewal Date...' },
          { id: 'reporting', label: 'What reports or dashboards do you need?', type: 'textarea', required: false, placeholder: 'e.g., Monthly closed deals, lead source breakdown, team performance' },
        ],
      },
    ],
  },
  {
    project_type: 'workflow_consulting',
    title: 'Workflow Consulting Questionnaire',
    sections: [
      BASE_SECTION,
      {
        id: 'workflow_details',
        title: 'Your Current Workflow',
        description: 'Help us understand your operations so we can identify improvements.',
        fields: [
          { id: 'pain_points', label: 'What are your biggest operational pain points?', type: 'textarea', required: true, placeholder: 'What takes too long? What falls through the cracks? Where do errors happen?' },
          { id: 'current_tools', label: 'What tools does your team currently use?', type: 'multi_select', required: true, options: [
            'Google Workspace', 'Microsoft 365', 'Slack', 'Asana', 'Trello', 'Monday.com', 'Notion', 'Airtable', 'Zapier / Make', 'QuickBooks / Xero', 'Spreadsheets', 'Paper / manual processes', 'Other',
          ]},
          { id: 'tools_other', label: 'If "Other," list additional tools', type: 'textarea', required: false, placeholder: '' },
          { id: 'team_size', label: 'Team size', type: 'select', required: true, options: [
            'Solo', '2-5', '6-15', '16-50', '50+',
          ]},
          { id: 'departments', label: 'Which departments or functions are involved?', type: 'multi_select', required: false, options: [
            'Sales', 'Marketing', 'Operations', 'Finance', 'Customer Support', 'HR', 'Product / Development', 'Other',
          ]},
          { id: 'processes_to_improve', label: 'List 2-3 specific processes you want improved', type: 'textarea', required: true, placeholder: 'Be specific: e.g., "Client onboarding takes 2 weeks because we chase documents by email"' },
          { id: 'desired_outcomes', label: 'What does success look like?', type: 'textarea', required: true, placeholder: 'Time saved? Fewer errors? Better visibility? Faster handoffs?' },
          { id: 'previous_attempts', label: 'Have you tried to improve these workflows before?', type: 'textarea', required: false, placeholder: 'What worked? What didn\'t?' },
        ],
      },
    ],
  },
];
