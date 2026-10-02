import { FACTS } from "@/lib/directory/facts";
import { ITEM_PRICES, LOAD_PRICES, YARD_PRICES, moneyRange } from "@/lib/directory/prices";
import type { Company } from "@/lib/directory/companies";

export type DirectoryMode = "default" | "google" | "yelp" | "item" | "truck" | "yard" | "published" | "years" | "north";

export const DIRECTORY_MODES: { id: Exclude<DirectoryMode, "default">; label: string; hint: string }[] = [
  { id: "google", label: "Google reviews", hint: "Highest Google rating first. Most reviews break a tie." },
  { id: "yelp", label: "Yelp reviews", hint: "Highest Yelp rating first. Most reviews break a tie." },
  { id: "item", label: "Single item price", hint: "Lowest published single-item or minimum price first." },
  { id: "truck", label: "Full truck price", hint: "Lowest published full-truck price first." },
  { id: "yard", label: "Price per cubic yard", hint: "Lowest price per cubic yard first. Only trucks with a stated size." },
  { id: "published", label: "Published prices", hint: "Only companies that publish prices." },
  { id: "years", label: "Years in business", hint: "Longest published history first." },
  { id: "north", label: "North County", hint: "Companies that list North County." },
];

const WORD_YEARS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

function factsFor(slug: string) {
  return FACTS[slug];
}

function leadingCount(value: string | null | undefined): number | null {
  const match = value?.match(/(\d[\d,]*)/);
  if (!match) return null;
  return Number(match[1].replace(/,/g, ""));
}

function yardQuote(slug: string) {
  return YARD_PRICES.find((group) => group.id === "per-yard")?.quotes.find((item) => item.slug === slug) ?? null;
}

function priceLow(groups: { id: string; quotes: { slug: string; low: number }[] }[], groupId: string, slug: string): number | null {
  const quote = groups.find((group) => group.id === groupId)?.quotes.find((item) => item.slug === slug);
  return quote ? quote.low : null;
}

export function yearsInBusiness(text: string | null | undefined): number | null {
  if (!text) return null;
  const digits = text.match(/(\d+)\+?\s*years/i);
  if (digits) return Number(digits[1]);
  const words = text.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\s+years/i);
  if (words) return WORD_YEARS[words[1].toLowerCase()] ?? null;
  if (/decade/i.test(text)) return 10;
  const dated = text.match(
    /(?:since|founded|established|est\.?|start(?:ed)?|filing|opened)\D{0,48}((?:19|20)\d{2})/i,
  );
  const year = dated?.[1] ?? text.match(/\b((?:19|20)\d{2})\b/)?.[1];
  if (!year) return null;
  const founded = Number(year);
  const now = new Date().getFullYear();
  if (founded < 1970 || founded > now) return null;
  return now - founded;
}

function googleScore(slug: string): number | null {
  const facts = factsFor(slug);
  const rating = facts?.googleRating ? Number(facts.googleRating) : null;
  const count = leadingCount(facts?.googleReviews);
  if ((rating === null || Number.isNaN(rating)) && count === null) return null;
  return (rating !== null && !Number.isNaN(rating) ? rating : 0) * 1_000_000 + (count ?? 0);
}

function yelpScore(slug: string): number | null {
  const text = factsFor(slug)?.yelpReviews;
  if (!text) return null;
  const count = leadingCount(text);
  const rating = Number(text.match(/\((\d+(?:\.\d+)?)/)?.[1]);
  if ((Number.isNaN(rating) || !text.includes("(")) && count === null) return null;
  return (Number.isNaN(rating) ? 0 : rating) * 1_000_000 + (count ?? 0);
}

function scoreFor(slug: string, mode: DirectoryMode): number | null {
  if (mode === "google") return googleScore(slug);
  if (mode === "yelp") return yelpScore(slug);
  if (mode === "item") return priceLow(ITEM_PRICES, "starting", slug);
  if (mode === "truck") return priceLow(LOAD_PRICES, "full", slug);
  if (mode === "yard") return yardQuote(slug)?.low ?? null;
  if (mode === "published") return factsFor(slug)?.publishedPrices.startsWith("Yes") ? 1 : null;
  if (mode === "years") return yearsInBusiness(factsFor(slug)?.years);
  return null;
}

export function directoryNote(company: Company, mode: DirectoryMode): string | null {
  if (mode === "default" || mode === "north" || scoreFor(company.slug, mode) === null) return null;
  const facts = factsFor(company.slug);
  if (mode === "google") {
    const count = leadingCount(facts?.googleReviews);
    const rating = facts?.googleRating;
    return [rating, count !== null ? `${count.toLocaleString("en-US")} Google reviews` : "Google rating"]
      .filter(Boolean)
      .join(" · ");
  }
  if (mode === "yelp") {
    const text = facts?.yelpReviews ?? "";
    const count = leadingCount(text);
    const rating = text.match(/\((\d+(?:\.\d+)?)/)?.[1];
    return [rating, count !== null ? `${count.toLocaleString("en-US")} Yelp reviews` : "Yelp rating"]
      .filter(Boolean)
      .join(" · ");
  }
  if (mode === "item") {
    const price = priceLow(ITEM_PRICES, "starting", company.slug);
    return price === null ? null : `Single item from $${price}`;
  }
  if (mode === "truck") {
    const price = priceLow(LOAD_PRICES, "full", company.slug);
    return price === null ? null : `Full truck from $${price}`;
  }
  if (mode === "yard") {
    const quote = yardQuote(company.slug);
    return quote ? `Per cubic yard ${moneyRange(quote.low, quote.high)}` : null;
  }
  if (mode === "published") return "Published prices";
  const years = yearsInBusiness(facts?.years);
  return years === null ? null : `${years} years`;
}

export function orderCompanies(companies: Company[], mode: DirectoryMode): Company[] {
  if (mode === "default") return companies;
  if (mode === "north") return companies.filter((company) => company.needs.includes("north-county"));
  return companies
    .filter((company) => scoreFor(company.slug, mode) !== null)
    .sort((a, b) => {
      const left = scoreFor(a.slug, mode) ?? 0;
      const right = scoreFor(b.slug, mode) ?? 0;
      const diff = mode === "item" || mode === "truck" || mode === "yard" ? left - right : right - left;
      if (diff !== 0) return diff;
      return a.name.localeCompare(b.name);
    });
}
