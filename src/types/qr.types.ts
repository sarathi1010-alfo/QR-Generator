export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QROptions {
  size: number;
  foreground: string;
  background: string;
  errorLevel: QRErrorCorrectionLevel;
  margin?: number;
  transparent?: boolean;
  dotStyle?: 'square' | 'rounded' | 'diamond' | 'leaf';
  eyeStyle?: 'square' | 'rounded' | 'circle';
  centerText?: string;
}

export type QRType = 'url' | 'text' | 'wifi' | 'email' | 'phone' | 'vcard' | 'batch';

export interface QRHistoryItem {
  id: string;
  type: QRType;
  data: string;
  timestamp: number;
  label?: string;
}

export interface WiFiData {
  ssid: string;
  password?: string;
  security: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface EmailData {
  email: string;
  subject?: string;
  body?: string;
}

export interface VCardData {
  firstName: string;
  lastName: string;
  organization?: string;
  phone?: string;
  email?: string;
  url?: string;
}
