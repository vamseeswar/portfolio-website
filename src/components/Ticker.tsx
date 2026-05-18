"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Ticker() {
  // Flatten all skills into a single array
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  
  // Duplicate array for infinite scroll illusion
  const tickerItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <div className="relative flex w-full overflow-hidden border-y border-white/5 bg-black/20 py-4 backdrop-blur-sm">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Adjust speed
            ease: "linear",
          },
        }}
      >
        {tickerItems.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="mx-6 flex items-center gap-3 text-white/50 transition-colors hover:text-white"
            >
              <Icon className="h-5 w-5" />
              <span className="text-lg font-medium tracking-wide">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
