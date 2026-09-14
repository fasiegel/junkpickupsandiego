import { Link } from "@tanstack/react-router";
import { MessageSquareText, Phone } from "lucide-react";
import { TruckMark } from "@/components/truck-mark";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_NAME,
  HOURS_LINE,
  HOURS_NOTE,
  PARENT_NAME,
  PHONE_DISPLAY,
  smsHref,
  telHref,
} from "@/lib/contact";
import { PRICE_EXCLUSION } from "@/lib/pricing";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-20 text-cream sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <TruckMark className="size-8 text-rust" />
            <p className="font-display text-2xl font-bold tracking-wide uppercase">
              {BUSINESS_NAME}
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-line">
            A service of {PARENT_NAME}. Locally owned. Veteran owned. Posted
            household-junk prices. Labor, haul, and dump included.
          </p>
        </div>

        <div>
          <p className="font-display text-lg font-bold tracking-wide uppercase">
            Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm text-line">
            <li>
              <Link to="/" hash="calculator" className="hover:text-cream">
                Truck load calculator
              </Link>
            </li>
            <li>
              <Link to="/what-we-haul" className="hover:text-cream">
                Items we haul
              </Link>
            </li>
            <li>
              <Link to="/areas" className="hover:text-cream">
                Service areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-lg font-bold tracking-wide uppercase">
            Hours
          </p>
          <p className="mt-3 text-sm leading-relaxed text-line">
            {HOURS_LINE}
            <br />
            {HOURS_NOTE}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-display text-lg font-bold tracking-wide uppercase">
            Text Fred a picture
          </p>
          <p className="text-sm leading-relaxed text-line">
            Fastest quote. The price you accept is the amount you pay.
          </p>
          <div className="mt-1 flex flex-wrap gap-2">
            <Button asChild variant="primary">
              <a href={smsHref()}>
                <MessageSquareText />
                Text {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="cream">
              <a href={telHref()}>
                <Phone />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-soft">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-fill sm:px-6">
          © {new Date().getFullYear()} {PARENT_NAME}. {BUSINESS_NAME} is a
          service of {PARENT_NAME}. No hidden travel charge. {PRICE_EXCLUSION}
        </p>
      </div>
    </footer>
  );
}
