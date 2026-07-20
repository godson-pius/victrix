import Link from "next/link";

const seminarDates = [
  {
    title: "Family Nutrition Bootcamp",
    date: "Sat, Aug 10",
    time: "09:00 - 12:00",
    location: "Kicukiro Community Center",
    seats: "38 seats left",
  },
  {
    title: "Backyard Garden Starter Lab",
    date: "Wed, Aug 14",
    time: "16:00 - 18:00",
    location: "Nyarugunga Learning Hub",
    seats: "22 seats left",
  },
  {
    title: "Healthy Meals on a Budget",
    date: "Sat, Aug 24",
    time: "10:00 - 13:00",
    location: "Kigali Family Hall",
    seats: "41 seats left",
  },
];

const tutorials = [
  {
    title: "Protein-Rich Breakfast in 12 Minutes",
    length: "12 min",
    level: "Beginner",
    href: "https://www.youtube.com/watch?v=dLairfd8bZU",
    description:
      "A simple and affordable morning recipe for children and parents using common local ingredients.",
  },
  {
    title: "Nutrition for Pregnant Mothers",
    length: "18 min",
    level: "Intermediate",
    href: "https://www.youtube.com/watch?v=FpG9OCD5G1g",
    description:
      "Evidence-informed guidance on meal balance, hydration, and weekly food planning.",
  },
  {
    title: "Kitchen Gardening for Small Spaces",
    length: "15 min",
    level: "Beginner",
    href: "https://www.youtube.com/watch?v=S1C_XmNF6AM",
    description:
      "How to grow nutrient-dense vegetables in sacks, containers, and compact backyard plots.",
  },
];

const learningTracks = [
  {
    title: "Mothers and Caregivers",
    focus: "Practical meal planning, child feeding schedules, and food safety routines.",
  },
  {
    title: "Community Health Workers",
    focus: "Communication tools, demo facilitation, and neighborhood follow-up methods.",
  },
  {
    title: "Youth Volunteers",
    focus: "Digital storytelling, outreach support, and workshop logistics leadership.",
  },
  {
    title: "Household Garden Champions",
    focus: "Seasonal planting cycles, compost basics, and nutrition-first harvesting.",
  },
];

export default function ResourcePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 sm:px-10 lg:px-16">
      <section className="surface-card relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-strong)/90 px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-(--accent)/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-(--secondary)/20 blur-3xl" />
        <div className="relative">
          <p className="text-(--accent) text-sm uppercase tracking-[0.3em]">Resource Library</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Learn nutrition, join workshops, and register for upcoming family seminars.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-(--muted)">
            Our resource hub is a living library for Kigali families. Explore step-by-step video tutorials,
            reserve your seat in community cooking sessions, and keep learning through guided seminar tracks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#seminars"
              className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-contrast) transition hover:-translate-y-0.5 hover:bg-(--accent-strong)"
            >
              Register for Seminars
            </a>
            <a
              href="#videos"
              className="rounded-full border border-(--border) bg-(--surface-soft) px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-(--surface)"
            >
              Watch Tutorials
            </a>
          </div>
        </div>
      </section>

      <section id="seminars" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card rounded-[1.75rem] border border-(--border) bg-(--surface-strong)/95 p-6 sm:p-8">
          <p className="text-(--accent) text-sm uppercase tracking-[0.3em]">Upcoming Seminars</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Reserve your seat and learn together.</h2>
          <div className="mt-6 grid gap-4">
            {seminarDates.map((seminar) => (
              <article key={seminar.title} className="rounded-2xl border border-(--border) bg-(--surface-soft) p-5 transition hover:border-(--accent)/40">
                <h3 className="text-xl font-semibold">{seminar.title}</h3>
                <p className="mt-3 text-sm text-(--muted)">{seminar.date} | {seminar.time}</p>
                <p className="mt-1 text-sm text-(--muted)">{seminar.location}</p>
                <p className="mt-3 inline-flex rounded-full border border-(--accent)/35 bg-(--accent)/10 px-3 py-1 text-xs font-medium text-(--accent)">
                  {seminar.seats}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-[1.75rem] border border-(--border) bg-(--surface) p-6 sm:p-8">
          <p className="text-(--accent) text-sm uppercase tracking-[0.3em]">Quick Registration</p>
          <h2 className="mt-4 text-2xl font-semibold">Sign up for the next seminar</h2>
          <form className="mt-6 space-y-4" aria-label="Seminar registration form">
            <label className="block space-y-2">
              <span className="text-sm text-(--muted)">Full Name</span>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-(--border) bg-(--surface-soft) px-4 py-3 text-sm text-foreground placeholder:text-(--muted) outline-none transition focus:border-(--accent)/60"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-(--muted)">Phone Number</span>
              <input
                type="tel"
                placeholder="+250 ..."
                className="w-full rounded-xl border border-(--border) bg-(--surface-soft) px-4 py-3 text-sm text-foreground placeholder:text-(--muted) outline-none transition focus:border-(--accent)/60"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-(--muted)">Select Seminar</span>
              <select className="w-full rounded-xl border border-(--border) bg-(--surface-soft) px-4 py-3 text-sm text-foreground outline-none transition focus:border-(--accent)/60">
                <option>Family Nutrition Bootcamp</option>
                <option>Backyard Garden Starter Lab</option>
                <option>Healthy Meals on a Budget</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-(--accent) px-4 py-3 text-sm font-semibold text-(--accent-contrast) transition hover:bg-(--accent-strong)"
            >
              Register Now
            </button>
            <p className="text-xs text-(--muted)">
              This form is currently a demo for registration intent. Contact the Victrix team to confirm attendance.
            </p>
          </form>
        </div>
      </section>

      <section id="videos" className="surface-card rounded-[1.75rem] border border-(--border) bg-(--surface-strong)/95 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-(--accent) text-sm uppercase tracking-[0.3em]">Video Tutorials</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Learn by watching and practicing.</h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex w-fit items-center rounded-full border border-(--accent)/35 bg-(--accent)/10 px-5 py-2 text-sm font-semibold text-(--accent) transition hover:bg-(--accent)/20"
          >
            Explore More Media
          </Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {tutorials.map((video) => (
            <article key={video.title} className="rounded-2xl border border-(--border) bg-(--surface-soft) p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-(--muted)">
                <span>{video.length}</span>
                <span>{video.level}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{video.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{video.description}</p>
              <a
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-foreground transition hover:border-(--accent)/45 hover:text-(--accent)"
              >
                Watch Tutorial
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-card rounded-[1.75rem] border border-(--border) bg-(--surface) p-6 sm:p-8">
        <p className="text-(--accent) text-sm uppercase tracking-[0.3em]">Learning Tracks</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Choose a path that matches your role.</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {learningTracks.map((track) => (
            <article key={track.title} className="rounded-2xl border border-(--border) bg-(--surface-soft) p-5">
              <h3 className="text-xl font-semibold">{track.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{track.focus}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
