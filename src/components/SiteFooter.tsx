import Link from "next/link";
import { siteConfig } from "@/site/config";
import { getPageById, toUrlPath } from "@/lib/site";

/**
 * Site-wide footer.
 *
 * The site shipped without one, which meant the only site-wide internal
 * linking surface was a five-item header nav. That is why seven pages —
 * including three /airport-to-*-taxi money pages — had zero inbound links.
 *
 * Columns are built from spec.ts page IDs rather than hard-coded hrefs, so a
 * renamed path can't silently turn a footer link into a 404.
 */

const COLUMNS: Array<{ heading: string; pageIds: string[] }> = [
  {
    heading: "Airport Transfers",
    pageIds: [
      "hub_airport",
      "route_colombo",
      "route_negombo",
      "route_kandy",
      "route_galle",
      "route_ella",
      "route_sigiriya",
      "routes_index",
    ],
  },
  {
    heading: "Tours & Itineraries",
    pageIds: [
      "sri_lanka_tours",
      "itinerary_8",
      "itinerary_10",
      "itinerary_14",
      "itinerary_custom",
      "tours_wildlife",
      "tours_cultural",
      "tours_scenic_train",
      "tours_beach",
      "tours_adventure",
    ],
  },
  {
    heading: "Travel Guide",
    pageIds: [
      "travel_guide",
      "guide_best_time",
      "guide_safety",
      "guide_visa",
      "guide_connectivity",
      "guide_packing",
      "guide_food",
      "guide_colombo",
    ],
  },
  {
    heading: "Private Driver",
    pageIds: [
      "private_driver",
      "private_driver_costs",
      "private_driver_benefits",
      "private_driver_meet",
      "vehicles",
      "prices",
      "at_booking_process",
      "contact",
    ],
  },
];

export function SiteFooter() {
  const office = siteConfig.contact.office;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300" role="contentinfo">
      {/* Extra bottom padding: <BookingStickyBar> is `fixed bottom-0` on every
          SpecPage, so without clearance it sits on top of the legal row. */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-28 md:px-6 md:pt-20 md:pb-28">
        {/* --- BRAND + CONTACT --- */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <p className="text-xl font-black tracking-tighter text-white">
              {siteConfig.brand}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Fixed-price airport transfers and multi-day private driver tours
              across Sri Lanka, with English-speaking drivers and no hidden
              costs. Quotes confirmed before you travel.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-amber-500 px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-950 transition-colors hover:bg-white"
            >
              {siteConfig.contact.whatsappLabel}
            </Link>
          </div>

          {/* NAP — name, address, phone. Kept consistent with the
              LocalBusiness JSON-LD in lib/schema.ts; if one changes, change
              both, because inconsistent NAP is what breaks local ranking. */}
          <address className="not-italic text-sm leading-relaxed text-slate-400">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            {office && (
              <p className="mb-3">
                {office.name}
                <br />
                {office.streetAddress}
                <br />
                {office.addressRegion}
              </p>
            )}
            <p>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                className="transition-colors hover:text-white"
              >
                WhatsApp, 24 hours
              </a>
            </p>

            {/* Renders only once siteConfig.social has real profile URLs.
                Those same URLs feed schema.org sameAs. */}
            {siteConfig.social.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {siteConfig.social.map((url) => (
                  <li key={url}>
                    <a
                      href={url}
                      rel="me noopener"
                      className="text-xs uppercase tracking-widest transition-colors hover:text-white"
                    >
                      {new URL(url).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </address>
        </div>

        {/* --- LINK COLUMNS --- */}
        <nav
          aria-label="Footer"
          className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {column.heading}
              </h2>
              <ul className="space-y-2.5">
                {column.pageIds.map((id) => {
                  const page = getPageById(id);
                  return (
                    <li key={id}>
                      <Link
                        href={toUrlPath(page.path)}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {page.crumbLabel ?? page.title.split("|")[0].trim()}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* --- LEGAL --- */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brand}. Serving Sri Lanka island-wide.
          </p>
          {/* TODO: link the About, booking terms, cancellation policy and
              privacy pages here once they exist. Deliberately not linked yet
              — a footer full of 404s is worse than a footer without them. */}
          <p>Bandaranaike International Airport (CMB) transfers &amp; island tours.</p>
        </div>
      </div>
    </footer>
  );
}
