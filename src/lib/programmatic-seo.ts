// Tier 2 Programmatic SEO Configuration
import { SEOPageConfig } from "./seo-config";

export const longTailUseCases: SEOPageConfig[] = [
  {
    slug: "software-docs",
    title: "Software Documentation",
    headline: "QR Codes for Instant API & Software Docs",
    description: "Generate QR codes linking directly to your software documentation or developer portals. Perfect for conferences and developer meetups.",
    category: "business",
    primaryUse: "url",
    features: [
      "Instant access to API keys & docs",
      "Streamline developer onboarding",
      "Include on technical whitepapers",
      "Perfect for developer relations teams"
    ],
    faqs: [
      { q: "How do I link a QR code to my API documentation?", a: "Copy the public URL of your developer portal or specific API endpoint and paste it into our URL QR code generator." },
      { q: "Are QR codes useful at developer conferences?", a: "Yes, developers appreciate quickly scanning a code from a presentation slide to access the code repository or technical documentation instantly." },
      { q: "Can I track scans on my software documentation QR codes?", a: "To track scans, we recommend using a UTM-tagged URL from your analytics provider before generating the static QR code on our platform." }
    ]
  },
  {
    slug: "beta-testing",
    title: "Beta Testing Invites",
    headline: "QR Codes for Exclusive Beta Testing Access",
    description: "Create scannable invites for your SaaS beta programs. Distribute physical cards at events that link securely to your opt-in page.",
    category: "business",
    primaryUse: "url",
    features: [
      "Create exclusive physical invites",
      "Seamless mobile opt-in flows",
      "Reduce friction for early adopters",
      "Bridge offline events to online programs"
    ],
    faqs: [
      { q: "How do I distribute beta testing QR codes?", a: "Print the QR codes on high-quality postcards, event badges, or direct mailers, and include a clear call-to-action like 'Scan to Join the Beta'." },
      { q: "Can I restrict access via the QR code?", a: "The QR code itself is just a link. To restrict access, ensure the destination URL requires an invite code or uses a gated signup form." },
      { q: "Are static QR codes good for beta testing?", a: "Yes, as long as your beta landing page URL remains constant, a static QR code is perfectly suited for long-running beta campaigns." }
    ]
  },
  {
    slug: "customer-success",
    title: "Customer Success Portals",
    headline: "QR Codes for Instant Customer Support",
    description: "Link directly to your helpdesk, knowledge base, or ticketing system. Provide frictionless support to your users anywhere.",
    category: "business",
    primaryUse: "url",
    features: [
      "Frictionless access to support",
      "Link to live chat interfaces",
      "Include on invoices & physical kits",
      "Reduce customer support response times"
    ],
    faqs: [
      { q: "Where should I place a customer success QR code?", a: "Include the QR code on onboarding materials, welcome letters, physical product packaging, or monthly invoices." },
      { q: "Can the QR code link to a specific help article?", a: "Absolutely. You can generate a QR code for the specific URL of a knowledge base article detailing the most common setup issues." },
      { q: "Does the QR code work on all smartphones?", a: "Yes, all modern iOS and Android devices natively support scanning URL QR codes directly from their built-in camera apps." }
    ]
  },
  {
    slug: "feature-requests",
    title: "Feature Request Boards",
    headline: "QR Codes for Product Feedback & Ideas",
    description: "Make it easy for users to submit feature requests. A direct QR code link to your feedback board encourages continuous product improvement.",
    category: "business",
    primaryUse: "url",
    features: [
      "Capture feedback at live events",
      "Link to public roadmaps",
      "Encourage community engagement",
      "Easy access to upvoting platforms"
    ],
    faqs: [
      { q: "Why use a QR code for a feature request board?", a: "It allows you to capture spontaneous feedback from users during live demos, presentations, or trade shows without them needing to search for the link." },
      { q: "Can I link to a specific feature idea?", a: "Yes, if your feedback platform supports direct linking to specific requests or upvote pages, you can generate a QR code for that exact URL." },
      { q: "Is the generated QR code permanent?", a: "Yes, we provide static QR codes that never expire, so your feature request links will continue to work indefinitely." }
    ]
  },
  {
    slug: "api-keys",
    title: "API Key Portals",
    headline: "QR Codes for Secure Developer Portals",
    description: "Provide quick routing to your developer dashboard where users can generate and manage their API keys.",
    category: "business",
    primaryUse: "url",
    features: [
      "Quick access to developer settings",
      "Streamline the developer journey",
      "Ideal for hackathons and tech events",
      "High-contrast codes for easy scanning"
    ],
    faqs: [
      { q: "Should I encode an actual API key in a QR code?", a: "No, for security reasons, you should never encode sensitive API keys directly in a QR code. Instead, link to the secure portal where users can log in and view them." },
      { q: "How do I use this for a hackathon?", a: "Display the QR code prominently on sponsor tables or presentation screens so hackers can instantly navigate to your platform's API registration page." },
      { q: "What error correction level should I use for display screens?", a: "For digital screens, standard Level M or Q is usually sufficient, but choosing Level H ensures scannability even from angled viewing positions." }
    ]
  }
,

  {
    slug: "freelance-portfolio",
    title: "Freelance Portfolio",
    headline: "QR Codes for Freelance Portfolios",
    description: "Instantly share your creative portfolio with prospective clients. Generate a high-quality QR code that links directly to your digital work.",
    category: "business",
    primaryUse: "url",
    features: [
      "Direct links to digital portfolios",
      "Easy integration on business cards",
      "High-contrast vector downloads",
      "No expiration on static links",
      "Privacy-first generation"
    ],
    faqs: [
      { q: "How can freelancers use QR codes?", a: "Freelancers can place QR codes on resumes, business cards, or temporary physical installations to instantly route prospects to their digital portfolios or Behance profiles." },
      { q: "Is SVG format better for my resume?", a: "Yes, downloading your QR code in SVG format ensures it remains perfectly crisp when printed on your resume, regardless of scale." },
      { q: "Do these portfolio links expire?", a: "No, our static QR codes do not expire. As long as your portfolio website remains active, the QR code will function perfectly." }
    ]
  },
  {
    slug: "law-office",
    title: "Law Office",
    headline: "Secure QR Codes for Law Firms",
    description: "Streamline client intake and provide secure access to legal resources with professional QR codes tailored for law offices.",
    category: "business",
    primaryUse: "url",
    features: [
      "Secure links to client portals",
      "Automated consultation scheduling",
      "Digital vCards for attorneys",
      "Link to public legal resources",
      "Clean, professional aesthetic"
    ],
    faqs: [
      { q: "Are QR codes safe for law firms?", a: "Yes, static QR codes simply direct users to a URL. As long as the destination URL (e.g., a secure client portal) is encrypted and safe, the QR code itself is secure." },
      { q: "Can I use QR codes for client scheduling?", a: "Absolutely. Law firms frequently use QR codes on printed brochures to direct prospective clients to an automated scheduling calendar for initial consultations." },
      { q: "What is the best color for a legal QR code?", a: "For maximum professionalism and scannability, we recommend standard black dots on a white background, ensuring a high contrast ratio." }
    ]
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    headline: "QR Codes for Plumbers & Contractors",
    description: "Make it easy for clients to rebook or leave reviews. Generate durable QR codes for invoices, service stickers, and business cards.",
    category: "business",
    primaryUse: "url",
    features: [
      "Stickers for water heaters/boilers",
      "Direct links to Google Reviews",
      "Instant emergency call routing",
      "Digital invoice payments",
      "Durable high-error correction"
    ],
    faqs: [
      { q: "Where should plumbers place QR codes?", a: "Plumbers should place QR code stickers directly on serviced equipment (like boilers) so customers can easily scan to request maintenance or emergency repairs." },
      { q: "How do I get more Google Reviews?", a: "Generate a QR code that links directly to your Google My Business review page, and print it on the bottom of every customer invoice." },
      { q: "Can a QR code start a phone call?", a: "Yes, by selecting the 'Phone' option in our generator, you can create a code that automatically dials your dispatch number when scanned." }
    ]
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    headline: "QR Codes for Dental Clinics",
    description: "Enhance the patient experience with QR codes for contactless check-ins, post-op care instructions, and appointment scheduling.",
    category: "business",
    primaryUse: "url",
    features: [
      "Contactless patient check-in",
      "Digital post-op care videos",
      "Appointment booking links",
      "Patient portal access",
      "Review generation on checkout"
    ],
    faqs: [
      { q: "How can dentists use QR codes in the waiting room?", a: "Dentists can display QR codes in waiting areas to allow patients to complete digital intake forms or connect to the clinic's guest WiFi instantly." },
      { q: "Can I link to post-op care videos?", a: "Yes, placing a QR code on a post-op care sheet that links to an instructional YouTube video dramatically improves patient compliance and understanding." },
      { q: "Are QR codes HIPAA compliant?", a: "The QR code is just a link. As long as it directs the patient to a HIPAA-compliant portal or secure form, the process remains compliant." }
    ]
  },
  {
    slug: "accounting-firm",
    title: "Accounting Firm",
    headline: "QR Codes for CPAs & Accounting Firms",
    description: "Provide clients with secure access to tax portals and document upload centers using professional, reliable QR codes.",
    category: "business",
    primaryUse: "url",
    features: [
      "Links to secure tax portals",
      "VCF digital business cards",
      "Tax season checklist downloads",
      "Client onboarding forms",
      "Professional, track-free generation"
    ],
    faqs: [
      { q: "Why should CPAs use QR codes?", a: "CPAs can use QR codes on tax organizers or physical mailers to securely route clients to document upload portals, saving time and reducing email clutter." },
      { q: "Do your QR codes track my clients?", a: "No. QRBuild provides privacy-first, static QR codes. We do not inject tracking cookies or use intermediate redirects, ensuring your clients' privacy." },
      { q: "How do I share a digital tax checklist?", a: "Host your PDF checklist on a secure server or cloud drive, and paste the sharing link into our URL generator to create a scannable access point." }
    ]
  }
,
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
      { q: "What happens if I change my WiFi password?", a: "Since these are static QR codes, if you change your network password or SSID, you will need to generate and print a new QR code to reflect the updated credentials." }    ]
  },
  {
    slug: "eco-friendly-packaging",
    title: "Eco-Friendly Packaging",
    headline: "QR Codes for Sustainable & Eco-Friendly Packaging",
    description: "Enhance your eco-friendly product packaging with a QR code. Share recycling instructions, carbon footprint data, and supply chain transparency without wasting extra paper.",
    category: "business",
    primaryUse: "url",
    features: [
      "Provide detailed recycling and composting instructions",
      "Share transparent supply chain and sourcing data",
      "Reduce the physical size of printed packaging labels",
      "Update sustainability metrics without reprinting boxes",
      "Demonstrate commitment to the environment"
    ],
    faqs: [
      { q: "How do QR codes make packaging more eco-friendly?", a: "By moving extensive product information, manuals, and sustainability reports online via a QR code, you can significantly reduce the size of your physical packaging and the amount of ink required, saving resources." },
      { q: "Can I print a QR code on biodegradable materials?", a: "Yes. QR codes can be printed on biodegradable paper, recycled cardboard, and even directly onto certain organic materials using soy-based inks, provided there is enough contrast for the scanner to read the code." },
      { q: "What should an eco-friendly packaging QR code link to?", a: "It should ideally link to specific information about that product's environmental impact, detailed disposal/recycling instructions, or your company's broader sustainability initiatives." }
    ]
  },
  {
    slug: "carbon-offset-certificates",
    title: "Carbon Offset Certificates",
    headline: "Verify Carbon Offsets instantly with QR Codes",
    description: "Provide transparent, instant verification of carbon offset certificates using QR codes. Allow stakeholders to scan and view real-time data on your environmental contributions.",
    category: "business",
    primaryUse: "url",
    features: [
      "Instant verification of carbon offset claims",
      "Link directly to verified third-party audit reports",
      "Showcase real-time environmental impact data",
      "Enhance corporate transparency and trust",
      "Easy integration into digital and physical reports"
    ],
    faqs: [
      { q: "How can QR codes prove carbon offsets?", a: "A QR code can link directly to a verified, immutable ledger or a third-party auditor's report detailing the exact amount of carbon offset, the project supported, and the date of verification." },
      { q: "Where should I display my carbon offset QR code?", a: "Display it on your company's 'About Us' page, annual reports, product packaging, and corporate marketing materials to visibly demonstrate your commitment to net-zero goals." },
      { q: "Is the data linked by the QR code updatable?", a: "If you link the QR code to a dynamic URL (like a specific page on your website that you update regularly), you can continually provide the most recent carbon offset metrics without changing the printed code." }
    ]
  },
  {
    slug: "sustainable-fashion-tags",
    title: "Sustainable Fashion Tags",
    headline: "QR Codes for Ethical & Sustainable Fashion",
    description: "Give your sustainable fashion brand an edge. Use QR codes on clothing tags to share the garment's ethical journey, from raw material sourcing to fair trade manufacturing.",
    category: "business",
    primaryUse: "url",
    features: [
      "Trace the garment's journey from farm to closet",
      "Highlight fair trade and ethical manufacturing practices",
      "Provide care instructions to extend garment life",
      "Connect buyers with the artisans who made their clothes",
      "Replace bulky, multi-page paper clothing tags"
    ],
    faqs: [
      { q: "Why use QR codes on sustainable clothing tags?", a: "Sustainable fashion relies on transparency. A QR code allows you to share the complete story of a garment—materials, labor, and transport—which is too much information to fit on a traditional small paper tag." },
      { q: "Can a QR code survive being washed?", a: "While standard printed paper tags won't survive the wash, QR codes can be printed on durable fabric care labels, embroidered, or even laser-engraved onto buttons to remain scannable for the life of the garment." },
      { q: "How does this help reduce fashion waste?", a: "By providing detailed, easily accessible care and repair instructions via the QR code, brands can help consumers extend the lifespan of their clothing, directly combating the fast fashion waste cycle." }
    ]
  },
  {
    slug: "zero-waste-events",
    title: "Zero-Waste Events",
    headline: "QR Codes for Zero-Waste Event Management",
    description: "Eliminate paper waste at your next conference or event. Use QR codes for digital ticketing, paperless schedules, and virtual exhibitor booths to achieve your zero-waste goals.",
    category: "business",
    primaryUse: "url",
    features: [
      "Replace printed tickets with digital scan-to-enter codes",
      "Provide digital venue maps and real-time schedules",
      "Allow exhibitors to share digital brochures instantly",
      "Dramatically reduce post-event paper and plastic waste",
      "Track attendee engagement digitally"
    ],
    faqs: [
      { q: "How do QR codes enable zero-waste events?", a: "They act as digital gateways. Instead of printing thousands of schedules, maps, and promotional flyers that get thrown away, a single QR code displayed on a screen can provide all attendees with digital access to that same information." },
      { q: "Can exhibitors use QR codes instead of business cards?", a: "Absolutely. Exhibitors can display a vCard QR code at their booth. Attendees simply scan the code to instantly save the contact information directly to their phones, eliminating the need for paper business cards." },
      { q: "Do attendees need a special app to scan event QR codes?", a: "No. The vast majority of modern smartphones have built-in QR code scanners within their native camera apps, making digital access frictionless for almost all attendees." }
    ]
  },
  {
    slug: "green-energy-bills",
    title: "Green Energy Bills",
    headline: "Paperless Green Energy Billing with QR Codes",
    description: "Encourage customers to switch to paperless billing and view their green energy usage. Use QR codes on statements to link to digital dashboards and energy-saving tips.",
    category: "business",
    primaryUse: "url",
    features: [
      "Frictionless transition to paperless digital billing",
      "Instant access to detailed energy consumption dashboards",
      "Share personalized tips for reducing energy usage",
      "Demonstrate the impact of renewable energy choices",
      "Lower operational costs for utility providers"
    ],
    faqs: [
      { q: "How can QR codes encourage paperless billing?", a: "By placing a QR code on a physical bill with a clear call-to-action (e.g., 'Scan to go paperless'), utility companies make it incredibly easy for customers to opt-in to digital statements with just one tap." },
      { q: "Can a QR code link to a secure billing portal?", a: "Yes. The QR code can route the user to the login page of their secure billing portal. The QR code itself doesn't contain sensitive data, it merely provides a convenient shortcut to the secure platform." },
      { q: "How does this benefit green energy consumers?", a: "Beyond reducing paper waste, the QR code can link consumers directly to interactive charts showing exactly how much of their energy came from renewable sources (solar, wind) that month, reinforcing their eco-friendly choices." }
    ]
  }
];

export const downloadFormats: SEOPageConfig[] = [];
export const learnTopics: SEOPageConfig[] = [];
export const industryUseCases: SEOPageConfig[] = [];
export const useCasesExtra: SEOPageConfig[] = [];
export const qrTypesExtra: SEOPageConfig[] = [];
