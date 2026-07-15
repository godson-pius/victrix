export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-black/25 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Let&apos;s build healthier communities together.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Reach out to learn more, partner with us, or support our work in Kicukiro.
          </p>
          <div className="mt-8 space-y-3 text-slate-300">
            <p>Email: hello@victrix.org</p>
            <p>Phone: +250 788 000 000</p>
            <p>Location: Kicukiro, Kigali, Rwanda</p>
          </div>
          <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/10 p-6">
            <h2 className="text-xl font-semibold">Newsletter Signup</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="rounded-full border border-white/10 bg-[#03110f] px-4 py-3 text-sm text-white outline-none" placeholder="Email address" />
              <button className="rounded-full bg-[#cba34e] px-5 py-3 text-sm font-semibold text-[#04110f]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#071a16]/80 p-6">
          <form className="space-y-4">
            <input className="w-full rounded-full border border-white/10 bg-[#03110f] px-4 py-3 text-sm outline-none" placeholder="Full name" />
            <input className="w-full rounded-full border border-white/10 bg-[#03110f] px-4 py-3 text-sm outline-none" placeholder="Email" />
            <textarea className="min-h-36 w-full rounded-[1.2rem] border border-white/10 bg-[#03110f] px-4 py-3 text-sm outline-none" placeholder="Your message" />
            <button className="rounded-full bg-[#2f7a5c] px-5 py-3 text-sm font-semibold text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
