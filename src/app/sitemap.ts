import { MetadataRoute } from 'next';
import { SITE_URL, allSEOConfigs } from '@/lib/seo-config';
import { getBlogPosts } from '@/lib/blog';

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
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Generator routes
  const generatorRoutes = allSEOConfigs.map((config) => ({
    url: `${SITE_URL}/generator/${config.slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Blog routes
  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...generatorRoutes, ...blogRoutes];
}
