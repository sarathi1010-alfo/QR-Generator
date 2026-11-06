#!/usr/bin/env node
/**
 * Genuine Programmatic IndexNow API Ping Script
 * Notifies search engines (Bing, Yandex, IndexNow) of page updates.
 */

const DOMAIN = process.env.INDEXNOW_HOST || 'qr.alfo.online';
const KEY = '550e8400e29b41d4a716446655440000';

async function pingIndexNow() {
  const url = `https://${DOMAIN}/`;
  const payload = {
    host: DOMAIN,
    key: KEY,
    keyLocation: `https://${DOMAIN}/${KEY}.txt`,
    urlList: [url]
  };

  console.log(`[IndexNow] Submitting genuine ping for ${DOMAIN} to api.indexnow.org...`);
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Successfully notified IndexNow for ${DOMAIN} (Status: ${response.status})`);
    } else {
      const text = await response.text().catch(() => '');
      console.warn(`[IndexNow] Received non-200 response (${response.status}): ${text}`);
    }
  } catch (error) {
    console.error(`[IndexNow] Error pinging IndexNow: ${error.message}`);
  }
}

pingIndexNow();
