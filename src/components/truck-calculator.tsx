import { useMemo, useRef, useState } from "react";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smsHref, BOOK_URL } from "@/lib/contact";
import {
  getTier,
  PRICE_EXCLUSION,
  priceFor,
  quoteSms,
  TIER_COUNT,
  type ServiceKind,
  TRUCK_TIERS,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

export function TruckCalculator() {
  const [tierN, setTierN] = useState(3);
  const [service, setService] = useState<ServiceKind>("curbside");
  const tier = getTier(tierN);
  const price = priceFor(tier, service);
  const other: ServiceKind = service === "curbside" ? "full" : "curbside";
  const otherPrice = priceFor(tier, other);
  const sms = useMemo(() => quoteSms(tier, service), [tier, service]);

  return (
    <section
      id="calculator"
      className="scroll-mt-16 border-b border-line bg-cream py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          Truck load pricing
        </p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-4xl font-bold tracking-wide text-ink uppercase sm:text-5xl">
            Hover over the truck bed to see the price.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-taupe">
            Ten load tiers. Hover or drag the cargo area — same as the slider.
            Household junk only, from $69 for Tier 1 up to $599 for a packed
            truck.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_0.85fr]">
          <div className="rounded-xl bg-sand p-3 shadow-[var(--shadow-border)] sm:p-5">
            <div className="flex flex-wrap gap-2">
              <ServiceToggle
                active={service === "curbside"}
                onClick={() => setService("curbside")}
                title="Curbside"
                hint="You stage it. We load."
              />
              <ServiceToggle
                active={service === "full"}
                onClick={() => setService("full")}
                title="Full-service"
                hint="You point. We carry it out."
              />
            </div>

            <DumpBed tierN={tier.n} onSelect={setTierN} />
          </div>

          <aside className="flex flex-col rounded-xl bg-ink p-6 text-cream shadow-[var(--shadow-border)] sm:p-8">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-fill uppercase">
              {service === "curbside" ? "Curbside removal" : "Full-service removal"}
            </p>
            <p className="mt-3 font-display text-7xl font-bold leading-none tracking-wide tabular-nums">
              ${price}
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-wide text-rust uppercase">
              {tier.name}
            </p>
            <p className="mt-2 text-sm text-line">
              Labor, haul, and dump included. No travel surcharge.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-soft pt-6 text-sm">
              <div>
                <dt className="text-fill">Capacity</dt>
                <dd className="mt-1 font-medium tabular-nums">
                  {tier.yards} cubic yards
                </dd>
              </div>
              <div>
                <dt className="text-fill">Weight</dt>
                <dd className="mt-1 font-medium tabular-nums">
                  up to {tier.lbs.toLocaleString()} lbs
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-line">{tier.fits}</p>

            <p className="mt-5 text-sm text-fill">
              {other === "curbside" ? "Curbside" : "Full-service"} for this load:{" "}
              <span className="text-cream tabular-nums">${otherPrice}</span>
            </p>

            <Button asChild variant="primary" size="xl" className="mt-8 w-full">
              <a href={BOOK_URL}>Book now</a>
            </Button>
            <Button asChild variant="cream" size="xl" className="mt-3 w-full">
              <a href={smsHref(sms)}>
                Text Fred this quote
                <ArrowRight />
              </a>
            </Button>
            <p className="mt-3 text-center text-xs leading-relaxed text-fill">
              Send pictures with the text. The quote you accept is the amount
              you pay. {PRICE_EXCLUSION} Text a photo for those loads.
            </p>
          </aside>
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm text-taupe">
          <MessageSquareText className="mt-0.5 size-4 shrink-0 text-rust" />
          <span>
            Calculator shows posted truck-load tiers for household junk.{" "}
            {PRICE_EXCLUSION} A photo is how Fred confirms the load before the
            truck rolls.
          </span>
        </p>
      </div>
    </section>
  );
}

function ServiceToggle({
  active,
  onClick,
  title,
  hint,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-14 flex-1 rounded-lg px-4 py-3 text-left transition-[background-color,color,box-shadow] duration-150 ease-out",
        active
          ? "bg-ink text-cream shadow-[var(--shadow-border)]"
          : "bg-cream text-ink shadow-[var(--shadow-border)] hover:bg-paper",
      )}
    >
      <span className="block font-display text-lg font-bold tracking-wide uppercase">
        {title}
      </span>
      <span className={cn("block text-xs", active ? "text-line" : "text-taupe")}>
        {hint}
      </span>
    </button>
  );
}

