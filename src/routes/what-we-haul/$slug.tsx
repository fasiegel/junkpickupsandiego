import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/what-we-haul/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/haulers" });
  },
});
