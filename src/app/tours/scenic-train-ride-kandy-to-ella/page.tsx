import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";
import Link from "next/link";

export async function generateMetadata() {
  const pageData = getPageById("tours_scenic_train");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "Can you guarantee reserved seats?",
      a: "Train tickets in Sri Lanka, especially for reserved seats on the Kandy-Ella route, sell out very quickly. While we do our best to secure them, we recommend booking your tour as far in advance as possible. If reserved seats are unavailable, we can arrange general admission tickets."
    },
    {
      q: "What happens to our luggage?",
      a: "This is the main benefit of our service. Your private driver will take care of all your luggage and meet you at your destination station (e.g., Ella). You get to enjoy the scenic train ride with just a small daypack, completely stress-free."
    },
    {
        q: "Which side of the train has the best views?",
        a: "For the Kandy to Ella journey, the right side of the train generally offers the most spectacular views of the tea plantations and valleys."
    },
];


export default function ScenicTrainRidePage() {
  const page = getPageById("tours_scenic_train");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          The World's Most Beautiful Train Journey
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>The train ride from Kandy to Ella is consistently ranked among the most scenic in the world, and for good reason. The iconic blue train winds its way through lush, emerald-green tea plantations, misty mountains, and charming villages, offering breathtaking views at every turn.</p>
          <p>However, securing tickets and managing luggage can be a challenge. That's where we come in. We handle the logistics, allowing you to simply sit back, relax, and soak in the unforgettable scenery from your window.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">How It Works</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-slate-50 rounded-2xl">
                <div className="text-5xl font-black text-primary/50 mb-2">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">We Book Your Tickets</h3>
                <p className="text-slate-500">We arrange your train tickets as part of your private tour itinerary.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
                <div className="text-5xl font-black text-primary/50 mb-2">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Driver Handles Luggage</h3>
                <p className="text-slate-500">Your driver drops you at the station and transports your main luggage by road.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
                <div className="text-5xl font-black text-primary/50 mb-2">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Enjoy the Ride & Reconnect</h3>
                <p className="text-slate-500">You enjoy the scenic journey, and your driver meets you at your destination.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Train FAQs</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
