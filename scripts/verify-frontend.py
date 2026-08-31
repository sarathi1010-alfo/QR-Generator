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
"/blog/the-ultimate-guide-to-qr-codes-in-2026",
        "/blog/what-is-a-qr-code-the-ultimate-2026-guide",
        "/blog/what-is-a-url-qr-code",
        "/blog/what-is-a-wifi-qr-code",
        "/blog/what-is-a-vcard-qr-code",
        "/blog/how-does-a-qr-code-work",
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
        "/qr-codes/wifi-login",
        "/blog/qr-codes-for-financial-services-guide",
        "/qr-codes/bank-branch-appointment-booking",
        "/qr-codes/contactless-atm-withdrawals",
        "/qr-codes/mobile-banking-app-downloads",
        "/qr-codes/mortgage-application-tracking",
        "/qr-codes/credit-card-activation",
        "/blog/qr-codes-for-automotive-industry-guide",
        "/qr-codes/car-dealership-inventory",
        "/qr-codes/auto-repair-service-history",
        "/qr-codes/test-drive-booking",
        "/qr-codes/car-wash-loyalty-program",
        "/qr-codes/vehicle-window-stickers",
        "/blog/qr-codes-for-real-estate-virtual-tours-listings",
        "/blog/qr-codes-for-real-estate-agents",
        "/qr-codes/real-estate-virtual-tours",
        "/qr-codes/open-house-sign-ins",
        "/qr-codes/property-listing-flyers",
        "/qr-codes/real-estate-agent-vcard",
        "/qr-codes/for-sale-sign-riders",
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
        "/blog/create-qr-code-for-education-guide",
        "/qr-codes/university-campus-tour-guides",
        "/qr-codes/classroom-interactive-learning",
        "/qr-codes/school-library-book-checkout",
        "/qr-codes/student-attendance-tracking",
        "/qr-codes/parent-teacher-communication-forms",
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
