import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Armchair,
  BedDouble,
  ChevronDown,
  Dumbbell,
  MessageSquareText,
  Monitor,
  Phone,
  Refrigerator,
  Star,
  Trees,
  Truck,
  Warehouse,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PromoGraphic } from "@/components/promo-graphic";
import { TruckCalculator } from "@/components/truck-calculator";
import { Button } from "@/components/ui/button";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  BUSINESS_NAME,
  HOURS_LINE,
  PARENT_NAME,
  PHONE_DISPLAY,
  smsHref,
  telHref,
} from "@/lib/contact";
import { AREAS } from "@/lib/areas";
import { getItem, withPlace } from "@/lib/items";
import { PRICE_EXCLUSION } from "@/lib/pricing";

export const Route = createFileRoute("/")({ component: Home });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: BUSINESS_NAME,
  description:
    "San Diego junk removal and hauling. Text Fred a picture for a firm price. Posted household-junk truck-load rates from $69. Construction debris and yard waste are quoted from a photo.",
  telephone: "+1-619-245-9957",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE,
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  },
  openingHours: "Mo-Sa 09:00-16:00",
  areaServed: "San Diego County",
  priceRange: "$69–$899",
};

function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>
        <TruckCalculator />
        <Hero />
        <TrustBar />
        <PromoGraphic
          src="/images/job-driveway-sofas.jpg"
          alt="Couches and chairs staged on a San Diego driveway for pickup"
          kicker="From $69"
          title="Cheap junk hauling"
          copy="Posted household rates. Pay for the space you use. Text Fred a picture and the quote you accept is the amount you pay."
        />
        <Services />
        <PromoGraphic
          src="/images/job-sectional.jpg"
          alt="Three-piece leather sectional staged at the curb in San Diego"
          kicker="1,400+ five-star reviews"
          title="San Diego's favorite hauling service"
          copy="Locally owned. Veteran owned. Family operated since 2005. Same truck, same Fred."
          variant="panel"
        />
        <HowItWorks />
        <PromoGraphic
          src="/images/job-mattress.jpg"
          alt="Queen mattress and box spring at the curb of a San Diego home"
          kicker="Any size, including queen"
          title="Easy mattress hauling"
          copy="Mattress, box spring, and frame. Curbside if you stage it. Full-service if we carry it out."
          flip
        />
        <Areas />
        <PromoGraphic
          src="/images/job-full-service.jpg"
          alt="Crew carrying a sofa out of a San Diego house to the dump truck"
          kicker="You point. We carry it out."
          title="Full-service junk hauling"
          copy="Inside, upstairs, backyard. We load, sweep the path, and haul it. Labor is in the posted full-service rate."
          variant="panel"
          flip
        />
        <Callout>
          Posted prices do not include construction debris or yard waste. Text a
          photo for those loads.
        </Callout>
        <PromoGraphic
          src="/images/job-curbside-mixed.jpg"
          alt="Mattress, chairs, and mixed household junk staged at a San Diego curb"
          kicker="You stage it. We load."
          title="Curbside junk hauling"
          copy="Driveway, garage, carport, or alley. You do not need to be home. Typically 30% less than full-service."
        />
        <Faq />
        <PromoGraphic
          src="/images/job-apartment-lot.jpg"
          alt="Furniture pile in a San Diego apartment parking lot ready for a cheap haul"
          kicker="Pay for the space you use"
          title="Low cost junk hauling"
          copy="Tier 1 from $69. A packed dump bed is $599 curbside. Household junk only."
          variant="panel"
          flip
        />
        <HoursBand />
        <PromoGraphic
          src="/images/job-appliances.jpg"
          alt="Refrigerator, washer, and dryer staged at a San Diego curb"
          kicker="Emptied and disconnected"
          title="Appliance hauling"
          copy="Fridges, washers, dryers, and water heaters. We take them. You unplug and empty first."
          variant="panel"
        />
        <LimitsBand />
        <PromoGraphic
          src="/images/job-ewaste.jpg"
          alt="TVs, a computer, and a printer staged for e-waste hauling in San Diego"
          kicker="Recycled, not dumped"
          title="E-waste hauling in San Diego"
          copy="TVs, monitors, printers, computers. Recycled. Drives are not wiped. Text a picture for a firm price."
          flip
        />
        <TextFredBand />
        <ClosingCta />
      </SiteShell>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src="/images/dump-truck.jpg"
        alt="Fred's dump truck ready for a junk haul in San Diego"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/75 to-ink/35 sm:bg-linear-to-r sm:from-ink sm:via-ink/80 sm:to-ink/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-fill uppercase">
          A service of {PARENT_NAME}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.9] font-extrabold tracking-wide text-cream uppercase sm:text-7xl">
          San Diego junk removal and hauling
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-line">
          Text Fred a picture for pricing. The quote you accept is the amount
          you pay — labor, haul, and dump included.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="primary" size="xl">
            <a href={smsHref()}>
              <MessageSquareText />
              Text Fred a picture
            </a>
          </Button>
          <Button asChild variant="cream" size="xl">
            <a href="#calculator">
              <Truck />
              Truck load calculator
            </a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-fill">
          {PHONE_DISPLAY} · {HOURS_LINE} · Same-day often available
        </p>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-line bg-cream">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-4">
        <li className="bg-cream px-4 py-6 sm:px-6">
          <p className="font-display text-2xl font-bold tracking-wide text-ink uppercase sm:text-3xl">
            #1 in satisfied customers
          </p>
          <p className="mt-1 text-sm text-taupe">thousands served since 2005</p>
        </li>
        <li className="bg-cream px-4 py-6 sm:px-6">
          <p className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
            21 years
          </p>
          <p className="mt-1 text-sm text-taupe">Local San Diego Business</p>
        </li>
        <li className="bg-cream px-4 py-6 sm:px-6">
          <p className="flex gap-0.5" aria-label="Five yellow stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className="size-6 fill-yellow-400 text-yellow-400"
                strokeWidth={1.25}
              />
            ))}
          </p>
          <p className="mt-1 text-sm text-taupe">
            Highest rated junk hauling service
          </p>
        </li>
        <li className="bg-cream px-4 py-6 sm:px-6">
          <p className="font-display text-3xl font-bold tracking-wide text-ink uppercase">
            Veteran
          </p>
          <p className="mt-1 text-sm text-taupe">Owned and family operated</p>
        </li>
      </ul>
    </section>
  );
}

