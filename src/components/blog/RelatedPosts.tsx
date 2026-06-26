import Link from "next/link";
import { getBlogPostsByCategory } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

export default function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const allCategoryPosts = getBlogPostsByCategory(category);
  const relatedPosts = allCategoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-gray-100">
      <h2 className="font-display text-2xl font-bold mb-8">Related Articles in {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
            <div className="card p-6 h-full flex flex-col hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-3 group-hover:text-cta transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted mb-4 flex-grow line-clamp-3">
                {post.description}
              </p>
              <div className="text-sm font-bold text-accent flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Read More <ArrowRight className="w-4 h-4 text-cta" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
