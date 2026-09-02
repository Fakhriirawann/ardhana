import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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

function Contact() {
  const [sent, setSent] = useState(false);
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
            Ceritakan kebutuhan proyek dan visi bisnis Anda. Tim Ardhana Group akan merespons dalam 1×24 jam kerja.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-4 border border-border shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nama" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Perusahaan" name="company" />
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Tertarik dengan</label>
            <select className="w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Ardhana Group (umum)</option>
              {companies.map((c) => <option key={c.slug}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Pesan</label>
            <textarea rows={5} required className="w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Ceritakan singkat tentang proyek Anda…" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-group text-white px-5 py-3 font-medium shadow-md hover:opacity-95 transition">
            {sent ? "Pesan terkirim ✓" : <>Kirim pesan <Send className="w-4 h-4" /></>}
          </button>
        </motion.form>

        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-2xl p-6 space-y-4 border border-border shadow-md">
            <InfoRow icon={<Mail className="w-4 h-4" />} label="Email" value="hello@ardhanagroup.com" />
            <InfoRow icon={<Phone className="w-4 h-4" />} label="Telepon" value="+62 21 1234 5678" />
            <InfoRow icon={<MapPin className="w-4 h-4" />} label="Alamat" value="Jakarta, Indonesia" />
          </div>

          <div className="glass-card rounded-2xl p-6 border border-border shadow-md">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Kontak per unit</div>
            <ul className="space-y-3">
              {companies.map((c) => (
                <li key={c.slug} className="flex items-center gap-3">
                  <img src={c.logo} alt={c.name} className="h-8 w-8 rounded-lg shrink-0 object-cover ring-1 ring-border" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.slug}@ardhanagroup.com</div>
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

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-gradient-group text-white grid place-items-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
