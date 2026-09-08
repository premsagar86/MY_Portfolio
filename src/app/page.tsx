import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
