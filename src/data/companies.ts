import digitalLogo from "@/assets/ardhana-digital.png";
import eventLogo from "@/assets/ardhana-event.png";
import agencyLogo from "@/assets/ardhana-agency.png";
import bukutamuLogo from "@/assets/bukutamu.jpg";
import goeventIcon from "@/assets/goevent-icon.png";

// Real photos for Ardhana Digital & Agency portfolios
import digitalBukutamuQr from "@/assets/gallery/digital-bukutamu-qr.jpeg";
import digitalGapkiCrowd from "@/assets/gallery/digital-gapki-crowd.jpeg";
import digitalMouDoremi from "@/assets/gallery/digital-mou-doremi.jpeg";
import agencyPromoParfum from "@/assets/gallery/agency-promoparfum.jpeg";
import agencyMentoring from "@/assets/gallery/agency-mentoring.jpeg";
import agencyTeamCafe from "@/assets/gallery/agency-team-cafe.jpeg";


export type CompanySlug = "ardhana-digital" | "ardhana-event" | "ardhana-agency";

export interface Product {
  name: string;
  tagline: string;
  desc: string;
  logo: string;
  wordmark?: string;
  logoBg: string;
  tags: string[];
}

export interface Company {
  slug: CompanySlug;
  name: string;
  tagline: string;
  short: string;
  description: string;
  logo: string;
  accent: string;
  accentSoft: string;
  gradient: string;
  services: { title: string; desc: string }[];
  products?: Product[];
  portfolio: { title: string; category: string; image: string }[];
  testimonial: { quote: string; author: string; role: string };
}


export const companies: Company[] = [
  {
    slug: "ardhana-digital",
    name: "Ardhana Digital",
    tagline: "Software house & rekayasa produk digital skala enterprise.",
    short: "Software house, pengembangan aplikasi web & mobile, serta solusi SaaS terintegrasi.",
    description:
      "Kami merekayasa solusi teknologi tangguh mulai dari platform enterprise, aplikasi web dan mobile berkinerja tinggi, hingga produk digital proprietary seperti Bukutamu dan GoEvent yang siap berskala tanpa mengorbankan kualitas arsitektur sistem.",
    logo: digitalLogo,
    accent: "#8B5CF6",
    accentSoft: "#A78BFA",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #93C5FD 100%)",
    services: [
      {
        title: "Custom Web & Mobile Development",
        desc: "Rekayasa aplikasi web dan mobile multi-platform yang responsif, aman, dan siap menangani jutaan pengguna aktif.",
      },
      {
        title: "Enterprise Systems & ERP",
        desc: "Sistem operasional kustom, automasi alur kerja korporat, dan dashboard business intelligence untuk efisiensi bisnis.",
      },
      {
        title: "Event Tech & Digital Solutions",
        desc: "Penyedia teknologi registrasi digital, sistem ticketing online, integrasi pembayaran, dan verifikasi kehadiran berbasis QR.",
      },
      {
        title: "Cloud Architecture, DevOps & AI",
        desc: "Infrastruktur cloud berkecepatan tinggi, integrasi model AI/machine learning cerdas, serta monitoring sistem 24/7.",
      },
    ],
    products: [
      {
        name: "Bukutamu",
        tagline: "Sistem buku tamu digital & registrasi tamu cerdas.",
        desc: "Registrasi dan check-in tamu instan menggunakan QR code, sinkronisasi data real-time, cetak badge otomatis, dan rekap analitik kehadiran tanpa kertas.",
        logo: bukutamuLogo,
        logoBg: "linear-gradient(160deg, #D62828 0%, #E88B14 100%)",
        tags: ["Guest Management", "QR Check-in", "Event Tech", "Real-time Analytics"],
      },
      {
        name: "GoEvent",
        tagline: "Platform manajemen tiket & registrasi acara terpadu.",
        desc: "Solusi end-to-end untuk penyelenggara acara: landing page instan, penjualan tiket multi-kategori, gateway pembayaran otomatis, hingga validasi tiket on-site yang cepat.",
        logo: goeventIcon,
        logoBg: "linear-gradient(160deg, #1D4E79 0%, #2E90C4 100%)",
        tags: ["Ticketing Platform", "Payment Gateway", "On-site Validation", "Event Dashboard"],
      },
    ],
    portfolio: [
      {
        title: "Sistem Registrasi Digital & QR Bukutamu (GAPKI Andalas Forum)",
        category: "Event-Tech Platform",
        image: digitalBukutamuQr,
      },
      {
        title: "Sistem Check-in & Database Kehadiran Ribuan Delegasi",
        category: "High-Capacity System",
        image: digitalGapkiCrowd,
      },
      {
        title: "Kemitraan Strategis Ekosistem Digital Doremi & Ardhana Corp",
        category: "Strategic Tech Partnership",
        image: digitalMouDoremi,
      },
    ],
    testimonial: {
      quote:
        "Ardhana Digital mengeksekusi arsitektur sistem kami dengan presisi luar biasa. Deliverable rapi, aman, dan performanya stabil saat lonjakan traffic tinggi.",
      author: "Raditya Prasetyo",
      role: "Chief Technology Officer, PaySolusi Indonesia",
    },
  },
  {
    slug: "ardhana-event",
    name: "Ardhana Event",
    tagline: "Event organizer & manajemen produksi acara berstandar tinggi.",
    short: "Penyelenggara acara korporat, brand activation, serta manajemen produksi panggung & multimedia.",
    description:
      "Dari konferensi korporat berskala nasional hingga peluncuran brand eksklusif, kami mengelola seluruh spektrum acara secara holistik — mulai dari konsep kreatif, koordinasi teknis, manajemen panggung, hingga tata visual pencahayaan berkelas.",
    logo: eventLogo,
    accent: "#F97316",
    accentSoft: "#FBBF24",
    gradient: "linear-gradient(135deg, #F97316 0%, #FBBF24 100%)",
    services: [
      {
        title: "Corporate Event & MICE",
        desc: "Konferensi nasional, RUPS tahunan, perayaan korporat, town hall, dan gala dinner dengan standar protokol ketat.",
      },
      {
        title: "Brand Activation & Launching",
        desc: "Aktivasi interaktif di ruang publik, roadshow eksklusif, dan peluncuran produk yang meninggalkan impresi mendalam.",
      },
      {
        title: "Stage, Sound & Visual Production",
        desc: "Konstruksi panggung kokoh, instalasi videotron LED wall ultra-HD, tata suara konser, dan pencahayaan panggung dramatis.",
      },
      {
        title: "Hybrid Event & Live Broadcast",
        desc: "Produksi siaran langsung multi-kamera, integrasi interaksi daring, dan perekaman dokumentasi sinematik berstandar broadcast.",
      },
    ],
    portfolio: [
      {
        title: "Indonesia Technology Summit 2025",
        category: "Corporate Conference",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Automotive Flagship Brand Launch",
        category: "Brand Activation",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "National Corporate Gala Celebration",
        category: "Stage & Multimedia",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
      },
    ],
    testimonial: {
      quote:
        "Manajemen lapangan Ardhana Event sangat tenang dan terstruktur. Ribuan peserta terlayani lancar, alur acara presisi, dan visual produksinya mengagumkan.",
      author: "Amanda Safira",
      role: "Head of Corporate Communications, Astraea Group",
    },
  },
  {
    slug: "ardhana-agency",
    name: "Ardhana Agency",
    tagline: "Agensi strategi merek, kampanye kreatif, dan akselerasi pertumbuhan.",
    short: "Perumusan identitas merek menyeluruh, kampanye kreatif 360°, dan performance marketing berbasis data.",
    description:
      "Kami menjembatani kekuatan ide kreatif dengan presisi strategi pemasaran modern. Dari diferensiasi positioning merek hingga kampanye periklanan digital yang terukur, kami membantu brand membangun loyalitas sekaligus mendongkrak omzet penjualan.",
    logo: agencyLogo,
    accent: "#3B82F6",
    accentSoft: "#EAB308",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #FFB703 100%)",
    services: [
      {
        title: "Brand Identity & Strategic Positioning",
        desc: "Riset segmentasi audiens, brand guideline komprehensif, desain logo berkarakter, dan tone of voice komunikasi.",
      },
      {
        title: "360° Creative Campaign & TVC Production",
        desc: "Pengembangan konsep kampanye terpadu lintas platform, produksi konten video komersial bernilai estetika tinggi.",
      },
      {
        title: "Performance Marketing & Paid Ads",
        desc: "Pengelolaan iklan berbayar (Meta, Google, TikTok Ads) yang dioptimasi secara agresif untuk mencapai target ROAS optimal.",
      },
      {
        title: "Social Media Growth & KOL Activation",
        desc: "Manajemen konten harian, kurasi kolaborasi influencer/KOL yang relevan, serta penguatan interaksi komunitas daring.",
      },
    ],
    portfolio: [
      {
        title: "Evaluasi Strategi Brand & Kampanye Promo Parfum Palembang",
        category: "Brand Strategy & Review",
        image: agencyPromoParfum,
      },
      {
        title: "Business Mentoring & Creative Talent Growth",
        category: "Mentorship & Growth",
        image: agencyMentoring,
      },
      {
        title: "Creative Ideation & Visual Campaign Direction",
        category: "Creative Direction",
        image: agencyTeamCafe,
      },
    ],
    testimonial: {
      quote:
        "Ardhana Agency tidak hanya menyajikan ide kreatif yang segar, tapi juga memahami cara menyelaraskan strategi konten dengan konversi nyata bagi brand kami.",
      author: "Rifky Apriyan",
      role: "Founder, Promo Parfum Palembang",
    },
  },
];

