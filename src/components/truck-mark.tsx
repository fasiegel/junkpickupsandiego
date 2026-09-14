import { cn } from "@/lib/utils";

export function TruckMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect x="2" y="10" width="10" height="11" rx="1.5" fill="currentColor" />
      <rect x="12" y="7" width="18" height="14" rx="1.5" fill="currentColor" />
      <rect x="4" y="12" width="6" height="4" rx="0.5" fill="var(--color-sand)" />
      <circle cx="8" cy="24" r="3" fill="currentColor" />
      <circle cx="23" cy="24" r="3" fill="currentColor" />
      <circle cx="8" cy="24" r="1.15" fill="var(--color-sand)" />
      <circle cx="23" cy="24" r="1.15" fill="var(--color-sand)" />
    </svg>
  );
}
