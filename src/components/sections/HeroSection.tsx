"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Brain,
  Bot,
  Cpu,
  Workflow,
} from "lucide-react";
import { owner, stats } from "@/data/portfolio";

function TypingEffect() {
  const titles = [
    "AI/ML Engineer",
    "Generative AI Developer",
    "Agentic AI Builder",
    "Full Stack AI Architect",
    "LLM Application Developer",
  ];
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[current];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.slice(0, text.length + 1));
        if (text.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(fullText.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrent((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, current, titles]);

  return (
    <span className="glow-text">
      {text}
      <span className="typing-cursor" />
    </span>
  );
}

function FloatingIcon({
  icon: Icon,
  delay,
  x,
  y,
  size = 20,
}: {
  icon: typeof Brain;
  delay: number;
  x: string;
  y: string;
  size?: number;
}) {
  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.15, 0.35, 0.15],
        scale: [0.8, 1, 0.8],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon
        size={size}
        className="text-purple-400/40"
      />
    </motion.div>
  );
}

function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000 + 0.5 }}
      className="text-center"
    >
      <div className="text-2xl font-bold md:text-3xl">
        <span className="glow-text">
          {count}
          {suffix}
        </span>
      </div>
      <div className="mt-1 text-xs text-white/40 md:text-sm">{label}</div>
    </motion.div>
  );
}

function NeuralNetworkGraphic() {
  return (
    <div className="absolute right-[5%] top-[15%] -z-10 hidden xl:block w-[450px] h-[450px] opacity-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Synaptic paths */}
        <motion.path
          d="M 40,60 L 100,30 L 160,60 L 160,130 L 100,170 L 40,130 Z"
          fill="none"
          stroke="url(#neonGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 40,60 L 100,100 L 160,60 M 160,130 L 100,100 L 40,130 M 100,30 L 100,170"
          fill="none"
          stroke="url(#neonGrad)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Neural nodes */}
        {[
          { x: 40, y: 60, delay: 0 },
          { x: 100, y: 30, delay: 0.5 },
          { x: 160, y: 60, delay: 1 },
          { x: 160, y: 130, delay: 1.5 },
          { x: 100, y: 170, delay: 2 },
          { x: 40, y: 130, delay: 2.5 },
          { x: 100, y: 100, delay: 3 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="5"
            fill="url(#neonGrad)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulse data packets */}
        <motion.circle cx="40" cy="60" r="3" fill="#ec4899">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 40,60 L 100,30 L 160,60 L 100,100 L 40,130 L 100,170"
          />
        </motion.circle>
        <motion.circle cx="160" cy="130" r="3" fill="#06b6d4">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M 160,130 L 100,100 L 100,30 L 40,60 L 100,100 L 100,170"
          />
        </motion.circle>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Gradient orbs */}
      <div className="gradient-mesh absolute -top-40 -left-40 h-[600px] w-[600px] bg-blue-600/20" />
      <div className="gradient-mesh absolute -right-40 top-1/4 h-[500px] w-[500px] bg-purple-600/25" />
      <div className="gradient-mesh absolute -bottom-40 left-1/4 h-[450px] w-[450px] bg-cyan-600/20" />

      {/* Floating AI icons */}
      <FloatingIcon icon={Brain} delay={0} x="10%" y="20%" size={28} />
      <FloatingIcon icon={Bot} delay={1} x="85%" y="15%" size={24} />
      <FloatingIcon icon={Cpu} delay={2} x="75%" y="70%" size={22} />
      <FloatingIcon icon={Workflow} delay={3} x="15%" y="75%" size={26} />
      <FloatingIcon icon={Sparkles} delay={1.5} x="90%" y="50%" size={20} />
      <FloatingIcon icon={Brain} delay={2.5} x="5%" y="50%" size={18} />

      {/* Interactive AI Graphics */}
      <NeuralNetworkGraphic />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="availability-badge">
            <span className="availability-dot" />
            {owner.availabilityBadge}
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-mono text-sm tracking-widest text-purple-400/80 md:text-base"
        >
          {"<Hello World /> I'm"}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4 font-[Outfit] text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          <span className="text-gradient-cool">{owner.name.split(" ")[0]}</span>
          <br />
          <span className="glow-text">
            {owner.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-6 h-10 font-[Outfit] text-xl font-semibold sm:text-2xl md:text-3xl"
        >
          <TypingEffect />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-sm leading-loose text-slate-300 md:text-base font-light tracking-wide"
        >
          {owner.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="btn-primary">
            <Sparkles className="h-4 w-4" />
            <span>View Projects</span>
          </a>
          <a href={owner.resumeUrl} className="btn-outline" download>
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </a>
          <a href="#contact" className="btn-outline">
            <Mail className="h-4 w-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 200}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-white/20" />
      </motion.div>
    </section>
  );
}
