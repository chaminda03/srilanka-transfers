import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

const page = getPageById("prices");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PricesPage() {
  return (
    <SpecPage page={page}>
      {/* HERO */}
  <section className="space-y-4">
  <h2 className="text-2xl font-semibold">
    Airport Transfer & Private Driver Pricing
  </h2>

  <p className="text-muted-foreground text-lg leading-relaxed">
    Transparent, fixed pricing for Sri Lanka airport transfers and private
    driver services. No hidden fees, no bargaining — just clear rates and
    professional service.
  </p>

  <p className="text-muted-foreground">
    Request an exact quote in minutes via WhatsApp based on your route,
    vehicle type, and travel dates.
  </p>
</section>


      {/* WHAT’S INCLUDED */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Our Prices Include</h2>

        <ul className="grid gap-2 sm:grid-cols-2 text-sm">
          <li>✔ Fixed, all-inclusive pricing</li>
          <li>✔ Licensed, English-speaking driver</li>
          <li>✔ Private, air-conditioned vehicle</li>
          <li>✔ Airport meet & greet at Colombo (CMB)</li>
          <li>✔ Flight-tracked pickup (free waiting time)</li>
          <li>✔ Fuel, tolls, and parking included</li>
        </ul>
      </section>

      {/* AIRPORT TRANSFER PRICES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Sri Lanka Airport Transfer Prices (Popular Routes)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-muted/40">
              <tr>
                <th className="border px-3 py-2 text-left">Route</th>
                <th className="border px-3 py-2 text-left">
                  Estimated Price From
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Airport → Negombo</td>
                <td className="border px-3 py-2">USD 25</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Airport → Colombo City</td>
                <td className="border px-3 py-2">USD 30</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Airport → Kandy</td>
                <td className="border px-3 py-2">USD 80</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">
                  Airport → Sigiriya / Dambulla
                </td>
                <td className="border px-3 py-2">USD 80</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Airport → Galle</td>
                <td className="border px-3 py-2">USD 80</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Airport → Ella</td>
                <td className="border px-3 py-2">USD 140</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PRIVATE DRIVER */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Private Driver Prices (Daily Hire)
        </h2>

        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Car with driver: from USD 60–75 per day</li>
          <li>Van with driver: from USD 80–95 per day</li>
        </ul>

        <p className="text-sm text-muted-foreground">
          Accommodation, meals, and entrance tickets are not included.
        </p>
      </section>

    {/* CTA */}
<section className="rounded-lg border p-6 space-y-4">
  <h2 className="text-xl font-semibold">
    Get Your Exact Price on WhatsApp
  </h2>

  <a
    href="https://wa.me/17038554561?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20a%20price%20quote%20for%20a%20Sri%20Lanka%20airport%20transfer%20or%20private%20driver."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-background font-medium hover:opacity-90"
  >
    Get a Fixed Quote on WhatsApp ↗
  </a>
</section>

    </SpecPage>
  );
}
