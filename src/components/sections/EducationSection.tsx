"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Trophy } from "lucide-react";
import { education } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function EducationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -left-40 bottom-0 h-[300px] w-[300px] bg-blue-600/30" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// EDUCATION"}
          </p>
          <h2 className="section-title">
            Academic <span className="glow-text">Foundation</span>
          </h2>
          <p className="section-subtitle">
            A strong academic foundation in Information Technology, providing the
            theoretical depth for building advanced AI systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <SpotlightCard className="group relative overflow-hidden p-6 md:p-8">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60 transition-opacity group-hover:opacity-100" />

                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </div>

                  {/* Details */}
                  <div className="text-center md:text-left w-full">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="mb-4 text-sm text-white/50 md:text-base">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                      <div className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                        <Trophy className="h-4 w-4" />
                        {edu.score}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
