from playwright.sync_api import sync_playwright
import os
import sys

def run_verification():
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    urls_to_test = [
        "/blog/how-to-create-qr-code-for-healthcare-facilities-guide",
        "/qr-codes/hospital-cafeteria-menus",
        "/qr-codes/mri-safety-instructions",
        "/qr-codes/maternity-ward-visitor-access",
        "/qr-codes/physical-therapy-exercises",
        "/qr-codes/blood-donation-scheduling",
        "/blog/how-to-create-qr-code-for-event-management",
        "/qr-codes/corporate-event-badges",
        "/qr-codes/music-festival-wristbands",
        "/qr-codes/charity-gala-auctions",
        "/qr-codes/esports-tournament-schedules",
        "/qr-codes/food-festival-menus",
"/blog/business-qr-code-guide",
        "/qr-codes/restaurant-menu",
        "/qr-codes/business-card",
        "/qr-codes/product-packaging",
        "/qr-codes/event-tickets",
        "/qr-codes/wifi-login"
    ]

    base_url = "http://localhost:3000"
    success = True

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")

        def on_console(msg):
            if msg.type == "error":
                # Ignore specific hydration errors that might occur in local build vs dev
                if "Hydration" in msg.text or "React" in msg.text:
                    return
                print(f"  [FAIL] Console error: {msg.text}")
                nonlocal success
                success = False

        def on_request_failed(request):
            # Ignore Google Analytics/AdSense/TagManager failures in local environment
            ignored_domains = ["google-analytics.com", "googlesyndication.com", "googletagmanager.com", "monetag.com"]
            if any(domain in request.url for domain in ignored_domains):
                return

            error_msg = request.failure if isinstance(request.failure, str) else getattr(request.failure, "error_text", "Unknown error")
            print(f"  [FAIL] Failed request: {request.url} - {error_msg}")
            nonlocal success
            success = False

        page = context.new_page()
        page.on("console", on_console)
        page.on("requestfailed", on_request_failed)

        try:
            # 1. Test all new URLs
            for url_path in urls_to_test:
                print(f"Testing {url_path}...")
                response = page.goto(f"{base_url}{url_path}", wait_until="load")

                if response.status != 200:
                    print(f"  [FAIL] Status code {response.status}")
                    success = False
                else:
                    print(f"  [OK] Status 200")

                page.wait_for_timeout(1000)
                filename = url_path.replace("/", "_").strip("_") + ".png"
                page.screenshot(path=f"/home/jules/verification/screenshots/{filename}")

            # 2. Test QR Generation on home page
            print("Testing QR Generation on home page...")
            page.goto(base_url, wait_until="load")
            page.wait_for_timeout(1000)
            input_selector = 'input[placeholder="https://example.com"]'
            page.fill(input_selector, "https://alfo.online")
            page.wait_for_timeout(1000)

            canvas_exists = page.query_selector("canvas") is not None
            if not canvas_exists:
                print("  [FAIL] QR Canvas not found")
                success = False
            else:
                print("  [OK] QR Canvas found")

            page.screenshot(path="/home/jules/verification/screenshots/home_generator_final.png")

        finally:
            context.close()
            browser.close()

    if not success:
        print("Verification FAILED")
        sys.exit(1)
    else:
        print("Verification PASSED")

if __name__ == "__main__":
    run_verification()
