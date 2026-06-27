"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { QROptions } from "@/types/qr.types";
import { generateQRCodeToCanvas } from "@/lib/qr-generator";

export const useQRGenerator = (initialText: string, initialOptions: QROptions) => {
  const [text, setText] = useState(initialText);
  const [options, setOptions] = useState<QROptions>(initialOptions);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const updateQR = useCallback(async () => {
    if (canvasRef.current && text) {
      try {
        // If text has multiple lines (e.g. batch mode), only render the first valid line for preview
        let previewText = text;
        if (text.includes('\n')) {
          const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
          if (lines.length > 0) {
            previewText = lines[0];
          } else {
            return; // No valid text to render
          }
        }
        await generateQRCodeToCanvas(canvasRef.current, previewText, options);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
      }
    }
  }, [text, options]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      updateQR();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [updateQR]);

  return {
    text,
    setText,
    options,
    setOptions,
    canvasRef,
    refresh: updateQR,
  };
};
