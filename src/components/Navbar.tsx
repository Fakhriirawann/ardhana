import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { companies } from "@/data/companies";
import groupLogo from "@/assets/ardhana-group.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-gradient-to-b from-background/85 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMobile(false)}>
          <div className="h-9 w-9 rounded-xl overflow-hidden ring-1 ring-border shadow-md group-hover:scale-105 transition-transform duration-200">
            <img src={groupLogo} alt="Ardhana Group" className="h-full w-full object-cover" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Ardhana <span className="text-muted-foreground font-normal">Group</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/about">Tentang</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="px-3.5 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition flex items-center gap-1 text-sm font-medium">
              Our Companies <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full right-0 pt-2 w-80 z-50"
                >
                  <div className="glass-card rounded-2xl p-2 shadow-2xl border border-border bg-card/95 backdrop-blur-xl">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">
                      Unit Bisnis Ekosistem
                    </div>
                    {companies.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/${c.slug}` as string}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/80 transition group/item"
                      >
                        <div
                          className="h-10 w-10 rounded-xl p-0.5 shrink-0 overflow-hidden ring-1 ring-border shadow-sm"
                          style={{ background: c.gradient }}
                        >
                          <img
                            src={c.logo}
                            alt={c.name}
                            className="h-full w-full rounded-[10px] object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm text-foreground group-hover/item:text-primary transition truncate">
                            {c.name}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {c.short}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/gallery">Galeri</NavLink>
          <NavLink to="/contact">Kontak</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-group text-white text-sm font-medium shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:opacity-95 transition"
          >
            Konsultasi
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <MobileLink to="/" onClick={() => setMobile(false)}>Beranda</MobileLink>
              <MobileLink to="/about" onClick={() => setMobile(false)}>Tentang</MobileLink>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 mb-1 px-3">Our Companies</div>
              {companies.map((c) => (
                <MobileLink key={c.slug} to={`/${c.slug}`} onClick={() => setMobile(false)}>
                  {c.name}
                </MobileLink>
              ))}
              <MobileLink to="/gallery" onClick={() => setMobile(false)}>Galeri</MobileLink>
              <MobileLink to="/contact" onClick={() => setMobile(false)}>Kontak</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3.5 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition text-sm font-medium"
      activeProps={{ className: "px-3.5 py-1.5 rounded-lg text-foreground font-semibold bg-foreground/5 dark:bg-white/10 shadow-sm border border-border" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-3 py-2.5 rounded-lg text-foreground/80 hover:bg-muted/70 transition"
    >
      {children}
    </Link>
  );
}
