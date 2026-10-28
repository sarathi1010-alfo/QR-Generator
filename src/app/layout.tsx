import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo-config";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Free QR Code Generator | Custom QR Codes Online - QRBuild",
    template: "%s | QRBuild"
  },
  description:
    "Create custom QR codes for URLs, WiFi, vCards, and social media instantly. Free online QR generator with logos, custom colors, and SVG/PNG download.",
  alternates: {
    canonical: "https://qr.alfo.online/",
  },
  openGraph: {
    title: "Free QR Code Generator | Custom QR Codes Online - QRBuild",
    description: "Create custom QR codes for URLs, WiFi, vCards, and social media instantly. Free online QR generator with logos, custom colors, and SVG/PNG download.",
    url: "https://qr.alfo.online/",
    siteName: "QRBuild",
    type: "website",
    images: [
      {
        url: "https://qr.alfo.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free QR Code Generator - QRBuild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator | Custom QR Codes Online - QRBuild",
    description: "Create custom QR codes for URLs, WiFi, vCards, and social media instantly. Free online QR generator with logos, custom colors, and SVG/PNG download.",
    images: ["https://qr.alfo.online/og-image.jpg"],
  },
  metadataBase: new URL("https://qr.alfo.online"),

  verification: {
    google: "Y94cBgBDh-ApjaS4Xfym1S2i2fNXeDpkGNpyfVZoCo",
  },

  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
    monetag: "86950f5308b2a836fd804730ef0e5e7d",
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
    name: "QRBuild",
    url: SITE_URL,
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "QRBuild",
    operatingSystem: "All",
    applicationCategory: "MultimediaApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta charSet="utf-8" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="software-app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HZQ3QT11QC');
          `}
        </Script>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans bg-bg text-accent antialiased`}
      >
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cta focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
          <Navbar />
          <main id="main-content" className="flex-grow overflow-x-hidden w-full max-w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
