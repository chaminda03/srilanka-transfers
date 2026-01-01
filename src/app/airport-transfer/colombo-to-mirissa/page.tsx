import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("at_route_mirissa");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "How long is the transfer from Colombo airport to Mirissa?",
      a: "The journey from CMB Airport to Mirissa takes approximately 3 to 3.5 hours, primarily using the Southern Expressway for a smooth and quick trip."
    },
    {
      q: "Is Mirissa a good place for whale watching?",
      a: "Yes, Mirissa is considered the whale watching capital of Sri Lanka. The peak season is from November to April. We can help you arrange a reputable whale watching tour as part of your itinerary."
    },
    {
        q: "Our flight is delayed. Will the driver wait?",
        a: "Of course. We track your flight's arrival time, so your driver will be there to meet you whenever you land, at no extra charge for the waiting time."
    },
];


export default function AirportToMirissaPage() {
  const page = getPageById("at_route_mirissa");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Your Gateway to Whale Watching & Beaches
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Get your beach holiday started without delay with our private transfer service from Colombo Airport (CMB) to the vibrant coastal town of Mirissa. Known for its stunning crescent beach and as the hub for whale watching, Mirissa is a must-visit destination.</p>
          <p>Travel in comfort and style, arriving relaxed and ready to explore. Your driver will provide a safe and efficient journey, taking you directly to your accommodation in Mirissa.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Transfer Details</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Private, door-to-door service</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Fixed price, no hidden costs</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Professional, English-speaking driver</li>
            </ul>
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Modern A/C Car, Van or SUV</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Meet & greet service included</li>
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 24/7 customer support</li>
            </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Transfer FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
