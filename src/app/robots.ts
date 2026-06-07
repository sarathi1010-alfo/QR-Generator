import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404'], // Disallow known error pages or dynamic preview endpoints
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}