import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomItineraryInternalLink from "@/components/CustomItineraryInternalLink";
import ItineraryCTA from "@/components/ItineraryCTA";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/site/config"; // ✅ Import Config

export const metadata = buildMetadata({
  title: "8-Day Sri Lanka Private Driver Itinerary | Culture & Wildlife",
  description:
    "The perfect 8-day Sri Lanka itinerary: Sigiriya Lion Rock, Kandy Temple, Nuwara Eliya tea plantations, scenic Ella train ride, and Yala safari.",
  path: "/private-driver-sri-lanka/8-day-itinerary/",
});

export default function EightDayItineraryPage() {
  // Construct the dynamic WhatsApp link for the sidebar button
  const waLink = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in the 8-Day Sri Lanka Itinerary.")}`;

  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp"
          alt="Couple enjoying the scenic train ride in Sri Lanka"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <Badge className="bg-amber-500 text-slate-900 hover:bg-white hover:text-amber-600 border-none font-bold uppercase tracking-widest mb-4">
            Most Popular
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">
            The Essential <span className="text-amber-500">8-Day</span> <br />
            Sri Lanka Journey
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            From the ancient heights of Sigiriya to the wild elephants of Yala. 
            Experience the scenic train ride and tea country with your own private driver.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN - ITINERARY CONTENT */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* INTRO CARD */}
          <Card className="border-none shadow-xl bg-white overflow-hidden rounded-3xl">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-wrap gap-6 mb-8 border-b border-slate-100 pb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-100 rounded-full text-amber-600"><Calendar className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Duration</p><p className="font-bold text-slate-900">8 Days / 7 Nights</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600"><MapPin className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Start / End</p><p className="font-bold text-slate-900">Airport (CMB)</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-full text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Type</p><p className="font-bold text-slate-900">Private Tour</p></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Why choose this route?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                This is the "Golden Loop" of Sri Lanka. It perfectly balances history, nature, and relaxation without rushing. You will climb the 5th-century <strong className="text-slate-900">Sigiriya Rock Fortress</strong>, walk through the cool misty tea plantations of <strong className="text-slate-900">Nuwara Eliya</strong>, take the world-famous <strong className="text-slate-900">blue train to Ella</strong>, and spot leopards or elephants on a private <strong className="text-slate-900">Yala Safari</strong>.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-amber-500">★</span> What is included in your price:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                   {["Private AC Vehicle (Car/Van)", "English-Speaking Driver Guide", "Gas, Tolls, & Parking Fees", "Driver's Food & Accommodation", "Airport Pick-up & Drop-off", "24/7 Support"].map((item, i) => (
                     <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}</li>
                   ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* TIMELINE */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Day-by-Day Itinerary</h2>
            <div className="relative border-l-2 border-slate-200 ml-4 space-y-10 pl-8 pb-4">
              
              {/* Day 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Day 1: Arrival & The Golden Temple</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Airport → Dambulla / Sigiriya</p>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to Sri Lanka! Your private driver will greet you at the arrivals hall. We drive directly to the Cultural Triangle, stopping to explore the majestic <strong>Dambulla Cave Temple</strong>, a UNESCO site filled with ancient statues and paintings.
                </p>
              </div>

              {/* Day 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 2: The 8th Wonder of the World</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Sigiriya Rock & Village Tour</p>
                <p className="text-slate-600 leading-relaxed">
                  Morning climb of <strong>Sigiriya Lion Rock</strong> before the heat sets in. The views from the top are breathtaking. Later, experience authentic rural life with a traditional village tour, including a catamaran ride and local lunch.
                </p>
              </div>

              {/* Day 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 3: To the Sacred City</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Sigiriya → Kandy</p>
                <p className="text-slate-600 leading-relaxed">
                  We head to Kandy, the last royal capital. En route, visit a fragrant Spice Garden. In Kandy, we visit the sacred <strong>Temple of the Tooth Relic</strong> and enjoy a traditional Kandyan cultural dance performance in the evening.
                </p>
              </div>

              {/* Day 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 4: Little England</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Kandy → Nuwara Eliya</p>
                <p className="text-slate-600 leading-relaxed">
                  A scenic drive up into the cool highlands. We stop at tea plantations and magnificent waterfalls (Ramboda Falls). Explore the colonial charm of Nuwara Eliya, often called "Little England" for its architecture and rose gardens.
                </p>
              </div>

              {/* Day 5 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Day 5: The Most Beautiful Train Ride</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Scenic Train to Ella</p>
                <p className="text-slate-600 leading-relaxed">
                  Board the famous blue train for one of the world's most scenic rail journeys. Your driver will take your heavy bags and meet you at the Ella station. Spend the evening soaking in the chill backpacker vibe of Ella town.
                </p>
              </div>

               {/* Day 6 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 6: Ella's Natural Wonders</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Nine Arch Bridge & Little Adam's Peak</p>
                <p className="text-slate-600 leading-relaxed">
                  An active day exploring the Instagram-famous <strong>Nine Arch Bridge</strong> and an easy hike up Little Adam's Peak for stunning panoramic views. Cool off with a visit to the majestic Ravana Falls.
                </p>
              </div>

               {/* Day 7 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Day 7: Into the Wild</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Ella → Yala National Park</p>
                <p className="text-slate-600 leading-relaxed">
                  Descend from the mountains to the wild plains of Yala. In the afternoon, hop into a private 4x4 Jeep for a <strong>wildlife safari</strong>. Keep your eyes peeled for leopards, elephants, sloth bears, and crocodiles!
                </p>
              </div>

               {/* Day 8 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 8: Coastal Drop or Departure</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Yala → Beach / Airport</p>
                <p className="text-slate-600 leading-relaxed">
                  Depending on your flight or next plans, we can drop you at a beach hotel in Mirissa/Galle or drive you directly to the airport for your departure. End of a memorable journey!
                </p>
              </div>

            </div>
          </div>
          {/* ITINERARY CTA */}
          <div className="pt-6">
            {/* ✅ Updated: Uses config number automatically via component default or prop */}
            <ItineraryCTA whatsappNumber={siteConfig.contact.whatsappNumber} />
          </div>

          {/* REVIEW CARD: TripAdvisor Style */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100">
              
             {/* Header: Avatar + Name + Date */}
             <div className="flex items-center gap-3 mb-4">
               <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  <Image 
                    src="/images/Gentleman-from-UK-at-Yala National Park, Sri Lanka.webp" // Please ensure this file name matches
                    alt="Arnold - Verified Reviewer"
                    fill
                    className="object-cover"
                  />
               </div>
               
               <div className="text-sm">
                 <p className="leading-tight"><span className="font-bold text-slate-900">Arnold</span> wrote a review</p>
                 <p className="text-slate-500 text-xs mt-0.5">Today</p>
               </div>
               <div className="ml-auto text-slate-400 font-bold tracking-widest text-xs">•••</div>
             </div>

             {/* Rating Bubbles */}
             <div className="flex gap-1 mb-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-4 w-4 rounded-full bg-[#00aa6c]" />
               ))}
             </div>

             {/* Review Title */}
             <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-3 leading-tight hover:underline cursor-pointer">
               Excellent tour - far more than a simple excursion
             </h3>

             {/* Review Body */}
             <div className="text-slate-700 leading-relaxed space-y-4 text-[15px]">
                <p>
                  “Excellent tour! It was far more than just a day excursion. My guide was really helpful, explaining the deep history of the <strong>Temple of the Tooth</strong>, <strong>Sigiriya Lion Rock</strong>, and other cultural sites with his immense knowledge.”
                </p>
                <p>
                  “He made our trip a wonderful experience. Truly an amazing country. The <strong>Sri Lanka Private Driver</strong> team operates a business far beyond expectations—I can't recommend them enough!”
                </p>
             </div>

             {/* Date Footer */}
             <p className="mt-6 text-sm font-bold text-slate-900">
               Date of experience: <span className="text-slate-500 font-normal">November 2025</span>
             </p>
          </div>

        </div>

        {/* RIGHT SIDEBAR - STICKY CTA */}
        <div className="lg:col-span-4 space-y-8">
           <div className="sticky top-24 space-y-6">
              
              {/* PRICE / BOOKING CARD */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100 text-center">
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Private Driver Service</p>
                  <p className="text-sm text-slate-400 mb-6">Fixed daily rate • No hidden fees</p>
                  
                  <div className="space-y-3">
                    {/* ✅ Updated: Sidebar button now uses Config number */}
                    <Button asChild className="w-full h-14 text-lg font-black bg-amber-500 text-slate-900 hover:bg-amber-600 rounded-xl shadow-lg shadow-amber-500/20">
                        <a href={waLink} target="_blank" rel="noopener noreferrer">Get a Quote on WhatsApp</a>
                    </Button>
                    <p className="text-xs text-slate-400 mt-2">Response typically within 15 mins</p>
                  </div>
              </div>

              {/* CUSTOM LINK COMPONENT */}
              <CustomItineraryInternalLink days={8} />

              {/* OTHER ITINERARIES */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4">Other Popular Routes</h3>
                 <div className="space-y-3">
                    <Link href="/private-driver-sri-lanka/10-day-itinerary/" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-amber-500 group">
                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500 group-hover:text-amber-600 group-hover:bg-amber-100">10</div>
                        <div>
                            <p className="font-bold text-sm group-hover:text-amber-600">Adventure Route</p>
                            <p className="text-xs text-slate-500">Adds Hiking & Beach</p>
                        </div>
                    </Link>
                    <Link href="/private-driver-sri-lanka/14-day-itinerary/" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-amber-500 group">
                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500 group-hover:text-amber-600 group-hover:bg-amber-100">14</div>
                        <div>
                            <p className="font-bold text-sm group-hover:text-amber-600">Grand Tour</p>
                            <p className="text-xs text-slate-500">Includes North & East</p>
                        </div>
                    </Link>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </article>
  );
}