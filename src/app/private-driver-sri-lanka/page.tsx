import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import TripPlannerForm from "@/components/TripPlannerForm";

// Metadata needs its own scope
export async function generateMetadata() {
  const pageData = getPageById("private_driver");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function PrivateDriverSriLankaPage() {
  // 1. DEFINE PAGE HERE - This prevents the ReferenceError
  const page = getPageById("private_driver");

  const itineraries = [
    {
      title: "7-Day Signature Tour",
      text: "Explore Sigiriya, Kandy, and the stunning tea country.",
      href: "/private-driver-sri-lanka/8-day-itinerary",
      img: "/images/sigiriya-lion-rock-fortress-tourist-view-sri-lanka.webp",
      alt: "Tourist looking up at the majestic Sigiriya Lion Rock Fortress, a key part of a 7-day Sri Lanka private driver tour.",
    },
    {
      title: "10-Day Culture & Coast",
      text: "From ancient ruins to the pristine southern beaches.",
      href: "/private-driver-sri-lanka/10-day-itinerary/",
      img: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
      alt: "Aerial view of colorful fishing boats on a turquoise beach, featured in the 10-day Sri Lanka culture and coast tour.",
    },
    {
      title: "14-Day Grand Exploration",
      text: "The complete journey covering the north and east.",
      href: "/private-driver-sri-lanka/14-day-itinerary/",
      img: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
      alt: "A couple enjoying the view from the famous blue train during a 14-day grand exploration tour of Sri Lanka.",
    },

  ];

  return (
    <SpecPage page={page}>
      
      {/* SECTION 1: LUXURY INTRO (Wide, No Box) */}
      <section className="mb-24">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Your island journey, <br/>
          <span className="text-slate-400 font-medium">perfectly chauffeured.</span>
        </h2>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            Hire a dedicated local expert and a modern vehicle for your entire stay. 
            No schedules to follow—just the freedom to stop whenever you see something beautiful.
          </p>
        </div>
      </section>

      {/* SECTION 2: CINEMATIC CARDS (The "Anti-Messy" Grid) */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Inspiration</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((item, i) => (
            <Link 
              key={i} 
              href={item.href} 
              className="group relative block overflow-hidden rounded-[32px] aspect-[3/4] bg-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Image 
                src={item.img} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                alt={item.alt} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{item.text}</p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1">View Itinerary</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: PLANNING CLUSTER (New) */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Plan Your Trip</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/private-driver-sri-lanka/costs-and-rates/" className="block p-8 rounded-[32px] bg-slate-50 border border-slate-100/80 shadow-sm hover:bg-white hover:border-slate-200/60 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Costs & Rates</h3>
            <p className="text-slate-500">Understand our simple, all-inclusive daily pricing.</p>
          </Link>
          <Link href="/private-driver-sri-lanka/benefits-vs-self-drive/" className="block p-8 rounded-[32px] bg-slate-50 border border-slate-100/80 shadow-sm hover:bg-white hover:border-slate-200/60 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Benefits vs Self-Drive</h3>
            <p className="text-slate-500">Why a private driver is the best way to experience Sri Lanka.</p>
          </Link>
          <Link href="/private-driver-sri-lanka/meet-our-drivers/" className="block p-8 rounded-[32px] bg-slate-50 border border-slate-100/80 shadow-sm hover:bg-white hover:border-slate-200/60 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Meet Our Drivers</h3>
            <p className="text-slate-500">Get to know our friendly and professional local experts.</p>
          </Link>
        </div>
      </section>

      {/* SECTION 4: THE PLANNER (High Contrast) */}
      <section className="bg-slate-900 rounded-[60px] p-8 md:p-20 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-6">Ready to start?</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-sm">
              Tell us your dates and interests. We'll send a custom route and 
              fixed-price quote via WhatsApp.
            </p>
          </div>
          <div className="bg-white rounded-[40px] p-8 text-slate-900 shadow-2xl">
            <TripPlannerForm />
          </div>
        </div>
        
        {/* Decorative Blur */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      </section>

    </SpecPage>
  );
}