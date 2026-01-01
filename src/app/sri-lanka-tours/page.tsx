import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("sri_lanka_tours");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function SriLankaToursPage() {
  const page = getPageById("sri_lanka_tours");

  const tours = [
    {
      title: "Wildlife Safaris",
      text: "Spot leopards in Yala and elephants in Udawalawe.",
      href: "/tours/wildlife-safari-yala-and-udawalawe/",
      img: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants.webp",
      alt: "Safari jeep watching a large elephant herd during a Sri Lanka wildlife tour in Udawalawe National Park."
    },
    {
      title: "Cultural Triangle",
      text: "Explore ancient cities like Sigiriya and Kandy.",
      href: "/tours/cultural-triangle-sigiriya-anuradhapura/",
      img: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
      alt: "Traditional Kandyan dancer in full costume performing with Sigiriya Lion Rock in the background, representing a cultural triangle tour."
    },
    {
      title: "Kandy to Ella Train",
      text: "Experience one of the world's most scenic train journeys.",
      href: "/tours/scenic-train-ride-kandy-to-ella/",
      img: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
      alt: "Couple hanging out of the iconic blue train on the scenic Kandy to Ella journey, a must-do Sri Lanka tour."
    },
    {
      title: "South Coast Beaches",
      text: "Relax on the golden beaches of Galle and Mirissa.",
      href: "/tours/beach-holiday-south-coast/",
      img: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
      alt: "Drone view of colorful fishing boats on the golden sand of a south coast beach in Sri Lanka during a beach holiday tour."
    },
    {
        title: "Adventure & Hiking",
        text: "Hike epic trails in Ella and the Knuckles Range.",
        href: "/tours/adventure-and-hiking-tours/",
        img: "/images/sigiriya-lion-rock-fortress-tourist-view-sri-lanka.webp",
        alt: "Hiker looking over a lush green valley from the peak of Ella Rock during an adventure and hiking tour in Sri Lanka."
    },
    {
        title: "Custom Tours",
        text: "Let us design a personalized itinerary just for you.",
        href: "/private-driver-sri-lanka/custom-sri-lanka-itinerary/",
        img: "/images/femele traveler at vibrant tea plantations of Nuwara Eliya, Sri Lanka.webp",
        alt: "Female traveler overlooking vibrant green tea plantations in Nuwara Eliya, part of a custom Sri Lanka tour."
    }
  ];

  return (
    <SpecPage page={page}>
      
      <section className="mb-24">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Discover Your Perfect<br/> Sri Lankan Adventure.
        </h2>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            Sri Lanka is an island of incredible diversity. Whether you seek ancient wonders, thrilling wildlife encounters, or tranquil beach days, we have a tour for you. Explore our curated experiences or let us build a custom journey based on your interests.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((item, i) => (
            <Link 
              key={i} 
              href={item.href} 
              className="group relative block overflow-hidden rounded-[32px] aspect-[4/3] bg-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Image 
                src={item.img} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                alt={item.alt} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{item.text}</p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1">Explore Tour</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </SpecPage>
  );
}