const SERVICES = [
  { slug: "furniture", icon: Armchair, title: "Furniture" },
  { slug: "mattresses", icon: BedDouble, title: "Mattresses" },
  { slug: "appliances", icon: Refrigerator, title: "Appliances" },
  { slug: "garage-cleanouts", icon: Warehouse, title: "Garage cleanouts" },
  { slug: "e-waste", icon: Monitor, title: "E-waste" },
  { slug: "gym-equipment", icon: Dumbbell, title: "Gym equipment" },
  { slug: "patio-and-outdoor", icon: Trees, title: "Yard & outdoor" },
  { slug: "household-junk", icon: Truck, title: "Full truck loads" },
];

function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          What we haul
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-5xl">
          Single items or a packed dump bed.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe">
          Curbside if you stage it where we can drive up. Full-service if we
          carry it from inside, the second floor, or the backyard.{" "}
          {PRICE_EXCLUSION}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((item) => {
            const haul = getItem(item.slug);
            if (!haul) return null;
            return (
              <li key={item.title}>
                <Link
                  to="/what-we-haul/$slug"
                  params={{ slug: item.slug }}
                  className="block h-full rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <item.icon className="size-6 text-rust" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-xl font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">
                    {withPlace(haul.copy, "San Diego")}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6">
          <Link
            to="/what-we-haul"
            className="text-sm font-medium text-ink hover:text-rust"
          >
            See everything we haul
          </Link>
        </p>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Text Fred a picture",
    copy: "Send photos of the pile to (619) 245-9957. A list works too. Morning texts get the best shot at same-day.",
  },
  {
    n: "02",
    title: "Get a firm price",
    copy: "Fred replies with a number before the truck rolls. Accept it and that is what you pay — no surprise fees at the curb.",
  },
  {
    n: "03",
    title: "We load and go",
    copy: "We text when we are on the way, load the truck, sweep the path, and take it to recycle, donate, or the transfer station.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          How it works
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-5xl">
          A photo is the fastest quote.
        </h2>
        <ol className="mt-8 space-y-6">
          {STEPS.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="font-display text-2xl font-bold text-rust tabular-nums">
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-taupe">
                  {step.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-8">
          <a href={smsHref()}>
            <MessageSquareText />
            Text Fred a picture
          </a>
        </Button>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          Service area
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-5xl">
          San Diego County, driveway to dump bed.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe">
          From Chula Vista and San Ysidro through Downtown, Pacific Beach, La
          Jolla, and inland communities. If you can text a photo, we can likely
          haul it.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                to="/areas/$slug"
                params={{ slug: area.slug }}
                className="inline-flex min-h-11 items-center rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink-soft shadow-[var(--shadow-border)] hover:text-rust"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link to="/areas" className="text-sm font-medium text-ink hover:text-rust">
            All service areas
          </Link>
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How much does junk removal cost in San Diego?",
    a: "Posted curbside rates start at $69 for one item or a small household load under 200 lbs. Two items are $119. Three are $179. A packed dump bed is $599 curbside or $899 full-service. Labor, haul, and disposal are included. Posted prices do not include construction debris or yard waste.",
  },
  {
    q: "How does the truck load calculator work?",
    a: "It prices household junk by how much of a 20-cubic-yard dump bed the pile will fill, in ten tiers. Match the pile to a tier, choose curbside or full-service, then text Fred a picture so he can confirm. Posted prices do not include construction debris or yard waste.",
  },
  {
    q: "What is the difference between curbside and full-service?",
    a: "Curbside: you stage items where the truck can drive up — driveway, garage, carport, or alley. We load. You do not need to be home. Full-service: you point and we carry it from inside, upstairs, or the backyard. Curbside typically saves 30% or more.",
  },
  {
    q: "Do I need to be home?",
    a: "Not for curbside. Stage the pile, text photos, accept the quote. We load and sweep. For full-service someone needs to show us what to take.",
  },
  {
    q: "What will you not haul?",
    a: "Paint, fuels, chemicals, loose batteries, asbestos, medical waste, and other hazardous materials. Construction debris and yard waste are not on posted rates — text a photo for a custom quote. If a picture shows something we cannot take, we say so on the quote — not after the bed is half full.",
  },
  {
    q: "Do posted prices include construction debris or yard waste?",
    a: "No. Pricing on this site is household junk — furniture, appliances, mattresses, and mixed household piles. Concrete, drywall, dirt, green waste, and remodel debris get a custom quote from a photo.",
  },
  {
    q: "Is same-day junk removal available?",
    a: "Often, Monday through Saturday. Morning texts get the best shot at the day’s route. Sunday is closed. After-hours texts are answered the next business morning.",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-5xl">
          Questions, answered.
        </h2>
        <div className="mt-8 divide-y divide-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-xl font-bold tracking-wide uppercase">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-rust transition-transform duration-150 group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-taupe">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 text-cream sm:py-24">
      <img
        src="/images/job-carport.jpg"
        alt="Sofa, chairs, and boards staged under a San Diego carport for pickup"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          Monday through Saturday
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-wide uppercase sm:text-6xl">
          Reliable junk hauling
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-line">
          Same-day often available. A service of {PARENT_NAME}. The quote you
          accept is the amount you pay.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="primary" size="xl">
            <a href={smsHref()}>
              <MessageSquareText />
              Text {PHONE_DISPLAY}
            </a>
          </Button>
          <Button asChild variant="cream" size="xl">
            <a href={telHref()}>
              <Phone />
              Call Fred
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Callout({ children }: { children: string }) {
  return (
    <section className="border-y border-line bg-cream">
      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-base leading-relaxed text-ink sm:px-6">
        {children}
      </p>
    </section>
  );
}

function HoursBand() {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <p className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
          {HOURS_LINE}
        </p>
        <p className="text-sm text-taupe">
          {PHONE_DISPLAY} · Morning texts get the best shot at same-day
        </p>
      </div>
    </section>
  );
}

function TextFredBand() {
  return (
    <section className="border-y border-line bg-cream">
      <p className="mx-auto max-w-6xl px-4 py-8 text-center font-display text-3xl font-bold tracking-wide text-ink uppercase sm:px-6 sm:text-4xl">
        Text Fred a picture for pricing.
      </p>
    </section>
  );
}

function LimitsBand() {
  return (
    <section className="bg-paper">
      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-taupe sm:px-6">
        We do not haul paint, fuels, chemicals, loose batteries, asbestos, or
        medical waste. Construction debris and yard waste are quoted from a
        photo.
      </p>
    </section>
  );
}
