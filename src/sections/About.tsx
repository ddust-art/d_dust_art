import aboutVideoMp4 from "@/assets/video/about-dust.mp4";
//import aboutPoster from "@/assets/video/about-dust-poster.jpg"; // fallback poster
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
          //poster={aboutPoster}
        >
          <source src={aboutVideoMp4} type="video/mp4" />
          {/* Add later: .webm source when available */}
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Section heading */}
      <h2 className="text-center text-tech-green text-4xl font-bold uppercase mb-12">
        About
      </h2>

      {/* Two-column layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-6 lg:px-0">
        {/* Left: image */}
        <img
          src={aboutImage}
          alt="D-DUST artistic portrait"
          className="w-full rounded-lg object-cover shadow-xl"
          loading="lazy"
        />

        {/* Right: text & quote */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong className="font-semibold">D-DUST</strong> is a media artist
            focused on contrasting the interaction between real individuals and
            digital characters in public or virtual environments.
          </p>

          <p>
            Since the beginning of the 21st century, relationships have been
            drawn out from public places toward online social environments. What
            once seemed like a thriving achievement of Web 2.0 later turned into
            a nightmare of data harvesting, privacy invasion, and surveillance.
          </p>

          <p>
            Outer-Act aims, with a simple and primitive use of AI, to test faith
            in technology and reflect on relevant themes within public and
            virtual spaces.
          </p>

          <blockquote className="border-l-4 border-white pl-4 italic text-2xl">
            “The medium is the message.”
            <span className="block mt-2 text-lg font-semibold">
              — Marshall McLuhan
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
