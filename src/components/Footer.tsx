"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { owner, navLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#020010]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="glow-text text-xl font-bold font-[Outfit]">
                VRD
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/30">
              AI/ML Engineer passionate about building intelligent systems that
              transform how we interact with technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/30 transition-colors hover:text-purple-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: owner.github, label: "GitHub" },
                { icon: LinkedinIcon, href: owner.linkedin, label: "LinkedIn" },
                {
                  icon: Mail,
                  href: `mailto:${owner.email}`,
                  label: "Email",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 md:flex-row">
          <p className="text-xs text-white/20">
            © {currentYear} {owner.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-white/20">
            Built with <Heart className="h-3 w-3 text-red-400" /> using Next.js
            & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
