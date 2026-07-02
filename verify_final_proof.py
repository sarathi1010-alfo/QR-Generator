from playwright.sync_api import sync_playwright
import os

def run_verification():
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        try:
            # 1. Home page & QR Generation
            print("Navigating to home page...")
            page.goto("http://localhost:3000")
            page.wait_for_timeout(1000)
            input_selector = 'input[placeholder="https://example.com"]'
            page.fill(input_selector, "https://alfo.online")
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/screenshots/home_generator.png")

            # 2. Tier 1 Article
            print("Navigating to Tier 1 Article...")
            page.goto("http://localhost:3000/blog/business-qr-code-guide")
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/screenshots/tier1_article.png")

            # 3. Tier 2 Programmatic Page
            print("Navigating to Tier 2 Programmatic Page...")
            page.goto("http://localhost:3000/qr-codes/restaurant-menu")
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/screenshots/tier2_programmatic.png")

        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run_verification()
