import { getBlogPostsByCategory, getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, ArrowLeft } from "lucide-react";
import AdUnit from "@/components/layout/AdUnit";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const categories = Array.from(new Set(posts.map(post => post.category.toLowerCase())));
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  return resolveMetadata(
    buildCategoryMeta({
      slug: `blog/category/${category}`,
      title: `${decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)} Guides & Tutorials`,
      description: `Browse all our QR code guides and tutorials related to ${decodedCategory}.`,
      categoryName: decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1),
    })
  );
}

export default async function CategoryIndex({ params }: Props) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const formattedCategory = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  const posts = getBlogPostsByCategory(decodedCategory);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-cta transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to All Guides
        </Link>
        <header className="mb-16 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{formattedCategory} Guides</h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Explore our collection of articles and tutorials about {formattedCategory}.
          </p>
        </header>

        <AdUnit slot="category-index-top" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {posts.map((post) => (
            <article key={post.slug} className="card group hover:shadow-xl transition-all h-full flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-cta">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold mb-4 group-hover:text-cta transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link href={`/blog/${post.slug}`} className="font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all text-accent">
                  Read Article <ArrowRight className="w-4 h-4 text-cta" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <AdUnit slot="category-index-bottom" />
      </div>
    </div>
  );
}
