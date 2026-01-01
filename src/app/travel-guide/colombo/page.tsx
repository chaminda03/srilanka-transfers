import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("guide_colombo");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function ColomboGuidePage() {
  const page = getPageById("guide_colombo");

  return (
    <SpecPage page={page}>
      <section className="mb-24">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          Discover Colombo: Your Gateway to Sri Lanka
        </h1>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-8">
            Colombo, Sri Lanka&apos;s vibrant capital, is a city where history and modernity blend seamlessly. From bustling markets to serene temples and exciting nightlife, Colombo offers a diverse range of experiences for every traveler.
          </p>
        </div>
      </section>

      {/* Public Transport Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Getting Around</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">
          Public Transport: Buses in Colombo and Beyond
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Public buses are the cheapest and easiest way to travel around Sri Lanka. Most long-distance buses start from Colombo Fort Bus Stand.
        </p>
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-800">
          🚌 Main Bus Routes from Colombo
        </h3>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Colombo → Kandy</strong> — Bus 01</li>
          <li><strong>Colombo → Galle</strong> — Bus 02</li>
          <li><strong>Colombo → Matara</strong> — Bus 02 / 32</li>
          <li><strong>Colombo → Jaffna</strong> — Bus 04</li>
          <li><strong>Colombo → Anuradhapura</strong> — Bus 15</li>
          <li><strong>Colombo → Polonnaruwa</strong> — Bus 48</li>
          <li><strong>Colombo → Dambulla (Sigiriya)</strong> — Bus 42</li>
          <li><strong>Colombo → Trincomalee</strong> — Bus 49</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-800">
          Other Popular Routes
        </h3>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Kandy → Nuwara Eliya</strong> — Bus 01</li>
          <li><strong>Kandy → Dambulla</strong> — Bus 42</li>
          <li><strong>Kandy → Ella</strong> — Bus 99</li>
          <li><strong>Ella → Wellawaya (Yala side)</strong> — Bus 31</li>
          <li><strong>Galle → Mirissa</strong> — Bus 32</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-800">
          🎟️ Approximate Bus Ticket Prices
        </h3>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li>Short city rides – <strong>$0.20 – $0.50</strong></li>
          <li>2–3 hour journeys – <strong>$1 – $3</strong></li>
          <li>Long distance journeys – <strong>$3 – $6</strong></li>
        </ul>
        <p className="text-lg text-slate-700 leading-relaxed">
          All buses are available daily and are safe for solo travelers. Tickets can be bought directly inside the bus.
        </p>
      </section>

      {/* One Day in Colombo Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Short Stays</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">
          One Day in Colombo: A Whirlwind Tour
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          If you have just one day in Colombo, start your morning at the Colombo National Museum to soak in the history, then visit Gangaramaya Temple and Seema Malaka by Beira Lake. Take a stroll along Galle Face Green and enjoy the sea breeze, then explore Pettah Market for local life and snacks. In the afternoon, relax at Viharamahadevi Park or catch city views from the Lotus Tower. End your day back at Galle Face Green for a beautiful sunset and street food experience.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          <strong>One day in Colombo?</strong> Don’t miss Gangaramaya Temple, Colombo National Museum, Galle Face Green, and the Old Dutch Hospital for a quick taste of culture, history & seaside vibes!
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Very famous place for tourists: Mount Lavinia beach in Colombo.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          There is also an interesting old Dutch church in Colombo.
        </p>
      </section>

      {/* Fine Dining & Hotels Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Luxury & Leisure</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">
          Fine Dining & Five-Star Hotels in Colombo
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Some of the five-star hotels in Colombo—they usually do countdowns and drinks, as well as the food that you are after. Such hotels are Cinnamon Grand, Shangri La, Kingsbury, Cinnamon Life, etc. Not sure of your budget, but it can be pricey but worth it at the same time.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          <strong>Are there fine dining restaurants in other cities than Colombo?</strong> I’m looking for the most interesting restaurants. Chefs that are innovative 🫶🏻 think Netflix Chef&apos;s Table level 😃 I’m not sure if Sri Lanka has any but I thought worth asking here. Ps yes I’ll definitely eat a lot of local but I love to treat myself on travels to a few extraordinary dining experiences.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Fat Crab Negombo... Their food is equal to Ministry of Crabs at a fraction of the cost. Smoke and Bitters in Hiriketiya.
        </p>
      </section>

      {/* Family-Friendly Activities Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Family Fun</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">
          Fun and Family-Friendly Things to Do in Colombo
        </h2>
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-800">
          🌟 Top Things to See & Do
        </h3>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>🌊 Galle Face Green</strong> – A big seaside park where you can walk, fly kites, eat local snacks, and watch the sunset with your family. Great for kids too!</li>
          <li><strong>🎨 Colombo National Museum & Art Gallery</strong> – Learn about Sri Lankan history and see local art.</li>
          <li><strong>🛍️ Pettah Floating Market</strong> – A unique market on boats and stalls where you can shop and try local food.</li>
          <li><strong>🏙️ Shopping & Cafés</strong> – Visit shopping streets like Colpetty or malls like Liberty Plaza for food and souvenirs.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-800">
          🎉 New Year’s Eve & Celebration Ideas
        </h3>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Colombo has fun options that both adults and kids can enjoy!
        </p>
        <h4 className="text-xl font-semibold tracking-tight mb-3 text-slate-800">
          ⭐ Family-Friendly Dinner + Music
        </h4>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Graze Kitchen</strong> – Great buffet dinner with lots of variety, perfect for families.</li>
          <li><strong>Cuisine Colombo - Gregory&apos;s Road</strong> – Delicious and affordable family restaurant (kids friendly).</li>
          <li><strong>The Gallery Café</strong> – Stylish place with good food (book a bit early for NYE).</li>
        </ul>
        <h4 className="text-xl font-semibold tracking-tight mb-3 text-slate-800">
          🎶 Fun Spots with Vibe & Music
        </h4>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>Tilapiya Colombo</strong> – Popular BYOB restaurant with good food and music, nice atmosphere for a fun night.</li>
          <li>The Galle Face / Port City area often has fireworks, live music, and big NYE vibes by the ocean.</li>
        </ul>
        <h4 className="text-xl font-semibold tracking-tight mb-3 text-slate-800">
          💡 Tips for New Year&apos;s Eve
        </h4>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li>Many restaurants and bars do special New Year’s Eve dinners with music or DJs — it’s best to book in advance as they fill up.</li>
          <li>If you want a more relaxed family setting with good food (not too loud), start dinner earlier before the party crowds.</li>
        </ul>
        <h4 className="text-xl font-semibold tracking-tight mb-3 text-slate-800">
          🍽️ Budget & Atmosphere
        </h4>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li>Casual dinner (affordable): Cuisine Colombo or similar local places.</li>
          <li>Mid-range & fun: Graze Kitchen, Tilapiya Colombo (good vibe, music).</li>
          <li>Upscale but nice atmosphere: The Gallery Café.</li>
        </ul>
        <p className="text-lg text-slate-700 leading-relaxed">
          Fort/Galle Face is fun if you like big crowds and fireworks, but it gets very packed and chaotic. If you want a more enjoyable night, rooftop bars or hotel NYE parties around Colombo are a better vibe — controlled crowd, good music, and less stress. Enjoy and happy NYE!
        </p>
      </section>

      {/* Sri Lanka Travel Hacks Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Travel Smart</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">
          Sri Lanka Travel Hacks
        </h2>
        <ul className="list-disc pl-6 text-lg text-slate-700 leading-relaxed mb-4 space-y-2">
          <li><strong>✅ 🌅 Start early</strong> – avoid traffic and enjoy attractions before crowds</li>
          <li><strong>✅ ⏱️ Plan realistic travel times</strong> – Colombo → Nuwara Eliya = 4.5–5 hrs</li>
          <li><strong>✅ 💵 Carry cash</strong> – many small vendors and ATMs may not work in peak times</li>
          <li><strong>✅ 🎆 Rooftop views &gt; street fireworks</strong> – less hassle, better photos</li>
          <li><strong>✅ 🛏️ Stay smart your first night</strong> – airport or central Colombo = less stress</li>
        </ul>
      </section>
    </SpecPage>
  );
}
