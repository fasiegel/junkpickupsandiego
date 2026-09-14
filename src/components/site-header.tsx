import { Link } from "@tanstack/react-router";
import { MessageSquareText, Phone } from "lucide-react";
import { TruckMark } from "@/components/truck-mark";
import { Button } from "@/components/ui/button";
import { PARENT_NAME, PHONE_DISPLAY, smsHref, telHref } from "@/lib/contact";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <p className="bg-ink px-4 py-2 text-center text-xs leading-snug text-cream sm:px-6 sm:text-sm">
        San Diego hauling is powered by {PARENT_NAME} — San Diego’s top-rated
        and most trusted junk removal service.
      </p>
      <div className="border-b border-line/80 bg-sand/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex min-h-11 items-center gap-2.5 text-ink">
            <TruckMark className="size-8 text-rust" />
            <span className="leading-none">
              <span className="font-display text-lg font-bold tracking-wide uppercase">
                San Diego
              </span>
              <span className="block font-sans text-[0.65rem] font-medium tracking-[0.14em] text-taupe uppercase">
                Junk Removal & Hauling
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            <Link
              to="/"
              hash="calculator"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Truck calculator
            </Link>
            <Link
              to="/what-we-haul"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              What we haul
            </Link>
            <Link
              to="/areas"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Areas
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href={telHref()} aria-label={`Call ${PHONE_DISPLAY}`}>
                <Phone />
                <span className="tabular-nums">{PHONE_DISPLAY}</span>
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={smsHref()}>
                <MessageSquareText />
                Text Fred
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
