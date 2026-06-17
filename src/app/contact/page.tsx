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
        Have a question or feedback? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form
        action="https://formspree.io/f/mqkopkge"
        method="POST"
        className="bg-surface border border-border p-8 rounded-2xl shadow-sm"
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

        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-y"
            placeholder="How can we help you?"
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
  );
}
