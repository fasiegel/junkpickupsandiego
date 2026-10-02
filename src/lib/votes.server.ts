import { createHash, randomBytes } from "node:crypto";
import { getSql } from "@/lib/db";
import { getCompany } from "@/lib/directory/companies";

export type VoteState = {
  counts: Record<string, number>;
  mine: string | null;
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    forwarded ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    ""
  );
}

function sharedAddress(ip: string): boolean {
  if (!ip || ip === "unknown" || ip === "::1" || ip.startsWith("127.") || ip.startsWith("10.")) {
    return true;
  }
  if (ip.startsWith("192.168.") || ip.startsWith("169.254.")) return true;
  const match = /^172\.(\d+)\./.exec(ip);
  if (!match) return false;
  const block = Number(match[1]);
  return block >= 16 && block <= 31;
}

function readCookie(request: Request): string | undefined {
  const raw = request.headers.get("cookie") ?? "";
  return /(?:^|;\s*)voter=([a-f0-9]{32})/.exec(raw)?.[1];
}

function voter(request: Request): { key: string; cookie?: string } {
  const ip = clientIp(request);
  if (!sharedAddress(ip)) {
    return { key: createHash("sha256").update(`ip:${ip}`).digest("hex") };
  }
  let token = readCookie(request);
  let cookie: string | undefined;
  if (!token) {
    token = randomBytes(16).toString("hex");
    cookie = `voter=${token}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax`;
  }
  return { key: createHash("sha256").update(`browser:${token}`).digest("hex"), cookie };
}

async function load(key: string): Promise<VoteState> {
  const sql = await getSql();
  const counts = await sql<{ slug: string; votes: number }>`
    select slug, count(*)::int as votes from listing_votes group by slug
  `;
  const mine = await sql<{ slug: string }>`
    select slug from listing_votes where ip_hash = ${key} limit 1
  `;
  return {
    counts: Object.fromEntries(counts.map((row) => [row.slug, Number(row.votes)])),
    mine: mine[0]?.slug ?? null,
  };
}

export async function readVotes(request: Request): Promise<{ state: VoteState; cookie?: string }> {
  const id = voter(request);
  return { state: await load(id.key), cookie: id.cookie };
}

export async function castVote(
  request: Request,
  slug: string,
): Promise<{ state: VoteState; cookie?: string }> {
  if (!getCompany(slug)) throw new Error("Unknown listing");
  const id = voter(request);
  const sql = await getSql();
  await sql`
    insert into listing_votes (ip_hash, slug)
    values (${id.key}, ${slug})
    on conflict (ip_hash) do nothing
  `;
  return { state: await load(id.key), cookie: id.cookie };
}
