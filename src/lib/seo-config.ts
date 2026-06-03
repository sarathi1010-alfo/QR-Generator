export interface SEOPageConfig {
  slug: string;
  title: string;
  name?: string;
  headline: string;
  description: string;
  category: "business" | "platform" | "format" | "core";
  primaryUse: "url" | "vcard" | "wifi" | "text" | "email" | "phone";
  features: string[];
  faqs: { q: string; a: string }[];
  color?: string;
}

export const coreUseCases: SEOPageConfig[] = [
  {
    slug: "url",
    title: "URL",
    headline: "URL QR Code Generator - Create Links",
    description: "Convert any website URL into a scannable QR code. Perfect for marketing, business cards, and sharing links instantly.",
    category: "core",
    primaryUse: "url",
    features: ["Instant link sharing", "Custom brand colors", "High-res SVG/PNG", "No registration required"],
    faqs: [
      { q: "Can I change the URL later?", a: "This tool generates static QR codes. To change the link later, you would need a dynamic QR service or use a URL shortener like Bitly." }
    ]
  },
  {
    slug: "text",
    title: "Text",
    headline: "Plain Text QR Code Generator",
    description: "Convert any text message or instructions into a QR code. Ideal for labels, notes, and offline messages.",
    category: "core",
    primaryUse: "text",
    features: ["Offline text sharing", "Secure & private", "No internet needed to scan", "Customizable design"],
    faqs: [
      { q: "How much text can I fit?", a: "A QR code can hold up to 4,296 alphanumeric characters, but we recommend keeping it shorter for easier scanning." }
    ]
  },
  {
    slug: "wifi",
    title: "WiFi",
    headline: "WiFi QR Code Generator - Scan to Connect",
    description: "Generate a scannable QR code for your WiFi network. Let guests join your network instantly without typing long passwords.",
    category: "core",
    primaryUse: "wifi",
    features: [
      "Secure password sharing",
      "WPA/WPA2/WEP support",
      "Hidden network compatibility",
      "Printable sign designs"
    ],
    faqs: [
      { q: "Is it safe to share my WiFi via QR code?", a: "Yes, it's safer than writing it on a piece of paper. The QR code only works within your WiFi range." },
      { q: "Do I need an app to scan WiFi QR codes?", a: "No, most modern iOS and Android cameras detect WiFi QR codes and offer to join the network automatically." }
    ]
  },
  {
    slug: "vcard",
    title: "VCard",
    headline: "Digital Business Card QR Code Generator",
    description: "Create a digital business card that people can save directly to their contacts with one scan. Professional, modern, and eco-friendly.",
    category: "core",
    primaryUse: "vcard",
    features: [
      "Instant contact saving",
      "No more paper waste",
      "Include URL and email",
      "Always up-to-date info"
    ],
    faqs: [
      { q: "What is a VCard?", a: "A VCard is a file format for electronic business cards. It contains your name, address, phone numbers, and email." }
    ]
  },
  {
    slug: "email",
    title: "Email",
    headline: "Email QR Code Generator",
    description: "Generate a QR code that opens a pre-filled email draft. Great for feedback, support, and direct communication.",
    category: "core",
    primaryUse: "email",
    features: ["Pre-filled subject lines", "Pre-filled body text", "One-tap email sending", "Customer support integration"],
    faqs: [
      { q: "Will this work with any email app?", a: "Yes, it uses the standard 'mailto:' protocol which is supported by all major email clients like Gmail, Outlook, and Apple Mail." }
    ]
  },
  {
    slug: "phone",
    title: "Phone",
    headline: "Phone Number QR Code Generator",
    description: "Create a QR code that prompts a phone call when scanned. Perfect for 'Call Now' buttons on flyers and advertisements.",
    category: "core",
    primaryUse: "phone",
    features: ["One-tap calling", "No misdialing", "Increase lead conversion", "Ideal for service businesses"],
    faqs: [
      { q: "Does the scan cost money?", a: "No, scanning is free. The user will be prompted to make a call, and standard carrier rates apply for the call itself." }
    ]
  }
];

