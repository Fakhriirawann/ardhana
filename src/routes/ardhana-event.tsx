import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/CompanyPage";
import { getCompany } from "@/data/companies";

const c = getCompany("ardhana-event")!;

export const Route = createFileRoute("/ardhana-event")({
  head: () => ({
    meta: [
      { title: `${c.name} — ${c.tagline}` },
      { name: "description", content: c.description },
      { property: "og:title", content: c.name },
      { property: "og:description", content: c.description },
    ],
  }),
  component: () => <CompanyPage company={c} />,
});
