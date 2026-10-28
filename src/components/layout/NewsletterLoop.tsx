import { Mail } from "lucide-react";

export default function NewsletterLoop() {
  return (
    <div className="bg-surface border-t border-border py-12 mt-auto overflow-x-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-bg p-4 sm:p-8 rounded-3xl border border-border w-full max-w-full">
          <div className="flex items-start gap-4 w-full md:w-auto">
            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-border">
              <Mail className="w-6 h-6 text-cta" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-1">Get notified when we launch new tools</h3>
              <p className="text-muted text-sm max-w-md">Join the alfo.online ecosystem digest. We&apos;ll send you a monthly update on new free utilities, tools, and updates.</p>
            </div>
          </div>

          <form
            className="flex flex-col sm:flex-row w-full md:w-auto gap-2 max-w-full"
            action="https://formspree.io/f/mqkopkge"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full md:w-64 max-w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            />
            <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap min-h-[44px] w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
