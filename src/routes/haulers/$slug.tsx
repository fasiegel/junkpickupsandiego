import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CompanyPhoto } from "@/components/company-card";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { BOOK_URL } from "@/lib/contact";
import {
  communitiesForCompany,
  coverageLabel,
  getCompany,
  type Company,
} from "@/lib/directory/companies";
import { yearsInBusiness } from "@/lib/directory/order";
import { ITEM_PRICES, YARD_PRICES, moneyRange } from "@/lib/directory/prices";

export const Route = createFileRoute("/haulers/$slug")({
  loader: ({ params }) => {
    const company = getCompany(params.slug);
    if (!company) throw notFound();
    return { company };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.company.name} | San Diego Junk Removal Professionals` },
        { name: "description", content: loaderData.company.blurb },
      ],
    };
  },
  component: HaulerPage,
});

function ListingHighlights({ company }: { company: Company }) {
  const facts = company.facts;
  const item = ITEM_PRICES.find((group) => group.id === "starting")?.quotes.find(
    (quote) => quote.slug === company.slug,
  );
  const yard = YARD_PRICES.find((group) => group.id === "per-yard")?.quotes.find(
    (quote) => quote.slug === company.slug,
  );
  const years = yearsInBusiness(facts?.years);
  const googleCount = facts?.googleReviews?.match(/(\d[\d,]*)/)?.[1];
  const yelpCount = facts?.yelpReviews?.match(/(\d[\d,]*)/)?.[1];
  const yelpRating = facts?.yelpReviews?.match(/\((\d+(?:\.\d+)?)/)?.[1];
  const published = !facts?.publishedPrices || facts.publishedPrices === "Not listed"
    ? "Not listed"
    : facts.publishedPrices.startsWith("No")
      ? "No"
      : "Yes";
  const tiles: { label: string; value: string; href?: string }[] = [
    {
      label: "Google reviews",
      value: [facts?.googleRating, googleCount ? `${googleCount} reviews` : null].filter(Boolean).join(" · ") || "Not listed",
      href: facts?.googleUrl ?? undefined,
    },
    {
      label: "Yelp reviews",
      value:
        yelpRating || yelpCount
          ? [yelpRating, yelpCount ? `${yelpCount} reviews` : null].filter(Boolean).join(" · ")
          : (facts?.yelpReviews ?? "Not listed"),
      href: facts?.yelpUrl ?? undefined,
    },
    { label: "Single item price", value: item ? moneyRange(item.low, item.high) : "Not listed" },
    { label: "Price per cubic yard", value: yard ? moneyRange(yard.low, yard.high) : "Not listed" },
    { label: "Published prices", value: published },
    { label: "Years in business", value: years === null ? "Not listed" : `${years} years` },
    { label: "North County", value: company.needs.includes("north-county") ? "Yes" : "No" },
  ];

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {tiles.map((tile) => (
        <li key={tile.label} className="rounded-xl bg-cream px-4 py-4">
          <p className="text-xs font-semibold tracking-wide text-taupe uppercase">{tile.label}</p>
          {tile.href && tile.value !== "Not listed" ? (
            <a href={tile.href} target="_blank" rel="noopener noreferrer" className="mt-2 block text-lg font-semibold leading-snug text-ink hover:text-rust">
              {tile.value}
            </a>
          ) : (
            <p className="mt-2 text-lg font-semibold leading-snug text-ink">{tile.value}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

function ListingFacts({ company, places }: { company: Company; places: string[] }) {
  const facts = company.facts;
  const area =
    company.coverage === "county"
      ? "San Diego County"
      : places.length > 0
        ? places.join(", ")
        : "Not listed on their site";
  const rows: { label: string; value: string; href?: string }[] = [
    ...(company.url
      ? [
          {
            label: "Website",
            value: company.url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
            href: company.url,
          },
        ]
      : [{ label: "Website", value: "Not listed" }]),
    { label: "Phone", value: company.phone ?? "Not listed" },
    { label: "Years in business", value: facts?.years ?? "Not listed" },
    {
      label: "Google Business Profile",
      value: facts?.googleUrl ? "Open profile" : "Not listed",
      href: facts?.googleUrl ?? undefined,
    },
    { label: "Google star rating", value: facts?.googleRating ?? "Not listed" },
    { label: "Google reviews", value: facts?.googleReviews ?? "Not listed" },
    {
      label: "Yelp reviews",
      value: facts?.yelpReviews ?? (facts?.yelpUrl ? "Open Yelp" : "Not listed"),
      href: facts?.yelpUrl ?? undefined,
    },
    {
      label: "BBB profile",
      value: facts?.bbbUrl ? "Open BBB profile" : "Not listed",
      href: facts?.bbbUrl ?? undefined,
    },
    { label: "Service areas", value: area },
    { label: "Services offered", value: company.specialties.join(", ") },
    { label: "Online booking", value: facts?.onlineBooking ?? "Not listed" },
    { label: "Curbside pickup", value: facts?.curbside ?? "Not listed" },
    { label: "Prices published online", value: facts?.publishedPrices ?? "Not listed" },
  ];

  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
        Listing facts
      </h2>
      <p className="mt-2 text-sm text-taupe">
        Ratings are the Google Maps score for the listing that matches this company. Review counts are included when Maps showed one.
      </p>
      <dl className="mt-4 divide-y divide-line rounded-xl bg-cream">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="text-xs font-semibold tracking-wide text-ink uppercase">{row.label}</dt>
            <dd className="text-sm text-ink-soft">
              {row.href && row.value !== "Not listed" ? (
                <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-rust hover:underline">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function GoogleReviews({ company }: { company: Company }) {
  const facts = company.facts;
  const quotes = facts?.googleQuotes ?? [];
  const rating = [facts?.googleRating, facts?.googleReviews].filter(Boolean).join(" · ");

  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
        Google reviews
      </h2>
      <p className="mt-2 text-sm text-taupe">
        {rating
          ? rating
          : "A separate Google star rating was not published on a page we can cite."}{" "}
        Quotes appear only when a public page labels them as Google reviews.
      </p>
      {quotes.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {quotes.map((quote) => (
            <li key={`${quote.author}-${quote.text.slice(0, 24)}`} className="rounded-xl bg-cream px-4 py-4">
              <p className="text-sm leading-relaxed text-ink-soft">“{quote.text}”</p>
              <p className="mt-2 text-xs font-semibold tracking-wide text-ink uppercase">
                {quote.author}
                {quote.place ? ` · ${quote.place}` : ""}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-taupe">No Google review text is published for this listing yet.</p>
      )}
      {facts?.googleUrl ? (
        <a
          href={facts.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-rust"
        >
          Read them on Google
        </a>
      ) : null}
    </div>
  );
}

function HaulerPage() {
  const { company } = Route.useLoaderData();
  const places = communitiesForCompany(company);
  const namedPlaces = company.coverage === "county" ? [] : places;
  const photos = company.images;

  return (
    <SiteShell>
      <PageHero
        kicker={company.featured ? "Featured · Powered by Fred’s" : "Local hauler"}
        title={company.name}
        lede={company.blurb}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Haulers", to: "/haulers" },
          { label: company.name },
        ]}
        actions={false}
      />
      <section className="border-b border-line bg-sand py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ListingHighlights company={company} />
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {photos.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {photos.map((src) => (
                <CompanyPhoto
                  key={src}
                  src={src}
                  alt={`${company.name} photo from their website`}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
            ) : null}
            <ul className="mt-6 flex flex-wrap gap-2">
              {company.specialties.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-cream px-3 py-1 text-sm text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ListingFacts company={company} places={places.map((place) => place.name)} />
            <GoogleReviews company={company} />
            {company.details && company.details.length > 0 ? (
              <div className="mt-8">
                <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
                  What they haul
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-taupe">
                  {company.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {company.links && company.links.length > 0 ? (
              <div className="mt-8">
                <h2 className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
                  On their website
                </h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {company.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center rounded-lg bg-cream px-4 text-sm font-medium text-ink hover:text-rust"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <aside className="h-fit rounded-xl bg-ink p-6 text-cream">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-fill uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 text-rust" />
                {company.phone ? (
                  <span className="flex flex-col gap-1">
                    {company.phone.split(" · ").map((number) => (
                      <a key={number} href={`tel:${number.replace(/[^\d+]/g, "")}`}>
                        {number}
                      </a>
                    ))}
                  </span>
                ) : (
                  <span>Phone not listed on their site</span>
                )}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 text-rust" />
                {company.email ? (
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                ) : (
                  <span>Email not listed</span>
                )}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-rust" />
                <span>{company.address ?? coverageLabel(company)}</span>
              </li>
            </ul>
            {company.hours ? <p className="mt-4 text-sm text-line">{company.hours}</p> : null}
            <div className="mt-6 flex flex-col gap-2">
            {company.url ? (
              <Button asChild variant="primary">
                <a href={company.url}>Visit their website</a>
              </Button>
            ) : null}
              {company.featured ? (
                <Button asChild variant="cream">
                  <a href={BOOK_URL}>Book Fred now</a>
                </Button>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
      <section className="border-t border-line bg-cream py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
            Where they say they work
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-taupe">
            {company.coverage === "county"
              ? "Their site says San Diego County. It does not name a shorter city list."
              : company.coverage.length === 0
                ? "No service area was listed for this company. Call and confirm they cover your address."
                : "Cities named on their site."}
          </p>
          {namedPlaces.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {namedPlaces.map((place) => (
              <li key={place.slug}>
                <Link
                  to="/areas/$slug"
                  params={{ slug: place.slug }}
                  className="inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-ink-soft shadow-[var(--shadow-border)] hover:text-rust"
                >
                  {place.name}
                  <span className="ml-2 text-taupe">{place.zips[0]}</span>
                </Link>
              </li>
            ))}
          </ul>
          ) : null}
          {company.coverage === "county" ? (
            <Link to="/areas" className="mt-6 inline-block text-sm font-medium text-rust">
              See every ZIP and community
            </Link>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
}
