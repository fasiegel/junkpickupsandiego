import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";
import { CompanyCard } from "@/components/company-card";
import { DirectoryFilters } from "@/components/directory-filters";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { PARENT_NAME, PHONE_DISPLAY, smsHref } from "@/lib/contact";
import { COMPANIES } from "@/lib/directory/companies";
import { directoryNote, orderCompanies, type DirectoryMode } from "@/lib/directory/order";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "San Diego Junk Removal Professionals" },
      {
        name: "description",
        content:
          "Compare local San Diego junk removal professionals by neighborhood and ZIP. Powered by Fred’s Junk Removal.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const fred = COMPANIES.find((c) => c.featured)!;

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src="/images/dump-truck.jpg"
          alt="Fred's dump truck, the hauler behind this San Diego directory"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-fill uppercase">
            Powered by {PARENT_NAME}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.92] font-extrabold tracking-wide text-cream uppercase sm:text-7xl">
            San Diego’s best information source for junk removal
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-line">
            Find a local hauler with a great reputation that suits your needs and budget.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-cream py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img
            src="/haulers/freds-junk-removal-photo-1.jpg"
            alt="Fred in the cab of his junk removal truck"
            className="aspect-[16/10] w-full rounded-xl object-cover object-[center_30%] shadow-[var(--shadow-border)]"
          />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
              Start here
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-wide text-ink uppercase">
              {fred.name}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-taupe">{fred.blurb}</p>
            <p className="mt-4 text-sm text-ink-soft">
              {PHONE_DISPLAY}
              {fred.hours ? ` · ${fred.hours}` : ""}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild>
                <a href={smsHref()}>
                  <MessageSquareText />
                  Text a picture
                </a>
              </Button>
              {fred.url ? (
                <Button asChild variant="outline">
                  <a href={fred.url}>fredsjunkremoval.com</a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Directory />
    </SiteShell>
  );
}

function Directory() {
  const [mode, setMode] = useState<DirectoryMode>("default");
  const list = useMemo(() => {
    const rest = mode === "default" ? COMPANIES.filter((c) => !c.featured) : COMPANIES;
    return orderCompanies(rest, mode);
  }, [mode]);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
              The haulers
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-wide text-ink uppercase">
              Local haulers
            </h2>
            <p className="mt-2 text-sm text-taupe">{list.length} local companies</p>
          </div>
          <Link to="/haulers" className="text-sm font-medium text-rust hover:text-rust-hover">
            All {COMPANIES.length} companies
          </Link>
        </div>
        <div className="mt-6">
          <DirectoryFilters mode={mode} onChange={setMode} />
        </div>
        {list.length === 0 ? (
          <p className="mt-8 text-sm text-taupe">No companies match this filter.</p>
        ) : (
          <ul className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((company) => (
              <li key={company.slug} className="min-w-0">
                <CompanyCard company={company} note={directoryNote(company, mode)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
