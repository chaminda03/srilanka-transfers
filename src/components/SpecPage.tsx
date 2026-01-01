"use client";

import Link from "next/link";
import Image from "next/image";
import type { PageSpec } from "@/site/spec";
import { HelpfulLinks } from "@/components/HelpfulLinks";
import { BookingStickyBar } from "@/components/BookingStickyBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useState, useEffect } from "react";

export function SpecPage({ page, children }: { page: PageSpec; children?: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ARCHITECT TIP: Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <article className="relative bg-white">
      {/* 1. CINEMATIC HERO */}
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

      {/* MOBILE NAVIGATION ARCHITECTURE */}
      {page.id !== 'contact' && (
        <>
          {/* Hamburger / Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-6 right-6 z-[101] rounded-full bg-white/95 p-3 text-slate-900 shadow-2xl backdrop-blur-sm transition-all active:scale-95 lg:hidden border border-slate-200"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              // FIXED "X" Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              // PRO Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>

          {/* Slide-out Menu Overlay */}
          <div 
            className={`fixed inset-0 z-[100] flex flex-col bg-white transition-transform duration-300 ease-in-out lg:hidden ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto">
              <div className="space-y-10 pb-12">
                <div>
                  <h3 className="mb-8 text-xs font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-100 pb-2">
                    Travel Guide Menu
                  </h3>
                  <div className="mobile-nav-wrapper text-xl font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>
                    <HelpfulLinks page={page} />
                  </div>
                </div>

                <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest opacity-80">Local Expertise</p>
                  <h3 className="text-2xl font-bold mt-4 leading-tight">Need a custom<br/>itinerary?</h3>
                  <Link 
                    href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-8 w-full rounded-xl bg-white py-4 text-slate-950 font-bold hover:bg-primary transition-all text-center block"
                  >
                    Book Itinerary Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className={page.id === 'contact' ? "relative z-30 mx-auto max-w-[1600px] px-4 sm:px-10" : "relative z-30 mx-auto max-w-[1440px] px-4 sm:px-8"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <main className={page.id === 'contact' ? "lg:col-span-12 py-24" : "lg:col-span-8 py-24"}>
            <div className="max-w-none space-y-24">
              {children}
            </div>
          </main>

          {/* DESKTOP ASIDE (Hidden on Mobile) */}
          {page.id !== 'contact' && (
            <aside className="hidden lg:block lg:col-span-4 pt-12 lg:pt-24">
              <div className="lg:sticky lg:top-32 space-y-8 lg:space-y-12">
                <div className="rounded-3xl lg:rounded-[40px] border border-slate-100 bg-slate-50/50 p-6 lg:p-10 shadow-sm">
                  <h3 className="mb-6 lg:mb-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Navigation</h3>
                  <HelpfulLinks page={page} />
                </div>

                <div className="rounded-3xl lg:rounded-[40px] bg-slate-900 p-6 lg:p-10 text-white shadow-2xl">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">Ask a Local Expert</p>
                  <h3 className="text-2xl font-bold mt-4 leading-tight">Need a custom plan?</h3>
                  <Link href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" className="mt-8 w-full rounded-lg bg-foreground py-3 text-background font-bold hover:bg-primary transition-colors text-center block">Book Custom Itinerary Call</Link>
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