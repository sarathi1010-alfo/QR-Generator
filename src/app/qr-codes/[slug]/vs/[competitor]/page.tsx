import { allSEOConfigs, getSEOConfigBySlug, competitors, getCompetitorBySlug } from "@/lib/seo-config";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import AdUnit from "@/components/layout/AdUnit";
import RelatedTools from "@/components/layout/RelatedTools";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string; competitor: string }>;
}

export async function generateStaticParams() {
  return [];
}

import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildComparisonMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, competitor } = await params;
  const config = getSEOConfigBySlug(slug);
  const comp = getCompetitorBySlug(competitor);

  if (!config || !comp) return {};

  return resolveMetadata(buildComparisonMeta(config, comp));
}

export default async function ComparisonPage({ params }: Props) {
  const { slug, competitor } = await params;
  const config = getSEOConfigBySlug(slug);
  const comp = getCompetitorBySlug(competitor);

  if (!config || !comp) {
    notFound();
  }

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `QRBuild vs ${comp.name} for ${config.title} QR Codes`,
    "description": `Comparison between QRBuild and ${comp.name}.`,
  };

  return (
    <div className="py-12">
      <JsonLd schema={comparisonSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/qr-codes/${config.slug}`} className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-cta transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to {config.title} Generator
        </Link>

        <header className="mb-12 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            QRBuild vs {comp.name}
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto">
            Looking for a better way to generate {config.title} QR codes? Here&apos;s why QRBuild is the faster, cleaner alternative to {comp.name}.
          </p>
        </header>

        <AdUnit slot={`vs-${comp.slug}-top`} />

        <div className="my-16">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="p-4 font-bold text-lg">Feature</th>
                  <th className="p-4 font-bold text-lg text-cta bg-bg">QRBuild</th>
                  <th className="p-4 font-bold text-lg">{comp.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4 bg-bg font-bold text-cta">100% Free</td>
                  <td className="p-4 text-muted">Often requires paid plans</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Account Required</td>
                  <td className="p-4 bg-bg"><CheckCircle2 className="w-5 h-5 text-green-500" /></td>
                  <td className="p-4 text-muted"><XCircle className="w-5 h-5 text-red-500" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">High-Res Export (SVG/PNG)</td>
                  <td className="p-4 bg-bg"><CheckCircle2 className="w-5 h-5 text-green-500" /></td>
                  <td className="p-4 text-muted">Sometimes restricted</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Generation Speed</td>
                  <td className="p-4 bg-bg font-bold">Instant (Client-side)</td>
                  <td className="p-4 text-muted">Server-side processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mb-16">
           <h2 className="font-display text-3xl font-bold mb-6">Try QRBuild Now</h2>
           <p className="text-muted mb-8">Generate your {config.title} QR code in seconds.</p>
        </div>

        <div className="mb-16">
          <QRGeneratorRoot initialTab={config.primaryUse} />
        </div>

        <AdUnit slot={`vs-${comp.slug}-bottom`} />
      </div>

      <RelatedTools />
    </div>
  );
}
