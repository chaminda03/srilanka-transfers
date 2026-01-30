// Booking Sticky Bar

import Link from "next/link";
import React from 'react';
import { siteConfig } from "@/site/config"; // ✅ Import Config

interface BookingStickyBarProps {
  price?: string;
  label: string;
}

export function BookingStickyBar({ price = "Contact for Quote", label }: BookingStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/90 backdrop-blur-lg px-6 py-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        
        <div className="flex gap-3">
          {/* ✅ UPDATED: Uses config for number (No + sign) */}
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} 
            aria-label="Chat on WhatsApp" 
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
          >
            💬 WhatsApp
          </a>

          {/* ✅ EXISTING: Direct link to contact form */}
          <Link 
            href="/contact#booking-form" 
            aria-label="Book private driver" 
            className="rounded-full bg-foreground px-8 py-3 font-bold text-background shadow-lg hover:scale-105 transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
          >
            Book Private Driver
          </Link>
        </div>
      </div>
    </div>
  );
}