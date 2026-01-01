// =====================
// PAGE TYPES
// =====================

export type PageType =
  | "home"
  | "hub"
  | "route"
  | "service"
  | "trust"
  | "guide"
  | "contact";

export type PageSpec = {
  id: string;
  type: PageType;
  path: `/${string}` | "/";
  title: string;
  description: string;
  linksTo: string[];

  /** UI control: disable default header when page has a custom luxury hero */
  showHeader?: boolean;

  /** Luxury UI: Cinematic Hero image (WebP) */
  heroImage?: string;

  /** Luxury UI: Display price in conversion sticky bars */
  startPrice?: string;
};

// =====================
// PAGE DEFINITIONS
// =====================

export const pages: PageSpec[] = [
  // =====================
  // CORE AUTHORITY PAGES
  // =====================

  {
    id: "home",
    type: "home",
    path: "/",
    title: "Sri Lanka Airport Transfer | Private Pickup & Fixed Prices",
    description: "Pre-book private Sri Lanka airport transfers with fixed pricing and professional drivers.",
    linksTo: ["hub_airport", "private_driver", "prices", "vehicles", "contact"],
    heroImage: "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp",
  },

  {
    id: "hub_airport",
    type: "hub",
    path: "/colombo-airport-transfer/",
    title: "Colombo Airport Transfer | Private Taxi & Driver Service",
    description: "Book reliable Colombo airport transfers with fixed prices, meet-and-greet service, and comfortable vehicles.",
    linksTo: [
      "routes_index",
      "route_kandy",
      "route_galle",
      "route_ella",
      "prices",
      "vehicles",
      "contact",
    ],
    heroImage: "/images/sri-lanka-private-airport-transfer-driver-service.webp",
    showHeader: false, // Use luxury hero
  },

  // =====================
  // AIRPORT TRANSFER CLUSTER
  // =====================
  {
    id: "at_route_galle",
    type: "route",
    path: "/airport-transfer/colombo-to-galle/",
    title: "Colombo Airport to Galle Transfer | Private & Direct",
    description: "Book a direct, private transfer from Colombo Airport (CMB) to Galle. Fixed prices and comfortable vehicles for a hassle-free journey.",
    linksTo: ["hub_airport", "at_route_kandy", "at_booking_process"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
    startPrice: "$50"
  },
  {
    id: "at_route_kandy",
    type: "route",
    path: "/airport-transfer/colombo-to-kandy/",
    title: "Colombo Airport to Kandy Transfer | Scenic & Private",
    description: "Your private driver will take you on a scenic and comfortable journey from Colombo Airport (CMB) to the cultural city of Kandy.",
    linksTo: ["hub_airport", "at_route_galle", "at_booking_process"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
    startPrice: "$45"
  },
  {
    id: "at_route_mirissa",
    type: "route",
    path: "/airport-transfer/colombo-to-mirissa/",
    title: "Colombo Airport to Mirissa Transfer | Beach & Whale Watching",
    description: "Start your beach holiday right with a private transfer from Colombo Airport (CMB) to Mirissa, the whale watching hotspot.",
    linksTo: ["hub_airport", "at_route_galle", "at_booking_process"],
    heroImage: "/images/Happy-German-Lady-travelled-to-unuwatana-Sri Lanka.webp",
    startPrice: "$55"
  },
  {
    id: "at_vehicles",
    type: "trust",
    path: "/airport-transfer/vehicle-options/",
    title: "Our Vehicle Fleet | Airport Transfers Sri Lanka",
    description: "Choose from our fleet of modern, air-conditioned cars, SUVs, and vans for your airport transfer in Sri Lanka. Perfect for any group size.",
    linksTo: ["hub_airport", "at_booking_process"],
    heroImage: "/images/Vehicle fleet Sri Lanka Private Driver.webp",
  },
  {
    id: "at_booking_process",
    type: "guide",
    path: "/airport-transfer/booking-process/",
    title: "How to Book Your Airport Transfer | 3 Easy Steps",
    description: "Booking your Sri Lanka airport transfer is simple. Follow our easy 3-step process to secure your private driver and vehicle.",
    linksTo: ["hub_airport", "contact"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.webp",
  },

  {
    id: "private_driver",
    type: "service",
    path: "/private-driver-sri-lanka/",
    title: "Private Driver in Sri Lanka | Daily Hire & Professional Tours",
    description: "Hire a private driver in Sri Lanka for multi-day tours with fixed daily pricing and modern vehicles.",
    linksTo: ["hub_airport", "prices", "vehicles", "contact"],
    showHeader: false, // 🔑 Critical: hides old header to show the new luxury hero
    heroImage: "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp",
    startPrice: "$55/day"
  },

  // =====================
  // PRIVATE DRIVER CLUSTER
  // =====================
  {
    id: "private_driver_costs",
    type: "guide",
    path: "/private-driver-sri-lanka/costs-and-rates/",
    title: "Private Driver Costs in Sri Lanka | Rates & Pricing",
    description: "Understand the costs and rates for hiring a private driver in Sri Lanka. Get transparent pricing for your tour.",
    linksTo: ["private_driver", "contact", "private_driver_benefits"],
    heroImage: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants_yala.webp",
    startPrice: "$55/day"
  },
  {
    id: "private_driver_benefits",
    type: "guide",
    path: "/private-driver-sri-lanka/benefits-vs-self-drive/",
    title: "Private Driver vs. Self-Drive in Sri Lanka | Benefits Guide",
    description: "Discover the benefits of hiring a private driver in Sri Lanka compared to self-driving. Make the right choice for your trip.",
    linksTo: ["private_driver", "contact", "private_driver_costs"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
    startPrice: "$55/day"
  },
  {
    id: "private_driver_meet",
    type: "trust",
    path: "/private-driver-sri-lanka/meet-our-drivers/",
    title: "Meet Our Drivers | Professional & Local Experts",
    description: "Get to know our team of professional, friendly, and knowledgeable private drivers in Sri Lanka.",
    linksTo: ["private_driver", "contact"],
    heroImage: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
  },

  {
    id: "prices",
    type: "trust",
    path: "/prices/",
    title: "Sri Lanka Airport Transfer Prices | Fixed & All-Inclusive Rates",
    description: "View transparent Sri Lanka airport transfer prices. Fixed, all-inclusive rates with no hidden fees.",
    linksTo: ["hub_airport", "contact"],
    startPrice: "From $15",
  },

  {
    id: "vehicles",
    type: "trust",
    path: "/vehicle-options/",
    title: "Vehicle Options | Cars, SUVs & Vans for Airport Transfers",
    description: "Choose from comfortable cars, SUVs, and vans for your Sri Lanka airport transfer.",
    linksTo: ["prices", "hub_airport", "contact"],
    heroImage: "/images/sri-lanka-private-airport-transfer-driver-service.webp",
  },

  {
    id: "contact",
    type: "contact",
    path: "/contact/",
    title: "Book Sri Lanka Airport Transfer | WhatsApp & Booking Form",
    description: "Book your Sri Lanka airport transfer in minutes via WhatsApp or request a fixed-price quote.",
    linksTo: ["hub_airport", "prices"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
  },

  // =====================
  // SRI LANKA TOURS SILO
  // =====================
  {
    id: "sri_lanka_tours",
    type: "hub",
    path: "/sri-lanka-tours/",
    title: "Sri Lanka Tours | Curated Travel Packages & Experiences",
    description: "Explore the best of Sri Lanka with our curated tours. From wildlife safaris to cultural heritage and beach holidays, find your perfect trip.",
    linksTo: ["tours_wildlife", "tours_cultural", "tours_scenic_train", "tours_beach", "tours_adventure", "private_driver", "contact"],
    heroImage: "/images/Happy_couple in sri lanka rural road.webp",
  },
  {
    id: "tours_wildlife",
    type: "guide",
    path: "/tours/wildlife-safari-yala-and-udawalawe/",
    title: "Sri Lanka Wildlife Safari Tours | Yala & Udawalawe",
    description: "Experience the thrill of a wildlife safari in Sri Lanka. Spot leopards in Yala, elephants in Udawalawe, and more with our expert guides.",
    linksTo: ["sri_lanka_tours", "contact"],
    heroImage: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants.webp",
    startPrice: "$90"
  },
  {
    id: "tours_cultural",
    type: "guide",
    path: "/tours/cultural-triangle-sigiriya-anuradhapura/",
    title: "Cultural Triangle Tours | Sigiriya, Kandy & Anuradhapura",
    description: "Journey through Sri Lanka's rich history. Explore the ancient cities of the Cultural Triangle, including Sigiriya rock fortress and the Temple of the Tooth.",
    linksTo: ["sri_lanka_tours", "contact"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
    startPrice: "$120"
  },
  {
    id: "tours_scenic_train",
    type: "guide",
    path: "/tours/scenic-train-ride-kandy-to-ella/",
    title: "Kandy to Ella Train Tour | The World's Most Scenic Ride",
    description: "Book the famous Kandy to Ella train journey. We arrange tickets and a private driver to handle your luggage and meet you at the destination.",
    linksTo: ["sri_lanka_tours", "contact"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
  },
  {
    id: "tours_beach",
    type: "guide",
    path: "/tours/beach-holiday-south-coast/",
    title: "Sri Lanka Beach Holiday | Galle, Mirissa & Unawatuna",
    description: "Relax on the golden shores of Sri Lanka's south coast. We'll take you to the best beaches like Mirissa, Unawatuna, and beyond.",
    linksTo: ["sri_lanka_tours", "contact"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
  },
  {
    id: "tours_adventure",
    type: "guide",
    path: "/tours/adventure-and-hiking-tours/",
    title: "Adventure & Hiking Tours in Sri Lanka | Ella & Knuckles",
    description: "Embark on an adventure. Hike the stunning Knuckles Mountain Range, climb Ella Rock, and discover Sri Lanka's thrilling landscapes.",
    linksTo: ["sri_lanka_tours", "contact"],
    heroImage: "/images/sigiriya-lion-rock-fortress-tourist-view-sri-lanka.webp",
  },

  // =====================
  // TRAVEL GUIDE SILO
  // =====================
  {
    id: "travel_guide",
    type: "hub",
    path: "/travel-guide/",
    title: "Sri Lanka Travel Guide | Tips for First-Time Visitors",
    description: "Your essential guide to traveling in Sri Lanka. Find tips on safety, when to visit, visas, what to pack, local food, and staying connected.",
    linksTo: ["guide_colombo", "guide_safety", "guide_best_time", "guide_visa", "guide_connectivity", "guide_packing", "guide_food", "private_driver"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
  },
  {
    id: "guide_colombo",
    type: "guide",
    path: "/travel-guide/colombo/",
    title: "Colombo Travel Guide | Things to Do, See & Eat",
    description: "Your ultimate guide to Colombo, Sri Lanka. Discover the best things to do, top attractions like Gangaramaya Temple, where to eat, and travel hacks for your visit.",
    linksTo: ["travel_guide", "contact", "private_driver"],
    heroImage: "/images/Colombo lotus tower.webp",
  },
  {
    id: "guide_safety",
    type: "guide",
    path: "/travel-guide/is-sri-lanka-safe-to-travel/",
    title: "Is Sri Lanka Safe for Tourists? | Safety Guide",
    description: "A comprehensive guide to travel safety in Sri Lanka for tourists. Learn about local customs, health precautions, and tips for a worry-free trip.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/Happy-German-Lady-travelled-to-unuwatana-Sri Lanka.webp",
  },
  {
    id: "guide_best_time",
    type: "guide",
    path: "/travel-guide/best-time-to-visit-sri-lanka/",
    title: "When Is the Best Time to Visit Sri Lanka?",
    description: "Discover the best time to visit Sri Lanka, considering the island's two monsoon seasons and regional weather patterns for a perfect holiday.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
  },
  {
    id: "guide_visa",
    type: "guide",
    path: "/travel-guide/sri-lanka-visa-and-immigration/",
    title: "Sri Lanka Visa & Immigration Guide for Tourists",
    description: "Everything you need to know about getting a tourist visa for Sri Lanka, including the online ETA process and visa extensions.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.png",
  },
  {
    id: "guide_connectivity",
    type: "guide",
    path: "/travel-guide/currency-sim-cards-and-connectivity/",
    title: "Currency, SIM Cards & Connectivity in Sri Lanka",
    description: "A guide to handling money (LKR), buying a local SIM card (Dialog/Mobitel), and staying connected with Wi-Fi and mobile data in Sri Lanka.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.webp",
  },
  {
    id: "guide_packing",
    type: "guide",
    path: "/travel-guide/what-to-pack-for-sri-lanka/",
    title: "What to Pack for Sri Lanka | Essential Packing List",
    description: "A complete packing list for your trip to Sri Lanka, including clothing for different climates, temple etiquette, and essential items.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/femele traveler at vibrant tea plantations of Nuwara Eliya, Sri Lanka.webp",
  },
  {
    id: "guide_food",
    type: "guide",
    path: "/travel-guide/sri-lankan-food-and-cuisine/",
    title: "Sri Lankan Food Guide | What to Eat and Drink",
    description: "Discover the delicious world of Sri Lankan cuisine. A guide to the must-try dishes, from rice and curry to kottu roti and street food.",
    linksTo: ["travel_guide", "contact"],
    heroImage: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
  },

  // =====================
  // ROUTE PAGES
  // =====================

  {
    id: "route_kandy",
    type: "route",
    path: "/airport-to-kandy-taxi/",
    title: "Airport to Kandy Taxi | Private Transfer with Driver",
    description: "Pre-book a private taxi from Colombo Airport to Kandy with fixed pricing and professional drivers.",
    linksTo: ["hub_airport", "prices", "vehicles", "route_ella", "route_dambulla"],
    startPrice: "$45",
  },

  {
    id: "route_galle",
    type: "route",
    path: "/airport-to-galle-taxi/",
    title: "Airport to Galle Taxi | Private Transfer Service",
    description: "Book a private airport taxi from Colombo Airport to Galle with all-inclusive pricing.",
    linksTo: ["hub_airport", "prices", "vehicles", "route_unawatuna"],
    startPrice: "$50",
  },

  {
    id: "route_ella",
    type: "route",
    path: "/airport-to-ella-taxi/",
    title: "Airport to Ella Taxi | Private Transfer & Scenic Route",
    description: "Travel from Colombo Airport to Ella with a private driver. Fixed rates available.",
    linksTo: ["hub_airport", "prices", "vehicles", "route_kandy"],
    startPrice: "$85",
  },

  {
    id: "route_sigiriya",
    type: "route",
    path: "/airport-to-sigiriya-taxi/",
    title: "Airport to Sigiriya Taxi | Private Transfer Service",
    description: "Book a private taxi from Colombo Airport to Sigiriya with fixed pricing.",
    linksTo: ["hub_airport", "prices", "vehicles", "route_dambulla"],
    startPrice: "$55",
  },

  {
    id: "route_negombo",
    type: "route",
    path: "/airport-to-negombo-taxi/",
    title: "Airport to Negombo Taxi | Private Transfer Service",
    description: "Quick and reliable private taxi from Colombo Airport to Negombo.",
    linksTo: ["hub_airport", "prices", "vehicles"],
    startPrice: "$15",
  },

  // =====================
  // TRUST + GUIDES
  // =====================

  {
    id: "how_it_works",
    type: "trust",
    path: "/how-it-works/",
    title: "How Sri Lanka Airport Transfers Work",
    description: "Learn how our Sri Lanka airport transfer service works—from booking to pickup.",
    linksTo: ["hub_airport", "contact"],
  },

  {
    id: "best_travel",
    type: "guide",
    path: "/best-way-to-travel-sri-lanka/",
    title: "Best Way to Travel Around Sri Lanka",
    description: "Compare taxis, private drivers, trains, and buses to travel Sri Lanka comfortably.",
    linksTo: ["private_driver", "hub_airport"],
    heroImage: "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp",
  },
];