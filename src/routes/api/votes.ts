import { createFileRoute } from "@tanstack/react-router";
import { castVote, readVotes } from "@/lib/votes.server";

function json(body: unknown, cookie?: string, status = 200) {
  const headers = new Headers({ "content-type": "application/json" });
  if (cookie) headers.set("set-cookie", cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

function backTo(request: Request): string {
  const referer = request.headers.get("referer");
  if (!referer) return "/";
  try {
    const path = new URL(referer).pathname;
    if (path.startsWith("/") && !path.startsWith("/api/")) return path;
  } catch {
    return "/";
  }
  return "/";
}

export const Route = createFileRoute("/api/votes")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { state, cookie } = await readVotes(request);
        return json(state, cookie);
      },
      POST: async ({ request }) => {
        const type = request.headers.get("content-type") ?? "";
        let slug = "";
        if (type.includes("application/json")) {
          const body = (await request.json().catch(() => null)) as { slug?: unknown } | null;
          if (typeof body?.slug === "string") slug = body.slug;
        } else {
          const form = await request.formData();
          slug = String(form.get("slug") ?? "");
        }
        if (!/^[a-z0-9-]+$/.test(slug)) {
          if (type.includes("application/json")) return json({ error: "Invalid listing" }, undefined, 400);
          return new Response(null, { status: 303, headers: { location: backTo(request) } });
        }
        const { state, cookie } = await castVote(request, slug);
        if (type.includes("application/json")) return json(state, cookie);
        const headers = new Headers({ location: backTo(request) });
        if (cookie) headers.set("set-cookie", cookie);
        return new Response(null, { status: 303, headers });
      },
    },
  },
});
