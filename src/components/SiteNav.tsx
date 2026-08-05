"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * Header + mobile menu.
 *
 * This is the ONLY part of the root layout that needs interactivity. It lives
 * here rather than in layout.tsx so that layout.tsx can stay a server component
 * and export `metadata` — Next.js forbids metadata exports from client
 * components, which previously left the site with no metadataBase, no title
 * template, and no default OG image.
 */

const NAV_LINKS = [
  { href: "/colombo-airport-transfer", label: "Airport Taxi" },
  { href: "/private-driver-sri-lanka", label: "Private Driver" },
  { href: "/sri-lanka-tours", label: "Tours" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- HEADER --- */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] w-full bg-slate-950/95 backdrop-blur-md shadow-xl py-3"
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white">
            SRI LANKA <span className="text-amber-500">TRANSFERS</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-[0.15em] text-white"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="hover:text-amber-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden xs:block bg-amber-500 text-slate-950 px-5 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Book Now
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-[110] p-2 text-white transition-transform active:scale-90"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        id="mobile-menu"
        hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[105] bg-slate-950 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <Link
            href="/"
            className="text-xl font-black tracking-tighter text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SRI LANKA <span className="text-amber-500">TRANSFERS</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white hover:text-amber-500 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8 text-2xl font-black uppercase tracking-widest text-white"
        >
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500">
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 bg-amber-500 text-slate-950 px-10 py-4 rounded-full text-sm tracking-tighter"
          >
            BOOK NOW
          </Link>
        </nav>
      </div>
    </>
  );
}
