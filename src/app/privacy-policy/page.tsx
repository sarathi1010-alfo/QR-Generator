import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QRBuild",
  description: "Privacy policy for QRBuild. Learn how we handle your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg mb-6">Last updated: January 2025</p>
        
        <p className="mb-6">
          At QRBuild, we take your privacy seriously. This Privacy Policy explains how we handle your data, what information we collect (if any), and your rights regarding your personal information. By using QRBuild, you agree to the practices described in this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide Directly</h3>
        <p>
          QRBuild is designed to minimize data collection. However, in certain situations, you may provide us with information:
        </p>
        <ul>
          <li><strong>Contact Form:</strong> When you contact us through our contact form, we collect your name, email address, and the message you send. This information is used solely to respond to your inquiry.</li>
          <li><strong>Email Communications:</strong> If you email us directly, we collect your email address and the content of your message.</li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <p>
          Like most websites, we may automatically collect certain technical information when you visit QRBuild:
        </p>
        <ul>
          <li><strong>Browser Information:</strong> Your browser type, version, and settings</li>
          <li><strong>Device Information:</strong> Device type, operating system, and screen resolution</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and interaction patterns</li>
          <li><strong>IP Address:</strong> Your IP address may be logged by our hosting provider for security and analytics purposes</li>
        </ul>
        <p>
          This information is typically collected through cookies and similar technologies, as described in Section 3 below.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve the QRBuild service</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To analyze usage patterns and optimize website performance</li>
          <li>To detect and prevent fraud, abuse, or security incidents</li>
          <li>To comply with legal obligations</li>
          <li>To display relevant advertisements through Google AdSense</li>
        </ul>

        <h2>3. Cookies and Third-Party Services</h2>
        <h3>3.1 Our Use of Cookies</h3>
        <p>
          QRBuild uses cookies for the following purposes:
        </p>
        <ul>
          <li><strong>Local Storage for QR History:</strong> We use your browser's Local Storage to save your recently generated QR codes for your convenience. This data never leaves your device and is only accessible to you. You can clear this data at any time through your browser settings.</li>
          <li><strong>Functional Cookies:</strong> Essential cookies that enable core website functionality</li>
        </ul>

        <h3>3.2 Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements on QRBuild. Google may use cookies and web beacons to serve ads based on your prior visits to our website and other websites across the internet. This helps Google provide ads that are more relevant to your interests.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads based on your visit to QRBuild and other sites. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">Google Ads Settings</a>.
        </p>
        <p>
          For more information about how Google uses your data, please visit <a href="https://policies.google.com/technologies/ads/" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">Google's Privacy & Terms page</a>.
        </p>

        <h3>3.3 Google Analytics (if applicable)</h3>
        <p>
          We may use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymous information about your use of our site, such as which pages you visit and how long you spend on each page. This helps us improve our service.
        </p>
        <p>
          You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h2>4. Data We Do NOT Collect</h2>
        <p>
          It's important to understand what information QRBuild does <strong>not</strong> collect:
        </p>
        <ul>
          <li><strong>QR Code Content:</strong> All QR codes are generated directly in your browser using client-side JavaScript. The data you enter (URLs, WiFi passwords, contact information, etc.) is never transmitted to our servers. We never see, store, or have access to the content of the QR codes you create.</li>
          <li><strong>Downloaded Files:</strong> When you download a generated QR code, this happens entirely on your device. We do not track or store which QR codes you download.</li>
          <li><strong>Personal Accounts:</strong> QRBuild does not require user accounts, so we do not collect usernames, passwords, or profile information.</li>
        </ul>

        <h2>5. How We Share Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website (e.g., hosting providers, email services). These providers are obligated to protect your information and use it only for the purposes we specify.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change via email or prominent notice on our website.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2>7. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Opt-Out:</strong> Opt out of marketing communications and certain types of data processing</li>
          <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information in Section 10 below. We will respond to your request within a reasonable timeframe.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          QRBuild is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          QRBuild is hosted on servers that may be located in different countries. By using our service, you acknowledge that your information may be transferred to and processed in countries other than your own. These countries may have data protection laws that differ from the laws of your country.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last updated" date at the top of this policy. Significant changes may be communicated via email or a prominent notice on our website.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
        </p>
        <ul>
          <li>Through our <a href="/contact" className="text-cta hover:underline">Contact page</a></li>
          <li>Via email at: <a href="mailto:alfotech.official@gmail.com" className="text-cta hover:underline">alfotech.official@gmail.com</a></li>
        </ul>
        <p>
          We are committed to resolving any privacy-related complaints and will work with you to address your concerns.
        </p>
      </div>
    </div>
  );
}
