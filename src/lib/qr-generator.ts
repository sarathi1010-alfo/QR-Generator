import { QROptions } from "@/types/qr.types";
import QRCode from "qrcode";

export const generateQRCodeToCanvas = async (
  canvas: HTMLCanvasElement,
  text: string,
  options: QROptions
) => {
  if (!text) return;

  await QRCode.toCanvas(canvas, text, {
    width: options.size,
    margin: options.margin || 2,
    errorCorrectionLevel: options.errorLevel,
    color: {
      dark: options.foreground,
      light: options.transparent ? "#00000000" : options.background,
    },
  });
};

export const generateQRCodeToDataURL = async (
  text: string,
  options: QROptions
) => {
  return await QRCode.toDataURL(text, {
    width: options.size,
    margin: options.margin || 2,
    errorCorrectionLevel: options.errorLevel,
    color: {
      dark: options.foreground,
      light: options.transparent ? "#00000000" : options.background,
    },
  });
};

export const generateQRCodeToSVG = async (
  text: string,
  options: QROptions
) => {
  return await QRCode.toString(text, {
    type: "svg",
    width: options.size,
    margin: options.margin || 2,
    errorCorrectionLevel: options.errorLevel,
    color: {
      dark: options.foreground,
      light: options.transparent ? "#00000000" : options.background,
    },
  });
};
