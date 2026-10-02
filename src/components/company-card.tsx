import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Company } from "@/lib/directory/companies";
import { coverageLabel } from "@/lib/directory/companies";

export function CompanyPhoto({
  src,
  alt,
  className,
  mark = "SD",
}: {
  src?: string;
  alt: string;
  className?: string;
  mark?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`flex items-center justify-center bg-sand text-taupe ${className ?? ""}`} aria-hidden>
        <span className="font-display text-4xl font-bold tracking-wide">{mark}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      to="/haulers/$slug"
      params={{ slug: company.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
    >
      <CompanyPhoto
        src={company.images[0]}
        alt={`${company.name} junk removal`}
        className="aspect-[16/10] w-full bg-sand object-cover"
        mark={company.name
          .split(/\s+/)
          .slice(0, 2)
          .map((part) => part[0])
          .join("")
          .toUpperCase()}
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.65rem] leading-none font-bold tracking-wide text-ink">
            {company.name}
          </h3>
          {company.featured ? (
            <span className="shrink-0 rounded-full bg-ink px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-cream uppercase">
              Featured
            </span>
          ) : null}
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-taupe">{company.blurb}</p>
        <div className="mt-auto border-t border-line pt-3">
          <p className="text-sm text-ink-soft">{coverageLabel(company)}</p>
          {company.phone ? <p className="mt-1 text-sm font-medium text-ink">{company.phone}</p> : null}
        </div>
      </div>
    </Link>
  );
}
