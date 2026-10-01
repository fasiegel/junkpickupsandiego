import { COMMUNITIES, type Community } from "@/lib/directory/communities";
import { PROFILES } from "@/lib/directory/profiles";

export type Company = {
  slug: string;
  name: string;
  url: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  hours: string | null;
  blurb: string;
  specialties: string[];
  needs: string[];
  /** "county" or community slugs this hauler says they cover. */
  coverage: "county" | string[];
  images: string[];
  featured?: boolean;
  /** Original factual notes from their site. */
  details?: string[];
  /** Pages on their own website. */
  links?: { label: string; href: string }[];
};

const NORTH = [
  "del-mar",
  "solana-beach",
  "encinitas",
  "cardiff",
  "carlsbad",
  "oceanside",
  "vista",
  "san-marcos",
  "escondido",
  "poway",
  "rancho-santa-fe",
  "rancho-bernardo",
  "4s-ranch",
  "rancho-penasquitos",
  "carmel-valley",
  "mira-mesa",
  "scripps-ranch",
];

export const NEEDS = [
  { id: "same-day", label: "Same-day" },
  { id: "furniture", label: "Furniture" },
  { id: "appliances", label: "Appliances" },
  { id: "cleanout", label: "Cleanouts" },
  { id: "construction", label: "Construction debris" },
  { id: "commercial", label: "Commercial" },
  { id: "north-county", label: "North County" },
] as const;

