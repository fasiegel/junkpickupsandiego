import { TruckMark } from "@/components/truck-mark";
import { cn } from "@/lib/utils";

export function SiteLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-rust text-cream">
        <TruckMark className="size-6" />
      </span>
      <span
        className={cn(
          "font-display text-[1.05rem] leading-[0.9] font-extrabold tracking-[0.08em] uppercase",
          light ? "text-cream" : "text-ink",
        )}
      >
        Local junk
        <span className={cn("block", light ? "text-fill" : "text-rust")}>only</span>
      </span>
    </span>
  );
}
