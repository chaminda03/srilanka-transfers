import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Fleet | Modern & Comfortable Vehicles",
  description:
    "Choose from our modern, air-conditioned vehicles for your Sri Lanka tour. We have a range of cars and vans to suit your needs.",
  path: "/fleet/",
});

const vehicles = [
  {
    src: "/images/sri-lanka-private-airport-transfer-driver_service.webp",
    alt: "Modern car for private tours in Sri Lanka",
    name: "Comfort Car",
    description: "Ideal for solo travelers or couples. Modern, comfortable, and air-conditioned.",
    price: "$50/day",
  },
  {
    src: "/images/SUV vehicle Private Driver Sri Lanka.webp",
    alt: "Spacious SUV for family tours in Sri Lanka",
    name: "Large SUV",
    description: "Perfect for families or small groups. Ample space for luggage and souvenirs.",
    price: "$70/day",
  },
  {
    src: "/images/Sri Lanka Van for group tours.webp",
    alt: "Luxury van for a premium experience in Sri Lanka",
    name: "Luxury Van",
    description: "For those who want to travel in style. Extra legroom and premium features.",
    price: "$90/day",
  },
];

export default function FleetPage() {
  return (
    <main className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 text-center mb-10 md:mb-16">
          Our Fleet
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="shadow-lg border-slate-100 bg-white">
              <div className="relative h-80 w-full rounded-t-2xl overflow-hidden">
                <Image
                  src={vehicle.src}
                  alt={vehicle.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
                <p className="text-slate-700 leading-relaxed">{vehicle.description}</p>
                <p className="text-lg font-bold text-slate-900">{vehicle.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
