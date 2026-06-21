import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - QRBuild | Free QR Code Generator",
  description: "QRBuild terms of service. By using QRBuild, you agree to these terms. Learn about our no-warranty policy and limitations of liability.",
  alternates: {
    canonical: "https://qr.alfo.online/terms",
  },
  openGraph: {
    title: "Terms of Service - QRBuild",
    description: "Terms and conditions for using QRBuild's free QR code generator.",
    url: "https://qr.alfo.online/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - QRBuild",
    description: "Terms and conditions for using QRBuild.",
  },
};

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate max-w-none">
        <p>Last updated: June 03, 2024</p>
        <p>By using QRBuild, you agree to the following terms and conditions.</p>

        <h2>1. Use of Service</h2>
        <p>QRBuild provides a free QR code generation tool. You are responsible for the content you embed in the QR codes you generate. We do not monitor or control the content of generated codes. You agree not to use QRBuild to generate QR codes that link to malicious, illegal, or harmful content.</p>

        <h2>2. No Warranty</h2>
        <p>The service is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that the service will always be available, error-free, or that the generated codes will be scannable by all devices. We make no warranties about the accuracy or reliability of any information provided through the service.</p>

        <h2>3. Limitation of Liability</h2>
        <p>QRBuild and its creators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of the service or the inability to use the service. This includes but is not limited to damages for loss of profits, data, or business interruption.</p>

        <h2>4. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of the new terms. We encourage you to review these terms periodically for updates.</p>

        <h2>5. Termination</h2>
        <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.</p>

        <h2>6. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which QRBuild operates, without regard to its conflict of law provisions.</p>

        <div className="mt-12 p-6 bg-surface rounded-xl border border-border">
          <h3 className="font-bold mb-2">Related Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-cta hover:underline">← Back to Homepage</Link></li>
            <li><Link href="/privacy-policy" className="text-cta hover:underline">Privacy Policy</Link></li>
            <li><Link href="/about" className="text-cta hover:underline">About QRBuild</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
