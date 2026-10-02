import { Link } from "@tanstack/react-router";

export function FredBlogGraphic() {
  return (
    <Link
      to="/haulers/$slug"
      params={{ slug: "freds-junk-removal" }}
      className="group relative isolate block overflow-hidden bg-ink"
    >
      <img
        src="/images/fred-with-dolly.jpg"
        alt="Fred holding a dolly in front of his junk removal truck"
        className="aspect-[21/9] max-h-[28rem] w-full object-cover object-[center_40%] transition-transform duration-300 group-hover:scale-[1.02] sm:aspect-[2.4/1]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl items-end px-4 py-8 sm:px-6 sm:py-10">
        <p className="font-display text-4xl leading-[0.9] font-extrabold tracking-wide text-cream uppercase sm:text-6xl">
          Powered by
          <span className="mt-1 block text-rust">Fred’s Junk Removal</span>
        </p>
      </div>
    </Link>
  );
}
