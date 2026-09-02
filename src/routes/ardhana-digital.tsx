import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/CompanyPage";
import { getCompany } from "@/data/companies";

const c = getCompany("ardhana-digital")!;

export const Route = createFileRoute("/ardhana-digital")({
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
      backdrop={
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />
      }
    />
  ),
});
