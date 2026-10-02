import { createFileRoute } from "@tanstack/react-router";
import { castVote, readVotes } from "@/lib/votes.server";

function json(body: unknown, cookie?: string, status = 200) {
  const headers = new Headers({ "content-type": "application/json" });
  if (cookie) headers.set("set-cookie", cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

export const Route = createFileRoute("/api/votes")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { state, cookie } = await readVotes(request);
        return json(state, cookie);
      },
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as { slug?: unknown } | null;
        const slug = body?.slug;
        if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
          return json({ error: "Invalid listing" }, undefined, 400);
        }
        const { state, cookie } = await castVote(request, slug);
        return json(state, cookie);
      },
    },
  },
});
