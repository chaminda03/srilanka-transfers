"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ItinerariesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus first menuitem when opening and support arrow navigation
  useEffect(() => {
    if (!open) return;
    const el = ref.current?.querySelectorAll('[role="menuitem"]') as NodeListOf<HTMLElement> | undefined;
    if (el && el.length > 0) {
      el[0].focus();
    }

    function onKey(e: KeyboardEvent) {
      if (!el || el.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      const items = Array.from(el);
      const idx = items.indexOf(active as HTMLElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = items[(idx + 1) % items.length];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = items[(idx - 1 + items.length) % items.length];
        prev.focus();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen((v) => !v); }}
        className="flex items-center gap-1 hover:text-amber-500 transition-colors py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 rounded"
      >
        ITINERARIES
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        role="menu"
        aria-hidden={!open}
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ease-out transform ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
      >
        <div className="bg-white text-slate-900 rounded-xl shadow-2xl p-4 w-64 border border-slate-100 flex flex-col gap-2">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-3 pb-1 border-b border-slate-100 mb-1">Popular Tours</div>

          <Link role="menuitem" href="/private-driver-sri-lanka/8-day-itinerary/" tabIndex={-1} className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">8 Days: Essentials</Link>
          <Link role="menuitem" href="/private-driver-sri-lanka/10-day-itinerary/" tabIndex={-1} className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">10 Days: Adventure</Link>
          <Link role="menuitem" href="/private-driver-sri-lanka/14-day-itinerary/" tabIndex={-1} className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">14 Days: Grand Tour</Link>
          <Link role="menuitem" href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" tabIndex={-1} className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors text-amber-600">Build Custom Plan →</Link>
        </div>
      </div>
    </div>
  );
}
