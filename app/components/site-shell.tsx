import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 flex justify-center backdrop-blur-xl mt-5 pb-5">
        <div className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-[#061613]/80 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6 lg:mx-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
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
              <li>Phone: +250 788 000 000</li>
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
