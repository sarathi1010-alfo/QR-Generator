import { QROptions } from "@/types/qr.types";
import QRCode from "qrcode";

// Shared function to calculate module data and layout
const getQRData = (text: string, options: QROptions) => {
  const qr = QRCode.create(text, { errorCorrectionLevel: options.errorLevel });
  const size = qr.modules.size;
  const margin = options.margin !== undefined ? options.margin : 2;
  return { qr, size, margin };
};

const isEye = (r: number, c: number, size: number) => {
  return (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
};

export const generateQRCodeToCanvas = async (
  canvas: HTMLCanvasElement,
  text: string,
  options: QROptions
) => {
  if (!text) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { qr, size, margin } = getQRData(text, options);
  const canvasSize = options.size;
  const cellSize = canvasSize / (size + margin * 2);

  canvas.width = canvasSize;
  canvas.height = canvasSize;

  // Draw background
  if (!options.transparent) {
    ctx.fillStyle = options.background;
    ctx.fillRect(0, 0, canvasSize, canvasSize);
  } else {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
  }

  ctx.fillStyle = options.foreground;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (qr.modules.get(c, r)) {
        const x = (c + margin) * cellSize;
        const y = (r + margin) * cellSize;

        if (isEye(r, c, size)) {
          if (options.eyeStyle === "rounded") {
            ctx.beginPath();
            ctx.roundRect(x, y, cellSize, cellSize, cellSize * 0.3);
            ctx.fill();
          } else if (options.eyeStyle === "circle") {
            ctx.beginPath();
            ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, 2 * Math.PI);
            ctx.fill();
          } else {
            ctx.fillRect(x, y, cellSize, cellSize);
          }
        } else {
          if (options.dotStyle === "rounded") {
            ctx.beginPath();
            ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, 2 * Math.PI);
            ctx.fill();
          } else if (options.dotStyle === "diamond") {
            ctx.beginPath();
            ctx.moveTo(x + cellSize / 2, y);
            ctx.lineTo(x + cellSize, y + cellSize / 2);
            ctx.lineTo(x + cellSize / 2, y + cellSize);
            ctx.lineTo(x, y + cellSize / 2);
            ctx.fill();
          } else if (options.dotStyle === "leaf") {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.bezierCurveTo(x, y + cellSize, x, y, x, y);
            ctx.fill();
          } else {
            ctx.fillRect(x, y, cellSize, cellSize);
          }
        }
      }
    }
  }

  // Draw Center Monogram
  if (options.centerText) {
    const centerSize = canvasSize * 0.25; // 25% of QR code size
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Draw background circle for monogram
    ctx.fillStyle = options.background; // always draw background for monogram for contrast
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerSize / 2, 0, 2 * Math.PI);
    ctx.fill();

    // Draw border
    ctx.strokeStyle = options.foreground;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw text
    ctx.fillStyle = options.foreground;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${centerSize * 0.4}px sans-serif`;
    ctx.fillText(options.centerText.substring(0, 3).toUpperCase(), centerX, centerY);
  }
};

export const generateQRCodeToDataURL = async (
  text: string,
  options: QROptions
) => {
  // Create a temporary canvas
  const canvas = document.createElement("canvas");
  await generateQRCodeToCanvas(canvas, text, options);
  return canvas.toDataURL("image/png");
};

export const generateQRCodeToSVG = async (
  text: string,
  options: QROptions
) => {
  if (!text) return "";

  const { qr, size, margin } = getQRData(text, options);
  const canvasSize = options.size;
  const cellSize = canvasSize / (size + margin * 2);

  let svgContent = "";

  // Background
  if (!options.transparent) {
    svgContent += `<rect width="${canvasSize}" height="${canvasSize}" fill="${options.background}" />`;
  }

  let paths = "";
  let circles = "";
  let leafPaths = "";

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (qr.modules.get(c, r)) {
        const x = (c + margin) * cellSize;
        const y = (r + margin) * cellSize;

        if (isEye(r, c, size)) {
          if (options.eyeStyle === "rounded") {
            paths += `M${x+cellSize*0.3},${y} h${cellSize*0.4} a${cellSize*0.3},${cellSize*0.3} 0 0 1 ${cellSize*0.3},${cellSize*0.3} v${cellSize*0.4} a${cellSize*0.3},${cellSize*0.3} 0 0 1 -${cellSize*0.3},${cellSize*0.3} h-${cellSize*0.4} a${cellSize*0.3},${cellSize*0.3} 0 0 1 -${cellSize*0.3},-${cellSize*0.3} v-${cellSize*0.4} a${cellSize*0.3},${cellSize*0.3} 0 0 1 ${cellSize*0.3},-${cellSize*0.3} z `;
          } else if (options.eyeStyle === "circle") {
            circles += `<circle cx="${x + cellSize / 2}" cy="${y + cellSize / 2}" r="${cellSize / 2}" fill="${options.foreground}" />`;
          } else {
            paths += `M${x},${y} h${cellSize} v${cellSize} h-${cellSize} z `;
          }
        } else {
          if (options.dotStyle === "rounded") {
             circles += `<circle cx="${x + cellSize / 2}" cy="${y + cellSize / 2}" r="${cellSize / 2}" fill="${options.foreground}" />`;
          } else if (options.dotStyle === "diamond") {
            paths += `M${x + cellSize / 2},${y} L${x + cellSize},${y + cellSize / 2} L${x + cellSize / 2},${y + cellSize} L${x},${y + cellSize / 2} z `;
          } else if (options.dotStyle === "leaf") {
            leafPaths += `<path d="M${x},${y} L${x + cellSize},${y} L${x + cellSize},${y + cellSize} Q${x},${y + cellSize} ${x},${y} z" fill="${options.foreground}" />`;
          } else {
             paths += `M${x},${y} h${cellSize} v${cellSize} h-${cellSize} z `;
          }
        }
      }
    }
  }

  if (paths) {
    svgContent += `<path d="${paths}" fill="${options.foreground}" />`;
  }
  if (circles) {
    svgContent += circles;
  }
  if (leafPaths) {
    svgContent += leafPaths;
  }

  // Draw Center Monogram
  if (options.centerText) {
    const centerSize = canvasSize * 0.25;
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    svgContent += `
      <circle cx="${centerX}" cy="${centerY}" r="${centerSize / 2}" fill="${options.background}" stroke="${options.foreground}" stroke-width="2" />
      <text x="${centerX}" y="${centerY}" font-family="sans-serif" font-weight="bold" font-size="${centerSize * 0.4}px" fill="${options.foreground}" text-anchor="middle" dominant-baseline="central">
        ${options.centerText.substring(0, 3).toUpperCase()}
      </text>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${canvasSize}" height="${canvasSize}" viewBox="0 0 ${canvasSize} ${canvasSize}">${svgContent}</svg>`;
};
