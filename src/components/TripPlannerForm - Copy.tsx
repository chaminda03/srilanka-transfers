"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function TripPlannerForm() {
  const [days, setDays] = useState("7");
  const [arrival, setArrival] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    "Beaches",
    "Culture & History",
    "Nature & Scenic Views",
    "Wildlife & Safaris",
    "Slow Travel & Local Life",
    "Honeymoon / Couples",
    "Family Friendly",
  ];

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value)
        ? prev.filter((i) => i !== value)
        : [...prev, value]
    );
  }

  function openWhatsApp() {
    const message = `Hi, I’m planning a trip to Sri Lanka.

Number of days: ${days}
Arrival date: ${arrival || "Not decided yet"}
Interests: ${interests.join(", ") || "Open to suggestions"}

Please send me a customized itinerary with a private driver and vehicle.`;

    const whatsappNumber = "17038554561"; // 🔴 replace with your number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  }

  return (
    <section className="rounded-xl border p-6 space-y-6 bg-muted/30">
      <header className="space-y-1">
        <h3 className="text-xl font-semibold">
          Plan Your Sri Lanka Trip with a Private Driver
        </h3>
        <p className="text-sm text-muted-foreground">
          Tell us your travel style — we’ll create a custom itinerary for you.
        </p>
      </header>

      {/* NUMBER OF DAYS */}
      <div>
        <p className="font-medium mb-2">How many days are you planning?</p>
        <div className="flex gap-4 flex-wrap">
          {["7", "10", "14", "Custom"].map((d) => (
            <label
              key={d}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="days"
                value={d}
                checked={days === d}
                onChange={() => setDays(d)}
              />
              {d} days
            </label>
          ))}
        </div>
      </div>

      {/* INTERESTS */}
      <div>
        <p className="font-medium mb-2">
          What are you interested in? (Select all that apply)
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {interestOptions.map((i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={interests.includes(i)}
                onChange={() => toggleInterest(i)}
              />
              {i}
            </label>
          ))}
        </div>
      </div>

      {/* ARRIVAL DATE */}
      <div>
        <p className="font-medium mb-2">Arrival date</p>

        <div className="relative max-w-xs">
          <Calendar
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <input
            type="date"
            className="w-full border rounded-md pl-10 pr-3 py-2"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-1">
          Approximate date is perfectly fine
        </p>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button size="lg" onClick={openWhatsApp}>
          Get My Custom Itinerary on WhatsApp
        </Button>

        <p className="text-xs text-muted-foreground mt-2">
          ✔ Licensed English-speaking driver  
          <br />
          ✔ Private vehicle with LKR 500,000 insurance coverage  
          <br />
          ✔ Free itinerary • No obligation
        </p>
      </div>
    </section>
  );
}
