from playwright.sync_api import sync_playwright
import os
import sys

def run_verification():
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    urls_to_test = [
        "/blog/create-qr-code-for-business-guide",
        "/qr-codes/customer-feedback-collection",
        "/qr-codes/manufacturing-warranty-registration",
        "/qr-codes/art-gallery-exhibition-guides",
        "/qr-codes/fitness-club-member-check-ins",
        "/qr-codes/real-estate-virtual-tours",
        "/blog/create-qr-code-for-logistics-guide",
        "/qr-codes/warehouse-inventory-tracking",
        "/qr-codes/delivery-driver-check-ins",
        "/qr-codes/supply-chain-authentication",
        "/qr-codes/forklift-maintenance-logs",
        "/qr-codes/shipping-container-manifests",
        "/blog/how-to-create-qr-code-for-healthcare-facilities-guide",
        "/qr-codes/hospital-cafeteria-menus",
        "/qr-codes/mri-safety-instructions",
        "/qr-codes/maternity-ward-visitor-access",
        "/qr-codes/physical-therapy-exercises",
        "/qr-codes/blood-donation-scheduling",
        "/blog/how-to-create-qr-code-for-event-management",
        "/qr-codes/corporate-event-badges",
        "/blog/qr-codes-for-beauty-cosmetics-guide",
        "/qr-codes/beauty-salon-booking",
        "/qr-codes/spa-menu-access",
        "/qr-codes/hair-stylist-portfolio",
        "/qr-codes/nail-salon-loyalty",
        "/qr-codes/cosmetics-product-info",
        "/qr-codes/music-festival-wristbands",
        "/qr-codes/charity-gala-auctions",
        "/qr-codes/esports-tournament-schedules",
        "/qr-codes/food-festival-menus",
        "/blog/business-qr-code-guide",
        "/qr-codes/restaurant-menu",
        "/qr-codes/business-card",
        "/qr-codes/product-packaging",
        "/qr-codes/event-tickets",
        "/qr-codes/wifi-login",
        "/blog/create-qr-code-for-museums-guide",
        "/qr-codes/museum-exhibit-audio-guides",
        "/qr-codes/museum-ticket-booking",
        "/qr-codes/museum-gift-shop-payments",
        "/qr-codes/museum-interactive-maps",
        "/qr-codes/museum-donation-portals",
        "/blog/create-qr-code-for-agriculture-guide",
        "/qr-codes/agriculture-equipment-tracking",
        "/qr-codes/farm-to-table-traceability",
        "/qr-codes/crop-management-logs",
        "/qr-codes/livestock-health-records",
        "/qr-codes/farmers-market-payments",
        "/blog/qr-codes-for-nonprofits-donations",
        "/qr-codes/nonprofit-gala-auctions",
        "/qr-codes/food-bank-donations",
        "/qr-codes/animal-shelter-adoptions",
        "/qr-codes/disaster-relief-funds",
        "/qr-codes/volunteer-sign-up-forms",
        "/blog/qr-codes-for-gyms-fitness-studios",
        "/qr-codes/gym-equipment-tutorials",
        "/qr-codes/fitness-class-schedules",
        "/qr-codes/personal-trainer-booking",
        "/qr-codes/locker-room-maintenance-requests",
        "/qr-codes/supplement-store-payments",
        "/blog/the-ultimate-guide-to-qr-codes-in-2026",
        "/blog/what-is-a-qr-code-the-ultimate-2026-guide",
        "/blog/what-is-a-url-qr-code",
        "/blog/what-is-a-wifi-qr-code",
        "/blog/what-is-a-vcard-qr-code",
        "/blog/how-does-a-qr-code-work",
        "/blog/qr-codes-for-legal-services-guide",
        "/qr-codes/law-firm-client-intake",
        "/qr-codes/notary-document-verification",
        "/qr-codes/courtroom-evidence-links",
        "/qr-codes/legal-consultation-booking",
        "/qr-codes/contract-signature-links",
        "/blog/qr-codes-for-loyalty-programs-guide",
        "/qr-codes/coffee-shop-loyalty-cards",
        "/qr-codes/retail-store-rewards",
        "/qr-codes/airline-frequent-flyer-points",
        "/qr-codes/hotel-guest-loyalty",
        "/qr-codes/restaurant-vip-programs"
,
        "/blog/create-qr-code-for-manufacturing-guide",
        "/qr-codes/manufacturing-inventory-tracking",
        "/qr-codes/manufacturing-equipment-maintenance",
        "/qr-codes/manufacturing-quality-control",
        "/qr-codes/manufacturing-safety-training",
        "/qr-codes/manufacturing-supply-chain",
        "/blog/how-to-use-qr-codes-in-healthcare-guide",
        "/qr-codes/telemedicine-appointments",
        "/qr-codes/hospital-wayfinding",
        "/qr-codes/medication-tracking",
        "/qr-codes/blood-donation-registration",
        "/qr-codes/digital-health-records",
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
