# Search Console & SEO Fix Plan

Based on the latest SEO audit (SEO_AUDIT.md), the following actions are being implemented to improve site coverage, semantic density, and technical hygiene:

## 1. Accelerating Topical Authority (Addressing Content Thinness)
- **Strategy:** Execute the "Authority Engine" 4-week content queue to transform the site from a single-tool landing page into a comprehensive QR education ecosystem.
- **Action:** Prioritize missing use-case categories (e.g., Education, Healthcare, Logistics) as identified in `WEEKLY_CONTENT_ENGINE.md`.
- **Target:** Maintain a publishing velocity of 3-5 daily clusters and 5-10 programmatic pages until the topical map is 80% saturated.

## 2. Structural Internal Linking & Orphan Prevention
- **Strategy:** Move beyond manual linking to a systematic "Hub and Spoke" architecture.
- **Action:**
    - Implement Category Hubs at `/blog/category/[slug]` to consolidate cluster authority.
    - Audit all pages for "orphan" status; every new article must have >=2 inbound links from existing content.
    - Leverage the `RelatedPosts` component on all MDX pages to automate discovery within the same category.
    - Link the "Why use QRBuild?" section on the Home Page to the latest Tier 1 authority guides.

## 3. Systematic AEO (AI Engine Optimization)
- **Strategy:** Optimize for LLM-based discovery and featured snippets.
- **Action:**
    - **AI Snapshot:** Every Tier 1 article must include a 30-40 word direct answer block immediately below the main H2 question.
    - **FAQ Schema:** Automatically inject FAQPage JSON-LD for all blog posts and programmatic pages using the `faqItems` frontmatter and `src/lib/seo/buildSchema.ts`.
    - **Breadcrumbs:** Ensure BreadcrumbList schema is active on all sub-pages for improved crawl depth and SERP appearance.

## 4. Technical Hygiene & Route Integrity
- **Strategy:** Zero-error policy for all new and migrated routes.
- **Action:**
    - Monitor GSC for "Discovered - currently not indexed" and "Excluded" status.
    - Enforce 301 redirects for legacy `/generator/` paths in `next.config.mjs`.
    - Use `verify_final_proof.py` (Playwright) to verify 200 OK status and functional integrity before every deployment.

## 5. Quality Control Automation
- **Strategy:** Automate the audit process for new content.
- **Action:** Develop and run `scripts/seo-qc.ts` to validate word counts, internal link presence, and heading structure (Single H1) before publishing.

## 6. Execution Log (July 10, 2026)
- **Content:** Published Tier 1 Authority Guide (/blog/business-qr-code-guide) - 2,057 words.
- **Programmatic:** Refreshed Tier 2 Programmatic pages with FAQ schema.
- **Internal Linking:** Updated 3 older guides and homepage with contextual links.
- **Verification:** Headless browser test passed (Status 200).
- **Indexing:** Triggered IndexNow for all new URLs.

## Simulated GSC Audit Plan (July 12, 2026)

### Issue: "Crawled - currently not indexed"
We simulated checking Google Search Console for `alfo.online` and identified a batch of programmatic URLs tagged as "Crawled - currently not indexed".

**Root Cause Hypothesis:**
Google is finding the pages but determining they lack sufficient unique value compared to existing index entries, or the crawl budget is exhausted on lower-tier parameters.

**Action Plan:**
1. **Internal Linking Infusion:** Immediately inject at least 2 internal links to the affected URLs from high-authority Tier 1 blog posts.
2. **Content Enrichment:** Expand the AI Snapshot on those programmatic templates to add 50-70 words of unique, non-templated text using data specific to that route's subject.
3. **IndexNow Ping:** Force a manual submission via `npm run ping` after the updates are live to signal significant content shifts to search engines.
4. **Sitemap Verification:** Confirm that the URLs are present in `sitemap-products.xml` and there are no conflicting `noindex` directives or canonical issues.
