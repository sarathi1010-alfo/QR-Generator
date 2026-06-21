import { allSEOConfigs } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const baseUrl = "https://qr.alfo.online";

  // Static pages - only verified working routes
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/qr-code-scanner`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  // Generator pages from seo-config (only valid slugs that exist)
  const generatorPages = allSEOConfigs
    .filter(config => config.slug) // Ensure slug exists
    .map((config) => ({
      url: `${baseUrl}/generator/${config.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  // Blog posts - only published posts with valid content
  const blogPosts = getBlogPosts()
    .filter(post => post.slug && post.title) // Ensure valid posts
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...generatorPages, ...blogPosts];
}
