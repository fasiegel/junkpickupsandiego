import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { rankListings, type VoteState } from "@/lib/votes";

type VoteContextValue = VoteState & {
  pending: string | null;
  error: string | null;
  vote: (slug: string) => void;
  rank: <T extends { slug: string; name: string }>(companies: T[]) => T[];
};

const VoteContext = createContext<VoteContextValue | null>(null);
const empty: VoteState = { counts: {}, mine: null };

async function requestVotes(slug?: string): Promise<VoteState> {
  const response = await fetch("/api/votes", {
    method: slug ? "POST" : "GET",
    credentials: "same-origin",
    headers: slug ? { "content-type": "application/json" } : undefined,
    body: slug ? JSON.stringify({ slug }) : undefined,
  });
  if (!response.ok) throw new Error("Vote failed");
  const body = (await response.json()) as VoteState;
  if (!body || typeof body !== "object" || !body.counts) throw new Error("Vote failed");
  return { counts: body.counts, mine: body.mine ?? null };
}

export function VoteProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VoteState>(empty);
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    requestVotes()
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
      error,
      vote: (slug) => {
        if (state.mine || pending) return;
        setError(null);
        setPending(slug);
        setState((current) => ({
          mine: slug,
          counts: { ...current.counts, [slug]: (current.counts[slug] ?? 0) + 1 },
        }));
        requestVotes(slug)
          .then((next) => setState(next))
          .catch(() => {
            setState((current) => ({
              mine: current.mine === slug ? null : current.mine,
              counts: {
                ...current.counts,
                [slug]: Math.max(0, (current.counts[slug] ?? 1) - 1),
              },
            }));
            setError("Could not save that vote. Try again.");
          })
          .finally(() => setPending(null));
      },
      rank: (companies) => rankListings(companies, state.counts),
    }),
    [state, pending, error],
  );

  return <VoteContext.Provider value={value}>{children}</VoteContext.Provider>;
}

const fallback: VoteContextValue = {
  counts: {},
  mine: null,
  pending: null,
  error: null,
  vote: () => undefined,
  rank: (companies) => companies,
};

export function useVotes() {
  return useContext(VoteContext) ?? fallback;
}
