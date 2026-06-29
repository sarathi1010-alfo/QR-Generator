const fs = require('fs');
let sitemap = fs.readFileSync('src/app/sitemap.ts', 'utf8');
if (!sitemap.includes('useCasesExtra')) {
  sitemap = sitemap.replace(
    'import { allSEOConfigs, SITE_URL } from "@/lib/seo-config";',
    'import { allSEOConfigs, SITE_URL } from "@/lib/seo-config";\nimport { useCasesExtra, industryUseCases, qrTypesExtra, downloadFormats, learnTopics } from "@/lib/programmatic-seo";'
  );
  sitemap = sitemap.replace(
    '    ...tools,',
    '    ...tools,\n    ...useCasesExtra.map(c => ({ url: `${SITE_URL}/qr-codes/use-case/${c.slug}`, lastModified: new Date() })),\n    ...industryUseCases.map(c => ({ url: `${SITE_URL}/qr-codes/${c.slug}`, lastModified: new Date() })),\n    ...qrTypesExtra.map(c => ({ url: `${SITE_URL}/qr-types/${c.slug}`, lastModified: new Date() })),\n    ...downloadFormats.map(c => ({ url: `${SITE_URL}/download/${c.slug}`, lastModified: new Date() })),\n    ...learnTopics.map(c => ({ url: `${SITE_URL}/learn/${c.slug}`, lastModified: new Date() })),'
  );
  fs.writeFileSync('src/app/sitemap.ts', sitemap);
}
