import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

/**
 * CANONICAL fleet page.
 *
 * This content used to live in three places: /fleet (daily rates, no
 * capacities), /airport-transfer/vehicle-options (capacities and luggage, no
 * rates) and /vehicle-options — which was a spec entry with no page file, so
 * [...slug] served it as an empty shell despite it having more inbound links
 * than the other two combined. The three split their link equity and Google
 * picked between them.
 *
 * Merged here, at the shortest URL, outside the /airport-transfer/ silo
 * because the same vehicles serve multi-day tours. The other two 301 here.
 */

export async function generateMetadata() {
  const page = getPageById("vehicles");
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

const vehicles = [
  {
    name: "Comfort Car (Sedan)",
    capacity: "1–3 passengers",
    luggage: "2 large bags",
    dailyRate: "$55/day",
    transferFrom: "From $15",
    description:
      "Modern sedans such as the Toyota Prius and Axio. The right choice for solo travellers, couples and small families — efficient, fully air-conditioned, and comfortable on both highway and hill-country roads.",
    img: "/images/sri-lanka-private-airport-transfer-driver-service.webp",
    alt: "Air-conditioned sedan used for private airport transfers and tours in Sri Lanka.",
  },
  {
    name: "Large SUV",
    capacity: "1–4 passengers",
    luggage: "4 large bags",
    dailyRate: "$70/day",
    transferFrom: "From $25",
    description:
      "Extra comfort and luggage space, with higher ground clearance that makes a real difference on rural roads and the approach to national parks. Popular with families and photographers carrying kit.",
    img: "/images/SUV vehicle Private Driver Sri Lanka.webp",
    alt: "Spacious SUV used for family private driver tours in Sri Lanka.",
  },
  {
    name: "Spacious Van",
    capacity: "4–8 passengers",
    luggage: "Multiple large bags",
    dailyRate: "$90/day",
    transferFrom: "From $40",
    description:
      "Toyota KDH and similar. The only sensible option for groups of five or more, and the one to choose for a long island loop where everyone wants a window seat and room for souvenirs.",
    img: "/images/Sri Lanka Van for group tours.webp",
    alt: "Toyota KDH van used for group tours and larger family transfers in Sri Lanka.",
  },
];

const faqs = [
  {
    q: "Which vehicle do I need for my group?",
    a: "Count people and large bags separately. Two travellers with two suitcases fit a sedan comfortably. Four travellers with four suitcases need the SUV — a sedan will technically seat four but the boot will not take four large bags. Five or more people should always take the van.",
  },
  {
    q: "Are all vehicles air-conditioned?",
    a: "Yes. Every vehicle in the fleet is fully air-conditioned, which is not optional in the lowland heat. All vehicles are serviced regularly and inspected before long tours.",
  },
  {
    q: "Is the daily rate different from the transfer price?",
    a: "Yes, they are two different products. A transfer is a one-way point-to-point journey priced per route. The daily rate applies when you hire the vehicle and driver for a multi-day tour and covers fuel for your planned itinerary, tolls, parking and the driver's accommodation and meals.",
  },
  {
    q: "Can I request a specific make or model?",
    a: "You can ask, and we will tell you honestly whether we can guarantee it. We confirm the vehicle class — sedan, SUV or van — rather than a specific model, because the exact car depends on which vehicle is available on your dates.",
  },
  {
    q: "Are child seats available?",
    a: "Yes, on request and at no extra cost, but tell us the child's age when you book so the right seat is fitted before pickup rather than sourced on the day.",
  },
];

export default function VehicleOptionsPage() {
  const page = getPageById("vehicles");

  return (
    <SpecPage page={page}>
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Travel in Comfort and Style
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>
            We keep a modern, clean and fully air-conditioned fleet so that a
            four-hour drive from the airport to the hill country is something
            you enjoy rather than endure. Whether you are travelling solo, as a
            couple, or as a group of eight, there is a vehicle sized for it.
          </p>
          <p>
            Every vehicle is serviced and inspected on a schedule, and every
            price below is all-inclusive — fuel, tolls, parking and the
            driver&apos;s costs are already in the number you are quoted.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            The Fleet
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-slate-50 rounded-[32px] shadow-sm border border-slate-100/80 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video bg-slate-200">
                <Image
                  src={vehicle.img}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  alt={vehicle.alt}
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800">
                  {vehicle.name}
                </h3>
                <p className="text-primary font-semibold text-sm mt-1 mb-4">
                  {vehicle.capacity} &nbsp;|&nbsp; {vehicle.luggage}
                </p>
                <p className="text-slate-500 flex-1">{vehicle.description}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 text-sm">
                  <div>
                    <dt className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                      Tour hire
                    </dt>
                    <dd className="text-lg font-bold text-slate-900 mt-1">
                      {vehicle.dailyRate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                      Transfers
                    </dt>
                    <dd className="text-lg font-bold text-slate-900 mt-1">
                      {vehicle.transferFrom}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Vehicle FAQs
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} pageTitle={page.title} />
      </section>
    </SpecPage>
  );
}
