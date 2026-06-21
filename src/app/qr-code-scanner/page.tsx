import { Metadata } from "next";
import QRScanner from "@/components/scanner/QRScanner";

export const metadata: Metadata = {
  title: "Online QR Code Scanner - Scan from Camera or Image | QRBuild",
  description: "Fast and secure online QR code scanner. Use your webcam or upload an image to read any QR code instantly in your browser. No software installation needed.",
  alternates: {
    canonical: "https://qr.alfo.online/qr-code-scanner",
  },
  openGraph: {
    title: "Online QR Code Scanner - QRBuild",
    description: "Scan QR codes from camera or uploaded images. Fast, free, and works in your browser.",
    url: "https://qr.alfo.online/qr-code-scanner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online QR Code Scanner - QRBuild",
    description: "Scan QR codes from camera or uploaded images instantly.",
  },
};

export default function ScannerPage() {
  return <QRScanner />;
}
