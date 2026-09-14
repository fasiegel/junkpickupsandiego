export type ServiceKind = "curbside" | "full";

export type TruckTier = {
  n: number;
  yards: number;
  lbs: number;
  curbside: number;
  full: number;
  fits: string;
};

export const TRUCK_TIERS: TruckTier[] = [
  {
    n: 1,
    yards: 2,
    lbs: 200,
    curbside: 69,
    full: 130,
    fits: "One item or a small pile staged at the curb.",
  },
  {
    n: 2,
    yards: 4,
    lbs: 400,
    curbside: 119,
    full: 180,
    fits: "A two-piece sectional, two mattresses, or a pickup-sized load.",
  },
  {
    n: 3,
    yards: 6,
    lbs: 600,
    curbside: 179,
    full: 270,
    fits: "Three items, a 3-piece sectional, or a medium mixed pile.",
  },
  {
    n: 4,
    yards: 8,
    lbs: 800,
    curbside: 239,
    full: 360,
    fits: "A large furniture set plus bags and boxes.",
  },
  {
    n: 5,
    yards: 10,
    lbs: 1000,
    curbside: 299,
    full: 450,
    fits: "A full bedroom: mattress, box spring, frame, dresser, nightstands.",
  },
  {
    n: 6,
    yards: 12,
    lbs: 1200,
    curbside: 359,
    full: 540,
    fits: "A packed garage stall or a small apartment cleanout.",
  },
  {
    n: 7,
    yards: 14,
    lbs: 1400,
    curbside: 419,
    full: 630,
    fits: "A large garage pile plus outdoor furniture.",
  },
  {
    n: 8,
    yards: 16,
    lbs: 1600,
    curbside: 479,
    full: 720,
    fits: "A 1-bedroom apartment cleanout.",
  },
  {
    n: 9,
    yards: 18,
    lbs: 1800,
    curbside: 539,
    full: 810,
    fits: "A big household cleanout — most of a dump bed.",
  },
  {
    n: 10,
    yards: 20,
    lbs: 2000,
    curbside: 599,
    full: 899,
    fits: "A packed dump bed. Full truck.",
  },
];

export function getTier(n: number): TruckTier {
  const clamped = Math.min(10, Math.max(1, Math.round(n)));
  return TRUCK_TIERS[clamped - 1]!;
}

export function priceFor(tier: TruckTier, service: ServiceKind): number {
  return service === "curbside" ? tier.curbside : tier.full;
}

export const PRICE_EXCLUSION =
  "Posted prices do not include construction debris or yard waste.";

export function quoteSms(tier: TruckTier, service: ServiceKind): string {
  const price = priceFor(tier, service);
  const label = service === "curbside" ? "curbside" : "full-service";
  return `Hi Fred — junk haul in San Diego. Looks like about a ${tier.n}/10 truck load (${tier.yards} cubic yards / ${tier.lbs.toLocaleString()} lbs), ${label}, around $${price}. Sending pictures to confirm.`;
}

export const NEIGHBORHOODS = [
  "Downtown",
  "Little Italy",
  "North Park",
  "Hillcrest",
  "Mission Hills",
  "Pacific Beach",
  "Mission Beach",
  "Ocean Beach",
  "Point Loma",
  "La Jolla",
  "Clairemont",
  "Linda Vista",
  "Mission Valley",
  "Kearny Mesa",
  "University City",
  "Mira Mesa",
  "Scripps Ranch",
  "Carmel Valley",
  "Chula Vista",
  "National City",
  "Imperial Beach",
  "Coronado",
  "La Mesa",
  "El Cajon",
  "Santee",
  "Lemon Grove",
  "Spring Valley",
  "Bonita",
  "San Ysidro",
  "Encinitas",
] as const;
