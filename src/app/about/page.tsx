import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About QRBuild - The Fastest Free QR Code Generator",
  description: "Learn more about QRBuild, our mission, and the technology behind our lightning-fast, free QR code generator designed for businesses and individuals.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 text-center">
      <h1 className="font-display text-5xl font-bold mb-8">About QRBuild</h1>
      <p className="text-xl text-muted leading-relaxed mb-12">
        QRBuild was founded with a simple goal: to create the fastest, cleanest, and most reliable QR code generator on the web.
      </p>

      <div className="text-left mb-12">
        <h2 className="font-display text-3xl font-bold mb-6">Our Story & Mission</h2>
        <p className="text-muted leading-relaxed mb-6">
          In today's digital-first world, QR codes have become an essential bridge between physical and online experiences. From restaurant menus to marketing campaigns, event tickets to contactless payments, QR codes are everywhere. For more information on how companies can benefit, see our <Link href="/blog/business-qr-code-guide" className="text-cta hover:underline">business QR code guide</Link>. However, we noticed that many QR code generators were cluttered with ads, required sign-ups, tracked user data, or simply didn't work reliably across all devices.
        </p>
        <p className="text-muted leading-relaxed mb-6">
          QRBuild was created to solve this problem. Our mission is straightforward: provide a free, fast, and privacy-respecting QR code generation tool that anyone can use without barriers. We believe that basic digital utilities should be accessible to everyone—whether you're a small business owner creating your first QR code, a marketer running a large campaign, a teacher sharing resources with students, or an individual who just needs a quick solution.
        </p>
        <p className="text-muted leading-relaxed">
          We are committed to keeping QRBuild completely free for core features, maintaining lightning-fast performance, and respecting your privacy by processing everything locally in your browser. No accounts required, no data stored on our servers, and no unnecessary tracking. Just a clean, efficient tool that does exactly what it promises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="card p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Who We Serve</h2>
          <p className="text-muted text-sm">QRBuild is designed for businesses of all sizes, marketers, educators, event organizers, developers, and individuals who need reliable QR codes quickly. Whether you're creating a single code or generating hundreds for a campaign, our tool scales to meet your needs.</p>
        </div>
        <div className="card p-8">
          <h2 className="font-display text-2xl font-bold mb-4">The Technology</h2>
          <p className="text-muted text-sm">Built with Next.js and Tailwind CSS, QRBuild leverages modern web standards to provide a seamless experience on both desktop and mobile. All QR code generation happens client-side using proven JavaScript libraries, ensuring your data never leaves your device.</p>
        </div>
      </div>

      <div className="mt-12 text-left">
        <h2 className="font-display text-3xl font-bold mb-6">Why Choose QRBuild?</h2>
        <ul className="space-y-4 text-muted">
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>100% Free:</strong> No hidden fees, premium tiers, or paywalls for essential features</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>Privacy-First:</strong> All generation happens in your browser; we never see or store your data</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>Lightning Fast:</strong> Generate professional QR codes in under 10 seconds</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>No Sign-Up Required:</strong> Start creating immediately without creating an account</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>Multiple Formats:</strong> Support for URLs, text, WiFi credentials, contact info (vCard), email, SMS, and more</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>Customization Options:</strong> Adjust colors, size, and error correction to match your brand</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cta font-bold">✓</span>
            <span><strong>High Quality Downloads:</strong> Export in PNG format suitable for both digital and print use</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
