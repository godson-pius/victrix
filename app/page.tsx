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

const stuntingTrend = [
  { year: "2020", rate: 10.7, color: "from-[#1f6551] to-[#5bc29a]" },
  { year: "2025", rate: 14.3, color: "from-[#cba34e] to-[#f6d58d]" },
];

const chartMax = Math.ceil(Math.max(...stuntingTrend.map((point) => point.rate)) / 5) * 5;
const trendIncrease = (stuntingTrend[1].rate - stuntingTrend[0].rate).toFixed(1);

const challengePreview = [
  {
    title: "Challenge 01: Introduction",
    description:
      "Each member of the team created an elevator pitch and a group statement outlining what we hope to gain from E-LAB.",
    findings:
      "The team quickly built rapport and alignment around project goals, which improved collaboration and idea generation.",
    insight: "Shared goals and clear communication strengthen team cohesion and accountability.",
  },
  {
    title: "Challenge 02: Discover Africa",
    description:
      "We selected an African community and shared untold stories, misconceptions, and unique strengths through creative media.",
    findings:
      "Our exploration of the Kamba people of Kenya highlighted resilience, cultural richness, and community-driven development.",
    insight: "Storytelling can raise awareness, inspire empathy, and motivate practical action.",
  },
  {
    title: "Challenge 03: HELP-LAB",
    description:
      "We chose a cause, acted in the community, and documented our impact journey through video.",
    findings:
      "Helping someone return home from hospital showed how meaningful small acts of care can be.",
    insight: "Hands-on community action builds trust and turns learning into real impact.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-6 py-20 shadow-2xl shadow-emerald-950/30 sm:px-10 lg:px-16 lg:py-28">
        <img
          src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Rwandan children in a community learning environment"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04110f]/70 via-[#04110f]/45 to-[#04110f]/25" />
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
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-100/80">Stunting Trend</p>
              <p className="rounded-full border border-[#cba34e]/30 bg-[#cba34e]/10 px-3 py-1 text-xs font-medium text-[#f2d08b]">
                +{trendIncrease} percentage points
              </p>
            </div>

            <div className="mt-5 grid h-56 grid-cols-[auto_1fr] gap-4">
              <div className="flex h-full flex-col justify-between pb-7 text-[11px] text-slate-400">
                {[chartMax, chartMax - 5, chartMax - 10, 0].map((tick) => (
                  <span key={tick}>{tick}%</span>
                ))}
              </div>

              <div className="relative h-full">
                <div className="absolute inset-0 flex flex-col justify-between pb-7">
                  {[0, 1, 2, 3].map((line) => (
                    <div key={line} className="border-t border-white/10" />
                  ))}
                </div>

                <div className="relative z-10 flex h-full items-end justify-around gap-4 pb-7">
                  {stuntingTrend.map((point) => (
                    <div key={point.year} className="flex w-full max-w-[110px] flex-col items-center">
                      <div
                        className={`w-full rounded-t-2xl bg-gradient-to-t ${point.color} shadow-lg shadow-black/25`}
                        style={{ height: `${(point.rate / chartMax) * 100}%` }}
                        role="img"
                        aria-label={`${point.year} child stunting rate ${point.rate}%`}
                      />
                      <p className="mt-2 text-sm font-medium text-slate-200">{point.year}</p>
                      <p className="text-xs text-[#f2d08b]">{point.rate}%</p>
                    </div>
                  ))}
                </div>
              </div>
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
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-[#0f342b] to-[#071312] p-4">
              <div className="rounded-2xl border border-white/10 bg-[#f8f5ea] p-4 text-[#04110f]">
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
                  <div className="h-full rounded-[0.8rem] bg-linear-to-br from-[#1f6551] to-[#cba34e]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="rounded-4xl border border-white/10 bg-[#081d19]/80 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">E-LAB Challenges</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Three highlights from our challenge journey.</h2>
            </div>
            <Link
              href="/challenges"
              className="inline-flex w-fit items-center rounded-full border border-[#cba34e]/40 bg-[#cba34e]/10 px-5 py-2.5 text-sm font-medium text-[#f2d08b] transition hover:-translate-y-0.5 hover:bg-[#cba34e]/20"
            >
              View All Challenges
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {challengePreview.map((challenge) => (
              <div key={challenge.title} className="rounded-[1.4rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <p className="mt-3 text-slate-300">{challenge.description}</p>
                <p className="mt-4 text-sm text-slate-400">Research findings: {challenge.findings}</p>
                <p className="mt-2 text-sm text-emerald-200">Key insight: {challenge.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
