import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import Link from "next/link";

export async function generateMetadata() {
  const pageData = getPageById("at_booking_process");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function BookingProcessPage() {
  const page = getPageById("at_booking_process");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Book Your Transfer in 3 Simple Steps
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>We've made booking your private airport transfer in Sri Lanka as easy as possible. Our straightforward process ensures your travel plans are confirmed quickly, giving you peace of mind.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <div className="text-6xl font-black text-primary/50 mb-2">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Send Your Request</h3>
                <p className="text-slate-500">Fill out our <Link href="/contact#booking-form" className="text-primary underline">booking form</Link> with your flight details, destination, and number of passengers. It takes less than two minutes.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <div className="text-6xl font-black text-primary/50 mb-2">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Receive Fixed Quote</h3>
                <p className="text-slate-500">We will promptly reply via email or WhatsApp with a fixed, all-inclusive price for your transfer. No hidden fees, guaranteed.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <div className="text-6xl font-black text-primary/50 mb-2">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Confirm Your Booking</h3>
                <p className="text-slate-500">Simply reply to confirm your booking. We'll send you the driver's details, and you'll be all set. Payment can be made online or directly to the driver.</p>
            </div>
        </div>
      </section>

      <section className="text-center">
        <Link href="/contact#booking-form" className="inline-block bg-amber-500 text-slate-950 px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl">
            Book Your Transfer Now
        </Link>
      </section>

    </SpecPage>
  );
}
