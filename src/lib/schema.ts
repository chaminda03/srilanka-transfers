import { siteConfig } from "@/site/config";
import { absoluteUrl } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url: absoluteUrl("/"),
    telephone: siteConfig.contact.whatsappNumberE164,
    areaServed: "Sri Lanka",
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
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brand,
      url: absoluteUrl("/"),
    },
  };
}

export function faqJsonLd(
  pageTitle: string,
  faqs: Array<
    { q: string; a: string } | { question: string; answer: string }
  >
) {
  const normalized = faqs.map((f) => {
    if ("q" in f) return { q: f.q, a: f.a };
    return { q: f.question, a: f.answer };
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: pageTitle,
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
 * BreadcrumbList for a spec page. Derives intermediate levels from the URL
 * segments so /travel-guide/colombo yields Home > Travel Guide > Colombo
 * instead of skipping the hub.
 */
export function breadcrumbJsonLd(
  path: string,
  labelFor: (segmentPath: string, segment: string) => string
) {
  const segments = absoluteUrl(path)
    .replace(`https://${siteConfig.domain}`, "")
    .split("/")
    .filter(Boolean);

  const items = [{ name: "Home", url: absoluteUrl("/") }];

  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({ name: labelFor(acc, seg), url: absoluteUrl(acc) });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
