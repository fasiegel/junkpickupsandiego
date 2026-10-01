import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Company } from "@/lib/directory/companies";
import { coverageLabel } from "@/lib/directory/companies";

export function CompanyPhoto({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const photo = !src || failed ? "/images/dump-truck.jpg" : src;
  return (
    <img
      src={photo}
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
      className="group flex flex-col overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <CompanyPhoto
        src={company.images[0]}
        alt={`${company.name} junk removal`}
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold tracking-wide text-ink uppercase">
            {company.name}
          </h3>
          {company.featured ? (
            <span className="shrink-0 rounded-full bg-rust px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-cream uppercase">
              Featured
            </span>
          ) : null}
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-taupe">{company.blurb}</p>
        <p className="mt-3 text-xs font-medium tracking-wide text-ink-soft uppercase">
          {coverageLabel(company)}
          {company.phone ? ` · ${company.phone}` : ""}
        </p>
      </div>
    </Link>
  );
}
