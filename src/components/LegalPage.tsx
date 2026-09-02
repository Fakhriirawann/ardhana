import { motion } from "framer-motion";
import groupLogo from "@/assets/ardhana-group.png";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-10 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={groupLogo}
            alt="Ardhana Group"
            className="mx-auto mb-6 h-20 w-20 rounded-2xl ring-1 ring-border shadow-lg object-cover"
          />
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gradient-group">{title}</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Terakhir diperbarui: {updated}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-border shadow-sm dark:prose-invert max-w-none text-sm leading-relaxed space-y-5 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:text-foreground [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted-foreground [&_ul]:space-y-1">
          {children}
        </div>
      </section>
    </div>
  );
}
