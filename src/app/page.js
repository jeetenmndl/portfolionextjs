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


      </div>
  
    </main>
  );
}
