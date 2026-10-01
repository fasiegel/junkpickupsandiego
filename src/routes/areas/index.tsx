import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { REGIONS, findCommunities } from "@/lib/directory/communities";
import { companiesForCommunity } from "@/lib/directory/companies";

export const Route = createFileRoute("/areas/")({
  head: () => ({
    meta: [
      { title: "San Diego Junk Removal by ZIP | Service Areas" },
      {
        name: "description",
        content:
          "ZIP codes and named communities in San Diego County, with the junk removal companies that say they serve each one.",
      },
    ],
  }),
  component: AreasIndex,
});

function AreasIndex() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => findCommunities(query), [query]);
  return (
    <SiteShell>
      <PageHero
        kicker="Service areas"
        title="ZIP codes and communities."
        lede="Search a neighborhood or a ZIP. Each page lists the haulers whose sites say they cover that place."
        crumbs={[{ label: "Home", to: "/" }, { label: "Service areas" }]}
      />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <label className="block max-w-md">
            <span className="text-sm font-medium text-ink">Search a name or ZIP</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="92109 or Pacific Beach"
              className="mt-2 h-12 w-full rounded-lg border border-line bg-paper px-4 text-ink outline-none focus:border-rust"
            />
          </label>
          {REGIONS.map((region) => {
            const items = matches.filter((c) => c.region === region);
            if (items.length === 0) return null;
            return (
              <div key={region} className="mt-10">
                <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
                  {region}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((area) => (
                    <li key={area.slug}>
                      <Link
                        to="/areas/$slug"
                        params={{ slug: area.slug }}
                        className="flex items-center justify-between rounded-xl bg-paper px-4 py-3 shadow-[var(--shadow-border)] hover:text-rust"
                      >
                        <span>
                          <span className="block font-medium">{area.name}</span>
                          <span className="text-sm text-taupe">{area.zips.join(", ")}</span>
                        </span>
                        <span className="text-xs text-taupe">
                          {companiesForCommunity(area).length} haulers
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
