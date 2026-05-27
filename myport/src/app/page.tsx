import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";
import Experience from "./exp";
import Awards from "./award";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </>
  );
}
