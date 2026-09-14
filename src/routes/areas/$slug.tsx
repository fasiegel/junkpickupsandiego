import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { getArea, nearbyAreas } from "@/lib/areas";
import { HAUL_ITEMS, withPlace } from "@/lib/items";
import { PRICE_EXCLUSION } from "@/lib/pricing";
import { PARENT_NAME } from "@/lib/contact";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        {
          title: `${loaderData.area.name} Junk Removal and Hauling | San Diego`,
        },
        {
          name: "description",
          content: `${loaderData.area.headline} Text Fred a picture for a firm price. Posted household rates from $69.`,
        },
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const nearby = nearbyAreas(area);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} junk removal and hauling`,
    provider: {
      "@type": "MovingCompany",
      name: "San Diego Junk Removal and Hauling",
      parentOrganization: PARENT_NAME,
    },
    areaServed: `${area.name}, San Diego County, CA`,
    description: area.blurb,
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        kicker={`${area.region} · ${area.name}`}
        title={`${area.name} junk removal and hauling`}
        lede={area.headline}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Areas", to: "/areas" },
          { label: area.name },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
              How we haul in {area.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-taupe">{area.blurb}</p>
            <p className="mt-4 text-base leading-relaxed text-taupe">{area.jobs}</p>
            <p className="mt-4 text-base leading-relaxed text-taupe">{area.access}</p>
            <p className="mt-4 text-sm leading-relaxed text-taupe">{PRICE_EXCLUSION}</p>
          </div>
          <aside className="h-fit rounded-xl bg-ink p-6 text-cream sm:p-8">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-fill uppercase">
              Posted curbside
            </p>
            <p className="mt-3 font-display text-5xl font-bold tracking-wide">From $69</p>
            <p className="mt-2 text-sm text-line">
              One item or a small pile. Packed truck $599 curbside / $899 full-service.
              Labor, haul, and dump included.
            </p>
            <Link
              to="/"
              hash="calculator"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-cream underline decoration-rust underline-offset-4 hover:text-fill"
            >
              Open the truck load calculator
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase sm:text-4xl">
            What we haul in {area.name}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe">
            Same posted household rates. Curbside if you stage it. Full-service
            if we carry it out. {PRICE_EXCLUSION}
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HAUL_ITEMS.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/what-we-haul/$slug"
                  params={{ slug: item.slug }}
                  className="block h-full rounded-xl bg-sand p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <h3 className="font-display text-xl font-bold tracking-wide uppercase">
                    {item.haulingTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">
                    {withPlace(item.copy, area.name)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
              Nearby
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {nearby.map((place) => (
                <li key={place.slug}>
                  <Link
                    to="/areas/$slug"
                    params={{ slug: place.slug }}
                    className="inline-flex min-h-11 items-center rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink-soft shadow-[var(--shadow-border)] hover:text-rust"
                  >
                    {place.name}
                  </Link>
                </li>
              ))}
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
      ) : null}
    </SiteShell>
  );
}
