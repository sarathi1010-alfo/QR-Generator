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
