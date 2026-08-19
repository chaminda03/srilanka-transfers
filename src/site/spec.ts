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

  /** SEO title. Written for the SERP — often long, usually contains a pipe. */
  title: string;
  description: string;
  linksTo: string[];

  /**
   * On-page <h1>.
   *
   * SpecPage used to render `title.split('|')[0]`, which made every H1 a
   * truncated copy of the title tag. They serve different jobs: the title
   * competes for the click in a 60-character SERP slot, the H1 states what
   * the page is to someone already reading it — and is a free slot for a
   * longer-tail phrasing the title can't fit. Falls back to the old
   * behaviour when unset.
   */
  h1?: string;

  /**
   * Short label for breadcrumbs. Page titles are far too long to sit in a
   * trail. Falls back to the title up to the first pipe.
   */
  crumbLabel?: string;

  /** UI control: disable default header when page has a custom luxury hero */
  showHeader?: boolean;

  /** Luxury UI: Cinematic Hero image (WebP) */
  heroImage?: string;

  /**
   * Alt text for the hero image.
   *
   * SpecPage used to pass `page.title` here, so the alt text on the Sigiriya
   * photo read "Cultural Triangle Tours | Sigiriya, Kandy & Anuradhapura".
   * Google Images is real traffic for a destination this photogenic; describe
   * the picture, not the page.
   */
  heroAlt?: string;

  /** Luxury UI: Display price in conversion sticky bars */
  startPrice?: string;

  /**
   * Date this page's CONTENT was last meaningfully changed (YYYY-MM-DD).
   * Feeds sitemap <lastmod> and og:updated_time.
   *
   * Bump it when you actually rewrite the page — not on every deploy.
   * Google discounts lastmod it finds unreliable, so a stale-but-true date
   * is worth more than a fresh lie. Falls back to siteConfig.contentUpdated.
   */
  updated?: string;
};

// =====================
// PAGE DEFINITIONS

