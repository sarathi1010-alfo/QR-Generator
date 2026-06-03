import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import AdUnit from "@/components/layout/AdUnit";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | QRBuild`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-cta transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest text-cta">
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-muted">
              <Calendar className="w-4 h-4" />
              {post.publishedAt}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed italic border-l-4 border-cta pl-6">
            {post.description}
          </p>
        </header>

        <AdUnit slot="blog-top" />

        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:font-display prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-p:leading-relaxed prose-p:mb-6
          prose-li:mb-2
          prose-strong:text-accent">
          <MDXRemote source={post.content} />
        </div>

        <AdUnit slot="blog-bottom" />

        <div className="mt-20 p-12 bg-accent text-white rounded-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to create your own?</h2>
          <p className="opacity-70 mb-8 max-w-lg mx-auto">Generate high-quality, scannable QR codes for free with our instant generator.</p>
          <Link href="/#generator" className="btn-primary inline-block">
            Start Generating Now
          </Link>
        </div>
      </div>
    </article>
  );
}
