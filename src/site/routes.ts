// =======================
// ROUTE TYPES
// =======================

export type RouteId =
  | "route_kandy"
  | "route_galle"
  | "route_ella"
  | "route_sigiriya"
  | "route_dambulla"
  | "route_negombo"
  | "route_colombo"
  | "route_nuwara_eliya"
  | "route_unawatuna"
  | "route_mirissa"
  | "route_bentota"
  | "route_hikkaduwa"
  | "route_tangalle";

export type RouteInfo = {
  id: RouteId;
  from: string;
  to: string;

  distanceKm: string;
  expressTime: string;
  scenicTime: string;

  expressNotes: string;
  scenicNotes: string;

  expressHighlights?: string[];
  scenicHighlights?: string[];

  included: string[];
  faqs: { q: string; a: string }[];
};

// =======================
// ROUTE DATA
// =======================

export const routeInfo: Partial<Record<RouteId, RouteInfo>> = {
  // -----------------------
  // AIRPORT → KANDY
  // -----------------------
  route_kandy: {
  id: "route_kandy",
  from: "Colombo Airport (CMB)",
  to: "Kandy",

  distanceKm: "115–140",
  expressTime: "3–4 hours",
  scenicTime: "4.5–6 hours",

  expressNotes:
    "The fastest way to travel from Colombo Airport to Kandy. Ideal if you want to reach your hotel quickly or arrive late in the day.",

  scenicNotes:
    "A longer but scenic journey through countryside, hills, and local towns. Best for daytime travel if you enjoy views along the way.",

  expressHighlights: [
    "Fastest route from the airport to Kandy",
    "Smoother drive with fewer slow sections",
    "Best for late arrivals or same-day plans",
  ],

  scenicHighlights: [
    "Hill country views near Kadugannawa",
    "Optional local tea or rest stops",
    "More relaxed daytime road trip experience",
  ],

  included: [
    "Private taxi with professional driver (no sharing)",
    "Fixed, all-inclusive price confirmed before pickup",
    "Meet & greet at Colombo Airport arrivals",
    "Flight delay tracking at no extra cost",
    "Restroom or refreshment stops on request",
    "Choice of express or scenic route",
  ],

  faqs: [
    {
      q: "How long does it take from Colombo Airport to Kandy?",
      a: "The trip usually takes about 3–4 hours via the express route, or longer if you choose the scenic route.",
    },
    {
      q: "Is the price fixed for the airport to Kandy transfer?",
      a: "Yes. You receive a fixed, all-inclusive price before pickup with no hidden charges.",
    },
    {
      q: "Can we stop for food or restrooms on the way?",
      a: "Yes. Short comfort stops are available on request during the journey.",
    },
    {
      q: "Which route should I choose — express or scenic?",
      a: "Choose the express route for speed, or the scenic route for countryside and hill views during daytime.",
    },
    {
      q: "Do you provide larger vehicles or child seats?",
      a: "Yes. SUVs, vans, and child seats can be arranged if requested in advance.",
    },
  ],
},


  // -----------------------
  // AIRPORT → NEGOMBO
  // -----------------------
  route_negombo: {
    id: "route_negombo",
    from: "Colombo Airport (CMB)",
    to: "Negombo",

    distanceKm: "10–12",
    expressTime: "20–30 minutes",
    scenicTime: "30–40 minutes",

    expressNotes:
      "The fastest and most popular option after landing. Ideal for late-night arrivals or quick hotel check-in.",

    scenicNotes:
      "A relaxed coastal approach when traffic allows, best for daytime arrivals.",

    expressHighlights: [
      "Shortest transfer from Colombo Airport",
      "Ideal after long international flights",
      "Quick arrival at hotel or guesthouse",
    ],

    scenicHighlights: [
      "Views near the Negombo lagoon",
      "Local town atmosphere",
      "More relaxed daytime drive",
    ],

    included: [
      "Private airport taxi (no sharing)",
      "Fixed, all-inclusive price confirmed upfront",
      "Meet & greet pickup at Colombo Airport",
      "Flight delay tracking at no extra cost",
      "Hotel or guesthouse drop-off",
    ],

    faqs: [
      {
        q: "How far is Negombo from Colombo Airport?",
        a: "Negombo is very close and usually takes about 20–30 minutes by private taxi.",
      },
      {
        q: "Is Negombo a good first-night stop?",
        a: "Yes. Many travelers stay in Negombo to rest after arrival and continue their trip the next day.",
      },
      {
        q: "What if my flight arrives late at night?",
        a: "Your driver tracks your flight and waits, even for late-night or delayed arrivals.",
      },
      {
        q: "Can you arrange onward travel from Negombo?",
        a: "Yes. We can arrange transfers to Kandy, Sigiriya, Ella, Galle, and more.",
      },
      {
        q: "Is the price fixed?",
        a: "Yes. You receive a fixed price before pickup with no hidden charges.",
      },
    ],
  },

  // -----------------------
  // AIRPORT → COLOMBO CITY
  // -----------------------
  route_colombo: {
    id: "route_colombo",
    from: "Colombo Airport (CMB)",
    to: "Colombo City",

    distanceKm: "30–35",
    expressTime: "45–60 minutes",
    scenicTime: "60–90 minutes",

    expressNotes:
      "The fastest way to reach Colombo city using the expressway. Ideal for business travelers, hotels, and late-night arrivals.",

    scenicNotes:
      "A slower city approach with coastal and urban views, best during off-peak hours.",

    expressHighlights: [
      "Direct expressway access",
      "Reliable travel time for business schedules",
      "Fast city arrival late at night",
    ],

    scenicHighlights: [
      "Coastal road sections",
      "Urban Colombo city views",
      "Better for daytime, low-traffic travel",
    ],

    included: [
      "Private airport taxi (no sharing)",
      "Fixed, all-inclusive price confirmed upfront",
      "Meet & greet pickup at Colombo Airport",
      "Flight delay tracking at no extra cost",
      "Hotel, apartment, or office drop-off",
    ],

    faqs: [
      {
        q: "How long does it take from the airport to Colombo city?",
        a: "The transfer usually takes about 45–60 minutes via the expressway, depending on traffic.",
      },
      {
        q: "Is this suitable for business travelers?",
        a: "Yes. Many business travelers use this service for direct hotel or office drop-off.",
      },
      {
        q: "Which areas of Colombo do you cover?",
        a: "We cover Colombo Fort, Colombo 03, 04, 05, 07, and nearby areas.",
      },
      {
        q: "What if my flight is delayed?",
        a: "We track your flight and adjust pickup time automatically.",
      },
      {
        q: "Is the price fixed?",
        a: "Yes. You receive a fixed, all-inclusive price before pickup.",
      },
    ],
  },


  // -----------------------
  // Route Galle
  // -----------------------



route_galle: {
  id: "route_galle",
  from: "Colombo Airport (CMB)",
  to: "Galle",

  distanceKm: "150–160",
  expressTime: "3–3.5 hours",
  scenicTime: "4–5 hours",

  expressNotes:
    "The fastest way to travel from Colombo Airport to Galle using the Southern Expressway. Best if you want to reach your hotel quickly and relax by the beach.",

  scenicNotes:
    "A beautiful coastal journey with optional short stops along the way. Ideal for daytime arrivals who want to enjoy local life, rivers, beaches, and small attractions without rushing.",

  expressHighlights: [
    "Quick access to the Southern Expressway",
    "Most time-efficient option to reach Galle",
    "Best for late arrivals or short stays",
  ],

  scenicHighlights: [
    "Kalutara Dagaba – a peaceful riverside temple next to the Kalu Ganga",
    "Turtle conservation centers along the coast",
    "Local tea shops with fresh Sri Lankan tea",
    "Young king coconut stops for a refreshing drink",
    "Famous coconut tree swing photo stops by the beach",
    "Enjoy coastal views without compromising your travel day",
  ],

  included: [
    "Private airport taxi with experienced local driver",
    "Fixed, all-inclusive price confirmed before pickup",
    "Meet & greet at Colombo Airport arrivals",
    "Flight delay tracking at no extra cost",
    "Optional short scenic stops on request",
    "Hotel, villa, or guesthouse drop-off in Galle area",
  ],

  faqs: [
    {
      q: "How long does it take from Colombo Airport to Galle?",
      a: "The journey usually takes about 3–3.5 hours via the expressway, or longer if you choose the scenic coastal route with stops.",
    },
    {
      q: "Can we stop at places like Kalutara or turtle centers?",
      a: "Yes. Short stops such as Kalutara Dagaba, turtle conservation centers, tea shops, or coconut drink stops can be arranged without affecting your day too much.",
    },
    {
      q: "Is this a private taxi or shared transfer?",
      a: "This is a private transfer with your own driver and vehicle. No sharing with other passengers.",
    },
    {
      q: "What if I want to explore more places around Galle?",
      a: "If you want the full experience with beaches, cultural sites, and nearby attractions, we recommend booking our private driver service for a multi-day tour.",
    },
    {
      q: "Is the price fixed for the airport to Galle transfer?",
      a: "Yes. You receive a fixed, all-inclusive price before pickup with no hidden fees.",
    },
  ],
},

  // -----------------------
  // Route Ella
  // -----------------------


  route_ella: {
  id: "route_ella",
  from: "Colombo Airport (CMB)",
  to: "Ella",

  distanceKm: "200–220",
  expressTime: "5.5–6.5 hours",
  scenicTime: "7–9 hours",

  expressNotes:
    "Best if you want to reach Ella as quickly as possible after landing. Ideal for late arrivals or travelers heading straight to their hotel.",

  scenicNotes:
    "This is the classic Ella journey. Slow, winding mountain roads, waterfalls, misty hills, and unforgettable views. Best for daytime travel if you want to truly experience Sri Lanka.",

  expressHighlights: [
    "Fastest way to reach Ella from Colombo Airport",
    "Less time on mountain roads",
    "Best for late-night or overnight transfers",
  ],

  scenicHighlights: [
    "Gem mining area in Ratnapura — see how Sri Lanka’s famous gems are discovered",
    "World’s largest open-air gem market (seasonal stops)",
    "Belihul Oya scenery with rivers and waterfalls",
    "Winding hill roads with dramatic views as you approach Ella",
    "Especially beautiful after rain, with clouds hanging low over the trees",
  ],

  included: [
    "Private vehicle with an experienced local driver",
    "Fixed, all-inclusive price confirmed before pickup",
    "Choice of scenic or express route",
    "Comfort stops for food, photos, or restrooms on request",
    "English-speaking driver familiar with hill-country roads",
  ],

  faqs: [
    {
      q: "Is the scenic route to Ella worth it?",
      a: "Yes. Most travelers say the scenic drive is one of the best parts of their Sri Lanka trip, especially during daylight hours.",
    },
    {
      q: "What makes Ella so special?",
      a: "Ella is known for cool mountain air, winding roads, misty views, waterfalls, and a relaxed pace that makes you slow down and enjoy the moment.",
    },
    {
      q: "Can we stop along the way to Ella?",
      a: "Yes. Your driver can stop for waterfalls, viewpoints, tea shops, or rest breaks depending on timing and your preference.",
    },
    {
      q: "Is Ella difficult to reach without a driver?",
      a: "Yes. The hill roads are narrow and winding. Most visitors prefer a private driver rather than driving themselves.",
    },
    {
      q: "Can Ella be part of a longer tour?",
      a: "Absolutely. Many travelers include Ella as part of a multi-day journey with a private driver in Sri Lanka.",
    },
  ],
},



  // -----------------------
  // Route Sigiriya
  // -----------------------


  route_sigiriya: {
    id: "route_sigiriya",
    from: "Colombo Airport (CMB)",
    to: "Sigiriya",

    distanceKm: "170–180",
    expressTime: "4.5–5.5 hours",
    scenicTime: "6–7.5 hours",

    expressNotes:
      "The most direct way to reach Sigiriya from Colombo Airport. Best if you want to arrive the same day and rest before exploring the area.",

    scenicNotes:
      "A rewarding cultural journey through Sri Lanka’s heartland. Ideal for daytime travel with stops at historic sites, villages, and natural scenery.",

    expressHighlights: [
      "Faster arrival into the Cultural Triangle",
      "Good option for late or evening arrivals",
      "Smooth long-distance drive with fewer stops",
    ],

    scenicHighlights: [
      "Dambulla Cave Temple – ancient cave shrine with stunning frescoes",
      "Village roads and rural scenery along the way",
      "Pidurangala Rock area views",
      "Lakes, forests, and countryside landscapes",
      "Relaxed travel pace with cultural stops",
    ],

    included: [
      "Private airport transfer with experienced local driver",
      "Fixed, all-inclusive price confirmed before pickup",
      "Meet & greet at Colombo Airport arrivals",
      "Flight delay tracking at no extra cost",
      "Comfort, photo, and refreshment stops on request",
      "Hotel or resort drop-off in Sigiriya area",
    ],

    faqs: [
      {
        q: "How long does it take from Colombo Airport to Sigiriya?",
        a: "The journey usually takes about 4.5–5.5 hours by the faster route, or longer if you choose scenic and cultural stops.",
      },
      {
        q: "Can we visit Dambulla Cave Temple on the way?",
        a: "Yes. Dambulla Cave Temple is only about 20 minutes from Sigiriya and can be visited during the transfer or after arrival.",
      },
      {
        q: "What are the main things to do in Sigiriya?",
        a: "Top attractions include Sigiriya Lion Rock, Pidurangala Rock for sunrise or sunset, village tours, lake canoe rides, and cultural sites nearby.",
      },
      {
        q: "Is Sigiriya suitable for staying more than one night?",
        a: "Yes. Most travelers stay at least 2–3 nights to enjoy Sigiriya Rock, nearby temples, village life, and wildlife parks.",
      },
      {
        q: "What if I want to explore the Cultural Triangle slowly?",
        a: "For a relaxed experience covering Sigiriya, Dambulla, Polonnaruwa, and safaris, we recommend booking our private driver service for a multi-day tour.",
      },
    ],
  },

  // -----------------------
  // Route Dambulla
  // -----------------------

  route_dambulla: {
    id: "route_dambulla",
    from: "Colombo Airport (CMB)",
    to: "Dambulla",

    distanceKm: "150–160",
    expressTime: "4–5 hours",
    scenicTime: "5.5–7 hours",

    expressNotes:
      "The most direct way to reach Dambulla from Colombo Airport. Best if you want to arrive the same day and visit the cave temple or relax before exploring nearby sites.",

    scenicNotes:
      "A relaxed cultural journey through villages, forests, and countryside. Ideal for daytime travel if you want to enjoy local life and short experiences along the way.",

    expressHighlights: [
      "Faster arrival into the Cultural Triangle",
      "Good option for late or evening arrivals",
      "Comfortable long-distance drive",
    ],

    scenicHighlights: [
      "Dambulla Cave Temple (Golden Temple) with ancient murals and statues",
      "Village cooking classes and local food experiences",
      "Hot air balloon rides over Dambulla and Sigiriya landscapes",
      "Lakes, forests, and rural village scenery",
      "Easy access to Sigiriya and Pidurangala Rock",
    ],

    included: [
      "Private airport taxi with experienced local driver",
      "Fixed, all-inclusive price confirmed before pickup",
      "Meet & greet at Colombo Airport arrivals",
      "Flight delay tracking at no extra cost",
      "Optional comfort, photo, and activity stops on request",
      "Hotel or guesthouse drop-off in Dambulla area",
    ],

    faqs: [
      {
        q: "How long does it take from Colombo Airport to Dambulla?",
        a: "The transfer usually takes about 4–5 hours by the faster route, or longer if you choose scenic travel with stops.",
      },
      {
        q: "What activities can I do in Dambulla?",
        a: "Popular activities include visiting the Dambulla Cave Temple, village tours, cooking classes, hot air balloon rides, and exploring nearby lakes and countryside.",
      },
      {
        q: "Is the Dambulla Cave Temple difficult to visit?",
        a: "The cave temple involves a climb of steps but is manageable for most visitors. It is best visited earlier in the day to avoid heat.",
      },
      {
        q: "Is Dambulla close to Sigiriya?",
        a: "Yes. Sigiriya is only about 20 minutes away, making Dambulla a great base for visiting Lion Rock and Pidurangala.",
      },
      {
        q: "Can you recommend local food places in Dambulla?",
        a: "Yes. Your driver can recommend trusted family-run local restaurants and village dining experiences for authentic Sri Lankan food.",
      },
    ],
  },



};