export const COMPANIES: Company[] = [
  {
    slug: "freds-junk-removal",
    name: "Fred's Junk Removal",
    url: "https://www.fredsjunkremoval.com/",
    phone: "(619) 245-9957",
    email: "fred@fredsjunkremoval.com",
    address: null,
    hours: "Mon–Sat, 9:00 AM – 4:00 PM",
    blurb:
      "Local, veteran-owned hauler behind this directory. Posted household truck-load prices, same-day often available, and a photo text is the quote.",
    specialties: ["Furniture", "Appliances", "Garage cleanouts", "Same-day", "Posted pricing"],
    needs: ["same-day", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/freds-junk-removal-photo-1.jpg",
      "/haulers/freds-junk-removal-photo-2.jpg",
      "/haulers/freds-junk-removal-photo-3.jpg",
      "/haulers/freds-junk-removal-photo-4.jpg",
    ],
    featured: true,
  },
  {
    slug: "jdog-junk-removal",
    name: "JDog Junk Removal",
    url: "https://www.jdogjunkremoval.com/locations/california/san-diego-junk-removal/",
    phone: "(844) 438-5364",
    email: null,
    address: null,
    hours: null,
    blurb:
      "Veteran-operated franchise with a San Diego County presence. Their Oceanside page lists coastal North County cities and furniture, hot tub, and garage cleanouts.",
    specialties: ["Furniture", "Hot tubs", "Garage cleanouts", "Veteran-operated"],
    needs: ["furniture", "cleanout", "north-county"],
    coverage: ["carlsbad", "encinitas", "oceanside", "rancho-santa-fe", "solana-beach", "vista"],
    images: [
      "/haulers/jdog-trucks.jpeg",
      "/haulers/jdog-trailer.jpeg",
      "/haulers/jdog-logo.jpeg",
    ],
  },
  {
    slug: "junk-be-gone",
    name: "Junk Be Gone Inc",
    url: "https://junkbegoneinc.com/",
    phone: "(657) 254-3058",
    email: "info@junkbegoneinc.com",
    address: null,
    hours: null,
    blurb:
      "San Diego junk removal and cleanouts. Their site lists furniture, appliances, hot tubs, construction debris, and commercial jobs, and offers online booking.",
    specialties: ["Furniture", "Appliances", "Hot tubs", "Construction debris", "Commercial"],
    needs: ["furniture", "appliances", "construction", "commercial", "cleanout"],
    coverage: "county",
    images: ["/haulers/junk-be-gone-logo.jpeg"],
  },
  {
    slug: "junk-punch",
    name: "Junk Punch",
    url: "https://junk-punch.com/",
    phone: "(619) 219-1503",
    email: "sdjunkpunch@gmail.com",
    address: "San Diego, CA 92102",
    hours: "Mon–Sat 6 AM – 8 PM, Sun 6 AM – 9 PM",
    blurb:
      "Family-owned hauler based around Chula Vista that also takes bulk trash across most of San Diego County. Same-day or next-day is listed.",
    specialties: ["Bulk trash", "Furniture", "Cardboard recycling", "Same-day"],
    needs: ["same-day", "furniture", "commercial"],
    coverage: "county",
    images: [
      "/haulers/junk-punch-photo-1.jpg",
      "/haulers/junk-punch-load.jpeg",
      "/haulers/junk-punch-crew.jpeg",
    ],
  },
  {
    slug: "the-wreckin-haul",
    name: "The Wreckin' Haul",
    url: "https://www.thewreckinhaul.com/",
    phone: "(760) 421-5331",
    email: null,
    address: null,
    hours: null,
    blurb:
      "Veteran-owned junk removal, dumpster rental, and property cleanouts aimed at North County San Diego, with same-day service listed as available.",
    specialties: ["Dumpster rental", "Property cleanouts", "Veteran-owned", "Same-day"],
    needs: ["same-day", "cleanout", "north-county", "construction"],
    coverage: NORTH,
    images: [
      "/haulers/the-wreckin-haul-photo-2.webp",
      "/haulers/the-wreckin-haul-photo-3.webp",
      "/haulers/the-wreckin-haul-photo-4.webp",
      "/haulers/the-wreckin-haul-photo-1.jpg",
    ],
  },
  {
    slug: "junk-guys-san-diego",
    name: "Junk Guys San Diego",
    url: "https://www.junkguyssandiego.com/",
    phone: "(760) 415-9811",
    email: null,
    address: null,
    hours: null,
    blurb:
      "Trash pickup and junk removal for the greater San Diego area. Their site calls out Carlsbad, Vista, Oceanside, and Encinitas.",
    specialties: ["Trash pickup", "Greater San Diego"],
    needs: ["north-county", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/junk-guys-flyer.jpg",
      "/haulers/junk-guys-logo.jpeg",
    ],
  },
  {
    slug: "dmd-junk-removal",
    name: "DMD Junk Removal",
    url: "https://www.dmdjunkremoval.com/",
    phone: "(951) 401-5933",
    email: "info@dmdjunkremoval.com",
    address: null,
    hours: null,
    blurb:
      "North County dump-trailer rental and junk removal. The site posts junk-removal ranges and trailer rentals you can book by text.",
    specialties: ["Dump trailer rental", "Junk removal", "North County"],
    needs: ["north-county", "construction"],
    coverage: NORTH,
    images: [
      "/haulers/dmd-junk-removal-photo-3.jpg",
      "/haulers/dmd-junk-removal-photo-4.jpg",
      "/haulers/dmd-junk-removal-photo-1.jpg",
      "/haulers/dmd-crew.jpeg",
    ],
  },
  {
    slug: "the-hauler",
    name: "The Hauler Junk Removal",
    url: "https://www.thehaulerjunkremoval.com/",
    phone: "(760) 331-3289",
    email: "thehaulerjunkremoval@gmail.com",
    address: null,
    hours: null,
    blurb:
      "Family-run hauler that says it covers North County, San Diego, and surrounding areas, with an eco-friendly disposal pitch.",
    specialties: ["Family-owned", "Eco-friendly disposal"],
    needs: ["north-county", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/the-hauler-extra-4.jpg",
      "/haulers/the-hauler-extra-3.jpg",
      "/haulers/the-hauler-truck.jpg",
      "/haulers/the-hauler-extra-2.jpg",
    ],
  },
  {
    slug: "ace-hauling",
    name: "Ace Hauling",
    url: "https://www.acehauling.com/",
    phone: "(760) 332-3366",
    email: "infoacehauling@gmail.com",
    address: null,
    hours: null,
    blurb:
      "San Diego junk removal and demolition crew for houses and businesses. Their site stresses residential and commercial work.",
    specialties: ["Demolition", "Residential", "Commercial"],
    needs: ["construction", "commercial", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/ace-hauling-photo-1.jpg",
      "/haulers/ace-hauling-photo-2.jpg",
      "/haulers/ace-hauling-photo-3.jpg",
      "/haulers/ace-hauling-photo-4.jpg",
    ],
  },
  {
    slug: "junk-fairy",
    name: "Junk Fairy",
    url: "https://www.junkfairy.com/",
    phone: "(858) 361-7941",
    email: "info@junkfairy.com",
    address: null,
    hours: null,
    blurb:
      "San Diego hauling crew that brands itself as the city’s pink junk-removal team. They advertise fast residential pickups.",
    specialties: ["Residential hauling", "Eco-friendly"],
    needs: ["furniture", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/junk-fairy-photo-4.webp",
      "/haulers/junk-fairy-photo-1.webp",
      "/haulers/junk-fairy-photo-2.webp",
      "/haulers/junk-fairy-photo-3.webp",
    ],
  },
  {
    slug: "haul-away-any-day",
    name: "Haul Away Any Day",
    url: "https://haulawayanyday.com/",
    phone: "(619) 277-7241",
    email: "info@haulawayanyday.com",
    address: null,
    hours: null,
    blurb:
      "San Diego junk removal for furniture, appliances, garage and yard piles, and tenant cleanouts, with same-day pickup listed.",
    specialties: ["Same-day", "Tenant cleanouts", "Garage cleanouts"],
    needs: ["same-day", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/haul-away-any-day-photo-1.jpg",
      "/haulers/haul-away-any-day-photo-2.jpg",
      "/haulers/haul-away-any-day-photo-4.jpg",
    ],
  },
  {
    slug: "junkmates",
    name: "JunkMates",
    url: "https://www.junkmatessd.com/",
    phone: "(858) 740-4750",
    email: "contact@junkmatessd.com",
    address: "1053 Regal Rd, Encinitas, CA 92024",
    hours: null,
    blurb:
      "Encinitas-based residential and commercial hauler that says it serves all of San Diego County, including furniture, appliances, hot tubs, and dumpsters.",
    specialties: ["Dumpster rental", "Hot tubs", "Commercial", "Countywide"],
    needs: ["furniture", "appliances", "commercial", "cleanout", "north-county"],
    coverage: "county",
    images: [
      "/haulers/junkmates-photo-1.jpg",
      "/haulers/junkmates-photo-2.jpg",
      "/haulers/junkmates-photo-4.webp",
      "/haulers/junkmates-photo-3.webp",
    ],
  },
  {
    slug: "the-hauling-crew",
    name: "The Hauling Crew",
    url: "https://www.thehaulingcrewsd.com/",
    phone: "(619) 490-0223",
    email: "sdhaulingcrew@gmail.com",
    address: null,
    hours: null,
    blurb:
      "San Diego hauling company for trash, gravel, and dump-truck loads as well as household junk.",
    specialties: ["Dump truck hauling", "Gravel", "Trash"],
    needs: ["construction", "commercial"],
    coverage: "county",
    images: [
      "/haulers/the-hauling-crew-photo-1.jpg",
      "/haulers/the-hauling-crew-photo-2.jpg",
      "/haulers/the-hauling-crew-photo-3.jpg",
      "/haulers/the-hauling-crew-photo-4.jpg",
    ],
  },
  {
    slug: "jb-solutions",
    name: "J&B Solutions",
    url: "https://jandbsolutionsca.com/",
    phone: "(619) 357-9587",
    email: "byron@jandbsolutionsca.com",
    address: "Lakeside, CA",
    hours: null,
    blurb:
      "Licensed hauler out of Lakeside that takes residential and commercial junk across San Diego County and also rents dumpsters.",
    specialties: ["Dumpster rental", "Demolition", "Lakeside"],
    needs: ["construction", "commercial", "cleanout"],
    coverage: "county",
    images: [],
  },
  {
    slug: "ruiz-junk-removal",
    name: "Ruiz Junk Removal and Hauling",
    url: "https://ruizjunkremovalandhauling.com/",
    phone: "(619) 253-3200",
    email: "Ruizjunkremoval.hauling@gmail.com",
    address: null,
    hours: null,
    blurb:
      "San Diego crew for junk, cleanouts, trash, and demo debris. They ask for photos when you request an estimate.",
    specialties: ["Cleanouts", "Demo debris", "Photo estimates"],
    needs: ["cleanout", "construction"],
    coverage: "county",
    images: [
      "/haulers/ruiz-junk-removal-photo-2.jpg",
      "/haulers/ruiz-junk-removal-photo-3.jpg",
      "/haulers/ruiz-junk-removal-photo-4.jpg",
    ],
  },
  {
    slug: "sa-junk-haul",
    name: "SA Junk Haul",
    url: "https://sajunkhaul.com/service-area/san-diego-ca/",
    phone: "(760) 708-1965",
    email: "Estimates@SAjunkhaul.com",
    address: null,
    hours: null,
    blurb:
      "San Diego page covers home and business cleanouts plus furniture, appliances, mattresses, and trash.",
    specialties: ["Home cleanouts", "Business cleanouts", "Mattresses"],
    needs: ["furniture", "appliances", "cleanout", "commercial"],
    coverage: "county",
    images: [
      "/haulers/sa-junk-haul-photo-1.jpg",
      "/haulers/sa-junk-haul-photo-2.jpg",
      "/haulers/sa-junk-haul-photo-3.jpg",
      "/haulers/sa-junk-haul-photo-4.jpg",
    ],
  },
  {
    slug: "severin-hauling",
    name: "Severin Hauling",
    url: "https://www.severinhauling.com/",
    phone: "(619) 750-0114",
    email: "severinhauling@gmail.com",
    address: "La Mesa, CA",
    hours: null,
    blurb:
      "Licensed La Mesa crew hauling across San Diego County. Their site posts single-item pricing from $69 and full loads, plus same-day pickup.",
    specialties: ["Posted item prices", "Same-day", "La Mesa"],
    needs: ["same-day", "furniture", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/severin-hauling-photo-1.jpg",
      "/haulers/severin-hauling-photo-2.jpg",
      "/haulers/severin-hauling-photo-3.jpg",
      "/haulers/severin-hauling-photo-4.jpg",
    ],
  },
  {
    slug: "haul-out",
    name: "Haul Out Junk Removal",
    url: "https://www.hauloutjunkremoval.com/",
    phone: "(760) 685-9332",
    email: "hauloutjunkremovalsd@gmail.com",
    address: null,
    hours: null,
    blurb:
      "Family- and veteran-owned San Diego hauler for homes and businesses, with upfront pricing called out on the site.",
    specialties: ["Residential", "Commercial", "Veteran-owned"],
    needs: ["commercial", "cleanout", "furniture"],
    coverage: "county",
    images: [
      "/haulers/haul-out-photo-1.jpg",
      "/haulers/haul-out-photo-3.jpg",
      "/haulers/haul-out-photo-2.jpg",
    ],
  },
  {
    slug: "demo-diego",
    name: "Demo Diego",
    url: "https://www.demodiego.com/junk-removal",
    phone: "(760) 860-8080",
    email: "demodiego619@gmail.com",
    address: null,
    hours: null,
    blurb:
      "Residential junk removal across San Diego County, including furniture, appliances, yard waste, and estate cleanouts, with same-day listed.",
    specialties: ["Estate cleanouts", "Yard waste", "Same-day"],
    needs: ["same-day", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/demo-diego-photo-3.jpg",
      "/haulers/demo-diego-photo-1.jpg",
      "/haulers/demo-diego-photo-2.jpg",
      "/haulers/demo-diego-photo-4.jpg",
    ],
  },
  {
    slug: "san-diego-trash-pickup",
    name: "San Diego Trash Pickup",
    url: "https://sandiegotrashpickup.com/",
    phone: null,
    email: null,
    address: null,
    hours: null,
    blurb:
      "Pickup site for furniture, appliances, mattresses, household junk, and cleanouts in San Diego. Request a quote on their site — a public phone was not listed.",
    specialties: ["Furniture", "Appliances", "Mattresses", "Cleanouts"],
    needs: ["furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [],
  },
  {
    slug: "the-junk-transporter",
    name: "The Junk Transporter",
    url: "https://thejunktransporter.com/",
    phone: "(760) 522-3215",
    email: "TheJunkTransporter@gmail.com",
    address: null,
    hours: null,
    blurb:
      "Family-owned hauler that says it covers all of San Diego County with same-day or next-day loads, including hot tubs and property cleanouts.",
    specialties: ["Same-day", "Hot tubs", "Countywide"],
    needs: ["same-day", "cleanout", "furniture"],
    coverage: "county",
    images: ["/haulers/the-junk-transporter-photo-1.jpg"],
  },
  {
    slug: "junkmd",
    name: "JunkMD",
    url: "https://junkmd.com/",
    phone: "(858) 869-9448",
    email: "dave@junkmd.com",
    address: null,
    hours: null,
    blurb:
      "Family-owned San Diego hauler since 2012. The site advertises same-day and next-day service with flat-rate pricing.",
    specialties: ["Flat-rate", "Same-day", "Family-owned"],
    needs: ["same-day", "cleanout", "furniture"],
    coverage: "county",
    images: [
      "/haulers/junkmd-photo-3.jpg",
      "/haulers/junkmd-photo-1.jpg",
      "/haulers/junkmd-photo-4.jpg",
      "/haulers/junkmd-photo-5.jpg",
    ],
  },
  {
    slug: "priority-hauling",
    name: "Priority Hauling",
    url: "https://www.priorityhaulingsd.com/",
    phone: "(619) 363-2581",
    email: null,
    address: null,
    hours: null,
    blurb:
      "Junk, trash, and rubbish removal for the city of San Diego and surrounding cities.",
    specialties: ["Trash", "Rubbish", "City of San Diego"],
    needs: ["cleanout"],
    coverage: "county",
    images: [
      "/haulers/priority-hauling-extra-5.jpg",
      "/haulers/priority-hauling-photo-3.jpg",
      "/haulers/priority-hauling-extra-2.jpg",
    ],
  },
  {
    slug: "pick-and-dump",
    name: "Pick and Dump",
    url: "https://www.pickanddump.com/",
    phone: "(619) 257-4827",
    email: "sales@pickanddump.com",
    address: null,
    hours: null,
    blurb:
      "California junk removal crew with a San Diego phone line and sales email on the site. Estate-style cleanout photos are featured.",
    specialties: ["Estate cleanouts", "Hauling"],
    needs: ["cleanout", "furniture"],
    coverage: "county",
    images: [
      "/haulers/pick-and-dump-photo-1.jpg",
      "/haulers/pick-and-dump-photo-2.jpg",
      "/haulers/pick-and-dump-photo-3.jpg",
      "/haulers/pick-and-dump-photo-4.jpg",
    ],
  },
  {
    slug: "crisan-junk-removal",
    name: "Crisan Junk Removal",
    url: "https://crisanjunkremoval.com/",
    phone: "(619) 500-9920",
    email: "contact@crisantransport.com",
    address: null,
    hours: null,
    blurb:
      "San Diego County junk removal that advertises fast, affordable residential hauling.",
    specialties: ["Residential", "Countywide"],
    needs: ["cleanout", "furniture"],
    coverage: "county",
    images: [
      "/haulers/crisan-junk-removal-photo-1.webp",
      "/haulers/crisan-junk-removal-photo-4.webp",
    ],
  },
  {
    slug: "jc-junk-removal",
    name: "JC Junk Removal",
    url: "https://jcjunkremovalservices.com/",
    phone: "(619) 805-5104",
    email: "Jcjunkremovalservices24@gmail.com",
    address: null,
    hours: null,
    blurb:
      "San Diego junk removal service you can call or email for a pickup quote.",
    specialties: ["Local hauling"],
    needs: ["cleanout"],
    coverage: "county",
    images: [
      "/haulers/jc-junk-removal-photo-2.jpg",
      "/haulers/jc-junk-removal-photo-4.jpg",
      "/haulers/jc-junk-removal-photo-3.jpg",
    ],
  },
  {
    slug: "junk-junkys",
    name: "Junk Junkys",
    url: "https://junkjunkys.com/",
    phone: "(858) 399-1540",
    email: "Junkjunkysmarketing@gmail.com",
    address: null,
    hours: "Mon–Sun, 9 AM – 6 PM",
    blurb:
      "Local San Diego junk hauling and removal company advertising eco-friendly disposal.",
    specialties: ["Eco-friendly", "Local hauling"],
    needs: ["cleanout", "furniture"],
    coverage: "county",
    images: ["/haulers/junk-junkys-photo-3.jpg"],
  },
  {
    slug: "bay-junk",
    name: "Bay Junk",
    url: "https://www.bayjunk.com/locations/California/junk-removal-san-diego",
    phone: "(619) 488-6969",
    email: "info@bayjunk.com",
    address: null,
    hours: null,
    blurb:
      "Bay Junk publishes a San Diego location page with a local text line, plus furniture, mattress, and cleanout pages. They also haul in the Bay Area, so use the San Diego page when you book.",
    specialties: ["San Diego page", "Furniture", "Cleanouts"],
    needs: ["furniture", "cleanout", "commercial"],
    coverage: [
      "solana-beach",
      "encinitas",
      "cardiff",
      "carmel-valley",
      "poway",
      "la-jolla",
      "la-mesa",
      "el-cajon",
      "del-mar",
      "carlsbad",
      "rancho-bernardo",
    ],
    images: [
      "/haulers/bay-junk-photo-3.jpg",
      "/haulers/bay-junk-photo-1.jpg",
    ],
  },
  {
    slug: "junk-away-san-diego",
    name: "Junk Away San Diego",
    url: "https://junkawaysandiego.com/",
    phone: "(858) 321-5555",
    email: "support@junkawaysandiego.com",
    address: null,
    hours: null,
    blurb:
      "Same-day San Diego hauling and cleanouts for homes and businesses, with upfront pricing mentioned on the site.",
    specialties: ["Same-day", "Cleanouts", "Upfront pricing"],
    needs: ["same-day", "cleanout", "commercial"],
    coverage: "county",
    images: [
      "/haulers/junk-away-san-diego-photo-2.jpg",
      "/haulers/junk-away-san-diego-photo-4.jpg",
      "/haulers/junk-away-san-diego-photo-3.jpg",
    ],
  },
  {
    slug: "fast-pickup-junk",
    name: "Fast Pickup Junk",
    url: "https://fastpickupjunksd.com/",
    phone: null,
    email: null,
    address: null,
    hours: null,
    blurb:
      "Full-service San Diego metro hauler. Their site names Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Encinitas, and Vista. Quotes go through the site form.",
    specialties: ["Residential", "Commercial", "Metro San Diego"],
    needs: ["commercial", "cleanout", "north-county"],
    coverage: "county",
    images: [],
  },
  {
    slug: "flash-junk-removal",
    name: "Flash Junk Removal",
    url: "https://www.flashjunkremoval.com/",
    phone: "(760) 639-8778",
    email: "Flashjunkremoval@gmail.com",
    address: null,
    hours: "Mon–Sun, 7 AM – 7 PM",
    blurb:
      "Countywide hauler advertising same-day or next-day truck loads, plus appliances, mattresses, furniture, hoarding cleanouts, and construction debris.",
    specialties: ["Same-day", "Hoarding cleanouts", "Construction debris", "Dumpsters"],
    needs: ["same-day", "furniture", "appliances", "cleanout", "construction"],
    coverage: "county",
    images: [
      "/haulers/flash-junk-removal-photo-1.jpg",
      "/haulers/flash-junk-removal-photo-2.jpg",
      "/haulers/flash-junk-removal-photo-3.jpg",
    ],
  },
  {
    slug: "clear-junk-removal",
    name: "Clear Junk Removal",
    url: "https://www.clearjunkremoval.com/",
    phone: "(760) 405-4347",
    email: "pmarchand06@gmail.com",
    address: "11846 Scripps Creek Drive, San Diego, CA 92131",
    hours: null,
    blurb:
      "North County crew based in Scripps Ranch. They list same-day work plus furniture, appliances, construction debris, and foreclosure cleanouts.",
    specialties: ["Same-day", "North County", "Foreclosure cleanouts"],
    needs: ["same-day", "furniture", "appliances", "construction", "north-county", "cleanout"],
    coverage: [
      "del-mar",
      "poway",
      "oceanside",
      "carlsbad",
      "vista",
      "san-marcos",
      "scripps-ranch",
      "rancho-bernardo",
      "encinitas",
      "rancho-penasquitos",
      "mira-mesa",
      "escondido",
    ],
    images: [
      "/haulers/clear-junk-removal-photo-1.jpg",
      "/haulers/clear-junk-removal-photo-4.jpg",
    ],
  },
  {
    slug: "junk-rushed",
    name: "Junk Rushed",
    url: "https://junkrushed.com/",
    phone: "(619) 248-9003",
    email: "ray@junkrushsd.com",
    address: null,
    hours: "Mon–Fri, 8 AM – 8 PM",
    blurb:
      "Locally owned county hauler for homes, businesses, and job sites. Same-day is listed, along with yard waste, appliances, and furniture.",
    specialties: ["Same-day", "Yard waste", "Veteran-owned"],
    needs: ["same-day", "furniture", "appliances", "commercial"],
    coverage: "county",
    images: [
      "/haulers/junk-rushed-photo-1.jpg",
      "/haulers/junk-rushed-photo-2.jpg",
      "/haulers/junk-rushed-photo-3.jpg",
      "/haulers/junk-rushed-photo-4.jpg",
    ],
  },
  {
    slug: "pacific-rim-junk",
    name: "Pacific Rim Junk",
    url: "https://pacificrimjunk.com/",
    phone: "(760) 613-1111",
    email: "info@pacificrimjunk.com",
    address: "Encinitas, CA",
    hours: null,
    blurb:
      "Family-owned Encinitas company that says it covers San Diego County neighborhoods, including same-day furniture, e-waste, yard waste, and construction debris.",
    specialties: ["Same-day", "E-waste", "Construction debris", "Encinitas"],
    needs: ["same-day", "furniture", "appliances", "construction", "north-county"],
    coverage: "county",
    images: [
      "/haulers/pacific-rim-junk-photo-1.jpg",
      "/haulers/pacific-rim-junk-photo-4.jpg",
      "/haulers/pacific-rim-junk-photo-3.jpg",
    ],
  },
  {
    slug: "strong-hauling",
    name: "Strong Hauling",
    url: "https://www.stronghauling.com/",
    phone: "(858) 866-9345",
    email: null,
    address: null,
    hours: "Open daily, 7 AM – 7 PM",
    blurb:
      "Family-owned county hauler open daily. The site lists furniture, hoarder cleanouts, hot tubs, appliances, and yard debris, with same-day or next-day.",
    specialties: ["Hoarder cleanouts", "Hot tubs", "Daily hours"],
    needs: ["same-day", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/strong-hauling-photo-1.jpg",
      "/haulers/strong-hauling-photo-2.jpg",
      "/haulers/strong-hauling-photo-4.webp",
      "/haulers/strong-hauling-photo-3.webp",
    ],
  },
  {
    slug: "the-junkiez",
    name: "The Junkiez",
    url: "https://sd.thejunkiez.com/",
    phone: "(619) 759-7005",
    email: null,
    address: null,
    hours: null,
    blurb:
      "San Diego crew advertising same-day full-service pickup for furniture, appliances, and exercise equipment. They also list some Orange County and Los Angeles cities.",
    specialties: ["Same-day", "Furniture", "Exercise equipment"],
    needs: ["same-day", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/the-junkiez-photo-2.jpg",
      "/haulers/the-junkiez-photo-1.jpg",
      "/haulers/the-junkiez-photo-3.jpg",
      "/haulers/the-junkiez-photo-4.jpg",
    ],
  },
  {
    slug: "monarch-junk-removal",
    name: "Monarch Junk Removal",
    url: "https://monarchjunkremoval.com/",
    phone: "(844) 619-5865",
    email: null,
    address: null,
    hours: null,
    blurb:
      "Veteran-owned company that says it covers San Diego County, including furniture, appliances, yard waste, office junk, and hot tubs, with same-day options.",
    specialties: ["Veteran-owned", "Office junk", "Hot tubs", "Same-day"],
    needs: ["same-day", "furniture", "appliances", "commercial", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/monarch-junk-removal-photo-3.jpg",
      "/haulers/monarch-junk-removal-photo-1.jpg",
      "/haulers/monarch-junk-removal-photo-4.jpg",
    ],
  },
  {
    slug: "fetch-junk",
    name: "FETCH Junk Removal",
    url: "https://www.fetchjunk.com/",
    phone: "(619) 333-8447",
    email: "fetchjunkremoval@gmail.com",
    address: "9131 Fletcher Pkwy, Suite 122b, La Mesa, CA 91942",
    hours: "6:30 AM – 9:00 PM, 7 days",
    blurb:
      "Family-owned La Mesa crew since 2017 that says it serves San Diego County and quotes from texted photos. Hours run early to late, seven days.",
    specialties: ["Photo quotes", "Construction debris", "La Mesa", "Same-day"],
    needs: ["same-day", "construction", "furniture", "appliances", "cleanout"],
    coverage: "county",
    images: [
      "/haulers/fetch-junk-photo-2.jpg",
      "/haulers/fetch-junk-photo-1.jpg",
      "/haulers/fetch-junk-photo-3.jpg",
    ],
  },
  {
    slug: "you-call-it-we-haul-it",
    name: "You Call It We Haul It",
    url: "https://www.youcallitwehaulitca.com/",
    phone: "(858) 215-5815",
    email: "youcallitwehaulitfast@gmail.com",
    address: "488 Emerson St., Chula Vista, CA 91911",
    hours: "Mon–Sun, 6:00 AM – 8:00 PM",
    blurb:
      "Family- and woman-owned Chula Vista hauler. They publish a long city list from the South Bay through North County and say same-day or next-day is available.",
    specialties: ["Chula Vista", "Appliances", "Commercial", "Same-day"],
    needs: ["same-day", "appliances", "furniture", "commercial", "construction"],
    coverage: [
      "alpine",
      "bonita",
      "cardiff",
      "carlsbad",
      "chula-vista",
      "coronado",
      "del-mar",
      "el-cajon",
      "encinitas",
      "escondido",
      "imperial-beach",
      "jamul",
      "la-jolla",
      "la-mesa",
      "lakeside",
      "lemon-grove",
      "poway",
      "ramona",
      "rancho-san-diego",
      "rancho-santa-fe",
      "san-marcos",
      "san-ysidro",
      "santee",
      "solana-beach",
      "spring-valley",
      "vista",
    ],
    images: [
      "/haulers/you-call-it-we-haul-it-photo-3.jpg",
      "/haulers/you-call-it-we-haul-it-photo-4.jpg",
      "/haulers/you-call-it-we-haul-it-photo-1.jpg",
    ],
  },
  {
    slug: "junk-haul-team",
    name: "Junk Haul Team",
    url: "https://junkhaulteam.com/",
    phone: "(619) 851-6426",
    email: null,
    address: "San Diego, CA 92102",
    hours: null,
    blurb:
      "Veteran-owned, licensed San Diego crew that says it covers the county with same-day service for furniture, appliances, construction cleanup, and storage units.",
    specialties: ["Veteran-owned", "Same-day", "Storage units"],
    needs: ["same-day", "furniture", "appliances", "construction", "cleanout"],
    coverage: "county",
    images: ["/haulers/junk-haul-team-photo-1.jpg"],
  },
];

const bySlug = new Map(COMPANIES.map((c) => [c.slug, c]));

export function getCompany(slug: string): Company | undefined {
  const company = bySlug.get(slug);
  if (!company) return undefined;
  const extra = PROFILES[slug];
  return extra ? { ...company, ...extra } : company;
}

export function companyServes(company: Company, community: Community): boolean {
  if (company.coverage === "county") return true;
  return company.coverage.includes(community.slug);
}

export function companiesForCommunity(community: Community): Company[] {
  return COMPANIES.filter((c) => companyServes(c, community));
}

export function communitiesForCompany(company: Company): Community[] {
  if (company.coverage === "county") return COMMUNITIES;
  const set = new Set(company.coverage);
  return COMMUNITIES.filter((c) => set.has(c.slug));
}

export function coverageLabel(company: Company): string {
  if (company.coverage === "county") return "San Diego County";
  if (company.coverage.length === 0) return "Confirm on their site";
  return `${company.coverage.length} listed communities`;
}
