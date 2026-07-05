import { getSEOConfigBySlug, allSEOConfigs } from "@/lib/seo-config";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import AdUnit from "@/components/layout/AdUnit";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildGeneratorMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildProductSchema } from "@/lib/seo/buildSchema";

const TARGET_COUNTRIES = [
  "united-states", "united-kingdom", "canada", "australia",
  "germany", "france", "spain", "italy", "netherlands",
  "india", "singapore", "japan", "south-korea",
  "brazil", "mexico", "argentina",
  "uae", "saudi-arabia", "south-africa"
];

function formatCountryName(countrySlug: string) {
  return countrySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

interface Props {
  params: Promise<{ slug: string; country: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; country: string }[] = [];

  for (const config of allSEOConfigs) {
    for (const country of TARGET_COUNTRIES) {
      params.push({
        slug: config.slug,
        country: country
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug, country } = await params;
  const config = getSEOConfigBySlug(slug);

  if (!config || !TARGET_COUNTRIES.includes(country)) return {};

  const countryName = formatCountryName(country);

  // Custom metadata for localized page
  const localizedConfig = {
    ...config,
    title: `${config.title} in ${countryName}`,
    headline: `${config.headline} in ${countryName}`,
    description: `Create free ${config.title.toLowerCase()} QR codes optimized for users in ${countryName}. ${config.description}`
  };

  const meta = buildGeneratorMeta(localizedConfig, `generator/${slug}/${country}`);
  return resolveMetadata(meta);
}

export default async function LocalizedGeneratorPage({ params }: Props) {
  const { slug, country } = await params;
  const config = getSEOConfigBySlug(slug);

  if (!config || !TARGET_COUNTRIES.includes(country)) {
    notFound();
  }

  const countryName = formatCountryName(country);

  // Custom localized config
  const localizedConfig = {
    ...config,
    title: `${config.title} in ${countryName}`,
    headline: `${config.headline} in ${countryName}`,
  };

  const meta = buildGeneratorMeta(localizedConfig, `generator/${slug}/${country}`);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `QRBuild ${countryName}`,
    "image": "https://qr.alfo.online/og-image.jpg",
    "url": `https://qr.alfo.online/qr-codes/${slug}/${country}`,
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": countryName
    }
  };

  return (
    <>
      <JsonLd schema={buildProductSchema(meta)} />
      {meta.breadcrumbs && <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />}
      <JsonLd schema={localBusinessSchema} />

      <div className="py-12 bg-gradient-to-b from-bg to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cta/10 blur-[100px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta text-sm font-bold mb-6 border border-cta/20">
              <Globe className="w-4 h-4" />
              <span>Optimized for {countryName}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {localizedConfig.headline}
            </h1>
            <p className="text-muted text-lg md:text-xl">
              Create free {config.title.toLowerCase()} QR codes perfectly suited for users and businesses in {countryName}. Download high-quality PNG or SVG instantly.
            </p>
          </div>

          <AdUnit slot="generator-top" />

          <div className="mt-8">
            <QRGeneratorRoot initialTab={config.primaryUse} />
          </div>

          <AdUnit slot="generator-bottom" />

          {/* Localized Content Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Why Use QR Codes in {countryName}?</h2>
                <p className="text-muted leading-relaxed mb-6">
                  QR code adoption in {countryName} is growing rapidly across all sectors. From small local businesses to large enterprises, creating a seamless connection between the physical and digital world is essential for modern operations.
                </p>
                <ul className="space-y-4">
                  {config.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                      <span className="font-bold text-accent">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                    <span className="font-bold text-accent">Compliant with local digital standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                    <span className="font-bold text-accent">Fast scanning on all major networks in {countryName}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit">
                <h3 className="font-display text-2xl font-bold mb-4">Local Integration Tips</h3>
                <p className="text-muted mb-6 text-sm">Maximize the effectiveness of your {config.title} QR codes with these localization strategies.</p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-sm mb-1">Language Support</h4>
                    <p className="text-xs text-muted">Ensure the destination URL is localized for the primary languages spoken in {countryName}.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-sm mb-1">Local Social Platforms</h4>
                    <p className="text-xs text-muted">Integrate your codes with the most popular social networks and payment gateways used locally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
