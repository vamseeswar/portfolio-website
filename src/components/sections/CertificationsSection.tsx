"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -right-40 top-0 h-[300px] w-[300px] bg-pink-600/30" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// CERTIFICATIONS"}
          </p>
          <h2 className="section-title">
            Professional <span className="glow-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Validated expertise through industry-recognized certification
            programs in AI, generative AI, and prompt engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                className="h-full"
              >
                <SpotlightCard className="group relative overflow-hidden p-6 text-center h-full">
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-50 transition-opacity group-hover:opacity-100`}
                />

                {/* Award icon */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} opacity-20 transition-opacity group-hover:opacity-30`}
                    />
                    <Award className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-purple-400 transition-colors group-hover:text-purple-300" />
                  </div>
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/40">{cert.issuer}</p>

                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-[0.03]`}
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
