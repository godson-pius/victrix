"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solution", href: "/#solution" },
  { label: "Team", href: "/team" },
  { label: "Challenges", href: "/challenges" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 mt-5 pb-5 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6">
          <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-[#061613]/80 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/victrix-logo.png" alt="Victrix logo" width={44} height={44} className="rounded-full" />
              <div>
                <p className="text-lg font-semibold tracking-[0.2em] text-white">VICTRIX</p>
                {/* <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Think Tank</p> */}
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-[#cba34e]">
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-[#cba34e]/50 hover:bg-white/10 md:hidden"
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

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? "mt-3 max-h-105 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="rounded-3xl border border-white/10 bg-[#061613]/95 p-3 shadow-xl shadow-black/30 backdrop-blur-xl">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl border border-transparent bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-[#cba34e]/40 hover:bg-white/10 hover:text-[#f1cd87]"
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

      <footer className="border-t border-white/10 bg-[#03110f]/90">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/victrix-logo.png" alt="Victrix logo" width={44} height={44} className="rounded-full" />
              <div>
                <p className="text-lg font-semibold tracking-[0.2em] text-white">VICTRIX</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Shaping the Future of African Progress</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Victrix advances healthier families and stronger communities through nutrition, technology, and local leadership in Kicukiro.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cba34e]">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.label}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cba34e]">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Email: hello@victrix.org</li>
              <li>Phone: +250 799 908 557</li>
              <li>Kicukiro, Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-500 sm:px-10 lg:px-16">
          © 2026 Victrix – Shaping the Future of African Progress.
        </div>
      </footer>
    </div>
  );
}
