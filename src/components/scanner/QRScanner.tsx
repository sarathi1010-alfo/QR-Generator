"use client";

import { useState, useRef, useEffect } from "react";
import jsQR from "jsqr";
import { Camera, Upload, Copy, RefreshCw, AlertCircle, Check } from "lucide-react";
import AdUnit from "@/components/layout/AdUnit";
import { motion, AnimatePresence } from "framer-motion";

export default function QRScanner() {
  const [result, setResult] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startScanner = async () => {
    setScanning(true);
    setResult(null);
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        videoRef.current.play();
        requestAnimationFrame(tick);
      }
    } catch (err) {
      console.error(err);
      setError("Could not access camera. Please check permissions.");
      setScanning(false);
    }
  };

  const stopScanner = () => {
    setScanning(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const tick = () => {
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA && scanning) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });
          if (code) {
            setResult(code.data);
            setScanning(false);
            stopScanner();
            return;
          }
        }
      }
    }
    if (scanning) {
      requestAnimationFrame(tick);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setResult(code.data);
            setError(null);
          } else {
            setError("Could not find a QR code in this image.");
            setResult(null);
          }
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    return () => stopScanner();
  }, []);

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <header className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">QR Code Scanner</h1>
        <p className="text-muted text-lg">Scan QR codes instantly using your webcam or by uploading an image.</p>
      </header>

      <AdUnit slot="scanner-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {/* Scanner Panel */}
        <div className="card p-6 flex flex-col items-center justify-center min-h-[400px] relative bg-accent">
          {scanning ? (
            <div className="w-full h-full relative overflow-hidden rounded-lg">
              <video ref={videoRef} className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-2 border-cta/50 m-12 rounded-xl animate-pulse flex items-center justify-center">
                 <div className="w-full h-0.5 bg-cta/50 absolute top-1/2 -translate-y-1/2 animate-[scan_2s_ease-in-out_infinite]" />
              </div>
              <button
                onClick={stopScanner}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <button onClick={startScanner} className="btn-primary flex items-center gap-2 mx-auto">
                <Camera className="w-5 h-5" />
                Start Webcam Scanner
              </button>
              <div className="text-white/40 flex items-center gap-4 before:h-px before:flex-grow before:bg-white/10 after:h-px after:flex-grow after:bg-white/10">
                OR
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-secondary bg-transparent text-white border-white/20 hover:bg-white/10 w-full flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Result Panel */}
        <div className="card p-8 flex flex-col">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            Scan Result
          </h2>

          <div className="flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bg p-6 rounded-xl border-2 border-cta/20 break-all"
                >
                  <p className="text-accent font-mono text-sm leading-relaxed">{result}</p>
                </motion.div>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-muted italic">
                  No QR code detected yet. Start scanning or upload a file.
                </div>
              )}
            </AnimatePresence>
          </div>

          {result && (
            <div className="mt-8 space-y-3">
              <button
                onClick={copyToClipboard}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? "Copied!" : "Copy Result"}
              </button>
              <button
                onClick={() => { setResult(null); setError(null); }}
                className="w-full btn-secondary flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Clear
              </button>

              {result.startsWith("http") && (
                <a
                  href={result}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2"
                >
                  Open Link
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 10%; }
          50% { top: 90%; }
        }
      `}</style>

      <AdUnit slot="scanner-bottom" />
    </div>
  );
}