function tierFromClientX(el: HTMLElement, clientX: number): number {
  const rect = el.getBoundingClientRect();
  const t = (clientX - rect.left) / Math.max(rect.width, 1);
  return Math.min(TIER_COUNT, Math.max(1, Math.ceil(t * TIER_COUNT)));
}

function DumpBed({
  tierN,
  onSelect,
}: {
  tierN: number;
  onSelect: (n: number) => void;
}) {
  const bedRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const selected = getTier(tierN);

  const applyPointer = (clientX: number) => {
    const el = bedRef.current;
    if (!el) return;
    onSelect(tierFromClientX(el, clientX));
  };

  return (
    <div className="mt-4">
      <p className="mb-3 font-display text-xs font-semibold tracking-[0.16em] text-taupe uppercase">
        Hover or drag the cargo area
      </p>

      <div className="relative overflow-hidden rounded-lg bg-ink">
        <img
          src="/images/dump-truck.jpg"
          alt="Fred's dump truck with a black cargo bed, used to price a load by dump-bed tier"
          className="block h-auto w-full"
        />

        <div
          ref={bedRef}
          className="absolute z-10 grid cursor-ew-resize overflow-hidden touch-none"
          style={{
            left: "var(--bed-left)",
            top: "var(--bed-top)",
            width: "var(--bed-width)",
            height: "var(--bed-height)",
            gridTemplateColumns: `repeat(${TIER_COUNT}, minmax(0, 1fr))`,
          }}
          role="slider"
          aria-label="Dump bed load tier"
          aria-valuemin={1}
          aria-valuemax={TIER_COUNT}
          aria-valuenow={tierN}
          aria-valuetext={selected.name}
          tabIndex={0}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            applyPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.pointerType === "mouse" || dragging.current) {
              applyPointer(e.clientX);
            }
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
              e.preventDefault();
              onSelect(Math.min(TIER_COUNT, tierN + 1));
            }
            if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
              e.preventDefault();
              onSelect(Math.max(1, tierN - 1));
            }
            if (e.key === "Home") {
              e.preventDefault();
              onSelect(1);
            }
            if (e.key === "End") {
              e.preventDefault();
              onSelect(TIER_COUNT);
            }
          }}
        >
          {TRUCK_TIERS.map((cell) => {
            const filled = cell.n <= tierN;
            const edge = cell.n === tierN;
            return (
              <div
                key={cell.n}
                className={cn(
                  "relative flex items-end justify-center border-r border-cream/30 pb-1 transition-colors duration-150 ease-out last:border-r-0",
                  filled ? "bg-cream/60" : "bg-transparent hover:bg-cream/20",
                  edge && "border-r-4 border-cream",
                )}
              >
                <span
                  className={cn(
                    "font-display text-[0.65rem] font-bold tabular-nums sm:text-sm",
                    filled ? "text-ink" : "text-cream",
                  )}
                >
                  {cell.n}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="mt-4"
        style={{
          marginLeft: "var(--bed-left)",
          width: "var(--bed-width)",
        }}
      >
        <div className="mb-1 flex items-center justify-between text-sm">
          <label htmlFor="truck-fill" className="font-medium text-ink">
            Load tier
          </label>
          <span className="font-display text-lg font-bold tracking-wide text-rust uppercase">
            {selected.name}
          </span>
        </div>
        <input
          id="truck-fill"
          className="truck-range"
          type="range"
          min={1}
          max={TIER_COUNT}
          step={1}
          value={tierN}
          onChange={(e) => onSelect(Number(e.target.value))}
          aria-valuemin={1}
          aria-valuemax={TIER_COUNT}
          aria-valuenow={tierN}
          aria-valuetext={selected.name}
        />
        <div className="mt-1 flex justify-between font-sans text-xs text-taupe">
          <span>Tier 1</span>
          <span>Tier 5</span>
          <span>Tier 10</span>
        </div>
      </div>
    </div>
  );
}
