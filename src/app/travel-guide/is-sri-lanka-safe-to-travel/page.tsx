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
    updated: pageData.updated,
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
    {
        q: "Is it safe to travel to Ella and Nuwara Eliya during the rainy season?",
        a: "In normal conditions, yes. Between May and September the hill country sees regular showers, but these are typically short afternoon or overnight bursts rather than continuous rain, and roads stay open. The exception is a period of sustained heavy rainfall, which can trigger localised flooding and landslides on hill routes. Before travelling, check the Department of Meteorology forecast and any NBRO landslide warnings for the districts on your route, and speak to your driver — they will know which roads are affected and can reroute or reorder your itinerary."
    },
    {
        q: "What happens to my transfer if there is flooding or a landslide on my route?",
        a: "We track conditions on the day and will contact you if your route is affected. In most cases an alternative road is available and the journey simply takes longer, so we adjust the pickup time rather than cancel. Where a route is genuinely impassable we will work with you to reorder your itinerary or reschedule the transfer."
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
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Weather, Floods & Landslides</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Weather is the one safety topic that catches travellers out, because the headlines rarely match the reality on the ground. Sri Lanka&rsquo;s two monsoons bring heavy seasonal rain, and in a bad spell that can mean localised flooding in low-lying areas and landslides on hill roads. What it almost never means is that the whole island is unsafe.</p>
          <p>Disruption tends to be sharply local. A route through the hills may be affected while the coast an hour away is dry, so the practical response is usually to reroute or reorder your itinerary rather than cancel a trip.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Where to check</h3>
                <ul className="space-y-3 text-slate-500">
                    <li><strong className="text-slate-700">Department of Meteorology</strong> &mdash; the official forecast and severe weather advisories.</li>
                    <li><strong className="text-slate-700">NBRO</strong> &mdash; issues landslide early warnings by district, which matter most around Nuwara Eliya, Ramboda, Badulla and Kandy.</li>
                    <li><strong className="text-slate-700">Disaster Management Centre</strong> &mdash; national emergency information, hotline <strong className="text-slate-700">117</strong>.</li>
                </ul>
                <p className="text-sm text-slate-400 mt-4">Treat official district-level warnings as the source of truth, not social media reports.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Travelling in heavy rain</h3>
                <ul className="space-y-3 text-slate-500">
                    <li>Allow extra time on hill routes &mdash; a wet Kandy to Nuwara Eliya drive can take considerably longer than the dry-season estimate.</li>
                    <li>Keep a buffer day before an international flight so a delayed road day never threatens your departure.</li>
                    <li>Avoid self-driving in the hills during heavy rain. Visibility, surface water and rockfall make local road knowledge genuinely valuable.</li>
                    <li>Be cautious around swollen rivers and waterfalls. Water levels at spots like Ravana Falls rise fast and currents get dangerous.</li>
                    <li>Stay in touch with your driver on the morning of a transfer &mdash; they will have current road information well before it reaches any website.</li>
                </ul>
            </div>
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
