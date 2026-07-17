import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://fabosteo77.github.io/').replace(/\/$/, '');
  return new Response(
    `User-agent: *\nAllow: /\nDisallow: /styleguide\n\nSitemap: ${base}/sitemap-index.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};
