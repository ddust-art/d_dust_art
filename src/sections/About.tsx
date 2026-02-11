import aboutVideoWebm from "@/assets/video/about_dust.webm";
import aboutVideoMp4 from "@/assets/video/about-fallback.mp4";
import aboutPoster from "@/assets/image/about-dust-poster.jpg"; // fallback poster
import aboutImage from "@/assets/image/ddust_about.jpg";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 text-white">
      {/* Background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={aboutPoster}
        >
          <source src={aboutVideoWebm} type="video/webm" />
          <source src={aboutVideoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Section heading */}
      <h2 className="text-center text-tech-green text-4xl font-bold uppercase mb-12">
        About
      </h2>

      {/* Two-column layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-12">
        {/* Left: image */}
        <img
          src={aboutImage}
          alt="D-DUST artistic portrait"
          className="w-full rounded-lg object-cover shadow-xl"
          loading="lazy"
        />

        {/* Right: text & quote */}
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            <strong className="font-semibold text-2xl text-dust-orange">
              Technology
            </strong>{" "}
            is a means, but also a reflection of our own personality. The desire
            to go further and faster, defend ourselves more securely, strike
            more powerfully. It transforms our limited human abilities into
            superpowers previously only seen in fiction, in the performances of
            mythical gods or religious books.
          </p>

          <p>
            That is why we revere it; it represents the expansion of our powers
            and brings us closer to the gods. We carry tech-religious symbols in
            our pockets. Our church is our daily use of the internet. Our new
            deity is AI.
          </p>

          <p>
            However, powers demand responsibility and the fragile human morality
            is shaken by contradictions. Will technology be our salvation or our
            doom? Without pretentious aims to find the exact answer, but rather
            to challenge human behavior, this is what guides{" "}
            <strong className="font-semibold text-2xl text-dust-orange">
              D-DUST's
            </strong>{" "}
            art.
          </p>
          {/* 
            <blockquote className="border-l-4 border-white pl-4 italic text-2xl">
            “The medium is the message.”
            <span className="block mt-2 text-lg font-semibold">
              — Marshall McLuhan
            </span>
          </blockquote>
          */}
        </div>
      </div>
    </section>
  );
}
