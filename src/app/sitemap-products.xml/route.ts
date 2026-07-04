import { allSEOConfigs } from '@/lib/seo-config';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export async function GET() {
  const lastModified = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allSEOConfigs
    .map(
      (config) => `
  <url>
    <loc>${buildCanonical(`/qr-codes/${config.slug}`)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
