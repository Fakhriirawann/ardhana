import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

// ============================================================================
// IMPORT DOKUMENTASI ASLI (Dapat Anda tambah/ganti sesuai kebutuhan)
// ============================================================================

// 1. Ardhana Digital (GAPKI Andalas, Registrasi Digital, QR Bukutamu, MoU Doremi)
import digitalBukutamuQr from "@/assets/gallery/digital-bukutamu-qr.jpeg";
import digitalGapkiRegDesk from "@/assets/gallery/digital-gapki-reg-desk.jpeg";
import digitalGapkiCrowd from "@/assets/gallery/digital-gapki-crowd.jpeg";
import digitalGapkiOperator from "@/assets/gallery/digital-gapki-operator.jpeg";
import digitalGapkiTeamReg from "@/assets/gallery/digital-gapki-team-reg.jpeg";
import digitalGapkiCrew from "@/assets/gallery/digital-gapki-crew.jpeg";
import digitalGapkiStage from "@/assets/gallery/digital-gapki-stage.jpeg";
import digitalMouDoremi from "@/assets/gallery/digital-mou-doremi.jpeg";
import digitalRelawanPajak from "@/assets/gallery/digital-relawan-pajak.jpeg";

// 2. Ardhana Agency (Promo Parfum Palembang, Mentoring, Creative Team)
import agencyPromoParfum from "@/assets/gallery/agency-promoparfum.jpeg";
import agencyMentoring from "@/assets/gallery/agency-mentoring.jpeg";
import agencyTeamCafe from "@/assets/gallery/agency-team-cafe.jpeg";
import agencySprintReview from "@/assets/gallery/agency-sprint-review.jpeg";

// 3. Internal & Tim Ardhana Group
import internalAmperaNight from "@/assets/gallery/internal-ampera-night.jpeg";
import internalRapatPanitia from "@/assets/gallery/internal-rapat-panitia.jpeg";
import internalLearnArdhana from "@/assets/gallery/internal-learn-ardhana.jpeg";
import internalDigicrewGroup from "@/assets/gallery/internal-digicrew-group.jpeg";
import internalPlanningSession from "@/assets/gallery/internal-planning-session.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Ardhana Group" },
      { name: "description", content: "Dokumentasi kegiatan, proyek, dan momen Ardhana Group beserta unit bisnisnya." },
      { property: "og:title", content: "Galeri — Ardhana Group" },
      { property: "og:description", content: "Dokumentasi kegiatan, proyek, dan momen Ardhana Group." },
    ],
  }),
  component: Gallery,
});

// ============================================================================
// PENGATURAN KATEGORI (Silakan edit / tambah / hapus kategori di bawah ini)
// ============================================================================
export const GALLERY_CATEGORIES = [
  "Semua",
  "Digital",
  "Agency",
  "Internal",
  // "Event", // <-- Hapus tanda komentar jika dokumentasi Ardhana Event sudah siap ditambahkan
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryPhoto {
  src: string;
  title: string;
  category: Exclude<GalleryCategory, "Semua">;
  desc: string;
}

// ============================================================================
// DAFTAR FOTO GALERI (Silakan edit judul, kategori, atau foto di bawah ini)
// ============================================================================
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // --- ARDHANA DIGITAL (Event-Tech, GAPKI, Bukutamu QR, MoU) ---
  {
    src: digitalBukutamuQr,
    title: "Sistem Registrasi Digital & QR Check-in Bukutamu",
    category: "Digital",
    desc: "Implementasi operasional check-in digital berbasis QR code dan pemindaian cepat pada meja registrasi delegasi.",
  },
  {
    src: digitalGapkiRegDesk,
    title: "Meja Registrasi Digital & Penerimaan Tamu GAPKI",
    category: "Digital",
    desc: "Penyambutan delegasi di meja registrasi digital Andalas Forum dengan sistem terintegrasi.",
  },
  {
    src: digitalGapkiCrowd,
    title: "Operasional Check-in Digital Delegasi Skala Besar",
    category: "Digital",
    desc: "Penanganan ribuan delegasi secara simultan dengan sistem database kehadiran real-time.",
  },
  {
    src: digitalGapkiOperator,
    title: "Koordinasi Operator & Pengawalan Sistem Registrasi",
    category: "Digital",
    desc: "Pengawasan operasional registrasi digital secara langsung oleh tim pengembang teknis.",
  },
  {
    src: digitalGapkiTeamReg,
    title: "Tim Operasional Registrasi Digital & Bukutamu",
    category: "Digital",
    desc: "Kesiapan personel teknis dan hospitality sistem registrasi digital di lokasi acara.",
  },
  {
    src: digitalGapkiCrew,
    title: "Panitia & Tim Pengembang Registrasi Digital GAPKI",
    category: "Digital",
    desc: "Formasi lengkap tim operasional sistem registrasi digital di venue acara.",
  },
  {
    src: digitalGapkiStage,
    title: "Display Digital & Panggung Utama Andalas Forum",
    category: "Digital",
    desc: "Visual display digital dan panggung utama konferensi di Ballroom Hotel Aryaduta.",
  },
  {
    src: digitalMouDoremi,
    title: "Penandatanganan Kerjasama Digital Doremi & Ardhana Corp",
    category: "Digital",
    desc: "Kesepakatan kemitraan strategis pengembangan ekosistem solusi teknologi dan digital.",
  },
  {
    src: digitalRelawanPajak,
    title: "Pengukuhan Relawan Pajak & Integrasi Sistem",
    category: "Digital",
    desc: "Dukungan sistem dan operasional digital pada agenda pengukuhan DJP & Renjani.",
  },

  // --- ARDHANA AGENCY (Promo Parfum Palembang, Mentoring, Creative Team) ---
  {
    src: agencyPromoParfum,
    title: "Evaluasi Strategi Brand Promo Parfum Palembang",
    category: "Agency",
    desc: "Sesi evaluasi perdana proyek branding, penataan konten, dan rencana pertumbuhan bersama klien.",
  },
  {
    src: agencyMentoring,
    title: "Sesi Business Mentoring & Talent Growth Ardhana Agency",
    category: "Agency",
    desc: "Pengembangan kapabilitas tim kreatif dan perumusan strategi agensi terkini.",
  },
  {
    src: agencyTeamCafe,
    title: "Creative Ideation & Brainstorming Tim Agency",
    category: "Agency",
    desc: "Diskusi konsep kampanye kreatif dan formulasi identitas visual di ruang kolaborasi.",
  },
  {
    src: agencySprintReview,
    title: "Review Materi Kampanye Kreatif & Performance",
    category: "Agency",
    desc: "Penyelarasan deliverable materi promosi dan strategi digital marketing lintas kanal.",
  },

  // --- INTERNAL & TIM ARDHANA GROUP ---
  {
    src: internalAmperaNight,
    title: "Momen Kebersamaan Tim di Jembatan Ampera Palembang",
    category: "Internal",
    desc: "Potret kebersamaan tim Ardhana Group dengan latar ikonik Jembatan Ampera di malam hari.",
  },
  {
    src: internalRapatPanitia,
    title: "Agenda Rapat Koordinasi Panitia Forum",
    category: "Internal",
    desc: "Rapat sinkronisasi agenda dan kesiapan teknis acara bersama jajaran panitia.",
  },
  {
    src: internalLearnArdhana,
    title: "Workshop Internal: Learn Together with Ardhana",
    category: "Internal",
    desc: "Program berbagi wawasan dan pelatihan internal untuk peningkatan kompetensi tim.",
  },
  {
    src: internalDigicrewGroup,
    title: "Sinergi Tim Edukasi & Digital Ardhana DigiCrew",
    category: "Internal",
    desc: "Sesi kebersamaan tim kreatif dan talenta muda ekosistem Ardhana.",
  },
  {
    src: internalPlanningSession,
    title: "Sesi Diskusi Strategis & Perencanaan Tim",
    category: "Internal",
    desc: "Pertemuan koordinasi terarah untuk merumuskan milestone proyek dan eksekusi tim.",
  },
];

