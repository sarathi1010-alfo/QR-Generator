import { WiFiData, EmailData, VCardData } from "@/types/qr.types";

export const buildWifiString = (data: WiFiData) => {
  const { ssid, password, security, hidden } = data;
  return `WIFI:T:${security};S:${ssid}${password ? `;P:${password}` : ""};H:${hidden ? 'true' : 'false'};;`;
};

export const buildEmailString = (data: EmailData) => {
  const { email, subject, body } = data;
  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ""}`;
};

export const buildVCardString = (data: VCardData) => {
  const { firstName, lastName, organization, phone, email, url } = data;
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName}`,
    `FN:${firstName} ${lastName}`,
    organization ? `ORG:${organization}` : null,
    phone ? `TEL;TYPE=CELL:${phone}` : null,
    email ? `EMAIL:${email}` : null,
    url ? `URL:${url}` : null,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");
};

export const buildPhoneString = (phone: string) => `tel:${phone}`;

export const buildSmsString = (phone: string, message?: string) => {
  return `sms:${phone}${message ? `?body=${encodeURIComponent(message)}` : ""}`;
};
