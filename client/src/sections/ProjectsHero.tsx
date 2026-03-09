export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/video/projects-header.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient (subtle cinematic fade) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <h1 className="relative z-10 font-digital text-6xl md:text-8xl text-tech-green tracking-widest">
        PROJECTS
      </h1>
    </section>
  );
}
