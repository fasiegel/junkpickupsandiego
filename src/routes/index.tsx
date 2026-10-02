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
            San Diego Junk Removal - The best of the best!
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
      <ServicesGuide />
    </SiteShell>
  );
}

function ServicesGuide() {
  const services = [
    {
      title: "Heavy lifting and loading",
      body: "Crews come directly to your home, office, or high-rise unit, handle all the physical labor, load the items into trucks, and sweep up the area afterward.",
    },
    {
      title: "Furniture and appliance hauling",
      body: "Removal of bulky items like couches, mattresses, dressers, dining sets, refrigerators, washers, dryers, and old TVs.",
    },
    {
      title: "Specialty item removal",
      body: "Disassembly and hauling of heavy or awkward objects such as hot tubs, pianos, pool tables, heavy exercise equipment, and large outdoor grills.",
    },
    {
      title: "Property and cleanout services",
      body: "Complete cleanouts for garages, yards, construction and remodel debris, estate sales, foreclosure properties, and hoarding situations.",
    },
    {
      title: "Demolition and light debris removal",
      body: "Small-scale teardowns, like sheds or old structures, and yard waste or brush hauling.",
    },
    {
      title: "Donation and recycling",
      body: "Many local operators sort items to donate gently used furniture and goods to charities, or recycle e-waste and scrap metal, so a large share of the load stays out of the landfill, often 60% to 70%.",
    },
  ];

  return (
    <section className="border-t border-line bg-sand py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          What the work includes
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-wide text-ink uppercase">
          San Diego junk removal services
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-taupe">
          San Diego junk removal services provide full-service hauling, heavy lifting, loading, and
          eco-friendly disposal or donation for residential and commercial properties.
        </p>
        <h3 className="mt-10 font-display text-2xl font-bold tracking-wide text-ink uppercase">
          Core services offered
        </h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="rounded-xl bg-cream px-5 py-5">
              <h4 className="font-display text-lg font-bold tracking-wide text-ink uppercase">
                {service.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.body}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-10 font-display text-2xl font-bold tracking-wide text-ink uppercase">
          How pricing and booking work
        </h3>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          <li className="rounded-xl bg-cream px-5 py-5">
            <h4 className="font-display text-lg font-bold tracking-wide text-ink uppercase">
              Volume-based pricing
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Most companies charge based on how much space your items take up in their truck,
              from a minimum load up to a full truckload, with upfront, free on-site or online
              estimates before any work begins.
            </p>
          </li>
          <li className="rounded-xl bg-cream px-5 py-5">
            <h4 className="font-display text-lg font-bold tracking-wide text-ink uppercase">
              Scheduling
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Same-day and next-day service are widely available across San Diego County.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Directory() {
  const [mode, setMode] = useState<DirectoryMode>("default");
  const [expanded, setExpanded] = useState(false);
  const list = useMemo(() => {
    const rest = mode === "default" ? COMPANIES.filter((c) => !c.featured) : COMPANIES;
    return orderCompanies(rest, mode);
  }, [mode]);
  const shown = expanded ? list : list.slice(0, 12);

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
          <DirectoryFilters
            mode={mode}
            onChange={(next) => {
              setMode(next);
              setExpanded(false);
            }}
          />
        </div>
        {list.length === 0 ? (
          <p className="mt-8 text-sm text-taupe">No companies match this filter.</p>
        ) : (
          <>
            <ul className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((company) => (
                <li key={company.slug} className="min-w-0">
                  <CompanyCard company={company} note={directoryNote(company, mode)} />
                </li>
              ))}
            </ul>
            {!expanded && list.length > 12 ? (
              <div className="mt-8 flex justify-center">
                <Button type="button" variant="outline" onClick={() => setExpanded(true)}>
                  See more
                </Button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
