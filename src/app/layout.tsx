import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QRBuild - Free QR Code Generator",
  description: "Generate QR codes for URLs, WiFi, text, and more. Free, instant, no sign-up. Download as PNG or SVG.",
  verification: {
    google: "tLDp6yW522s4VhQ9dwzJhPf93N3uduIkiayZGunZbto",
  },
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
  alternates: {
    canonical: "https://qr.alfo.online",
  },
  openGraph: {
    title: "QRBuild - Free QR Code Generator",
    description: "Generate QR codes for URLs, WiFi, text, and more. Free, instant, no sign-up.",
    url: "https://qr.alfo.online",
    type: "website",
    locale: "en_US",
    siteName: "QRBuild",
  },
  twitter: {
    card: "summary_large_image",
    title: "QRBuild - Free QR Code Generator",
    description: "Generate QR codes for URLs, WiFi, text, and more. Free, instant, no sign-up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QRBuild",
    "url": "https://qr.alfo.online",
    "logo": "https://qr.alfo.online/logo.png",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QRBuild",
    "url": "https://qr.alfo.online",
  };

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans bg-bg text-accent antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
