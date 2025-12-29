import type { Metadata } from "next";
import { siteConfig } from "@/site/config";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata(input: SeoInput = {}): Metadata {
  const title = input.title ?? siteConfig.defaultSeo.title;
  const description = input.description ?? siteConfig.defaultSeo.description;

  const canonical =
    input.path && siteConfig.domain
      ? `https://${siteConfig.domain}${input.path}`
      : undefined;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: input.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: siteConfig.locale,
    },
  };
}
