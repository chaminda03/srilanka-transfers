import Link from 'next/link';
import { Metadata } from 'next';

// SEO Architect Note: We "noindex" this page so it doesn't appear in search results,
// preserving your conversion data integrity.
export const metadata: Metadata = {
  title: 'Thank You | Sri Lanka Airport Transfer',
  description: 'Your booking request has been received.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 bg-background">
      <section className="max-w-md w-full text-center space-y-8 py-12 border rounded-xl shadow-sm bg-card">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Request Received!
          </h1>
          <p className="text-muted-foreground text-lg">
            Thank you for choosing us. We&apos;ve received your details and our team will contact you on WhatsApp or Email within 15 minutes to confirm your driver.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-6">
          <Link
            href="https://wa.me/17038554561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-6 py-4 text-black font-semibold hover:bg-amber-400 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            Message us on WhatsApp
          </Link>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Back to Homepage
          </Link>
        </div>

        <div className="pt-4">
          <p className="text-xs text-muted-foreground px-8">
            Need immediate help? Call us directly at <Link href="tel:+17038554561" className="underline font-medium">+1 703 855 4561</Link>
          </p>
        </div>
      </section>
    </main>
  );
}