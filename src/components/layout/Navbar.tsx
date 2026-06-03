"use client";

import Link from "next/link";
import { QrCode, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <QrCode className="w-8 h-8 text-cta transition-transform group-hover:scale-110" />
              <span className="font-display text-xl font-bold tracking-tight">QRBuild</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/generator/url" className="text-sm font-medium hover:text-cta transition-colors">Generator</Link>
            <Link href="/qr-code-scanner" className="text-sm font-medium hover:text-cta transition-colors">Scanner</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-cta transition-colors">Guides</Link>
            <Link href="/about" className="text-sm font-medium hover:text-cta transition-colors">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:text-cta p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/generator/url"
              className="block px-3 py-2 text-base font-medium hover:bg-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Generator
            </Link>
            <Link
              href="/qr-code-scanner"
              className="block px-3 py-2 text-base font-medium hover:bg-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Scanner
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium hover:bg-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium hover:bg-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
