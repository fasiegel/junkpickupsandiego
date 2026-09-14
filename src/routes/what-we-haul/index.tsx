import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { DONT_HAUL, HAUL_ITEMS } from "@/lib/items";
import { PRICE_EXCLUSION } from "@/lib/pricing";

export const Route = createFileRoute("/what-we-haul/")({
  head: () => ({
    meta: [
      {
        title: "Items We Haul in San Diego | Furniture, Mattresses, Appliances",
      },
      {
        name: "description",
        content:
          "Household junk we haul in San Diego: furniture, mattresses, appliances, e-waste, garage cleanouts, and mixed piles. Posted prices from $69. Construction debris and yard waste are quoted from a photo.",
      },
    ],
  }),
  component: ItemsIndex,
});

function ItemsIndex() {
  return (
    <SiteShell>
      <PageHero
        kicker="What we haul"
        title="Household junk. Posted prices. Photo quote."
        lede="Furniture, mattresses, appliances, e-waste, and mixed piles. Curbside if you stage it. Full-service if we carry it out."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "What we haul" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="max-w-2xl text-base leading-relaxed text-taupe">
            {PRICE_EXCLUSION} Hazardous material stays with you.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HAUL_ITEMS.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/what-we-haul/$slug"
                  params={{ slug: item.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <p className="font-display text-xs font-semibold tracking-[0.16em] text-rust uppercase">
                      {item.kicker}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-wide uppercase">
                      {item.haulingTitle}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-taupe">
                      {item.summary}
                    </p>
                    <span className="mt-4 text-sm font-medium text-ink group-hover:text-rust">
                      {item.haulingTitle} in San Diego
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
            What we do not haul on posted rates
          </h2>
          <ul className="mt-6 space-y-2 text-base text-taupe">
            {DONT_HAUL.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-taupe">
            Construction debris and yard waste still get a custom quote — text a
            photo. If a picture shows something we cannot take, we say so before
            the truck rolls.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
