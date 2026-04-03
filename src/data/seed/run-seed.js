/**
 * Seed script — run via: node src/data/seed/run-seed.js
 *
 * Populates questionnaire_templates and asset_checklist_templates
 * in the live Supabase database. Safe to run multiple times
 * (uses upsert on project_type).
 *
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY
 * in .env.local (service role needed to bypass RLS).
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse .env.local manually (no dotenv dependency needed)
function loadEnv() {
  const envPath = resolve(__dirname, '../../../.env.local');
  const content = readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    env[key.trim()] = rest.join('=').trim();
  }
  return env;
}

const env = loadEnv();
const supabaseUrl = env.VITE_SUPABASE_URL;
const serviceRoleKey = env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local');
  console.error('   The service role key is required to bypass RLS for seeding.');
  console.error('   Find it in: Supabase Dashboard → Settings → API → service_role key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

// Dynamic import of seed data (ESM)
const { QUESTIONNAIRE_TEMPLATES } = await import('./questionnaire-templates.js');
const { ASSET_CHECKLIST_TEMPLATES } = await import('./asset-checklist-templates.js');

async function seedQuestionnaireTemplates() {
  console.log('📋 Seeding questionnaire templates...');

  for (const template of QUESTIONNAIRE_TEMPLATES) {
    const { error } = await supabase
      .from('questionnaire_templates')
      .upsert(
        {
          project_type: template.project_type,
          title: template.title,
          sections: template.sections,
        },
        { onConflict: 'project_type' }
      );

    if (error) {
      console.error(`   ❌ ${template.project_type}:`, error.message);
    } else {
      console.log(`   ✅ ${template.project_type}`);
    }
  }
}

async function seedAssetChecklistTemplates() {
  console.log('📦 Seeding asset checklist templates...');

  for (const template of ASSET_CHECKLIST_TEMPLATES) {
    const { error } = await supabase
      .from('asset_checklist_templates')
      .upsert(
        {
          project_type: template.project_type,
          items: template.items,
        },
        { onConflict: 'project_type' }
      );

    if (error) {
      console.error(`   ❌ ${template.project_type}:`, error.message);
    } else {
      console.log(`   ✅ ${template.project_type}`);
    }
  }
}

async function main() {
  console.log('🌱 Starting seed...\n');
  await seedQuestionnaireTemplates();
  console.log('');
  await seedAssetChecklistTemplates();
  console.log('\n🌱 Seed complete.');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
