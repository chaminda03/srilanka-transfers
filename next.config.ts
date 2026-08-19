import type { NextConfig } from "next";

/**
 * PERMANENT REDIRECTS
 *
 * Each of these retires a URL that was competing with a better one for the
 * same query. Splitting one topic across several URLs splits its link equity
 * and lets Google pick the weaker page — so one canonical URL per topic, and
 * a 301 (permanent: true) from the rest to pass the equity across.
 *
 * Do not convert these to 302s and do not delete them later "because nobody
 * visits them" — a 301 has to outlive the old URL's presence in Google's
 * index and in other people's links, which takes years.
 */
const redirects = async () => [
  // --- Fleet consolidation -> /vehicle-options ---
  // /fleet had the daily rates, /airport-transfer/vehicle-options had the
  // capacities, /vehicle-options had the inbound links and no page at all.
  // Merged at /vehicle-options.
  {
    source: "/fleet",
    destination: "/vehicle-options",
    permanent: true,
  },
  {
    source: "/airport-transfer/vehicle-options",
    destination: "/vehicle-options",
    permanent: true,
  },

  // --- Safety consolidation -> the travel-guide version ---
  // Two pages targeted "is Sri Lanka safe". The travel-guide one is longer,
  // carries a real `updated` date and sits in the right silo. This also
  // retires /blog entirely — a one-post blog section reads as abandoned.
  {
    source: "/blog/safe-travel-sri-lanka",
    destination: "/travel-guide/is-sri-lanka-safe-to-travel",
    permanent: true,
  },
  {
    source: "/blog",
    destination: "/travel-guide",
    permanent: true,
  },

  // --- Empty spec-only shells ---
  // Both were spec entries with no page file, so the [...slug] catch-all
  // served them as a hero and a sidebar with no body, while the sitemap
  // advertised them. Pointed at the pages that actually answer the query.
  //
  // NOTE: /best-way-to-travel-sri-lanka is a genuinely good URL and is on the
  // content roadmap ("Getting around Sri Lanka: every option compared").
  // When that page is written, delete this redirect and restore its spec entry.
  {
    source: "/how-it-works",
    destination: "/airport-transfer/booking-process",
    permanent: true,
  },
  {
    source: "/best-way-to-travel-sri-lanka",
    destination: "/private-driver-sri-lanka/benefits-vs-self-drive",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  redirects,
};

export default nextConfig;
