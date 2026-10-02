import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { COMPANIES } from "@/lib/directory/companies";
import {
  ITEM_PRICES,
  LOAD_PRICES,
  money,
  moneyRange,
  summarize,
  type PriceGroup,
  type PriceQuote,
} from "@/lib/directory/prices";

const NAMES = new Map(COMPANIES.map((company) => [company.slug, company.name]));

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Average Junk Removal Prices in San Diego" },
      {
        name: "description",
        content:
          "Average San Diego junk removal prices from the numbers local haulers print: single items, couches, mattresses, appliances, hot tubs, and quarter, half, and full truck loads.",
      },
    ],
  }),
  component: PricesPage,
});

function PricesPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Prices"
        title="Average junk removal prices."
        lede="Averages of the household prices already printed by haulers in this directory. A company with no price on its site is not included. This is not a quote."
        crumbs={[{ label: "Home", to: "/" }, { label: "Prices" }]}
        actions={false}
      />
      <section className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
          <p className="max-w-3xl text-sm leading-relaxed text-taupe">
            Each company’s number is the price they print, or the middle of the range they print.
            The average is those middles, rounded to the dollar. Stairs, weight, concrete, and yard
            waste can cost more. Most haulers in this guide do not publish prices.
          </p>
          <ItemAverages groups={ITEM_PRICES} />
          <PriceTable title="Truck loads" groups={LOAD_PRICES} />
          <div>
            <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
              Where the numbers come from
            </h2>
            <div className="mt-6 space-y-8">
              {LOAD_PRICES.map((group) => (
                <QuoteList key={group.id} group={group} />
              ))}
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-taupe">
            Fred’s rows run from the curbside price to the full-service price. The average uses the middle of that range. A quarter or three-quarter truck is not listed for Fred’s because those sizes are not on the posted chart.{" "}
            <Link to="/" hash="calculator" className="font-medium text-rust">
              Open the truck load calculator
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

function ItemAverages({ groups }: { groups: PriceGroup[] }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
        Individual items
      </h2>
      <div className="mt-6 space-y-8">
        {groups.map((group) => {
          const summary = summarize(group.quotes);
          return (
            <div key={group.id}>
              <h3 className="text-sm font-medium text-ink">
                {group.title} Average price {money(summary.avg)} from {summary.count} published prices.
              </h3>
              <ul className="mt-3 divide-y divide-line rounded-xl bg-cream">
                {group.quotes.map((quote) => (
                  <li
                    key={`${group.id}-${quote.slug}`}
                    className="grid gap-1 px-4 py-3 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-4"
                  >
                    <CompanyLink quote={quote} />
                    <p className="text-sm text-ink-soft">{moneyRange(quote.low, quote.high)}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PriceTable({ title, groups }: { title: string; groups: PriceGroup[] }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-xl bg-cream">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs tracking-wide text-ink uppercase">
              <th className="px-4 py-3 font-semibold">What</th>
              <th className="px-4 py-3 font-semibold">Average</th>
              <th className="px-4 py-3 font-semibold">Lowest to highest posted</th>
              <th className="px-4 py-3 font-semibold">Companies</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              const summary = summarize(group.quotes);
              return (
                <tr key={group.id} className="border-b border-line last:border-0">
                  <th className="px-4 py-3 text-left font-medium text-ink">{group.title}</th>
                  <td className="px-4 py-3 font-semibold text-ink">{money(summary.avg)}</td>
                  <td className="px-4 py-3 text-ink-soft">{moneyRange(summary.low, summary.high)}</td>
                  <td className="px-4 py-3 text-ink-soft">{summary.count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function QuoteList({ group }: { group: PriceGroup }) {
  const summary = summarize(group.quotes);
  return (
    <div>
      <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">{group.title}</h3>
      <p className="mt-1 text-sm text-taupe">
        {group.detail} Average {money(summary.avg)} from {summary.count} published prices.
      </p>
      <ul className="mt-3 divide-y divide-line rounded-xl bg-cream">
        {group.quotes.map((quote) => (
          <li key={`${group.id}-${quote.slug}-${quote.note}`} className="grid gap-1 px-4 py-3 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-4">
            <CompanyLink quote={quote} />
            <p className="text-sm text-ink-soft">
              {quote.note} {moneyRange(quote.low, quote.high)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyLink({ quote }: { quote: PriceQuote }) {
  const name = NAMES.get(quote.slug) ?? quote.slug;
  return (
    <Link
      to="/haulers/$slug"
      params={{ slug: quote.slug }}
      className="text-sm font-medium text-rust hover:underline"
    >
      {name}
    </Link>
  );
}
