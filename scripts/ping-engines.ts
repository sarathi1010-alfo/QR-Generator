const SITE_URL = "https://qr.alfo.online";

const NEW_URLS = [
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
  `${SITE_URL}/qr-codes/farmers-market-payments`
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
