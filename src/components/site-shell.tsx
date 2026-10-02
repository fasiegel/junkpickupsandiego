import type { ReactNode } from "react";
import { MessageSquareText, Phone } from "lucide-react";
import { CostBanner } from "@/components/cost-banner";
import { VoteProvider } from "@/components/vote-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { smsHref, telHref } from "@/lib/contact";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <VoteProvider>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <CostBanner />
        <SiteFooter />
        <MobileDock />
      </div>
    </VoteProvider>
  );
}

function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-sand/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" className="w-full">
          <a href={telHref()}>
            <Phone />
            Call
          </a>
        </Button>
        <Button asChild className="w-full">
          <a href={smsHref()}>
            <MessageSquareText />
            Text a picture
          </a>
        </Button>
      </div>
    </div>
  );
}
