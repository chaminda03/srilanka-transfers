import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById, getAllPages } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const page = getPageById("routes_index");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function RoutesIndexPage() {
  const routes = getAllPages().filter((p) => p.type === "route");

  return (
    <SpecPage page={page}>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Popular Sri Lanka Transfer Routes</h2>
          <p className="text-muted-foreground text-lg">
          Select a route below to see transfer details and request a <Link href="/prices/" className="text-primary hover:underline">fixed,
          all-inclusive quote</Link>. For <Link href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" className="text-primary hover:underline">custom routes</Link>, <Link href="/contact/" className="text-primary hover:underline">message us</Link> and we’ll confirm
          pricing.
        </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Link key={r.id} href={r.path} className="block group h-full">
              <Card className="h-full transition-colors hover:bg-muted/50 hover:border-primary/50">
                <CardContent className="p-5 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold group-hover:text-primary leading-tight">
                      {r.title.split("|")[0].trim()}
                    </h3>
                    {r.startPrice && (
                      <span className="shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
                        {r.startPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {r.description}
                  </p>
                  <div className="text-xs text-muted-foreground pt-1 flex items-center gap-1">
                    <span className="text-primary font-medium">View Route</span>
                    <span>→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="pt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact/">Get a fixed quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/prices/">View Transfer Rates</Link>
          </Button>
        </div>
      </section>
    </SpecPage>
  );
}
