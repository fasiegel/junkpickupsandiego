import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/what-we-haul/")({
  beforeLoad: () => {
    throw redirect({ to: "/haulers" });
  },
});
