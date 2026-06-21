const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'QRBuild';
const SEPARATOR = ' | ';

export function formatTitle(rawTitle: string, isHomepage = false): string {
  if (isHomepage) return rawTitle;
  return `${rawTitle}${SEPARATOR}${SITE_NAME}`;
}
