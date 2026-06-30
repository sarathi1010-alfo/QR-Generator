import { getBlogPosts } from '@/lib/blog';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export async function GET() {
  const blogPosts = getBlogPosts();
  const lastModified = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${blogPosts
    .map((post) => {
      const date = post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt || lastModified);
      return `
  <url>
    <loc>${buildCanonical(`/blog/${post.slug}`)}</loc>
    <lastmod>${date.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
