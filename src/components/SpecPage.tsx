"use client";

import Link from "next/link";
import Image from "next/image";
import type { PageSpec } from "@/site/spec";
import { HelpfulLinks } from "@/components/HelpfulLinks";
import { BookingStickyBar } from "@/components/BookingStickyBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/**
 * ARCHITECT NOTES:
 * 1. Mobile Menu: Removed state/logic as it is now handled globally in layout.tsx.
 * 2. Z-Index: Maintained z-30 for content to ensure it sits below the fixed layout header (z-100).
 * 3. Hero: Preserved the cinematic scale and split-title logic for "Private Driver Sri Lanka" branding.
 */

export function SpecPage({ page, children }: { page: PageSpec; children?: React.ReactNode }) {
  return (
    <article className="relative bg-white">
      {/* 1. CINEMATIC HERO: Expanded height and deep contrast */}
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
        <Image
          src={page.heroImage || "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp"}
          className="object-cover opacity-90 transition-transform duration-[15s] hover:scale-110"
          alt={page.title}
          fill
          priority
          sizes="100vw"
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

      {/* NOTE: Mobile Hamburger Menu was removed from here. 
          It is now managed in layout.tsx to prevent Z-index conflicts.
      */}

      {/* 2. MAIN CONTENT: Ultra-wide layout */}
      <div className={page.id === 'contact' ? "relative z-30 mx-auto max-w-[1600px] px-4 sm:px-10" : "relative z-30 mx-auto max-w-[1440px] px-4 sm:px-8"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          <main className={page.id === 'contact' ? "lg:col-span-12 py-24" : "lg:col-span-8 py-24"}>
            {/* max-w-none removes the 'messy' narrow constraints */}
            <div className="max-w-none space-y-24">
              {children}
            </div>
          </main>

          {/* SIDEBAR: Visible only on Desktop (lg and up) */}
          {page.id !== 'contact' && (
            <aside className="hidden lg:block lg:col-span-4 pt-12 lg:pt-24">
              <div className="lg:sticky lg:top-32 space-y-8 lg:space-y-12">
                
                {/* Navigation Widget */}
                <div className="rounded-3xl lg:rounded-[40px] border border-slate-100 bg-slate-50/50 p-6 lg:p-10 shadow-sm">
                  <h3 className="mb-6 lg:mb-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 font-black">
                    Travel Guide
                  </h3>
                  <HelpfulLinks page={page} />
                </div>

                {/* Call to Action Widget */}
                <div className="rounded-3xl lg:rounded-[40px] bg-slate-900 p-6 lg:p-10 text-white shadow-2xl">
                  <p className="text-amber-500 font-bold text-xs uppercase tracking-widest">Ask a Local Expert</p>
                  <h3 className="text-2xl font-black mt-4 leading-tight">Need a custom itinerary?</h3>
                  <Link 
                    href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" 
                    className="mt-8 w-full rounded-lg bg-white py-3 text-slate-950 font-black hover:bg-amber-500 transition-colors text-center block text-xs tracking-widest uppercase"
                  >
                    Start Planning
                  </Link>
                </div>

              </div>
            </aside>
          )}
        </div>
      </div>

      {/* 3. STICKY FOOTER BAR */}
      {page.id !== 'contact' && (
        <BookingStickyBar price={page.startPrice} label="Private Service from" />
      )}
    </article>
  );
}