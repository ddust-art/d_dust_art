import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/ProjectsSection";
import Schedule from "@/sections/Schedule";
import NFTSection from "@/sections/NFTSection";
import Newsletter from "@/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Schedule />
      <NFTSection />
      <Newsletter />
    </>
  );
}
