import { SEOPageConfig } from "./seo-config";

export const longTailUseCases: SEOPageConfig[] = [
  {
    slug: "restaurant-menu",
    title: "Restaurant Menu",
    headline: "QR Codes for Restaurant Menus",
    description: "Create a digital QR code menu for your restaurant. Easy for customers to scan, touch-free, and instantly updatable.",
    category: "business",
    primaryUse: "url",
    features: [
      "Contactless dining experience",
      "Update menu items instantly",
      "Reduce printing costs",
      "High-quality SVG format for table tents"
    ],
    faqs: [
      { q: "How do I create a QR code for my restaurant menu?", a: "Upload your PDF menu to your website or Google Drive, then paste the public link into our generator. Download the QR code and print it." },
      { q: "Is a QR code menu safe?", a: "Yes, our generator provides static QR codes with a privacy-first approach. No tracking cookies are injected by our platform." },
      { q: "Can I customize the QR code?", a: "Yes! You can choose colors that match your restaurant's branding." }
    ]
  },
  {
    slug: "business-card",
    title: "Business Card",
    headline: "QR Codes for Business Cards",
    description: "Modernize your networking with a QR code on your business card. Link directly to your digital vCard, portfolio, or LinkedIn profile.",
    category: "business",
    primaryUse: "url",
    features: [
      "Instant contact saving",
      "Link to digital portfolios",
      "Clean, modern card design",
      "Never run out of space for contact info"
    ],
    faqs: [
      { q: "What should my business card QR code link to?", a: "The best practice is linking to a Linktree, a digital vCard (vcf file), or your LinkedIn profile." },
      { q: "What size should the QR code be on a business card?", a: "We recommend a minimum size of 2cm x 2cm to ensure most smartphones can easily scan it." },
      { q: "Can I put a logo in the center?", a: "Currently, our tool supports custom colors. Logo support is coming soon, but keeping the code simple often improves scannability." }
    ]
  },
  {
    slug: "product-packaging",
    title: "Product Packaging",
    headline: "QR Codes for Product Packaging",
    description: "Enhance your product packaging with QR codes. Link customers to instruction manuals, warranty registration, or reordering pages.",
    category: "business",
    primaryUse: "url",
    features: [
      "Digital instruction manuals",
      "Warranty registration forms",
      "Product transparency and sourcing info",
      "Easy reordering links"
    ],
    faqs: [
      { q: "How do QR codes help retail products?", a: "They bridge the gap between physical goods and digital resources, allowing you to provide infinite information on a finite package." },
      { q: "Are static QR codes good for packaging?", a: "Yes, as long as the destination URL you provide is a stable, permanent redirect on your own domain." },
      { q: "What error correction level should I use?", a: "For packaging that might get slightly damaged or creased, we highly recommend using Level H (High) error correction." }
    ]
  },
  {
    slug: "event-tickets",
    title: "Event Tickets",
    headline: "QR Codes for Event Tickets",
    description: "Generate QR codes for fast, secure event check-ins. Link directly to digital tickets, event schedules, or venue maps.",
    category: "business",
    primaryUse: "url",
    features: [
      "Seamless digital check-in",
      "Link to live event schedules",
      "Venue map access",
      "Reduced paper waste"
    ],
    faqs: [
      { q: "How do I use QR codes for event check-in?", a: "Generate a unique URL for each ticket or link to a central event portal where attendees can access their tickets." },
      { q: "Can the QR code be scanned from a phone screen?", a: "Yes, our high-contrast QR codes are easily scannable from both printed paper and mobile screens." },
      { q: "Do I need special hardware to scan them?", a: "No, any modern smartphone camera or standard barcode scanner can read our standard QR codes." }
    ]
  },
  {
    slug: "wifi-login",
    title: "WiFi Login",
    headline: "QR Codes for WiFi Login",
    description: "Allow guests to instantly connect to your WiFi network without typing long passwords. Perfect for cafes, hotels, and waiting rooms.",
    category: "business",
    primaryUse: "wifi",
    features: [
      "Instant network connection",
      "No typing complex passwords",
      "Secure and private",
      "Works on iOS and Android"
    ],
    faqs: [
      { q: "Is it safe to share WiFi via QR code?", a: "Yes, the QR code simply encodes the SSID and password. It is just as safe as handing them the password on a piece of paper." },
      { q: "Does the WiFi QR code work on all phones?", a: "Yes, both modern iOS and Android camera apps natively support reading WiFi QR codes and will prompt the user to connect." },
      { q: "How do I create a WiFi QR code?", a: "Select the 'WiFi' tab in our generator, enter your Network Name (SSID) and Password, and choose your encryption type (usually WPA)." }
    ]
  }
];

export const downloadFormats: SEOPageConfig[] = [];
export const learnTopics: SEOPageConfig[] = [];
export const industryUseCases: SEOPageConfig[] = [];
export const useCasesExtra: SEOPageConfig[] = [];
export const qrTypesExtra: SEOPageConfig[] = [];
