import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  const allowAiCrawlers = process.env.ROBOTS_ALLOW_AI_CRAWLERS === 'true';

  const robotsConfig: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/checkout/',
          '/thank-you/',
          '/cart/',
          '/*?*', // block all query-string variants
          '/search',
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };

  if (!allowAiCrawlers) {
    robotsConfig.rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules as any];

    robotsConfig.rules.push(
      { userAgent: 'GPTBot', disallow: ['/'] },
      { userAgent: 'Claude-Web', disallow: ['/'] },
      { userAgent: 'CCBot', disallow: ['/'] },
      { userAgent: 'Google-Extended', disallow: ['/'] },
      { userAgent: 'anthropic-ai', disallow: ['/'] },
      { userAgent: 'Bytespider', disallow: ['/'] }
    );
  }

  return robotsConfig;
}
