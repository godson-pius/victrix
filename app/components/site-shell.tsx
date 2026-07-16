"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solution", href: "/#solution" },
  { label: "Team", href: "/team" },
  { label: "Challenges", href: "/challenges" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

type Theme = "dark" | "light";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("victrix-theme") as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme ?? (prefersLight ? "light" : "dark");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("victrix-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 mt-5 pb-5 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6">
          <div className="surface-panel flex w-full items-center justify-between rounded-full px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/victrix-logo.png" alt="Victrix logo" width={44} height={44} className="rounded-full" />
              <div>
                <p className="text-lg font-semibold tracking-[0.2em] text-[var(--foreground)]">VICTRIX</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--surface)]"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-pressed={theme === "light"}
              >
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="4.2" />
                    <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.3 13.9A8.6 8.6 0 1 1 10.1 3.7a6.8 6.8 0 1 0 10.2 10.2Z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 rotate-45" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 -rotate-45" : ""}`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? "mt-3 max-h-105 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="surface-card rounded-3xl p-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl border border-transparent bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 px-3 py-6 sm:px-4 lg:px-6">{children}</main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]/90">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/victrix-logo.png" alt="Victrix logo" width={44} height={44} className="rounded-full" />
              <div>
                <p className="text-lg font-semibold tracking-[0.2em] text-[var(--foreground)]">VICTRIX</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Shaping the Future of African Progress</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              Victrix advances healthier families and stronger communities through nutrition, technology, and local leadership in Kicukiro.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {navItems.map((item) => (
                <li key={item.label}><Link href={item.href} className="transition hover:text-[var(--foreground)]">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>Email: hello@victrix.org</li>
              <li>Phone: +250 799 908 557</li>
              <li>Kicukiro, Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] px-6 py-4 text-center text-sm text-[var(--muted)] sm:px-10 lg:px-16">
          © 2026 Victrix – Shaping the Future of African Progress.
        </div>
      </footer>
    </div>
  );
}
