import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomItineraryInternalLink from "@/components/CustomItineraryInternalLink";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";

export const metadata = buildMetadata({
  title: "10-Day Sri Lanka Private Driver Itinerary | Adventure & Culture",
  description:
    "The ultimate 10-day Sri Lanka route: Sigiriya, Kandy, Nuwara Eliya, Ella, Yala Safari, and the South Coast beaches. 100% private & customizable.",
  path: "/private-driver-sri-lanka/10-day-itinerary/",
});

export default function TenDayItineraryPage() {
  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/sri-lanka-wildlife-safari-jeep-tour-elephants_yala.webp"
          alt="Jeep safari tour in Yala National Park Sri Lanka"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <Badge className="bg-amber-500 text-slate-900 hover:bg-white hover:text-amber-600 border-none font-bold uppercase tracking-widest mb-4">
            Best Seller
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">
            The Complete <span className="text-amber-500">10-Day</span> <br />
            Sri Lanka Adventure
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Go beyond the basics. From secret waterfalls and village cooking classes 
            to leopards in the wild and relaxing sunsets on the south coast.
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
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Duration</p><p className="font-bold text-slate-900">10 Days / 9 Nights</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600"><MapPin className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Start / End</p><p className="font-bold text-slate-900">Airport (CMB)</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-full text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                    <div><p className="text-xs text-slate-500 uppercase font-bold">Pace</p><p className="font-bold text-slate-900">Medium / Relaxed</p></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Why this 10-day route?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                This is our most requested itinerary for travelers who want to see it all without feeling rushed. You get the perfect mix of <strong className="text-slate-900">Ancient Culture</strong> (Sigiriya & Kandy), <strong className="text-slate-900">Nature</strong> (Ella & Nuwara Eliya), <strong className="text-slate-900">Wildlife</strong> (Yala Safari), and <strong className="text-slate-900">Beach Relaxation</strong> (Mirissa/Bentota). Plus, with a private driver, you can stop for fresh king coconut or photos whenever you like.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-amber-500">★</span> What is included in your price:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                   {["Private AC Vehicle (Car/Van)", "English-Speaking Driver Guide", "Gas, Tolls, & Parking Fees", "Driver's Food & Accommodation", "Airport Pick-up & Drop-off", "Local Hidden Gem Recommendations"].map((item, i) => (
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
                <h3 className="text-xl font-bold text-slate-900">Day 1: Welcome to the Tropics</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Airport → Dambulla</p>
                <p className="text-slate-600 leading-relaxed">
                  After a warm welcome at the airport, we head straight to the Cultural Triangle. Shake off the jet lag with a visit to the Golden Temple of Dambulla. In the evening, we can hike <strong>Pidurangala Rock</strong> for a stunning sunset view facing Sigiriya.
                </p>
              </div>

              {/* Day 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 2: The Lion Rock Fortress</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Sigiriya → Kandy</p>
                <p className="text-slate-600 leading-relaxed">
                  We beat the crowds with an early morning climb of the UNESCO World Heritage <strong>Sigiriya Rock Fortress</strong>. Afterwards, we drive to the hill capital, Kandy, stopping at a spice garden en route. Evening cultural dance show and Temple of the Tooth visit.
                </p>
              </div>

              {/* Day 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 3: Into the Misty Mountains</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Kandy → Nuwara Eliya</p>
                <p className="text-slate-600 leading-relaxed">
                  A scenic ascent into "Little England." We wind through endless green tea plantations, visit a working Tea Factory to taste pure Ceylon tea, and see the majestic Ramboda Falls. Enjoy the cool climate and colonial architecture.
                </p>
              </div>

              {/* Day 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Day 4: The Iconic Train Ride</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Train to Ella</p>
                <p className="text-slate-600 leading-relaxed">
                  We drop you at Nanu Oya station for the world-famous <strong>scenic train ride to Ella</strong>. Hang out the door (safely!) and enjoy the views while your driver takes your bags to Ella. Evening chill in the backpacker-friendly town of Ella.
                </p>
              </div>

              {/* Day 5 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 5: Ella's Peaks & Bridges</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Hiking & Sightseeing</p>
                <p className="text-slate-600 leading-relaxed">
                  Start with a photo op at the famous <strong>Nine Arch Bridge</strong>. Then, an easy hike up Little Adam’s Peak for panoramic views. Optional: Visit the Ravana Pool Club or try the Flying Ravana zipline if you're feeling adventurous.
                </p>
              </div>

               {/* Day 6 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow-md" />
                <h3 className="text-xl font-bold text-slate-900">Day 6: Wildlife Safari</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Ella → Yala / Udawalawe</p>
                <p className="text-slate-600 leading-relaxed">
                  We descend from the hills to the dry zone. Check into your safari hotel and head out for an evening 4x4 Jeep Safari. Whether it's the leopards of Yala or the elephant herds of Udawalawe, this is a highlight of the trip.
                </p>
              </div>

               {/* Day 7 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 7: The South Coast</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Yala → Mirissa / Unawatuna</p>
                <p className="text-slate-600 leading-relaxed">
                  Time for the beach! We drive along the scenic southern coastline. Relax on the golden sands of Mirissa or Unawatuna. Optional: Coconut Tree Hill sunset or seasonal whale watching.
                </p>
              </div>

               {/* Day 8 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 8: Dutch Fort History</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Activity: Galle Fort & Turtle Hatchery</p>
                <p className="text-slate-600 leading-relaxed">
                  Explore the UNESCO-listed <strong>Galle Dutch Fort</strong>, wandering its cobbled streets lined with cafes and boutiques. On the way north, we can visit a sea turtle conservation project to see baby turtles being rehabilitated.
                </p>
              </div>

               {/* Day 9 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 9: Tropical River Safari</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Bentota → Colombo</p>
                <p className="text-slate-600 leading-relaxed">
                  Relax in the beach resort town of Bentota. Take a boat safari on the Madu River mangrove forests. In the late afternoon, we head to the capital, Colombo, for a city tour and some last-minute shopping.
                </p>
              </div>

              {/* Day 10 */}
               <div className="relative">
                <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300" />
                <h3 className="text-xl font-bold text-slate-900">Day 10: Departure</h3>
                <p className="text-slate-500 text-sm mb-2 font-medium">Route: Colombo → Airport</p>
                <p className="text-slate-600 leading-relaxed">
                  After breakfast (or depending on your flight time), your driver will transfer you to the airport. You leave with photos, souvenirs, and unforgettable memories of this island paradise!
                </p>
              </div>

            </div>
          </div>

          {/* NEW: "Travel Site Style" Testimonial */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100">
             
             {/* Header: Avatar + Name + Date */}
             <div className="flex items-center gap-3 mb-4">
               {/* FIX: Replaced text path with real Image component.
                  Note: The parent div has 'relative', 'rounded-full', and 'overflow-hidden'.
                  This clips the image into a perfect circle.
               */}
               <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  <Image 
                    src="/images/femele traveler at vibrant tea plantations of Nuwara Eliya, Sri Lanka.webp"
                    alt="Mia - Traveler Review"
                    fill
                    className="object-cover"
                  />
               </div>
               
               <div className="text-sm">
                 <p className="leading-tight"><span className="font-bold text-slate-900">Mia</span> wrote a review</p>
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
               One of the best & unique experiences I had in Sri Lanka
             </h3>

             {/* Review Body */}
             <div className="text-slate-700 leading-relaxed space-y-4 text-[15px]">
                <p>
                  “I just did a 10-day solo trip with a Tour guide. His name is Cham from Sri Lankkan Private driver team, and it was one of the best & unique experiences I had in Sri Lanka. That's why I want to warmly recommend him to you.
                </p>
                <p>
                  Let me tell you, <strong>Cham is a master at uncovering hidden gems and secret waterfalls</strong> that only a local like him could know... it was the little details that made this trip special.
                </p>
                <p>
                  The tour included visiting his parent's home where <strong>his mom cooked delicious food</strong>—since that day I eat rice & curry only with my hands! I even spontaneously got invited to a wedding in Kandy and we organized a traditional Sari!”
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
              <CustomItineraryInternalLink days={10} />

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