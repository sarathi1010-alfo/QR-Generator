import { allSEOConfigs, getSEOConfigBySlug } from "@/lib/seo-config";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import AdUnit from "@/components/layout/AdUnit";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateSoftwareAppSchema } from "@/lib/schema";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildGeneratorMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allSEOConfigs.map((config) => ({
    slug: config.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = getSEOConfigBySlug(slug);
  if (!config) return {};

  return resolveMetadata(buildGeneratorMeta(config));
}

export default async function ProgrammaticGeneratorPage({ params }: Props) {
  const { slug } = await params;
  const config = getSEOConfigBySlug(slug);

  if (!config) {
    notFound();
  }

  // Generate schemas
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "QR Codes", item: "/qr-codes" },
    { name: config.title, item: `/qr-codes/${config.slug}` }
  ];

  return (
    <>
      <JsonLd schema={generateSoftwareAppSchema()} />
      <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />
      {config.faqs && <JsonLd schema={buildFaqSchema(config.faqs.map(f => ({ question: f.q, answer: f.a })))} />}

      <div className="flex flex-col min-h-screen">
        <header className="bg-surface border-b border-border pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{config.headline}</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">{config.description}</p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto w-full px-4 py-8">
          <AdUnit slot="generator-top" />
        </div>

        <section className="py-12 flex-grow">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="bg-bg rounded-2xl p-4 sm:p-8 shadow-sm border border-border">
                  <QRGeneratorRoot
                    initialTab={config.primaryUse}
                  />
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="card p-6">
                  <h2 className="font-display font-bold text-xl mb-4">Why use this?</h2>
                  <ul className="space-y-3">
                    {config.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                        <span className="text-sm text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {config.faqs && config.faqs.length > 0 && (
          <section className="py-20 bg-surface border-t border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {config.faqs.map((faq, i) => (
                  <div key={i} className="card p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
