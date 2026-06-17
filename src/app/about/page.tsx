import { Metadata } from "next";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="card p-8">
          <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted text-sm">We believe that basic digital tools should be free, fast, and respectful of user privacy. No sign-ups, no tracking, just utility.</p>
        </div>
        <div className="card p-8">
          <h2 className="font-display text-2xl font-bold mb-4">The Technology</h2>
          <p className="text-muted text-sm">Built with Next.js and Tailwind CSS, QRBuild leverages modern web standards to provide a seamless experience on both desktop and mobile.</p>
        </div>
      </div>
    </div>
  );
}
