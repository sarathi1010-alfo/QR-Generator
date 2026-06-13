import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QRBuild",
  description: "Privacy policy for QRBuild. Learn how we handle your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: June 03, 2024</p>
        <p>At QRBuild, we take your privacy seriously. This policy explains how we handle your data.</p>

        <h2>1. No Data Collection</h2>
        <p>QRBuild is a client-side utility. All QR codes are generated directly in your browser. We do not transmit, store, or see the data you enter into our generators (URLs, WiFi passwords, etc.).</p>

        <h2>2. Cookies and Advertising</h2>
        <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites.</p>

        <h2>3. Local Storage</h2>
        <p>We use your browser&apos;s Local Storage to save your recent QR code history for your convenience. This data never leaves your device and you can clear it at any time.</p>
      </div>
    </div>
  );
}
