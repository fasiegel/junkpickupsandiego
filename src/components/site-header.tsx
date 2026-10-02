import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/site-logo";
import { PARENT_NAME } from "@/lib/contact";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <p className="bg-ink px-4 py-2 text-center text-xs leading-snug text-cream sm:px-6 sm:text-sm">
        San Diego junk removal professionals, powered by {PARENT_NAME}.
      </p>
      <div className="border-b border-line/80 bg-sand/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex min-h-11 items-center text-ink" aria-label='Local "Junkers" Only, home'>
            <SiteLogo />
          </Link>

          <nav className="flex items-center gap-6" aria-label="Primary">
            <Link
              to="/haulers"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Haulers
            </Link>
            <Link
              to="/areas"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Service areas
            </Link>
            <Link
              to="/prices"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Prices
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-rust"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}