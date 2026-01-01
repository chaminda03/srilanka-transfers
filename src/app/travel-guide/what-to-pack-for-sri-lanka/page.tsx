import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";

export async function generateMetadata() {
  const pageData = getPageById("guide_packing");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

export default function PackingGuidePage() {
  const page = getPageById("guide_packing");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          The Essential Sri Lanka Packing List
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Packing for Sri Lanka means preparing for a variety of climates, from hot and humid beaches to cool, misty highlands. The key is to pack light, versatile clothing. Here’s a checklist to make sure you have everything you need for a comfortable trip.</p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Clothing</h3>
                <ul className="space-y-3 text-lg text-slate-700 list-disc list-inside">
                    <li><strong>Lightweight clothes:</strong> Cotton or linen shirts, t-shirts, and trousers.</li>
                    <li><strong>Long shorts or skirts:</strong> Good for warm weather.</li>
                    <li><strong>A modest outfit for temples:</strong> A long-sleeved top and long trousers or a long skirt/sarong to cover shoulders and knees.</li>
                    <li><strong>Light jacket or fleece:</strong> Essential for the cool evenings in the Hill Country (Nuwara Eliya, Ella).</li>
                    <li><strong>Rain jacket:</strong> A light, packable one is useful for unexpected showers.</li>
                    <li><strong>Swimwear:</strong> For the beaches and hotel pools.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Footwear</h3>
                <ul className="space-y-3 text-lg text-slate-700 list-disc list-inside">
                    <li><strong>Comfortable walking shoes:</strong> For exploring cities and ancient sites.</li>
                    <li><strong>Sandals or flip-flops:</strong> For the beach and casual wear.</li>
                    <li><strong>Hiking shoes:</strong> If you plan on trekking in places like Horton Plains or Adam's Peak.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Essentials & Health</h3>
                <ul className="space-y-3 text-lg text-slate-700 list-disc list-inside">
                    <li><strong>Sunscreen (high SPF):</strong> The tropical sun is strong.</li>
                    <li><strong>Insect repellent:</strong> Especially for evenings and jungle areas.</li>
                    <li><strong>Sun hat and sunglasses.</strong></li>
                    <li><strong>Basic first-aid kit:</strong> With antiseptic wipes, plasters, and pain relief.</li>
                    <li><strong>Any personal medications.</strong></li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Electronics & Documents</h3>
                <ul className="space-y-3 text-lg text-slate-700 list-disc list-inside">
                    <li><strong>Universal power adapter:</strong> Sri Lanka uses Type D and Type G sockets.</li>
                    <li><strong>Power bank:</strong> For charging your phone on the go.</li>
                    <li><strong>Passport & Visa (ETA):</strong> Physical and digital copies.</li>
                    <li><strong>Travel insurance documents.</strong></li>
                </ul>
            </div>
        </div>
      </section>

    </SpecPage>
  );
}
