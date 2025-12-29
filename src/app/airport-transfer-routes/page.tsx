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
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Choose your destination</h2>
        <p className="text-muted-foreground">
          Select a route below to see transfer details and request a fixed,
          all-inclusive quote. For custom routes, message us and we’ll confirm
          pricing.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Card key={r.id}>
              <CardContent className="p-5 space-y-2">
                <Link className="font-medium hover:underline" href={r.path}>
                  {r.title} →
                </Link>
                <div className="text-sm text-muted-foreground">
                  Fixed quote • Private driver • Door-to-door
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact/">Get a fixed quote</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/prices/">View prices</Link>
          </Button>
        </div>
      </section>
    </SpecPage>
  );
}
