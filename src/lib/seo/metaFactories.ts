import { SeoMeta } from '@/types/seo';
import { SITE_URL } from '@/lib/seo-config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export function buildBlogPostMeta(post: any): SeoMeta {
  return {
    pageType: 'article',
    title: post.title || 'Untitled Post',
    description: post.description ? post.description.substring(0, 160) : '',
    slug: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt || post.publishedAt,
    noindex: post.draft || false,
    author: post.author ? { name: post.author } : undefined,
    articleSection: post.category,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(post.title || '')}&type=article`,
      alt: post.title || 'Blog Post Image'
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: post.title, href: `/blog/${post.slug}` }
    ]
  };
}

export function buildProductMeta(product: any): SeoMeta {
  return {
    pageType: 'product',
    title: product.name || 'Untitled Product',
    description: product.description ? product.description.substring(0, 160) : '',
    slug: `/products/${product.slug}`,
    noindex: product.archived || false,
    productData: {
      name: product.name,
      price: product.price,
      currency: product.currency || 'USD',
      availability: product.inStock ? 'InStock' : 'OutOfStock',
      sku: product.sku,
      brand: product.brand,
    },
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(product.name || '')}&type=product`,
      alt: product.name || 'Product Image'
    },
  };
}

export function buildCategoryMeta(category: any): SeoMeta {
  return {
    pageType: 'category',
    title: category.title || 'Category',
    description: category.description ? category.description.substring(0, 160) : '',
    slug: `/category/${category.slug}`,
    noindex: category.page && category.page > 1 ? true : false,
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(category.title || '')}&type=category`,
       alt: category.title || 'Category Image'
    }
  };
}

export function buildAuthorMeta(author: any): SeoMeta {
  return {
    pageType: 'author',
    title: author.name || 'Author',
    description: author.bio ? author.bio.substring(0, 160) : '',
    slug: `/author/${author.slug}`,
    noindex: author.postCount === 0,
    author: { name: author.name },
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(author.name || '')}&type=author`,
       alt: author.name || 'Author Image'
    }
  };
}

export function buildTagMeta(tag: any): SeoMeta {
  return {
    pageType: 'tag',
    title: tag.name || 'Tag',
    description: tag.description ? tag.description.substring(0, 160) : '',
    slug: `/tag/${tag.slug}`,
    noindex: tag.postCount < 3,
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(tag.name || '')}&type=tag`,
       alt: tag.name || 'Tag Image'
    }
  };
}

export function buildDocsMeta(doc: any): SeoMeta {
  return {
    pageType: 'docs',
    title: doc.title || 'Documentation',
    description: doc.description ? doc.description.substring(0, 160) : '',
    slug: `/docs/${doc.slug}`,
    updatedAt: doc.updatedAt,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
      { label: doc.title, href: `/docs/${doc.slug}` }
    ],
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(doc.title || '')}&type=docs`,
       alt: doc.title || 'Docs Image'
    }
  };
}

export function buildLandingMeta(page: any): SeoMeta {
  return {
    pageType: 'landing',
    title: page.title || 'Page',
    description: page.description ? page.description.substring(0, 160) : '',
    slug: page.slug === 'home' ? '/' : `/${page.slug}`,
    noindex: page.draft || false,
    faqItems: page.faqs,
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(page.title || '')}&type=landing`,
       alt: page.title || 'Page Image'
    }
  };
}

export function buildFaqMeta(page: any): SeoMeta {
  return {
    pageType: 'faq',
    title: page.title || 'FAQ',
    description: page.description ? page.description.substring(0, 160) : '',
    slug: `/faq/${page.slug}`,
    faqItems: page.faqs,
    ogImage: {
       url: `${BASE_URL}/og?title=${encodeURIComponent(page.title || '')}&type=faq`,
       alt: page.title || 'FAQ Image'
    }
  };
}

// Custom factories for QRBuild specific pages
export function buildGeneratorMeta(config: any, overrideSlug?: string): SeoMeta {
  return {
    pageType: 'website',
    title: config.title.includes('in') ? config.title : `Free ${config.title} QR Code Generator | QRBuild`,
    description: config.description ? config.description.substring(0, 160) : '',
    slug: overrideSlug ? `/${overrideSlug}` : `/qr-codes/${config.slug}`,
    faqItems: config.faqs?.map((f: any) => ({ question: f.q, answer: f.a })),
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(`Free ${config.title} QR Code Generator`)}&type=generator`,
      alt: `Free ${config.title} QR Code Generator`
    }
  };
}

export function buildTemplateMeta(config: any, cat: any): SeoMeta {
  return {
    pageType: 'website',
    title: `Free ${cat.name} Templates for ${config.title} QR Codes`,
    description: `Browse our collection of free ${cat.name.toLowerCase()} templates using ${config.title} QR codes. Generate, customize, and download instantly.`.substring(0, 160),
    slug: `/qr-codes/${config.slug}/templates/${cat.slug}`,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(`${cat.name} Templates`)}&type=template`,
      alt: `${cat.name} Templates for ${config.title}`
    }
  };
}

export function buildComparisonMeta(config: any, comp: any): SeoMeta {
  return {
    pageType: 'website',
    title: `QRBuild vs ${comp.name} for ${config.title} QR Codes`,
    description: `Compare QRBuild and ${comp.name} for creating ${config.title} QR codes. Find out why QRBuild is the best free, instant alternative.`.substring(0, 160),
    slug: `/qr-codes/${config.slug}/vs/${comp.slug}`,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(`QRBuild vs ${comp.name}`)}&type=vs`,
      alt: `QRBuild vs ${comp.name}`
    }
  };
}
