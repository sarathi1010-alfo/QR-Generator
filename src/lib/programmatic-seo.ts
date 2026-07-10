// Tier 2 Programmatic SEO Configuration
import { SEOPageConfig } from "./seo-config";

export const longTailUseCases: SEOPageConfig[] = [
  {
    slug: "restaurant-menu",
    title: "Restaurant Menu",
    headline: "QR Codes for Restaurant Menus - Digital & Contactless",
    description: "Create a digital QR code menu for your restaurant. Our high-quality generator ensures your guests can scan easily from any table. Touch-free, hygienic, and instantly updatable to save on printing costs.",
    category: "business",
    primaryUse: "url",
    features: [
      "Contactless dining experience for improved hygiene",
      "Update menu items instantly without reprinting",
      "Reduce significant printing and paper costs",
      "High-quality SVG format perfect for table tents",
      "Works on all modern iOS and Android devices"
    ],
    faqs: [
      { q: "How do I create a QR code for my restaurant menu?", a: "To create a menu QR code, first upload your PDF menu to a hosting service like your own website, Google Drive, or Dropbox. Copy the public sharing link and paste it into our URL generator. Customize the colors to match your restaurant's branding, then download the SVG file for high-quality printing on table tents or stickers." },
      { q: "Is a QR code menu safe for my customers?", a: "Yes, our generator provides static QR codes with a privacy-first approach. Unlike other generators, we do not inject tracking cookies or use intermediate redirects that could compromise your customers' privacy or slow down the loading of your menu." },
      { q: "Can I customize the look of the menu QR code?", a: "Absolutely! You can choose foreground and background colors that match your restaurant's brand identity. We recommend using a dark color for the dots and a light color for the background to ensure maximum scannability even in dimly lit dining environments." },
      { q: "What size should I print my restaurant QR codes?", a: "For table tents and small placards, we recommend a minimum size of 3cm x 3cm (approx. 1.2 inches). If the codes are placed further away from the customer, such as on a window display, the size should be increased proportionally following the 10:1 distance-to-size ratio." }
    ]
  },
  {
    slug: "business-card",
    title: "Business Card",
    headline: "Professional QR Codes for Business Cards",
    description: "Modernize your professional networking with a custom QR code on your business card. Link directly to your digital vCard, portfolio, or LinkedIn profile to ensure your contacts always have your latest info.",
    category: "business",
    primaryUse: "url",
    features: [
      "Instant contact saving directly to smartphones",
      "Link to digital portfolios or personal websites",
      "Maintain a clean, modern card design",
      "Ensure contact info is always up-to-date",
      "Eco-friendly alternative to traditional cards"
    ],
    faqs: [
      { q: "What should my business card QR code link to?", a: "The best practice is linking to a digital vCard (VCF file) which allows users to save your contact info with one tap, or a professional landing page like your LinkedIn profile or a personal portfolio website." },
      { q: "What size should the QR code be on a business card?", a: "We recommend a minimum size of 2cm x 2cm (0.8 inches) to ensure most smartphones can easily scan it. Since business cards are held close to the eyes, this size is generally sufficient for reliable scanning." },
      { q: "Can I put a logo in the center of the QR code?", a: "While our current tool focuses on clean, high-contrast designs for maximum reliability, you can use custom colors to reflect your personal brand. Keeping the design simple often results in much faster scan times across a wider range of devices." },
      { q: "Do these QR codes expire on my business cards?", a: "No, our static QR codes do not have an expiration date. As long as the destination URL or contact information remains valid, your business card QR code will continue to work indefinitely." }
    ]
  },
  {
    slug: "product-packaging",
    title: "Product Packaging",
    headline: "QR Codes for Product Packaging & Retail",
    description: "Enhance your product packaging with scannable QR codes. Bridge the gap between your physical product and digital resources like instruction manuals, warranty registrations, or reordering pages.",
    category: "business",
    primaryUse: "url",
    features: [
      "Provide digital instruction manuals and guides",
      "Streamline warranty registration for customers",
      "Showcase product transparency and sourcing info",
      "Enable easy reordering with direct links",
      "Reduce packaging waste by moving info online"
    ],
    faqs: [
      { q: "How do QR codes help retail products?", a: "They allow you to provide virtually infinite information on a finite physical package. You can link to video tutorials, detailed assembly instructions, or even customer support chat, significantly enhancing the post-purchase experience." },
      { q: "Are static QR codes good for permanent packaging?", a: "Yes, static QR codes are excellent for packaging as long as the destination URL you provide is a permanent link on your own domain that you control. This ensures the code remains functional for the entire life of the product." },
      { q: "What error correction level should I use for packaging?", a: "For packaging that might get slightly damaged, creased, or scuffed during shipping, we highly recommend using Level H (High) error correction. This ensures the code remains scannable even if up to 30% of the data is obscured." },
      { q: "Where is the best place to put a QR code on a box?", a: "Place the code on a flat surface away from folds or seams. Ensure there is a 'quiet zone' (white space) of at least 4 modules around the code to help the scanner isolate it from surrounding graphics or text." }
    ]
  },
  {
    slug: "event-tickets",
    title: "Event Tickets",
    headline: "QR Codes for Event Tickets & Fast Check-In",
    description: "Generate high-contrast QR codes for seamless event management. Use them for secure digital check-ins, linking to event schedules, venue maps, or exclusive attendee content.",
    category: "business",
    primaryUse: "url",
    features: [
      "Enable seamless and fast digital check-in",
      "Link directly to live event schedules",
      "Provide instant venue map and navigation access",
      "Reduce paper waste and printing costs",
      "Enhance event security with unique codes"
    ],
    faqs: [
      { q: "How do I use QR codes for event check-in?", a: "You can generate a unique URL for each attendee's ticket or link to a central event portal where attendees can access their specific ticket information. At the door, staff can use any standard smartphone to scan the code and verify the entry." },
      { q: "Can the QR code be scanned from a phone screen?", a: "Yes, our high-contrast QR codes are specifically designed to be easily scannable from both high-quality printed paper and modern mobile screens, even at low brightness settings." },
      { q: "Do I need special hardware to scan these codes?", a: "No, one of the greatest advantages of QR codes is that they can be read by any modern smartphone camera or standard 2D barcode scanner. This makes it easy for event staff to use their own devices for check-in." },
      { q: "Can I use QR codes on event posters?", a: "Absolutely! Adding a QR code to promotional posters allows potential attendees to scan and purchase tickets instantly. For posters, ensure the code is large enough to be scanned from a few meters away." }
    ]
  },
  {
    slug: "wifi-login",
    title: "WiFi Login",
    headline: "WiFi QR Codes - Scan to Connect Instantly",
    description: "Eliminate the frustration of sharing complex WiFi passwords. Generate a scannable QR code that allows your guests to connect to your network instantly without typing a single character.",
    category: "business",
    primaryUse: "wifi",
    features: [
      "Provide instant, friction-free network connection",
      "Eliminate errors from typing complex passwords",
      "Privacy-first generation - no data stored",
      "Fully compatible with modern iOS and Android",
      "Perfect for cafes, hotels, and waiting rooms"
    ],
    faqs: [
      { q: "Is it safe to share my WiFi via a QR code?", a: "Yes, the QR code simply encodes your network's SSID and password in a standardized format. It is just as safe as giving the password on a piece of paper, but much more convenient for your guests." },
      { q: "Does the WiFi QR code work on all modern phones?", a: "Yes, both modern iOS (iPhone) and Android devices have native support for WiFi QR codes in their built-in camera apps. When scanned, the device will automatically prompt the user to join the network." },
      { q: "How do I create a WiFi QR code for my business?", a: "Select the 'WiFi' tab in our generator, enter your Network Name (SSID) and Password, and choose your encryption type (most common is WPA/WPA2). You can then download and print the code for your guests." },
      { q: "What happens if I change my WiFi password?", a: "Since these are static QR codes, if you change your network password or SSID, you will need to generate and print a new QR code to reflect the updated credentials." }
    ]
  }
];

export const downloadFormats: SEOPageConfig[] = [];
export const learnTopics: SEOPageConfig[] = [];
export const industryUseCases: SEOPageConfig[] = [];
export const useCasesExtra: SEOPageConfig[] = [];
export const qrTypesExtra: SEOPageConfig[] = [];
