import { siteConfig } from "@/site/config";
import { absoluteUrl } from "@/lib/site";

/**
 * Stable @id for the business entity. Every other node that references the
 * business points here instead of restating it, so Google resolves one
 * organisation rather than several look-alikes.
 */
export const BUSINESS_ID = `${absoluteUrl("/")}#business`;

/**
 * THE business node. Single source of truth.
 *
 * There used to be a second, divergent implementation of this in lib/seo.ts
 * (buildLocalBusinessSchema) used only by the homepage, which is how two
 * pages ended up describing the same company differently.
 *
 * Typed as both TravelAgency and LocalBusiness on purpose: the site sells
 * multi-day tours as well as transfers, and the domain string alone pushes
 * Google hard toward "taxi company". The TravelAgency type is the clearest
 * signal available that this business also operates tours.
 */
export function localBusinessJsonLd() {
  const office = siteConfig.contact.office;

  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: siteConfig.brand,
    url: absoluteUrl("/"),
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.defaultSeo.description,
    telephone: siteConfig.contact.whatsappNumberE164,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "USD, LKR",
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    ...(office
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: office.streetAddress,
            addressLocality: office.addressLocality,
            addressRegion: office.addressRegion,
            ...(office.postalCode ? { postalCode: office.postalCode } : {}),
            addressCountry: office.addressCountry,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: office.latitude,
            longitude: office.longitude,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          ],
        }
      : {}),
    // Populate siteConfig.social with the Google Business Profile, Facebook,
    // Instagram and TripAdvisor URLs. Until then this key is omitted rather
    // than emitted empty — an empty sameAs corroborates nothing.
    ...(siteConfig.social.length ? { sameAs: siteConfig.social } : {}),
  };
}

export function serviceJsonLd(serviceName: string, servicePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    areaServed: "Sri Lanka",
    // Canonical URL form — www host, no trailing slash.
    url: absoluteUrl(servicePath),
    // Reference the business by @id rather than restating it — one entity,
    // described once, pointed at from everywhere.
    provider: { "@id": BUSINESS_ID },
  };
}

export function faqJsonLd(
  faqs: Array<
    { q: string; a: string } | { question: string; answer: string }
  >,
  /**
   * Optional. Pass the PAGE title, not the section heading — "Frequently
   * Asked Questions" as an entity name tells Google nothing. Omitted when
   * the caller has no page title to hand, which is valid: `name` is not a
   * required property of FAQPage.
   */
  pageTitle?: string
) {
  const normalized = faqs.map((f) => {
    if ("q" in f) return { q: f.q, a: f.a };
    return { q: f.question, a: f.answer };
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageTitle ? { name: pageTitle } : {}),
    mainEntity: normalized.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/**
 * BreadcrumbList from a resolved trail (see getBreadcrumbTrail in lib/site).
 *
 * This used to take a path plus a labelFor callback and derive the trail
 * itself — and was never called by anything, so /tours/... pages shipped no
 * hierarchy signal at all. Taking the trail means the JSON-LD and the visible
 * breadcrumb are guaranteed to describe the same path.
 */
export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
