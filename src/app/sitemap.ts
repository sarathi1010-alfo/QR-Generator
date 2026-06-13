import { MetadataRoute } from 'next';
import { SITE_URL, allSEOConfigs, competitors, templateCategories } from '@/lib/seo-config';
import { getBlogPosts } from '@/lib/blog';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export const revalidate = 3600; // Cache for 1 hour

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Base routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/blog',
    '/qr-code-scanner',
  ].map((route) => ({
    url: buildCanonical(route),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Generator routes
  const generatorRoutes: MetadataRoute.Sitemap = [];

  for (const config of allSEOConfigs) {
    // Main generator route
    generatorRoutes.push({
      url: buildCanonical(`/generator/${config.slug}`),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    });

    // Competitor vs routes
    for (const comp of competitors) {
      generatorRoutes.push({
        url: buildCanonical(`/generator/${config.slug}/vs/${comp.slug}`),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Template category routes
    for (const cat of templateCategories) {
      generatorRoutes.push({
        url: buildCanonical(`/generator/${config.slug}/templates/${cat.slug}`),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  // Blog routes
  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: buildCanonical(`/blog/${post.slug}`),
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt || lastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...generatorRoutes, ...blogRoutes];
}
