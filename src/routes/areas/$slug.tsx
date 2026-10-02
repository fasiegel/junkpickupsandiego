import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CompanyCard } from "@/components/company-card";
import { DirectoryFilters } from "@/components/directory-filters";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { getCommunity } from "@/lib/directory/communities";
import { companiesForCommunity } from "@/lib/directory/companies";
import { directoryNote, orderCompanies, type DirectoryMode } from "@/lib/directory/order";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const area = getCommunity(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const zips = loaderData.area.zips.join(", ");
    return {
      meta: [
        {
          title: `${loaderData.area.name} Junk Removal (${zips}) | Junk Removal Pick Up - San Diego Junk Removal Professionals`,
        },
        {
          name: "description",
          content: `Junk removal companies that say they serve ${loaderData.area.name}, ZIP ${zips}.`,
        },
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const [mode, setMode] = useState<DirectoryMode>("default");
  const companies = useMemo(() => {
    const listed = companiesForCommunity(area);
    const featured = listed.filter((c) => c.featured);
    const rest = listed.filter((c) => !c.featured);
    return orderCompanies([...featured, ...rest], mode);
  }, [area, mode]);

  return (
    <SiteShell>
      <PageHero
        kicker={area.region}
        title={`${area.name} junk removal`}
        lede={`ZIP ${area.zips.join(", ")}. These companies publish service that includes this community, or all of San Diego County.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Service areas", to: "/areas" },
          { label: area.name },
        ]}
      />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DirectoryFilters mode={mode} onChange={setMode} />
          <p className="mt-4 text-sm text-taupe">{companies.length} haulers listed</p>
          {companies.length === 0 ? (
            <p className="mt-8 text-sm text-taupe">No companies match this filter.</p>
          ) : (
            <ul className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...companies].map((company) => (
                <li key={company.slug} className="min-w-0">
                  <CompanyCard company={company} note={directoryNote(company, mode)} />
                </li>
              ))}
            </ul>
          )}
          <Link to="/areas" className="mt-8 inline-block text-sm font-medium text-rust">
            All communities
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
