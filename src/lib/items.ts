export type HaulSlogan = {
  title: string;
  kicker: string;
  copy: string;
  src: string;
  alt: string;
  variant?: "overlay" | "panel";
  flip?: boolean;
};

export type HaulItem = {
  slug: string;
  name: string;
  haulingTitle: string;
  kicker: string;
  copy: string;
  summary: string;
  details: string;
  price: string;
  examples: string[];
  image: string;
  imageAlt: string;
  related: string[];
  slogan: HaulSlogan;
};

export function withPlace(text: string, place: string): string {
  return text.replaceAll("{place}", place);
}

export const HAUL_ITEMS: HaulItem[] = [
  {
    slug: "furniture",
    name: "Furniture",
    haulingTitle: "Furniture hauling",
    kicker: "Sofas, desks, dressers",
    copy: "We haul furniture such as couches, coffee tables, dressers, desks, and dining sets for homeowners in {place}. Customers come back for the lowest posted prices on furniture hauling in {place} — from $69 for one item.",
    summary:
      "We haul furniture such as couches and coffee tables for homeowners in San Diego. Our customers enjoy the lowest prices for furniture hauling in San Diego.",
    details:
      "We haul furniture such as couches, coffee tables, dressers, desks, dining sets, and the chair that has been in the garage since 2014. Sectionals are priced by the piece. Curbside if you stage it at the driveway. Full-service if we carry it from inside. San Diego homeowners come back for the lowest posted furniture-hauling prices in the county — from $69 for one item. Text a picture. The quote you accept is the amount you pay.",
    price:
      "One item from $69 curbside. A three-piece sectional is often $179 curbside. Packed furniture loads use the truck calculator.",
    examples: [
      "Sofas and love seats",
      "Sectionals, piece by piece",
      "Dressers, desks, tables",
      "Dining sets and chairs",
      "Bookshelves and cabinets",
    ],
    image: "/images/job-driveway-sofas.jpg",
    imageAlt: "Couches and chairs staged on a San Diego driveway",
    related: ["couches-and-sectionals", "mattresses", "garage-cleanouts"],
    slogan: {
      title: "Cheap junk hauling",
      kicker: "From $69",
      copy: "Couches, dressers, dining sets. Posted household rates. Text Fred a picture and the quote you accept is the amount you pay.",
      src: "/images/job-apartment-lot.jpg",
      alt: "Furniture pile in a San Diego apartment parking lot ready for a cheap haul",
      variant: "panel",
    },
  },
  {
    slug: "couches-and-sectionals",
    name: "Couches & sectionals",
    haulingTitle: "Couch and sectional hauling",
    kicker: "Priced by the piece",
    copy: "We haul couches and sectionals — leather, fabric, recliners, and sleepers — for homeowners in {place}. A sofa is one item. A three-piece is three. Customers enjoy the lowest posted prices for couch hauling in {place}.",
    summary:
      "We haul couches and sectionals — leather, fabric, recliners, and sleepers — for homeowners in San Diego. Our customers enjoy the lowest prices for couch hauling in San Diego.",
    details:
      "A sofa is one item. A three-piece sectional is three. We haul them for homeowners across San Diego, curbside if you walk it to the driveway, full-service if we come inside or down the stairs. Send a photo of all the pieces together so Fred can count them. Customers keep coming back for the lowest posted prices on sofa and sectional hauling in San Diego.",
    price:
      "One sofa from $69 curbside / $130 full-service. Two pieces $119 / $180. Three-piece sectional $179 / $270.",
    examples: [
      "Single sofas and love seats",
      "Recliners",
      "Sectionals by the piece",
      "Sleeper sofas",
      "Outdoor couches",
    ],
    image: "/images/job-sectional.jpg",
    imageAlt: "Three-piece leather sectional at a San Diego curb",
    related: ["furniture", "mattresses", "apartment-cleanouts"],
    slogan: {
      title: "San Diego's favorite hauling service",
      kicker: "1,400+ five-star reviews",
      copy: "Sofas and sectionals, priced by the piece. Locally owned. Veteran owned. Same truck, same Fred.",
      src: "/images/job-driveway-sofas.jpg",
      alt: "Couches and chairs staged on a San Diego driveway for pickup",
      variant: "panel",
      flip: true,
    },
  },
  {
    slug: "mattresses",
    name: "Mattresses",
    haulingTitle: "Mattress hauling",
    kicker: "Any size, including queen",
    copy: "We haul mattresses of any size — twin through king — plus box springs and frames for homeowners in {place}. Customers like the easy curb pickup and the lowest posted prices for mattress hauling in {place}.",
    summary:
      "We haul mattresses, box springs, and bed frames for homeowners in San Diego. Our customers enjoy the lowest prices for mattress hauling in San Diego.",
    details:
      "We haul mattresses of any size — twin through king — plus box springs and frames for homeowners in San Diego. A mattress and box spring is two items. The frame is a third if it goes too. Stage it at the curb, garage, or alley for curbside rates. Full-service if we carry it from the bedroom. Customers like the easy pickup and the lowest posted prices for mattress hauling in San Diego.",
    price:
      "One mattress from $69 curbside. Mattress plus box spring is usually $119. Bedroom set (mattress, box, frame, dresser) is a truck-load slice.",
    examples: [
      "Twin, full, queen, king",
      "Box springs",
      "Bed frames and headboards",
      "Bunk beds",
      "Memory-foam and pillow-top",
    ],
    image: "/images/job-mattress.jpg",
    imageAlt: "Queen mattress and box spring at a San Diego curb",
    related: ["furniture", "apartment-cleanouts", "household-junk"],
    slogan: {
      title: "Easy mattress hauling",
      kicker: "Any size, including queen",
      copy: "Mattress, box spring, and frame. Curbside if you stage it. Full-service if we carry it out of the bedroom.",
      src: "/images/job-curbside-mixed.jpg",
      alt: "Mattress and mixed household junk staged at a San Diego curb",
      flip: true,
    },
  },
  {
    slug: "appliances",
    name: "Appliances",
    haulingTitle: "Appliance hauling",
    kicker: "Emptied and disconnected",
    copy: "We haul appliances such as refrigerators, washers, dryers, stoves, and water heaters for homeowners in {place}. Empty them and unplug. Customers get the lowest posted prices for appliance hauling in {place}.",
    summary:
      "We haul appliances such as refrigerators, washers, and dryers for homeowners in San Diego. Our customers enjoy the lowest prices for appliance hauling in San Diego.",
    details:
      "We haul appliances such as refrigerators, washers, dryers, stoves, dishwashers, and water heaters for homeowners in San Diego. Empty them and unplug — we do not unhook gas or punch a water line. Curbside if it sits in the driveway or garage. Full-service if we walk it out of the kitchen. Customers get the lowest posted prices for appliance hauling in San Diego. Text a picture for a firm number.",
    price:
      "One appliance from $69 curbside / $130 full-service. Fridge plus washer plus dryer is often a 3/10 truck.",
    examples: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Stoves and dishwashers",
      "Water heaters, emptied",
      "Window AC units",
    ],
    image: "/images/job-appliances.jpg",
    imageAlt: "Refrigerator, washer, and dryer staged at a San Diego curb",
    related: ["refrigerators", "garage-cleanouts", "household-junk"],
    slogan: {
      title: "Appliance hauling",
      kicker: "Emptied and disconnected",
      copy: "Fridges, washers, dryers, and water heaters. You unplug and empty first. We take them.",
      src: "/images/job-full-service.jpg",
      alt: "Crew carrying bulky household items out to the dump truck",
      variant: "panel",
    },
  },
  {
    slug: "refrigerators",
    name: "Refrigerators",
    haulingTitle: "Refrigerator hauling",
    kicker: "Empty. Unplug. We take it.",
    copy: "We haul refrigerators, freezers, and mini-fridges for homeowners in {place}. Empty them and unplug. Customers get the lowest posted prices for fridge hauling in {place}.",
    summary:
      "We haul refrigerators, freezers, and mini-fridges for homeowners in San Diego. Our customers enjoy the lowest prices for fridge hauling in San Diego.",
    details:
      "We haul kitchen fridges, garage beer fridges, and mini-fridges for homeowners in San Diego. Empty them. Unplug them. Disconnect water lines if they have them. A fridge in the driveway is curbside. A fridge we pull from the kitchen is full-service. Recycled, not dumped. Customers get the lowest posted prices for refrigerator hauling in San Diego.",
    price: "One fridge from $69 curbside / $130 full-service.",
    examples: [
      "Kitchen refrigerators",
      "Upright and chest freezers",
      "Mini-fridges",
      "Broken units that still sit in the garage",
    ],
    image: "/images/job-appliances.jpg",
    imageAlt: "Household refrigerator ready for junk hauling",
    related: ["appliances", "apartment-cleanouts", "e-waste"],
    slogan: {
      title: "Reliable junk hauling",
      kicker: "Empty. Unplug. We take it.",
      copy: "Kitchen fridges, garage beer fridges, mini-fridges. Recycled, not dumped. Text a picture for a firm price.",
      src: "/images/job-carport.jpg",
      alt: "Household junk staged in a San Diego carport",
    },
  },
  {
    slug: "e-waste",
    name: "E-waste",
    haulingTitle: "E-waste hauling",
    kicker: "Recycled, not dumped",
    copy: "We haul e-waste such as TVs, computers, printers, and monitors for homeowners in {place}. Recycled, not dumped. Drives are not wiped. Customers get the lowest posted prices for e-waste hauling in {place}.",
    summary:
      "We haul e-waste such as TVs, computers, and printers for homeowners in San Diego. Our customers enjoy the lowest prices for e-waste hauling in San Diego.",
    details:
      "We haul e-waste such as TVs, monitors, printers, computers, and stereo gear for homeowners in San Diego. Recycled, not dumped. Drives are not wiped — pull them if that matters. No loose batteries. A TV is often one item. A mixed electronics pile is priced by the dump bed. Customers get the lowest posted prices for e-waste hauling in San Diego.",
    price:
      "A TV is often one item from $69. A mixed electronics pile is priced by how much of the dump bed it fills.",
    examples: [
      "TVs, CRT and flat",
      "Computers and monitors",
      "Printers and scanners",
      "Stereos and speakers",
      "Game consoles",
    ],
    image: "/images/job-ewaste.jpg",
    imageAlt: "TVs and computers staged for e-waste hauling in San Diego",
    related: ["tvs", "garage-cleanouts", "household-junk"],
    slogan: {
      title: "E-waste hauling in San Diego",
      kicker: "Recycled, not dumped",
      copy: "TVs, monitors, printers, computers. Recycled. Drives are not wiped. Text a picture for a firm price.",
      src: "/images/job-apartment-lot.jpg",
      alt: "Electronics and household junk staged for e-waste hauling in San Diego",
      flip: true,
    },
  },
  {
    slug: "tvs",
    name: "TVs",
    haulingTitle: "TV hauling",
    kicker: "Any size we can lift",
    copy: "We haul TVs — flat screens and old CRTs — for homeowners in {place}. Unplug it. We take it. Recycled as e-waste. Customers get the lowest posted prices for TV hauling in {place}.",
    summary:
      "We haul TVs — flat screens and old CRTs — for homeowners in San Diego. Our customers enjoy the lowest prices for TV hauling in San Diego.",
    details:
      "We haul TVs of any size we can lift for homeowners in San Diego. Unplug it. We take it. Recycled as e-waste. A TV at the curb is a one-item curbside job. Big sets from a second floor are full-service. We do not unmount from a wall — that is on you before we arrive. Customers get the lowest posted prices for TV hauling in San Diego.",
    price: "One TV from $69 curbside. Wall-mounted sets we have to pull are quoted from a photo.",
    examples: ["Flat-screen TVs", "CRT TVs", "TV stands if they go too"],
    image: "/images/job-ewaste.jpg",
    imageAlt: "Old TVs staged for pickup in San Diego",
    related: ["e-waste", "furniture", "apartment-cleanouts"],
    slogan: {
      title: "Reliable junk hauling",
      kicker: "Any size we can lift",
      copy: "Flat screens and old CRTs. Unplug it. We take it. Recycled as e-waste — not dumped in a landfill.",
      src: "/images/job-curbside-mixed.jpg",
      alt: "TVs and mixed household items staged at a San Diego curb",
      variant: "panel",
      flip: true,
    },
  },
  {
    slug: "garage-cleanouts",
    name: "Garage cleanouts",
    haulingTitle: "Garage cleanout hauling",
    kicker: "Priced by the dump bed",
    copy: "We haul garage piles — boxes, broken furniture, the extra fridge — for homeowners in {place}. Priced by how full the dump bed is. Customers use the calculator, then text a picture for the lowest posted garage-cleanout rate in {place}.",
    summary:
      "We haul garage piles for homeowners in San Diego — boxes, broken furniture, the extra fridge. Our customers enjoy the lowest prices for garage cleanouts in San Diego.",
    details:
      "We haul garage cleanouts for homeowners in San Diego. The stall that stopped being a parking spot. Mixed household junk, priced by how full the dump bed is. Use the truck load calculator, then text Fred a picture of the whole pile. You pull what you keep. Posted rates are household junk only. Customers come back for the lowest posted garage-cleanout prices in San Diego.",
    price:
      "A stall that fills about half the bed is often 5/10 — $299 curbside / $450 full-service.",
    examples: [
      "Boxes, bags, and broken furniture",
      "Old tools and holiday decor",
      "Bikes and sporting gear",
      "The fridge that moved to the garage",
    ],
    image: "/images/job-carport.jpg",
    imageAlt: "Household junk staged in a San Diego carport",
    related: ["household-junk", "furniture", "appliances"],
    slogan: {
      title: "Curbside junk hauling",
      kicker: "You stage it. We load.",
      copy: "Driveway, garage, carport, or alley. You do not need to be home. Typically 30% less than full-service.",
      src: "/images/job-driveway-sofas.jpg",
      alt: "Household furniture staged on a San Diego driveway for curbside pickup",
    },
  },
  {
    slug: "apartment-cleanouts",
    name: "Apartment cleanouts",
    haulingTitle: "Apartment cleanout hauling",
    kicker: "Move-out day, priced by the bed",
    copy: "We haul apartment cleanouts for renters and homeowners in {place} — furniture, mattresses, and the pile that did not fit the U-Haul. Customers enjoy the lowest posted prices for apartment hauling in {place}.",
    summary:
      "We haul apartment cleanouts for renters and homeowners in San Diego — furniture, mattresses, and the pile that did not fit the U-Haul. Our customers enjoy the lowest prices for apartment hauling in San Diego.",
    details:
      "We haul apartment and condo cleanouts for San Diego renters and homeowners. Furniture that failed Craigslist, mattresses, kitchen piles, and the storage cage. Loading docks count as curbside if we can drive to them. If we carry from the unit, that is full-service. Lease-end weeks fill the route — morning texts get same-day more often. Customers get the lowest posted prices for apartment cleanouts in San Diego.",
    price:
      "A 1-bedroom cleanout is often 8/10 — $479 curbside / $720 full-service. Smaller piles use the calculator.",
    examples: [
      "Furniture that failed Craigslist",
      "Mattresses and box springs",
      "Kitchen piles",
      "The stuff in the storage cage",
    ],
    image: "/images/job-apartment-lot.jpg",
    imageAlt: "Apartment furniture pile in a San Diego parking lot",
    related: ["furniture", "mattresses", "household-junk"],
    slogan: {
      title: "Low cost junk hauling",
      kicker: "Pay for the space you use",
      copy: "Move-out piles priced by the dump bed. 1/10 truck from $69. A packed bed is $599 curbside. Household junk only.",
      src: "/images/job-sectional.jpg",
      alt: "Sectional sofa staged for a low-cost apartment haul in San Diego",
      variant: "panel",
      flip: true,
    },
  },
  {
    slug: "gym-equipment",
    name: "Gym equipment",
    haulingTitle: "Gym equipment hauling",
    kicker: "Heavy and awkward is fine",
    copy: "We haul gym equipment such as treadmills, ellipticals, weight benches, and racks for homeowners in {place}. Heavy and awkward is fine. Customers get the lowest posted prices for gym-equipment hauling in {place}.",
    summary:
      "We haul gym equipment such as treadmills and ellipticals for homeowners in San Diego. Our customers enjoy the lowest prices for gym-equipment hauling in San Diego.",
    details:
      "We haul gym equipment such as treadmills, ellipticals, weight benches, and home-gym racks for homeowners in San Diego. Heavy and awkward is fine. A photo of the machine and whether it is upstairs tells Fred if it is a one-item job or a two-person carry. Disassemble what you can if it is bolted in. Customers get the lowest posted prices for gym-equipment hauling in San Diego.",
    price:
      "A treadmill at the curb is often $69–$119. Upstairs machines are full-service.",
    examples: [
      "Treadmills and ellipticals",
      "Weight benches and dumbbells",
      "Exercise bikes",
      "Home-gym racks",
    ],
    image: "/images/job-full-service.jpg",
    imageAlt: "Crew carrying bulky household items to the dump truck",
    related: ["garage-cleanouts", "furniture", "household-junk"],
    slogan: {
      title: "Full-service junk hauling",
      kicker: "You point. We carry it out.",
      copy: "Treadmills, ellipticals, and racks. Inside, upstairs, garage. Labor is in the posted full-service rate.",
      src: "/images/job-carport.jpg",
      alt: "Bulky household items ready for full-service hauling in San Diego",
      variant: "panel",
    },
  },
  {
    slug: "patio-and-outdoor",
    name: "Patio & outdoor",
    haulingTitle: "Outdoor hauling",
    kicker: "Grills and patio sets",
    copy: "We haul patio and outdoor items such as BBQ grills, patio tables, and lounge chairs for homeowners in {place}. Propane tanks stay with you. Customers get the lowest posted prices for outdoor hauling in {place}.",
    summary:
      "We haul patio furniture and BBQ grills for homeowners in San Diego. Our customers enjoy the lowest prices for outdoor hauling in San Diego.",
    details:
      "We haul patio and outdoor items such as BBQ grills, patio tables, lounge chairs, and broken umbrellas for homeowners in San Diego. Propane tanks stay with you. Yard waste, dirt, and construction debris are not on posted rates — those get a custom quote from a photo. Empty the grill. Customers get the lowest posted prices for outdoor hauling in San Diego.",
    price:
      "A patio set at the curb is often 1/10–3/10. Mixed backyard piles are quoted from photos.",
    examples: [
      "BBQ grills, tank removed",
      "Patio tables and chairs",
      "Lounge chairs",
      "Broken umbrellas and stands",
    ],
    image: "/images/job-curbside-mixed.jpg",
    imageAlt: "Mixed household items staged at a San Diego curb",
    related: ["furniture", "household-junk", "garage-cleanouts"],
    slogan: {
      title: "Curbside junk hauling",
      kicker: "You stage it. We load.",
      copy: "Grills, patio sets, lounge chairs. Propane tanks stay with you. Stage it at the driveway and we load.",
      src: "/images/job-mattress.jpg",
      alt: "Household items staged at a San Diego curb for pickup",
      flip: true,
    },
  },
  {
    slug: "household-junk",
    name: "Household junk",
    haulingTitle: "Junk hauling",
    kicker: "The mixed pile",
    copy: "We haul full truck loads of household junk for homeowners in {place} — apartment and house cleanouts, mixed piles, the stuff that did not fit the U-Haul. Pay only for the space you use. Lowest posted truck-load rates in {place}.",
    summary:
      "We haul mixed household junk — bags, boxes, and broken chairs — for homeowners in San Diego. Our customers enjoy the lowest prices for junk hauling in San Diego.",
    details:
      "We haul mixed household junk for homeowners in San Diego: bags, boxes, broken chairs, and the pile that is not one clean category. Priced by the dump bed. Slide the calculator to the fill that matches, then text a picture so Fred can confirm. Posted prices are household junk only — not construction debris or yard waste. Customers get the lowest posted truck-load rates in San Diego, from $69 for a small pile to $599 for a packed curbside truck.",
    price: "From $69 for a small pile to $599 for a packed curbside truck.",
    examples: [
      "Bags and boxes",
      "Broken household furniture",
      "Toys, clothes, and clutter",
      "The mixed garage stall",
    ],
    image: "/images/job-curbside-mixed.jpg",
    imageAlt: "Mixed household junk staged at a San Diego curb",
    related: ["garage-cleanouts", "furniture", "apartment-cleanouts"],
    slogan: {
      title: "Cheap junk hauling",
      kicker: "From $69",
      copy: "Mixed piles, bags, boxes, broken chairs. Pay for the space you use. Posted household rates from $69 to $599.",
      src: "/images/job-full-service.jpg",
      alt: "Crew loading mixed household junk into the dump truck",
      variant: "panel",
    },
  },
];

const bySlug = new Map(HAUL_ITEMS.map((item) => [item.slug, item]));

export function getItem(slug: string): HaulItem | undefined {
  return bySlug.get(slug);
}

export const DONT_HAUL = [
  "Paint, fuels, and chemicals",
  "Loose batteries",
  "Asbestos and medical waste",
  "Propane tanks",
  "Construction debris on posted rates",
  "Yard waste on posted rates",
];
