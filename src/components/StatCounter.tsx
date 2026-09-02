import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center py-2 px-1">
      <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-group tracking-tight">
        {n}{suffix}
      </div>
      <div className="mt-2.5 text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
