"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutHighlights, owner } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -right-60 top-0 h-[400px] w-[400px] bg-purple-600/50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// ABOUT ME"}
          </p>
          <h2 className="section-title">
            Building the Future with{" "}
            <span className="glow-text">AI</span>
          </h2>
          <p className="section-subtitle">{owner.summary}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item, i) => {
            const Icon = item.icon;
            const spotlightColors = [
              "rgba(59, 130, 246, 0.2)",  // blue
              "rgba(168, 85, 247, 0.2)", // purple
              "rgba(6, 182, 212, 0.2)",  // cyan
              "rgba(236, 72, 153, 0.2)", // pink
              "rgba(16, 185, 129, 0.2)", // emerald
              "rgba(249, 115, 22, 0.2)", // orange
            ];
            const iconStyles = [
              "from-blue-500/25 to-cyan-500/25 text-blue-400 group-hover:text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.35)]",
              "from-purple-500/25 to-pink-500/25 text-purple-400 group-hover:text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.35)]",
              "from-cyan-500/25 to-emerald-500/25 text-cyan-400 group-hover:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.35)]",
              "from-pink-500/25 to-rose-500/25 text-pink-400 group-hover:text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.35)]",
              "from-emerald-500/25 to-teal-500/25 text-emerald-400 group-hover:text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)]",
              "from-orange-500/25 to-amber-500/25 text-orange-400 group-hover:text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.35)]",
            ];
            const spotColor = spotlightColors[i % spotlightColors.length];
            const iconStyle = iconStyles[i % iconStyles.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard className="group p-6 h-full" spotlightColor={spotColor}>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-all group-hover:scale-110 ${iconStyle}`}>
                  <Icon className="h-6 w-6 transition-colors" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
