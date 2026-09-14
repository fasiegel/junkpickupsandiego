export type AreaRegion =
  | "Coastal"
  | "Central"
  | "North"
  | "East County"
  | "South Bay";

export type Area = {
  slug: string;
  name: string;
  region: AreaRegion;
  headline: string;
  blurb: string;
  jobs: string;
  access: string;
  nearby: string[];
};

export const AREAS: Area[] = [
  {
    slug: "downtown",
    name: "Downtown",
    region: "Central",
    headline: "Junk removal for Downtown San Diego condos and lofts.",
    blurb:
      "High-rises, loading docks, and alley staging. We haul furniture, mattresses, and mixed household piles from East Village, the Gaslamp, and Columbia. Text photos plus the building’s loading rules if the dock is timed.",
    jobs: "Condo cleanouts, mattress pairs, office chairs, and move-out piles staged in a garage or dock.",
    access:
      "Tell Fred the loading-dock window and whether we need a cart through the garage. Curbside on a metered street works if you stage it.",
    nearby: ["little-italy", "mission-hills", "golden-hill"],
  },
  {
    slug: "little-italy",
    name: "Little Italy",
    region: "Central",
    headline: "Little Italy junk hauling — walk-ups, condos, and curb piles.",
    blurb:
      "Street parking is tight and a lot of the buildings are walk-ups. We take sofas, beds, and kitchen piles from Kettner to India Street. Stage it at the curb or in the garage and you do not need to be home.",
    jobs: "Apartment turnovers, patio sets, and one-item sofa pickups.",
    access:
      "If the truck cannot sit out front, stage in the alley or garage. Full-service if we carry it down stairs.",
    nearby: ["downtown", "mission-hills", "point-loma"],
  },
  {
    slug: "north-park",
    name: "North Park",
    region: "Central",
    headline: "North Park junk removal for bungalows, alleys, and garages.",
    blurb:
      "Craftsman houses, alley garages, and packed 30th Street apartments. Typical jobs are garage piles, old sectionals, and mattress stacks. Curbside from the alley is the cheapest way if you can roll it out.",
    jobs: "Garage cleanouts, sectionals by the piece, and backyard furniture.",
    access:
      "Many blocks have alleys. Stage there and we load. Tight streets — we will text when we are a few minutes out.",
    nearby: ["hillcrest", "university-heights", "normal-heights"],
  },
  {
    slug: "hillcrest",
    name: "Hillcrest",
    region: "Central",
    headline: "Hillcrest junk hauling — second-floor sofas and apartment cleanouts.",
    blurb:
      "Walk-up apartments and older buildings near University Avenue. We haul couches down stairs, mattresses, and mixed household junk. Full-service if we come inside. Curbside if you stage it in the garage or on the street.",
    jobs: "Second-floor sofas, mattress pairs, and small apartment cleanouts.",
    access:
      "Stairs and tight halls are full-service. If you can get it to the garage, curbside rates apply.",
    nearby: ["north-park", "mission-hills", "university-heights"],
  },
  {
    slug: "mission-hills",
    name: "Mission Hills",
    region: "Central",
    headline: "Mission Hills junk removal for hillside homes and steep drives.",
    blurb:
      "Older homes, narrow drives, and a lot of furniture that does not fit a Civic. We take estate piles, mattresses, and garage junk. Text a photo of the driveway if it is steep or gated.",
    jobs: "Estate furniture, garage cleanouts, and one-off antiques you do not want.",
    access:
      "Steep or gated drives: send a photo. We will tell you if we need the pile closer to the street.",
    nearby: ["hillcrest", "little-italy", "downtown"],
  },
  {
    slug: "pacific-beach",
    name: "Pacific Beach",
    region: "Coastal",
    headline: "Pacific Beach junk hauling for rentals, turnovers, and mattresses.",
    blurb:
      "Beach rentals turn over fast. We haul mattresses, couches, and mixed piles from PB proper, Crown Point, and the alleys off Mission. Morning texts get the best shot at same-day before the next tenant.",
    jobs: "Rental turnovers, queen mattresses, and patio junk from the alley.",
    access:
      "Alleys are the usual curbside spot. If it is a walk-up, that is full-service.",
    nearby: ["mission-beach", "la-jolla", "clairemont"],
  },
  {
    slug: "mission-beach",
    name: "Mission Beach",
    region: "Coastal",
    headline: "Mission Beach junk removal — boardwalk condos and alley pickups.",
    blurb:
      "Narrow lots, alleys, and condos a block off the boardwalk. We take beds, sofas, and the leftover pile after a summer rental. Stage in the alley if the street is packed.",
    jobs: "Rental furniture, mattresses, and small condo cleanouts.",
    access:
      "The dump truck needs an alley or a clear curb. Photos of the staging spot help.",
    nearby: ["pacific-beach", "ocean-beach", "point-loma"],
  },
  {
    slug: "ocean-beach",
    name: "Ocean Beach",
    region: "Coastal",
    headline: "Ocean Beach junk hauling for cottages and narrow streets.",
    blurb:
      "Cottages, surf houses, and streets that do not love a dump truck. We haul household junk, mattresses, and garage piles. Stage at the curb or in the driveway and we load.",
    jobs: "Cottage cleanouts, old couches, and mixed garage junk.",
    access:
      "Narrow blocks: leave a spot or stage in the driveway. We will not block the taco shop.",
    nearby: ["point-loma", "mission-beach", "midway"],
  },
  {
    slug: "point-loma",
    name: "Point Loma",
    region: "Coastal",
    headline: "Point Loma junk removal for homes, barracks move-outs, and garages.",
    blurb:
      "Peninsula houses, military families, and garage cleanouts from Voltaire to the village. We take furniture, appliances, and mixed household piles. No travel surcharge from Downtown.",
    jobs: "PCS leftover furniture, garage piles, and appliance swaps.",
    access:
      "Gated communities: send the gate code with the photos. Driveway staging is curbside.",
    nearby: ["ocean-beach", "little-italy", "downtown"],
  },
  {
    slug: "la-jolla",
    name: "La Jolla",
    region: "Coastal",
    headline: "La Jolla junk hauling — HOAs, estates, and appointment windows.",
    blurb:
      "HOA rules and tight village streets. We haul furniture, mattresses, and household cleanouts in the village, the shores, and UTC-adjacent hills. Text photos and any HOA time window so we hit the dock on time.",
    jobs: "Estate furniture, mattresses, and condo cleanouts.",
    access:
      "HOA or concierge buildings: send the window and dock rules with the pictures.",
    nearby: ["pacific-beach", "university-city", "carmel-valley"],
  },
  {
    slug: "clairemont",
    name: "Clairemont",
    region: "Central",
    headline: "Clairemont junk removal for mid-century homes and packed garages.",
    blurb:
      "Mesa houses with two-car garages that have not been cars in years. We haul mixed household junk, gym equipment, and appliances. Driveway staging is the usual curbside job.",
    jobs: "Garage cleanouts, treadmills, and old refrigerators.",
    access:
      "Long driveways are still curbside if we can drive up. Backyard piles are full-service.",
    nearby: ["linda-vista", "pacific-beach", "kearny-mesa"],
  },
  {
    slug: "linda-vista",
    name: "Linda Vista",
    region: "Central",
    headline: "Linda Vista junk hauling near USD and the mesa.",
    blurb:
      "Student houses, family homes, and the odd storage pile. We take mattresses, couches, and e-waste. End-of-term weeks fill up — morning texts land same-day more often.",
    jobs: "Student move-outs, mattresses, and mixed household piles.",
    access:
      "Shared driveways: stage on your side. Stairs inside the house are full-service.",
    nearby: ["clairemont", "mission-valley", "hillcrest"],
  },
  {
    slug: "mission-valley",
    name: "Mission Valley",
    region: "Central",
    headline: "Mission Valley junk removal for apartments, condos, and move-outs.",
    blurb:
      "Apartment stacks along the river. We haul sofas, beds, and the pile that did not fit the U-Haul. Loading docks and garage stalls count as curbside if we can drive to them.",
    jobs: "Apartment cleanouts, sectionals, and gym equipment.",
    access:
      "Send dock hours and a garage photo. If we carry from the unit, that is full-service.",
    nearby: ["university-heights", "kearny-mesa", "north-park"],
  },
  {
    slug: "kearny-mesa",
    name: "Kearny Mesa",
    region: "North",
    headline: "Kearny Mesa junk hauling for offices, storage, and houses.",
    blurb:
      "Office parks, storage units, and nearby homes. We take desks, chairs, e-waste, and household piles. A photo of the unit or suite is enough to quote.",
    jobs: "Office furniture, e-waste, and storage-unit cleanouts.",
    access:
      "Business parks: tell us if we need a loading zone. Storage units: meet us at the gate or leave it staged.",
    nearby: ["clairemont", "mira-mesa", "mission-valley"],
  },
  {
    slug: "university-city",
    name: "University City",
    region: "North",
    headline: "University City junk removal for UTC apartments and student move-outs.",
    blurb:
      "UTC towers and student housing. We haul mattresses, mini-fridges, and couch piles at lease-end. Dock reservations help — send the window with the photos.",
    jobs: "Student move-outs, mattresses, and apartment furniture.",
    access:
      "High-rises: loading dock or garage stall. Walk it to the dock for curbside rates.",
    nearby: ["la-jolla", "mira-mesa", "clairemont"],
  },
  {
    slug: "mira-mesa",
    name: "Mira Mesa",
    region: "North",
    headline: "Mira Mesa junk hauling for family homes and garage piles.",
    blurb:
      "Tract homes with garages full of the last decade. We take furniture, appliances, and mixed household junk. Driveway staging is the standard cheap job.",
    jobs: "Garage cleanouts, washers and dryers, and old sofas.",
    access:
      "Park in the driveway if you can leave us a lane. Side-yard piles are full-service.",
    nearby: ["scripps-ranch", "kearny-mesa", "university-city"],
  },
  {
    slug: "scripps-ranch",
    name: "Scripps Ranch",
    region: "North",
    headline: "Scripps Ranch junk removal for HOA homes and large garages.",
    blurb:
      "HOA neighborhoods and two-story homes. We haul furniture, gym gear, and cleanout piles. Text photos plus any HOA quiet-hours so the truck lands in the window.",
    jobs: "Whole-house piles, treadmills, and patio furniture.",
    access:
      "Cul-de-sacs are fine. Gated entries: send the code. We will not leave dumpings in the street.",
    nearby: ["mira-mesa", "pomerado", "carmel-valley"],
  },
  {
    slug: "carmel-valley",
    name: "Carmel Valley",
    region: "North",
    headline: "Carmel Valley junk hauling for planned communities and HOAs.",
    blurb:
      "Planned streets and HOA rules. We take household furniture, mattresses, and garage junk. No extra trip charge from our Downtown shop. A photo is the quote.",
    jobs: "Garage cleanouts, sectionals, and appliance swaps.",
    access:
      "HOA gates and visitor lists: send details with the pictures. Driveway staging is curbside.",
    nearby: ["la-jolla", "scripps-ranch", "encinitas"],
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    region: "South Bay",
    headline: "Chula Vista junk removal for family homes from the west side to Eastlake.",
    blurb:
      "South Bay houses, condos, and Eastlake garages. We haul sofas, mattresses, appliances, and mixed piles. Same posted rates as the rest of the county — no travel add-on.",
    jobs: "Family-home cleanouts, refrigerators, and patio sets.",
    access:
      "Driveway or garage staging is curbside. Inside the house or the backyard is full-service.",
    nearby: ["national-city", "bonita", "imperial-beach"],
  },
  {
    slug: "national-city",
    name: "National City",
    region: "South Bay",
    headline: "National City junk hauling — houses, alleys, and curb piles.",
    blurb:
      "Alleys and driveways off Highland and Plaza. We take furniture, mattresses, and mixed household junk. Stage it and text a picture. You do not need to be home for curbside.",
    jobs: "Curb piles, mattresses, and small house cleanouts.",
    access:
      "Alley staging is common and counts as curbside if we can drive to it.",
    nearby: ["chula-vista", "downtown", "bonita"],
  },
  {
    slug: "imperial-beach",
    name: "Imperial Beach",
    region: "South Bay",
    headline: "Imperial Beach junk removal for cottages and beach rentals.",
    blurb:
      "Small lots near the water. We haul beds, sofas, and the leftover rental pile. Same posted truck-load rates. A photo from the curb is enough.",
    jobs: "Rental turnovers, mattresses, and mixed household junk.",
    access:
      "Narrow streets: leave the driveway open or stage on your pad.",
    nearby: ["chula-vista", "coronado", "san-ysidro"],
  },
  {
    slug: "coronado",
    name: "Coronado",
    region: "South Bay",
    headline: "Coronado junk hauling — HOAs, cottages, and the village.",
    blurb:
      "We cross the bridge. Village cottages, HOA buildings, and military housing. Furniture, mattresses, and household piles at the same posted rates — no island surcharge.",
    jobs: "Cottage furniture, mattresses, and condo cleanouts.",
    access:
      "HOA or ferry-landing timing: send the window. Tight streets, so a clear curb helps.",
    nearby: ["downtown", "imperial-beach", "point-loma"],
  },
  {
    slug: "la-mesa",
    name: "La Mesa",
    region: "East County",
    headline: "La Mesa junk removal for hillside homes and village bungalows.",
    blurb:
      "Hillside drives and older bungalows near the village. We haul furniture, appliances, and garage junk. Text a photo of the driveway if it is steep.",
    jobs: "Garage piles, refrigerators, and whole-room furniture.",
    access:
      "Steep drives: we will tell you if the pile needs to come closer to the street.",
    nearby: ["el-cajon", "lemon-grove", "spring-valley"],
  },
  {
    slug: "el-cajon",
    name: "El Cajon",
    region: "East County",
    headline: "El Cajon junk hauling for east county homes, sheds, and garages.",
    blurb:
      "Houses, sheds, and the extra fridge in the garage. We take household junk, mattresses, and appliances. Posted rates — no east-county trip fee.",
    jobs: "Shed and garage cleanouts, sofas, and washers.",
    access:
      "Long lots: driveway staging is curbside. Behind the house is full-service.",
    nearby: ["santee", "la-mesa", "spring-valley"],
  },
  {
    slug: "santee",
    name: "Santee",
    region: "East County",
    headline: "Santee junk removal for suburban homes and garage cleanouts.",
    blurb:
      "Family houses and two-car garages. We haul mixed household junk, gym equipment, and old furniture. Same truck, same prices as the coast.",
    jobs: "Garage cleanouts, treadmills, and mattresses.",
    access:
      "Cul-de-sacs are fine. Leave us a driveway lane and we load.",
    nearby: ["el-cajon", "scripps-ranch", "la-mesa"],
  },
  {
    slug: "lemon-grove",
    name: "Lemon Grove",
    region: "East County",
    headline: "Lemon Grove junk hauling for small lots and driveway piles.",
    blurb:
      "Small lots and driveway staging. We take furniture, mattresses, and mixed piles. Text a picture. Curbside if it is where the truck can roll up.",
    jobs: "Driveway piles, couches, and appliance pickups.",
    access:
      "If it sits in the driveway or at the curb, that is curbside.",
    nearby: ["la-mesa", "spring-valley", "national-city"],
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    region: "East County",
    headline: "Spring Valley junk removal for houses, driveways, and garages.",
    blurb:
      "Unincorporated lots and family homes. We haul household junk, furniture, and appliances. No extra charge for the canyon streets.",
    jobs: "House cleanouts, refrigerators, and mixed garage junk.",
    access:
      "Long or sloped drives: send a photo. We will say if we need it closer to the road.",
    nearby: ["la-mesa", "bonita", "lemon-grove"],
  },
  {
    slug: "bonita",
    name: "Bonita",
    region: "South Bay",
    headline: "Bonita junk hauling for larger lots and ranch homes.",
    blurb:
      "Bigger lots, ranch houses, and the pile behind the gate. We take furniture, appliances, and household cleanouts. Driveway staging is curbside. Past the side gate is full-service.",
    jobs: "Whole-house piles, patio furniture, and garage cleanouts.",
    access:
      "Gated lots: send the code. We will not drive on the lawn.",
    nearby: ["chula-vista", "spring-valley", "national-city"],
  },
  {
    slug: "san-ysidro",
    name: "San Ysidro",
    region: "South Bay",
    headline: "San Ysidro junk removal at the south end of the county.",
    blurb:
      "Houses and small lots by the border. We haul furniture, mattresses, and mixed household junk at the same posted rates. Text a picture — no south-bay surcharge.",
    jobs: "Curb piles, mattresses, and small cleanouts.",
    access:
      "Driveway or curb staging is curbside. Inside carry-out is full-service.",
    nearby: ["chula-vista", "imperial-beach", "national-city"],
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    region: "Coastal",
    headline: "Encinitas junk hauling — north county coastal, same posted rates.",
    blurb:
      "Cardiff, Leucadia, and Encinitas proper. We haul household furniture, mattresses, and garage junk. No hidden travel charge from our San Diego shop. A photo is the quote.",
    jobs: "Beach-house furniture, mattresses, and garage piles.",
    access:
      "Coast highway traffic: morning jobs land easier. Driveway staging is curbside.",
    nearby: ["carmel-valley", "la-jolla", "solana-beach"],
  },
  {
    slug: "university-heights",
    name: "University Heights",
    region: "Central",
    headline: "University Heights junk removal for bungalows and walk-ups.",
    blurb:
      "Between North Park and Hillcrest. We take sofas, beds, and garage junk from bungalows and small apartments. Alley staging is the usual cheap job.",
    jobs: "Apartment sofas, mattresses, and mixed household piles.",
    access:
      "Alleys and detached garages count as curbside if we can drive to them.",
    nearby: ["north-park", "hillcrest", "mission-valley"],
  },
  {
    slug: "normal-heights",
    name: "Normal Heights",
    region: "Central",
    headline: "Normal Heights junk hauling for bungalows and alley garages.",
    blurb:
      "Adams Avenue bungalows and alley garages. We haul furniture, mattresses, and the pile that grew in the garage. Stage it in the alley and text a picture.",
    jobs: "Garage cleanouts, couches, and one-item pickups.",
    access:
      "Alley access is common. Tight street parking — a clear alley is better.",
    nearby: ["north-park", "kensington", "university-heights"],
  },
];

const bySlug = new Map(AREAS.map((area) => [area.slug, area]));

export function getArea(slug: string): Area | undefined {
  return bySlug.get(slug);
}

export const AREA_REGIONS: AreaRegion[] = [
  "Coastal",
  "Central",
  "North",
  "East County",
  "South Bay",
];

export function nearbyAreas(area: Area): Area[] {
  return area.nearby
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Area => Boolean(item));
}

export function areasInRegion(region: AreaRegion): Area[] {
  return AREAS.filter((area) => area.region === region);
}
