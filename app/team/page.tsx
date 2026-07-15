import Image from "next/image";

const team = [
  {
    name: "Brian King",
    role: "Team Lead & Storyteller",
    bio: "Brian is the creative force behind Victrix, turning lived experiences into compelling stories that inspire trust, empathy, and action.",
    skills: ["Storytelling", "Leadership", "Community Mobilization"],
    focus: "Narrative Strategy",
    initials: "BK",
    accent: "from-[#cba34e] via-[#f7d68d] to-[#2f7a5c]",
    photo: "/brian.png",
    photoPosition: "50% 35%",
  },
  {
    name: "Godson Azubuike",
    role: "Software Engineer & Tech Innovator",
    bio: "Godson builds elegant mobile and web experiences that make health education, community engagement, and digital outreach more accessible.",
    skills: ["Mobile Apps", "Web Development", "Product Innovation"],
    focus: "Digital Products",
    initials: "GA",
    accent: "from-[#2f7a5c] via-[#5bc29a] to-[#04110f]",
    photo: "/godson.jpg",
    photoPosition: "50% 25%",
  },
  {
    name: "Richeal Streetor",
    role: "Aspiring Health Professional",
    bio: "Richeal brings a strong passion for public health and community well-being, helping bridge care, education, and local impact.",
    skills: ["Community Health", "Education", "Wellness Advocacy"],
    focus: "Health Outreach",
    initials: "RS",
    accent: "from-[#174d3e] via-[#2f7a5c] to-[#cba34e]",
    photo: "/richeal.jpeg",
    photoPosition: "50% 24%",
  },
  {
    name: "William Munyantwali",
    role: "Business Strategist & Influencer",
    bio: "William connects mission with momentum, helping Victrix grow partnerships, visibility, and sustainable opportunities for impact.",
    skills: ["Business Growth", "Partnerships", "Influence"],
    focus: "Strategic Partnerships",
    initials: "WM",
    accent: "from-[#0c231d] via-[#174d3e] to-[#cba34e]",
    photo: "/william.jpeg",
    photoPosition: "50% 35%",
  },
  {
    name: "Sunny Isimbi Uwineza",
    role: "Aspiring Tech Innovator",
    bio: "Sunny brings youthful energy, digital curiosity, and a sharp eye for innovation that strengthens Victrix’s modern community solutions.",
    skills: ["Innovation", "Digital Storytelling", "Community Tech"],
    focus: "Creative Technology",
    initials: "SU",
    accent: "from-[#cba34e] via-[#174d3e] to-[#5bc29a]",
    photo: "/sunny.jpeg",
    photoPosition: "50% 22%",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
      <div className="rounded-4xl border border-white/10 bg-black/25 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Meet the Team</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A visionary collective building healthier futures.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Our team blends storytelling, technology, public health, and business leadership to scale meaningful change for families and communities.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#cba34e]/40">
              <div className={`h-2 w-full bg-linear-to-r ${member.accent}`} />
              <div className="relative h-72 w-full bg-[#0b221c] sm:h-80">
                {member.photo ? (
                  <>
                    <Image
                      src={member.photo}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: member.photoPosition }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#04110f]/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className={`flex h-full w-full flex-col items-center justify-center bg-linear-to-br ${member.accent} p-6 text-[#f2d08b]`}>
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#f5d692]/40 bg-black/20 text-3xl font-semibold">
                      {member.initials}
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.28em] text-emerald-50/90">Photo Coming Soon</p>
                  </div>
                )}
              </div>
              <div className="px-6 pb-6 pt-5">
                <h2 className="text-2xl font-semibold">{member.name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#cba34e]">{member.role}</p>
                <div className="mt-4 inline-flex rounded-full border border-emerald-700/40 bg-[#0a241d] px-3 py-1 text-xs font-medium text-emerald-100">
                  {member.focus}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
