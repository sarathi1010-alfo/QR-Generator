import { buildCanonical } from '@/lib/seo/buildCanonical';

export async function GET() {
  const lastModified = new Date().toISOString();
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/blog',
    '/scanner',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${buildCanonical(route)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
