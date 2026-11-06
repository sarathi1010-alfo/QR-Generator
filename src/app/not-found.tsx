import Link from "next/link";
import { QrCode, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-6 shadow-sm border border-border">
        <QrCode className="w-8 h-8 text-cta" />
      </div>
      <h1 className="font-display text-6xl font-extrabold text-foreground tracking-tight sm:text-7xl">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        QR Code Page Not Found
      </h2>
      <p className="mt-3 text-base text-muted-foreground max-w-md">
        The page or QR code configuration you are looking for doesn&apos;t exist or has been relocated.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="btn-primary py-3 px-6 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Create QR Code</span>
        </Link>
      </div>
    </div>
  );
}
