"use client";

import Link from "next/link";
import { QrCode, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center gap-2 group">
                <QrCode className="w-8 h-8 text-cta transition-transform group-hover:scale-110" />
                <span className="font-display text-xl font-bold tracking-tight">QRBuild</span>
              </Link>
              <a href="https://alfo.online" target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted hover:text-cta ml-10 -mt-1 transition-colors">
                Powered by alfo.online
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/generator/url" className="text-sm font-medium hover:text-cta transition-colors">Generator</Link>
            <Link href="/qr-code-scanner" className="text-sm font-medium hover:text-cta transition-colors">Scanner</Link>

            <div className="relative" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-cta transition-colors py-2">
                Related Tools <ChevronDown className="w-4 h-4" />
              </button>

              {isToolsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-surface border border-border rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <a href="https://pdfutility.app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-bg hover:text-cta">PDF Utility</a>
                  <a href="https://resumeforge.alfo.online" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-bg hover:text-cta">Resume Forge</a>
                  <a href="https://paletteflow.alfo.online" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-bg hover:text-cta">Palette Flow</a>
                  <a href="https://compresspro.alfo.online" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-bg hover:text-cta">Compress Pro</a>
                  <a href="https://alfo.online/tools" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm font-bold text-cta hover:bg-bg border-t border-border mt-1 pt-2">View All Tools →</a>
                </div>
              )}
            </div>

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

            <div className="px-3 py-2">
              <div className="text-base font-medium text-muted mb-2">Related Tools</div>
              <div className="pl-4 space-y-2 border-l-2 border-border">
                <a href="https://pdfutility.app" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-cta">PDF Utility</a>
                <a href="https://resumeforge.alfo.online" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-cta">Resume Forge</a>
                <a href="https://paletteflow.alfo.online" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-cta">Palette Flow</a>
                <a href="https://compresspro.alfo.online" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-cta">Compress Pro</a>
                <a href="https://alfo.online/tools" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-cta">View All Tools →</a>
              </div>
            </div>

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
