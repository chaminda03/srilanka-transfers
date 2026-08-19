import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("guide_best_time");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
    updated: pageData.updated,
  });
}

export default function BestTimeToVisitPage() {
  const page = getPageById("guide_best_time");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          When to Visit: A Tale of Two Monsoons
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Sri Lanka's tropical climate means it's always a good time to visit, but the island experiences two distinct monsoon seasons that affect different parts of the country at different times. Planning your trip around them is key to getting the best weather.</p>
          <p>Don't worry, it's simpler than it sounds. There's almost always a sunny shore waiting for you somewhere on the island.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">South & West Coasts, Hill Country</h3>
                <p className="font-semibold text-primary mb-2">Best time: December to April</p>
                <p className="text-slate-500">This is the dry season for the most popular tourist areas, including the southern beaches (Galle, Mirissa), the west coast (Colombo, Negombo), and the central Hill Country (Kandy, Ella). Expect sunny days and calm seas, perfect for beach holidays and hiking.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">East Coast & North</h3>
                <p className="font-semibold text-primary mb-2">Best time: May to September</p>
                <p className="text-slate-500">While the south is experiencing its monsoon, the east coast comes alive with sunshine. This is the ideal time to visit beaches like Arugam Bay (for surfing) and Trincomalee. It's also a great time to explore the northern cultural sites around Jaffna.</p>
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Month-by-Month Snapshot</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="space-y-4 text-lg text-slate-700">
            <p><strong>January - March:</strong> Peak season. Dry and sunny across the south, west, and hills. Ideal for all-round tours.</p>
            <p><strong>April:</strong> Hot and humid before the monsoon. New Year festivals (Avurudu) offer a unique cultural experience.</p>
            <p><strong>May - June:</strong> 'Yala' monsoon hits the south and west. Head east for the best weather. Start of the wildlife 'Gathering' in Minneriya.</p>
            <p><strong>July - September:</strong> Peak season for the east coast. Great for surfing in Arugam Bay and whale watching in Trincomalee. The hill country still catches the tail of the southwest monsoon — expect passing showers rather than washed-out days.</p>
            <p><strong>October - November:</strong> Inter-monsoon period. Weather can be unpredictable across the island, with short, sharp showers. Good for lower prices and fewer crowds.</p>
            <p><strong>December:</strong> 'Maha' monsoon can affect the east, but the south and west start to clear up, kicking off the main tourist season.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Rain in the Hills</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Every year between roughly May and September we hear the same question: <em>&ldquo;I&rsquo;m seeing reports of rain and flooding in Ella and Nuwara Eliya &mdash; should I cancel?&rdquo;</em> Almost always, the answer is no. It just helps to know what the rain actually looks like on the ground.</p>
          <p>During the southwest monsoon the hill country gets its weather in bursts. Mornings are frequently clear and bright, cloud builds through the afternoon, and rain arrives late in the day or overnight. A forecast showing rain every day for a week rarely means seven days indoors &mdash; it usually means seven afternoons of an hour or two of heavy showers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Nuwara Eliya</h3>
                <p className="font-semibold text-primary mb-2">Wetter and noticeably colder</p>
                <p className="text-slate-500">Sitting high on the exposed southwestern side of the range, Nuwara Eliya takes the monsoon head-on. Expect mist, drizzle that can settle in for hours, and evening temperatures that genuinely call for a jacket. It is still beautiful &mdash; just pack for it.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Ella</h3>
                <p className="font-semibold text-primary mb-2">Usually the drier of the two</p>
                <p className="text-slate-500">Ella sits lower and further east, on the sheltered flank of the hills, so it tends to escape the worst of the southwest monsoon. If you are choosing between the two for a rainy-season stay, Ella is generally the safer bet for clear mornings at Little Adam&rsquo;s Peak and Nine Arch Bridge.</p>
            </div>
        </div>

        <div className="max-w-3xl text-slate-600 space-y-6 text-lg mt-12">
          <p>The wider point is that Sri Lanka is small enough to drive around bad weather but varied enough that the weather is rarely bad everywhere at once. When the hills and the south are wet, Trincomalee, Nilaveli and Pigeon Island on the east coast are usually at their best &mdash; calm seas, good visibility, and the clearest snorkelling of the year. Reshuffling the order of your route is often all it takes.</p>
          <p>Heavy rain does occasionally cause real disruption, particularly landslides on hill roads. For how to check that and what it means for your travel days, see our guide to <a href="/travel-guide/is-sri-lanka-safe-to-travel" className="text-primary font-semibold underline underline-offset-4">safety in Sri Lanka</a>.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Poya Days & Festivals</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Sri Lanka&rsquo;s religious calendar catches a lot of visitors by surprise, usually in the form of a closed shop or a dry bar. It is worth knowing the pattern before you arrive &mdash; not to avoid these days, but because they are often the most interesting days to be here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-slate-700">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Poya days</h3>
                <p className="text-slate-500 mb-4">Every full moon is a public holiday. Twelve or thirteen fall each year, so most trips of two weeks or more will include at least one.</p>
                <ul className="space-y-3 text-slate-500">
                    <li><strong className="text-slate-700">Alcohol is not sold.</strong> Liquor shops and bars close, and many hotels will not serve alcohol in public areas. If you want a drink with dinner, buy it the day before.</li>
                    <li><strong className="text-slate-700">Some businesses close</strong>, particularly local shops and offices. Tourist restaurants, hotels and attractions generally stay open.</li>
                    <li><strong className="text-slate-700">Temples are at their busiest and most atmospheric.</strong> White-clad pilgrims, oil lamps and offerings. Well worth seeing &mdash; dress modestly and expect crowds.</li>
                    <li><strong className="text-slate-700">Roads near major temples get congested.</strong> Allow extra time for transfers through Kandy, Anuradhapura or Dambulla.</li>
                </ul>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Local festivals</h3>
                <p className="text-slate-500 mb-4">Individual towns hold their own multi-day temple festivals, and these are not always listed in guidebooks. A coastal village like Unawatuna can have most of its small shops and family restaurants shut for several days running.</p>
                <ul className="space-y-3 text-slate-500">
                    <li><strong className="text-slate-700">Esala Perahera, Kandy</strong> &mdash; July or August. The island&rsquo;s largest procession, with decorated elephants, dancers and drummers over ten nights. Accommodation in Kandy books out months ahead and prices rise sharply.</li>
                    <li><strong className="text-slate-700">Sinhala &amp; Tamil New Year</strong> &mdash; mid-April. Much of the country effectively pauses for several days as families travel home.</li>
                    <li><strong className="text-slate-700">Vesak</strong> &mdash; May. Lanterns and free food stalls light up towns across the island.</li>
                </ul>
                <p className="text-slate-500 mt-4">If a festival falls during your stay, ask your driver. They will know which days things actually shut, and can often get you to the best of it.</p>
            </div>
        </div>
      </section>

    </SpecPage>
  );
}
