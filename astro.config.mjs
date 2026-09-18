import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL || 'https://fabosteo.fr';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // /styleguide is an internal design page, already disallowed in robots.txt.
  integrations: [sitemap({ filter: (page) => !page.includes('/styleguide') })],
});
