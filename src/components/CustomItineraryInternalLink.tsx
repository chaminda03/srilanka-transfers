import Link from "next/link";

type Props = {
  days?: number;
};

export default function CustomItineraryInternalLink({ days }: Props) {
  const introText = days
    ? `Looking to plan something different from our ${days}-day tour package?`
    : "Planning something different?";

  return (
    <section className="mt-10 rounded-lg border border-border bg-muted/40 p-5 sm:p-6">
      <div className="flex gap-4">
        {/* Accent bar */}
        <div className="w-1 rounded-full bg-foreground/80" />

        <div className="space-y-2">
          <p className="text-sm font-semibold">
            {introText}
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Our local expert team is ready to create a personalized tour to help
            you explore Sri Lanka at your own pace.
          </p>

          <p className="text-sm">
            <Link
              href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/"
              className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:no-underline"
            >
              Build your custom Sri Lanka itinerary
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
