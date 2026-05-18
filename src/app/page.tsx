"use client";

import dynamic from "next/dynamic";

// Dynamic imports for performance - heavy animation components loaded lazily
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), {
  ssr: false,
});
const Ticker = dynamic(() => import("@/components/Ticker"), { ssr: false });

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <Ticker />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
