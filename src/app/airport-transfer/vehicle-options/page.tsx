import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Image from "next/image";

export async function generateMetadata() {
  const pageData = getPageById("at_vehicles");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const vehicles = [
    {
        name: "Comfort Car (Sedan)",
        capacity: "1-3 Passengers",
        luggage: "2 large bags",
        description: "Perfect for solo travelers, couples, or small families. Our fleet includes modern sedans like the Toyota Prius and Axio, offering a comfortable and efficient ride.",
        img: "/images/sri-lanka-private-airport-transfer-driver-service.webp" 
    },
    {
        name: "Luxury SUV",
        capacity: "1-4 Passengers",
        luggage: "4 large bags",
        description: "Travel with extra comfort and space. Our SUVs are ideal for families or those with more luggage, providing a smooth journey on all types of Sri Lankan roads.",
        img: "/images/SUV vehicle Private Driver Sri Lanka.webp"
    },
    {
        name: "Spacious Van",
        capacity: "4-8 Passengers",
        luggage: "Multiple bags",
        description: "The ideal choice for larger groups or families. Our comfortable vans, like the Toyota KDH, ensure that your whole party can travel together with ample room for luggage.",
        img: "/images/Sri Lanka Van for group tours.webp"
    }
];

export default function VehicleOptionsPage() {
  const page = getPageById("at_vehicles");

  return (
    <SpecPage page={page}>
      


      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Travel in Comfort and Style
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>We maintain a modern, clean, and fully air-conditioned fleet to ensure your journey in Sri Lanka is as comfortable as possible. Whether you're traveling solo, as a couple, or with a large group, we have the perfect vehicle to suit your needs.</p>
          <p>All our vehicles are regularly serviced and inspected to meet the highest safety standards.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, i) => (
            <div key={i} className="bg-slate-50 rounded-[32px] shadow-sm border border-slate-100/80 overflow-hidden">
                <div className="relative aspect-video bg-slate-200">
                    <Image 
                        src={vehicle.img} 
                        fill 
                        className="object-cover" 
                        alt={vehicle.name} 
                    />
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800">{vehicle.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{vehicle.capacity} | {vehicle.luggage}</p>
                    <p className="text-slate-500">{vehicle.description}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

    </SpecPage>
  );
}