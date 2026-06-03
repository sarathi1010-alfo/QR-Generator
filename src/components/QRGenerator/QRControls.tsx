"use client";

import { QROptions, QRErrorCorrectionLevel } from "@/types/qr.types";
import { ChevronDown } from "lucide-react";

interface QRControlsProps {
  options: QROptions;
  setOptions: (options: QROptions) => void;
}

export default function QRControls({ options, setOptions }: QRControlsProps) {
  const updateOption = (key: keyof QROptions, value: any) => {
    setOptions({ ...options, [key]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      <div>
        <label className="label">Foreground Color</label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={options.foreground}
            onChange={(e) => updateOption("foreground", e.target.value)}
            className="w-12 h-12 rounded-lg cursor-pointer border border-border"
          />
          <span className="text-sm font-mono uppercase">{options.foreground}</span>
        </div>
      </div>

      <div>
        <label className="label">Background Color</label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={options.background}
            onChange={(e) => updateOption("background", e.target.value)}
            className="w-12 h-12 rounded-lg cursor-pointer border border-border"
            disabled={options.transparent}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="transparent"
              checked={options.transparent}
              onChange={(e) => updateOption("transparent", e.target.checked)}
              className="accent-cta"
            />
            <label htmlFor="transparent" className="text-sm">Transparent</label>
          </div>
        </div>
      </div>

      <div>
        <label className="label">Size (px)</label>
        <select
          value={options.size}
          onChange={(e) => updateOption("size", parseInt(e.target.value))}
          className="input-field appearance-none"
        >
          <option value="128">128 x 128</option>
          <option value="256">256 x 256</option>
          <option value="512">512 x 512</option>
          <option value="1024">1024 x 1024</option>
        </select>
      </div>

      <div>
        <label className="label">Error Correction</label>
        <select
          value={options.errorLevel}
          onChange={(e) => updateOption("errorLevel", e.target.value as QRErrorCorrectionLevel)}
          className="input-field appearance-none"
        >
          <option value="L">Low (7%)</option>
          <option value="M">Medium (15%)</option>
          <option value="Q">Quartile (25%)</option>
          <option value="H">High (30%)</option>
        </select>
      </div>
    </div>
  );
}
