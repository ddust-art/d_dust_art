import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "@/components/animations/TypewriterText";
import heroPoster from "@/assets/image/hero-poster.jpg";

export default function Hero() {
  const handleScrollClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={heroPoster}
      >
        {/* Mobile first */}
        <source
          src="/src/assets/video/hero-mobile.webm"
          type="video/webm"
          media="(max-width: 768px)"
        />

        {/* Desktop */}
        <source
          src="/src/assets/video/hero-desktop.webm"
          type="video/webm"
          media="(min-width: 769px)"
        />

        {/* Fallback - Safari */}
        <source src="/src/assets/video/hero-fallback.mp4" type="video/mp4" />
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <TypewriterText />
      </div>

      {/*Scroll-to-about button*/}
      <motion.button
        type="button"
        aria-label="Scroll to about section"
        onClick={handleScrollClick}
        className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/80 hover:text-white focus:outline-none" //left-1/2 = left: 50%;
        animate={{ y: [0, 14, 0], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mb-1 text-sm tracking-wide"></span>
        <ChevronsDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
