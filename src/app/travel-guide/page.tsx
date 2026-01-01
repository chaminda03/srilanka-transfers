import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById, getPagesByIds } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("travel_guide");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function TravelGuidePage() {
  const page = getPageById("travel_guide");
  
  const guides = getPagesByIds([
    "guide_safety", 
    "guide_best_time", 
    "guide_visa", 
    "guide_connectivity", 
    "guide_packing", 
    "guide_food"
  ]);

  return (
    <SpecPage page={page}>
      
      <section className="mb-24">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Your Essential Sri Lanka Travel Planner
        </h2>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            Planning a trip to a new country can be overwhelming. This guide is designed to answer all your questions, from the essentials of getting a visa to the fun of trying local food. We're here to help you prepare for an unforgettable journey.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((item) => (
            <Link 
              key={item.id} 
              href={item.path} 
              className="block p-8 rounded-[32px] bg-slate-50 border border-slate-100/80 shadow-sm hover:bg-white hover:border-slate-200/60 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title.split('|')[0]}</h3>
              <p className="text-slate-500 text-sm">{item.description}</p>
              <span className="mt-4 block text-xs font-bold uppercase tracking-widest text-primary">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

    </SpecPage>
  );
}
