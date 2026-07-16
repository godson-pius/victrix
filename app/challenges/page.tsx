"use client";

import { useState } from "react";

const challenges = [
  {
    title: "Challenge 01: Introduction",
    description: "Each member of the team should create an elevator pitch answering these questions: Name, Country, Interest, Something fun fact about you and what you bring to the team. There should also be a group statement on what you hope to gain out of E-LAB",
    findings: "The team was able to quickly establish rapport and shared understanding of the project goals, which facilitated collaboration and idea generation.",
    insights: ["Clear communication fosters team cohesion", "Shared goals enhance motivation and accountability"],
    solution: "https://www.youtube.com/watch?v=j4d9ocsCv1Y",
  },
  {
    title: "Challenge 02: Discover Africa",
    description: "Choose an African community and tell a story the world has not heard about that community by diacussing the amazi facts, misconctions, problems and uniqueness of that community using creative media channel like podcast etc.",
    findings: "We discovered a community called The Kamba people of Kenya, who are known for their rich cultural heritage and resilience in the face of challenges. Their unique traditions and community-driven initiatives provided valuable insights into sustainable development.",
    insights: ["Highlighting underrepresented communities raises awareness", "Storytelling can inspire action and empathy"],
    solution: "https://youtu.be/rtHdecptlbk?si=cYwoEGMxjYlFtUYT",
  },
  {
    title: "Challenge 03: HELP-LAB",
    description: "Introducing you to the HELP-LAB, for this challenge, you will choose a cause and add value. Impact the community and share your experience with the world. You will be required to create a video of your experience and share it with the world.",
    findings: "We found someone in the hospital and we helped the person get home from the hospital. This experience highlighted the importance of community support and the impact of small acts of kindness.",
    insights: ["Community engagement strengthens social bonds", "Hands-on experiences provide practical learning opportunities"],
    solution: "https://youtu.be/kYzTIHI4phg?si=s43rTXBHqSpy0dL9",
  },
  {
    title: "Challenge 04: Hunt for Treasure",
    description: "From the problem you are working on with your think tank, find a project/start-up company/institution whose operations falls under your chosen G.C.G.O; Iterview them to understand their operations and how they are impacting the community. Share your findings with the world.",
    findings: "We discovered a company focused on sustainable agriculture and nutrition. Their innovative approach to community health and food security provided valuable lessons on integrating technology and local knowledge to address pressing challenges.",
    insights: ["Sustainable practices can improve community health", "Collaboration between organizations enhances impact"],
    solution: "https://youtu.be/KpphSZqKZaQ?si=NnLWxsyBl-FUFbqB",
  },
  {
    title: "Challenge 05: Launch Your Mission",
    description: "Based on your Think Tank's mission, the problem you have identified, and researched on. This is your opportunity to launch the solution to the problem identified. Assume there's a $10,000 grant up for grasp.",
    findings: "We found that leveraging digital platforms and social media channels significantly increased the reach and engagement of our solution, allowing us to connect with a broader audience and gather valuable feedback.",
    insights: ["Digital marketing amplifies impact", "Community engagement drives adoption and sustainability"],
    solution: "https://youtu.be/av4eUVAAkPs?si=cXz6ZMXQJpkgsX9M",
  },
  {
    title: "Challenge 06: Your Digital Print",
    description: "Create a website to showcase your E-LAB journey. Design a website that represent your think tank and the individuals that make it up. Use images, videos, etc. You have creative freedom on what will be on the website.",
    findings: "We found that a well-designed website with clear navigation and engaging content effectively communicated our think tank's mission and achievements, enhancing our credibility and visibility in the community.",
    insights: ["A strong online presence builds trust and authority", "Visual storytelling enhances user engagement"],
    solution: "https://youtu.be/j4d9ocsCv1Y?si=RVRlvDdhBrZS09IV",
  },
];

function getYoutubeEmbedUrl(solution: string) {
  if (!solution.includes("youtube.com") && !solution.includes("youtu.be")) {
    return null;
  }

  try {
    const url = new URL(solution);
    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace(/\//g, "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function ChallengesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
      <div className="surface-card rounded-[2rem] p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">E-LAB Challenges</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Six challenges, one mission.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Each challenge is documented with research findings, key insights, and practical solutions that shape our implementation model.
        </p>
        <div className="mt-10 space-y-6">
          {challenges.map((challenge, index) => {
            const videoUrl = getYoutubeEmbedUrl(challenge.solution);
            const isActive = activeVideo === challenge.title;

            return (
              <div key={challenge.title} className="surface-soft rounded-[1.75rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[var(--accent-contrast)]">{index + 1}</div>
                  <h2 className="text-2xl font-semibold">{challenge.title}</h2>
                </div>
                <p className="mt-4 text-[var(--muted)]">{challenge.description}</p>
                <p className="mt-4 text-sm text-[var(--muted)]">Research findings: {challenge.findings}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
                  {challenge.insights.map((insight) => (
                    <li key={insight}>• {insight}</li>
                  ))}
                </ul>

                {videoUrl ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(isActive ? null : challenge.title)}
                      className="mt-4 inline-flex items-center rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 px-4 py-2 text-sm font-medium text-[var(--secondary)] transition hover:bg-[var(--secondary)]/20"
                    >
                      {isActive ? "Hide solution video" : "Play solution video"}
                    </button>

                    {isActive && (
                      <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30">
                        <iframe
                          src={videoUrl}
                          title={`${challenge.title} solution`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="aspect-video w-full"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <p className="mt-4 text-sm text-[var(--secondary)]">Proposed solution: {challenge.solution}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
