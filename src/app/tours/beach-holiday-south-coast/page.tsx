import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("tours_beach");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      question: "Which is the best beach for surfing?",
      answer: "Hikkaduwa and Weligama are fantastic for beginner and intermediate surfers. For more advanced waves, Arugam Bay on the east coast is legendary, particularly from April to October."
    },
    {
      question: "Can I go whale watching from the south coast?",
      answer: "Absolutely. Mirissa is the whale watching capital of Sri Lanka. The best season is from November to April when blue whales, sperm whales, and dolphins are frequently spotted."
    },
    {
        question: "Is it better to stay in one beach town or move around?",
        answer: "With a private driver, it's easy to do both! You can base yourself in one town like Unawatuna or Mirissa and take day trips to nearby beaches. Or, we can design a tour that has you staying in a few different coastal towns to experience their unique vibes."
    },
];


export default function BeachHolidayPage() {
  const page = getPageById("tours_beach");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Golden Sands & Azure Waters
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Discover the idyllic southern coast of Sri Lanka, a paradise of palm-fringed beaches, charming colonial towns, and vibrant marine life. Whether you want to relax on the sand, ride the perfect wave, or explore historic forts, the south coast has it all.</p>
          <p>A private driver gives you the ultimate flexibility to explore this stunning coastline at your own pace. Hop between beaches, find hidden coves, and dine at the best local seafood spots without a worry.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Coastal Hotspots</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-12">
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Galle Fort</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Explore the charming cobblestone streets of this UNESCO World Heritage Site. This 17th-century Dutch fort is a living monument filled with boutique shops, art galleries, and historic churches.</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Mirissa & Weligama</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Mirissa is the hub for whale watching and boasts a beautiful crescent-shaped beach lined with lively restaurants. Nearby, Weligama Bay is one of the best places in Sri Lanka to learn to surf.</p>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Unawatuna & Hikkaduwa</h3>
                <p className="text-lg text-slate-600 max-w-2xl">Unawatuna offers a lively and sheltered bay perfect for swimming, while Hikkaduwa is famous for its coral reefs, surfing, and vibrant nightlife.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Beach FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
