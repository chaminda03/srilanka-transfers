// src/site/anchors.ts

export type AnchorRule = {
  phrase: string;
  targetId: string;
  priority?: number;
};

export const anchorRules: AnchorRule[] = [
  // =====================
  // PRIMARY SERVICE HUB
  // =====================
  {
    phrase: "private driver in Sri Lanka",
    targetId: "private_driver",
    priority: 10,
  },
  {
    phrase: "Sri Lanka private driver",
    targetId: "private_driver",
    priority: 9,
  },

  // =====================
  // AIRPORT TRANSFER HUB
  // =====================
  {
    phrase: "Colombo Airport transfer",
    targetId: "hub_airport",
    priority: 8,
  },
  {
    phrase: "airport transfer in Sri Lanka",
    targetId: "hub_airport",
    priority: 7,
  },

  // =====================
  // INTENT-BASED ROUTES
  // (NO city-name-only anchors)
  // =====================
  {
    phrase: "airport to Kandy taxi",
    targetId: "route_kandy",
    priority: 6,
  },
  {
    phrase: "airport to Galle taxi",
    targetId: "route_galle",
    priority: 6,
  },
  {
    phrase: "airport to Ella taxi",
    targetId: "route_ella",
    priority: 6,
  },
  {
    phrase: "airport to Sigiriya taxi",
    targetId: "route_sigiriya",
    priority: 6,
  },
  {
    phrase: "airport to Negombo taxi",
    targetId: "route_negombo",
    priority: 6,
  },
  {
    phrase: "airport to Dambulla taxi",
    targetId: "route_dambulla",
    priority: 6,
  },
  {
    phrase: "airport to Nuwara Eliya taxi",
    targetId: "route_nuwara_eliya",
    priority: 6,
  },
  {
    phrase: "airport to Unawatuna taxi",
    targetId: "route_unawatuna",
    priority: 6,
  },

  // =====================
  // GUIDES / COMPARISON
  // =====================
  {
    phrase: "best way to travel around Sri Lanka",
    targetId: "best_travel",
    priority: 5,
  },
  {
    phrase: "train vs private driver in Sri Lanka",
    targetId: "train_vs_driver",
    priority: 5,
  },
];
