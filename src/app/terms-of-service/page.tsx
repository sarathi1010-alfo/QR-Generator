import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | QRBuild",
  description: "Terms of service for QRBuild. Learn about the rules and guidelines for using our QR code generator.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg mb-6">Last updated: January 2025</p>
        
        <p className="mb-6">
          Welcome to QRBuild. These Terms of Service ("Terms") govern your access to and use of the QRBuild website and services (collectively, the "Service"). By accessing or using QRBuild, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use this Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, browsing, or using QRBuild, you acknowledge that you have read, understood, and agree to be bound by these Terms and to comply with all applicable laws and regulations. If you disagree with any part of these Terms, you must immediately discontinue your use of the Service.
        </p>
        <p>
          We reserve the right to modify these Terms at any time without prior notice. Your continued use of QRBuild after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically for updates.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          QRBuild is a free online tool that allows users to generate QR codes for various types of content including URLs, text, WiFi credentials, contact information (vCard), email addresses, SMS messages, and more. The Service is provided on an "as is" and "as available" basis without any warranties, express or implied.
        </p>
        <p>
          Key features of QRBuild include:
        </p>
        <ul>
          <li>Free QR code generation without registration</li>
          <li>Multiple QR code types and formats</li>
          <li>Customization options for colors and sizing</li>
          <li>Download capabilities in PNG format</li>
          <li>Client-side processing for enhanced privacy</li>
        </ul>

        <h2>3. Eligibility</h2>
        <p>
          To use QRBuild, you must:
        </p>
        <ul>
          <li>Be at least 13 years of age (or the minimum age required in your country to use online services)</li>
          <li>Have the legal capacity to enter into binding agreements</li>
          <li>Not be prohibited from using the Service under applicable law</li>
        </ul>
        <p>
          By using QRBuild, you represent and warrant that you meet these eligibility requirements.
        </p>

        <h2>4. User Responsibilities and Acceptable Use</h2>
        <h3>4.1 Your Content</h3>
        <p>
          You are solely responsible for all content you encode in QR codes generated through QRBuild ("User Content"). This includes URLs, text, contact information, and any other data you input into the Service.
        </p>
        <p>
          You agree that you will not create QR codes containing:
        </p>
        <ul>
          <li>Content that violates any applicable laws, regulations, or third-party rights</li>
          <li>Malicious code, viruses, malware, or harmful scripts</li>
          <li>Content that infringes intellectual property rights</li>
          <li>Defamatory, obscene, abusive, or harassing material</li>
          <li>Content that promotes illegal activities or violence</li>
          <li>Spam, phishing attempts, or deceptive practices</li>
          <li>Content that violates privacy rights or contains personal information of others without consent</li>
        </ul>

        <h3>4.2 Prohibited Activities</h3>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use QRBuild for any illegal purpose or in violation of any local, state, national, or international law</li>
          <li>Attempt to gain unauthorized access to any part of the Service or its systems</li>
          <li>Use automated means (bots, scrapers, crawlers) to access the Service without permission</li>
          <li>Interfere with or disrupt the integrity or performance of the Service</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the Service</li>
          <li>Remove any copyright, trademark, or other proprietary notices</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Use the Service to transmit spam or unsolicited communications</li>
        </ul>

        <h2>5. Intellectual Property Rights</h2>
        <h3>5.1 Our Property</h3>
        <p>
          QRBuild and its original content, features, functionality, design, and branding are owned by QRBuild and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. The QRBuild name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of QRBuild.
        </p>
        <p>
          Nothing in these Terms grants you any right to use any trademarks, service marks, logos, domain names, or other distinctive brand features owned by QRBuild without our prior written consent.
        </p>

        <h3>5.2 Your Content</h3>
        <p>
          You retain all ownership rights to the content you create using QRBuild. However, by using the Service, you grant QRBuild a limited, non-exclusive, royalty-free license to display and process your content solely for the purpose of providing the Service.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          QRBUILD IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          WE DO NOT WARRANT THAT:
        </p>
        <ul>
          <li>The Service will be uninterrupted, secure, or error-free</li>
          <li>Defects will be corrected</li>
          <li>The Service or its servers are free of viruses or harmful components</li>
          <li>Generated QR codes will be scannable by all devices or QR code readers</li>
          <li>The Service will meet your specific requirements or expectations</li>
          <li>Any content or information obtained through the Service will be accurate or reliable</li>
        </ul>
        <p>
          You assume full responsibility and risk for your use of QRBuild and any QR codes generated through the Service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, QRBUILD, ITS OWNERS, EMPLOYEES, DIRECTORS, OFFICERS, AGENTS, PARTNERS, AFFILIATES, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF THE SERVICE, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY.
        </p>
        <p>
          SPECIFICALLY, QRBUILD SHALL NOT BE LIABLE FOR:
        </p>
        <ul>
          <li>Any damages resulting from scanning QR codes generated through the Service</li>
          <li>Loss or corruption of data</li>
          <li>Unauthorized access to or alteration of your transmissions or data</li>
          <li>Statements or conduct of any third party on or through the Service</li>
          <li>Any content encoded in QR codes, including its accuracy, legality, or appropriateness</li>
          <li>Any reliance on QR codes for critical applications without prior testing</li>
          <li>Business interruption, lost profits, or commercial damage</li>
        </ul>
        <p>
          OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM YOUR USE OF QRBUILD SHALL NOT EXCEED $100 USD.
        </p>

        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless QRBuild and its owners, employees, directors, officers, agents, partners, affiliates, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your violation of these Terms</li>
          <li>Your use of the Service</li>
          <li>Your User Content</li>
          <li>Your violation of any third-party right, including intellectual property or privacy rights</li>
          <li>Your violation of any applicable law or regulation</li>
        </ul>

        <h2>9. Privacy</h2>
        <p>
          Your use of QRBuild is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using QRBuild, you consent to the collection and use of information as described in our Privacy Policy.
        </p>

        <h2>10. Third-Party Links and Services</h2>
        <p>
          QRBuild may contain links to third-party websites or services that are not owned or controlled by QRBuild. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>
        <p>
          You acknowledge and agree that QRBuild shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your use of any such content, goods, or services available on or through any such websites or services.
        </p>

        <h2>11. Termination</h2>
        <p>
          We may terminate or suspend your access to QRBuild immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
        </p>
        <p>
          All provisions of these Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>

        <h2>12. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where QRBuild operates, without regard to its conflict of law provisions.
        </p>
        <p>
          Any disputes arising from or relating to these Terms or the Service shall be resolved exclusively in the courts located in the jurisdiction where QRBuild operates. You agree to submit to the personal jurisdiction of such courts.
        </p>

        <h2>13. Dispute Resolution</h2>
        <p>
          Before filing a lawsuit, you agree to first contact us at <a href="/contact" className="text-cta hover:underline">our Contact page</a> and make a good faith effort to resolve the dispute informally. We will respond within a reasonable timeframe and work with you to find a mutually acceptable solution.
        </p>

        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
        </p>

        <h2>15. Waiver</h2>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, we will replace such provision with one that is valid and enforceable and that comes closest to expressing the intention of such provision, and the remainder of these Terms will continue in full force and effect.
        </p>

        <h2>16. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy and any other legal notices published on QRBuild, constitute the sole and entire agreement between you and QRBuild regarding the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Service.
        </p>

        <h2>17. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <ul>
          <li>Through our <a href="/contact" className="text-cta hover:underline">Contact page</a></li>
          <li>Via email at: <a href="mailto:alfotech.official@gmail.com" className="text-cta hover:underline">alfotech.official@gmail.com</a></li>
        </ul>
        <p>
          We will respond to inquiries regarding these Terms within a reasonable timeframe.
        </p>
      </div>
    </div>
  );
}
