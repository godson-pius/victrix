export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
      <div className="surface-card grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Let&apos;s build healthier communities together.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Reach out to learn more, partner with us, or support our work in Kicukiro.
          </p>
          <div className="mt-8 space-y-3 text-[var(--muted)]">
            <p>Email: hello@victrix.org</p>
            <p>Phone: +250 788 000 000</p>
            <p>Location: Kicukiro, Kigali, Rwanda</p>
          </div>
          <div className="mt-8 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="text-xl font-semibold">Newsletter Signup</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--foreground)] outline-none" placeholder="Email address" />
              <button className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
          <form className="space-y-4">
            <input className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--foreground)] outline-none" placeholder="Full name" />
            <input className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--foreground)] outline-none" placeholder="Email" />
            <textarea className="min-h-36 w-full rounded-[1.2rem] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--foreground)] outline-none" placeholder="Your message" />
            <button className="rounded-full bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
