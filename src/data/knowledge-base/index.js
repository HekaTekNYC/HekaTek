import { baseFaqs } from './base-faqs';
import { staticSiteGuide } from './static-site';
import { shopifyGuide } from './shopify';
import { agentDevGuide } from './agent-dev';
import { crmGuide } from './crm';
import { workflowGuide } from './workflow';

/**
 * Knowledge base content structure.
 * Base FAQs are shown to all clients.
 * Project-type guides are shown based on the client's assigned project type.
 */

const projectTypeGuides = {
  static_website: staticSiteGuide,
  shopify: shopifyGuide,
  agent_development: agentDevGuide,
  crm: crmGuide,
  workflow_consulting: workflowGuide,
};

/**
 * Get all knowledge base content for a given project type.
 * Returns base FAQs plus type-specific guide.
 */
export function getKnowledgeBase(projectType) {
  return {
    faqs: baseFaqs,
    guide: projectTypeGuides[projectType] ?? null,
  };
}

export { baseFaqs, projectTypeGuides };
