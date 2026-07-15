"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 10, label: "Reduce stunting below 10%", suffix: "%" },
  { value: 500, label: "Train 500 mothers", suffix: "+" },
  { value: 100, label: "Launch 100 workshops", suffix: "+" },
  { value: 200, label: "Establish 200 home gardens", suffix: "+" },
  { value: 10000, label: "Reach 10,000 people digitally", suffix: "+" },
];

export function AnimatedStats() {
  const [displayed, setDisplayed] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDisplayed((prev) => prev.map((value, index) => (value < stats[index].value ? value + Math.max(1, Math.round(stats[index].value / 20)) : stats[index].value)));
    }, 40);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat, index) => (
        <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
          <p className="text-3xl font-semibold text-[#f2d08b]">
            {displayed[index].toLocaleString()}
            {stat.suffix}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
