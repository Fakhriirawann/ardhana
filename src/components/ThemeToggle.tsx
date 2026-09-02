import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("ardhana-theme") as Theme | null) ?? "dark";
    setTheme(stored);
    applyTheme(stored);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("ardhana-theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`h-9 w-9 grid place-items-center rounded-lg border border-border text-foreground hover:bg-muted transition cursor-pointer ${className}`}
    >
      {mounted && theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />}
    </button>
  );
}
