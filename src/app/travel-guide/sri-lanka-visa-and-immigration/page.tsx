import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Link from "next/link";

export async function generateMetadata() {
  const pageData = getPageById("guide_visa");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function VisaGuidePage() {
  const page = getPageById("guide_visa");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Your Guide to Sri Lankan Visas
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Navigating visa requirements is a crucial first step in planning your trip. Fortunately, Sri Lanka has a straightforward online process for most tourists. This guide covers the essentials for a smooth entry and a hassle-free stay.</p>
          <p><strong>Disclaimer:</strong> Visa policies can change. Always check the official Sri Lanka Immigration website for the most up-to-date information before you travel.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Tourist Visa Process</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-8 text-lg text-slate-700">
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">1. Apply for an Electronic Travel Authorization (ETA)</h3>
                <p>For most nationalities, a 30-day tourist visa is granted via the online ETA system. It's a simple application that you should complete at least a few days before your departure.</p>
                <p className="mt-2">Apply only through the official government website: <Link href="https://www.immigration.gov.lk/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://www.immigration.gov.lk/</Link></p>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">2. What You'll Need</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>A passport valid for at least 6 months from your date of arrival.</li>
                    <li>A confirmed return ticket.</li>
                    <li>Sufficient funds to meet your expenses during your stay.</li>
                    <li>A credit or debit card to pay the ETA processing fee online.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">3. Visa Extension</h3>
                <p>If you fall in love with Sri Lanka and wish to stay longer, you can apply to extend your tourist visa. The initial 30-day visa can be extended up to 90 days, and then for a further 90 days. This can often be done online through the same immigration portal, but may sometimes require a visit to the Department of Immigration & Emigration office in Colombo.</p>
            </div>
        </div>
      </section>

    </SpecPage>
  );
}
