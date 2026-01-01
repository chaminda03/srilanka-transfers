import type { Metadata } from "next";
import { siteConfig } from "@/site/config";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string | { url: string } | Array<string | { url: string }>;
  robots?: Metadata["robots"] | any;
};

export function buildMetadata(input: SeoInput = {}): Metadata {
  const title = input.title ?? siteConfig.defaultSeo.title;
  const description = input.description ?? siteConfig.defaultSeo.description;

  const canonical =
    input.path && siteConfig.domain
      ? `https://${siteConfig.domain}${input.path}`
      : undefined;

  const images = (() => {
    if (!input.image) return undefined;
    if (typeof input.image === "string") return [{ url: input.image }];
    if (Array.isArray(input.image)) return input.image.map((i) => (typeof i === "string" ? { url: i } : i));
    return [{ url: (input.image as { url: string }).url }];
  })();

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: input.robots ?? (input.noIndex ? { index: false, follow: false } : undefined),
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: siteConfig.locale,
      images: images as any,
    },
    twitter: {
      card: "summary_large_image", // Can be "summary", "summary_large_image", "app", or "player"
      title,
      description,
      // creator: "@yourTwitterHandle", // Optional: if you have a specific Twitter handle for the site/author
      // site: "@yourTwitterHandle",    // Optional: if you have a specific Twitter handle for the site
      images: images as any,
    },
  };
}

/**
 * Builds a LocalBusiness Schema.org JSON-LD object from siteConfig.
 */
export function buildLocalBusinessSchema() {
  const office = siteConfig.contact.office;
  if (!office) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: office.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: office.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.latitude,
      longitude: office.longitude,
    },
    url: `https://${siteConfig.domain}`, // Use the configured domain for the URL
    telephone: siteConfig.contact.whatsappNumberE164, // Using WhatsApp number as primary contact
    openingHours: office.openingHours,
    // image: `https://${siteConfig.domain}/your-local-business-logo.webp`, // Consider adding a logo specific to the local business
    // priceRange: "$$$", // Example: Replace with actual price range
    // SameAs: [
    //   "https://www.facebook.com/yourpage",
    //   "https://twitter.com/yourpage",
    //   // Add other social profiles here
    // ]
  };
}

