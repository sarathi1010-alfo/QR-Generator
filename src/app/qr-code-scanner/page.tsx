import QRScanner from "@/components/scanner/QRScanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online QR Code Scanner - Scan from Camera or Image",
  description: "Fast and secure online QR code scanner. Use your webcam or upload an image to read any QR code instantly in your browser.",
};

export default function ScannerPage() {
  return <QRScanner />;
}
