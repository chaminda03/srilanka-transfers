"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { siteConfig } from "@/site/config"; // ✅ Import Config

export default function TripPlannerForm() {
  const [days, setDays] = useState("7 days");
  const [arrival, setArrival] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    { label: "Beaches", icon: "🏖️" },
    { label: "Culture & History", icon: "🏛️" },
    { label: "Nature & Views", icon: "⛰️" },
    { label: "Wildlife & Safari", icon: "🐘" },
    { label: "Honeymoon", icon: "💍" },
    { label: "Family Friendly", icon: "👨‍👩‍👧" },
  ];

  const toggleInterest = (label: string) => {
    setInterests((prev) =>
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
    );
  };

  const openWhatsApp = () => {
    const message = `Hi, I’m planning a trip to Sri Lanka.

Number of days: ${days}
Arrival date: ${arrival || "Not decided yet"}
Interests: ${interests.join(", ") || "Open to suggestions"}

Please send me a customized itinerary with a private driver and vehicle.`;

    // ✅ UPDATED: Use the number from siteConfig (centralized control)
    const whatsappNumber = siteConfig.contact.whatsappNumber; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] bg-[#1a1f2e] p-8 text-white shadow-2xl ring-1 ring-white/10">
      {/* THE TOPOGRAPHIC OVERLAY (SVG pattern) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 310c50-20 100 20 150 0s100-50 150-30 100 40 100 40V0H0v310z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")` }} 
      />

      {/* THE GOLDEN GLOW BORDER EFFECT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-500/20 pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <header>
          <h3 className="text-2xl font-bold tracking-tight">Plan Your Sri Lanka Trip</h3>
          <p className="text-slate-400 text-sm mt-2">Tell us your style — we'll create a custom itinerary for you.</p>
          <div className="h-px w-full bg-gradient-to-r from-amber-500/50 to-transparent mt-4" />
        </header>

        {/* DAY SELECTOR */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-amber-500">Duration</label>
          <div className="grid grid-cols-2 gap-3">
            {["7 days", "10 days", "14 days", "Custom days"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setDays(option)}
                className={cn(
                  "flex items-center justify-center gap-3 rounded-2xl py-4 transition-all border",
                  days === option 
                    ? "bg-white/10 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "h-4 w-4 rounded-full border flex items-center justify-center",
                  days === option ? "border-amber-500" : "border-slate-500"
                )}>
                  {days === option && <div className="h-2 w-2 rounded-full bg-amber-500" />}
                </div>
                <span className="text-sm font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* INTERESTS CHECKBOXES */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-amber-500">Interests</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            {interestOptions.map((item) => (
              <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="hidden peer" 
                  checked={interests.includes(item.label)}
                  onChange={() => toggleInterest(item.label)}
                />
                <div className="h-5 w-5 rounded border border-white/20 peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-all flex items-center justify-center">
                  <span className="text-[10px] text-slate-900 font-bold">✓</span>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {item.label} {item.icon}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ARRIVAL DATE */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-amber-500">Arrival Date</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/50 pointer-events-none" size={18} />
            <input 
              type="date" 
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-amber-500 transition-all text-sm appearance-none"
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <p className="text-[10px] text-slate-500 italic">Approximate date is perfectly fine</p>
        </div>

        {/* SUBMIT BUTTON */}
        <button 
          type="button"
          onClick={openWhatsApp}
          className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black py-5 rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-transform active:scale-95"
        >
          SEND REQUEST
        </button>
        
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest">
          Response via WhatsApp within 15 minutes
        </p>
      </div>
    </div>
  );
}