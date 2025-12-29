import React from 'react';

interface BookingStickyBarProps {
  price?: string;
  label: string;
}

export function BookingStickyBar({ price = "Contact for Quote", label }: BookingStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-lg px-6 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        
        <div className="flex gap-3">
          <button className="hidden sm:flex items-center gap-2 rounded-full border px-6 py-3 font-medium hover:bg-muted transition-colors">
            💬 WhatsApp
          </button>
          <button className="rounded-full bg-foreground px-8 py-3 font-bold text-background shadow-lg hover:scale-105 transition-transform active:scale-95">
            Book Private Driver
          </button>
        </div>
      </div>
    </div>
  );
}