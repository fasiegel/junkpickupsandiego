export type PriceQuote = {
  slug: string;
  note: string;
  low: number;
  high: number;
};

export type PriceGroup = {
  id: string;
  title: string;
  detail: string;
  quotes: PriceQuote[];
};

export const ITEM_PRICES: PriceGroup[] = [
  {
    id: "starting",
    title: "Single item or minimum",
    detail: "The lowest household price each company prints. A minimum is not the bill for a large pile.",
    quotes: [
      { slug: "american-haul-away", note: "Full-service starts at", low: 65, high: 65 },
      { slug: "freds-junk-removal", note: "One item, curbside to full-service", low: 69, high: 130 },
      { slug: "severin-hauling", note: "Small items from", low: 69, high: 69 },
      { slug: "haul-out", note: "Curbside single item", low: 79, high: 99 },
      { slug: "fetch-junk", note: "Small pile from", low: 89, high: 89 },
      { slug: "the-junk-transporter", note: "Minimum load from", low: 90, high: 90 },
      { slug: "the-junkiez", note: "Full-service starts at", low: 99, high: 99 },
      { slug: "rancho-removal", note: "Small curbside from", low: 99, high: 99 },
      { slug: "pick-ur-junk", note: "Minimum", low: 100, high: 100 },
      { slug: "junkmd", note: "Minimum", low: 119, high: 119 },
      { slug: "dmd-junk-removal", note: "Single item", low: 125, high: 125 },
      { slug: "ruiz-junk-removal", note: "Small pickup from", low: 125, high: 125 },
      { slug: "dan-the-man-haul-away", note: "Junk and debris from", low: 125, high: 125 },
      { slug: "flash-junk-removal", note: "Minimum", low: 160, high: 160 },
      { slug: "crisan-junk-removal", note: "Household minimum", low: 177, high: 177 },
      { slug: "impact-environmental", note: "Minimum pickup", low: 189, high: 189 },
    ],
  },
  {
    id: "couch",
    title: "Couch",
    detail: "Posted couch or sofa prices. Severin groups a couch with a standard appliance.",
    quotes: [
      { slug: "freds-junk-removal", note: "One sofa, curbside to full-service", low: 69, high: 130 },
      { slug: "priority-hauling", note: "Standard couch from", low: 89, high: 89 },
      { slug: "severin-hauling", note: "Couch or appliance from", low: 100, high: 100 },
      { slug: "fetch-junk", note: "Small sofa from", low: 119, high: 119 },
      { slug: "top-tier-junk-removal", note: "Owner said a couch is typically", low: 99, high: 140 },
    ],
  },
  {
    id: "mattress",
    title: "Mattress",
    detail: "Posted mattress prices. Sizes are not the same: Priority’s figure is a king.",
    quotes: [
      { slug: "freds-junk-removal", note: "One mattress, curbside to full-service", low: 69, high: 130 },
      { slug: "the-junk-transporter", note: "Mattress from", low: 99, high: 99 },
      { slug: "fetch-junk", note: "Small mattress $99, large mattress $109", low: 99, high: 109 },
      { slug: "priority-hauling", note: "King mattress", low: 150, high: 150 },
    ],
  },
  {
    id: "fridge",
    title: "Refrigerator or appliance",
    detail: "Posted fridge and appliance prices. A wide appliance range that is not one fridge is left out.",
    quotes: [
      { slug: "freds-junk-removal", note: "One fridge, curbside to full-service", low: 69, high: 130 },
      { slug: "priority-hauling", note: "Fridge, freezer, or washer from", low: 89, high: 89 },
      { slug: "severin-hauling", note: "Couch or appliance from", low: 100, high: 100 },
      { slug: "fetch-junk", note: "Refrigerator", low: 99, high: 139 },
    ],
  },
  {
    id: "hot-tub",
    title: "Hot tub",
    detail: "Posted spa and hot tub prices. Demo Diego’s range is wide, so its midpoint sits higher.",
    quotes: [
      { slug: "the-junk-transporter", note: "Spa removal. One line says from $299", low: 299, high: 350 },
      { slug: "fetch-junk", note: "Hot tub from", low: 389, high: 389 },
      { slug: "priority-hauling", note: "Hot tub from", low: 400, high: 400 },
      { slug: "demo-diego", note: "Hot tubs", low: 350, high: 800 },
    ],
  },
];

