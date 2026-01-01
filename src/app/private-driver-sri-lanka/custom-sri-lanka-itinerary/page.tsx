import { buildMetadata } from "@/lib/seo";
import CustomItineraryForm from "./CustomItineraryForm";

export const metadata = buildMetadata({
  title: "Custom Sri Lanka Itinerary with Private Driver",
  description:
    "Plan a custom Sri Lanka itinerary with a private driver. Choose your travel dates, interests, and trip length. Get a personalized route via WhatsApp.",
  path: "/private-driver-sri-lanka/custom-sri-lanka-itinerary/",
  robots: {
    index: true,
    follow: true,
  },
});

export default function CustomSriLankaItineraryPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-10">
      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Custom Sri Lanka Itinerary with Private Driver
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Tell us your travel dates, group size, and interests. We’ll design a
          private Sri Lanka itinerary that fits your pace and send it to you on
          WhatsApp.
        </p>

        <p className="text-muted-foreground">
          This service is free and comes with no obligation to book.
        </p>
      </section>

      {/* TRUST STRIP */}
      <section className="grid gap-3 sm:grid-cols-3 text-sm">
        <div>✅ Licensed private drivers</div>
        <div>✅ Insured modern vehicles</div>
        <div>✅ Direct WhatsApp support</div>
      </section>

      {/* CLIENT FORM */}
      <CustomItineraryForm />
    </main>
  );
}
