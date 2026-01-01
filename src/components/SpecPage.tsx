import Link from "next/link";
import type { PageSpec } from "@/site/spec";
import { HelpfulLinks } from "@/components/HelpfulLinks";
import { BookingStickyBar } from "@/components/BookingStickyBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function SpecPage({ page, children }: { page: PageSpec; children?: React.ReactNode }) {
  return (
    <article className="relative bg-white">
      {/* 1. CINEMATIC HERO: Expanded height and deep contrast */}
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
        <img
          src={page.heroImage || "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp"}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[15s] hover:scale-110"
          alt={page.title}
        />
        {/* Scrim: Essential for white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

        <div className={page.id === 'contact' ? "absolute bottom-0 left-0 right-0 mx-auto max-w-[1600px] px-10 pb-24 z-20" : "absolute bottom-0 left-0 right-0 mx-auto max-w-[1440px] px-8 pb-24 z-20"}>
          <Breadcrumbs page={page} className="mb-6 text-white/70 tracking-widest uppercase text-xs" />
          <h1 className="max-w-4xl text-6xl font-black tracking-tighter text-white drop-shadow-2xl sm:text-8xl leading-[0.9]">
            {page.title.split('|')[0]}
          </h1>
        </div>
      </div>

      {/* 2. MAIN CONTENT: Ultra-wide 1440px layout */}
      <div className={page.id === 'contact' ? "relative z-30 mx-auto max-w-[1600px] px-10" : "relative z-30 mx-auto max-w-[1440px] px-8"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <main className={page.id === 'contact' ? "lg:col-span-12 py-24" : "lg:col-span-8 py-24"}>
            {/* max-w-none removes the 'messy' narrow constraints */}
            <div className="max-w-none space-y-24">
              {children}
            </div>
          </main>

          {page.id !== 'contact' && (
            <aside className="hidden lg:block lg:col-span-4 pt-24">
              <div className="sticky top-32 space-y-12">
                <div className="rounded-[40px] border border-slate-100 bg-slate-50/50 p-10 shadow-sm">
                  <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Navigation</h3>
                  <HelpfulLinks page={page} />
                </div>

                <div className="rounded-[40px] bg-slate-900 p-10 text-white shadow-2xl">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">Expert Help</p>
                  <h3 className="text-2xl font-bold mt-4 leading-tight">Need a custom plan?</h3>
                  <Link href="http://localhost:3000/private-driver-sri-lanka/custom-sri-lanka-itinerary" className="mt-8 w-full rounded-lg bg-foreground py-3 text-background font-bold hover:bg-primary transition-colors text-center block">Book 15-min Video Call</Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {page.id !== 'contact' && (
        <BookingStickyBar price={page.startPrice} label="Private Service from" />
      )}
    </article>
  );
}