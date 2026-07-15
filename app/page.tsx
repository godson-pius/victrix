import Link from "next/link";
import { AnimatedStats } from "./components/animated-stats";

const stats = [
  { value: "14.3%", label: "Child Stunting Rate" },
  { value: "24-Month", label: "Target" },
  { value: "1,000+", label: "Families to Reach" },
  { value: "20+", label: "Community Partnerships" },
];

const features = [
  "Short social media-friendly videos",
  "Interactive cooking workshops",
  "Backyard farming seminars",
  "Community health education",
  "Women’s empowerment",
  "Technology-driven health education",
];

const benefits = [
  { title: "Low-income families", description: "Practical nutrition tools and food support for households under pressure." },
  { title: "Pregnant women", description: "Evidence-based guidance to protect maternal and fetal wellness." },
  { title: "Children under five", description: "Targeted nutrition education to reduce growth faltering." },
  { title: "Community Health Workers", description: "Digital and in-person support to extend outreach and trust." },
  { title: "Agricultural Officers", description: "Local coordination for gardens, training, and food security planning." },
];

const timeline = [
  "Planning",
  "Video Production",
  "Awareness Campaign",
  "Community Workshops",
  "Garden Seminars",
  "Monitoring & Evaluation",
];

const challenges = [
  {
    title: "Challenge 1 – Community Awareness",
    description: "Low awareness of nutritious, affordable meals and local food practices." ,
    research: "Families reported limited access to practical, culturally rooted nutrition information.",
    insight: "Short-form video content can quickly translate insight into habits.",
    solution: "Deploy mobile-first nutrition stories in Kinyarwanda and English.",
  },
  {
    title: "Challenge 2 – Household Food Security",
    description: "Limited backyard production and reliance on costly, low-quality staples.",
    research: "Small-space gardening and recycled container methods were highly feasible.",
    insight: "Hands-on demonstrations improve adoption significantly.",
    solution: "Launch backyard garden seminars using low-cost, local solutions.",
  },
  {
    title: "Challenge 3 – Women’s Voice and Leadership",
    description: "Women are central to household health but often underrepresented in local planning.",
    research: "Women-led learning circles increased trust, participation, and retention.",
    insight: "Community ownership grows when mothers lead the conversation.",
    solution: "Create women-centered peer-learning workshops and leadership pathways.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-6 py-20 shadow-2xl shadow-emerald-950/30 sm:px-10 lg:px-16 lg:py-28">
        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80"
          alt="Community health workers and families in a rural African setting"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04110f] via-[#04110f]/90 to-[#04110f]/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 lg:min-h-[85vh]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cba34e]/40 bg-white/10 px-4 py-2 text-sm text-amber-200 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#cba34e]" />
            Shaping the Future of African Progress.
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Empowering Families. Transforming Communities.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Through technology, education, agriculture, and community leadership, Victrix is helping vulnerable families in Kicukiro build healthier futures.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#about" className="rounded-full bg-[#cba34e] px-6 py-3 font-medium text-[#04110f] transition hover:-translate-y-1 hover:bg-[#e0b452]">
              Learn More
            </Link>
            <Link href="#solution" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
              Our Solution
            </Link>
            <Link href="/team" className="rounded-full border border-[#2f7a5c] bg-[#2f7a5c]/20 px-6 py-3 font-medium text-emerald-100 transition hover:-translate-y-1 hover:bg-[#2f7a5c]/35">
              Meet the Team
            </Link>
          </div>
          <div className="grid w-full gap-4 pt-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-[#f2d08b]">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-emerald-900/50 bg-white/10 p-8 shadow-xl shadow-emerald-950/20 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">About Victrix</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Mission in Motion</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our mission is to improve healthcare outcomes in Kigali, specifically Kicukiro, by uniting our passion for women&apos;s empowerment, community development, and agriculture with our skills in technology, innovation, and leadership, elevating the standard of health and empowering families to live healthier and stronger lives.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Women Empowerment", "✦"],
              ["Community Development", "◎"],
              ["Agriculture", "☘"],
              ["Technology", "⌘"],
            ].map(([title, icon]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#05211c]/80 p-6 transition hover:-translate-y-1 hover:border-[#cba34e]/50">
                <div className="text-3xl text-[#cba34e]">{icon}</div>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] border border-emerald-900/50 bg-[#081d19]/80 p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Problem Statement</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Child stunting is rising in Kicukiro.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              According to the Rwanda Demographic and Health Survey, the child stunting and chronic malnutrition rate in Kicukiro, Kigali, is on the rise—increasing from 10.7% in 2020 to 14.3% in 2025—signaling critical health and nutritional gaps among vulnerable families. This systemic issue persists due to fragmented community health infrastructure and limited women-led agricultural support initiatives.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0b2f28] to-[#03110f] p-6">
            <div className="flex items-end justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-slate-400">2020</p>
                <div className="mt-2 h-24 rounded-t-xl bg-gradient-to-t from-[#1f6551] to-[#5bc29a]" style={{ width: "40%" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-400">2025</p>
                <div className="mt-2 h-36 rounded-t-xl bg-gradient-to-t from-[#cba34e] to-[#f6d58d]" style={{ width: "44%" }} />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between pt-2 text-sm text-slate-300">
              <span>10.7%</span>
              <span>14.3%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Our Solution</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Project Nutri-Action Kicukiro</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The solution combines multimedia campaigns with practical community workshops to make nutrition education tangible, local, and sustainable.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Short Mobile Videos",
              body: "Short, engaging videos in Kinyarwanda and English teach mothers how to prepare nutritious, affordable meals using local ingredients. Videos are shared through WhatsApp, Facebook, television, village centers, and community meetings.",
            },
            {
              title: "Interactive Cooking Workshops",
              body: "Weekly hands-on cooking sessions where mothers prepare meals together, learn affordable recipes, taste healthy foods, and share practical nutrition knowledge.",
            },
            {
              title: "Backyard Garden Seminars",
              body: "Simple farming workshops teaching families how to grow vegetables using recycled containers, sacks, and small backyard spaces to improve nutrition and food security.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-[#cba34e]/40">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#071a16]/80 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">How It Works</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium sm:text-base">
            {[
              "Videos",
              "Community Invitation",
              "Weekend Workshops",
              "Cooking Demonstrations",
              "Healthier Families",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-full border border-emerald-900/50 bg-white/5 px-4 py-3">
                <span>{step}</span>
                {index < 5 ? <span className="text-[#cba34e]">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Features</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Designed for real community impact.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-lg text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-[#cba34e]/20 bg-gradient-to-br from-[#112724] to-[#071a16] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Why Victrix?</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A model built for engagement and lasting change.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We don&apos;t simply teach families—we empower them to lead healthier lives.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-[#071512]/80 p-6">
                <h3 className="text-xl font-semibold">Traditional Programs</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>• Long medical lectures</li>
                  <li>• Passive learning</li>
                  <li>• Low engagement</li>
                  <li>• Limited sustainability</li>
                </ul>
              </div>
              <div className="rounded-[1.4rem] border border-[#cba34e]/20 bg-[#0a241d]/80 p-6">
                <h3 className="text-xl font-semibold">Victrix</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>• Interactive multimedia</li>
                  <li>• Hands-on cooking</li>
                  <li>• Backyard farming</li>
                  <li>• Women leading change</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Beneficiaries</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Centering those most affected.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#071a16]/80 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Implementation Timeline</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {timeline.map((step) => (
              <div key={step} className="rounded-[1.25rem] border border-emerald-900/40 bg-white/5 p-4 text-center text-sm font-medium text-slate-200">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Impact</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Proof of progress in motion.</h2>
        </div>
        <AnimatedStats />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#081d19]/80 p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Prototype</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A compelling digital experience for community learning.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The prototype combines mobile-first storytelling, workshop planning, and nutrition education into a smooth experience that can be scaled with local partners.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0f342b] to-[#071312] p-4">
              <div className="rounded-[1rem] border border-white/10 bg-[#f8f5ea] p-4 text-[#04110f]">
                <div className="h-2 w-24 rounded-full bg-[#cba34e]" />
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded-full bg-slate-200" />
                  <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                  <div className="h-3 w-4/6 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0f342b] to-[#071312] p-4">
              <div className="rounded-[1rem] border border-white/10 bg-[#f8f5ea] p-4 text-[#04110f]">
                <div className="mx-auto h-36 w-24 rounded-[1.25rem] border border-slate-300 bg-white p-2">
                  <div className="h-full rounded-[0.8rem] bg-gradient-to-br from-[#1f6551] to-[#cba34e]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#081d19]/80 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">E-LAB Challenges</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-[1.4rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <p className="mt-3 text-slate-300">{challenge.description}</p>
                <p className="mt-4 text-sm text-slate-400">Research: {challenge.research}</p>
                <p className="mt-2 text-sm text-slate-400">Insight: {challenge.insight}</p>
                <p className="mt-2 text-sm text-emerald-200">Solution: {challenge.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
