import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FredBlogGraphic } from "@/components/fred-blog-graphic";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { getPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | Junk Pickup San Diego` : "Blog" },
      { name: "description", content: loaderData?.description ?? "" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero
        kicker={post.date}
        title={post.title}
        lede={post.description}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: "Post" },
        ]}
        actions={false}
      />
      <FredBlogGraphic />
      <article className="py-12">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-base leading-relaxed text-ink-soft sm:px-6">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p>
            <Link to="/prices" className="font-medium text-rust hover:underline">
              Average junk removal costs
            </Link>
            {" · "}
            <Link to="/haulers" className="font-medium text-rust hover:underline">
              All local haulers
            </Link>
            {" · "}
            <Link
              to="/haulers/$slug"
              params={{ slug: "freds-junk-removal" }}
              className="font-medium text-rust hover:underline"
            >
              Fred’s Junk Removal
            </Link>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
