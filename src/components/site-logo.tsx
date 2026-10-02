import { cn } from "@/lib/utils";

export function SiteLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1a0dab" />
        <path fill="#ffffff" d="M7.2 17.6V12.4h9.2l2.2-2.4h6.8v7.6H7.2z" />
        <path fill="#1a0dab" d="M18.5 12.2h4.2v2.6h-5.2l1-2.6z" />
        <circle cx="10.8" cy="20.6" r="2.15" fill="#ffffff" />
        <circle cx="21.4" cy="20.6" r="2.15" fill="#ffffff" />
        <circle cx="10.8" cy="20.6" r="0.9" fill="#1a0dab" />
        <circle cx="21.4" cy="20.6" r="0.9" fill="#1a0dab" />
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
