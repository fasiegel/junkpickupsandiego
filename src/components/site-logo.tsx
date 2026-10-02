import { cn } from "@/lib/utils";

export function SiteLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1a0dab" />
        <path fill="#ffffff" d="M16 14.6Q13.2 9 16 4.6 18.8 9 16 14.6z" />
        <path fill="#ffffff" d="M16 14.6Q11 10 7.6 5.6 12.5 9.5 16 14.6z" />
        <path fill="#ffffff" d="M16 14.6Q21 10 24.4 5.6 19.5 9.5 16 14.6z" />
        <path fill="#ffffff" d="M16 14.8Q10 12 5.8 9.4 11 12.8 16 14.8z" />
        <path fill="#ffffff" d="M16 14.8Q22 12 26.2 9.4 21 12.8 16 14.8z" />
        <path
          fill="#ffffff"
          d="M14.8 26.2C15.1 22 15.6 18 15.4 15.2 16.2 15.4 17 15.4 17.8 15.2 17.5 18 17 22 16.8 26.2z"
        />
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
