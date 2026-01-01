import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("tours_wildlife");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "What is the best time of year for a wildlife safari?",
      a: "The dry season, from May to September, is generally the best time for wildlife viewing in parks like Yala and Udawalawe, as animals congregate around water sources."
    },
    {
      q: "Are safari jeep tours included in the price?",
      a: "We arrange the safari jeep and a knowledgeable guide for you. The cost of the jeep is included in our tour packages. Park entrance fees are typically paid separately upon arrival."
    },
    {
        q: "Is a leopard sighting guaranteed in Yala?",
        a: "Yala National Park has one of the highest densities of leopards in the world, so chances are high. However, these are wild animals in their natural habitat, so sightings can never be 100% guaranteed."
    },
];


export default function WildlifeSafariPage() {
  const page = getPageById("tours_wildlife");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Into the Wild Heart of Sri Lanka
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Embark on an unforgettable journey into Sri Lanka's celebrated national parks. A wildlife safari is a must-do experience, offering the chance to see majestic elephants, elusive leopards, and a vibrant array of birdlife in their natural habitats.</p>
          <p>We partner with the best local guides and jeep drivers to give you a safe, respectful, and thrilling safari experience. Whether it's the elephant herds of Udawalawe or the leopard territories of Yala, we'll get you to the heart of the action.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Featured Parks</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-12">
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Yala National Park</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Famous for its high density of leopards, Yala offers a dramatic landscape of scrub jungle, rocky outcrops, and coastal lagoons. It's the premier destination for those hoping to spot the elusive Sri Lankan leopard.</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Udawalawe National Park</h3>
                <p className="text-lg text-slate-600 max-w-2xl">If you love elephants, Udawalawe is paradise. Home to a large resident population, elephant sightings are virtually guaranteed. The park's open grasslands make for fantastic viewing and photography opportunities.</p>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Minneriya & Kaudulla National Parks</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Witness 'The Gathering,' an incredible natural spectacle where hundreds of elephants congregate around the Minneriya Tank during the dry season. It's one of Asia's great wildlife events.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Safari FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
