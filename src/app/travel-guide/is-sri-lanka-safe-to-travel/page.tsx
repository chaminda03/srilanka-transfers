import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("guide_safety");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "Is Sri Lanka safe for solo female travelers?",
      a: "Yes, many solo females travel through Sri Lanka safely. Standard precautions are advised, such as dressing modestly, especially when visiting temples, avoiding walking alone at night in isolated areas, and using reputable transport like a pre-booked private driver."
    },
    {
      q: "What about health and vaccinations?",
      a: "Consult your doctor for recommended vaccinations. It's advisable to drink bottled water, eat from reputable restaurants, and protect yourself from mosquitoes to prevent dengue fever."
    },
    {
        q: "Are there any common scams to be aware of?",
        a: "Like in many tourist destinations, be cautious of overly friendly strangers offering unsolicited help or gem/spice garden tours that may be overpriced. Using a trusted private driver helps you avoid these situations entirely."
    },
];


export default function GuideSafetyPage() {
  const page = getPageById("guide_safety");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          A Guide to Safe & Smart Travel
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Sri Lanka is widely considered a safe destination for tourists. The people are famously warm and welcoming. However, like any travel, being informed and prepared is key to a smooth and enjoyable trip.</p>
          <p>This guide covers essential safety tips, from road safety and health precautions to respecting local culture. Following these simple guidelines will help ensure your Sri Lankan adventure is safe and memorable for all the right reasons.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Key Safety Tips</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
            <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Use a Trusted Driver:</strong> A professional driver is your biggest safety asset, ensuring you avoid transport scams and navigate roads safely.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Respect Local Customs:</strong> Dress modestly when visiting religious sites (cover shoulders and knees). Always ask for permission before taking photos of people.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Stay Hydrated:</strong> Drink plenty of bottled water, especially in the heat. Avoid tap water.</span></li>
            </ul>
            <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Be Sun Smart:</strong> The tropical sun is strong. Use sunscreen, wear a hat, and stay in the shade during peak hours.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Secure Your Valuables:</strong> Use hotel safes for passports and extra cash. Be mindful of your belongings in crowded areas.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Food Safety:</strong> Eat at busy, reputable restaurants where food is fresh. Be cautious with street food if you have a sensitive stomach.</span></li>
            </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Safety FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
