import { cn } from "@/lib/utils";

export function SiteLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1a0dab" />
        <rect x="6" y="14" width="9" height="8" rx="1" fill="#ffffff" />
        <rect x="15" y="11" width="11" height="11" rx="1.25" fill="#ffffff" />
        <rect x="17.2" y="13.1" width="4.6" height="3.4" rx="0.5" fill="#1a0dab" />
        <circle cx="10" cy="23.4" r="2.15" fill="#ffffff" />
        <circle cx="21.2" cy="23.4" r="2.15" fill="#ffffff" />
        <circle cx="10" cy="23.4" r="0.85" fill="#1a0dab" />
        <circle cx="21.2" cy="23.4" r="0.85" fill="#1a0dab" />
      </svg>
      <span className="flex min-w-0 flex-col gap-1">
        <span
          className={cn(
            "font-sans text-[0.7rem] leading-none font-semibold tracking-[0.16em] uppercase",
            light ? "text-cream" : "text-ink",
          )}
        >
          Local junk only
        </span>
        <span className={cn("h-px w-full", light ? "bg-fill" : "bg-rust")} />
      </span>
    </span>
  );
}
