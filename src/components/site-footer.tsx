import { Link } from "@tanstack/react-router";
import { MessageSquareText, Phone } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { PARENT_NAME, PHONE_DISPLAY, smsHref, telHref } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-20 text-cream sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div>
          <SiteLogo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-line">
            San Diego’s information source for local junk removal. A directory
            powered by {PARENT_NAME}. Listing a company is not an endorsement
            except where Fred’s is marked featured.
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-bold tracking-wide uppercase">Pages</p>
          <ul className="mt-3 space-y-2 text-sm text-line">
            <li>
              <Link to="/haulers" className="hover:text-cream">
                All haulers
              </Link>
            </li>
            <li>
              <Link to="/areas" className="hover:text-cream">
                ZIP codes and communities
              </Link>
            </li>
            <li>
              <Link to="/prices" className="hover:text-cream">
                Average prices
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cream">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/haulers/$slug" params={{ slug: "freds-junk-removal" }} className="hover:text-cream">
                Fred’s Junk Removal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-bold tracking-wide uppercase">
            Text Fred a picture
          </p>
          <p className="mt-3 text-sm leading-relaxed text-line">
            This guide is powered by {PARENT_NAME}. The fastest quote is a photo.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="primary">
              <a href={smsHref()}>
                <MessageSquareText />
                Text {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="cream">
              <a href={telHref()}>
                <Phone />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-soft">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-fill sm:px-6">
          © {new Date().getFullYear()} {PARENT_NAME}. Junk Pickup San Diego is an
          information directory. Photos and phone numbers come from each
          company’s own website when we could read them.
        </p>
      </div>
    </footer>
  );
}
