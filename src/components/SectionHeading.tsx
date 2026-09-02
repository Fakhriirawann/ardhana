import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, desc, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? "mx-auto text-center flex flex-col items-center" : ""}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass-card px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/90 mb-4 border border-border shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] dark:bg-[#38BDF8] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{desc}</p>}
    </motion.div>
  );
}
