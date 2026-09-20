import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { AREA_REGIONS, areasInRegion } from "@/lib/areas";
import { PRICE_EXCLUSION } from "@/lib/pricing";

export const Route = createFileRoute("/areas/")({
  head: () => ({
    meta: [
      {
        title: "San Diego Junk Removal Service Areas | Neighborhood Hauling",
      },
      {
        name: "description",
        content:
          "Junk removal and hauling across San Diego County — from Chula Vista and Coronado through Pacific Beach, La Jolla, and East County. Text Fred a picture for pricing.",
      },
    ],
  }),
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <SiteShell>
      <PageHero
        kicker="Service areas"
        title="San Diego Junk Removal & Hauling - Affordable and reliable junk hauling service"
        lede="Same posted household rates from San Ysidro to Encinitas. No hidden travel charge. Text a picture from your driveway."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Areas" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="max-w-2xl text-base leading-relaxed text-taupe">
            We haul household junk — furniture, mattresses, appliances, and mixed
            piles. {PRICE_EXCLUSION}
          </p>

          <div className="mt-12 space-y-12">
            {AREA_REGIONS.map((region) => (
              <div key={region}>
                <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
                  {region}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {areasInRegion(region).map((area) => (
                    <li key={area.slug}>
                      <Link
                        to="/areas/$slug"
                        params={{ slug: area.slug }}
                        className="block min-h-14 rounded-xl bg-cream px-5 py-4 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
                      >
                        <span className="font-display text-xl font-bold tracking-wide uppercase">
                          {area.name}
                        </span>
                        <span className="mt-1 block text-sm text-taupe">
                          {area.headline}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
