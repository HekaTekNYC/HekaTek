/**
 * BE-06: Default asset checklist templates per project type.
 *
 * Each item has:
 * - name: display label
 * - required: whether the project can't proceed without it
 * - description: helper text explaining what's needed
 * - accepts: file types or "link" for URLs
 *
 * When a checklist is created for a project (via admin.js), each item gets
 * additional runtime fields: status, file_url, file_name, uploaded_at
 */

export const ASSET_CHECKLIST_TEMPLATES = [
  {
    project_type: 'static_website',
    items: [
      { name: 'Logo (SVG or high-res PNG)', required: true, description: 'Vector format preferred. At least 1000px wide if raster.', accepts: 'image' },
      { name: 'Brand Guidelines', required: false, description: 'Colors, fonts, logo usage rules. PDF or document.', accepts: 'document' },
      { name: 'Homepage Copy', required: true, description: 'Headline, subheadline, body text, and CTA for your homepage.', accepts: 'document' },
      { name: 'About Page Copy', required: false, description: 'Your story, team bios, mission statement.', accepts: 'document' },
      { name: 'Services / Offerings Copy', required: false, description: 'Descriptions of what you offer with any pricing details.', accepts: 'document' },
      { name: 'Hero / Banner Images', required: true, description: 'High-quality images for the homepage hero section. At least 1920px wide.', accepts: 'image' },
      { name: 'Team Photos', required: false, description: 'Headshots or team photos for the About page.', accepts: 'image' },
      { name: 'Portfolio / Gallery Images', required: false, description: 'Work samples, project photos, or product images.', accepts: 'image' },
      { name: 'Favicon / App Icon', required: false, description: 'Small square icon (512x512px PNG or SVG) for browser tabs.', accepts: 'image' },
      { name: 'Social Media Links', required: false, description: 'URLs for Instagram, Facebook, LinkedIn, Twitter, etc.', accepts: 'link' },
      { name: 'Contact Information', required: true, description: 'Business address, phone, email, hours of operation.', accepts: 'document' },
    ],
  },
  {
    project_type: 'shopify',
    items: [
      { name: 'Logo (SVG or high-res PNG)', required: true, description: 'Vector format preferred for crisp display at all sizes.', accepts: 'image' },
      { name: 'Brand Guidelines', required: false, description: 'Colors, fonts, logo usage rules.', accepts: 'document' },
      { name: 'Product Photos', required: true, description: 'High-quality photos for each product. Square format (2048x2048px) recommended. Multiple angles if possible.', accepts: 'image' },
      { name: 'Product Data (CSV or Spreadsheet)', required: true, description: 'Product names, descriptions, prices, SKUs, weights, variants. We can provide a template.', accepts: 'document' },
      { name: 'Product Descriptions', required: true, description: 'Written descriptions for each product or category. Can be in the spreadsheet.', accepts: 'document' },
      { name: 'Homepage Copy & Banner Images', required: true, description: 'Headline, promo text, and hero images for the storefront.', accepts: 'image' },
      { name: 'Collection / Category Images', required: false, description: 'Banner images for each product collection page.', accepts: 'image' },
      { name: 'Shipping Policy', required: true, description: 'Shipping rates, regions, delivery times, free shipping threshold.', accepts: 'document' },
      { name: 'Return / Refund Policy', required: true, description: 'Your return window, conditions, refund process.', accepts: 'document' },
      { name: 'About Page Copy', required: false, description: 'Brand story for the About page.', accepts: 'document' },
      { name: 'Social Media Links', required: false, description: 'URLs for your social accounts.', accepts: 'link' },
      { name: 'Favicon / App Icon', required: false, description: 'Square icon (512x512px) for browser tabs and bookmarks.', accepts: 'image' },
    ],
  },
  {
    project_type: 'agent_development',
    items: [
      { name: 'Workflow Documentation', required: true, description: 'Step-by-step description of the process(es) to automate. Flowcharts, SOPs, or written descriptions.', accepts: 'document' },
      { name: 'Sample Data', required: true, description: 'Example inputs the agent will process (emails, forms, records, etc.). Anonymize if needed.', accepts: 'document' },
      { name: 'API Documentation / Credentials', required: false, description: 'Docs or access details for any systems the agent needs to connect to.', accepts: 'document' },
      { name: 'Integration Access', required: true, description: 'Login credentials or API keys for tools the agent will use. Share securely (we\'ll provide a method).', accepts: 'document' },
      { name: 'Business Rules / Decision Logic', required: true, description: 'Rules the agent should follow. If/then logic, escalation criteria, exceptions.', accepts: 'document' },
      { name: 'Test Scenarios', required: false, description: 'Example scenarios with expected outcomes for testing the agent.', accepts: 'document' },
      { name: 'Brand Voice Guide', required: false, description: 'If the agent communicates with customers, provide tone/voice guidelines.', accepts: 'document' },
    ],
  },
  {
    project_type: 'crm',
    items: [
      { name: 'Contact Export (CSV)', required: true, description: 'Export of your existing contacts with name, email, phone, company, and any custom fields.', accepts: 'document' },
      { name: 'Pipeline / Stages Documentation', required: true, description: 'Written description of your sales stages, deal values, and win/loss criteria.', accepts: 'document' },
      { name: 'Team Member List', required: true, description: 'Names, emails, and roles of people who will use the CRM.', accepts: 'document' },
      { name: 'Email Templates', required: false, description: 'Any email templates you use regularly for outreach, follow-ups, etc.', accepts: 'document' },
      { name: 'Current CRM Export', required: false, description: 'Full data export from your current CRM (if migrating).', accepts: 'document' },
      { name: 'Custom Field Definitions', required: false, description: 'List of custom data fields you track (e.g., Industry, Source, Contract Value).', accepts: 'document' },
      { name: 'Logo (for CRM branding)', required: false, description: 'Your logo for the CRM interface.', accepts: 'image' },
    ],
  },
  {
    project_type: 'workflow_consulting',
    items: [
      { name: 'Current Process Documentation', required: true, description: 'SOPs, flowcharts, or written descriptions of the workflows you want improved.', accepts: 'document' },
      { name: 'Tool Access / Screenshots', required: true, description: 'Screenshots or viewer access to the tools your team uses daily.', accepts: 'image' },
      { name: 'Team Structure / Org Chart', required: false, description: 'Who does what, reporting lines, handoff points.', accepts: 'document' },
      { name: 'Pain Point Examples', required: true, description: 'Specific recent examples of where things went wrong or took too long.', accepts: 'document' },
      { name: 'Existing Automations', required: false, description: 'Any Zapier/Make/script automations already in place. Export configs if possible.', accepts: 'document' },
      { name: 'KPIs / Metrics You Track', required: false, description: 'What you currently measure (or want to measure) to evaluate workflow health.', accepts: 'document' },
    ],
  },
];
