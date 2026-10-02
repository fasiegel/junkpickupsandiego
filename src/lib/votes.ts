import { createServerFn } from "@tanstack/react-start";

export type VoteState = {
  counts: Record<string, number>;
  mine: string | null;
};

export const getListingVotes = createServerFn({ method: "GET" }).handler(async () => {
  const { readVotes } = await import("./votes.server");
  return readVotes();
});

export const voteForListing = createServerFn({ method: "POST" })
  .inputValidator((slug: string) => {
    if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
      throw new Error("Invalid listing");
    }
    return slug;
  })
  .handler(async ({ data }) => {
    const { castVote } = await import("./votes.server");
    return castVote(data);
  });

export function rankListings<T extends { slug: string; name: string }>(
  companies: T[],
  counts: Record<string, number>,
): T[] {
  return [...companies].sort((a, b) => {
    const votes = (counts[b.slug] ?? 0) - (counts[a.slug] ?? 0);
    if (votes !== 0) return votes;
    return a.name.localeCompare(b.name);
  });
}
