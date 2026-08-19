import type { Metadata } from "next";
import { siteConfig } from "@/site/config";
import { absoluteUrl } from "@/lib/site";

type OgImage = { url: string; width?: number; height?: number; alt?: string };

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  /** Content last-updated date (YYYY-MM-DD) -> og:updated_time */
  updated?: string;
  noIndex?: boolean;
  image?: string | OgImage | Array<string | OgImage>;
  robots?: Metadata["robots"] | any;
};

export function buildMetadata(input: SeoInput = {}): Metadata {
  const title = input.title ?? siteConfig.defaultSeo.title;
  const description = input.description ?? siteConfig.defaultSeo.description;

  // Canonical must use the served URL form (www host, no trailing slash) —
  // see toUrlPath() in lib/site.ts for why.
  const canonical =
    input.path && siteConfig.domain ? absoluteUrl(input.path) : undefined;

  const images = (() => {
    if (!input.image) {
      // Never leave a page with no share image — blank cards on WhatsApp/FB/X.
      return [
        {
          url: siteConfig.defaultOgImage,
          width: siteConfig.defaultOgImageWidth,
          height: siteConfig.defaultOgImageHeight,
          alt: siteConfig.brand,
        },
      ];
    }
    if (typeof input.image === "string") return [{ url: input.image }];
    if (Array.isArray(input.image)) return input.image.map((i) => (typeof i === "string" ? { url: i } : i));
    // Spread, don't pluck .url — dropping width/height/alt makes crawlers
    // fetch the image just to learn its dimensions.
    return [{ ...(input.image as OgImage) }];
  })();

  const updatedIso = new Date(
    input.updated ?? siteConfig.contentUpdated
  ).toISOString();

  return {
    // Content-freshness signal. Next only emits openGraph.modifiedTime for
    // og:type=article, and these are service pages, so it goes through
    // `other`. The primary signal is still sitemap <lastmod>, which is what
    // Google actually reads — this just satisfies parsers that look for it.
    other: { "og:updated_time": updatedIso },

    // `absolute` bypasses the root layout's `%s | brand` title template.
    // Every title in spec.ts is already a complete SEO title with the brand
    // baked in, so letting the template apply would double the brand name.
    title: { absolute: title },
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
 * The LocalBusiness builder that used to live here has moved to
 * lib/schema.ts as `localBusinessJsonLd()`. It was a second, divergent
 * description of the same company — different name, no logo, no priceRange —
 * and having two of them is how the homepage ended up describing the
 * business differently from every other page. There is now exactly one.
 */

