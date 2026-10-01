export type Community = {
  slug: string;
  name: string;
  region: string;
  zips: string[];
};

export const REGIONS = [
  "Central",
  "Coastal",
  "North City",
  "South Bay",
  "East County",
  "North County",
] as const;

export const COMMUNITIES: Community[] = [
  { slug: "downtown", name: "Downtown", region: "Central", zips: ["92101"] },
  { slug: "little-italy", name: "Little Italy", region: "Central", zips: ["92101"] },
  { slug: "gaslamp", name: "Gaslamp", region: "Central", zips: ["92101"] },
  { slug: "east-village", name: "East Village", region: "Central", zips: ["92101"] },
  { slug: "bankers-hill", name: "Bankers Hill", region: "Central", zips: ["92103"] },
  { slug: "hillcrest", name: "Hillcrest", region: "Central", zips: ["92103"] },
  { slug: "mission-hills", name: "Mission Hills", region: "Central", zips: ["92103"] },
  { slug: "north-park", name: "North Park", region: "Central", zips: ["92104"] },
  { slug: "south-park", name: "South Park", region: "Central", zips: ["92102"] },
  { slug: "golden-hill", name: "Golden Hill", region: "Central", zips: ["92102"] },
  { slug: "normal-heights", name: "Normal Heights", region: "Central", zips: ["92116"] },
  { slug: "kensington", name: "Kensington", region: "Central", zips: ["92116"] },
  { slug: "university-heights", name: "University Heights", region: "Central", zips: ["92116"] },
  { slug: "city-heights", name: "City Heights", region: "Central", zips: ["92105"] },
  { slug: "college-area", name: "College Area", region: "Central", zips: ["92115"] },
  { slug: "old-town", name: "Old Town", region: "Central", zips: ["92110"] },
  { slug: "mission-valley", name: "Mission Valley", region: "Central", zips: ["92108"] },
  { slug: "linda-vista", name: "Linda Vista", region: "Central", zips: ["92111"] },
  { slug: "bay-park", name: "Bay Park", region: "Central", zips: ["92110"] },
  { slug: "clairemont", name: "Clairemont", region: "Central", zips: ["92117"] },
  { slug: "kearny-mesa", name: "Kearny Mesa", region: "Central", zips: ["92111"] },
  { slug: "serra-mesa", name: "Serra Mesa", region: "Central", zips: ["92123"] },
  { slug: "tierrasanta", name: "Tierrasanta", region: "Central", zips: ["92124"] },
  { slug: "allied-gardens", name: "Allied Gardens", region: "Central", zips: ["92120"] },
  { slug: "del-cerro", name: "Del Cerro", region: "Central", zips: ["92120"] },
  { slug: "san-carlos", name: "San Carlos", region: "Central", zips: ["92119"] },
  { slug: "encanto", name: "Encanto", region: "Central", zips: ["92114"] },
  { slug: "paradise-hills", name: "Paradise Hills", region: "Central", zips: ["92139"] },

  { slug: "pacific-beach", name: "Pacific Beach", region: "Coastal", zips: ["92109"] },
  { slug: "mission-beach", name: "Mission Beach", region: "Coastal", zips: ["92109"] },
  { slug: "ocean-beach", name: "Ocean Beach", region: "Coastal", zips: ["92107"] },
  { slug: "point-loma", name: "Point Loma", region: "Coastal", zips: ["92106"] },
  { slug: "la-jolla", name: "La Jolla", region: "Coastal", zips: ["92037"] },
  { slug: "coronado", name: "Coronado", region: "Coastal", zips: ["92118"] },

  { slug: "university-city", name: "University City", region: "North City", zips: ["92122"] },
  { slug: "mira-mesa", name: "Mira Mesa", region: "North City", zips: ["92126"] },
  { slug: "scripps-ranch", name: "Scripps Ranch", region: "North City", zips: ["92131"] },
  { slug: "rancho-penasquitos", name: "Rancho Peñasquitos", region: "North City", zips: ["92129"] },
  { slug: "carmel-valley", name: "Carmel Valley", region: "North City", zips: ["92130"] },
  { slug: "rancho-bernardo", name: "Rancho Bernardo", region: "North City", zips: ["92127", "92128"] },
  { slug: "4s-ranch", name: "4S Ranch", region: "North City", zips: ["92127"] },

  { slug: "chula-vista", name: "Chula Vista", region: "South Bay", zips: ["91910", "91911", "91913", "91914", "91915"] },
  { slug: "eastlake", name: "Eastlake", region: "South Bay", zips: ["91913", "91914", "91915"] },
  { slug: "national-city", name: "National City", region: "South Bay", zips: ["91950"] },
  { slug: "imperial-beach", name: "Imperial Beach", region: "South Bay", zips: ["91932"] },
  { slug: "san-ysidro", name: "San Ysidro", region: "South Bay", zips: ["92173"] },
  { slug: "otay-mesa", name: "Otay Mesa", region: "South Bay", zips: ["92154"] },
  { slug: "nestor", name: "Nestor", region: "South Bay", zips: ["92154"] },
  { slug: "bonita", name: "Bonita", region: "South Bay", zips: ["91902"] },

  { slug: "la-mesa", name: "La Mesa", region: "East County", zips: ["91941", "91942"] },
  { slug: "el-cajon", name: "El Cajon", region: "East County", zips: ["92019", "92020", "92021"] },
  { slug: "santee", name: "Santee", region: "East County", zips: ["92071"] },
  { slug: "lakeside", name: "Lakeside", region: "East County", zips: ["92040"] },
  { slug: "spring-valley", name: "Spring Valley", region: "East County", zips: ["91977", "91978"] },
  { slug: "lemon-grove", name: "Lemon Grove", region: "East County", zips: ["91945"] },
  { slug: "rancho-san-diego", name: "Rancho San Diego", region: "East County", zips: ["91978"] },
  { slug: "alpine", name: "Alpine", region: "East County", zips: ["91901"] },
  { slug: "jamul", name: "Jamul", region: "East County", zips: ["91935"] },
  { slug: "ramona", name: "Ramona", region: "East County", zips: ["92065"] },

  { slug: "del-mar", name: "Del Mar", region: "North County", zips: ["92014"] },
  { slug: "solana-beach", name: "Solana Beach", region: "North County", zips: ["92075"] },
  { slug: "encinitas", name: "Encinitas", region: "North County", zips: ["92024"] },
  { slug: "cardiff", name: "Cardiff", region: "North County", zips: ["92007"] },
  { slug: "carlsbad", name: "Carlsbad", region: "North County", zips: ["92008", "92009", "92010", "92011"] },
  { slug: "oceanside", name: "Oceanside", region: "North County", zips: ["92054", "92056", "92057"] },
  { slug: "vista", name: "Vista", region: "North County", zips: ["92081", "92083", "92084"] },
  { slug: "san-marcos", name: "San Marcos", region: "North County", zips: ["92069", "92078"] },
  { slug: "escondido", name: "Escondido", region: "North County", zips: ["92025", "92026", "92027", "92029"] },
  { slug: "poway", name: "Poway", region: "North County", zips: ["92064"] },
  { slug: "rancho-santa-fe", name: "Rancho Santa Fe", region: "North County", zips: ["92067"] },
];

const bySlug = new Map(COMMUNITIES.map((c) => [c.slug, c]));

export function getCommunity(slug: string): Community | undefined {
  return bySlug.get(slug);
}

export function communitiesInRegion(region: string): Community[] {
  return COMMUNITIES.filter((c) => c.region === region);
}

export function findCommunities(query: string): Community[] {
  const q = query.trim().toLowerCase();
  if (!q) return COMMUNITIES;
  return COMMUNITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q) ||
      c.zips.some((z) => z.includes(q)),
  );
}
