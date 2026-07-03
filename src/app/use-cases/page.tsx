import { Metadata } from "next";
import Link from "next/link";
import { businessUseCases } from "@/lib/seo-config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "QR Code Use Cases by Industry",
  description: "Explore how different industries use QR codes to streamline operations, enhance marketing, and engage customers.",
};

export default function UseCasesIndex() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Industry Use Cases</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Discover how QR codes can transform your business operations and marketing strategies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businessUseCases.map((uc) => (
          <Link
            key={uc.slug}
            href={`/qr-codes/${uc.slug}`}
            className="card p-6 hover:shadow-md transition-shadow group flex flex-col h-full"
          >
            <h2 className="font-display font-bold text-xl mb-3 group-hover:text-cta transition-colors">
              {uc.headline}
            </h2>
            <p className="text-muted text-sm mb-6 flex-grow">{uc.description}</p>
            <span className="inline-flex items-center text-sm font-bold text-cta">
              Try Generator <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
