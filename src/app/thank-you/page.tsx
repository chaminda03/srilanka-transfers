import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 space-y-8">
      {/* CONFIRMATION */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Thank You — Your Sri Lanka Travel Request Is Confirmed ✅
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          Your request has been successfully received by our local team in Sri
          Lanka. We are now reviewing your travel details and will get back to
          you shortly with availability and a clear, fixed price.
        </p>
      </section>

      {/* TRUST BLOCK */}
      <section className="rounded-lg border bg-muted/30 p-6 space-y-3">
        <h2 className="font-semibold">What happens next?</h2>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>📩 Your inquiry is delivered directly to our operations team</li>
          <li>🚗 A licensed, English-speaking driver is assigned based on your route</li>
          <li>💬 You’ll receive a personal reply — no automated messages</li>
          <li>💰 Pricing will be transparent and all-inclusive</li>
        </ul>
      </section>

      {/* WHATSAPP FAST TRACK */}
      <section className="rounded-lg border p-6 space-y-4">
        <h2 className="font-semibold">Need a faster response?</h2>

        <p className="text-sm text-muted-foreground">
          For urgent arrivals or last-minute changes, WhatsApp is the quickest
          way to reach us. Just mention that you’ve already submitted the form.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/17038554561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-black font-medium hover:opacity-90"
            aria-label="Chat on WhatsApp"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+17038554561"
            className="inline-flex w-full items-center justify-center rounded-md border px-6 py-3 text-sm font-medium"
            aria-label="Call us"
          >
            Call Us
          </a>
        </div>
      </section>

      {/* NAVIGATION */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/private-driver-sri-lanka/"
          className="inline-flex w-full items-center justify-center rounded-md border px-6 py-3 text-sm font-medium"
        >
          View Private Driver Services
        </Link>

        <Link
          href="/"
          className="inline-flex w-full items-center justify-center rounded-md border px-6 py-3 text-sm font-medium"
        >
          Back to Home
        </Link>
      </div>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sri Lanka Airport Transfers & Private Driver Service",
            provider: {
              "@type": "LocalBusiness",
              name: "Sri Lanka Airport Transfer",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+1-703-855-4561",
                availableLanguage: ["English"],
              },
            },
            areaServed: {
              "@type": "Country",
              name: "Sri Lanka",
            },
            serviceType: [
              "Airport Transfer",
              "Private Driver",
              "Custom Sri Lanka Tours",
            ],
          }),
        }}
      />
    </main>
  );
}
