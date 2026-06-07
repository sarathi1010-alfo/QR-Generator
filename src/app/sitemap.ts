import { MetadataRoute } from 'next';
import { SITE_URL, allSEOConfigs, competitors, templateCategories } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapUrls: MetadataRoute.Sitemap = [];

  // 1. Static Pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/blog',
    '/qr-code-scanner',
  ];

  staticPages.forEach((page) => {
    sitemapUrls.push({
      url: `${SITE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page === '' ? 1.0 : 0.8,
    });
  });

  // 2. Dynamic Generator Pages
  allSEOConfigs.forEach((config) => {
    sitemapUrls.push({
      url: `${SITE_URL}/generator/${config.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });

    // 3. Programmatic Competitor Comparison Pages
    competitors.forEach((comp) => {
      sitemapUrls.push({
        url: `${SITE_URL}/generator/${config.slug}/vs/${comp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });

    // 4. Programmatic Template Pages
    templateCategories.forEach((cat) => {
      sitemapUrls.push({
        url: `${SITE_URL}/generator/${config.slug}/templates/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemapUrls;
}