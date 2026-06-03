import { generateQRCodeToSVG } from "./qr-generator";
import { QROptions } from "@/types/qr.types";

export const downloadPNG = (canvas: HTMLCanvasElement, filename: string = "qrcode.png") => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
};

export const downloadSVG = async (text: string, options: QROptions, filename: string = "qrcode.svg") => {
  const svgString = await generateQRCodeToSVG(text, options);
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
};

export const copyCanvasToClipboard = async (canvas: HTMLCanvasElement) => {
  return new Promise<void>((resolve, reject) => {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        reject(new Error("Failed to create blob"));
        return;
      }
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  });
};
