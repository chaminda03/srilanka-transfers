import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { siteConfig } from "@/site/config";
import { SpecPage } from "@/components/SpecPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Fetch page data
const page = getPageById("contact");

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

function whatsappLink(message: string) {
  const num = siteConfig.contact.whatsappNumberE164.replace(/[^\d+]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${num.replace("+", "")}?text=${text}`;
}

// Next.js 15+ requires searchParams to be a Promise
type Props = {
  searchParams: Promise<{ success?: string; error?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  // MUST await searchParams to avoid the "source map / internal error"
  const params = await searchParams;

  const wa = whatsappLink(
    "Hi! I’d like to book a Sri Lanka airport transfer or private driver."
  );

  return (
    <SpecPage page={page}>
      
      {/* 1. NOTIFICATIONS */}
      {params?.success && (
        <div className="mb-12 rounded-[30px] border border-green-200 bg-green-50 p-8 text-green-800 animate-in fade-in zoom-in duration-500">
          <p className="flex items-center gap-3 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-xs">✓</span>
            Message Sent Successfully
          </p>
          <p className="mt-2 ml-11 opacity-80">
            Thank you! We have received your request and will get back to you shortly via email or WhatsApp.
          </p>
        </div>
      )}

      {params?.error && (
        <div className="mb-12 rounded-[30px] border border-red-200 bg-red-50 p-8 text-red-800">
          <p className="flex items-center gap-3 text-lg font-bold">
            <span>❌</span> Something went wrong.
          </p>
          <p className="mt-2 ml-11 opacity-80">
            We couldn't process the form. Please try again or message us directly on WhatsApp.
          </p>
        </div>
      )}

      {/* 2. MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT: WHATSAPP & INFO */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-6 leading-none">
              Get a quote <br/>in minutes.
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              For the fastest service, reach out via WhatsApp. Our dispatch team is available to confirm your booking immediately.
            </p>
          </div>

          <div className="p-10 bg-slate-950 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Chat with us</h3>
              <p className="text-slate-400 mb-8 text-sm">Best for last-minute pickups or quick route questions.</p>
              <Button asChild size="lg" className="w-full bg-primary text-slate-950 hover:scale-105 transition-transform rounded-full font-bold">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  Open WhatsApp
                </a>
              </Button>
            </div>
            {/* Abstract glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 bg-primary/20 blur-3xl rounded-full" />
          </div>

          <ul className="space-y-4 pt-4">
            {["Fixed, all-inclusive prices", "Licensed English-speaking drivers", "Airport meet & greet included"].map((check) => (
              <li key={check} className="flex items-center gap-4 text-slate-600 font-medium">
                <span className="text-primary">✦</span> {check}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-100 rounded-[50px] p-8 md:p-12 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Booking Request Form</h3>
            
            <form className="space-y-4" action="/api/lead" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full Name" className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                <input name="email" type="email" required placeholder="Email Address" className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="pickup" required placeholder="Pickup (e.g. Airport)" className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                <input name="destination" required placeholder="To (e.g. Ella)" className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>

              <input name="date" required placeholder="Date & Time of Arrival" className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
              
              <textarea 
                name="notes" 
                placeholder="Flight number, luggage count, or special requests..." 
                className="w-full rounded-2xl border-slate-200 bg-slate-50 px-5 py-4 min-h-[150px] focus:ring-2 focus:ring-primary outline-none transition-all" 
              />

              <Button type="submit" size="lg" className="w-full py-8 text-lg font-black rounded-2xl">
                Request Fixed Price Quote
              </Button>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                No payment required now. We will confirm pricing first.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* 3. FOOTER CTA */}
      <section className="mt-32">
        <Link href="/private-driver-sri-lanka/custom-sri-lanka-itinerary/" className="group block bg-slate-50 rounded-[40px] p-12 hover:bg-slate-100 transition-colors border border-dashed border-slate-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold mb-2">Planning a Multi-Day Tour?</h2>
              <p className="text-slate-500">Use our itinerary builder for custom multi-stop journeys across the island.</p>
            </div>
            <span className="bg-white px-8 py-4 rounded-full font-bold shadow-sm group-hover:bg-slate-950 group-hover:text-white transition-all">
              Build Itinerary →
            </span>
          </div>
        </Link>
      </section>

    </SpecPage>
  );
}