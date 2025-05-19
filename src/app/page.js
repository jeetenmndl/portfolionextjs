import Achievements from "@/components/sections/Achievements";
import Courses from "@/components/sections/Courses";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import SectionBreak from "@/components/sections/SectionBreak";
import Skills from "@/components/sections/Skills";
import TechBanner from "@/components/sections/TechBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      <div className="px-2 md:px-10 lg:px-20 xl:px-64">
        <Hero />
        <TechBanner />
        <SectionBreak text="SKILLS" />
        <Skills />
        <SectionBreak text="PROJECTS" />
        <Projects />
        <SectionBreak text="ACHIEVEMENTS" />
        <Achievements />
        <SectionBreak text="COURSES & WORKSHOPS" />
        <Courses />
        <SectionBreak text="EDUCATION" />
        <Education />
        <SectionBreak text="EXPERIENCE" />
        <Experience />

      </div>

      <Footer />
  
    </main>
  );
}
