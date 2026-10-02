import { createFileRoute } from "@tanstack/react-router";
import { CompanyCard } from "@/components/company-card";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { COMPANIES } from "@/lib/directory/companies";

export const Route = createFileRoute("/haulers/")({
  head: () => ({
    meta: [
      { title: "San Diego Junk Removal Companies | Junk Pickup San Diego" },
      {
        name: "description",
        content:
          "Directory of local San Diego junk removal companies with phones, photos, and the communities they say they serve.",
      },
    ],
  }),
  component: HaulersIndex,
});

function HaulersIndex() {
  const featured = COMPANIES.filter((c) => c.featured);
  const rest = COMPANIES.filter((c) => !c.featured).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <SiteShell>
      <PageHero
        kicker="Directory"
        title="Every hauler in this guide."
        lede="Each page has the phone, email, and photos we could read on that company’s own site, plus where they say they work."
        crumbs={[{ label: "Home", to: "/" }, { label: "Haulers" }]}
        actions={false}
      />
      <section className="py-14">
        <ul className="mx-auto grid max-w-6xl items-stretch gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {[...featured, ...rest].map((company) => (
            <li key={company.slug} className="min-w-0">
              <CompanyCard company={company} />
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
