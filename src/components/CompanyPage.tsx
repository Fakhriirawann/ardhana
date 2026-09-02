import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { type Company, getCompany } from "@/data/companies";
import { SectionHeading } from "@/components/SectionHeading";
import groupLogo from "@/assets/ardhana-group.png";

import digitalBgDesk from "@/assets/gallery/digital-gapki-reg-desk.jpeg";
import digitalBgQr from "@/assets/gallery/digital-bukutamu-qr.jpeg";
import agencyBgCafe from "@/assets/gallery/agency-team-cafe.jpeg";
import agencyBgPromo from "@/assets/gallery/agency-promoparfum.jpeg";

export function CompanyPage({ company, backdrop }: { company: Company; backdrop?: React.ReactNode }) {
  // Select dedicated real photo for division backdrop
  const divisionBgPhoto =
    company.slug === "ardhana-digital"
      ? digitalBgDesk
      : company.slug === "ardhana-agency"
      ? agencyBgCafe
      : null;

  const divisionBackdropCard =
    company.slug === "ardhana-digital"
      ? digitalBgQr
      : company.slug === "ardhana-agency"
      ? agencyBgPromo
      : null;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(60% 60% at 30% 0%, ${company.accent}55 0%, transparent 70%), radial-gradient(50% 50% at 100% 100%, ${company.accentSoft}44 0%, transparent 70%)`,
          }}
        />

        {/* Clear Ambient Photographic Silhouette tailored per division */}
        {divisionBgPhoto && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute -top-10 -right-10 w-[480px] md:w-[650px] h-[360px] md:h-[480px] rounded-3xl overflow-hidden opacity-25 mix-blend-luminosity">
              <img src={divisionBgPhoto} alt="" className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        )}

        {/* Backdrop dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {backdrop}
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center gap-2.5 rounded-full glass-card px-3.5 py-1.5 text-xs font-semibold mb-6 border border-border shadow-sm text-foreground"
            >
              <img src={groupLogo} alt="Ardhana Group" className="h-5 w-5 rounded-md object-cover ring-1 ring-border" />
              <span>An Ardhana Group Company</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">{company.name}</h1>
            <p className="mt-4 text-lg sm:text-xl font-semibold leading-relaxed" style={{ color: company.accent }}>
              {company.tagline}
            </p>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">{company.description}</p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl text-white px-6 py-3 font-semibold shadow-lg shadow-black/20 hover:opacity-95 transition"
                style={{ background: company.gradient }}
              >
                Konsultasi Proyek <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 font-semibold text-foreground hover:bg-muted transition border border-border shadow-sm">
                Lihat Layanan
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 dark:opacity-40 pointer-events-none" style={{ background: company.gradient }} />

            {/* Layered Backdrop real photo card behind division logo */}
            {divisionBackdropCard && (
              <div className="absolute -top-3 -right-3 sm:-right-5 w-44 sm:w-52 h-44 sm:h-52 rounded-2xl overflow-hidden opacity-70 hover:opacity-95 transition-opacity duration-300 rotate-6 border border-border shadow-2xl pointer-events-none hidden sm:block ring-1 ring-border">
                <img src={divisionBackdropCard} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>
            )}

            <div className="relative rounded-3xl p-2.5 bg-card/90 shadow-2xl ring-1 ring-border h-full z-10 backdrop-blur-md">
              <img src={company.logo} alt={company.name} className="h-full w-full object-cover rounded-[20px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Layanan"
          title={<>Apa yang <span style={{ color: company.accent }}>kami kerjakan</span>.</>}
        />
        <div className="mt-12 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {company.services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 border border-border hover:border-border/80 shadow-sm hover:shadow-xl group"
            >
              <div
                className="h-11 w-11 rounded-2xl mb-5 grid place-items-center text-white font-bold text-sm shadow-md"
                style={{ background: company.gradient }}
              >
                0{i + 1}
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground group-hover:text-primary transition">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      {company.products && company.products.length > 0 && (
        <section id="products" className="max-w-7xl mx-auto px-6 pb-4">
          <SectionHeading
            eyebrow="Produk"
            title={<>Produk <span style={{ color: company.accent }}>ekosistem kami</span>.</>}
            desc="Solusi teknologi proprietary yang kami rekayasa dan operasikan secara mandiri."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {company.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 border border-border hover:border-border/80 shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden grid place-items-center ring-1 ring-border shadow-md"
                    style={{ background: p.logoBg }}
                  >
                    <img src={p.logo} alt={p.name} className="h-full w-full object-contain p-2" />
                  </div>
                  <div>
                    {p.wordmark ? (
                      <img src={p.wordmark} alt={p.name} className="h-7 w-auto object-contain dark:invert light:invert-0" />
                    ) : (
                      <div className="text-2xl font-display font-bold text-foreground">{p.name}</div>
                    )}
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                      Proprietary Platform
                    </div>
                  </div>
                </div>
                <div className="mt-5 font-semibold text-base" style={{ color: company.accent }}>
                  {p.tagline}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-muted/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Portfolio" title="Proyek pilihan." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {company.portfolio.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] ring-1 ring-border shadow-lg hover:shadow-2xl transition duration-500"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1.5 text-sky-300"
                >
                  {p.category}
                </div>
                <div className="font-semibold text-lg sm:text-xl text-white leading-snug">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-[1px]"
          style={{ background: company.gradient }}
        >
          <div className="rounded-3xl bg-card border border-border p-10 md:p-14 text-center shadow-lg">
            <div className="flex justify-center gap-1 mb-6" style={{ color: company.accent }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">"{company.testimonial.quote}"</p>
            <div className="mt-6 text-sm">
              <div className="font-semibold text-foreground">{company.testimonial.author}</div>
              <div className="text-muted-foreground">{company.testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10"
          style={{ background: company.gradient }}
        >
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Siap mulai proyek bersama {company.name}?
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Hubungi tim kami untuk konsultasi awal dan ketahui bagaimana solusi kami dapat mendukung akselerasi bisnis Anda.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-7 py-3.5 font-bold shadow-xl hover:bg-slate-100 transition"
              >
                Mulai Konsultasi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Convenience wrapper for a route file */
export function makeCompanyRoute(slug: string) {
  const c = getCompany(slug)!;
  return function Page() {
    return <CompanyPage company={c} />;
  };
}
