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