const SITE_URL = "https://qr.alfo.online";

const NEW_URLS = [
  `${SITE_URL}/blog/create-qr-code-for-business-guide`,
  `${SITE_URL}/qr-codes/customer-feedback-collection`,
  `${SITE_URL}/qr-codes/manufacturing-warranty-registration`,
  `${SITE_URL}/qr-codes/art-gallery-exhibition-guides`,
  `${SITE_URL}/qr-codes/fitness-club-member-check-ins`,
  `${SITE_URL}/qr-codes/real-estate-virtual-tours`,
  `${SITE_URL}/blog/create-qr-code-for-logistics-guide`,
  `${SITE_URL}/qr-codes/warehouse-inventory-tracking`,
  `${SITE_URL}/qr-codes/delivery-driver-check-ins`,
  `${SITE_URL}/qr-codes/supply-chain-authentication`,
  `${SITE_URL}/qr-codes/forklift-maintenance-logs`,
  `${SITE_URL}/qr-codes/shipping-container-manifests`,
  `${SITE_URL}/blog/how-to-create-qr-code-for-healthcare-facilities-guide`,
  `${SITE_URL}/qr-codes/hospital-cafeteria-menus`,
  `${SITE_URL}/qr-codes/mri-safety-instructions`,
  `${SITE_URL}/qr-codes/maternity-ward-visitor-access`,
  `${SITE_URL}/qr-codes/physical-therapy-exercises`,
  `${SITE_URL}/qr-codes/blood-donation-scheduling`,
  `${SITE_URL}/blog/how-to-create-qr-code-for-event-management`,
  `${SITE_URL}/qr-codes/corporate-event-badges`,
  `${SITE_URL}/qr-codes/music-festival-wristbands`,
  `${SITE_URL}/qr-codes/charity-gala-auctions`,
  `${SITE_URL}/qr-codes/esports-tournament-schedules`,
  `${SITE_URL}/qr-codes/food-festival-menus`,
`${SITE_URL}/blog/the-ultimate-guide-to-qr-codes-in-2026`,
  `${SITE_URL}/blog/what-is-a-qr-code-the-ultimate-2026-guide`,
  `${SITE_URL}/blog/what-is-a-url-qr-code`,
  `${SITE_URL}/blog/what-is-a-wifi-qr-code`,
  `${SITE_URL}/blog/what-is-a-vcard-qr-code`,
  `${SITE_URL}/blog/how-does-a-qr-code-work`,
  `${SITE_URL}/blog/qr-codes-for-healthcare`,
  `${SITE_URL}/qr-codes/patient-wristbands`,
  `${SITE_URL}/qr-codes/telehealth-portal`,
  `${SITE_URL}/qr-codes/medical-equipment-tracking`,
  `${SITE_URL}/qr-codes/hospital-navigation`,
  `${SITE_URL}/qr-codes/prescription-labels`,
  `${SITE_URL}/blog/business-qr-code-guide`,
  `${SITE_URL}/qr-codes/restaurant-menu`,
  `${SITE_URL}/qr-codes/business-card`,
  `${SITE_URL}/qr-codes/product-packaging`,
  `${SITE_URL}/qr-codes/event-tickets`,
  `${SITE_URL}/qr-codes/wifi-login`,
  `${SITE_URL}/blog/how-to-create-qr-code-consulting-business`,
  `${SITE_URL}/qr-codes/freelance-portfolio`,
  `${SITE_URL}/qr-codes/law-office`,
  `${SITE_URL}/qr-codes/plumbing-services`,
  `${SITE_URL}/qr-codes/dental-clinic`,
  `${SITE_URL}/qr-codes/accounting-firm`,
  `${SITE_URL}/blog/qr-code-inventory-management-guide`,
  `${SITE_URL}/qr-codes/warehouse-racks`,
  `${SITE_URL}/qr-codes/fleet-vehicles`,
  `${SITE_URL}/qr-codes/pallet-tracking`,
  `${SITE_URL}/qr-codes/cold-storage`,
  `${SITE_URL}/qr-codes/tool-cribs`,
  `${SITE_URL}/blog/how-to-create-qr-code-construction-site`,
  `${SITE_URL}/qr-codes/site-safety-protocols`,
  `${SITE_URL}/qr-codes/digital-blueprints`,
  `${SITE_URL}/qr-codes/heavy-machinery-manuals`,
  `${SITE_URL}/qr-codes/worker-sign-in`,
  `${SITE_URL}/qr-codes/hazard-reporting`,
  `${SITE_URL}/blog/qr-codes-for-event-management-guide`,
  `${SITE_URL}/qr-codes/event-registration`,
  `${SITE_URL}/qr-codes/conference-schedules`,
  `${SITE_URL}/qr-codes/trade-show-lead-capture`,
  `${SITE_URL}/qr-codes/concert-merchandise`,
  `${SITE_URL}/qr-codes/vip-access-passes`,
  `${SITE_URL}/blog/qr-codes-for-financial-services-guide`,
  `${SITE_URL}/qr-codes/bank-branch-appointment-booking`,
  `${SITE_URL}/qr-codes/contactless-atm-withdrawals`,
  `${SITE_URL}/qr-codes/mobile-banking-app-downloads`,
  `${SITE_URL}/qr-codes/mortgage-application-tracking`,
  `${SITE_URL}/qr-codes/credit-card-activation`,
  `${SITE_URL}/blog/qr-codes-for-automotive-industry-guide`,
  `${SITE_URL}/qr-codes/car-dealership-inventory`,
  `${SITE_URL}/qr-codes/auto-repair-service-history`,
  `${SITE_URL}/qr-codes/test-drive-booking`,
  `${SITE_URL}/qr-codes/car-wash-loyalty-program`,
  `${SITE_URL}/qr-codes/vehicle-window-stickers`,
  `${SITE_URL}/blog/qr-codes-for-real-estate-virtual-tours-listings`,
  `${SITE_URL}/blog/qr-codes-for-real-estate-agents`,
  `${SITE_URL}/qr-codes/real-estate-virtual-tours`,
  `${SITE_URL}/qr-codes/open-house-sign-ins`,
  `${SITE_URL}/qr-codes/property-listing-flyers`,
  `${SITE_URL}/qr-codes/real-estate-agent-vcard`,
  `${SITE_URL}/qr-codes/for-sale-sign-riders`,
  `${SITE_URL}/blog/create-qr-code-for-museums-guide`,
  `${SITE_URL}/qr-codes/museum-exhibit-audio-guides`,
  `${SITE_URL}/qr-codes/museum-ticket-booking`,
  `${SITE_URL}/qr-codes/museum-gift-shop-payments`,
  `${SITE_URL}/qr-codes/museum-interactive-maps`,
  `${SITE_URL}/qr-codes/museum-donation-portals`,
  `${SITE_URL}/blog/create-qr-code-for-agriculture-guide`,
  `${SITE_URL}/qr-codes/agriculture-equipment-tracking`,
  `${SITE_URL}/qr-codes/farm-to-table-traceability`,
  `${SITE_URL}/qr-codes/crop-management-logs`,
  `${SITE_URL}/qr-codes/livestock-health-records`,
  `${SITE_URL}/qr-codes/farmers-market-payments`,
  `${SITE_URL}/blog/qr-codes-for-nonprofits-donations`,
  `${SITE_URL}/qr-codes/nonprofit-gala-auctions`,
  `${SITE_URL}/qr-codes/food-bank-donations`,
  `${SITE_URL}/qr-codes/animal-shelter-adoptions`,
  `${SITE_URL}/qr-codes/disaster-relief-funds`,
  `${SITE_URL}/qr-codes/volunteer-sign-up-forms`,
  `${SITE_URL}/blog/qr-codes-for-gyms-fitness-studios`,
  `${SITE_URL}/qr-codes/gym-equipment-tutorials`,
  `${SITE_URL}/qr-codes/fitness-class-schedules`,
  `${SITE_URL}/qr-codes/personal-trainer-booking`,
  `${SITE_URL}/qr-codes/locker-room-maintenance-requests`,
    `${SITE_URL}/qr-codes/supplement-store-payments`,
  `${SITE_URL}/blog/qr-codes-for-beauty-cosmetics-guide`,
  `${SITE_URL}/qr-codes/beauty-salon-booking`,
  `${SITE_URL}/qr-codes/spa-menu-access`,
  `${SITE_URL}/qr-codes/hair-stylist-portfolio`,
  `${SITE_URL}/qr-codes/nail-salon-loyalty`,
  `${SITE_URL}/qr-codes/cosmetics-product-info`,
  `${SITE_URL}/blog/create-qr-code-for-education-guide`,
  `${SITE_URL}/qr-codes/university-campus-tour-guides`,
  `${SITE_URL}/qr-codes/classroom-interactive-learning`,
  `${SITE_URL}/qr-codes/school-library-book-checkout`,
  `${SITE_URL}/qr-codes/student-attendance-tracking`,
  `${SITE_URL}/qr-codes/parent-teacher-communication-forms`,
  `${SITE_URL}/blog/qr-codes-for-legal-services-guide`,
  `${SITE_URL}/qr-codes/law-firm-client-intake`,
  `${SITE_URL}/qr-codes/notary-document-verification`,
  `${SITE_URL}/qr-codes/courtroom-evidence-links`,
  `${SITE_URL}/qr-codes/legal-consultation-booking`,
  `${SITE_URL}/qr-codes/contract-signature-links`,
  `${SITE_URL}/blog/qr-codes-for-loyalty-programs-guide`,
  `${SITE_URL}/qr-codes/coffee-shop-loyalty-cards`,
  `${SITE_URL}/qr-codes/retail-store-rewards`,
  `${SITE_URL}/qr-codes/airline-frequent-flyer-points`,
  `${SITE_URL}/qr-codes/hotel-guest-loyalty`,
  `${SITE_URL}/qr-codes/restaurant-vip-programs`
];

const INDEXNOW_KEY = '550e8400e29b41d4a716446655440000';

async function pingSitemap() {
  console.log('Pinging Google Sitemap...');
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(pingUrl, { method: 'GET' });
    console.log(`Google Sitemap ping response: ${response.status}`);
  } catch (error) {
    console.error('Failed to ping Google Sitemap:', error);
  }
}

async function triggerIndexNow() {
  console.log('Triggering IndexNow...');
  const indexNowUrl = 'https://www.bing.com/indexnow';
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: NEW_URLS
  };

  try {
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log(`IndexNow response: ${response.status}`);
  } catch (error) {
    console.error('Failed to trigger IndexNow:', error);
  }
}

async function run() {
  await pingSitemap();
  await triggerIndexNow();
}

run().catch(console.error);
