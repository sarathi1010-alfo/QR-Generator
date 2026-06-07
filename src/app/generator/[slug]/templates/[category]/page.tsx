import { allSEOConfigs, getSEOConfigBySlug, templateCategories, getTemplateCategoryBySlug } from "@/lib/seo-config";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import AdUnit from "@/components/layout/AdUnit";
import RelatedTools from "@/components/layout/RelatedTools";
import { ArrowLeft, LayoutTemplate } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string; category: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; category: string }[] = [];
  for (const config of allSEOConfigs) {
    for (const category of templateCategories) {
      params.push({ slug: config.slug, category: category.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, category } = await params;
  const config = getSEOConfigBySlug(slug);
  const cat = getTemplateCategoryBySlug(category);

  if (!config || !cat) return {};

  return {
    title: `Free ${cat.name} Templates for ${config.title} QR Codes | QRBuild`,
    description: `Browse our collection of free ${cat.name.toLowerCase()} templates using ${config.title} QR codes. Generate, customize, and download instantly.`,
    alternates: {
      canonical: `https://qrbuild.app/generator/${config.slug}/templates/${cat.slug}`,
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug, category } = await params;
  const config = getSEOConfigBySlug(slug);
  const cat = getTemplateCategoryBySlug(category);

  if (!config || !cat) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/generator/${config.slug}`} className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-cta transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to {config.title} Generator
        </Link>

        <header className="mb-12 text-center">
          <div className="w-16 h-16 bg-surface rounded-2xl border border-border mx-auto mb-6 flex items-center justify-center shadow-sm">
            <LayoutTemplate className="w-8 h-8 text-cta" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            {cat.name} Templates for {config.title} QR Codes
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto">
            Get started quickly with these pre-designed ideas and use cases for your {cat.name.toLowerCase()} materials.
          </p>
        </header>

        <AdUnit slot={`template-${cat.slug}-top`} />

        <div className="my-16">
           {/* Placeholder for template designs - in a real app, these would be data-driven */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                 <div className="bg-bg rounded-lg h-48 mb-4 border border-border flex items-center justify-center">
                    <span className="text-muted font-medium">Template Design 1</span>
                 </div>
                 <h3 className="font-bold text-lg mb-2">Modern {cat.name} Flyer</h3>
                 <p className="text-sm text-muted">A clean layout perfect for integrating your {config.title} QR code.</p>
              </div>
              <div className="card p-6">
                 <div className="bg-bg rounded-lg h-48 mb-4 border border-border flex items-center justify-center">
                    <span className="text-muted font-medium">Template Design 2</span>
                 </div>
                 <h3 className="font-bold text-lg mb-2">Minimalist {cat.name} Card</h3>
                 <p className="text-sm text-muted">Direct users to your {config.title} destination seamlessly.</p>
              </div>
              <div className="card p-6">
                 <div className="bg-bg rounded-lg h-48 mb-4 border border-border flex items-center justify-center">
                    <span className="text-muted font-medium">Template Design 3</span>
                 </div>
                 <h3 className="font-bold text-lg mb-2">Bold {cat.name} Poster</h3>
                 <p className="text-sm text-muted">High-contrast design to make your {config.title} QR code pop.</p>
              </div>
           </div>
        </div>

        <div className="text-center mb-16">
           <h2 className="font-display text-3xl font-bold mb-6">Create Your Custom Code Now</h2>
           <p className="text-muted mb-8">Ready to bring your {cat.name.toLowerCase()} template to life?</p>
        </div>

        <div className="mb-16">
          <QRGeneratorRoot initialTab={config.primaryUse} />
        </div>

        <AdUnit slot={`template-${cat.slug}-bottom`} />
      </div>

      <RelatedTools />
    </div>
  );
}