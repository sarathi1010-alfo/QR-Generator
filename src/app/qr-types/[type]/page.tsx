import { qrTypesExtra } from "@/lib/programmatic-seo";
import { notFound } from "next/navigation";
import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import RelatedTools from "@/components/layout/RelatedTools";
import { Metadata } from "next";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildGeneratorMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";

interface Props { params: Promise<{ type: string }> }

export async function generateStaticParams() {
  return qrTypesExtra.map((c) => ({ type: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const config = qrTypesExtra.find(c => c.slug === p.type);
  if (!config) return {};
  return resolveMetadata(buildGeneratorMeta(config, `qr-types/${config.slug}`));
}

export default async function Page({ params }: Props) {
  const p = await params;
  const config = qrTypesExtra.find(c => c.slug === p.type);
  if (!config) notFound();
  const meta = buildGeneratorMeta(config);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      {meta.faqItems && <JsonLd schema={buildFaqSchema(meta.faqItems)} />}
      <h1 className="font-display text-4xl font-bold mb-6">{config.headline}</h1>
      <p className="mb-8">{config.description}</p>
      <QRGeneratorRoot initialTab={config.primaryUse} />
      <RelatedTools />
    </div>
  );
}
