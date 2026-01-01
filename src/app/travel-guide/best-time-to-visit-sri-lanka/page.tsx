import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("guide_best_time");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
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
            <p><strong>July - September:</strong> Peak season for the east coast. Great for surfing in Arugam Bay and whale watching in Trincomalee.</p>
            <p><strong>October - November:</strong> Inter-monsoon period. Weather can be unpredictable across the island, with short, sharp showers. Good for lower prices and fewer crowds.</p>
            <p><strong>December:</strong> 'Maha' monsoon can affect the east, but the south and west start to clear up, kicking off the main tourist season.</p>
        </div>
      </section>

    </SpecPage>
  );
}
