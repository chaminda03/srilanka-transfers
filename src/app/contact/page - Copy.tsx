import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { siteConfig } from "@/site/config";
import { SpecPage } from "@/components/SpecPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const page = getPageById("contact");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

function whatsappLink(message: string) {
  const num = siteConfig.contact.whatsappNumberE164.replace(/[^\d+]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${num.replace("+", "")}?text=${text}`;
}

export default function ContactPage(props: {
  searchParams?: { success?: string; error?: string };
}) {
  const searchParams = props.searchParams;

  const wa = whatsappLink(
    "Hi! I’d like to book a Sri Lanka airport transfer or private driver."
  );

  return (
    <SpecPage page={page}>
      {/* SUCCESS / ERROR MESSAGE */}
      {searchParams?.success && (
        <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          ✅ Thank you! We received your request and will get back to you shortly.
        </div>
      )}

      {searchParams?.error && (
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ❌ Something went wrong. Please try again or contact us on WhatsApp.
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {/* WHATSAPP */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Book on WhatsApp (Fastest Response)
            </h2>

            <p className="text-muted-foreground">
              For quick bookings and questions, message us on WhatsApp. Our team
              will confirm availability and pricing.
            </p>

            <Button asChild size="lg">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>

            <p className="text-xs text-muted-foreground">
              If the message is not prefilled, just type your travel details and
              send.
            </p>

            <ul className="text-sm text-muted-foreground space-y-1 pt-2">
              <li>✔ Fixed, all-inclusive prices</li>
              <li>✔ Licensed English-speaking drivers</li>
              <li>✔ Insured private vehicles</li>
              <li>✔ Airport meet & greet available</li>
            </ul>
          </CardContent>
        </Card>

        {/* FORM */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Request a Fixed-Price Quote
            </h2>

            <p className="text-muted-foreground text-sm">
              Prefer email or want to share more details? Fill out the form and
              we’ll reply as soon as possible.
            </p>

            <form className="space-y-3" action="/api/lead" method="post">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                name="phone"
                placeholder="Phone number (optional)"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                name="pickup"
                required
                placeholder="Pickup location (e.g., Colombo Airport)"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                name="destination"
                required
                placeholder="Destination (e.g., Kandy)"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                name="date"
                required
                placeholder="Date & time (local)"
                className="w-full rounded-md border px-3 py-2"
              />
              <textarea
                name="notes"
                placeholder="Flight number, passengers, luggage, stops…"
                className="w-full rounded-md border px-3 py-2 min-h-[120px]"
              />

              <Button type="submit" size="lg" className="w-full">
                Send request
              </Button>

              <p className="text-xs text-muted-foreground">
                We reply with a fixed price. No obligation.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* CUSTOM ITINERARY CTA */}
      <section className="mt-10">
        <Card className="border-dashed">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold">
              Planning a Multi-Day or Custom Trip?
            </h2>

            <p className="text-sm text-muted-foreground">
              If your trip involves multiple destinations or longer stays, use
              our custom itinerary builder to send us a detailed plan.
            </p>

            <Button asChild size="lg" variant="outline">
              <Link href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/">
                Build My Custom Sri Lanka Itinerary
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </SpecPage>
  );
}
