import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Target, Users, Zap } from "lucide-react";
import { companies, groupStats, groupValues, partners } from "@/data/companies";
import { CompanyCard } from "@/components/CompanyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import groupLogo from "@/assets/ardhana-group.png";
import goeventIcon from "@/assets/goevent-icon.png";
import goeventQrCheckin from "@/assets/gallery/goevent-qr-checkin.jpeg";
import heroAmpera from "@/assets/gallery/internal-ampera-night.jpeg";
import heroStage from "@/assets/gallery/digital-gapki-stage.jpeg";
import heroDigital from "@/assets/gallery/digital-bukutamu-qr.jpeg";
import heroAgency from "@/assets/gallery/agency-team-cafe.jpeg";

export const Route = createFileRoute("/")({
  component: Home,
});

const valueIcons = [ShieldCheck, Users, Zap, Target];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Dark theme background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(65% 65% at 20% 10%, rgba(37,99,235,0.38) 0%, transparent 60%), radial-gradient(55% 55% at 85% 20%, rgba(56,189,248,0.25) 0%, transparent 60%), linear-gradient(180deg, #0B2F52 0%, #0B1120 75%)",
          }}
        />
        {/* Light theme background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(65% 65% at 20% 10%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(55% 55% at 85% 20%, rgba(56,189,248,0.14) 0%, transparent 60%), linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 85%)",
          }}
        />

        {/* Ambient Photographic Silhouettes in Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Ampera Bridge Night Team Silhouette */}
          <div className="absolute -top-6 -left-8 w-96 md:w-[520px] h-80 sm:h-[420px] rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={heroAmpera} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-blue-500/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
          </div>

          {/* Right: GoEvent QR Digital Registration Atmosphere - Positioned clearly in open space */}
          <div className="absolute top-1/6 -right-8 w-[440px] md:w-[560px] h-96 sm:h-[440px] rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={goeventQrCheckin} alt="" className="w-full h-full object-cover object-left-top scale-105" />
            <div className="absolute inset-0 bg-gradient-to-bl from-background via-transparent to-blue-500/20" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
          </div>

          {/* Bottom-Center: Creative Team Ideation Silhouette */}
          <div className="absolute -bottom-10 left-1/4 w-96 md:w-[480px] h-64 rounded-3xl overflow-hidden opacity-15 dark:opacity-20 mix-blend-luminosity">
            <img src={heroAgency} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-foreground mb-6 border border-border shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2563EB] dark:bg-[#38BDF8] animate-pulse" />
              <span>Satu Ekosistem, Tiga Kekuatan Spesialis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-foreground">
              Membangun bisnis <br />
              yang <span className="text-gradient-group">berdampak nyata</span> lintas industri.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Ardhana Group adalah grup usaha terintegrasi yang menaungi tiga pilar spesialisasi:
              rekayasa produk digital, manajemen acara berstandar tinggi, dan agensi strategi merek.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-group text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:opacity-95 transition"
              >
                Tentang Ardhana <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#companies"
                className="inline-flex items-center gap-2 rounded-xl glass-card px-6 py-3 font-semibold text-foreground hover:bg-muted transition border border-border shadow-sm"
              >
                Jelajahi 3 Unit Bisnis
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-foreground">12<span className="text-[#2563EB] dark:text-[#38BDF8]">+</span></div>
                <div className="text-xs text-muted-foreground mt-1">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-foreground">250<span className="text-[#2563EB] dark:text-[#38BDF8]">+</span></div>
                <div className="text-xs text-muted-foreground mt-1">Proyek Terselesaikan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-foreground">80<span className="text-[#2563EB] dark:text-[#38BDF8]">+</span></div>
                <div className="text-xs text-muted-foreground mt-1">Mitra Korporat</div>
              </div>
            </div>
          </motion.div>

          {/* Ardhana Group logo showcase with decorative low-opacity backdrop card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center py-6 sm:py-10"
          >
            <div className="absolute inset-0 rounded-full bg-[#2563EB]/20 dark:bg-[#2563EB]/25 blur-3xl pointer-events-none" />

            {/* Decorative Backdrop Card: GoEvent QR Check-in with low opacity, offset outside so it is NOT covered */}
            <div className="absolute -top-8 -right-6 sm:-right-12 w-56 sm:w-64 h-48 sm:h-54 rounded-2xl overflow-hidden opacity-40 dark:opacity-35 rotate-6 border border-border/80 shadow-2xl pointer-events-none hidden sm:block ring-1 ring-border">
              <img src={goeventQrCheckin} alt="GoEvent QR Check-in" className="w-full h-full object-cover object-left" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white">
                GoEvent QR Check-in
              </div>
            </div>

            {/* Main Highlight Card: Ardhana Group Logo */}
            <div className="relative w-full max-w-md rounded-3xl p-2.5 bg-card/90 shadow-2xl ring-1 ring-border backdrop-blur-md z-10">
              <img
                src={groupLogo}
                alt="Ardhana Group"
                className="relative w-full rounded-[22px] shadow-inner object-cover"
              />

              {/* Floating Badge 1 - Top Left: Sinergi Ekosistem */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-5 -left-3 sm:-left-6 glass-card p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 bg-card/95 backdrop-blur-xl"
              >
                <div className="h-9 w-9 rounded-xl bg-gradient-group grid place-items-center text-white shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-xs font-semibold text-foreground">Sinergi Ekosistem</div>
                  <div className="text-[11px] text-blue-600 dark:text-[#38BDF8] font-medium">Digital · Event · Agency</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right: Standar Eksekusi */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -right-3 sm:-right-6 glass-card p-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 bg-card/95 backdrop-blur-xl"
              >
                <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 grid place-items-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-xs font-semibold text-foreground">Standar Eksekusi</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Presisi & Terpercaya</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="Tentang Kami"
            title={<>Payung yang menyatukan <span className="text-gradient-group">tiga unit bisnis</span>.</>}
            desc="Sejak berdiri, Ardhana Group fokus membangun bisnis yang saling melengkapi — sehingga setiap klien bisa mendapatkan solusi end-to-end dari satu ekosistem yang sama."
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-10 border border-border relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Visi Perusahaan</span>
              </div>
              <p className="text-base sm:text-lg text-foreground font-medium mb-6 leading-relaxed">
                Menjadi grup usaha terkemuka yang menciptakan dampak terukur melalui produk rekayasa teknologi, pengalaman acara berkesan, dan strategi komunikasi merek yang bernilai tinggi.
              </p>
              <div className="h-px w-full bg-border my-6" />
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">Misi Operasional</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Membangun dan menyinergikan tiga unit bisnis spesialis (Digital, Event, Agency) dengan standar eksekusi presisi, integritas tata kelola, dan komitmen hasil yang berkelanjutan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANIES */}
      <section id="companies" className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading
          center
          eyebrow="Our Companies"
          title={<>Tiga unit bisnis dalam <span className="text-gradient-group">satu ekosistem</span>.</>}
          desc="Setiap anak perusahaan berdiri dengan identitas dan keahliannya sendiri — namun berkolaborasi ketika klien membutuhkan solusi terintegrasi."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
          {companies.map((c, i) => (
            <CompanyCard key={c.slug} company={c} index={i} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="Nilai Kami" title="Yang kami pegang di setiap keputusan." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {groupValues.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition border border-border shadow-sm hover:shadow-lg"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-group grid place-items-center mb-4 text-white shadow-md shadow-blue-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-border shadow-xl">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-group opacity-10 dark:opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
            {groupStats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading center eyebrow="Mitra & Klien" title="Dipercaya oleh brand yang serius soal hasil." />
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div
              key={p}
              className="glass-card px-5 py-2.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:border-primary/40 hover:bg-muted transition duration-200 border border-border shadow-sm flex items-center gap-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] dark:bg-[#38BDF8]" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0B2F52 0%, #1E3A8A 60%, #2563EB 100%)" }}
        >
          <div className="absolute inset-0 bg-hero-glow opacity-70 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Punya proyek yang layak <span className="text-gradient-group">dieksekusi dengan serius</span>?
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto leading-relaxed">
              Ceritakan kebutuhan Anda — tim kami akan menghubungkan Anda dengan unit bisnis yang paling tepat untuk menghasilkan solusi terbaik.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-7 py-3.5 font-semibold hover:bg-slate-100 transition shadow-lg"
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
