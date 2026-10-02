import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Junk Removal Pick Up - San Diego Junk Removal Professionals";
const DESCRIPTION =
  "Junk removal pick up from San Diego junk removal professionals. Compare local haulers by neighborhood and ZIP. Powered by Fred’s Junk Removal.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#1a0dab" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-rust uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-wide text-ink uppercase">
          Page not found
        </h1>
        <p className="mt-4 text-taupe">
          That URL is not a service area or an item we haul. Text Fred a picture
          anyway — he will still quote it.
        </p>
        <p className="mt-8 flex justify-center gap-4 text-sm font-medium">
          <Link to="/" className="text-rust hover:text-rust-hover">
            Home
          </Link>
          <Link to="/areas" className="text-rust hover:text-rust-hover">
            Areas
          </Link>
          <Link to="/what-we-haul" className="text-rust hover:text-rust-hover">
            What we haul
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-sand font-sans text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
