"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ItinerariesDropdown from "@/components/ItinerariesDropdown";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // With a fixed black header, text should always be white for visibility.
  const textColorClass = "text-white";
  const logoColorClass = "text-white";

  // Chevron icon for the dropdown
  const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-200">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );

  return (
    <html lang="en">
      <body className="antialiased bg-white m-0 p-0 w-full overflow-x-hidden">

        <header
          className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 bg-slate-950/95 backdrop-blur-md shadow-xl py-3"
          role="banner"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className={`text-xl md:text-2xl font-black tracking-tighter drop-shadow-sm transition-colors ${logoColorClass}`}>
              SRI LANKA <span className="text-amber-500">TRANSFERS</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className={`hidden md:flex items-center gap-8 lg:gap-10 text-xs lg:text-sm font-black uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>

              <Link href="/colombo-airport-transfer/" className="hover:text-amber-500 transition-colors">Airport Taxi</Link>

              <Link href="/private-driver-sri-lanka/" className="hover:text-amber-500 transition-colors">Private Driver</Link>

              <Link href="/sri-lanka-tours/" className="hover:text-amber-500 transition-colors">Tours</Link>
              
              <Link href="/travel-guide/" className="hover:text-amber-500 transition-colors">Travel Guide</Link>
              
              <Link href="/contact/" className="hover:text-amber-500 transition-colors">Contact</Link>
            </nav>

            {/* BOOK BUTTON */}
            <Link
              href="/contact/"
              className="bg-amber-500 text-slate-950 px-5 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              Book Now
            </Link>
          </div>
        </header>

        <main className="relative w-full m-0 p-0 pt-19">
          {children}
        </main>
      </body>
    </html>
  );
}