import { Metadata } from "next";
import Link from "next/link";
import { getBlogPostsByCategory } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "QR Code Guides & Tutorials",
  description: "Comprehensive guides, tutorials, and best practices for creating and using QR codes effectively.",
};

export default function GuidesIndex() {
  const guides = getBlogPostsByCategory("Guide");

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">QR Code Guides</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Everything you need to know to master QR codes for print, marketing, and business.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card p-6 hover:shadow-md transition-shadow group flex flex-col h-full"
          >
            <h2 className="font-display font-bold text-xl mb-3 group-hover:text-cta transition-colors">
              {post.title}
            </h2>
            <p className="text-muted text-sm mb-6 flex-grow">{post.description}</p>
            <span className="inline-flex items-center text-sm font-bold text-cta">
              Read Guide <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
