"use client";

import { useState } from "react";

const INTERESTS = [
  "Culture and temples",
  "Hill country and tea",
  "Wildlife safaris",
  "Beaches and relaxation",
  "Food and local experiences",
  "Adventure and hiking",
];

export default function CustomItineraryForm() {
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [days, setDays] = useState("10");
  const [customDays, setCustomDays] = useState("");
  const [startDate, setStartDate] = useState("");
  const [flexibleDates, setFlexibleDates] = useState(false);
  const [pickup, setPickup] = useState("Colombo Airport");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const tripLength =
    days === "custom" && customDays
      ? `${customDays} days (custom)`
      : `${days} days`;

  // ✅ CLEAN, SINGLE-SOURCE WHATSAPP MESSAGE
  const message = `
Hi! I’m interested in a custom Sri Lanka itinerary with a private driver.

Travelers:
- Adults: ${adults}
- Kids: ${kids}

Trip length:
- ${tripLength}

Travel dates:
- Starting around: ${startDate || "Not decided"}${
    flexibleDates ? " (flexible)" : ""
  }

Pickup point:
- ${pickup}

Interests:
- ${
    interests.length
      ? interests.join(", ")
      : "Open to suggestions"
  }

Looking forward to your suggestions. Thank you!
`;

  const whatsappUrl = `https://wa.me/17038554561?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* FORM */}
      <section className="space-y-6">
        {/* Travelers */}
        <div className="grid grid-cols-2 gap-4">
          <label className="space-y-1">
            <span className="text-sm font-medium">Adults</span>
            <input
              type="number"
              min={1}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium">Kids</span>
            <input
              type="number"
              min={0}
              value={kids}
              onChange={(e) => setKids(Number(e.target.value))}
              className="w-full rounded-md border px-3 py-2"
            />
          </label>
        </div>

        {/* Trip Length */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Trip length</span>
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="7">7 days</option>
            <option value="10">10 days</option>
            <option value="14">14 days</option>
            <option value="custom">Custom</option>
          </select>

          {days === "custom" && (
            <input
              type="number"
              min={3}
              placeholder="Number of days"
              value={customDays}
              onChange={(e) => setCustomDays(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            />
          )}
        </div>

        {/* Travel Dates */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Preferred start date</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={flexibleDates}
              onChange={(e) => setFlexibleDates(e.target.checked)}
            />
            My dates are flexible
          </label>
        </div>

        {/* Interests */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Interests</span>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {INTERESTS.map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() => toggleInterest(interest)}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        {/* Pickup */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Pickup point</span>
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          >
            <option>Colombo Airport</option>
            <option>Hotel in Colombo or Negombo</option>
            <option>Other</option>
          </select>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-3 mt-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-6 py-3 text-background font-medium hover:opacity-90"
        >
          Send My Trip Details on WhatsApp
        </a>

        <p className="text-xs text-muted-foreground text-center">
          Free planning • No obligation • Direct chat with a real person
        </p>
      </section>
    </>
  );
}
