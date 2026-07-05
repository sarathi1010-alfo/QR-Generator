# Search Console & SEO Fix Plan

Based on the latest SEO audit, the following actions are planned to improve site coverage and technical hygiene:

## 1. Addressing Content Thinness
- **Issue:** The site is currently "thin" with minimal informational content.
- **Fix:** Continue the "Authority Engine" 4-week content queue defined in `WEEKLY_CONTENT_ENGINE.md`.
- **Target:** Publish 3-5 daily clusters and 5-10 programmatic comparisons to build semantic density.

## 2. Improving Internal Linking
- **Issue:** High risk of orphan pages due to poor cross-linking.
- **Fix:**
    - Ensure all new articles include at least 2 links to pillar pages (Home/Recent History).
    - Implement a "Related Posts" component (already in `src/components/blog/RelatedPosts.tsx`) on all blog pages to automate discovery.
    - Retroactively link older guides (e.g., Size Guide, WiFi Guide) to new authoritative content.

## 3. AEO Optimization
- **Issue:** Missing systematic AI Engine Optimization (AEO) answer blocks.
- **Fix:**
    - Strictly enforce the "AI Snapshot" block (30-40 words) below the main H2 for all Tier 1 articles.
    - Ensure FAQ schema is injected for all programmatic and blog pages via the `faqItems` frontmatter.

## 4. Technical Hygiene (404s and Redirects)
- **Issue:** Potential for 404s during route migration.
- **Fix:**
    - Regularly monitor Search Console for "Excluded" or "Not Found (404)" pages.
    - Maintain 301 redirects in `next.config.mjs` for any legacy `/generator/` paths migrating to `/qr-codes/`.

## 5. Structured Data Validation
- **Fix:** Use the Google Rich Results Test to validate Article and FAQ schema on new URLs.
