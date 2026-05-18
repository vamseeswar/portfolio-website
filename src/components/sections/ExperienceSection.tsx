"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -right-40 top-1/3 h-[300px] w-[300px] bg-purple-600/40" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// EXPERIENCE"}
          </p>
          <h2 className="section-title">
            Professional <span className="glow-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building real-world AI systems and contributing to innovative teams
            pushing the boundaries of artificial intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 md:left-1/2 md:block">
                  <div
                    className={`h-full w-full rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                    style={{
                      boxShadow: `0 0 20px rgba(139, 92, 246, 0.4)`,
                    }}
                  />
                </div>

                {/* Mobile timeline dot */}
                <div className="absolute left-6 top-6 z-10 h-3 w-3 -translate-x-1/2 md:hidden">
                  <div
                    className={`h-full w-full rounded-full bg-gradient-to-r ${exp.color}`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-14 w-full md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <SpotlightCard className="group p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${exp.color} opacity-80`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/40">
                          <Briefcase className="h-3 w-3" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      {exp.period}
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, ri) => (
                        <motion.li
                          key={ri}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: i * 0.2 + ri * 0.05 + 0.5,
                            duration: 0.3,
                          }}
                          className="flex items-start gap-2 text-sm text-white/50"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/50" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
