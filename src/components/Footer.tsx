import { Link } from "@tanstack/react-router";
import { companies } from "@/data/companies";
import { Mail, MapPin } from "lucide-react";
import groupLogo from "@/assets/ardhana-group.png";

const IgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const InIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-xl overflow-hidden ring-1 ring-white/20 shadow-md">
              <img src={groupLogo} alt="Ardhana Group" className="h-full w-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg">
              Ardhana <span className="text-muted-foreground font-normal">Group</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Holding yang memayungi tiga pilar unit bisnis spesialis di bidang rekayasa teknologi digital, manajemen acara, dan agensi kreatif — membentuk ekosistem sinergis yang melayani kebutuhan bisnis secara end-to-end.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a className="h-9 w-9 grid place-items-center rounded-xl glass-card text-muted-foreground hover:bg-muted hover:text-foreground transition border border-border" href="#" aria-label="Instagram">
              <IgIcon className="w-4 h-4" />
            </a>
            <a className="h-9 w-9 grid place-items-center rounded-xl glass-card text-muted-foreground hover:bg-muted hover:text-foreground transition border border-border" href="#" aria-label="LinkedIn">
              <InIcon className="w-4 h-4" />
            </a>
            <a className="h-9 w-9 grid place-items-center rounded-xl glass-card text-muted-foreground hover:bg-muted hover:text-foreground transition border border-border" href="mailto:Corporationardhana@gmail.com" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide">Anak Perusahaan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {companies.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className="hover:text-foreground transition">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition">Tentang Kami</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground transition">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition">Kontak</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground transition">Kebijakan Privasi</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition">Syarat & Ketentuan</Link></li>
            <li className="pt-4 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Ardhana Group. All rights reserved.</p>
          <p>Built with care in Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
