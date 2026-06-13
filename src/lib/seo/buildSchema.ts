import { SeoMeta } from '@/types/seo';
import { SITE_URL } from '@/lib/seo-config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'QRBuild';

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": BASE_URL,
    // "logo": `${BASE_URL}/logo.png`, // Add logo if available
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/search?q={search_term_string}` // Modify if search structure is different
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbSchema(items: Array<{ label: string; href: string }>) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${BASE_URL}${item.href}`
    }))
  };
}

export function buildArticleSchema(meta: SeoMeta) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.description,
    "publisher": buildOrganizationSchema(),
  };

  if (meta.publishedAt) schema.datePublished = meta.publishedAt;
  if (meta.updatedAt) schema.dateModified = meta.updatedAt;
  if (meta.ogImage?.url) schema.image = [meta.ogImage.url];
  if (meta.author) {
    schema.author = {
      "@type": "Person",
      "name": meta.author.name,
    };
    if (meta.author.url) schema.author.url = meta.author.url;
  }

  return schema;
}

export function buildProductSchema(meta: SeoMeta) {
  if (!meta.productData) return null;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": meta.productData.name,
    "description": meta.description,
    "offers": {
      "@type": "Offer",
      "price": meta.productData.price,
      "priceCurrency": meta.productData.currency,
      "availability": `https://schema.org/${meta.productData.availability}`
    }
  };

  if (meta.ogImage?.url) schema.image = [meta.ogImage.url];
  if (meta.productData.sku) schema.sku = meta.productData.sku;
  if (meta.productData.brand) {
    schema.brand = {
      "@type": "Brand",
      "name": meta.productData.brand
    };
  }
  if (meta.productData.ratingValue && meta.productData.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": meta.productData.ratingValue,
      "reviewCount": meta.productData.reviewCount
    };
  }

  return schema;
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }> | undefined) {
  if (!items || items.length === 0) return null;

  // AEO: Maximum 10 FAQ items
  const limitedItems = items.slice(0, 10);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": limitedItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function buildAuthorSchema(meta: SeoMeta) {
  if (!meta.author) return null;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": meta.author.name,
  };

  if (meta.author.url) schema.url = meta.author.url;

  return schema;
}

export function buildSitelinksSearchBoxSchema() {
   return buildWebsiteSchema(); // Sitelinks searchbox is typically part of WebSite schema
}

export function buildHowToSchema(page: any) {
  if (!page.steps || page.steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": page.title,
    "description": page.description,
    "step": page.steps.map((s: any, i: number) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.heading,
      "text": s.body,
      "image": s.image?.url,
    })),
    "totalTime": page.estimatedTime,
  };
}
