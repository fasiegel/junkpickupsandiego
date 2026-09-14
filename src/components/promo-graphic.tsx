import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smsHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type PromoGraphicProps = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  copy: string;
  variant?: "overlay" | "panel";
  flip?: boolean;
};

export function PromoGraphic({
  src,
  alt,
  kicker,
  title,
  copy,
  variant = "overlay",
  flip = false,
}: PromoGraphicProps) {
  if (variant === "panel") {
    return (
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl overflow-hidden lg:grid-cols-2">
          <img
            src={src}
            alt={alt}
            className={cn(
              "aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-96",
              flip && "lg:order-2",
            )}
          />
          <div
            className={cn(
              "flex flex-col justify-center bg-ink px-6 py-12 text-cream sm:px-10 sm:py-16",
              flip && "lg:order-1",
            )}
          >
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
              {kicker}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-wide uppercase sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-line">
              {copy}
            </p>
            <Button asChild size="lg" className="mt-8 w-fit">
              <a href={smsHref()}>
                <MessageSquareText />
                Text Fred a picture
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className={cn(
          "absolute inset-0",
          flip
            ? "bg-linear-to-l from-ink via-ink/80 to-ink/25"
            : "bg-linear-to-r from-ink via-ink/80 to-ink/25",
        )}
      />
      <div
        className={cn(
          "relative mx-auto flex max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
          flip && "justify-end",
        )}
      >
        <div className="max-w-lg">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
            {kicker}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-wide text-cream uppercase sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-line">{copy}</p>
          <Button asChild size="lg" className="mt-8">
            <a href={smsHref()}>
              <MessageSquareText />
              Text Fred a picture
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
