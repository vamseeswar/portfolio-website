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
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard className="group p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                  <Icon className="h-6 w-6 text-purple-400 transition-colors group-hover:text-purple-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
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
