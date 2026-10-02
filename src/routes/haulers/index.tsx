import { createFileRoute } from "@tanstack/react-router";
import { CompanyCard } from "@/components/company-card";
import { useVotes } from "@/components/vote-provider";
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
  const { rank } = useVotes();
  const companies = rank(COMPANIES);
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
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {companies.map((company) => (
            <li key={company.slug}>
              <CompanyCard company={company} />
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
