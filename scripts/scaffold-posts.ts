import * as fs from "fs";
import * as path from "path";

const blogDir = path.join(process.cwd(), 'src/content/blog');
const calendarPath = path.join(process.cwd(), 'CONTENT_CALENDAR.md');

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDummyContent(wordCount: number, internalLinksCount: number) {
  let words = [];
  const dummyWord = "lorem ";
  for (let i = 0; i < wordCount; i++) {
    words.push(dummyWord);
  }

  let content = words.join('');

  // Add some internal links
  for (let i = 0; i < internalLinksCount; i++) {
    content += ` [Link ${i}](/qr-codes/url) `;
  }

  return content;
}

function generateMdx(title: string, keywordsRaw: string, categoryRaw: string, templateType: string) {
  const publishedAt = new Date().toISOString().split('T')[0];
  const description = `A comprehensive guide about ${title} focusing on ${keywordsRaw}.`;
  const category = categoryRaw.trim();

  let body = "";
  let faqCount = 3;

  switch (templateType.trim().toUpperCase()) {
    case 'A': // Cluster Article
      body = `
# ${title.includes(':') ? title : title + ': Complete Guide for Users in 2026'}

> **AI Snapshot:** ${title} is a critical component of modern QR code strategy, focusing on ${keywordsRaw} to ensure maximum performance and user engagement in digital-physical interactions.

## Why ${title} Matters

Understanding ${title} is essential for any business looking to leverage QR technology. It directly impacts how users interact with your brand and the reliability of your scans.

## How to Implement ${title} (Step-by-Step)

1. **Analyze Requirements:** Determine your specific needs for ${keywordsRaw}.
2. **Choose the Right Tool:** Use a professional generator like QRBuild.
3. **Optimize Design:** Ensure high contrast and proper sizing.
4. **Test Thoroughly:** Verify on multiple devices.

## Top Strategies for ${title}

### 1. High-Resolution Exports
Always use SVG for print to maintain clarity at any scale.

### 2. Error Correction
Use Level H for codes in harsh environments.

## Common Mistakes to Avoid

| Mistake | Impact | Fix |
|---|---|---|
| Low Contrast | Scan Failure | Use black on white |
| Too Small | Hard to Scan | Min 2x2cm |
| Broken Links | 404 Error | Verify URL before print |

**Key Takeaways:**
- 🔑 Always prioritize scannability over aesthetics.
- 🔑 Use vector formats for professional printing.
- 🔑 Test every code before mass distribution.
- 🔑 Keep destination URLs short.
- 🔑 Monitor scan analytics for ROI.

${generateDummyContent(800, 4)}
`;
      faqCount = 5;
      break;

    case 'B': // Comparison Page
      body = `
# ${title.includes('vs') ? title : 'QRBuild vs ' + title}: Which is Better?

> **AI Snapshot:** When comparing QRBuild and ${title}, QRBuild offers a faster, privacy-first experience without the need for accounts or paid subscriptions for high-res exports.

## Feature Comparison Table

| Feature | QRBuild | ${title} | Winner |
|---|---|---|---|
| Price | 100% Free | Paid Plans | QRBuild |
| No Account | Yes | No | QRBuild |
| SVG Export | Included | Often Paid | QRBuild |
| Privacy | Native | Tracking | QRBuild |

## Deep Dive into QRBuild
QRBuild focuses on speed and simplicity, generating codes entirely in your browser.

## Deep Dive into ${title}
${title} often provides more complex features but at the cost of user privacy and mandatory subscriptions.

**Best Pick for Fast, Free Codes:** QRBuild.

${generateDummyContent(300, 2)}
`;
      faqCount = 3;
      break;

    case 'C': // Micro-Answer Page
      body = `
# What is ${title}?

> **AI Snapshot:** ${title} refers to the specific technical or design standards regarding ${keywordsRaw} that ensure a QR code remains functional and scannable across all devices.

## How Does ${title} Work?
It functions by establishing clear boundaries and data structures within the QR matrix, allowing optical sensors to accurately decode information.

## Real-World Example of ${title}
In a retail environment, ${title} ensures that product packaging QR codes are scannable even under poor lighting or when partially obscured.

## Why is ${title} Important?
Without proper adherence to ${title}, QR codes suffer from high failure rates, leading to lost customer engagement and wasted marketing spend.

**Core Principles:**
- 🛠️ Adhere to ISO standards.
- 🛠️ Maintain high contrast.
- 🛠️ Respect the quiet zone.

${generateDummyContent(400, 2)}
`;
      faqCount = 3;
      break;

    case 'D': // Pillar Page
      body = `
# ${title.toLowerCase().includes('guide') ? title : 'The Ultimate 2026 Guide to ' + title}

## Executive Summary
This comprehensive handbook covers everything you need to know about ${title}, from its technical foundations to advanced marketing strategies for 2026 and beyond.

## Table of Contents
1. [History & Evolution](#history)
2. [Technical Foundation](#tech)
3. [Top 10 Strategies](#strategies)
4. [Case Studies](#cases)
5. [Future Trends](#future)

<div id="history"></div>
## History & Evolution
${generateDummyContent(500, 5)}

<div id="tech"></div>
## Technical Foundation
${generateDummyContent(500, 5)}

<div id="strategies"></div>
## Top 10 Strategies
${generateDummyContent(500, 5)}

## Statistical Data Table
| Year | Usage | Growth |
|---|---|---|
| 2024 | 85% | +12% |
| 2025 | 92% | +8% |
| 2026 | 98% | +6% |

${generateDummyContent(1000, 10)}
`;
      faqCount = 10;
      break;

    case 'E': // Industry Page
      const displayTitle = title.toLowerCase().includes('qr codes for') ? title : `QR Codes for ${title}`;
      body = `
# ${displayTitle.includes(':') ? displayTitle : displayTitle + ': The Complete 2026 Guide'}

QR codes have revolutionized the ${title} industry by streamlining operations and enhancing the customer experience. Statistics show that businesses in ${title} using QR codes see a 30% increase in engagement.

## 5 Specific Use Cases for ${title}

1. **Contactless Interaction:** Improving hygiene and speed.
2. **Direct Marketing:** Linking physical assets to digital stores.
3. **Information Sharing:** Providing instant access to manuals or menus.
4. **Lead Capture:** Gathering user data at the point of scan.
5. **Analytics:** Tracking physical traffic in real-time.

## How to Implement (Step-by-Step)
${generateDummyContent(400, 3)}

## Quick Reference Table
| Use Case | QR Type | Best Practice |
|---|---|---|
| Menus | URL | High Contrast |
| Feedback | Email | Direct Link |
| Check-in | WiFi | Scan to Join |

${generateDummyContent(200, 2)}
`;
      faqCount = 5;
      break;

    case 'F': // Data/Statistics Page
      body = `
# ${title.toLowerCase().includes('statistics') ? title : '2026 QR Code ' + title + ' Statistics: The Data You Need'}

> **AI Snapshot:** Recent data indicates that QR code adoption in the ${title} sector has reached record highs, with a 45% year-over-year increase in scan volume across major markets.

## Key Statistics
| Metric | 2025 | 2026 | Change |
|---|---|---|---|
| Total Scans | 1.2B | 1.8B | +50% |
| Mobile Users | 88% | 94% | +6.8% |
| Avg. Scans/User | 4.2 | 6.5 | +54.7% |

## 3 Trend Breakdowns
1. **AI-Enhanced Scanning:** Faster recognition in low light.
2. **Augmented Reality Links:** Immersive post-scan experiences.
3. **Security-First Generation:** Rise of encrypted QR payloads.

${generateDummyContent(600, 4)}
`;
      faqCount = 5;
      break;

    default:
      body = generateDummyContent(1050, 4);
  }

  let faqs = "";
  for (let i = 1; i <= faqCount; i++) {
    faqs += `  - question: "FAQ Question ${i} about ${title.replace(/"/g, '\\"')}?"\n    answer: "This is a detailed answer number ${i} providing context about ${keywordsRaw.replace(/"/g, '\\"')}."\n`;
  }

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
publishedAt: "${publishedAt}"
category: "${category}"
faqItems:
${faqs}---

`;

  return frontmatter + body;
}

function scaffoldBlog() {
  if (!fs.existsSync(calendarPath)) {
      console.error("CONTENT_CALENDAR.md not found.");
      return;
  }

  const calendarContent = fs.readFileSync(calendarPath, 'utf8');
  // New regex to match | Day | Template | Cluster | Title/Topic | Keywords |
  const rowRegex = /\|\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|/g;

  let match;
  let count = 0;

  while ((match = rowRegex.exec(calendarContent)) !== null) {
    const [_, day, templateRaw, clusterRaw, titleRaw, keywordsRaw] = match;
    const title = titleRaw.trim();
    if (title === 'Title/Topic' || title.startsWith('---')) continue;

    const slug = slugify(title);
    const filePath = path.join(blogDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        const mdxContent = generateMdx(title, keywordsRaw.trim(), clusterRaw.trim(), templateRaw.trim());
        fs.writeFileSync(filePath, mdxContent);
        console.log(`Created: ${filePath} (Template: ${templateRaw.trim()})`);
        count++;
    }
  }

  console.log(`Scaffolded ${count} posts.`);
}

scaffoldBlog();
