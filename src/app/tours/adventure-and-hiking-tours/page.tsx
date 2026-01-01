import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("tours_adventure");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "What is the difficulty level of the hikes?",
      a: "We offer a range of hikes suitable for various fitness levels. Hikes like Little Adam's Peak are relatively easy, while trails in the Knuckles Mountain Range can be more challenging. We will tailor the adventure to your preference."
    },
    {
      q: "What should I wear for hiking in Sri Lanka?",
      a: "Lightweight, moisture-wicking clothing is recommended. A good pair of walking shoes or hiking boots is essential. For higher altitudes like Horton Plains, a light jacket is also a good idea as it can get chilly."
    },
    {
        q: "Is white water rafting safe for beginners?",
        a: "Yes, the rafting in Kitulgala is suitable for beginners and is managed by experienced, certified guides who prioritize your safety. They provide all necessary equipment and a safety briefing beforehand."
    },
];


export default function AdventureToursPage() {
  const page = getPageById("tours_adventure");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Answer the Call of the Wild
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>For those who seek a thrill, Sri Lanka's diverse landscapes offer a natural adventure park. From misty mountains and cascading waterfalls to rushing rivers, there are endless opportunities to hike, climb, and explore the island's untamed beauty.</p>
          <p>Our adventure tours are designed to get your heart pumping. With a private driver to manage all the travel and logistics, you can focus on the challenge and the stunning rewards of your chosen adventure.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Top Adventures</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-12">
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Hiking in Ella</h3>
                <p className="text-lg text-slate-600 max-w-2xl">The charming town of Ella is a hiker's paradise. Climb to the top of Ella Rock for panoramic views, or take the easier but equally rewarding walk to Little Adam's Peak. The Nine Arch Bridge is another iconic photo spot.</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Knuckles Mountain Range</h3>
                <p className="text-lg text-slate-600 max-w-2xl">A UNESCO World Heritage Site, the Knuckles Range offers some of Sri Lanka's most rugged and rewarding trekking routes. Explore diverse ecosystems, remote villages, and untouched forests.</p>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">White Water Rafting in Kitulgala</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Get your adrenaline fix on the Kelani River in Kitulgala, the location where 'The Bridge on the River Kwai' was filmed. It's the perfect spot for a thrilling white water rafting experience.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Adventure FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
