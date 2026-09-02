import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Syarat & Ketentuan — Ardhana Group" },
      { name: "description", content: "Syarat dan ketentuan penggunaan situs dan layanan Ardhana Group." },
      { property: "og:title", content: "Syarat & Ketentuan — Ardhana Group" },
      { property: "og:description", content: "Ketentuan hukum yang mengatur penggunaan layanan Ardhana Group." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Syarat & Ketentuan" updated="26 Juli 2026">
      <p>
        Dengan mengakses situs Ardhana Group, Anda dianggap menyetujui syarat dan ketentuan berikut.
        Ketentuan dapat diperbarui sewaktu-waktu tanpa pemberitahuan sebelumnya.
      </p>
      <h2>Penggunaan konten</h2>
      <p>Seluruh materi di situs ini — logo, teks, gambar, dan aset — adalah milik Ardhana Group dan dilindungi hak cipta. Dilarang menyalin atau mendistribusikan ulang tanpa izin tertulis.</p>
      <h2>Layanan</h2>
      <p>Ruang lingkup, timeline, dan harga setiap kerja sama diatur dalam perjanjian tersendiri antara Ardhana Group (atau unit terkait) dengan klien.</p>
      <h2>Batasan tanggung jawab</h2>
      <p>Ardhana Group tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs ini di luar ruang lingkup perjanjian tertulis.</p>
      <h2>Hukum yang berlaku</h2>
      <p>Ketentuan ini tunduk pada hukum Republik Indonesia.</p>
    </LegalPage>
  ),
});
