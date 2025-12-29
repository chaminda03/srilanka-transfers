import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Safe Travel Guide Sri Lanka | Why You Need a Private Driver",
  description: "Learn how to stay safe in Sri Lanka. From waterfall abseiling rules to why self-driving Tuk Tuks is risky. Your ultimate safety guide by local experts.",
  path: "/blog/safe-travel-sri-lanka/",
});

export default function SafeTravelBlog() {
  return (
    <main className="w-full bg-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        
        {/* BLOG HEADER */}
        <header className="mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Safety Guide</span>
            <span className="text-slate-400 text-xs py-1">8 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 mb-6 leading-none">
            Exploring Sri Lanka: <br /> 
            <span className="text-amber-500">The Ultimate Safety Guide</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Sri Lanka is an award-winning, safe destination. But to truly enjoy the &quot;Island Life,&quot; you need to know the hidden rules of the road and the wild.
          </p>
        </header>

        {/* IMAGE SECTION */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src="/images/sri-lanka-best_private-airport-transfer-driver.webp" 
            alt="Safe travel with a private driver in Sri Lanka" 
            fill 
            className="object-cover"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
          
          <section>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">1. The Road Challenge</h2>
            <p>
              Sri Lankan roads are unique. Narrow mountain passes and creative local driving habits can be exhausting for visitors.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The Tuk Tuk Myth:</strong> While fun for village trips, self-driving a Tuk Tuk on main roads is illegal for foreigners. </li>
              <li><strong>GPS Failures:</strong> Maps apps often fail to sync on remote roads. Without a local driver, it is easy to get lost where people may not speak English.</li>
              <li><strong>Safety First:</strong> Our [private drivers](/) prioritize safe habits on narrow roads.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight mb-4">2. Adventure Safety: Waterfalls & Rivers</h2>
            <p className="italic font-medium text-slate-800 mb-6">
              &quot;A strong person and a waterfall always carve their own path.&quot;
            </p>
            <p>
              When visiting waterfalls like Pallewela, safety is everything. We use world-class Petzl equipment, including ropes, harnesses, and life jackets.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Rules for Waterfalls:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Age must be over 6</li>
                  <li>• No mobile phones during descent</li>
                  <li>• Obey the mentor at all times</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Health First:</strong>
                <p className="mt-2">Must be free of chronic diseases, surgeries, or respiratory disorders.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">3. Protection from &quot;Price Hijacking&quot;</h2>
            <p>
              Sri Lanka is safe, but travelers can sometimes be overcharged. Having a local driver acts as a &quot;Free Guide&quot; service. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We ensure you pay fair local prices at markets.</li>
              <li>We act as a shield from unfortunate incidents or vandalism.</li>
              <li>Fixed prices mean no bargaining or hidden fees for your transport.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">4. Wildlife and Hiking</h2>
            <p>
              Vandalism is almost zero, but nature is wild. Whether it is river baths or hiking, we know the safe spots. We speak English and the local language to bridge the gap if you need help in remote areas.
            </p>
          </section>

        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 p-12 bg-amber-500 rounded-[40px] text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-6 leading-tight">
            Ready for the safest <br /> journey of your life?
          </h3>
          <p className="text-slate-900 font-medium mb-10 max-w-xl mx-auto">
            Don&apos;t spend your holiday staring at a GPS. Let a local professional take the wheel while you enjoy the scenery.
          </p>
          <Button asChild size="lg" className="bg-slate-950 text-white rounded-full px-12 h-16 text-lg font-bold hover:bg-white hover:text-slate-950 transition-all">
            <Link href="/contact/">Book Your Safe Trip on WhatsApp</Link>
          </Button>
        </div>

      </article>
    </main>
  );
}