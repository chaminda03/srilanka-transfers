import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const page = getPageById("private_driver");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PrivateDriverSriLankaPage() {
  return (
    <SpecPage page={page}>

      {/* ================= PAGE HEADER (CENTERED) ================= */}
     

      {/* ================= HERO IMAGE (NO OVERLAY) ================= */}
      <section className="w-full">
        <Image
          src="/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp"
          alt="Sigiriya Rock Fortress in Sri Lanka, a UNESCO World Heritage Site often visited with a private driver"
          width={1920}
          height={900}
          priority
          className="w-full h-[65vh] object-cover"
        />
      </section>

      {/* ================= INTRO ================= */}
      <section className="pt-14 space-y-4 max-w-3xl px-6">
        <p className="text-base leading-relaxed text-muted-foreground">
          Traveling around Sri Lanka for several days? Our private driver and
          vehicle service gives you one dedicated driver and a comfortable
          vehicle for the entire duration of your stay.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          You decide where to go. We take care of safe driving, local guidance,
          and smooth travel between destinations.
        </p>
      </section>

      {/* ================= WHY PRIVATE DRIVER ================= */}
      <section className="pt-12 space-y-4 max-w-3xl px-6">
        <h2 className="text-2xl font-medium tracking-tight">
          Why Most Visitors Choose a Private Driver in Sri Lanka
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Driving in Sri Lanka can be challenging for visitors. Roads are often
          busy, traffic patterns are different, and local driving habits can be
          unpredictable.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          For safety, comfort, and peace of mind, many travelers prefer hiring a
          professional local driver instead of self-driving.
        </p>
      </section>

      {/* ================= DRIVER QUALITY ================= */}
      <section className="pt-14 space-y-6 px-6">
        <h2 className="text-2xl font-medium tracking-tight">
          Professional English-Speaking Local Drivers
        </h2>

        <div className="grid gap-5 md:grid-cols-2 max-w-5xl">
          {[
            {
              title: "Clear English communication",
              text: "Our drivers speak good English and communicate politely and clearly throughout your journey.",
            },
            {
              title: "Strong local knowledge",
              text: "Drivers know Sri Lankan roads, traffic conditions, and weather patterns very well.",
            },
            {
              title: "Safety-focused drivers",
              text: "We work only with drivers who have proven driving records and strong customer reviews.",
            },
            {
              title: "Reliable vehicles",
              text: "Clean, well-maintained cars, SUVs, and vans suitable for long-distance and multi-day travel.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= DRIVER AS GUIDE ================= */}
      <section className="pt-14 space-y-4 max-w-3xl px-6">
        <h2 className="text-2xl font-medium tracking-tight">
          Your Driver Is Also Your Local Travel Guide
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Our drivers don’t just take you from place to place. They guide you on
          scenic routes, recommend worthwhile stops, and help you enjoy Sri
          Lanka more deeply.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          Whether you prefer express highways or scenic countryside roads, your
          driver will suggest the best option based on your schedule and
          interests.
        </p>
      </section>

      {/* ================= ITINERARIES ================= */}
      <section className="pt-16 space-y-6 px-6">
        <h2 className="text-2xl font-medium tracking-tight">
          Popular Private Driver Travel Packages
        </h2>

        <p className="text-base text-muted-foreground max-w-2xl">
          Choose a ready-made itinerary or customize your own trip. Each package
          includes a licensed private driver, vehicle, and flexible planning.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          {[
            {
              title: "7 Nights / 8 Days",
              text: "Culture, scenic highlands, wildlife, and beaches — the most popular route.",
              href: "/private-driver-sri-lanka/8-day-itinerary/",
            },
            {
              title: "10 Days",
              text: "Slower pace with extra time in Ella, Nuwara Eliya, and beaches.",
              href: "/private-driver-sri-lanka/10-day-itinerary/",
            },
            {
              title: "14 Days",
              text: "Complete Sri Lanka experience with deep cultural and nature stops.",
              href: "/private-driver-sri-lanka/14-day-itinerary/",
            },
            {
              title: "Custom Duration",
              text: "Tell us your dates and interests. We’ll design your route.",
              href: "/private-driver-sri-lanka/custom-sri-lanka-itinerary/",
              dashed: true,
            },
          ].map((item) => (
            <Card key={item.title} className={item.dashed ? "border-dashed" : ""}>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
                <Button asChild className="w-full">
                  <Link href={item.href}>View itinerary</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="pt-16 px-6">
        <Card>
          <CardContent className="p-8 space-y-4 max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight">
              Plan Your Sri Lanka Trip With a Private Driver
            </h2>

            <p className="text-base text-muted-foreground">
              Share your travel dates and interests with us. We’ll help you plan
              a safe, comfortable, and memorable journey across Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Plan My Trip on WhatsApp</Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/colombo-airport-transfer/">
                  Airport Transfer Options
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

    </SpecPage>
  );
}
