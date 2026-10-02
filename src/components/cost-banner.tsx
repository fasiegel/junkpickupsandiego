import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TruckMark } from "@/components/truck-mark";

export function CostBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -left-20 top-0 h-full w-36 -skew-x-12 bg-rust" aria-hidden="true" />
      <p
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 font-display text-[14rem] leading-none font-extrabold text-cream/10 select-none"
        aria-hidden="true"
      >
        $
      </p>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <TruckMark className="size-10 text-rust" />
          <h2 className="mt-4 font-display text-5xl leading-[0.9] font-extrabold tracking-wide uppercase sm:text-7xl">
            What does junk removal cost in San Diego
          </h2>
        </div>
        <Button asChild size="lg" className="w-fit shrink-0">
          <Link to="/prices">See average costs</Link>
        </Button>
      </div>
    </section>
  );
}
