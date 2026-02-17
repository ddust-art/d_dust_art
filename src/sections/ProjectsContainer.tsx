export default function ProjectsContainer() {
  return (
    <main className="w-full text-white">
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/image/Projects_bg_intro.jpg"
            alt="Project cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark + Blur Overlay*/}
        <div className="relative z-10 inset-0 bg-black/40 backdrop-blur-sm rounded-md m-12">
          {/* Intro Text */}
          <div className="relative max-w-5xl mx-auto px-6 py-12 text-white">
            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-3xl">
              Short introduction text about the project. This text defines the
              height of the section. Keep it atmospheric, conceptual and not too
              long.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-nft-dark-blue">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-40">
          <article>
            {/* Title + Year */}
            <div>
              <h2 className="text-3xl text-tech-green md:text-5xl font-semibold tracking-wide">
                Outer-Act
              </h2>

              <div className="mt-2 text-sm text-white/40 tracking-widest">
                v.1.0 2019 | v2.0 2021
              </div>
            </div>

            {/* Image + Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="src/assets/image/Projects_Outer-Act_4-3.webp"
                  alt="Project image"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white/80 leading-relaxed text-lg text-justify">
                <p>
                  <strong className="font-semibold text-2xl text-dust-orange">
                    Outer-Act
                  </strong>{" "}
                  began in Berlin in 2019 as an experimental street art project.
                  We live glued to our screens, connected to everything and
                  somehow distant from whoever stands right in front of us.{" "}
                  <br />
                  <br />
                  Using a simple projection system and a camera, figures appear
                  on city walls. When someone passes by, the characters speak —
                  one sentence at a time. The street turns into a stage without
                  warning. <br />
                  <br />
                  These digital presences exist on the margins, waiting to be
                  noticed. Outer-Act plays with surprise, discomfort, and
                  curiosity — asking what it really means to see someone in a
                  city where everyone is looking elsewhere.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="mt-16 flex justify-center">
              <div className="w-full md:w-3/4 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bPPy-vgjrgg"
                  title="Outer-Act: Action at the Rathausbrücke, Berlin (flat version)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Learn More */}
            <div className="mt-12 flex justify-center">
              <a
                href="/projects/project-name"
                className="border border-white/40 px-8 py-3 text-sm tracking-widest 
                           transition-all duration-500 
                           hover:bg-white hover:text-black"
              >
                LEARN MORE
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
