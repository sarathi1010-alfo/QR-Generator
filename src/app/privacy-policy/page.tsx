import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - QRBuild | Free QR Code Generator",
  description: "QRBuild privacy policy. We don't collect your data. All QR codes are generated in your browser. Learn how we handle cookies and advertising.",
  alternates: {
    canonical: "https://qr.alfo.online/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - QRBuild",
    description: "We take your privacy seriously. Learn how QRBuild handles your data.",
    url: "https://qr.alfo.online/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - QRBuild",
    description: "We don't collect your data. All QR codes generated in-browser.",
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
        <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <Link href="https://www.google.com/settings/ads" className="text-cta hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</Link>.</p>

        <h2>3. Local Storage</h2>
        <p>We use your browser&apos;s Local Storage to save your recent QR code history for your convenience. This data never leaves your device and you can clear it at any time through your browser settings.</p>

        <h2>4. Third-Party Services</h2>
        <p>Our website uses Google AdSense for advertising. Google&apos;s use of cookies and data is governed by their privacy policy. We have no control over third-party cookies or tracking.</p>

        <h2>5. Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us at <Link href="mailto:privacy@qr.alfo.online" className="text-cta hover:underline">privacy@qr.alfo.online</Link>.</p>

        <div className="mt-12 p-6 bg-surface rounded-xl border border-border">
          <h3 className="font-bold mb-2">Related Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-cta hover:underline">← Back to Homepage</Link></li>
            <li><Link href="/terms" className="text-cta hover:underline">Terms of Service</Link></li>
            <li><Link href="/about" className="text-cta hover:underline">About QRBuild</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
