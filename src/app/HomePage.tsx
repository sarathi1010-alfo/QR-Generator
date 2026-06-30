"use client";

import QRGeneratorRoot from "@/components/QRGenerator/QRGeneratorRoot";
import { Star, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import AdUnit from "@/components/layout/AdUnit";
import RelatedTools from "@/components/layout/RelatedTools";
import { motion } from "framer-motion";
import { businessUseCases, platformUseCases, coreUseCases, formatUseCases } from "@/lib/seo-config";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-surface pt-20 pb-32 overflow-hidden dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Generate QR Codes. <br />
              <span className="text-cta">Free. Instant. Beautiful.</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
              The fastest, cleanest QR code generator on the web. Generate, customize, and download in under 10 seconds. No sign-up required.
            </p>
            <Link href="#generator" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Create Your QR Code Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <AdUnit slot="homepage-top-leaderboard" />
      </div>

      {/* Generator Section */}
      <section id="generator" className="py-20">
        <QRGeneratorRoot />
      </section>

      {/* Features Section */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why use QRBuild?</h2>
            <p className="text-muted max-w-xl mx-auto">Everything you need to create professional QR codes in seconds. Looking for business tips? Read our <Link href="/blog/how-to-create-qr-code-for-business" className="text-cta hover:underline">guide on creating business QR codes</Link>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-cta" />}
              title="Instant Preview"
              description="See your QR code update in real-time as you type. No waiting, no processing delays."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6 text-cta" />}
              title="High Quality"
              description="Download your codes in high-resolution PNG or vector SVG formats for perfect printing."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-cta" />}
              title="Privacy First"
              description="We don't collect your data or track your links. Your QR codes are generated entirely in your browser."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="text-cta font-bold hover:underline">
              Need help? Contact us -&gt;
            </Link>
          </div>
        </div>
      </section>

       {/* Ad Unit */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <AdUnit slot="homepage-bottom-leaderboard" />
      </div>

      {/* Use Cases Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">QR Codes for Every Need</h2>
              <p className="text-muted">Explore specialized generators for different use cases.</p>
            </div>
            <div className="flex flex-col items-end gap-2 mt-2">
              <Link href="/blog" className="text-cta font-bold flex items-center gap-2 hover:underline">
                View all guides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/blog/qr-code-size-guide" className="text-sm font-medium hover:text-cta transition-colors text-right mt-2">
                Size Guide
              </Link>
              <Link href="/blog/wifi-qr-code-guide" className="text-sm font-medium hover:text-cta transition-colors text-right">
                WiFi Guide
              </Link>

              <Link href="/about" className="text-sm font-medium hover:text-cta transition-colors text-right mt-2">
                About QRBuild
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreUseCases.map((uc) => (
              <UseCaseLink key={uc.slug} href={`/generator/${uc.slug}`} title={`${uc.title} Generator`} />
            ))}
            {businessUseCases.map((uc) => (
              <UseCaseLink key={uc.slug} href={`/generator/${uc.slug}`} title={uc.title} />
            ))}
            {platformUseCases.map((pc) => (
              <UseCaseLink key={pc.slug} href={`/generator/${pc.slug}`} title={pc.name || pc.title} />
            ))}
            {formatUseCases.map((fc) => (
              <UseCaseLink key={fc.slug} href={`/generator/${fc.slug}`} title={fc.title} />
            ))}
            <UseCaseLink href="/scanner" title="QR Code Scanner" />
          </div>
        </div>
      </section>

      {/* Internal Traffic Engine */}
      <RelatedTools />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="card p-8 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-bg rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function UseCaseLink({ href, title }: { href: string, title: string }) {
  return (
    <Link href={href} className="card p-6 flex items-center justify-between hover:bg-white hover:border-cta transition-colors group">
      <span className="font-bold text-sm">{title}</span>
      <ArrowRight className="w-4 h-4 text-muted group-hover:text-cta transition-colors" />
    </Link>
  );
}
