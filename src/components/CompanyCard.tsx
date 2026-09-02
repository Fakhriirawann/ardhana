import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Company } from "@/data/companies";

const divisionLabels: Record<string, string> = {
  "ardhana-digital": "Teknologi & Produk Digital",
  "ardhana-event": "Manajemen & Produksi Acara",
  "ardhana-agency": "Strategi Merek & Kreatif",
};

export function CompanyCard({ company, index = 0 }: { company: Company; index?: number }) {
  const role = divisionLabels[company.slug] || "Unit Bisnis";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-[1px] transition duration-300 shadow-lg hover:shadow-2xl"
      style={{ background: company.gradient }}
    >
      <Link
        to={`/${company.slug}`}
        className="rounded-3xl bg-card p-6 sm:p-7 h-full relative overflow-hidden flex flex-col justify-between"
      >
        {/* Ambient background glow */}
        <div
          className="absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-25 blur-3xl group-hover:opacity-50 transition duration-500 pointer-events-none"
          style={{ background: company.gradient }}
        />

        <div>
          {/* Header row */}
          <div className="relative flex items-start justify-between mb-5">
            <div
              className="h-14 w-14 rounded-2xl p-0.5 shadow-md overflow-hidden ring-1 ring-border shrink-0"
              style={{ background: company.gradient }}
            >
              <img src={company.logo} alt={company.name} className="h-full w-full object-cover rounded-[14px]" />
            </div>
            <div className="h-9 w-9 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:bg-accent/15 transition duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          {/* Division badge */}
          <div className="inline-block text-[11px] font-semibold uppercase tracking-wider mb-2.5 px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
            {role}
          </div>

          <h3 className="text-xl font-bold mb-2.5 tracking-tight text-foreground group-hover:text-primary transition">
            {company.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
            {company.short}
          </p>
        </div>

        {/* Footer info & tags */}
        <div className="relative pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {company.services.slice(0, 2).map((s) => (
              <span
                key={s.title}
                className="text-[11px] px-2 py-0.5 rounded-md bg-muted/80 text-muted-foreground border border-border/60 truncate max-w-[200px]"
              >
                {s.title}
              </span>
            ))}
          </div>

          <div className="text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 text-blue-600 dark:text-blue-400">
            <span>Jelajahi Divisi</span>
            <span>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
