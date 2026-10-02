import { ThumbsUp } from "lucide-react";
import { useVotes } from "@/components/vote-provider";

export function VoteButton({ slug }: { slug: string }) {
  const { counts, mine, error } = useVotes();
  const voted = mine === slug;
  const used = mine !== null && !voted;
  const count = counts[slug] ?? 0;

  return (
    <form method="post" action="/api/votes" className="relative z-20">
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        disabled={voted || used}
        aria-pressed={voted}
        title={error ?? undefined}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-paper px-3 text-sm font-medium text-ink transition-colors hover:border-rust disabled:cursor-default disabled:opacity-70"
      >
        <ThumbsUp className={voted ? "size-4 fill-rust text-rust" : "size-4"} />
        <span>{count}</span>
        <span className="text-taupe">{voted ? "Voted" : used ? "Vote used" : "Thumbs up"}</span>
      </button>
    </form>
  );
}
