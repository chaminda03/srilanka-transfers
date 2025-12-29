import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomItineraryInternalLink from "@/components/CustomItineraryInternalLink";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";

export const metadata = buildMetadata({
  title: "14-Day Sri Lanka Grand Tour | Culture, Nature & Beach",
  description:
    "The ultimate 2-week Sri Lanka private driver itinerary. Experience the Cultural Triangle, Kandy, scenic train to Ella, Yala Safari, and extended beach relaxation.",
  path: "/private-driver-sri-lanka/14-day-itinerary/",
});

export default function FourteenDayItineraryPage() {
  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp" 
          alt="Aerial view of tropical beaches in Sri Lanka"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <Badge className="bg-amber-500 text-slate-900 hover:bg-white hover:text-amber-600 border-none font-bold uppercase tracking-widest mb-4">
            The Grand Tour
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">
            The Ultimate <span className="text-amber-500">14-Day</span> <br />
            Sri Lanka Holiday
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            No rushing, just discovering. The perfect two-week blend of ancient history, 
            misty mountains, wildlife safaris, and pure tropical beach relaxation.
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
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Duration</p><p className="font-bold text-slate-900">14 Days / 13 Nights</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600"><MapPin className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Start / End</p><p className="font-bold text-slate-900">Airport (CMB)</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-full text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Pace</p><p className="font-bold text-slate-900">Relaxed & Thorough</p></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Why choose the 14-day route?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                This itinerary is designed for travelers who want to truly immerse themselves in island life. Unlike shorter trips, you have time to linger in <strong className="text-slate-900">Ella</strong>, take multiple safari drives, and end your trip with 3 full days of <strong className="text-slate-900">beach bliss</strong> on the south coast. It is the perfect loop for families, honeymooners, or anyone who hates packing and unpacking every single day.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-amber-500">★</span> What is included in your price:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                   {["Private AC Vehicle (Car/Van)", "English-Speaking Driver Guide", "Gas, Tolls, & Parking Fees", "Driver's Food & Accommodation", "Airport Pick-up & Drop-off", "Flexibility to Stop Anytime"].map((item, i) => (
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
                <h3 className="text-xl font-bold text-slate-900">Day 1: Arrival & Coastal Chill</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Airport → Negombo / Colombo</p>
                <p className="text-slate-600 leading-relaxed">
                  Ayubowan! Meet your private driver at the arrivals hall. We transfer you to a nearby coastal hotel in Negombo or Colombo to relax, recover from your flight, and watch your first Sri Lankan sunset.
                </p>
              </div>

              {/* Day 2-3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Days 2-3: The Cultural Triangle</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Sigiriya, Dambulla & Minneriya Safari</p>
                <p className="text-slate-600 leading-relaxed">
                  We head inland to the ancient heart of the island. Over two days, you will climb the majestic <strong>Sigiriya Lion Rock</strong>, explore the Dambulla Cave Temples, and take an evening jeep safari to see the famous "Gathering" of elephants at Minneriya National Park.
                </p>
              </div>

              {/* Day 4-5 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Days 4-5: The Sacred City of Kandy</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Temple of Tooth, Culture & Gardens</p>
                <p className="text-slate-600 leading-relaxed">
                  Drive to Kandy, the last royal capital. We visit the sacred Temple of the Tooth Relic, stroll around Kandy Lake, and explore the massive Royal Botanical Gardens. In the evening, witness a traditional Kandyan drum and dance performance.
                </p>
              </div>

              {/* Day 6-7 - THIS WAS THE PROBLEM AREA IN YOUR ERROR */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Days 6-7: Tea Country Retreat</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Kandy → Nuwara Eliya</p>
                <p className="text-slate-600 leading-relaxed">
                   Ascend into the cool, misty hills of Nuwara Eliya. We stop at thundering waterfalls and tour a working tea factory to learn how Ceylon tea is made. Spend two nights enjoying the colonial architecture, golf courses, and cool climate.
                </p>
              </div>

              {/* Day 8-9 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Days 8-9: Ella & The Scenic Train</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Train Ride, Nine Arch Bridge, Hiking</p>
                <p className="text-slate-600 leading-relaxed">
                  Take the world-famous <strong>blue train from Nanu Oya to Ella</strong> through the clouds. In Ella, we have plenty of time to hike Little Adam's Peak, walk the Nine Arch Bridge tracks, and swim in the Ravana Pool Club.
                </p>
              </div>

               {/* Day 10-11 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Days 10-11: Wildlife Safari Adventure</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Ella → Yala National Park</p>
                <p className="text-slate-600 leading-relaxed">
                  Descend to the wild southern plains. We dedicate these days to spotting leopards, sloth bears, and crocodiles on private 4x4 game drives in Yala or Udawalawe National Park.
                </p>
              </div>

               {/* Day 12-13 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Days 12-13: South Coast Bliss</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Galle Fort & Beach Relaxation</p>
                <p className="text-slate-600 leading-relaxed">
                  The finale of your trip! Relax on the golden sands of Mirissa, Unawatuna, or Bentota. We will also explore the UNESCO-listed <strong>Galle Dutch Fort</strong> for shopping and sunset views from the ramparts.
                </p>
              </div>

              {/* Day 14 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 14: Departure</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: South Coast → Airport</p>
                <p className="text-slate-600 leading-relaxed">
                  Your driver will pick you up from your beach hotel and transfer you to the airport in plenty of time for your flight home. Safe travels!
                </p>
              </div>

            </div>
          </div>

          {/* "Alexandra P" Review - TripAdvisor Style */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100">
             
            {/* Header: Avatar + Name + Date */}
             <div className="flex items-center gap-3 mb-4">
               {/* FIX: Replaced text path with real Image component.
                  Note: The parent div has 'relative', 'rounded-full', and 'overflow-hidden'.
                  This clips the image into a perfect circle.
               */}
               <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  <Image 
                    src="/images/Happy-German-Lady-travelled-to-unuwatana-Sri Lanka.webp"
                    alt="Alexandra - Traveler Review"
                    fill
                    className="object-cover"
                  />
               </div>

               
               <div className="text-sm">
                 <p className="leading-tight"><span className="font-bold text-slate-900">Laura P</span> wrote a review</p>
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
               A big part of why our family trip worked so well
             </h3>

             {/* Review Body */}
             <div className="text-slate-700 leading-relaxed space-y-4 text-[15px]">
                <p>
                  “We travelled around Sri Lanka as a family using this private driver company and had a really great experience. Our driver, Lakmal, was calm, kind, and extremely knowledgeable.”
                </p>
                <p>
                  “He made our <strong>2-week journey seamless and safe</strong>. Having a dedicated van meant we could stop whenever the kids needed a break or we saw something interesting. Highly recommended for families!”
                </p>
             </div>

             {/* Date Footer */}
             <p className="mt-6 text-sm font-bold text-slate-900">
               Date of experience: <span className="text-slate-500 font-normal">December 2025</span>
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
                    <Button asChild className="w-full h-14 text-lg font-black bg-amber-500 text-slate-900 hover:bg-amber-600 rounded-xl shadow-lg shadow-amber-500/20">
                        <Link href="/contact/">Get a Quote on WhatsApp</Link>
                    </Button>
                    <p className="text-xs text-slate-400 mt-2">Response typically within 15 mins</p>
                  </div>
              </div>

              {/* CUSTOM LINK COMPONENT */}
              <CustomItineraryInternalLink days={14} />

              {/* OTHER ITINERARIES */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4">Other Popular Routes</h3>
                 <div className="space-y-3">
                    <Link href="/private-driver-sri-lanka/8-day-itinerary/" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-amber-500 group">
                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500 group-hover:text-amber-600 group-hover:bg-amber-100">8</div>
                        <div>
                            <p className="font-bold text-sm group-hover:text-amber-600">Essentials Route</p>
                            <p className="text-xs text-slate-500">Perfect for 1 Week</p>
                        </div>
                    </Link>
                    <Link href="/private-driver-sri-lanka/10-day-itinerary/" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-amber-500 group">
                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500 group-hover:text-amber-600 group-hover:bg-amber-100">10</div>
                        <div>
                            <p className="font-bold text-sm group-hover:text-amber-600">Adventure Route</p>
                            <p className="text-xs text-slate-500">Adds Safari & Beach</p>
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