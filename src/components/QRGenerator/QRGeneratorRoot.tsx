"use client";

import { useState, useEffect, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Link, Type, Wifi, Mail, Phone, User, Download, Copy, History, Check, Layers } from "lucide-react";
import { useQRGenerator } from "@/hooks/useQRGenerator";
import { useQRHistory } from "@/hooks/useQRHistory";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { generateQRCodeToDataURL, generateQRCodeToSVG } from "@/lib/qr-generator";
import QRCanvas from "./QRCanvas";
import QRControls from "./QRControls";
import WiFiTab from "./tabs/WiFiTab";
import VCardTab from "./tabs/VCardTab";
import EmailTab from "./tabs/EmailTab";
import { buildPhoneString } from "@/lib/qr-utils";
import qrTypes from "@/data/qr-types.json";
import { motion, AnimatePresence } from "framer-motion";
import { downloadPNG, downloadSVG, copyCanvasToClipboard } from "@/lib/download";
import * as Toast from "@radix-ui/react-toast";

const ICONS: Record<string, any> = { Link, Type, Wifi, Mail, Phone, User, Layers };

export default function QRGeneratorRoot({ initialTab = "url" }: { initialTab?: string }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);
  const [isBatchGenerating, setIsBatchGenerating] = useState(false);
  const { text, setText, options, setOptions, canvasRef } = useQRGenerator("", {
    size: 256,
    foreground: "#1A1A2E",
    background: "#FFFFFF",
    errorLevel: "M",
    transparent: false,
  });

  const { history, addToHistory } = useQRHistory();

  // Reset text when switching tabs to ensure preview matches the active form
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    setText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePhoneUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(buildPhoneString(e.target.value));
  };

  const handleDownloadPNG = () => {
    if (canvasRef.current && text) {
      downloadPNG(canvasRef.current);
      addToHistory({ type: activeTab as any, data: text });
    }
  };

  const handleDownloadSVG = async () => {
    if (text) {
      await downloadSVG(text, options);
      addToHistory({ type: activeTab as any, data: text });
    }
  };

  const handleCopy = async () => {
    if (canvasRef.current) {
      try {
        await copyCanvasToClipboard(canvasRef.current);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy", err);
      }
    }
  };

  const handleBatchDownload = async (format: "png" | "svg") => {
    if (!text) return;
    const urls = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (urls.length === 0) return;

    setIsBatchGenerating(true);
    const zip = new JSZip();
    const folder = zip.folder(`qrcodes_${format}`);

    try {
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        if (format === "png") {
          const dataUrl = await generateQRCodeToDataURL(url, options);
          const base64Data = dataUrl.split(',')[1];
          folder?.file(`qrcode_${i + 1}.png`, base64Data, { base64: true });
        } else {
          const svgContent = await generateQRCodeToSVG(url, options);
          folder?.file(`qrcode_${i + 1}.svg`, svgContent);
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `qrcodes_${format}.zip`);
      addToHistory({ type: activeTab as any, data: `${urls.length} Batch URLs` });
    } catch (err) {
      console.error("Batch generation failed:", err);
    } finally {
      setIsBatchGenerating(false);
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Tabs.Root value={activeTab} onValueChange={handleTabChange} className="card p-6 md:p-8">
              <Tabs.List className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
                {qrTypes.map((type) => {
                  const Icon = ICONS[type.icon];
                  return (
                    <Tabs.Trigger
                      key={type.id}
                      value={type.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all
                        ${activeTab === type.id ? "bg-accent text-white" : "hover:bg-bg"}`}
                    >
                      <Icon className="w-4 h-4" />
                      {type.label}
                    </Tabs.Trigger>
                  );
                })}
              </Tabs.List>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Tabs.Content value="url">
                    <div className="space-y-4">
                      <label className="label">Website URL</label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        className="input-field"
                        onChange={handleInputChange}
                        value={activeTab === 'url' ? text : ""}
                      />
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="text">
                    <div className="space-y-4">
                      <label className="label">Plain Text</label>
                      <textarea
                        placeholder="Enter your message here..."
                        className="input-field min-h-[120px]"
                        onChange={handleInputChange}
                        value={activeTab === 'text' ? text : ""}
                      />
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="wifi">
                    <WiFiTab onUpdate={setText} />
                  </Tabs.Content>

                  <Tabs.Content value="email">
                    <EmailTab onUpdate={setText} />
                  </Tabs.Content>

                  <Tabs.Content value="phone">
                    <div className="space-y-4">
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="input-field"
                        onChange={handlePhoneUpdate}
                        value={activeTab === 'phone' ? text.replace('tel:', '') : ""}
                      />
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="vcard">
                    <VCardTab onUpdate={setText} />
                  </Tabs.Content>

                  <Tabs.Content value="batch">
                    <div className="space-y-4">
                      <label className="label flex justify-between">
                        <span>Batch URLs (One per line, Max 20)</span>
                        <span className="text-xs text-text/60">
                          {text.split('\n').filter(l => l.trim().length > 0).length} / 20
                        </span>
                      </label>
                      <textarea
                        placeholder="https://example.com/1&#10;https://example.com/2&#10;..."
                        className="input-field min-h-[160px]"
                        onChange={handleInputChange}
                        value={activeTab === 'batch' ? text : ""}
                      />
                    </div>
                  </Tabs.Content>
                </motion.div>
              </AnimatePresence>

              <QRControls options={options} setOptions={setOptions} />
            </Tabs.Root>
          </div>

          {/* Right Column: Preview & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24">
              <QRCanvas canvasRef={canvasRef} size={options.size} />

              {activeTab === "batch" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={() => handleBatchDownload("png")}
                    disabled={!text || isBatchGenerating}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {isBatchGenerating ? "Generating..." : "Download PNG ZIP"}
                  </button>
                  <button
                    onClick={() => handleBatchDownload("svg")}
                    disabled={!text || isBatchGenerating}
                    className="btn-secondary flex items-center justify-center gap-2 border-dashed"
                  >
                    <Download className="w-5 h-5" />
                    {isBatchGenerating ? "Generating..." : "Download SVG ZIP"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={handleDownloadPNG}
                      disabled={!text}
                      className="btn-primary flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download PNG
                    </button>
                    <button
                      onClick={handleCopy}
                      disabled={!text}
                      className="btn-secondary flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      {copied ? "Copied!" : "Copy Image"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={handleDownloadSVG}
                      disabled={!text}
                      className="w-full btn-secondary flex items-center justify-center gap-2 border-dashed"
                    >
                      <Download className="w-5 h-5" />
                      Download SVG
                    </button>
                  </div>
                </>
              )}

              <div id="history" className="mt-12 card p-6 bg-accent text-white">
                <div className="flex items-center gap-2 mb-4">
                  <History className="w-5 h-5 text-cta" />
                  <h3 className="font-display font-bold">Recent History</h3>
                </div>
                {history.length > 0 ? (
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-sm bg-white/5 p-2 rounded hover:bg-white/10 cursor-pointer transition-colors"
                        onClick={() => setText(item.data)}
                      >
                        <span className="truncate max-w-[200px]">{item.data}</span>
                        <span className="text-[10px] opacity-40 capitalize">{item.type}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm opacity-60 italic">Your recent QR codes will appear here.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col p-4 gap-2 w-full max-w-[390px] m-0 list-none z-50 outline-none" />
    </Toast.Provider>
  );
}
