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
  });
}

const faqs = [
    {
      question: "Is the price per person or per vehicle?",
      answer: "All our prices are per vehicle for the entire service, not per person. The daily rate covers the driver, the vehicle, and all related expenses for your group."
    },
    {
      question: "Are there any hidden fees I should know about?",
      answer: "No, our pricing is all-inclusive and transparent. The daily rate covers the driver's accommodation, meals, highway tolls, and parking fees. You only need to cover your own accommodation, meals, and entrance fees to attractions."
    },
    {
      question: "How do I pay for the service?",
      answer: "We typically require a small advance payment to confirm your booking, with the balance payable to the driver during your tour. We accept various payment methods for your convenience."
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
