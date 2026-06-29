import { Metadata } from "next";
import Link from "next/link";
import { coreUseCases, platformUseCases, formatUseCases } from "@/lib/seo-config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Free QR Code Generators",
  description: "Browse our complete collection of free, privacy-first QR code generators for URLs, WiFi, vCards, social media platforms, and more.",
};

export default function GeneratorsIndex() {
  const allGenerators = [...coreUseCases, ...platformUseCases, ...formatUseCases];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">QR Code Generators</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Create free, customizable QR codes instantly. No sign-up required, all generated in your browser.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGenerators.map((gen) => (
          <Link
            key={gen.slug}
            href={`/generator/${gen.slug}`}
            className="card p-6 hover:shadow-md transition-shadow group flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              {gen.color && (
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: gen.color }}
                >
                  <span className="text-white font-bold">{gen.title.charAt(0)}</span>
                </div>
              )}
              <h2 className="font-display font-bold text-xl group-hover:text-cta transition-colors">
                {gen.title} Generator
              </h2>
            </div>
            <p className="text-muted text-sm mb-6 flex-grow">{gen.description}</p>
            <span className="inline-flex items-center text-sm font-bold text-cta">
              Create QR Code <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
