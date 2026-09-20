import requests
import xml.etree.ElementTree as ET
import sys
from urllib.parse import urlparse

def get_urls_from_sitemap(sitemap_url):
    try:
        response = requests.get(sitemap_url)
        response.raise_for_status()
        root = ET.fromstring(response.content)
        urls = []
        # Support both sitemap index and URL set
        if 'sitemapindex' in root.tag:
            for sitemap in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
                urls.extend(get_urls_from_sitemap(sitemap.text))
        else:
            for url in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
                urls.append(url.text)
        return urls
    except Exception as e:
        print(f"Error fetching/parsing sitemap {sitemap_url}: {e}")
        return []

base_url = "http://localhost:3000"
sitemap_urls = [
    f"{base_url}/sitemap.xml",
    f"{base_url}/sitemap-articles.xml",
    f"{base_url}/sitemap-products.xml"
]

all_urls = []
for sitemap in sitemap_urls:
    all_urls.extend(get_urls_from_sitemap(sitemap))

all_urls = list(set(all_urls)) # deduplicate
print(f"Found {len(all_urls)} total unique URLs to check.")

if len(all_urls) == 0:
    print("Warning: No URLs found in sitemaps. Is the server running?")
    sys.exit(0)

errors = []
for i, url in enumerate(all_urls):
    # Map production URLs to local for testing
    parsed_url = urlparse(url)
    local_url = f"{base_url}{parsed_url.path}"

    try:
        res = requests.get(local_url, timeout=5)
        if res.status_code >= 400:
            errors.append((local_url, res.status_code))
            print(f"[{i+1}/{len(all_urls)}] Error {res.status_code}: {local_url}")
        else:
            pass # print(f"[{i+1}/{len(all_urls)}] OK {res.status_code}: {local_url}")
    except requests.exceptions.RequestException as e:
        errors.append((local_url, str(e)))
        print(f"[{i+1}/{len(all_urls)}] Failed to fetch: {local_url} - {e}")

if errors:
    print("\n--- Summary of 4xx/5xx Errors ---")
    for url, status in errors:
        print(f"{status}: {url}")
    sys.exit(1)
else:
    print("\nNo 4xx/5xx errors found!")
    sys.exit(0)
