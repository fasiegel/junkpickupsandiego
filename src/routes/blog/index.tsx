import { createFileRoute, Link } from "@tanstack/react-router";
import { FredBlogGraphic } from "@/components/fred-blog-graphic";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Junk Removal Blog | Junk Removal Pick Up - San Diego Junk Removal Professionals" },
      {
        name: "description",
        content:
          "Notes on finding the best junk removal service in San Diego and on junk removal service prices from local haulers.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteShell>
      <PageHero
        kicker="Blog"
        title="Local notes on junk removal."
        lede="Dedicated to transparent up front pricing and service that makes you say wow!"
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
        actions={false}
      />
      <FredBlogGraphic />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ul className="space-y-8">
            {POSTS.map((post) => (
              <li key={post.slug}>
                <p className="text-sm text-taupe">{post.date}</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-wide text-ink uppercase">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="hover:text-rust"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
