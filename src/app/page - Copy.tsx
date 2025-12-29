import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/site/config";

const routes = [
  { label: "Airport → Kandy", href: "/airport-to-kandy-taxi/" },
  { label: "Airport → Galle", href: "/airport-to-galle-taxi/" },
  { label: "Airport → Ella", href: "/airport-to-ella-taxi/" },
  { label: "Airport → Sigiriya", href: "/airport-to-sigiriya-taxi/" },
  { label: "Airport → Negombo", href: "/airport-to-negombo-taxi/" },
  { label: "Airport → Colombo", href: "/airport-to-colombo-taxi/" }, // remove if not created yet
];

const trustPoints = [
  "Fixed prices — no hidden fees",
  "Private vehicle & professional driver",
  "Meet & greet coordination at CMB",
  "Scenic or express route options",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      {/* HERO */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Private</Badge>
          <Badge>Fixed Price</Badge>
          <Badge>Airport Meet & Greet</Badge>
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Sri Lanka Airport Transfer – Private Pickup with Fixed Prices
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Pre-book your Colombo Airport transfer with a private driver, clear
          pricing, and reliable coordination — no taxi queues, no surprises.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/contact/">{siteConfig.contact.whatsappLabel}</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/prices/">View Prices</Link>
          </Button>
        </div>

        {/* Micro-trust line */}
        <p className="text-xs text-muted-foreground">
          ⭐ Trusted by international travelers • No obligation • Response in
          minutes
        </p>

        {/* TRUST STRIP */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          {trustPoints.map((t) => (
            <div key={t} className="text-sm text-muted-foreground">
              ✅ {t}
            </div>
          ))}
        </div>
      </div>

      {/* ARRIVAL PATTERN (first-night behavior) */}
      <div className="mt-10">
        <Card>
          <CardContent className="space-y-3 p-6">
            <h2 className="text-xl font-semibold">
              Airport Transfers to Hotels & Popular Destinations
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Many travelers land at Colombo Airport (CMB), take a short transfer
              to <strong>Negombo</strong> or <strong>Colombo</strong> for the
              first night, then continue the next morning to destinations like{" "}
              <strong>Kandy</strong>, <strong>Sigiriya</strong>,{" "}
              <strong>Ella</strong>, or <strong>Galle</strong>.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              We support short hotel drops, long-distance transfers across Sri
              Lanka, and private driver trips — all with a fixed, all-inclusive
              quote upfront.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild>
                <Link href="/colombo-airport-transfer/">Colombo Airport Hub</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact/">{siteConfig.contact.whatsappLabel}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* POPULAR ROUTES */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Popular Sri Lanka Airport Transfer Routes
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Card key={r.href} className="transition-shadow hover:shadow-sm">
              <CardContent className="p-5">
                <div>
                  <div className="font-medium">{r.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Fixed price • Private vehicle • Door-to-door
                  </div>
                </div>

                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={r.href}>View route</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SCENIC vs EXPRESS */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Scenic Route or Express Highway — You Choose
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-2 p-6">
              <h3 className="font-semibold">Express highway</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Best for the fastest arrival — ideal if you’re landing late or
                want to check in quickly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2 p-6">
              <h3 className="font-semibold">Scenic route</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Best for daytime travel — enjoy countryside views, local towns,
                and optional comfort stops depending on timing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* VEHICLES */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Comfortable Vehicles for Every Group
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="space-y-2 p-6">
              <h3 className="font-semibold">Cars</h3>
              <p className="text-sm text-muted-foreground">
                Solo travelers & couples
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2 p-6">
              <h3 className="font-semibold">SUVs</h3>
              <p className="text-sm text-muted-foreground">
                Families & extra luggage
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-2 p-6">
              <h3 className="font-semibold">Vans</h3>
              <p className="text-sm text-muted-foreground">
                Groups & multi-day tours
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="pt-1">
          <Button asChild variant="outline">
            <Link href="/vehicle-options/">See vehicle options</Link>
          </Button>
        </div>
      </div>

      {/* FAQ (homepage objections) */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>

        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="font-medium">Is the price really fixed?</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Yes. We confirm a fixed, all-inclusive quote before your trip — no
              hidden fees or surprises.
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="font-medium">What if my flight is delayed?</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Share your flight number when booking. We coordinate pickup based
              on arrival time and confirm meeting details.
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="font-medium">
              Do you provide child seats or larger vehicles?
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Yes. Cars, SUVs, vans, and child seats can be arranged — tell us
              your passenger count, luggage, and child-seat needs in advance.
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mt-10">
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">How Booking Works</h2>

            <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Send your pickup + destination details</li>
              <li>Receive a fixed, all-inclusive quote</li>
              <li>Meet your driver at the airport</li>
              <li>Travel comfortably to your destination</li>
            </ol>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact/">{siteConfig.contact.whatsappLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/prices/">View prices</Link>
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              Response typically within minutes • No obligation
            </div>
          </CardContent>
        </Card>
      </div>

          </div>
  );
}
