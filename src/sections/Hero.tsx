import video from "@/assets/OA_HOME_HEADER_EDIT_BW_2.mp4";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Artist Name
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            Multidisciplinary artist exploring form, motion and emotion.
          </p>
        </div>
      </div>

      {/*Scroll indicator*/}
      <motion.div
        className="pointer-events-none absolute bottom-20 left-1/2 z-10 flex-col items-center text-white/80"
        animate={{ y: [0, 14, 0], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mb-1 text-sm tracking-wide"></span>
        <ChevronsDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
