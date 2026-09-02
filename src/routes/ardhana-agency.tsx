import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/CompanyPage";
import { getCompany } from "@/data/companies";

const c = getCompany("ardhana-agency")!;

export const Route = createFileRoute("/ardhana-agency")({
  head: () => ({
    meta: [
      { title: `${c.name} — ${c.tagline}` },
      { name: "description", content: c.description },
      { property: "og:title", content: c.name },
      { property: "og:description", content: c.description },
    ],
  }),
  component: () => (
    <CompanyPage
      company={c}
      backdrop={<div className="absolute inset-x-0 bottom-0 h-1/2 halftone-dots opacity-40 pointer-events-none" />}
    />
  ),
});
