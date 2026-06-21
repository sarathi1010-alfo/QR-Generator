import HomePage from "./HomePage";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildWebsiteSchema } from "@/lib/seo/buildSchema";

export const metadata = resolveMetadata(
  buildLandingMeta({
    slug: "home",
    title: "QRBuild - Free QR Code Generator Online | Create Custom QR Codes Instantly",
    description: "Create free, customizable QR codes for URLs, WiFi, vCards, social media, and more. No registration required. Download as PNG or SVG instantly."
  }),
  true
);

export default function Page() {
  return (
    <>
      <JsonLd schema={buildWebsiteSchema()} />
      <HomePage />
    </>
  );
}
