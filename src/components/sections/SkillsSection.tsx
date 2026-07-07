"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -left-40 top-1/4 h-[350px] w-[350px] bg-blue-600/50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// TECH STACK"}
          </p>
          <h2 className="section-title">
            Skills & <span className="glow-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning AI/ML, generative AI, backend
            engineering, and modern deployment infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            const spotlightColors: Record<string, string> = {
              "AI/ML & GenAI": "rgba(168, 85, 247, 0.2)",
              "Core Machine Learning": "rgba(59, 130, 246, 0.2)",
              "Programming": "rgba(99, 102, 241, 0.2)",
              "Vector Databases": "rgba(16, 185, 129, 0.2)",
              "Backend & MLOps": "rgba(249, 115, 22, 0.2)",
              "Databases & Data": "rgba(234, 179, 8, 0.2)",
            };
            const spotColor = spotlightColors[cat.category] || "rgba(168, 85, 247, 0.2)";

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.12 + 0.2, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard className="overflow-hidden p-6 h-full" spotlightColor={spotColor}>
                {/* Category Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cat.color} opacity-80`}
                  >
                    <CatIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {cat.category}
                  </h3>
                  <div className="ml-auto rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-white/40">
                    {cat.skills.length}
                  </div>
                </div>
 
                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: catIdx * 0.12 + skillIdx * 0.04 + 0.3,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        className="group flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 transition-all hover:border-purple-500/35 hover:bg-purple-500/[0.08]"
                      >
                        <SkillIcon className="h-3.5 w-3.5 text-white/35 transition-colors group-hover:text-purple-400" />
                        <span className="text-xs font-medium text-white/60 transition-colors group-hover:text-white/95">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
