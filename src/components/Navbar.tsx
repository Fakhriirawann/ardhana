import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight, Sparkles, Building2, Home, Info, Image as ImageIcon, Mail } from "lucide-react";
import { companies } from "@/data/companies";
import groupLogo from "@/assets/ardhana-group.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [desktopCompaniesOpen, setDesktopCompaniesOpen] = useState(false);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Scroll handler for background elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCompaniesOpen(false);
  }, [currentPath]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-gradient-to-b from-background/90 via-background/60 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="h-9 w-9 rounded-xl overflow-hidden ring-1 ring-border shadow-sm group-hover:scale-105 transition-transform duration-200 bg-muted flex items-center justify-center">
              <img src={groupLogo} alt="Ardhana Group" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-foreground leading-none">
                Ardhana <span className="text-muted-foreground font-normal">Group</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase font-semibold hidden xs:block mt-0.5">
                Corporate Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <NavLink to="/">Beranda</NavLink>
            <NavLink to="/about">Tentang</NavLink>

            {/* Desktop Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopCompaniesOpen(true)}
              onMouseLeave={() => setDesktopCompaniesOpen(false)}
            >
              <button
                className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1 text-sm font-medium cursor-pointer ${
                  companies.some((c) => currentPath.startsWith(`/${c.slug}`))
                    ? "text-foreground font-semibold bg-foreground/5 dark:bg-white/10 shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <span>Perusahaan</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {desktopCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full right-0 pt-2 w-80 z-50"
                  >
                    <div className="glass-card rounded-2xl p-2.5 shadow-2xl border border-border bg-card/95 backdrop-blur-2xl">
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
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

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-group text-white text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:opacity-95 transition"
            >
              <span>Konsultasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Actions (Theme Toggle & Hamburger Button) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="h-9 w-9 grid place-items-center rounded-xl border border-border text-foreground bg-card hover:bg-muted transition cursor-pointer shadow-sm"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-background/98 backdrop-blur-2xl border-b border-border shadow-2xl overflow-hidden"
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5 space-y-4">
                {/* Main Nav Links */}
                <div className="space-y-1">
                  <MobileNavItem
                    to="/"
                    icon={<Home className="w-4 h-4" />}
                    label="Beranda"
                    isActive={currentPath === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                  <MobileNavItem
                    to="/about"
                    icon={<Info className="w-4 h-4" />}
                    label="Tentang Kami"
                    isActive={currentPath.startsWith("/about")}
                    onClick={() => setMobileMenuOpen(false)}
                  />

                  {/* Mobile Companies Collapsible Section */}
                  <div className="rounded-2xl border border-border/80 bg-card/60 overflow-hidden my-1.5">
                    <button
                      onClick={() => setCompaniesOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-foreground hover:bg-muted/50 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-blue-600/10 text-blue-600 dark:text-sky-400 grid place-items-center">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span>Perusahaan</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          companiesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {companiesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-2 pb-2.5 space-y-1 border-t border-border/50 bg-background/40"
                        >
                          {companies.map((c) => {
                            const isSelected = currentPath === `/${c.slug}`;
                            return (
                              <Link
                                key={c.slug}
                                to={`/${c.slug}` as string}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-2.5 rounded-xl transition ${
                                  isSelected
                                    ? "bg-primary/10 text-primary font-semibold border border-primary/25"
                                    : "hover:bg-muted/70 text-foreground"
                                }`}
                              >
                                <div
                                  className="h-8 w-8 rounded-lg p-0.5 shrink-0 overflow-hidden ring-1 ring-border shadow-xs"
                                  style={{ background: c.gradient }}
                                >
                                  <img
                                    src={c.logo}
                                    alt={c.name}
                                    className="h-full w-full rounded-[6px] object-cover"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-sm font-semibold truncate">{c.name}</div>
                                  <div className="text-[11px] text-muted-foreground truncate">
                                    {c.short}
                                  </div>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileNavItem
                    to="/gallery"
                    icon={<ImageIcon className="w-4 h-4" />}
                    label="Galeri & Dokumentasi"
                    isActive={currentPath.startsWith("/gallery")}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                  <MobileNavItem
                    to="/contact"
                    icon={<Mail className="w-4 h-4" />}
                    label="Hubungi Kami"
                    isActive={currentPath.startsWith("/contact")}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>

                {/* Mobile Bottom CTA & Corporate Email */}
                <div className="pt-3 border-t border-border space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-group text-white py-3 px-4 font-semibold text-sm shadow-md shadow-blue-600/20 hover:opacity-95 transition cursor-pointer"
                  >
                    <span>Konsultasi Proyek Bersama Kami</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Email Resmi:{" "}
                      <a
                        href="mailto:Corporationardhana@gmail.com"
                        className="text-blue-600 dark:text-sky-400 font-medium hover:underline"
                      >
                        Corporationardhana@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay when mobile menu is active */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3.5 py-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition text-sm font-medium"
      activeProps={{
        className:
          "px-3.5 py-1.5 rounded-xl text-foreground font-semibold bg-foreground/5 dark:bg-white/10 shadow-sm border border-border",
      }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileNavItem({
  to,
  icon,
  label,
  isActive,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
        isActive
          ? "bg-primary/10 text-primary font-semibold border border-primary/25 shadow-xs"
          : "text-foreground hover:bg-muted/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-7 w-7 rounded-lg grid place-items-center ${
            isActive
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {icon}
        </div>
        <span>{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
    </Link>
  );
}
