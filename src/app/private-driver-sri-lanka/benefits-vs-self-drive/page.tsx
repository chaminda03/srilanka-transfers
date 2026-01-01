import { buildMetadata } from "@/lib/seo";
import { getPageById } from "@/lib/site";
import { SpecPage } from "@/components/SpecPage";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata() {
  const pageData = getPageById("private_driver_benefits");
  return buildMetadata({
    title: pageData.title,
    description: pageData.description,
    path: pageData.path,
  });
}

const faqs = [
    {
      q: "Is it safe to drive in Sri Lanka as a tourist?",
      a: "While possible, driving in Sri Lanka can be challenging due to different road conditions, traffic patterns, and local driving styles. For a stress-free holiday, a private driver is highly recommended as they are accustomed to navigating the country safely and efficiently."
    },
    {
      q: "Can I rent a car and drive it myself?",
      a: "Yes, car rentals are available, but they often come with complexities such as requiring an international driving permit, dealing with local insurance, and the risk of navigating unfamiliar roads. A private driver handles all of this for you."
    },
    {
      q: "Will I lose flexibility if I hire a driver?",
      a: "Not at all. In fact, you gain flexibility. Our drivers are at your service. You can change your plans on the fly, stop for photos whenever you wish, and discover hidden gems only a local would know, all without the stress of driving and navigation."
    },
];


export default function PrivateDriverBenefitsPage() {
  const page = getPageById("private_driver_benefits");

  return (
    <SpecPage page={page}>
      
      <section>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
          The Ultimate Freedom to Explore
        </h2>
        <div className="max-w-3xl text-slate-600 space-y-6 text-lg">
          <p>Choosing between hiring a private driver and self-driving in Sri Lanka is a key decision for your trip. While renting a car offers a sense of independence, the reality of navigating Sri Lanka's roads can be more stressful than relaxing. A private driver provides the perfect blend of freedom and expert local guidance.</p>
          <p>Let a professional handle the driving, so you can focus on the incredible scenery, immerse yourself in the culture, and truly enjoy every moment of your vacation.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Driver vs. Self-Drive</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Hiring a Private Driver</h3>
            <ul className="space-y-3 text-lg text-slate-600">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Stress-Free Travel:</strong> Sit back and relax. No need to worry about traffic, navigation, or parking.</span></li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Local Expertise:</strong> Your driver is your guide, offering insights, recommendations, and access to hidden spots.</span></li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span><strong>Maximum Safety:</strong> Experienced drivers are accustomed to local road conditions, ensuring your safety.</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Self-Driving</h3>
            <ul className="space-y-3 text-lg text-slate-600">
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span><strong>Navigational Challenges:</strong> Unfamiliar roads and chaotic traffic can be stressful and time-consuming.</span></li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span><strong>Insurance & Liability:</strong> You are responsible for the vehicle, which can involve complex insurance and potential liabilities.</span></li>
              <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span><strong>Missed Opportunities:</strong> You might miss out on local insights and the best routes known only to experienced local drivers.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Common Questions</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

    </SpecPage>
  );
}