export const businessUseCases: SEOPageConfig[] = [
  {
    slug: "restaurants",
    title: "Restaurants",
    headline: "Digital Menus for Restaurants",
    description: "Improve your dining experience and reduce printing costs with scannable QR code menus. Easy for customers, hygienic, and instantly updatable.",
    category: "business",
    primaryUse: "url",
    features: [
      "Contactless ordering from tables",
      "Always up-to-date digital menus",
      "Professional table tents & stickers",
      "Google Maps integration for reviews"
    ],
    faqs: [
      { q: "How do I create a QR code for my restaurant menu?", a: "Simply upload your menu to your website or a PDF host, then paste the URL into our generator. Customize the colors and download as an SVG for high-quality printing." },
      { q: "Can I track how many people scan my menu?", a: "V1 of QRBuild creates static codes. For tracking, we recommend using a URL shortener like Bitly before generating your QR code." }
    ]
  },
  {
    slug: "gyms",
    title: "Gyms & Studios",
    headline: "QR Codes for Gyms and Fitness Studios",
    description: "Streamline member check-ins, link to workout videos, or provide instant access to class schedules with durable QR codes.",
    category: "business",
    primaryUse: "url",
    features: [
      "Member check-in system",
      "Exercise tutorial videos on machines",
      "Up-to-the-minute class schedules",
      "Special membership offers"
    ],
    faqs: [
      { q: "Are QR codes durable enough for gym equipment?", a: "Yes, when printed on high-quality vinyl stickers, QR codes can withstand the sweat and cleaning typical of a gym environment." }
    ]
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    headline: "QR Codes for Real Estate Listings",
    description: "Make your property listings interactive. Let potential buyers view virtual tours, floor plans, and contact details with a single scan.",
    category: "business",
    primaryUse: "url",
    features: [
      "Virtual tour links on 'For Sale' signs",
      "Digital property feature sheets",
      "Instant WhatsApp contact with agents",
      "Lead capture on open house flyers"
    ],
    faqs: [
      { q: "Where should I place QR codes on real estate signs?", a: "Place them at eye level and ensure they are at least 10cm x 10cm so they can be scanned from a car or the sidewalk." }
    ]
  },
  {
    slug: "education",
    title: "Education",
    headline: "QR Codes for Teachers and Schools",
    description: "Make learning interactive. Use QR codes in classrooms to link to educational videos, online assignments, or parent newsletters.",
    category: "business",
    primaryUse: "url",
    features: [
      "Interactive homework links",
      "Parent-teacher communication",
      "Library book check-outs",
      "Campus maps and event info"
    ],
    faqs: [
      { q: "Are QR codes safe for children to use?", a: "Yes, as long as they link to curated, safe content. Teachers should always verify the links before distributing codes." }
    ]
  }
];

export const platformUseCases: SEOPageConfig[] = [
  {
    slug: "instagram",
    title: "Instagram",
    name: "Instagram",
    headline: "Custom QR Codes for Instagram Profiles",
    description: "Create a QR code for your Instagram profile, post, or reel. Make it easy for people to follow you in the physical world.",
    category: "platform",
    primaryUse: "url",
    color: "#E1306C",
    features: [
      "Direct follow links",
      "Promote specific Reels or Posts",
      "Instagram Story integration",
      "Branded colors to match your feed"
    ],
    faqs: [
      { q: "How do I get my Instagram profile link?", a: "Go to your profile in the Instagram app, tap 'Share Profile', and copy the link." }
    ]
  },
  {
    slug: "whatsapp",
    title: "WhatsApp",
    name: "WhatsApp",
    headline: "Instant WhatsApp Chat QR Codes",
    description: "Generate a QR code that starts a WhatsApp chat with you instantly. Perfect for customer support or personal networking.",
    category: "platform",
    primaryUse: "url",
    color: "#25D366",
    features: [
      "One-click customer support",
      "Pre-filled message options",
      "No need to type phone numbers",
      "Works on business cards and websites"
    ],
    faqs: [
      { q: "How do I create a WhatsApp link?", a: "Use the format https://wa.me/yourphonenumber (including country code) and paste it into our URL generator." }
    ]
  },
  {
    slug: "youtube",
    title: "YouTube",
    name: "YouTube",
    headline: "YouTube QR Code Generator",
    description: "Link directly to your YouTube channel or a specific video. Increase your views and subscribers with ease.",
    category: "platform",
    primaryUse: "url",
    color: "#FF0000",
    features: [
      "Increase video views",
      "Boost channel subscribers",
      "Share playlists instantly",
      "Perfect for video ads & posters"
    ],
    faqs: [
      { q: "Can I link to a specific timestamp in a video?", a: "Yes! Append '&t=1m20s' to your YouTube URL to start the video at a specific point." }
    ]
  },
  {
    slug: "google-reviews",
    title: "Google Reviews",
    name: "Google Reviews",
    headline: "Get More Google Reviews with QR Codes",
    description: "Make it incredibly easy for customers to leave feedback. A direct QR code link to your Google Review page can boost your local ranking.",
    category: "platform",
    primaryUse: "url",
    color: "#4285F4",
    features: [
      "Boost local SEO rankings",
      "Collect customer feedback faster",
      "Reduce friction for reviews",
      "Display on receipts and tables"
    ],
    faqs: [
      { q: "How do I find my Google Review link?", a: "Search for your business on Google, click 'Get more reviews', and copy the short link provided by Google." }
    ]
  }
];

export const formatUseCases: SEOPageConfig[] = [
  {
    slug: "pdf",
    title: "PDF to QR Code",
    headline: "Convert PDF Documents to QR Codes",
    description: "Share menus, ebooks, or instruction manuals easily. Host your PDF online and create a scannable link for instant access.",
    category: "format",
    primaryUse: "url",
    features: [
      "Digital instruction manuals",
      "E-book distribution",
      "Event programs and schedules",
      "Paperless report sharing"
    ],
    faqs: [
      { q: "Does QRBuild host my PDF?", a: "No, we are a generator tool. You should host your PDF on Google Drive, Dropbox, or your own website and then paste the link here." }
    ]
  }
];

export const allSEOConfigs = [...coreUseCases, ...businessUseCases, ...platformUseCases, ...formatUseCases];

export function getSEOConfigBySlug(slug: string) {
  return allSEOConfigs.find(c => c.slug === slug);
}
