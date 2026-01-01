"use client";

import { useEffect, useRef } from "react";

type Faq = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  faqs: Faq[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const details = faqRef.current?.querySelectorAll("details");
    if (!details) return;

    const closeAll = (except: HTMLDetailsElement) => {
      details.forEach((d) => {
        if (d !== except) {
          d.removeAttribute("open");
        }
      });
    };

    details.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.hasAttribute("open")) {
          closeAll(d);
        }
      });
    });
  }, [faqs]);

  return (
    <section id="faqs" className="mt-12">
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
      <div ref={faqRef} className="space-y-4 text-slate-700">
        {faqs.map((f) => (
          <details key={f.q} className="bg-white border-2 border-slate-50 p-4 rounded-2xl">
            <summary className="font-semibold">{f.q}</summary>
            <p className="mt-2 text-sm">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
