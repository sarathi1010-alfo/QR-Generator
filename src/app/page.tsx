import HomePage from "./HomePage";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildWebsiteSchema } from "@/lib/seo/buildSchema";

export const metadata = resolveMetadata(
  buildLandingMeta({
    slug: "home",
    title: "QRBuild - Free QR Code Generator",
    description: "Generate QR codes for URLs, WiFi, text, and more. Free, instant, no sign-up. Download as PNG or SVG."
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
