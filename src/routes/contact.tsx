import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { companies } from "@/data/companies";
import groupLogo from "@/assets/ardhana-group.png";

import contactRegDesk from "@/assets/gallery/digital-gapki-reg-desk.jpeg";
import contactAgencyMentor from "@/assets/gallery/agency-mentoring.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Ardhana Group" },
      { name: "description", content: "Hubungi Ardhana Group dan seluruh unit bisnisnya untuk konsultasi proyek." },
      { property: "og:title", content: "Kontak Ardhana Group" },
      { property: "og:description", content: "Formulir konsultasi dan informasi kontak Ardhana Group." },
    ],
  }),
  component: Contact,
});

const TARGET_EMAIL = "Corporationardhana@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Ardhana Group (Umum)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Nama Pengirim": formData.name,
          "Alamat Email": formData.email,
          "No. Telepon / WhatsApp": formData.phone || "-",
          "Perusahaan / Instansi": formData.company || "-",
          "Divisi Yang Dituju": formData.service,
          "Isi Pesan": formData.message,
          _subject: `[Website Ardhana Group] Pesan dari ${formData.name} - ${formData.service}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
      } else {
        throw new Error(data.message || "Gagal mengirim pesan. Silakan coba kembali.");
      }
    } catch (err: any) {
      console.error("Gagal mengirim email:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "Terjadi kendala saat mengirim pesan. Anda dapat menghubungi langsung via email atau WhatsApp."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "Ardhana Group (Umum)",
      message: "",
    });
    setStatus("idle");
  };

  const mailtoFallback = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    `[Website Inquiry] ${formData.name} - ${formData.service}`
  )}&body=${encodeURIComponent(
    `Nama: ${formData.name}\nEmail: ${formData.email}\nPerusahaan: ${formData.company}\nTelepon: ${formData.phone}\nDivisi: ${formData.service}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <div>
      {/* HERO */}
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
          {/* Left: Hospitality & Registration Desk */}
          <div className="absolute -top-10 -left-12 w-80 md:w-[480px] h-72 sm:h-96 rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={contactRegDesk} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Right: Business Consultation & Mentoring */}
          <div className="absolute -top-10 -right-12 w-80 md:w-[480px] h-72 sm:h-96 rounded-3xl overflow-hidden opacity-20 dark:opacity-25 mix-blend-luminosity">
            <img src={contactAgencyMentor} alt="" className="w-full h-full object-cover scale-105" />
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
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-foreground mb-4 border border-border shadow-sm">
            <span>Konsultasi & Kemitraan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground tracking-tight">
            Mari <span className="text-gradient-group">berdiskusi</span> bersama kami.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ceritakan kebutuhan proyek dan visi bisnis Anda. Pesan Anda akan langsung terhubung ke email resmi{" "}
            <strong className="text-foreground font-semibold">{TARGET_EMAIL}</strong>.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-8">
        {/* Form Container */}
        <div className="lg:col-span-3">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-emerald-500/5 shadow-xl text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Pesan Berhasil Terkirim!</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                Terima kasih, <strong className="text-foreground font-semibold">{formData.name}</strong>. Pesan dan kebutuhan Anda telah diteruskan langsung ke email resmi{" "}
                <span className="text-blue-600 dark:text-sky-400 font-medium">{TARGET_EMAIL}</span>. Tim kami akan segera meninjau dan merespons dalam 1×24 jam kerja.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-group text-white px-6 py-3 font-semibold shadow-md hover:opacity-95 transition cursor-pointer"
                >
                  Kirim Pesan Lainnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-7 sm:p-9 space-y-5 border border-border shadow-lg"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Formulir Konsultasi</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Terkirim langsung ke {TARGET_EMAIL}</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {status === "error" && (
                <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-4 flex items-start gap-3 text-left">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-red-600 dark:text-red-400 mb-1">Pengiriman Terkendala</div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-2">{errorMessage}</p>
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                    >
                      Buka di Aplikasi Email Anda <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anda"
                    className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@perusahaan.com"
                    className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">
                    Perusahaan / Instansi <span className="text-xs text-muted-foreground font-normal">(opsional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama Perusahaan / Organisasi"
                    className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground">
                    No. Telepon / WhatsApp <span className="text-xs text-muted-foreground font-normal">(opsional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  Tertarik Berkolaborasi Dengan
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="Ardhana Group (Umum)">Ardhana Group (Konsultasi Umum Holding)</option>
                  {companies.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name} — {c.short}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  Pesan / Rincian Kebutuhan <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Ceritakan gambaran singkat proyek, timeline, atau kebutuhan solusi yang ingin Anda capai bersama Ardhana Group…"
                  className="w-full rounded-xl bg-card border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-group text-white px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:opacity-95 transition disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mengirimkan Pesan...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim ke Email Ardhana</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 border border-border shadow-md">
            <h3 className="font-bold text-base text-foreground mb-1">Informasi Kontak Langsung</h3>
            <InfoRow
              icon={<Mail className="w-4 h-4" />}
              label="Email Resmi"
              value={TARGET_EMAIL}
              href={`mailto:${TARGET_EMAIL}`}
            />
            <InfoRow
              icon={<Phone className="w-4 h-4" />}
              label="Telepon / WhatsApp"
              value="+62 811 789 2525"
              href="https://wa.me/628117892525"
            />
            <InfoRow
              icon={<MapPin className="w-4 h-4" />}
              label="Domisili & Kantor"
              value="Palembang, Indonesia"
            />
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-border shadow-md">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3.5 font-semibold">
              Unit Bisnis Ekosistem
            </div>
            <ul className="space-y-3">
              {companies.map((c) => (
                <li key={c.slug} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/60 transition">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-9 w-9 rounded-xl shrink-0 object-cover ring-1 ring-border shadow-sm"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{TARGET_EMAIL}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 group">
      <div className="h-9 w-9 rounded-xl bg-gradient-group text-white grid place-items-center shrink-0 shadow-sm">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition truncate">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
