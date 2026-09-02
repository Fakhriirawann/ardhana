import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { companies, groupValues } from "@/data/companies";
import { leadership, heads } from "@/data/team";
import groupLogo from "@/assets/ardhana-group.png";

import aboutAmperaTeam from "@/assets/gallery/internal-ampera-night.jpeg";
import aboutDigicrew from "@/assets/gallery/internal-digicrew-group.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Ardhana Group" },
      { name: "description", content: "Sejarah, visi-misi, dan struktur Ardhana Group — holding tiga unit bisnis." },
      { property: "og:title", content: "Tentang Ardhana Group" },
      { property: "og:description", content: "Sejarah, visi-misi, dan struktur holding Ardhana Group." },
    ],
  }),
  component: About,
});

interface TimelineItem {
  year: string;
  phase: string;
  title: string;
  desc: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2025",
    phase: "Creative Foundation",
    title: "Pondasi Agensi Kreatif",
    desc: "Ardhana memulai perjalanannya dengan mendirikan Ardhana Agency, sebuah creative agency yang berfokus pada layanan branding, desain grafis, media kreatif, dan solusi pemasaran visual untuk membantu bisnis membangun identitas yang kuat.",
  },
  {
    year: "2026",
    phase: "Transformation to Holding Company",
    title: "Transformasi Menjadi Holding Company",
    desc: "Memasuki tahun 2026, Ardhana melakukan transformasi menjadi Ardhana Group, sebuah holding company yang menaungi berbagai unit bisnis di bidang Creative Agency, Digital Technology (SaaS), Event Organizer, Media, dan sektor bisnis lainnya dalam satu ekosistem yang saling terintegrasi.",
  },
  {
    year: "Future",
    phase: "Business Expansion",
    title: "Ekspansi Bisnis Berkelanjutan",
    desc: "Ardhana Group akan terus memperluas portofolio bisnis ke berbagai sektor potensial melalui inovasi, teknologi, dan kolaborasi. Fokus pengembangan meliputi solusi digital, pariwisata, media, edukasi, serta investasi untuk membangun ekosistem bisnis yang berkelanjutan dan memberikan dampak positif bagi masyarakat.",
  },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Dark background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(75% 65% at 50% 0%, rgba(37,99,235,0.3) 0%, transparent 70%), radial-gradient(40% 40% at 85% 20%, rgba(56,189,248,0.18) 0%, transparent 60%), linear-gradient(180deg, #0B2F52 0%, #0B1120 75%)",
          }}
        />
        {/* Light background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(75% 65% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(40% 40% at 85% 20%, rgba(56,189,248,0.14) 0%, transparent 60%), linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 80%)",
          }}
        />

        {/* Clear Ambient Photographic Silhouettes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Left: Ampera Night Team photo */}
          <div className="absolute -top-10 -left-12 w-96 md:w-[500px] h-80 sm:h-[420px] rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={aboutAmperaTeam} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Right: DigiCrew & Team gathering photo */}
          <div className="absolute -top-10 -right-12 w-96 md:w-[500px] h-80 sm:h-[420px] rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={aboutDigicrew} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={groupLogo}
            alt="Ardhana Group"
            className="mx-auto mb-6 h-20 w-20 md:h-24 md:w-24 rounded-3xl ring-2 ring-border shadow-2xl object-cover"
          />
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-foreground mb-5 border border-border shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8]" />
            <span>PT Ardhana Inovasi Grup</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground tracking-tight">
            Tiga unit, <span className="text-gradient-group">satu payung sinergi</span>.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ardhana Group adalah holding company yang menaungi berbagai unit bisnis dengan visi membangun ekosistem usaha yang saling terintegrasi — menghadirkan inovasi, menciptakan peluang, dan memberikan manfaat nyata.
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {[
          { label: "Visi", text: "Menjadi grup usaha terkemuka yang menciptakan dampak terukur melalui produk rekayasa teknologi, pengalaman acara berkesan, dan strategi komunikasi merek yang bernilai tinggi." },
          { label: "Misi", text: "Membangun dan menyinergikan unit-unit bisnis spesialis dengan standar eksekusi presisi, memberdayakan talenta terbaik, serta melayani mitra bisnis secara end-to-end dalam satu ekosistem terpadu." },
        ].map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">{v.label}</div>
            <p className="text-lg leading-relaxed text-foreground font-medium">{v.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Narrative & Timeline Section: LINI MASA ARDHANA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Intro Manifesto Card */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-[#38BDF8] mb-4 border border-border shadow-sm">
            <span># PT ARDHANA INOVASI GRUP · PACAK GALO, MANTAP NIAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-snug uppercase max-w-3xl mx-auto">
            Semua berawal dari sebuah keyakinan bahwa bisnis harus mampu memberikan manfaat,{" "}
            <span className="text-gradient-group">bukan sekadar keuntungan</span>.
          </h2>

          <div className="mt-8 grid gap-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-left glass-card p-6 sm:p-8 rounded-3xl border border-border shadow-xl bg-card/85 backdrop-blur-md">
            <p>
              Berangkat dari semangat tersebut, <strong className="text-foreground font-semibold">Ardhana Group</strong> didirikan dengan tujuan untuk membantu menjawab berbagai kebutuhan di berbagai bidang industri melalui inovasi, kolaborasi, dan pengembangan bisnis yang berkelanjutan.
            </p>
            <p>
              Seiring perjalanan, <strong className="text-foreground font-semibold">Ardhana Group</strong> berkembang menjadi sebuah holding company yang menaungi berbagai unit bisnis dengan visi membangun ekosistem usaha yang saling terintegrasi. Setiap langkah yang diambil berlandaskan pada komitmen untuk menghadirkan inovasi, menciptakan peluang, serta memberikan manfaat yang nyata bagi pelanggan, mitra, talenta, dan masyarakat.
            </p>
            <p className="pt-3 border-t border-border text-foreground font-medium italic">
              “Bagi Ardhana Group, kesuksesan bukan hanya diukur dari pertumbuhan perusahaan, tetapi juga dari dampak positif yang mampu diciptakan bagi masa depan.”
            </p>
          </div>
        </div>

        {/* LINI MASA ARDHANA */}
        <div>
          <SectionHeading center eyebrow="Lini Masa Ardhana" title="Perjalanan Transformasi & Ekspansi" />
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative mb-12 md:mb-16 pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-group md:-translate-x-1/2 ring-4 ring-background" />
                <div className={i % 2 === 1 ? "md:col-start-2 md:pl-8" : "md:pr-8 md:text-right"}>
                  <div
                    className="flex items-center gap-2 mb-1.5 flex-wrap"
                    style={{ justifyContent: i % 2 === 1 ? "flex-start" : "flex-end" }}
                  >
                    <span className="text-base font-bold text-gradient-group">{t.year}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium border border-border">
                      {t.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeading center eyebrow="Struktur Grup" title="Tiga unit bisnis, satu holding." />
        <div className="mt-12 flex flex-col items-center">
          <div className="glass-card rounded-2xl px-8 py-5 mb-8 text-center">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Parent · Corporate & Investment</div>
            <div className="text-2xl font-display font-bold">Ardhana Group</div>
          </div>
          <div className="w-px h-8 bg-gradient-group" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
            {companies.map((c) => (
              <div
                key={c.slug}
                className="rounded-2xl p-[1px] flex flex-col"
                style={{ background: c.gradient }}
              >
                <div className="rounded-2xl bg-card p-5 text-center flex flex-col flex-1">
                  <div className="h-12 w-12 rounded-xl mx-auto mb-3 overflow-hidden" style={{ background: c.gradient }}>
                    <img src={c.logo} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.short}</div>

                  {c.products && c.products.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Produk</div>
                      <div className="flex flex-col gap-2">
                        {c.products.map((p) => (
                          <div key={p.name} className="flex items-center gap-3 rounded-xl bg-background/50 p-2 text-left">
                            <div
                              className="h-9 w-9 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
                              style={{ background: p.logoBg }}
                            >
                              <img src={p.logo} alt={p.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold leading-tight">{p.name}</div>
                              <div className="text-[11px] text-muted-foreground leading-tight truncate">{p.tagline}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeading center eyebrow="Struktur Kepemimpinan" title="Orang-orang di balik Ardhana Group." desc="Tim inti yang mengarahkan strategi grup dan setiap unit bisnis." />

        <div className="mt-12">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">Board of Directors</div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {leadership.map((m, i) => (
              <motion.div
                key={m.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 text-center border border-border shadow-sm"
              >
                <div className="mx-auto mb-4 h-28 w-28 rounded-full overflow-hidden ring-2 ring-border">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="font-semibold text-lg text-foreground">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <div className="mt-2 inline-block text-[10px] uppercase tracking-widest text-gradient-group font-semibold">Ardhana {m.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center font-semibold">Managing Directors</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heads.map((m, i) => (
              <motion.div
                key={m.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 text-center border border-border shadow-sm"
              >
                <div className="mx-auto mb-4 h-24 w-24 rounded-full overflow-hidden ring-2 ring-border">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="font-semibold text-foreground">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <div className="mt-2 inline-block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Ardhana {m.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Nilai" title="Prinsip yang kami pegang." />
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {groupValues.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-semibold text-lg mb-1 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0B2F52 0%, #1E3A8A 60%, #2563EB 100%)" }}
        >
          <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Siap berkolaborasi dengan <span className="text-gradient-group">ekosistem Ardhana</span>?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Hubungi kami untuk mendiskusikan kebutuhan digital, event, maupun strategi komunikasi bisnis Anda bersama tim profesional kami.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition shadow-md"
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
