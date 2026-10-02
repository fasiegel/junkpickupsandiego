import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COMPANIES } from "@/lib/directory/companies";
import { getListingVotes, rankListings, voteForListing, type VoteState } from "@/lib/votes";

type VoteContextValue = VoteState & {
  pending: string | null;
  vote: (slug: string) => void;
  rank: <T extends { slug: string; name: string }>(companies: T[]) => T[];
};

const VoteContext = createContext<VoteContextValue | null>(null);

function shuffle(slugs: string[]): string[] {
  const next = [...slugs];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function VoteProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VoteState>({ counts: {}, mine: null });
  const [pending, setPending] = useState<string | null>(null);
  const [zeroOrder, setZeroOrder] = useState<string[]>(() => COMPANIES.map((company) => company.slug));

  useEffect(() => {
    setZeroOrder(shuffle(COMPANIES.map((company) => company.slug)));
    let cancel = false;
    getListingVotes()
      .then((next) => {
        if (!cancel) setState(next);
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, []);

  const value = useMemo<VoteContextValue>(
    () => ({
      ...state,
      pending,
      vote: (slug) => {
        if (state.mine || pending) return;
        setPending(slug);
        voteForListing({ data: slug })
          .then((next) => setState(next))
          .catch(() => undefined)
          .finally(() => setPending(null));
      },
      rank: (companies) => rankListings(companies, state.counts, zeroOrder),
    }),
    [state, pending, zeroOrder],
  );

  return <VoteContext.Provider value={value}>{children}</VoteContext.Provider>;
}

const fallback: VoteContextValue = {
  counts: {},
  mine: null,
  pending: null,
  vote: () => undefined,
  rank: (companies) => companies,
};

export function useVotes() {
  return useContext(VoteContext) ?? fallback;
}
