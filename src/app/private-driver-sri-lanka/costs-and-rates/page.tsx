import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("private_driver_costs");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
    updated: pageData.updated,
  });
}

const faqs = [
    {
      q: "Is the price per person or per vehicle?",
      a: "All our prices are per vehicle for the entire service, not per person. The daily rate covers the driver, the vehicle, and all related expenses for your group."
    },
    {
      q: "Are there any hidden fees I should know about?",
      a: "No, our pricing is all-inclusive and transparent. The daily rate covers the driver's accommodation, meals, highway tolls, and parking fees. You only need to cover your own accommodation, meals, and entrance fees to attractions."
    },
    {
      q: "How do I pay for the service?",
      a: "We typically require a small advance payment to confirm your booking, with the balance payable to the driver during your tour. We accept various payment methods for your convenience."
    },
    {
      q: "Is USD 64 per day a fair price for a private driver in Sri Lanka?",
      a: "Yes. For a car with a driver, USD 60-75 per day is the fair market range in Sri Lanka, so a quote around USD 64 is reasonable. For a van the equivalent range is USD 80-95 per day. The important check is what the rate includes: it should cover fuel, unlimited mileage for your itinerary, tolls, parking, and the driver's own meals and accommodation. If those are excluded, a lower headline rate usually works out more expensive."
    },
    {
      q: "Does the daily rate change if I have already booked my own hotels?",
      a: "No. Our rate covers the vehicle, the driver, and the driver's own costs, so it is the same whether we arrange your accommodation or you book it yourself. Many travellers book their own hotels and simply hire the driver to link them together, and we are happy to work to an itinerary you have already fixed."
    },
    {
      q: "Do I need to pay more for a longer tour?",
      a: "The daily rate stays the same regardless of tour length, so a ten day tour is simply ten times the daily rate. There is no long-hire surcharge, and no minimum booking period."
    },
];


export default function PrivateDriverCostsPage() {
  const page = getPageById("private_driver_costs");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Transparent, All-Inclusive Pricing
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>We believe in simple, upfront pricing without any surprises. Our private driver service is based on a flat daily rate, which makes budgeting for your Sri Lankan adventure easy and predictable.</p>
          <p>This rate includes a modern, air-conditioned vehicle, a professional English-speaking driver, and all associated costs for the driver and vehicle for the duration of your tour.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What It Costs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Car with driver</h3>
                <p className="text-4xl font-black tracking-tighter text-primary mb-3">USD 60&ndash;75 <span className="text-lg font-bold text-slate-400">/ day</span></p>
                <p className="text-slate-500">Comfortable for two travellers, or three travelling light. The most common choice for couples.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Van with driver</h3>
                <p className="text-4xl font-black tracking-tighter text-primary mb-3">USD 80&ndash;95 <span className="text-lg font-bold text-slate-400">/ day</span></p>
                <p className="text-slate-500">For families and groups of four or more, or anyone travelling with large cases or sports equipment.</p>
            </div>
        </div>
        <p className="text-sm text-slate-400 mt-6">Rates are per vehicle, not per person, and cover the driver&rsquo;s own meals and accommodation. See full <a href="/prices" className="text-primary font-semibold underline underline-offset-4">transfer and tour prices</a>.</p>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Is Your Quote Fair?</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>It is one of the most common questions we see travellers asking each other online: someone has been quoted a daily rate for a ten or fourteen day tour and has no way of knowing whether it is reasonable. Because so few operators publish their numbers, people end up guessing.</p>
          <p>So, plainly: for a car with a driver, anything in the <strong className="text-slate-800">USD 60&ndash;75 per day</strong> range is a fair market rate in Sri Lanka, and <strong className="text-slate-800">USD 80&ndash;95</strong> is fair for a van. A quote in those bands is not someone taking advantage of you.</p>
          <p>What matters far more than the headline number is what sits underneath it. Before comparing two quotes, check they cover the same things:</p>
          <ul className="list-disc list-inside ml-4 space-y-3">
            <li><strong className="text-slate-800">Is the driver&rsquo;s food and lodging included?</strong> This is the single biggest source of unpleasant surprises. If it is excluded, you are paying it separately every night and the &ldquo;cheaper&rdquo; rate is not cheaper.</li>
            <li><strong className="text-slate-800">Is fuel included, and is mileage unlimited?</strong> A low day rate with a distance cap gets expensive on a route like Trincomalee to Kandy.</li>
            <li><strong className="text-slate-800">Are tolls and parking covered?</strong> Expressway tolls add up over a two-week tour.</li>
            <li><strong className="text-slate-800">Is the vehicle size right?</strong> A four-person group in a car quoted at car rates will be uncomfortable for two weeks. Compare like for like.</li>
            <li><strong className="text-slate-800">Does the driver speak good English?</strong> On a long tour your driver is also your guide and translator. This is worth paying for.</li>
          </ul>
          <p>A rate meaningfully <em>below</em> those bands usually means one of the above has been stripped out, or that the driver will be relying on commissions from the gem shops, spice gardens and batik factories they steer you into. That is the real cost of an unusually cheap quote.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What's Included</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Professional, licensed driver</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Modern, comfortable A/C vehicle</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Unlimited mileage for your itinerary</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> All fuel costs</li>
            </ul>
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Driver's meals and accommodation</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Highway tolls and parking fees</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 24/7 support via WhatsApp</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Free SIM card on arrival</li>
            </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Common Questions</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
