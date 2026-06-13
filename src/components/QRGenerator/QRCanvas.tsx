"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface QRCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  size: number;
}

export default function QRCanvas({ canvasRef, size }: QRCanvasProps) {
  return (
    <div className="flex justify-center items-center bg-white p-6 rounded-xl shadow-inner border border-border min-h-[300px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto transition-qr shadow-sm"
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </motion.div>
    </div>
  );
}
