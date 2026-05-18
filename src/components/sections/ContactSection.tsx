"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Download,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { owner } from "@/data/portfolio";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Invalid email address";
    }
    if (!formState.subject.trim()) errs.subject = "Subject is required";
    if (!formState.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formspree.io/f/xjgzvrdp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          setErrors({ message: "Oops! There was a problem submitting your form." });
        }
      } catch (error) {
        setErrors({ message: "A network error occurred. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: owner.email,
      href: `mailto:${owner.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/vamseeswar",
      href: owner.github,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/vamseeswara-reddy-datla",
      href: owner.linkedin,
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: owner.location,
      href: "#",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="gradient-mesh absolute -right-40 bottom-0 h-[400px] w-[400px] bg-purple-600/30" />
      <div className="gradient-mesh absolute -left-40 top-0 h-[300px] w-[300px] bg-blue-600/20" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-center font-mono text-sm tracking-widest text-purple-400">
            {"// GET IN TOUCH"}
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="glow-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in collaborating on AI projects or have an opportunity?
            I&apos;d love to hear from you. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="glass-card group flex items-center gap-4 p-4"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${link.color} opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30">{link.label}</div>
                    <div className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                      {link.value}
                    </div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-white/50" />
                </motion.a>
              );
            })}

            {/* Resume Download */}
            <motion.a
              href={owner.resumeUrl}
              download
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="btn-primary mt-4 w-full justify-center"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="mb-4 h-16 w-16 text-emerald-400" />
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-white/50">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-medium text-white/40"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.05] ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-white/[0.06]"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-medium text-white/40"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.05] ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-white/[0.06]"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-xs font-medium text-white/40"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.05] ${
                        errors.subject
                          ? "border-red-500/50"
                          : "border-white/[0.06]"
                      }`}
                      placeholder="AI Collaboration Opportunity"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-white/40"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.05] ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-white/[0.06]"
                      }`}
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
