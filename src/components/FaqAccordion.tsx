"use client";

import { useEffect, useRef } from "react";
import { faqJsonLd } from "@/lib/schema";

type Faq = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  faqs: Faq[];
  /**
   * Optional heading override. Defaults to "Frequently Asked Questions".
   */
  heading?: string;
  /**
   * The PAGE title, used as the FAQPage entity name. Optional — omitted is
   * better than naming the entity after the section heading.
   */
  pageTitle?: string;
  /**
   * Emit FAQPage JSON-LD alongside the visible accordion. On by default —
   * this component is the single place FAQ markup is produced, so a page can
   * never again ship visible FAQs that Google cannot parse.
   *
   * Set false ONLY when the page already emits its own FAQPage node (two
   * FAQPage nodes on one URL is invalid and Google may ignore both).
   */
  emitSchema?: boolean;
};

export function FaqAccordion({
  faqs,
  heading = "Frequently Asked Questions",
  pageTitle,
  emitSchema = true,
}: FaqAccordionProps) {
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

  if (!faqs?.length) return null;

  return (
    <section id="faqs" className="mt-12">
      {/* Rendered by React into the server HTML, so crawlers see it without
          executing JS. Kept next to the visible copy on purpose: the markup
          and the answers it describes can never drift apart. */}
      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqs, pageTitle)),
          }}
        />
      )}

      <h3 className="text-2xl font-bold mb-4">{heading}</h3>
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
