import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CompanyCard } from "@/components/company-card";
import { DirectoryFilters } from "@/components/directory-filters";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { COMPANIES } from "@/lib/directory/companies";
import { directoryNote, orderCompanies, type DirectoryMode } from "@/lib/directory/order";

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
  const [mode, setMode] = useState<DirectoryMode>("default");
  const companies = useMemo(() => {
    const featured = COMPANIES.filter((c) => c.featured);
    const rest = COMPANIES.filter((c) => !c.featured).sort((a, b) => a.name.localeCompare(b.name));
    return orderCompanies([...featured, ...rest], mode);
  }, [mode]);
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DirectoryFilters mode={mode} onChange={setMode} />
          <p className="mt-4 text-sm text-taupe">{companies.length} companies</p>
          {companies.length === 0 ? (
            <p className="mt-8 text-sm text-taupe">No companies match this filter.</p>
          ) : (
            <ul className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((company) => (
                <li key={company.slug} className="min-w-0">
                  <CompanyCard company={company} note={directoryNote(company, mode)} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