export const LOAD_PRICES: PriceGroup[] = [
  {
    id: "quarter",
    title: "Quarter truck",
    detail: "About a quarter of the truck or trailer the company describes.",
    quotes: [
      { slug: "pick-ur-junk", note: "Quarter load", low: 120, high: 180 },
      { slug: "dmd-junk-removal", note: "Quarter trailer", low: 150, high: 175 },
      { slug: "flash-junk-removal", note: "Quarter load, same as their minimum", low: 160, high: 160 },
      { slug: "fetch-junk", note: "Quarter load", low: 189, high: 189 },
      { slug: "the-junk-transporter", note: "Quarter dump truck", low: 220, high: 220 },
      { slug: "severin-hauling", note: "1/4 load", low: 249, high: 249 },
      { slug: "monarch-junk-removal", note: "Quarter truck", low: 200, high: 300 },
      { slug: "junkmd", note: "1/4 truck", low: 362, high: 362 },
      { slug: "crisan-junk-removal", note: "1/4 load", low: 367, high: 367 },
    ],
  },
  {
    id: "half",
    title: "Half truck",
    detail: "About half the truck. Rancho’s page adds a plus after the top of the range.",
    quotes: [
      { slug: "freds-junk-removal", note: "Half of a 20-yard truck, curbside to full-service", low: 299, high: 450 },
      { slug: "pick-ur-junk", note: "Half load", low: 200, high: 280 },
      { slug: "fetch-junk", note: "Half load", low: 349, high: 349 },
      { slug: "severin-hauling", note: "1/2 load", low: 349, high: 349 },
      { slug: "the-junk-transporter", note: "Half dump truck", low: 350, high: 350 },
      { slug: "dmd-junk-removal", note: "Half trailer", low: 350, high: 375 },
      { slug: "monarch-junk-removal", note: "Half truck", low: 350, high: 450 },
      { slug: "rancho-removal", note: "Half load, listed as $350–$450+", low: 350, high: 450 },
      { slug: "crisan-junk-removal", note: "1/2 load", low: 537, high: 537 },
      { slug: "junkmd", note: "1/2 truck", low: 579, high: 579 },
    ],
  },
  {
    id: "three-quarter",
    title: "Three-quarter truck",
    detail: "Fewer companies print this size.",
    quotes: [
      { slug: "severin-hauling", note: "3/4 load", low: 429, high: 429 },
      { slug: "dmd-junk-removal", note: "Three-quarter trailer", low: 500, high: 525 },
      { slug: "monarch-junk-removal", note: "Three-quarter truck", low: 500, high: 600 },
      { slug: "crisan-junk-removal", note: "3/4 load", low: 707, high: 707 },
    ],
  },
  {
    id: "full",
    title: "Full truck",
    detail: "A full truck or trailer of household junk. Trucks are not the same size. Rancho’s page adds a plus after the top of the range.",
    quotes: [
      { slug: "freds-junk-removal", note: "Full 20-yard truck, curbside to full-service", low: 599, high: 899 },
      { slug: "pick-ur-junk", note: "Full haul", low: 450, high: 500 },
      { slug: "severin-hauling", note: "Full 12-cubic-yard load", low: 495, high: 495 },
      { slug: "the-junk-transporter", note: "Full dump truck", low: 550, high: 550 },
      { slug: "rancho-removal", note: "Full load, listed as $499–$699+", low: 499, high: 699 },
      { slug: "fetch-junk", note: "Full load", low: 649, high: 649 },
      { slug: "dmd-junk-removal", note: "Full trailer", low: 700, high: 750 },
      { slug: "monarch-junk-removal", note: "Full truck", low: 650, high: 800 },
      { slug: "demo-diego", note: "Full load", low: 650, high: 900 },
      { slug: "crisan-junk-removal", note: "Full load", low: 827, high: 827 },
      { slug: "junkmd", note: "Full truck", low: 899, high: 899 },
      { slug: "impact-environmental", note: "Full truck of household items", low: 949, high: 949 },
    ],
  },
];

export const YARD_PRICES: PriceGroup[] = [
  {
    id: "per-yard",
    title: "Per cubic yard",
    detail: "Full-load price divided by the cubic yards the company states for that truck. A bed measured in feet is length times width times height, divided by 27.",
    quotes: [
      { slug: "the-junk-transporter", note: "16 by 8 by 4 foot dump bed, full load $550", low: (550 * 27) / (16 * 8 * 4), high: (550 * 27) / (16 * 8 * 4) },
      { slug: "freds-junk-removal", note: "Full 20-cubic-yard truck, curbside to full-service", low: 599 / 20, high: 899 / 20 },
      { slug: "dan-the-man-haul-away", note: "Full truck, about 15 cubic yards, $450–$550", low: 450 / 15, high: 550 / 15 },
      { slug: "severin-hauling", note: "Full 12-cubic-yard load, $495", low: 495 / 12, high: 495 / 12 },
      { slug: "impact-environmental", note: "14 by 8 by 5 foot bed, full household load $949", low: (949 * 27) / (14 * 8 * 5), high: (949 * 27) / (14 * 8 * 5) },
      { slug: "junkmd", note: "Full truck, about 15 cubic yards, $899", low: 899 / 15, high: 899 / 15 },
    ],
  },
];

export function quoteMid(quote: PriceQuote): number {
  return (quote.low + quote.high) / 2;
}

export function summarize(quotes: PriceQuote[]) {
  const mids = quotes.map(quoteMid);
  const avg = Math.round(mids.reduce((sum, n) => sum + n, 0) / mids.length);
  const low = Math.min(...quotes.map((quote) => quote.low));
  const high = Math.max(...quotes.map((quote) => quote.high));
  return { avg, low, high, count: quotes.length };
}

export function money(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

export function moneyRange(low: number, high: number): string {
  if (low === high) return money(low);
  return `${money(low)}–${money(high)}`;
}
