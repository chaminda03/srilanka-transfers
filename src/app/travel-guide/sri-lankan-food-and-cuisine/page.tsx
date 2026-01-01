import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("guide_food");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function FoodGuidePage() {
  const page = getPageById("guide_food");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          A Culinary Journey Through Sri Lanka
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Sri Lankan cuisine is a vibrant explosion of flavor, influenced by its geography, its history as a spice hub, and its diverse ethnic groups. From fragrant curries to unique street food, exploring the local food is an essential part of any trip to the island.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Must-Try Dishes</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Rice and Curry</h3>
            <p className="text-lg text-slate-600">The heart and soul of Sri Lankan food. This is not just one dish, but a platter of many small dishes. Expect a serving of rice accompanied by a variety of curries, which can include dhal (lentils), chicken or fish curry, and several vegetable curries like jackfruit or beetroot.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Kottu Roti</h3>
            <p className="text-lg text-slate-600">You'll hear it before you see it. Kottu is a popular street food made from shredded godamba roti, vegetables, egg, and/or meat, all chopped and mixed on a hot griddle with metal blades. It's a noisy, theatrical, and delicious experience.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Hoppers (Appa)</h3>
            <p className="text-lg text-slate-600">A classic Sri Lankan breakfast. Hoppers are bowl-shaped pancakes made from a fermented batter of rice flour and coconut milk. They are crispy on the edges and soft in the center. An egg is often cooked into the middle (egg hopper).</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Dhal Curry (Parippu)</h3>
            <p className="text-lg text-slate-600">The most common curry in any Sri Lankan meal. Made from red lentils cooked in coconut milk with spices like turmeric, cumin, and fenugreek, it's a creamy, mild, and comforting dish that accompanies almost everything.</p>
          </div>
        </div>
      </section>

    </SpecPage>
  );
}
