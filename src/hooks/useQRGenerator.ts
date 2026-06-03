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
        await generateQRCodeToCanvas(canvasRef.current, text, options);
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
