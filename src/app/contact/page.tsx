import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact the QRBuild Team - Support & Feature Requests",
  description: "Get in touch with the QRBuild team for support, feature requests, or general inquiries about our free, fast, and reliable QR code generator tool.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-muted text-lg text-center mb-12">
        Have a question, suggestion, or need support? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm mb-12">
        <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted mb-6">
          We welcome all types of inquiries including technical support, feature requests, partnership opportunities, bug reports, and general feedback about QRBuild.
        </p>
        
        <div className="mb-8 p-4 bg-accent/20 rounded-lg">
          <h3 className="font-bold mb-2">Expected Response Time</h3>
          <p className="text-sm text-muted">
            We strive to respond to all inquiries within <strong>24-48 hours</strong> during business days (Monday-Friday). Messages received on weekends or holidays may take slightly longer to process.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mqkopkge"
          method="POST"
          className=""
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <select
              name="subject"
              id="subject"
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            >
              <option value="">Select a topic</option>
              <option value="support">Technical Support</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-y"
              placeholder="How can we help you? Please provide as much detail as possible."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 text-lg font-bold"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-muted text-sm mb-4">
          Prefer email? You can also reach us directly at{' '}
          <a href="mailto:alfotech.official@gmail.com" className="text-cta hover:underline">
            alfotech.official@gmail.com
          </a>
        </p>
        
        <div className="flex justify-center gap-6 mt-6">
          <a 
            href="https://www.instagram.com/alfo.global/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-cta transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/alfo-tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-cta transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/orgs/Alfo-Tech-Lab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-cta transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
