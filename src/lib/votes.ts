export type VoteState = {
  counts: Record<string, number>;
  mine: string | null;
};

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
