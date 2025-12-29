import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllPages, getPageByPath, normalizePath } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { serviceJsonLd, faqJsonLd } from "@/lib/schema";
import { routeInfo } from "@/site/routes";
import { siteConfig } from "@/site/config";

// Generate all spec pages at build/dev time
export function generateStaticParams() {
  const all = getAllPages();

  return all
    .filter((p) => p.path !== "/")
    .filter((p) => !normalizePath(p.path).startsWith("/api/"))
    .filter((p) => normalizePath(p.path) !== "/contact/") // handled by explicit route
    .map((p) => ({
      slug: normalizePath(p.path).split("/").filter(Boolean),
    }));
}

// ✅ Next.js 16: params can be a Promise — await it
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const path = `/${slug.join("/")}/`;

  const page = getPageByPath(path);
  if (!page) return {};

  // Base metadata you already had
  const base = buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });

  // Build absolute canonical
  const siteUrl = siteConfig.domain
    ? `https://${siteConfig.domain}`
    : undefined;

  const canonical = siteUrl ? `${siteUrl}${page.path}` : undefined;

  // Add OG/Twitter/canonical/robots (safe defaults)
  return {
    ...base,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: siteConfig.brand,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function DynamicSpecPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const path = `/${slug.join("/")}/`;

  const page = getPageByPath(path);
  if (!page) return notFound();

  const isRoute = page.type === "route";

  // ✅ Route data (only exists for route pages we’ve defined in routes.ts)
  const route = isRoute
    ? routeInfo[page.id as keyof typeof routeInfo]
    : undefined;

  return (
    <>
      {/* Service schema for all route pages */}
      {isRoute && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd(page.title, page.path)),
          }}
        />
      )}

      {/* FAQ schema when route FAQ data exists */}
      {isRoute && route?.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(page.title, route.faqs)),
          }}
        />
      ) : null}

      <SpecPage page={page}>
        {/* Enhanced route blocks (only when we have route data) */}
        {isRoute && route ? (
          <section className="space-y-8">
            {/* Route facts (below fixed-price block) */}
            <div className="rounded-lg border p-5 space-y-2 bg-muted/30">
              <h2 className="text-xl font-semibold">
                {route.from} → {route.to}
              </h2>

              <div className="grid gap-2 sm:grid-cols-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Distance:</span>{" "}
                  ~{route.distanceKm} km
                </div>
                <div>
                  <span className="font-medium text-foreground">Express:</span>{" "}
                  {route.expressTime}
                </div>
                <div>
                  <span className="font-medium text-foreground">Scenic:</span>{" "}
                  {route.scenicTime}
                </div>
              </div>
            </div>

            {/* Express vs Scenic */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-5 space-y-2">
                <h3 className="font-semibold">Express route</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {route.expressNotes}
                </p>

                {route.expressHighlights?.length ? (
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {route.expressHighlights.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="rounded-lg border p-5 space-y-2">
                <h3 className="font-semibold">Scenic route</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {route.scenicNotes}
                </p>

                {route.scenicHighlights?.length ? (
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {route.scenicHighlights.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            {/* What's included */}
            <div className="rounded-lg border p-5 space-y-3">
              <h2 className="text-xl font-semibold">What’s included</h2>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {(route.included ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2 text-background text-sm font-medium hover:opacity-90"
                >
                  Get a fixed quote
                </a>
              </div>
            </div>

            {/* First-night CTA (Negombo / Colombo only) */}
            {["route_negombo", "route_colombo"].includes(page.id) && (
              <div className="rounded-lg border p-5 space-y-3 bg-muted/20">
                <h2 className="text-lg font-semibold">
                  Planning your journey after the first night?
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Many travelers stay in {route.to} on the first night and
                  continue inland the next morning. We can arrange both
                  transfers in one booking with fixed pricing and the same
                  trusted driver.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="/colombo-airport-transfer/"
                    className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2 text-background text-sm font-medium hover:opacity-90"
                  >
                    Continue to Kandy / Sigiriya
                  </a>

                  <a
                    href="/contact/"
                    className="inline-flex items-center justify-center rounded-md border px-5 py-2 text-sm font-medium hover:bg-muted"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}

            {/* FAQs */}
            {route.faqs?.length ? (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">FAQs</h2>
                <div className="space-y-3">
                  {route.faqs.map((f) => (
                    <div key={f.q} className="rounded-lg border p-4">
                      <div className="font-medium">{f.q}</div>
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}
      </SpecPage>
    </>
  );
}
