"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <section className="snap-start">
        <HeroSection />
      </section>
      <section className="snap-start">
        <AboutSection />
      </section>
      <section className="snap-start">
        <ProjectsSection />
      </section>
      <section className="snap-start">
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
