import React from "react";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/site/config"; // ✅ Import Config

type ItineraryCTAProps = {
  title?: string;
  subtitle?: string;
  whatsappNumber?: string;
  bookingHref?: string;
};

// ✅ Use Config as default instead of hardcoded string
const defaultNumber = siteConfig.contact.whatsappNumber; 
const whatsappUrl = (n: string) => `https://wa.me/${n}`;

export default function ItineraryCTA({
  title = "Ready to plan your perfect Sri Lanka itinerary?",
  subtitle = "Chat with our trip experts on WhatsApp for a free personalised plan, suggested hotels and transparent pricing.",
  whatsappNumber = defaultNumber,
  bookingHref = "/contact",
}: ItineraryCTAProps) {
  const wa = whatsappUrl(whatsappNumber);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: subtitle,
    potentialAction: {
      "@type": "CommunicateAction",
      target: wa,
      actionAccessibilityRequirement: {
        "@type": "ActionAccessSpecification",
        category: "WhatsApp contact",
      },
    },
  };

  return (
    <>
      <Script id="itinerary-cta-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <section
        aria-labelledby="itinerary-cta-title"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#071025] via-[#0b1220] to-[#061425] p-6 md:p-8 text-white shadow-2xl ring-1 ring-white/5"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="itinerary-cta-title" className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-slate-300">{subtitle}</p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-semibold">Fast:</span>
                Reply within hours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-semibold">Custom:</span>
                Tailored daily plans
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-semibold">Transparent:</span>
                No hidden fees
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp ${whatsappNumber}`}
              className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-black shadow hover:scale-[1.02] transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20.52 3.48A11.94 11.94 0 0012.04.5C6.02.5 1.21 5.3 1.21 11.32c0 1.99.52 3.92 1.5 5.62L.5 23.5l6.8-2.06a11.72 11.72 0 005.75 1.48c6.02 0 10.83-4.8 10.83-10.82 0-3.03-1.18-5.87-3.36-7.58z" fill="#fff" opacity=".08"/>
                <path d="M17.53 14.7c-.37-.18-2.17-1.06-2.5-1.18-.34-.12-.59-.18-.84.18-.25.36-.98 1.18-1.2 1.42-.22.24-.43.27-.8.09-.37-.18-1.55-.57-2.95-1.83-1.09-.97-1.82-2.18-2.03-2.55-.22-.36-.02-.56.16-.74.16-.16.37-.43.55-.64.18-.22.24-.37.37-.62.12-.25.06-.46-.03-.64-.09-.18-.84-2.03-1.15-2.78-.3-.73-.61-.63-.84-.63-.22 0-.47-.01-.72-.01-.25 0-.64.09-.98.46-.34.36-1.29 1.26-1.29 3.07 0 1.81 1.32 3.56 1.5 3.81.18.25 2.59 3.95 6.27 5.36 3.23 1.24 3.23.83 3.81.78.06-.01 1.24-.5 1.42-.99.18-.49.18-.91.13-.99-.05-.08-.18-.12-.37-.21z" fill="#fff"/>
              </svg>
              WhatsApp
            </a>

            <Link
              href={bookingHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition"
              aria-label="Request your itinerary"
            >
              Request itinerary
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}