import { createHash } from "node:crypto";
import { getRequest } from "@tanstack/react-start/server";
import { getSql } from "@/lib/db";
import { getCompany } from "@/lib/directory/companies";

export type VoteState = {
  counts: Record<string, number>;
  mine: string | null;
};

function clientIp(): string {
  const request = getRequest();
  const headers = request?.headers;
  const forwarded = headers?.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    forwarded ||
    headers?.get("x-real-ip")?.trim() ||
    headers?.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function ipHash(): string {
  return createHash("sha256").update(clientIp()).digest("hex");
}

export async function readVotes(): Promise<VoteState> {
  const sql = await getSql();
  const hash = ipHash();
  const counts = await sql<{ slug: string; votes: number }>`
    select slug, count(*)::int as votes from listing_votes group by slug
  `;
  const mine = await sql<{ slug: string }>`
    select slug from listing_votes where ip_hash = ${hash} limit 1
  `;
  return {
    counts: Object.fromEntries(counts.map((row) => [row.slug, Number(row.votes)])),
    mine: mine[0]?.slug ?? null,
  };
}

export async function castVote(slug: string): Promise<VoteState> {
  if (!getCompany(slug)) throw new Error("Unknown listing");
  const sql = await getSql();
  const hash = ipHash();
  await sql`
    insert into listing_votes (ip_hash, slug)
    values (${hash}, ${slug})
    on conflict (ip_hash) do nothing
  `;
  return readVotes();
}
