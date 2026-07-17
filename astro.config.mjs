import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL || 'https://fabosteo77.github.io';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
});
