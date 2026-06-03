import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import AdUnit from "@/components/layout/AdUnit";

export const metadata = {
  title: "QR Code Guides & Tutorials - QRBuild Blog",
  description: "Learn how to use QR codes effectively for your business, events, and personal use with our expert guides.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Guides & Tutorials</h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Everything you need to know about creating, using, and optimizing QR codes for any purpose.
          </p>
        </header>

        <AdUnit slot="blog-index-top" />

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

        <AdUnit slot="blog-index-bottom" />
      </div>
    </div>
  );
}
