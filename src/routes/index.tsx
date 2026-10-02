import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";
import { CompanyCard } from "@/components/company-card";
import { useVotes } from "@/components/vote-provider";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { PARENT_NAME, PHONE_DISPLAY, smsHref } from "@/lib/contact";
import { COMPANIES, NEEDS } from "@/lib/directory/companies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Junk Pickup San Diego | Local Hauler Directory" },
      {
        name: "description",
        content:
          "San Diego’s best information source for junk removal. Compare local haulers by neighborhood and ZIP. A directory powered by Fred’s Junk Removal.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [need, setNeed] = useState<string | null>(null);
  const { rank } = useVotes();
  const fred = COMPANIES.find((c) => c.featured)!;
  const list = useMemo(() => {
    const rest = COMPANIES.filter((c) => !c.featured);
    const filtered = need ? rest.filter((c) => c.needs.includes(need)) : rest;
    return rank(filtered);
  }, [need, rank]);

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
            Find a local hauler by the load you have and the neighborhood you live in.
            Fred’s Junk Removal is the service this guide is built around.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-cream py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img
            src="/images/job-driveway-sofas.jpg"
            alt="Sofas staged for a Fred's Junk Removal pickup"
            className="aspect-[16/10] w-full rounded-xl object-cover shadow-[var(--shadow-border)]"
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

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
                The directory
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-wide text-ink uppercase">
                Local haulers
              </h2>
            </div>
            <Link to="/haulers" className="text-sm font-medium text-rust hover:text-rust-hover">
              All {COMPANIES.length} companies
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <FilterChip active={need === null} onClick={() => setNeed(null)} label="All needs" />
            {NEEDS.map((item) => (
              <FilterChip
                key={item.id}
                active={need === item.id}
                onClick={() => setNeed(need === item.id ? null : item.id)}
                label={item.label}
              />
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((company) => (
              <li key={company.slug}>
                <CompanyCard company={company} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "min-h-11 rounded-full bg-ink px-4 text-sm font-medium text-cream"
          : "min-h-11 rounded-full bg-cream px-4 text-sm font-medium text-ink-soft shadow-[var(--shadow-border)] hover:text-rust"
      }
    >
      {label}
    </button>
  );
}
