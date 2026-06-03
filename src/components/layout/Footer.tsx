import Link from "next/link";
import { QrCode } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <QrCode className="w-8 h-8 text-cta" />
              <span className="font-display text-xl font-bold tracking-tight">QRBuild</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs opacity-80">
              The fastest, cleanest QR code generator on the web. Generate, customize, and download in under 10 seconds.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/generator/url" className="hover:text-cta transition-colors">URL Generator</Link></li>
              <li><Link href="/generator/wifi" className="hover:text-cta transition-colors">WiFi Generator</Link></li>
              <li><Link href="/generator/text" className="hover:text-cta transition-colors">Text Generator</Link></li>
              <li><Link href="/qr-code-scanner" className="hover:text-cta transition-colors">QR Scanner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/privacy-policy" className="hover:text-cta transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cta transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-cta transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© {currentYear} QRBuild. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Built by Alfo Tech Industries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
