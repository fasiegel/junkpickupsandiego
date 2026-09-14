import { Link } from "@tanstack/react-router";
import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smsHref } from "@/lib/contact";

type Crumb = { label: string; to?: string };

export function PageHero({
  kicker,
  title,
  lede,
  crumbs,
}: {
  kicker: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-taupe">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.to ? (
                  <a href={crumb.to} className="hover:text-rust">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-ink">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-6 font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe">{lede}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={smsHref()}>
              <MessageSquareText />
              Text Fred a picture
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/" hash="calculator">
              Truck load calculator
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