function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Semua" ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === active);

  const countFor = (cat: GalleryCategory) =>
    cat === "Semua" ? GALLERY_PHOTOS.length : GALLERY_PHOTOS.filter((p) => p.category === cat).length;

  return (
    <div>
      {/* HEADER SECTION - Clean & Atmospheric with Real Photos */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 border-b border-border/50">
        {/* Dark background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(75% 65% at 50% 0%, rgba(37,99,235,0.22) 0%, transparent 70%), linear-gradient(180deg, rgba(11,47,82,0.6) 0%, transparent 100%)",
          }}
        />
        {/* Light background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(75% 65% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%), linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)",
          }}
        />

        {/* Clear Photographic Silhouettes in Header Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Left: Stage & Digital System Atmosphere */}
          <div className="absolute -top-10 -left-12 w-80 md:w-[480px] h-72 sm:h-96 rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={digitalGapkiStage} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Right: Creative Studio & Agency Team Atmosphere */}
          <div className="absolute -top-10 -right-12 w-80 md:w-[480px] h-72 sm:h-96 rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={agencyTeamCafe} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-[#38BDF8] mb-3">
            Dokumentasi & Arsip Visual
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Dokumentasi Momen & Karya
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Arsip kegiatan operasional, implementasi solusi digital, kolaborasi kreatif agensi, dan aktivitas tim Ardhana Group.
          </p>
        </div>
      </section>

      {/* FILTER & PHOTO GRID - Clean & Breathable */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border-border"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full font-semibold ${
                    isSelected ? "bg-primary-foreground/20 text-primary-foreground" : "bg-card text-muted-foreground border border-border"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((photo, i) => (
            <motion.button
              key={photo.title + i}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 8) * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-[11px] font-semibold text-sky-300 uppercase tracking-wider mb-1">
                  {photo.category}
                </span>
                <div className="text-sm font-semibold text-white leading-snug line-clamp-2">
                  {photo.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16 text-sm">
            Belum ada dokumentasi pada kategori ini.
          </p>
        )}
      </section>

      {/* LIGHTBOX MODAL - Clean & Simple */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl mx-auto"
            />
            <figcaption className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold block mb-1">
                {filtered[lightbox].category}
              </span>
              <h2 className="text-lg font-semibold">{filtered[lightbox].title}</h2>
              <p className="mt-1 text-sm text-white/70 max-w-xl mx-auto">{filtered[lightbox].desc}</p>
            </figcaption>
          </figure>
        </div>
      )}

      {/* BOTTOM CTA - Minimalist & Clean */}
      <section className="max-w-4xl mx-auto px-6 pb-20 pt-6">
        <div className="rounded-3xl border border-border bg-card/60 p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Ingin bermitra atau memulai proyek bersama?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Diskusikan kebutuhan teknologi digital, strategi kampanye kreatif, atau konsultasi bisnis bersama tim Ardhana Group.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

