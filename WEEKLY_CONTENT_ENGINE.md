# QRBuild Weekly Content Engine Strategy

This document defines the repeatable content system for QRBuild (https://qr.alfo.online/) to build massive semantic surface area and dominate QR code search intent.

---

## 1. THE REPEATABLE TEMPLATE SYSTEM

### Template A – Cluster Article (700-1000 words)
*Target: Daily educational depth.*
- **H1:** `[PRIMARY_KEYWORD]`: Complete Guide for `[TARGET_AUDIENCE]` in 2026
- **AI Snapshot:** 30-word intro definition (AEO optimized).
- **H2:** Why `[PRIMARY_KEYWORD]` Matters for `[INDUSTRY/USE_CASE]`
- **H2:** How to `[ACTION]` with `[PRIMARY_KEYWORD]` (step-by-step)
- **H2:** Top `[NUMBER]` `[TOOLS/STRATEGIES]` for `[PRIMARY_KEYWORD]`
- **H3:** Detailed breakdown of each (with real QR code examples)
- **H2:** Common Mistakes to Avoid (with table)
- **AEO Box:** 5 Key Takeaways (bullets)
- **AEO Box:** FAQ Section with 5 questions + FAQPage Schema
- **Internal Links:** 1 Pillar + 2 Clusters + Tool Page

### Template B – Programmatic Comparison Page (300-500 words)
*Target: Infinite scaling against competitors.*
- **H1:** `[ENTITY_A]` vs `[ENTITY_B]`: Which QR Code Generator is Better for `[USE_CASE]`?
- **Quick Verdict:** 1-sentence AI summary.
- **Comparison Table:** (Feature | `[ENTITY_A]` | `[ENTITY_B]` | Winner)
- **Deep Dive `[ENTITY_A]`:** (Pros/Cons)
- **Deep Dive `[ENTITY_B]`:** (Pros/Cons)
- **When to choose each:** Final recommendation.
- **AEO Box:** "Best Pick for [Scenario]"
- **Internal Links:** Pillar + Tool Page

### Template C – Micro-Answer Page (300-500 words)
*Target: Featured snippets and voice search.*
- **H1:** What is `[QR_TERM]`? (e.g., What is a QR Code Quiet Zone?)
- **AI Snapshot:** 40-60 word direct definition.
- **H2:** How Does `[TERM]` Work?
- **H2:** Real-World Example of `[TERM]` in `[INDUSTRY]`
- **H2:** Why is `[TERM]` Important?
- **H2:** `[TERM]` vs `[RELATED_TERM]` (comparison table)
- **AEO Box:** Core Principles (bullets)
- **Internal Links:** 1 Cluster + Tool Page

### Template D – Pillar Page (3000-7000 words)
*Target: Weekly topical hub.*
- **H1:** The Ultimate 2026 Guide to `[BROAD_TOPIC]` (e.g., Ultimate Guide to QR Code Marketing)
- **Executive Summary:** 200 words for AI Overviews.
- **Table of Contents:** with jump links.
- **Chapters:** Introduction/Evolution, Technical Foundation, Top 10 Strategies, Case Study, Future Trends.
- **AEO Box:** Statistical Data Table.
- **AEO Box:** 10+ FAQ with Schema.
- **Internal Links:** 15+ Cluster Articles + Tool Pages.

### Template E – Industry Use-Case Page (600-800 words)
*Target: High commercial intent.*
- **H1:** QR Codes for `[INDUSTRY]`: The Complete 2026 Guide
- **Intro:** Why QR codes matter in `[INDUSTRY]` (with 2-3 statistics).
- **Use Cases:** 5 specific use cases for `[INDUSTRY]` (e.g., QR Codes for Real Estate Property Signs).
- **Implementation:** How to implement in `[INDUSTRY]` (step-by-step).
- **AEO Box:** Quick Reference Table (Use Case → QR Type → Best Practice).
- **Internal Links:** Pillar + Tool + Generator.

### Template F – Data/Statistics Article
*Target: Authority and backlink magnet.*
- **H1:** `[YEAR]` QR Code `[INDUSTRY/TREND]` Statistics: The Data You Need
- **The Bottom Line:** 3-sentence AI citation.
- **Key Statistics:** Tables with year-over-year data.
- **Trends:** 3 Trend breakdowns.
- **Methodology & Sources.**
- **Visual Data Summary Table.**

---

## SCHEMA & AEO IMPLEMENTATION

All templates are designed to work with our existing `faqItems` frontmatter. This frontmatter is automatically converted into `FAQPage` JSON-LD schema by the application.

### Frontmatter Example (All Templates):
```yaml
---
title: "What is a QR Code Quiet Zone?"
description: "Learn about the essential margin required for QR code scannability."
publishedAt: "2026-06-28"
category: "Technical"
faqItems:
  - question: "How large should the quiet zone be?"
    answer: "The quiet zone should be at least 4 modules wide on all sides of the QR code."
  - question: "Can I use a colored quiet zone?"
    answer: "The quiet zone must have high contrast against the QR modules, typically white."
---
```

### Automation Workflow:
1. **Scaffold:** Use `npm run scaffold-blog` to create placeholders.
2. **Write:** Replace "lorem ipsum" with high-quality content using the structure in the templates.
3. **Validate:** Run `npm run qc` to ensure all SEO/AEO requirements are met.
4. **Publish:** Push to GitHub to trigger the automatic build and IndexNow ping.

---

## 2. THE REPEATABLE WEEKLY CALENDAR

| Day | Focus Theme | Content Type |
|---|---|---|
| **Monday** | **Technical Concepts** | 3x Micro-Answers (Template C) + 1x Cluster (Template A) |
| **Tuesday** | **Comparisons** | 5x Comparisons (Template B) |
| **Wednesday** | **Industry Use-Cases** | 1x Industry Page (Template E) + 2x Clusters (Template A) |
| **Thursday** | **QR Code Types** | 3x Micro-Answers (Template C) + 1x Cluster (Template A) |
| **Friday** | **Design & Print Guides** | 2x Clusters (Template A) |
| **Saturday** | **Pillar & Audit** | **1x Weekly Pillar (Template D)** + Internal Linking Audit |
| **Sunday** | **Maintenance** | Content Pruning + Refreshing + **Monthly Report (Template F)** |

---

## 3. PROGRAMMATIC CSV MAPPING

For Template B (Comparisons) and Template C (Micro-Answers), use these headers:

| Header | Description |
|---|---|
| `slug` | URL-friendly slug |
| `title` | Page H1 |
| `entity_a` | QRBuild (usually) |
| `entity_b` | Competitor (e.g., QR Code Monkey, Beaconstac) |
| `use_case` | Main use case being compared |
| `verdict` | 1-sentence winner declaration |
| `feature_1_name` | e.g., Pricing |
| `feature_1_a` | QRBuild feature value |
| `feature_1_b` | Competitor feature value |
| `pros_a` | Bullet list of pros for Entity A |
| `cons_a` | Bullet list of cons for Entity A |
| `internal_link_url` | Target tool page (e.g., /qr-codes/url) |

---

## 4. THE ETERNAL WEEKLY RHYTHM

- **Weekly Pillar:** 1 per week
- **Weekly Industry Use-Case:** 1 per week
- **Weekly Data/Report:** 1 per month
- **Daily Clusters:** 3–5 per day
- **Daily Programmatic Comparisons:** 5–10 per day
- **Daily Micro-Answers:** 5 per day
- **Indexed Pages Target:** 50–100 new pages per week

---

## 5. PRIORITY TOPIC QUEUE (FIRST 4 WEEKS)

### Week 1: Authority Engine - Fundamentals
- **Pillar:** The Ultimate Guide to QR Codes in 2026
- **Comparisons:** QRBuild vs QR Code Monkey, QRBuild vs Beaconstac
- **Industry:** Restaurants, Retail
- **Technical:** Error Correction Levels Explained, QR Code Versions Explained
- **Micro:** What is a QR Code Quiet Zone?, QR Code Data Capacity, What is a QR Code Scanner?

### Week 2: Use Cases & Types
- **Pillar:** QR Codes for Business: The Complete Guide
- **Comparisons:** QRBuild vs The QR Code Generator, QRBuild vs QRCodeChimp
- **Industry:** Real Estate, Education, Healthcare
- **Technical:** Static vs Dynamic QR Codes: Which Should You Choose?
- **Micro:** What is a vCard QR Code?, What is a WiFi QR Code?

### Week 3: Design & Print
- **Pillar:** QR Code Design & Customization: The 2026 Handbook
- **Comparisons:** QRBuild vs Canva QR, QRBuild vs Adobe Express
- **Industry:** Events, Logistics, Marketing
- **Technical:** QR Code Sizing for Print, Color Contrast Requirements for Scannability
- **Micro:** Can I Add a Logo to a QR Code?, SVG vs PNG for QR Codes

### Week 4: Advanced & Integration
- **Pillar:** QR Code Analytics & Tracking: Measuring ROI
- **Comparisons:** QRBuild vs Bitly QR, QRBuild vs Flowcode
- **Industry:** Hospitality, E-commerce, Nonprofits
- **Technical:** QR Code API Integration Guide, How to Generate QR Codes with Python
- **Micro:** What is a Dynamic QR Code?, How to Use UTM Parameters with QR Codes
