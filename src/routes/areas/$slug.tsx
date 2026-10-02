import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CompanyCard } from "@/components/company-card";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { getCommunity } from "@/lib/directory/communities";
import { companiesForCommunity } from "@/lib/directory/companies";

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
          title: `${loaderData.area.name} Junk Removal (${zips}) | Junk Pickup San Diego`,
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
  const companies = companiesForCommunity(area);
  const featured = companies.filter((c) => c.featured);
  const rest = companies.filter((c) => !c.featured);

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
          <p className="text-sm text-taupe">{companies.length} haulers listed</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...featured, ...rest].map((company) => (
              <li key={company.slug}>
                <CompanyCard company={company} />
              </li>
            ))}
          </ul>
          <Link to="/areas" className="mt-8 inline-block text-sm font-medium text-rust">
            All communities
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
