import { cn } from "@/lib/utils";

export function SiteLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src="/images/palm-logo.png" alt="" className="size-10 shrink-0" />
      <span className="flex min-w-0 flex-col gap-1">
        <span
          className={cn(
            "font-sans text-[0.7rem] leading-none font-semibold tracking-[0.08em] whitespace-nowrap",
            light ? "text-cream" : "text-ink",
          )}
        >
          Local "Junkers" Only
        </span>
        <span className={cn("h-px w-full", light ? "bg-fill" : "bg-rust")} />
      </span>
    </span>
  );
}
