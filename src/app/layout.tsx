"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // FIX: Detect if we are on a "White Page" (like the blog)
  const isWhitePage = pathname?.includes("/blog/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on scroll state and page type
  const textColorClass = isScrolled 
    ? "text-white" 
    : (isWhitePage ? "text-slate-950" : "text-white");

  const logoColorClass = isScrolled
    ? "text-white"
    : (isWhitePage ? "text-slate-950" : "text-white");

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
          className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 pointer-events-none
            ${isScrolled ? "bg-slate-950/95 backdrop-blur-md shadow-xl py-3" : "bg-transparent py-4 md:py-6"}
          `}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between pointer-events-auto">
            
            {/* LOGO */}
            <Link href="/" className={`text-xl md:text-2xl font-black tracking-tighter drop-shadow-sm transition-colors ${logoColorClass}`}>
              SRI LANKA <span className="text-amber-500">TRANSFERS</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className={`hidden md:flex items-center gap-8 lg:gap-10 text-xs lg:text-sm font-black uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>
              
              <Link href="/colombo-airport-transfer/" className="hover:text-amber-500 transition-colors">Airport Taxi</Link>
              
              <Link href="/private-driver-sri-lanka/" className="hover:text-amber-500 transition-colors">Private Driver</Link>

              {/* --- NEW DROPDOWN MENU: ITINERARIES --- */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-amber-500 transition-colors py-4">
                  ITINERARIES <ChevronDown />
                </button>

                {/* The Dropdown Box */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white text-slate-900 rounded-xl shadow-2xl p-4 w-64 border border-slate-100 flex flex-col gap-2">
                    
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-3 pb-1 border-b border-slate-100 mb-1">
                      Popular Tours
                    </div>

                    <Link href="/private-driver-sri-lanka/8-day-itinerary/" className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">
                      8 Days: Essentials
                    </Link>
                    <Link href="/private-driver-sri-lanka/10-day-itinerary/" className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">
                      10 Days: Adventure
                    </Link>
                    <Link href="/private-driver-sri-lanka/14-day-itinerary/" className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors">
                      14 Days: Grand Tour
                    </Link>
                    <Link href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-xs font-bold hover:text-amber-600 transition-colors text-amber-600">
                      Build Custom Plan →
                    </Link>
                  </div>
                </div>
              </div>
              {/* --- END DROPDOWN --- */}

              <Link href="/blog/safe-travel-sri-lanka/" className="hover:text-amber-500 transition-colors">Safe Travel</Link>
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

        <main className="relative w-full m-0 p-0">
          {children}
        </main>
      </body>
    </html>
  );
}