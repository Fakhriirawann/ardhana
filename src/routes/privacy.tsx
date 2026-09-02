import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Kebijakan Privasi — Ardhana Group" },
      { name: "description", content: "Kebijakan privasi Ardhana Group tentang pengumpulan dan penggunaan data pengguna." },
      { property: "og:title", content: "Kebijakan Privasi — Ardhana Group" },
      { property: "og:description", content: "Bagaimana Ardhana Group mengelola dan melindungi data Anda." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Kebijakan Privasi" updated="26 Juli 2026">
      <p>
        Ardhana Group menghargai privasi Anda. Halaman ini menjelaskan bagaimana kami mengumpulkan,
        menggunakan, dan melindungi informasi yang Anda berikan melalui situs dan layanan kami.
      </p>
      <h2>Data yang kami kumpulkan</h2>
      <ul>
        <li>Informasi kontak yang Anda kirimkan melalui formulir (nama, email, perusahaan, pesan).</li>
        <li>Data teknis dasar seperti alamat IP dan tipe perangkat untuk keperluan keamanan & analitik.</li>
      </ul>
      <h2>Penggunaan data</h2>
      <p>Data digunakan untuk merespons permintaan Anda, meningkatkan layanan, serta keperluan komunikasi bisnis. Kami tidak menjual data Anda ke pihak ketiga.</p>
      <h2>Hak Anda</h2>
      <p>Anda dapat meminta akses, koreksi, atau penghapusan data pribadi Anda kapan saja melalui hello@ardhanagroup.com.</p>
    </LegalPage>
  ),
});
