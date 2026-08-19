import { FaqAccordion } from "@/components/FaqAccordion";
import { buildMetadata } from "@/lib/seo";
import { getPageById, absoluteUrl } from "@/lib/site";
import { localBusinessJsonLd, BUSINESS_ID } from "@/lib/schema";
import { siteConfig } from "@/site/config"; // ✅ Using Config for single source of truth
import { SpecPage } from "@/components/SpecPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

// Fetch page data
const page = getPageById("contact");

export const metadata = buildMetadata({
  title: "Contact Us | Plan Your Sri Lanka Private Tour",
  description: "Contact us to plan your Sri Lanka private tour. We offer private drivers and custom tour packages.",
  path: page.path,
});

// Helper to format the WhatsApp link using the Global Config
function whatsappLink(message: string) {
  const num = siteConfig.contact.whatsappNumber; // ✅ Auto-updates from config
  const text = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${text}`;
}

// NOTE: this page deliberately takes no `searchParams`.
//
// It used to accept and await them, which opts the route out of static
// generation — Next rendered it on demand (ƒ) and Vercel returned
// X-Vercel-Cache: MISS on every request, cold starts included. The awaited
// value was then never read. Since it's the highest-intent page on the site,
// it is now prerendered and served from the edge cache.
//
// If the ?error=1 flag from /api/lead needs surfacing, read it in a small
// client component with useSearchParams() rather than making the whole
// route dynamic again.
export default function ContactPage() {
  const wa = whatsappLink(
    "Hi! I’d like to book a Sri Lanka airport transfer or private driver."
  );

  const office = siteConfig.contact?.office ?? null;

  // NOTE: No `review` / `aggregateRating` markup here on purpose.
  // Google disallows self-serving review markup on LocalBusiness/Organization
  // (reviews you collect and publish about yourself). Star ratings must come from
  // Google Business Profile, or a third-party review platform emitting its own markup.
  // https://developers.google.com/search/docs/appearance/structured-data/review-snippet

  // SEO-optimised FAQ entries (mirrors visible content below)
  const faqs = [
    {
      q: "What can I see in Kandy in one day, and what's the route from Sigiriya to Kandy?",
      a: "In one day you can visit Kandy's highlights — the Temple of the Tooth, Kandy Lake, and the Royal Botanical Gardens (Peradeniya) plus an evening cultural dance. The typical driving route from Sigiriya is: Sigiriya → Dambulla → Matale → Kandy (about 2–3 hours depending on stops); we can arrange transfers and a guided itinerary."
    },
    {
      q: "Does 'This is permitted within 30 days from your initial arrival' mean I have to arrive within 30 days?",
      a: "This means a standard tourist visa allows a stay of up to 30 days starting from your arrival date in Sri Lanka. If you're unsure about your dates, confirm with the issuing authority or immigration."
    },
    {
      q: "What is the best mobile eSIM or SIM option for Sri Lanka?",
      a: "Local SIM cards (Dialog, Mobitel) are inexpensive and provide the best coverage; SIMs are available in the arrival hall and a 30-day data package often costs under US$10. eSIMs are an option via global providers but local SIMs usually give better value and coverage."
    },
    {
      q: "Is there a fine for overstaying a 30-day tourist visa by a day or two?",
      a: "Overstaying may lead to fines or additional processing at immigration. Penalties change over time — contact the Department of Immigration for current rates; we can help coordinate extensions if needed."
    },
    {
      q: "Can I do Workaway or volunteer work while on a tourist visa?",
      a: "Paid work is not permitted on a tourist visa. Volunteer placements may require a specific visa or permission — check with immigration or the programme organiser before you travel."
    }
  ];

  // The business is described ONCE, by localBusinessJsonLd() in lib/schema.ts.
  // This page used to carry its own divergent copy (different phone field,
  // different address fallbacks, `openingHours` as a bare string). The
  // ContactPage node now just points at that entity by @id.
  const jsonLd = [
    localBusinessJsonLd(),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url: absoluteUrl(page.path),
      mainEntity: {
        "@id": BUSINESS_ID,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phoneLink,
            contactType: "customer service",
            areaServed: "LK",
            availableLanguage: ["English"],
          },
        ],
      },
    },
  ];

  // NOTE: no FAQPage node here on purpose. <FaqAccordion> emits it from the
  // same array it renders, so the markup can't drift from the visible answers.
  // Two FAQPage nodes on one URL is invalid and Google may discard both.

  return (
    <SpecPage page={page}>
      <Script id="contact-page-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">

      {/* HERO */}
      <header className="mb-12">
        <div className="rounded-[40px] bg-slate-50 p-12 md:p-20">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Plan Your Sri Lanka Private Tour – Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-[60ch] mb-6">
            Pre-book private transfers, airport meet & greet, and tailored private driver services across Sri Lanka. Get a fixed quote in minutes via WhatsApp (available 24/7) or use the form to request a custom itinerary.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-amber-500 text-black py-3 px-6 font-bold">
              <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">Chat on WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full py-3 px-6">
              <a href={`tel:${siteConfig.contact.phoneLink}`} aria-label="Call us">Call</a> 
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full py-3 px-6">
              <a href="#booking-form">Open booking form</a>
            </Button>
          </div>
        </div>
      </header>

      {/* 2. Smart Inquiry Form (Enhanced with Floating Labels) */}
      <div id="booking-form" className="lg:col-span-12">
        <div className="bg-white border-2 border-slate-50 rounded-2xl p-10 md:p-16 shadow-lg shadow-slate-200/50">
          <h3 id="booking-form-title" className="text-2xl font-bold mb-8 tracking-tight">Booking Request Form</h3>
          
          <form className="space-y-4" action="/api/lead" method="post" aria-labelledby="booking-form-title">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder=" " 
                  className="peer w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 pt-6 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
                <label 
                  htmlFor="name" 
                  className="absolute text-slate-400 left-5 top-4 origin-[0] transition-all transform 
                             scale-75 -translate-y-3 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder=" " 
                  className="peer w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 pt-6 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
                <label 
                  htmlFor="email" 
                  className="absolute text-slate-400 left-5 top-4 origin-[0] transition-all transform 
                             scale-75 -translate-y-3 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  id="pickup" 
                  name="pickup" 
                  required 
                  placeholder=" " 
                  className="peer w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 pt-6 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
                <label 
                  htmlFor="pickup" 
                  className="absolute text-slate-400 left-5 top-4 origin-[0] transition-all transform 
                             scale-75 -translate-y-3 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                >
                  Travel Dates
                </label>
              </div>
              <div className="relative">
                <input 
                  id="destination" 
                  name="destination" 
                  required 
                  placeholder=" " 
                  className="peer w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 pt-6 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
                <label 
                  htmlFor="destination" 
                  className="absolute text-slate-400 left-5 top-4 origin-[0] transition-all transform 
                             scale-75 -translate-y-3 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                >
                  Number of Persons
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea 
                id="notes"
                name="notes" 
                placeholder=" " 
                className="peer w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 pt-6 min-h-[150px] focus:ring-2 focus:ring-primary outline-none transition-all" 
              ></textarea>
              <label 
                htmlFor="notes" 
                className="absolute text-slate-400 left-5 top-4 origin-[0] transition-all transform 
                           scale-75 -translate-y-3 
                           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                           peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
              >
                Tell us about your trip...
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button type="submit" size="lg" className="w-full rounded-2xl py-3 font-bold bg-amber-500 text-black">
                Request Fixed Price Quote
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full rounded-2xl py-3 font-semibold">
                <a href={wa} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              No payment required now. We will confirm pricing first.
            </p>
          </form>
        </div>
      </div>

      {/* 3. Real-Time Chat/WhatsApp Integration */}
      <div className="p-10 bg-slate-950 rounded-2xl text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Chat with us</h3>
          <p className="text-slate-400 mb-4 text-sm">Best for last-minute pickups, quick quotes and itinerary advice.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="col-span-1">
              <Button asChild size="sm" className="w-full h-10 rounded-full px-4 text-sm font-semibold bg-amber-500 text-black shadow-sm">
                <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
              </Button>
            </div>
            <div className="col-span-1">
              <Button asChild size="sm" className="w-full h-10 rounded-full px-4 text-sm font-semibold bg-white text-slate-900 shadow-sm">
                <a href={`tel:${siteConfig.contact.phoneLink}`} aria-label="Call us">Call</a>
              </Button>
            </div>
            <div className="col-span-1">
              <Button asChild size="sm" className="w-full h-10 rounded-full px-4 text-sm font-semibold bg-slate-700 text-white shadow-sm">
                <a href="#booking-form" aria-label="Open booking form">Contact Form</a>
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">WhatsApp is monitored 24/7 — expect fast responses.</p>
        </div>
        {/* Abstract glow */}
        <div className="absolute -right-10 -top-10 h-32 w-32 bg-primary/20 blur-3xl rounded-full" />
      </div>

      {/* 4. NAP & Google Maps Embed */}
      <div className="mt-6 bg-white border-2 border-slate-50 rounded-2xl p-6">
        <h4 className="font-semibold mb-2">Office</h4>
        <address className="not-italic text-sm text-slate-700 mb-4">
          {siteConfig.contact?.office?.streetAddress ? (
            <>
              <div>{siteConfig.contact.office.streetAddress}</div>
            </>
          ) : (
            <div>Colombo, Sri Lanka (update in site config)</div>
          )}
        </address>

        {siteConfig.contact?.office?.mapUrl ? (
          <div className="rounded-lg overflow-hidden border border-slate-100">
            <iframe src={siteConfig.contact.office.mapUrl} loading="lazy" className="w-full h-96" title="Office location"></iframe>
          </div>
        ) : (
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact?.office?.addressLocality || "Colombo")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">Open in Google Maps</a>
        )}
      </div>

      {/* 5. Social Proof & Trust Badges */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Trusted by Travellers</h3>
        <div className="flex justify-center items-center gap-8">
          <img src="/images/Trip_advisor.webp" alt="TripAdvisor Logo" className="h-20" />
          <img src="/images/tour_radar_logo.webp" alt="TourRadar Logo" className="h-20" />
        </div>
      </div>

      {/* 6. Secondary Contact Methods */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Other Ways to Contact Us</h3>
        <p className="text-slate-600">
          📧 Email: <a href="mailto:info@srilankaairporttransfer.com" className="text-primary underline">info@srilankaairporttransfer.com</a>
        </p>
        <p className="text-slate-600">
          📞 Phone: <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-primary underline">{siteConfig.contact.phoneDisplay}</a>
        </p>
      </div>

      {/* Testimonials */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold mb-6">What travellers say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote className="p-6 bg-white border-2 border-slate-50 rounded-2xl">
            <p className="text-slate-700">“Excellent service — on-time pickup and friendly driver. Highly recommended.”</p>
            <cite className="block mt-4 text-sm text-slate-500">— Lukas, Germany</cite>
          </blockquote>
          <blockquote className="p-6 bg-white border-2 border-slate-50 rounded-2xl">
            <p className="text-slate-700">“Fixed pricing made our arrival stress-free. Smooth and reliable.”</p>
            <cite className="block mt-4 text-sm text-slate-500">— Valeria, Spain</cite>
          </blockquote>
          <blockquote className="p-6 bg-white border-2 border-slate-50 rounded-2xl">
            <p className="text-slate-700">“Driver was courteous and the car was clean. Great value for money.”</p>
            <cite className="block mt-4 text-sm text-slate-500">— Ekaterina, Russia</cite>
          </blockquote>
        </div>
      </section>

      {/* 7. FAQ Mini-Section */}
      <FaqAccordion faqs={[
        { q: "How far in advance should I book?", a: "We recommend booking at least 24 hours in advance to ensure availability, especially during peak season." },
        { q: "Is a deposit required?", a: "No, we do not require a deposit for standard airport transfers. For multi-day tours, a small deposit may be required to confirm your booking." },
        { q: "What is your cancellation policy?", a: "You can cancel for free up to 24 hours before your scheduled pickup time. For multi-day tours, please refer to our booking confirmation for the cancellation policy." }
      ]} />

      </div>

    </SpecPage>
  );
}