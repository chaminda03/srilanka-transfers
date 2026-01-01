import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("tours_cultural");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      question: "How many days are needed for the Cultural Triangle?",
      answer: "We recommend at least 3 to 4 days to comfortably explore the main sites like Sigiriya, Polonnaruwa, and Dambulla without rushing. A longer tour can include Anuradhapura and other smaller sites."
    },
    {
      question: "Is it a lot of climbing and walking?",
      answer: "Some sites, like Sigiriya Rock Fortress and the Dambulla Cave Temples, require climbing stairs. We can tailor the itinerary to your fitness level, focusing on more accessible sites if preferred."
    },
    {
        question: "What is the best base location for exploring the area?",
        answer: "Towns like Dambulla and Habarana are excellent bases for exploring the Cultural Triangle, as they are centrally located to most of the major attractions like Sigiriya, Polonnaruwa, and the cave temples."
    },
];


export default function CulturalTrianglePage() {
  const page = getPageById("tours_cultural");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Journey to the Heart of Ancient Lanka
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Step back in time and explore Sri Lanka's magnificent Cultural Triangle, a treasure trove of ancient cities, rock fortresses, and sacred temples. This region was the cradle of Sri Lankan civilization, and its well-preserved ruins tell the story of a rich and powerful history.</p>
          <p>Let us guide you through these UNESCO World Heritage sites. We'll handle all the logistics, so you can immerse yourself in the awe-inspiring history and architectural marvels of the island's past.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Key Heritage Sites</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-12">
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Sigiriya Rock Fortress</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Climb the magnificent 'Lion Rock' to discover the ruins of a 5th-century palace on its summit. The stunning views and ancient frescoes of the 'Heavenly Maidens' make this an unmissable experience.</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Ancient City of Polonnaruwa</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Explore the beautifully preserved ruins of Sri Lanka's second capital. Cycle through the archaeological park to see impressive stupas, statues of the Buddha, and the remains of a grand royal palace.</p>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Dambulla Cave Temple</h3>
                <p className="text-lg text-slate-600 max-w-2xl">This sacred pilgrimage site for 22 centuries, this cave monastery, with its five sanctuaries, is the largest, best-preserved cave-temple complex in Sri Lanka. It contains over 150 stunning Buddha statues and paintings.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Tour FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
