const SITE_URL = "https://qr.alfo.online";

const NEW_URLS = [
  `${SITE_URL}/blog/business-qr-code-guide`,
  `${SITE_URL}/qr-codes/restaurant-menu`,
  `${SITE_URL}/qr-codes/business-card`,
  `${SITE_URL}/qr-codes/product-packaging`,
  `${SITE_URL}/qr-codes/event-tickets`,
  `${SITE_URL}/qr-codes/wifi-login`
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
