import Link from "next/link";
import { QrCode } from "lucide-react";
import NewsletterLoop from "./NewsletterLoop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <NewsletterLoop />
    <footer className="bg-accent text-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <QrCode className="w-8 h-8 text-cta" />
              <span className="font-display text-xl font-bold tracking-tight">QRBuild</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs opacity-80">
              The fastest, cleanest QR code generator on the web. Generate, customize, and download in under 10 seconds.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Tools Hub</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="https://pdfutility.app" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">PDF Utility</a></li>
              <li><a href="https://resumeforge.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">Resume Forge</a></li>
              <li><a href="https://paletteflow.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">Palette Flow</a></li>
              <li><a href="https://compresspro.alfo.online" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">Compress Pro</a></li>
              <li><a href="https://alfo.online/tools" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors text-cta font-medium">View All Tools →</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/privacy-policy" className="hover:text-cta transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-cta transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-cta transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="hover:text-cta transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-cta transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col justify-center items-center gap-4 text-sm opacity-60">
          <p>© {currentYear} QRBuild — All rights reserved</p>
        </div>
      </div>
    </footer>
    </>
  );
}
