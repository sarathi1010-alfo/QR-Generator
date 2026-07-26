from playwright.sync_api import sync_playwright
import sys
import os

# Use environment variable or default to /tmp for portability in various CI/CD environments
BASE_DIR = os.environ.get("VERIFICATION_DIR", "/tmp/verification")
VIDEOS_DIR = os.path.join(BASE_DIR, "videos")
SCREENSHOTS_DIR = os.path.join(BASE_DIR, "screenshots")

def verify_urls(page, urls):
    errors = []
    for url in urls:
        print(f"Verifying {url}...")
        response = page.goto(f"http://localhost:3000{url}")
        if response.status != 200:
            errors.append(f"URL {url} returned status {response.status}")

        page.wait_for_timeout(1000)
    return errors

def test_qr_generation(page):
    print("Testing QR generation on home page...")
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Select the URL input
    input_selector = 'input[placeholder="https://example.com"]'
    page.wait_for_selector(input_selector)
    page.fill(input_selector, "https://alfo.online")
    page.wait_for_timeout(1000)

    # Check if canvas exists and is visible
    canvas_selector = 'canvas'
    if page.is_visible(canvas_selector):
        print("QR Canvas is visible.")
    else:
        raise Exception("QR Canvas not visible after input.")

    page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "verification_home.png"))
    page.wait_for_timeout(1000)

def run_verification():
    urls_to_check = [
        "/blog/qr-codes-for-healthcare",
        "/qr-codes/patient-wristbands",
        "/qr-codes/telehealth-portal",
        "/qr-codes/medical-equipment-tracking",
        "/qr-codes/hospital-navigation",
        "/qr-codes/prescription-labels",
        "/blog/business-qr-code-guide",
        "/qr-codes/restaurant-menu",
        "/qr-codes/business-card",
        "/qr-codes/product-packaging",
        "/qr-codes/event-tickets",
        "/qr-codes/wifi-login"
    ]

    os.makedirs(VIDEOS_DIR, exist_ok=True)
    os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir=VIDEOS_DIR)
        page = context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        try:
            status_errors = verify_urls(page, urls_to_check)
            if status_errors:
                print("Status code errors found:")
                for err in status_errors:
                    print(f"  - {err}")
                sys.exit(1)

            test_qr_generation(page)

            if console_errors:
                print("Console errors detected (Violation of Zero Errors Policy):")
                for err in console_errors:
                    print(f"  - {err}")
                sys.exit(1)
            else:
                print("No console errors detected.")

            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "verification_final.png"))
            print(f"Verification complete. Screenshots saved to {SCREENSHOTS_DIR}")

        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run_verification()
