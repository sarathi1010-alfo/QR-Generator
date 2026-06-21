import { allSEOConfigs, getSEOConfigBySlug } from "@/lib/seo-config";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import AdUnit from "@/components/layout/AdUnit";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { generateFAQSchema, generateBreadcrumbSchema, generateSoftwareAppSchema } from "@/lib/schema";
import Script from "next/script";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allSEOConfigs.map((config) => ({
    slug: config.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = getSEOConfigBySlug(params.slug);
  if (!config) return {};

  return {
    title: `${config.title} QR Code Generator - Free & Instant | QRBuild`,
    description: config.description,
    alternates: {
      canonical: `https://qr.alfo.online/generator/${config.slug}`,
    },
    openGraph: {
      title: `${config.title} QR Code Generator`,
      description: config.description,
      type: "website",
      url: `https://qr.alfo.online/generator/${config.slug}`,
    }
  };
}

export default function GeneratorPage({ params }: Props) {
  const config = getSEOConfigBySlug(params.slug);

  if (!config) {
    notFound();
  }

  const faqSchema = generateFAQSchema(config.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://qr.alfo.online" },
    { name: config.title, item: `https://qr.alfo.online/generator/${config.slug}` },
  ]);
  const appSchema = generateSoftwareAppSchema();

  return (
    <div className="py-12">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-cta transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12 text-center">
          {config.color && (
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md"
              style={{ backgroundColor: config.color }}
            >
               <span className="text-white font-display font-bold text-2xl">{config.title.charAt(0)}</span>
            </div>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{config.headline}</h1>
          <p className="text-muted text-xl max-w-3xl mx-auto">
            {config.description}
          </p>
        </header>

        <AdUnit slot={`gen-${config.slug}-top`} />

        <div className="my-16">
          <QRGeneratorRoot initialTab={config.primaryUse} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-3xl font-bold mb-6">Why use QR codes for {config.title}?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none">
              <h2 className="font-display text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {config.faqs.map((faq, i) => (
                  <div key={i} className="bg-bg p-6 rounded-2xl border border-border">
                    <h3 className="font-bold text-lg mb-2 mt-0">{faq.q}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-0">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-accent text-white p-8 rounded-3xl sticky top-24">
              <h3 className="font-display text-2xl font-bold mb-4">Quick Tips</h3>
              <ul className="space-y-4 opacity-80 text-sm">
                <li>• Higher contrast makes scanning faster.</li>
                <li>• SVGs are best for professional printing.</li>
                <li>• Always test before mass printing.</li>
                <li>• Keep your URLs as short as possible.</li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs opacity-50 mb-4">Need help?</p>
                <Link href="/blog/qr-code-size-guide" className="text-cta font-bold hover:underline flex items-center gap-2">
                  Read Size Guide <ArrowLeft className="w-3 h-3 rotate-180" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <AdUnit slot={`gen-${config.slug}-bottom`} />
      </div>
    </div>
  );
}
