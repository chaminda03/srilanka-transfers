import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/site/config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Driver Sri Lanka | Safe Airport Transfers & Local Guides",
  description:
    "Experience Sri Lanka safely with a professional private driver. Avoid chaotic traffic and narrow roads. Get a licensed driver, fixed prices, and a local guide service for free.",
  path: "/",
});

const routes = [
  { label: "Airport → Colombo", href: "/airport-to-colombo-taxi/" },
  { label: "Airport → Negombo", href: "/airport-to-negombo-taxi/" },
  { label: "Airport → Kandy", href: "/airport-to-kandy-taxi/" },
  { label: "Airport → Galle", href: "/airport-to-galle-taxi/" },
  { label: "Airport → Ella", href: "/airport-to-ella-taxi/" },
  { label: "Airport → Sigiriya", href: "/airport-to-sigiriya-taxi/" },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      
      {/* ================= HERO SECTION ================= */}
      {/* MOBILE FIX: 'min-h-[100dvh]' handles mobile address bars better than h-screen */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-end md:justify-center items-end overflow-hidden bg-slate-950 m-0 p-0">
        
        {/* IMAGE FIX: 'top-0' ensures zero gap at the top */}
        <div className="absolute inset-0 top-0 left-0 z-0">
          <Image
            src="/images/sri-lanka-best_private-airport-transfer-driver.webp"
            alt="Professional private driver in Sri Lanka"
            fill
            priority
            className="object-cover object-left md:object-left"
          />
        </div>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        {/* Mobile Gradient: Dark at bottom to make text readable */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 md:hidden" />
        {/* Desktop Gradient: Dark on right */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/80 to-transparent z-10" />

        {/* CONTENT CARD */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-0 h-full flex flex-col justify-end md:justify-center items-center md:items-end">
          
          {/* MOBILE OPTIMIZATION:
             - w-[95%]: Almost full width on mobile
             - p-6: Smaller padding on mobile
             - mb-4: Lifts it slightly off the bottom edge
          */}
          <div className="w-[98%] md:max-w-xl bg-slate-950/80 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl md:mr-4">
            
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <Badge className="bg-amber-500 text-slate-950 border-none font-bold uppercase tracking-widest text-[9px] md:text-[10px] px-2 py-1">
                Award-Winning Safety
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/5 font-bold uppercase tracking-widest text-[9px] md:text-[10px] px-2 py-1">
                Local Guide Included
              </Badge>
            </div>

            {/* RESPONSIVE TEXT: text-4xl on mobile, text-6xl on desktop */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.0] text-white mb-4 md:mb-6">
              Experience Sri Lanka with a <span className="text-amber-500">Friend at the Wheel</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-200 leading-relaxed font-medium mb-6 md:mb-8">
              Don&apos;t just hire a car; gain a local partner. Skip the stress of chaotic traffic and narrow roads. 
              We know the ins and outs to keep you safe.
            </p>

            <div className="flex flex-col gap-3 md:gap-4">
              <Button asChild size="lg" className="w-full h-14 md:h-16 bg-amber-500 text-slate-950 hover:bg-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl transition-all shadow-xl border-none text-xs md:text-base">
                <Link href="/contact/">
                  {siteConfig.contact.whatsappLabel}
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full h-14 md:h-16 border-2 border-white/20 text-white hover:bg-white hover:text-slate-950 font-black uppercase tracking-widest rounded-xl md:rounded-2xl transition-all bg-transparent text-xs md:text-base">
                <Link href="/prices/">View All Fixed Prices</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR ROUTES ================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">Popular Destinations</h2>
              <p className="text-lg text-slate-500 mt-2 md:mt-4">Transparent, fixed rates for private transfers.</p>
            </div>
            <Link href="/prices/" className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-widest border-b-2 border-amber-600 pb-1 hover:text-slate-900 transition-colors">
              View All Prices →
            </Link>
          </div>

          {/* GRID: 1 Column on Mobile, 3 on Desktop */}
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <Card key={r.href} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 overflow-hidden bg-white rounded-2xl md:rounded-3xl">
                <CardContent className="p-6 md:p-10 space-y-4 md:space-y-6">
                  <div className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight">
                    {r.label}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Licensed Driver • Private
                  </div>
                  <Button asChild variant="outline" className="w-full h-10 md:h-12 rounded-full border-slate-200 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all font-bold text-xs">
                    <Link href={r.href}>Route Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}