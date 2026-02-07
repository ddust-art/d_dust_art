import video from "@/assets/OA_HOME_HEADER_EDIT_BW_2.mp4";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "@/components/animations/TypewriterText";

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
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

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
