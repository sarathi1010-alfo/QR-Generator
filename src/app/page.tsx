import HomePage from "./HomePage";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free QR Code Generator | Custom QR Codes Online - QRBuild",
  description: "Create custom QR codes for URLs, WiFi, vCards, and social media instantly. Free online QR generator with logos, custom colors, and SVG/PNG download.",
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
};

export default function Page() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QRBuild - Free QR Code Generator Online",
    "url": "https://qr.alfo.online/",
    "description": "Create custom QR codes for URLs, WiFi, vCards, and social media instantly. Free online QR generator with logos, custom colors, and SVG/PNG download.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do QR codes generated on QRBuild ever expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All QR codes created on QRBuild are permanent static QR codes that never expire and have no scan count limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add my company logo to the center of the QR code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upload your PNG or SVG logo icon. QRBuild automatically sets Level H (30%) Reed-Solomon error correction so the code remains 100% scannable."
        }
      },
      {
        "@type": "Question",
        "name": "Is QRBuild completely free to use without registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, QRBuild is 100% free with unlimited scans, no sign-up requirement, no watermark, and instant vector SVG and PNG downloads."
        }
      },
      {
        "@type": "Question",
        "name": "How does a WiFi QR code work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a mobile device scans a WiFi QR code, it automatically connects to the encrypted network without manually typing the password."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I download SVG vector format for print materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVG vector files scale infinitely without pixelation or blurriness, making them ideal for billboards, restaurant menus, product packaging, and posters."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Custom QR Codes Instantly and Free",
    "description": "Generate customized high-resolution vector and PNG QR codes with QRBuild.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose Content Type",
        "text": "Select from URL, Plain Text, WiFi Network, Contact Card (vCard), Email, or SMS."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Data",
        "text": "Type in your destination URL, WiFi SSID and password, or contact information."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Customize Design",
        "text": "Choose custom brand colors, corner eye styles, background shapes, or upload a center logo icon."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download QR Code",
        "text": "Download print-ready vector SVG or crisp PNG files with error correction level H."
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://qr.alfo.online/"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={webAppSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <HomePage />
    </>
  );
}
