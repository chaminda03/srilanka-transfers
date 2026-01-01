import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Image from "next/image";

export async function generateMetadata() {
  const pageData = getPageById("private_driver_meet");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const drivers = [
    {
        name: "Saman",
        specialty: "Cultural Triangle & History Expert",
        bio: "With over 15 years of experience, Saman is a walking encyclopedia of Sri Lankan history. He loves sharing stories of ancient kings and hidden temples with his guests.",
        img: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
        alt: "Saman, a professional Sri Lankan private driver and history expert, smiling in his car with tea plantations in the background."
    },
    {
        name: "Rajith",
        specialty: "Wildlife & Nature Enthusiast",
        bio: "Rajith grew up near Yala National Park and has a keen eye for spotting leopards and exotic birds. His passion for Sri Lanka's wildlife is infectious.",
        img: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants_injeep.jpg",
        alt: "Rajith, a Sri Lankan wildlife tour guide, driving a safari jeep with elephants visible in the background."
    },
    {
        name: "Nishan",
        specialty: "Hill Country & Scenic Routes",
        bio: "Nishan knows the winding roads of the tea country like the back of his hand. He's an expert at finding the most breathtaking viewpoints and the best cups of tea.",
        img: "/images/colombo-airport-transfer-private-driver-name-board.webp",
        alt: "Nishan, a private driver for hill country tours, holding a name board at Colombo airport arrivals."
    }
];

export default function MeetOurDriversPage() {
  const page = getPageById("private_driver_meet");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Your Local Friend on the Road
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Our drivers are more than just chauffeurs; they are the heart and soul of our service. Handpicked for their professionalism, safety record, and deep love for Sri Lanka, they are dedicated to making your journey unforgettable.</p>
          <p>Each driver is a licensed professional, speaks fluent English, and is trained to provide the highest standard of service. They are your guide, your concierge, and your friend on the road.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drivers.map((driver, i) => (
            <div key={i} className="bg-slate-50 rounded-[32px] shadow-sm border border-slate-100/80 overflow-hidden">
                <div className="relative aspect-[4/3] bg-slate-200">
                    <Image 
                        src={driver.img} 
                        fill 
                        className="object-cover" 
                        alt={driver.alt} 
                    />
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800">{driver.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{driver.specialty}</p>
                    <p className="text-slate-500">{driver.bio}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

    </SpecPage>
  );
}
