import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const page = getPageById("hub_airport");

const HERO_IMAGE = "/images/colombo-airport-transfer-private-driver-name-board.webp";

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  image: HERO_IMAGE,
});

export default function ColomboAirportTransferPage() {
  return (
    <SpecPage 
      page={{ 
        ...page, 
        /* FIX: Your SpecPage code uses: src={page.heroImage || ...}
           So we must use "heroImage" exactly.
        */
        heroImage: HERO_IMAGE 
      }}
    >
      
      {/* INTRO */}
      <section className="space-y-4 mb-10 mt-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1 text-xs uppercase tracking-wider font-bold">
            Private Service
          </Badge>
          <Badge variant="outline" className="text-slate-600 border-slate-300 px-3 py-1 text-xs uppercase tracking-wider font-bold">
            Fixed Price
          </Badge>
        </div>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 font-medium">
          Looking for a reliable airport taxi in Colombo? We provide private
          Colombo Airport transfers with fixed prices, English-speaking drivers,
          and direct hotel drop-off across Sri Lanka.
        </p>
      </section>

      {/* WHY PRE-BOOK */}
      <section className="space-y-6 pt-2 mb-10">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">Why Pre-Book an Airport Taxi in Colombo</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Enhanced Cards with Icons */}
          {[
            { title: "Fixed pricing", desc: "Know your price before arrival. No meter. No surprises." },
            { title: "Flight-tracked pickup", desc: "Your driver waits even if your flight is delayed." },
            { title: "Private vehicle", desc: "No sharing with other passengers." },
            { title: "English-speaking driver", desc: "Clear communication after a long flight." }
          ].map((item) => (
            <Card key={item.title} className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                   {/* Simple Checkmark Icon */}
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FIRST NIGHT PATTERN - Tip Box Design */}
      <section className="space-y-4 pt-2 mb-10">
        <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Airport Transfers for First-Night Stays
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Many travelers arriving at Colombo Airport choose a short transfer to
              <strong className="text-amber-600"> Colombo city</strong> or <strong className="text-amber-600"> Negombo</strong> for the first
              night, then continue inland the next day.
            </p>
        </div>
      </section>

      {/* ROUTES - Big Finger-Friendly Buttons */}
      <section className="space-y-6 pt-2 mb-12">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">
          Explore Our Transfer Services
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
             { label: "Airport → Galle", href: "/airport-transfer/colombo-to-galle/" },
             { label: "Airport → Kandy", href: "/airport-transfer/colombo-to-kandy/" },
             { label: "Airport → Mirissa", href: "/airport-transfer/colombo-to-mirissa/" },
             { label: "Our Vehicle Options", href: "/airport-transfer/vehicle-options/" },
             { label: "How to Book", href: "/airport-transfer/booking-process/" },
             { label: "All Prices", href: "/prices/" },
          ].map((route) => (
             <Button key={route.href} asChild variant="outline" className="h-14 justify-between px-6 border-slate-200 hover:border-amber-500 hover:text-amber-600 text-base font-bold text-slate-800 group bg-white shadow-sm">
                <Link href={route.href}>
                    {route.label}
                    <span className="text-slate-300 group-hover:text-amber-500 transition-colors">→</span>
                </Link>
            </Button>
          ))}
        </div>
      </section>

      {/* CTA - Dark Mode Card */}
      <section className="pt-2">
        <div className="bg-slate-950 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight relative z-10">
              Book Your Colombo Airport Transfer
            </h2>

            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg relative z-10">
              Skip airport taxi queues and price confusion. Book a private
              Colombo Airport transfer with a fixed price.
            </p>

            <Button asChild size="lg" className="bg-amber-500 hover:bg-white hover:text-slate-900 text-slate-900 font-black h-14 px-8 rounded-full text-base shadow-lg transition-all relative z-10 uppercase tracking-wide">
              <Link href="/contact/">Get a Fixed Price on WhatsApp</Link>
            </Button>
        </div>
      </section>
    </SpecPage>
  );
}