export const getCompany = (slug: string) => companies.find((c) => c.slug === slug);

export const groupStats = [
  { value: 12, suffix: "+", label: "Tahun Pengalaman" },
  { value: 250, suffix: "+", label: "Proyek Terselesaikan" },
  { value: 80, suffix: "+", label: "Mitra & Klien Korporat" },
  { value: 3, suffix: "", label: "Pilar Unit Bisnis" },
];

export const groupValues = [
  {
    title: "Integritas & Tata Kelola",
    desc: "Menjunjung transparansi, kepatuhan etika, dan akuntabilitas dalam setiap kemitraan bisnis.",
  },
  {
    title: "Sinergi Ekosistem",
    desc: "Tiga divisi tersinkronisasi untuk menghadirkan solusi menyeluruh tanpa sekat birokrasi.",
  },
  {
    title: "Presisi & Rekayasa Tinggi",
    desc: "Mengedepankan keunggulan teknis, inovasi terukur, dan detail eksekusi yang konsisten.",
  },
  {
    title: "Dampak Berkelanjutan",
    desc: "Fokus pada penciptaan nilai jangka panjang yang teruji dan memajukan bisnis para mitra.",
  },
];

export const partners = [
  "GAPKI (Gabungan Pengusaha Kelapa Sawit)",
  "BPDPKS",
  "Sinarmas",
  "Pertamina Lubricants",
  "United Tractors",
  "Bank Mandiri",
  "Bank BNI",
  "Bank Syariah Indonesia (BSI)",
  "Bank Sumsel Babel",
  "Direktorat Jenderal Pajak (DJP)",
  "Doremi",
  "Promo Parfum Palembang",
];
