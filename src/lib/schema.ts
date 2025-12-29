import { siteConfig } from "@/site/config";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url: siteConfig.domain ? `https://${siteConfig.domain}` : undefined,
    telephone: siteConfig.contact.whatsappNumberE164,
    areaServed: "Sri Lanka",
  };
}

export function serviceJsonLd(serviceName: string, servicePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    areaServed: "Sri Lanka",
    url: siteConfig.domain
      ? `https://${siteConfig.domain}${servicePath}`
      : undefined,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brand,
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
