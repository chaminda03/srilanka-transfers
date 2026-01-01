import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Link from "next/link";

export async function generateMetadata() {
  const pageData = getPageById("guide_connectivity");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function ConnectivityGuidePage() {
  const page = getPageById("guide_connectivity");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Money, Mobile & Wi-Fi in Sri Lanka
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Staying connected and managing your money are key parts of modern travel. Here’s how to handle currency, get a local SIM card, and find Wi-Fi during your trip to Sri Lanka.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Currency (Sri Lankan Rupee - LKR)</h3>
                <div className="space-y-4 text-slate-600">
                    <p>The official currency is the Sri Lankan Rupee (LKR). While some high-end hotels might quote prices in USD, you will need LKR for almost all transactions, including restaurants, shops, and entrance fees.</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>ATMs:</strong> Widely available in all cities and towns. This is the easiest way to get local currency. Look for Bank of Ceylon, Commercial Bank, or Sampath Bank ATMs.</li>
                        <li><strong>Currency Exchange:</strong> You can exchange major currencies like USD, EUR, and GBP at the airport upon arrival or at banks in cities.</li>
                        <li><strong>Credit Cards:</strong> Major credit cards (Visa, Mastercard) are accepted at hotels, upscale restaurants, and larger stores. Always carry some cash for smaller shops and cafes.</li>
                    </ul>
                     <p className="mt-4">For official exchange rates, refer to the <Link href="https://www.cbsl.gov.lk/en/rates-and-indicators/exchange-rates" target="_blank" rel="noopener noreferrer" className="text-primary underline">Central Bank of Sri Lanka</Link>.</p>
                </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">SIM Cards & Connectivity</h3>
                 <div className="space-y-4 text-slate-600">
                    <p>Getting a local SIM card is cheap, easy, and highly recommended. The best place to get one is right at the airport arrivals hall.</p>
                    <p>The two main providers are:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Dialog:</strong> Generally considered to have the best overall coverage across the island.</li>
                        <li><strong>Mobitel:</strong> Also has excellent coverage and competitive data packages.</li>
                    </ul>
                    <p>You can purchase a tourist pack that comes with plenty of data, local calls, and some international call credit for a very reasonable price.</p>
                 </div>
            </div>
        </div>
      </section>

    </SpecPage>
  );
}