/**
 * LINKING POLICY
 *
 * `linksTo` is the internal link graph. It drives <HelpfulLinks> in the
 * sidebar, so an entry here is a real, crawlable link on the rendered page.
 *
 * Two rules, both learned the hard way:
 *
 *  1. EVERY page needs at least three inbound links. Before this rewrite,
 *     each tour page had exactly one (its hub), and seven pages had none at
 *     all — including three /airport-to-*-taxi pages, the highest
 *     commercial-intent content on the site. Orphans get crawled rarely and
 *     rank alone.
 *
 *  2. Silos must link ACROSS, not just up and down. The tours cluster used
 *     to link only to its hub and /contact, and nothing in the commercial
 *     cluster linked into tours at all — so the pages with the most equity
 *     (airport transfer, prices, private driver) passed none of it to the
 *     content we actually want to rank for tour queries.
 *
 * The global nav links to five pages from everywhere; those carry no topical
 * signal, so they don't count toward rule 1.
 */
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
    crumbLabel: "Home",
    // Now links into the tours and travel-guide silos. It previously reached
    // neither, which left the site's strongest page passing nothing to them.
    linksTo: ["hub_airport", "private_driver", "sri_lanka_tours", "travel_guide", "prices", "vehicles", "contact"],
    heroImage: "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp",
    heroAlt: "Sigiriya Lion Rock fortress rising above the jungle in central Sri Lanka, a landmark stop on private driver tours.",
  },

  {
    id: "hub_airport",
    type: "hub",
    path: "/colombo-airport-transfer/",
    title: "Colombo Airport Transfer | Private Taxi & Driver Service",
    description: "Book reliable Colombo airport transfers with fixed prices, meet-and-greet service, and comfortable vehicles.",
    h1: "Colombo Airport Transfers with a Private Driver",
    crumbLabel: "Airport Transfers",
    linksTo: [
      "routes_index",
      "route_kandy",
      "route_galle",
      "route_ella",
      "route_colombo",
      "route_negombo",
      "at_booking_process",
      "prices",
      "vehicles",
      "contact",
    ],
    heroImage: "/images/sri-lanka-private-airport-transfer-driver-service.webp",
    heroAlt: "Private airport transfer driver standing beside an air-conditioned car at Bandaranaike International Airport, Colombo.",
    showHeader: false, // Use luxury hero
  },

  {
    id: "routes_index",
    type: "hub",
    path: "/airport-transfer-routes/",
    title: "Airport Transfer Routes",
    description: "Select a route below to see transfer details and request a fixed, all-inclusive quote.",
    h1: "Every Transfer Route from Colombo Airport",
    crumbLabel: "Routes",
    // This is the routes hub and it previously linked to no routes at all.
    linksTo: [
      "route_colombo",
      "route_negombo",
      "route_kandy",
      "route_galle",
      "route_ella",
      "route_sigiriya",
      "at_route_galle",
      "at_route_kandy",
      "at_route_mirissa",
      "hub_airport",
      "prices",
      "private_driver",
    ],
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
    h1: "Colombo Airport to Galle, Direct and Private",
    crumbLabel: "Colombo to Galle",
    linksTo: ["hub_airport", "at_route_kandy", "at_route_mirissa", "at_booking_process", "route_galle", "tours_beach", "prices"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
    heroAlt: "Aerial view of traditional outrigger fishing boats on the golden sand of a beach near Galle on Sri Lanka's south coast.",
    startPrice: "$50"
  },
  {
    id: "at_route_kandy",
    type: "route",
    path: "/airport-transfer/colombo-to-kandy/",
    title: "Colombo Airport to Kandy Transfer | Scenic & Private",
    description: "Your private driver will take you on a scenic and comfortable journey from Colombo Airport (CMB) to the cultural city of Kandy.",
    h1: "Colombo Airport to Kandy, Express or Scenic",
    crumbLabel: "Colombo to Kandy",
    linksTo: ["hub_airport", "at_route_galle", "at_route_mirissa", "at_booking_process", "route_kandy", "tours_scenic_train", "tours_cultural"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
    heroAlt: "Traditional Kandyan dancer in full ceremonial costume performing in front of Sigiriya Lion Rock.",
    startPrice: "$45"
  },
  {
    id: "at_route_mirissa",
    type: "route",
    path: "/airport-transfer/colombo-to-mirissa/",
    title: "Colombo Airport to Mirissa Transfer | Beach & Whale Watching",
    description: "Start your beach holiday right with a private transfer from Colombo Airport (CMB) to Mirissa, the whale watching hotspot.",
    h1: "Colombo Airport to Mirissa, Straight to the Beach",
    crumbLabel: "Colombo to Mirissa",
    linksTo: ["hub_airport", "at_route_galle", "at_route_kandy", "at_booking_process", "tours_beach", "prices"],
    heroImage: "/images/Happy-German-Lady-travelled-to-unuwatana-Sri Lanka.webp",
    heroAlt: "Traveller relaxing on the palm-fringed sand at Unawatuna beach on Sri Lanka's south coast.",
    startPrice: "$55"
  },
  {
    id: "at_booking_process",
    type: "guide",
    path: "/airport-transfer/booking-process/",
    title: "How to Book Your Airport Transfer | 3 Easy Steps",
    description: "Booking your Sri Lanka airport transfer is simple. Follow our easy 3-step process to secure your private driver and vehicle.",
    h1: "Booking a Transfer Takes Three Steps",
    crumbLabel: "How to Book",
    linksTo: ["hub_airport", "contact", "prices", "vehicles"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.webp",
    heroAlt: "Driver holding a passenger name board in the arrivals hall at Colombo Bandaranaike International Airport.",
  },

  // =====================
  // PRIVATE DRIVER CLUSTER
  // =====================
  {
    id: "private_driver",
    type: "service",
    path: "/private-driver-sri-lanka/",
    title: "Private Driver in Sri Lanka | Daily Hire & Professional Tours",
    description: "Hire a private driver in Sri Lanka for multi-day tours with fixed daily pricing and modern vehicles.",
    h1: "Hire a Private Driver for the Whole Island",
    crumbLabel: "Private Driver",
    // The pivot page between the transfer business and the tour business.
    // It reaches every itinerary and the tours hub on purpose.
    linksTo: [
      "private_driver_costs",
      "private_driver_benefits",
      "private_driver_meet",
      "itinerary_8",
      "itinerary_10",
      "itinerary_14",
      "itinerary_custom",
      "sri_lanka_tours",
      "hub_airport",
      "prices",
      "vehicles",
      "contact",
    ],
    showHeader: false, // 🔑 Critical: hides old header to show the new luxury hero
    heroImage: "/images/sigiriya-rock-fortress-sri-lanka-private-driver.webp",
    heroAlt: "Sigiriya Lion Rock fortress seen from the surrounding jungle, a highlight of multi-day private driver tours in Sri Lanka.",
    startPrice: "$55/day"
  },
  {
    id: "private_driver_costs",
    type: "guide",
    path: "/private-driver-sri-lanka/costs-and-rates/",
    title: "Private Driver Costs in Sri Lanka | Rates & Pricing",
    description: "What a private driver costs in Sri Lanka: published daily rates for cars and vans, what the price includes, and how to tell whether a quote you have been given is fair.",
    h1: "What a Private Driver Actually Costs",
    crumbLabel: "Costs & Rates",
    updated: "2026-08-05",
    linksTo: ["private_driver", "private_driver_benefits", "itinerary_10", "prices", "contact"],
    heroImage: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants_yala.webp",
    heroAlt: "Safari jeep watching a herd of wild elephants in Yala National Park, Sri Lanka.",
    startPrice: "$55/day"
  },
  {
    id: "private_driver_benefits",
    type: "guide",
    path: "/private-driver-sri-lanka/benefits-vs-self-drive/",
    title: "Private Driver vs. Self-Drive in Sri Lanka | Benefits Guide",
    description: "Discover the benefits of hiring a private driver in Sri Lanka compared to self-driving. Make the right choice for your trip.",
    h1: "Private Driver or Self-Drive?",
    crumbLabel: "Driver vs Self-Drive",
    linksTo: ["private_driver", "private_driver_costs", "private_driver_meet", "itinerary_8", "guide_safety", "contact"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
    heroAlt: "Couple looking out of the open doorway of the blue Kandy to Ella train as it passes through tea country.",
    startPrice: "$55/day"
  },
  {
    id: "private_driver_meet",
    type: "trust",
    path: "/private-driver-sri-lanka/meet-our-drivers/",
    title: "Meet Our Drivers | Professional & Local Experts",
    description: "Get to know our team of professional, friendly, and knowledgeable private drivers in Sri Lanka.",
    h1: "The People Who Will Be Driving You",
    crumbLabel: "Our Drivers",
    linksTo: ["private_driver", "private_driver_benefits", "vehicles", "contact"],
    heroImage: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
    heroAlt: "Professional Sri Lankan private driver in uniform standing beside his vehicle.",
  },

  // =====================
  // ITINERARIES
  //
  // These pages existed as files but were missing from spec.ts entirely, so
  // they received zero internal links despite being the strongest content on
  // the site. Titles here mirror the titles set in each page's own metadata.
  // =====================
  {
    id: "itinerary_8",
    type: "guide",
    path: "/private-driver-sri-lanka/8-day-itinerary/",
    title: "8-Day Sri Lanka Private Driver Itinerary | Culture & Wildlife",
    description: "A focused 8-day Sri Lanka route covering the Cultural Triangle, Kandy, the Ella train ride and a Yala safari, driven door to door.",
    h1: "Eight Days: Culture, Hills and Wildlife",
    crumbLabel: "8-Day Itinerary",
    linksTo: ["private_driver", "itinerary_10", "itinerary_14", "itinerary_custom", "tours_cultural", "tours_wildlife", "private_driver_costs", "contact"],
    startPrice: "$55/day",
  },
  {
    id: "itinerary_10",
    type: "guide",
    path: "/private-driver-sri-lanka/10-day-itinerary/",
    title: "10-Day Sri Lanka Private Driver Itinerary | Adventure & Culture",
    description: "A 10-day Sri Lanka itinerary adding hill country hiking and south coast beach time to the classic cultural and wildlife route.",
    h1: "Ten Days: The Classic Island Loop",
    crumbLabel: "10-Day Itinerary",
    linksTo: ["private_driver", "itinerary_8", "itinerary_14", "itinerary_custom", "tours_scenic_train", "tours_beach", "private_driver_costs", "contact"],
    startPrice: "$55/day",
  },
  {
    id: "itinerary_14",
    type: "guide",
    path: "/private-driver-sri-lanka/14-day-itinerary/",
    title: "14-Day Sri Lanka Grand Tour | Culture, Nature & Beach",
    description: "The complete 14-day Sri Lanka loop, taking in the ancient cities, the hill country, the east coast beaches and the south.",
    h1: "Fourteen Days: The Grand Tour",
    crumbLabel: "14-Day Itinerary",
    linksTo: ["private_driver", "itinerary_8", "itinerary_10", "itinerary_custom", "tours_adventure", "tours_wildlife", "private_driver_costs", "contact"],
    startPrice: "$55/day",
  },
  {
    id: "itinerary_custom",
    type: "service",
    path: "/private-driver-sri-lanka/custom-sri-lanka-itinerary/",
    title: "Custom Sri Lanka Itinerary with Private Driver",
    description: "Plan a custom Sri Lanka itinerary with a private driver. Choose your travel dates, interests, and trip length. Get a personalized route via WhatsApp.",
    h1: "Build Your Own Route",
    crumbLabel: "Custom Itinerary",
    linksTo: ["private_driver", "itinerary_8", "itinerary_10", "itinerary_14", "sri_lanka_tours", "contact"],
  },

  // =====================
  // TRUST + CONVERSION
  // =====================
  {
    id: "prices",
    type: "trust",
    path: "/prices/",
    title: "Sri Lanka Airport Transfer Prices | Fixed & All-Inclusive Rates",
    description: "View transparent Sri Lanka airport transfer prices. Fixed, all-inclusive rates with no hidden fees.",
    h1: "Fixed Prices, Confirmed Before You Travel",
    crumbLabel: "Prices",
    updated: "2026-08-05",
    linksTo: ["hub_airport", "routes_index", "vehicles", "private_driver_costs", "contact"],
  },

  {
    id: "vehicles",
    type: "trust",
    path: "/vehicle-options/",
    title: "Vehicle Options | Cars, SUVs & Vans for Transfers and Tours",
    description: "Choose from comfortable cars, SUVs and vans for Sri Lanka airport transfers and multi-day private tours, with capacity, luggage space and daily rates for each.",
    h1: "Cars, SUVs and Vans",
    crumbLabel: "Vehicles",
    // Canonical home for fleet content. /fleet and
    // /airport-transfer/vehicle-options now 301 here — see next.config.ts.
    linksTo: ["prices", "hub_airport", "private_driver", "at_booking_process", "contact"],
    heroImage: "/images/Vehicle fleet Sri Lanka Private Driver.webp",
    heroAlt: "The vehicle fleet used for Sri Lanka private driver tours: a sedan, an SUV and a passenger van.",
  },

  {
    id: "contact",
    type: "contact",
    path: "/contact/",
    title: "Book Sri Lanka Airport Transfer | WhatsApp & Booking Form",
    description: "Book your Sri Lanka airport transfer in minutes via WhatsApp or request a fixed-price quote.",
    crumbLabel: "Contact",
    linksTo: ["hub_airport", "prices", "private_driver", "sri_lanka_tours"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
    heroAlt: "Traditional Kandyan dancer performing in front of Sigiriya Lion Rock.",
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
    h1: "Tours Across Sri Lanka, Driven Door to Door",
    crumbLabel: "Tours",
    linksTo: [
      "tours_wildlife",
      "tours_cultural",
      "tours_scenic_train",
      "tours_beach",
      "tours_adventure",
      "itinerary_8",
      "itinerary_10",
      "itinerary_14",
      "itinerary_custom",
      "private_driver",
      "travel_guide",
      "contact",
    ],
    heroImage: "/images/Happy_couple in sri lanka rural road.webp",
    heroAlt: "Couple standing on a quiet rural road surrounded by paddy fields in Sri Lanka.",
  },
  {
    id: "tours_wildlife",
    type: "guide",
    path: "/tours/wildlife-safari-yala-and-udawalawe/",
    title: "Sri Lanka Wildlife Safari Tours | Yala & Udawalawe",
    description: "Experience the thrill of a wildlife safari in Sri Lanka. Spot leopards in Yala, elephants in Udawalawe, and more with our expert guides.",
    h1: "Leopards, Elephants and The Gathering",
    crumbLabel: "Wildlife Safaris",
    linksTo: ["sri_lanka_tours", "tours_cultural", "tours_adventure", "itinerary_8", "private_driver", "guide_best_time", "contact"],
    heroImage: "/images/sri-lanka-wildlife-safari-jeep-tour-elephants.webp",
    heroAlt: "Safari jeep watching a large herd of wild elephants in Udawalawe National Park, Sri Lanka.",
    startPrice: "$90"
  },
  {
    id: "tours_cultural",
    type: "guide",
    path: "/tours/cultural-triangle-sigiriya-anuradhapura/",
    title: "Cultural Triangle Tours | Sigiriya, Kandy & Anuradhapura",
    description: "Journey through Sri Lanka's rich history. Explore the ancient cities of the Cultural Triangle, including Sigiriya rock fortress and the Temple of the Tooth.",
    h1: "The Cultural Triangle, Ancient City by Ancient City",
    crumbLabel: "Cultural Triangle",
    linksTo: ["sri_lanka_tours", "tours_wildlife", "tours_scenic_train", "itinerary_8", "route_sigiriya", "guide_colombo", "contact"],
    heroImage: "/images/Kandiand-dancer-at-lion-rock-sigiriya.webp",
    heroAlt: "Kandyan dancer in ceremonial headdress performing with Sigiriya Lion Rock behind.",
    startPrice: "$120"
  },
  {
    id: "tours_scenic_train",
    type: "guide",
    path: "/tours/scenic-train-ride-kandy-to-ella/",
    title: "Kandy to Ella Train Tour | The World's Most Scenic Ride",
    description: "Book the famous Kandy to Ella train journey, or the shorter Nanu Oya to Ella leg. We arrange tickets and a private driver to carry your luggage by road and meet you at the station.",
    h1: "The Kandy to Ella Train, Luggage Handled",
    crumbLabel: "Kandy to Ella Train",
    updated: "2026-08-05",
    linksTo: ["sri_lanka_tours", "tours_cultural", "tours_adventure", "itinerary_10", "route_ella", "guide_best_time", "contact"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
    heroAlt: "Couple in the doorway of the blue Kandy to Ella train winding through green tea plantations.",
  },
  {
    id: "tours_beach",
    type: "guide",
    path: "/tours/beach-holiday-south-coast/",
    title: "Sri Lanka Beach Holiday | Galle, Mirissa & Unawatuna",
    description: "Relax on the golden shores of Sri Lanka's south coast. We'll take you to the best beaches like Mirissa, Unawatuna, and beyond.",
    h1: "South Coast Beaches, Bay by Bay",
    crumbLabel: "South Coast Beaches",
    linksTo: ["sri_lanka_tours", "tours_wildlife", "tours_scenic_train", "itinerary_10", "at_route_mirissa", "route_galle", "contact"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
    heroAlt: "Aerial view of painted fishing boats drawn up on a golden south coast beach in Sri Lanka.",
  },
  {
    id: "tours_adventure",
    type: "guide",
    path: "/tours/adventure-and-hiking-tours/",
    title: "Adventure & Hiking Tours in Sri Lanka | Ella & Knuckles",
    description: "Embark on an adventure. Hike the stunning Knuckles Mountain Range, climb Ella Rock, and discover Sri Lanka's thrilling landscapes.",
    h1: "Hiking Ella Rock and the Knuckles Range",
    crumbLabel: "Adventure & Hiking",
    linksTo: ["sri_lanka_tours", "tours_scenic_train", "tours_wildlife", "itinerary_14", "route_ella", "guide_packing", "contact"],
    heroImage: "/images/sigiriya-lion-rock-fortress-tourist-view-sri-lanka.webp",
    heroAlt: "Hiker looking out over a green valley from a rocky summit in Sri Lanka's hill country.",
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
    h1: "Everything You Need Before You Fly",
    crumbLabel: "Travel Guide",
    linksTo: ["guide_colombo", "guide_safety", "guide_best_time", "guide_visa", "guide_connectivity", "guide_packing", "guide_food", "sri_lanka_tours", "private_driver"],
    heroImage: "/images/sri-lanka-scenic-train-ride-kandy-to-ella-couple.webp",
    heroAlt: "Travellers riding the scenic hill country train between Kandy and Ella, Sri Lanka.",
  },
  {
    id: "guide_colombo",
    type: "guide",
    path: "/travel-guide/colombo/",
    title: "Colombo Travel Guide | Things to Do, See & Eat",
    description: "Your ultimate guide to Colombo, Sri Lanka. Discover the best things to do, top attractions like Gangaramaya Temple, where to eat, and travel hacks for your visit.",
    h1: "Colombo: What to Do With a Day or Two",
    crumbLabel: "Colombo",
    linksTo: ["travel_guide", "guide_food", "route_colombo", "sri_lanka_tours", "private_driver", "contact"],
    heroImage: "/images/Colombo lotus tower.webp",
    heroAlt: "The Lotus Tower lit up above the Colombo skyline at dusk.",
  },
  {
    id: "guide_safety",
    type: "guide",
    path: "/travel-guide/is-sri-lanka-safe-to-travel/",
    title: "Is Sri Lanka Safe for Tourists? | Safety Guide",
    description: "Is Sri Lanka safe to travel? A practical guide to safety for tourists, covering monsoon weather, floods and landslides, health, scams and local customs.",
    h1: "Is Sri Lanka Safe? An Honest Answer",
    crumbLabel: "Is It Safe?",
    updated: "2026-08-05",
    linksTo: ["travel_guide", "guide_best_time", "guide_packing", "private_driver_benefits", "contact"],
    heroImage: "/images/Happy-German-Lady-travelled-to-unuwatana-Sri Lanka.webp",
    heroAlt: "Solo traveller enjoying a calm afternoon on the sand at Unawatuna beach, Sri Lanka.",
  },
  {
    id: "guide_best_time",
    type: "guide",
    path: "/travel-guide/best-time-to-visit-sri-lanka/",
    title: "When Is the Best Time to Visit Sri Lanka?",
    description: "The best time to visit Sri Lanka, explained by region: the two monsoons, what rain in Ella and Nuwara Eliya actually means, and where to go month by month.",
    h1: "When to Go, Region by Region",
    crumbLabel: "Best Time to Visit",
    updated: "2026-08-05",
    linksTo: ["travel_guide", "guide_safety", "guide_packing", "tours_wildlife", "contact"],
    heroImage: "/images/sri-lanka-beach-traditional-fishing-boats-aerial-view.webp",
    heroAlt: "Fishing boats on a sunlit Sri Lankan beach during the dry season on the south coast.",
  },
  {
    id: "guide_visa",
    type: "guide",
    path: "/travel-guide/sri-lanka-visa-and-immigration/",
    title: "Sri Lanka Visa & Immigration Guide for Tourists",
    description: "Everything you need to know about getting a tourist visa for Sri Lanka, including the online ETA process and visa extensions.",
    h1: "Visas, ETAs and Getting Through Immigration",
    crumbLabel: "Visa & Immigration",
    linksTo: ["travel_guide", "guide_connectivity", "hub_airport", "contact"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.png",
    heroAlt: "Arrivals hall at Colombo Bandaranaike International Airport, where tourists clear immigration.",
  },
  {
    id: "guide_connectivity",
    type: "guide",
    path: "/travel-guide/currency-sim-cards-and-connectivity/",
    title: "Currency, SIM Cards & Connectivity in Sri Lanka",
    description: "A guide to money in Sri Lanka: where to change currency for the best rate, why to avoid the airport desks, using ATMs, and buying a local SIM card from Dialog or Mobitel.",
    h1: "Money, SIM Cards and Staying Online",
    crumbLabel: "Money & SIM Cards",
    updated: "2026-08-05",
    linksTo: ["travel_guide", "guide_visa", "guide_packing", "contact"],
    heroImage: "/images/colombo-airport-transfer-private-driver-name-board.webp",
    heroAlt: "Arrivals area at Colombo airport where travellers buy local SIM cards and change currency.",
  },
  {
    id: "guide_packing",
    type: "guide",
    path: "/travel-guide/what-to-pack-for-sri-lanka/",
    title: "What to Pack for Sri Lanka | Essential Packing List",
    description: "A complete packing list for your trip to Sri Lanka, including clothing for different climates, temple etiquette, and essential items.",
    h1: "What to Pack for Heat, Hills and Temples",
    crumbLabel: "Packing List",
    linksTo: ["travel_guide", "guide_best_time", "guide_food", "tours_adventure", "contact"],
    heroImage: "/images/femele traveler at vibrant tea plantations of Nuwara Eliya, Sri Lanka.webp",
    heroAlt: "Traveller walking through the bright green tea plantations of Nuwara Eliya, Sri Lanka's cool hill country.",
  },
  {
    id: "guide_food",
    type: "guide",
    path: "/travel-guide/sri-lankan-food-and-cuisine/",
    title: "Sri Lankan Food Guide | What to Eat and Drink",
    description: "Discover the delicious world of Sri Lankan cuisine. A guide to the must-try dishes, from rice and curry to kottu roti and street food.",
    h1: "Rice and Curry, Kottu, and What Else to Order",
    crumbLabel: "Food & Cuisine",
    linksTo: ["travel_guide", "guide_colombo", "guide_packing", "contact"],
    heroImage: "/images/sri-lanka-best_private-airport-transfer-driver.webp",
    heroAlt: "Local driver and guide at a roadside stop, where travellers try Sri Lankan short eats.",
  },

  // =====================
  // ROUTE PAGES
  // =====================

  {
    id: "route_colombo",
    type: "route",
    path: "/airport-to-colombo-taxi/",
    title: "Airport to Colombo Taxi | Private Transfer Service",
    description: "Book a private taxi from Colombo Airport to Colombo city hotels. Fixed pricing and professional drivers.",
    h1: "Colombo Airport to Colombo City",
    crumbLabel: "Airport to Colombo",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "guide_colombo"],
    startPrice: "$30",
  },

  {
    id: "route_kandy",
    type: "route",
    path: "/airport-to-kandy-taxi/",
    title: "Airport to Kandy Taxi | Private Transfer with Driver",
    description: "Pre-book a private taxi from Colombo Airport to Kandy with fixed pricing and professional drivers.",
    h1: "Colombo Airport to Kandy",
    crumbLabel: "Airport to Kandy",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "route_ella", "at_route_kandy", "tours_cultural"],
    startPrice: "$45",
  },

  {
    id: "route_galle",
    type: "route",
    path: "/airport-to-galle-taxi/",
    title: "Airport to Galle Taxi | Private Transfer Service",
    description: "Book a private airport taxi from Colombo Airport to Galle with all-inclusive pricing.",
    h1: "Colombo Airport to Galle",
    crumbLabel: "Airport to Galle",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "at_route_galle", "tours_beach"],
    startPrice: "$50",
  },

  {
    id: "route_ella",
    type: "route",
    path: "/airport-to-ella-taxi/",
    title: "Airport to Ella Taxi | Private Transfer & Scenic Route",
    description: "Travel from Colombo Airport to Ella with a private driver. Fixed rates available.",
    h1: "Colombo Airport to Ella",
    crumbLabel: "Airport to Ella",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "route_kandy", "tours_scenic_train"],
    startPrice: "$85",
  },

  {
    id: "route_sigiriya",
    type: "route",
    path: "/airport-to-sigiriya-taxi/",
    title: "Airport to Sigiriya Taxi | Private Transfer Service",
    description: "Book a private taxi from Colombo Airport to Sigiriya with fixed pricing.",
    h1: "Colombo Airport to Sigiriya",
    crumbLabel: "Airport to Sigiriya",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "tours_cultural"],
    startPrice: "$55",
  },

  {
    id: "route_negombo",
    type: "route",
    path: "/airport-to-negombo-taxi/",
    title: "Airport to Negombo Taxi | Private Transfer Service",
    description: "Quick and reliable private taxi from Colombo Airport to Negombo.",
    h1: "Colombo Airport to Negombo",
    crumbLabel: "Airport to Negombo",
    linksTo: ["hub_airport", "routes_index", "prices", "vehicles", "at_booking_process"],
    startPrice: "$15",
  },

  // =====================
  // RETIRED — see next.config.ts for the 301s
  //
  // at_vehicles   /airport-transfer/vehicle-options -> /vehicle-options
  // how_it_works  /how-it-works                     -> /airport-transfer/booking-process
  // best_travel   /best-way-to-travel-sri-lanka     -> /private-driver-sri-lanka/benefits-vs-self-drive
  //
  // The last two were spec entries with no page file, so [...slug] served them
  // as EMPTY SpecPage shells — a hero, a sidebar, and no body — while the
  // sitemap advertised them at priority 0.5. `best-way-to-travel-sri-lanka` is
  // a good URL worth reviving; when the page is actually written, delete its
  // redirect and add the spec entry back.
  // =====================
];
