import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  const allowAiCrawlers = process.env.ROBOTS_ALLOW_AI_CRAWLERS === 'true';

  const robotsConfig: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/',
          '/_next/static/css/',
          '/_next/static/chunks/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/checkout/',
          '/thank-you/',
          '/cart/',
          '/search',
          '/_next/static/media/',
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
