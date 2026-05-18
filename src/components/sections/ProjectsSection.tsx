"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -left-40 bottom-0 h-[400px] w-[400px] bg-cyan-600/40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// FEATURED PROJECTS"}
          </p>
          <h2 className="section-title">
            AI Systems I&apos;ve <span className="glow-text">Built</span>
          </h2>
          <p className="section-subtitle">
            Production-grade AI applications showcasing expertise in LLMs, RAG
            systems, multi-agent architectures, and scalable AI infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                  className="group relative flex h-full flex-col"
                >
                {/* Top gradient accent */}
                <div
                  className={`h-1 bg-gradient-to-r ${project.gradient} opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-purple-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/40">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {project.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${project.gradient} opacity-[0.03]`}
                  />
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
