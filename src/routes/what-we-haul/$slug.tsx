import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PromoGraphic } from "@/components/promo-graphic";
import { SiteShell } from "@/components/site-shell";
import { AREA_REGIONS, areasInRegion } from "@/lib/areas";
import { getItem } from "@/lib/items";
import { PRICE_EXCLUSION } from "@/lib/pricing";

export const Route = createFileRoute("/what-we-haul/$slug")({
  loader: ({ params }) => {
    const item = getItem(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        {
          title: `${loaderData.item.haulingTitle} in San Diego | Junk Removal`,
        },
        {
          name: "description",
          content: `${loaderData.item.summary} ${loaderData.item.price}`,
        },
      ],
    };
  },
  component: ItemPage,
});

function ItemPage() {
  const { item } = Route.useLoaderData();

  return (
    <SiteShell>
      <PageHero
        kicker={item.kicker}
        title={`${item.haulingTitle} in San Diego`}
        lede={item.summary}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "What we haul", to: "/what-we-haul" },
          { label: item.haulingTitle },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <img
              src={item.image}
              alt={item.imageAlt}
              className="aspect-[3/2] w-full rounded-xl object-cover"
            />
            <h2 className="mt-8 font-display text-3xl font-bold tracking-wide text-ink uppercase">
              How it works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-taupe">{item.details}</p>
            <p className="mt-4 text-base leading-relaxed text-taupe">{item.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-taupe">{PRICE_EXCLUSION}</p>
          </div>
          <aside>
            <div className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] sm:p-8">
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
                Typical loads
              </p>
              <ul className="mt-4 space-y-2 text-sm text-taupe">
                {item.examples.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            {item.related.length > 0 ? (
              <div className="mt-6">
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-taupe uppercase">
                  Related
                </p>
                <ul className="mt-3 space-y-2">
                  {item.related.map((slug) => {
                    const related = getItem(slug);
                    if (!related) return null;
                    return (
                      <li key={slug}>
                        <Link
                          to="/what-we-haul/$slug"
                          params={{ slug }}
                          className="text-sm font-medium text-ink hover:text-rust"
                        >
                          {related.haulingTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <PromoGraphic
        src={item.slogan.src}
        alt={item.slogan.alt}
        kicker={item.slogan.kicker}
        title={item.slogan.title}
        copy={item.slogan.copy}
        variant={item.slogan.variant}
        flip={item.slogan.flip}
      />

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
            {item.haulingTitle} across San Diego
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {AREA_REGIONS.flatMap((region) => areasInRegion(region).slice(0, 3)).map(
              (area) => (
                <li key={area.slug}>
                  <Link
                    to="/areas/$slug"
                    params={{ slug: area.slug }}
                    className="inline-flex min-h-11 items-center rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink-soft shadow-[var(--shadow-border)] hover:text-rust"
                  >
                    {area.name}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                to="/areas"
                className="inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium text-taupe hover:text-rust"
              >
                All areas
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
