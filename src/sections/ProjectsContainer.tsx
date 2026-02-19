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
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 md:pt-32 pb-16 space-y-40">
          <article>
            {/* Title + Year */}
            <div>
              <h2 className="text-3xl text-tech-green md:text-5xl font-semibold tracking-wide">
                Moving Stills
              </h2>

              <div className="mt-2 text-sm text-white/40 tracking-widest">
                2025
              </div>
            </div>

            {/* Image + Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="src/assets/image/Project_Moving_Stills_image.jpg"
                  alt="Project image"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white/80 leading-relaxed text-lg text-justify">
                <p>
                  In collaboration with digital artist{" "}
                  <a
                    href="https://ionee.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>Ionee Waterhouse</strong>
                  </a>
                  ,{" "}
                  <strong className="text-dust-orange text-xl">
                    Moving Stills
                  </strong>{" "}
                  is about giving the city a second heartbeat.
                  <br />
                  <br />
                  Statues, monuments, ads — they stand there acting permanent.
                  But they&apos;re just paused. With projection mapping, we
                  press play. A turtle takes off with a jetpack. A snake sheds
                  its skin in color and textures. A frozen gesture finally
                  finishes its movement. Even the animals around Neptune&apos;s
                  Fontain couldn&apos;t stay still. <br /> <br />
                  And when light hits billboards, the message bends. Ads turn
                  ironic. Authority cracks. <br /> <br />
                  Nothing is destroyed. Nothing is touched. <br />
                  Just light — and suddenly the city remembers it can move.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="mt-16 flex justify-center">
              <div className="w-full md:w-3/4 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/jOQhXbIAkJk"
                  title="Moving Stills: Neptunbrunnen"
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
      <section className="w-full bg-nft-dark-blue">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-12 md:pt-16 pb-16 space-y-40">
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
                  <br /> <br />
                  Using a simple projection system and a camera, figures appear
                  on city walls. When someone passes by, the characters speak —
                  one sentence at a time. The street turns into a stage without
                  warning. <br /> <br />
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
      <section className="w-full bg-nft-dark-blue">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-12 md:pt-16 pb-16 space-y-40">
          <article>
            {/* Title + Year */}
            <div>
              <h2 className="text-3xl text-tech-green md:text-5xl font-semibold tracking-wide">
                MayDay Berlin
              </h2>

              <div className="mt-2 text-sm text-white/40 tracking-widest">
                2013-2014
              </div>
            </div>

            {/* Image + Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="src/assets/image/Projects_1_Mai.jpg"
                  alt="Project image"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white/80 leading-relaxed text-lg text-justify">
                <p>
                  In 2013 and 2014, under the name{" "}
                  <strong className="text-dust-orange text-xl">
                    Lebenspixel
                  </strong>
                  , D-DUST and video artist{" "}
                  <a
                    href="https://www.instagram.com/sapatoazul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>Mari Rizzo</strong>
                  </a>{" "}
                  threw mapped projections straight into the May Day party. Amid
                  people dancing, demonstartors rallying, police watching, the
                  projection was born in the middle of the noise. <br /> <br />
                  Part of it was about kicking out the winter and welcoming
                  spring with raw sound and psychedelic footage. But May 1st
                  isn&apos;t just flowers and basslines.
                  <br /> <br />
                  Between the flashes and the rhythm came reminders:
                  workers&apos; struggles, rising rents, a city getting more
                  expensive by the year. <br /> <br /> Celebration and
                  resistance, sharing the same wall.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="mt-16 flex justify-center">
              <div className="w-full md:w-3/4 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/1166400188"
                  title="MayDay Berlin"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="w-full bg-nft-dark-blue">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-12 md:pt-16 pb-16 space-y-40">
          <article>
            {/* Title + Year */}
            <div>
              <h2 className="text-3xl text-tech-green md:text-5xl font-semibold tracking-wide">
                Street VJ
              </h2>

              <div className="mt-2 text-sm text-white/40 tracking-widest">
                2010
              </div>
            </div>

            {/* Image + Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="src/assets/image/Projects_Street VJ_centered.webp"
                  alt="Project Street VJ"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white/80 leading-relaxed text-lg text-justify">
                <p>
                  <strong className="text-dust-orange text-xl">
                    July 4th, 2010.
                  </strong>{" "}
                  <br /> <br /> A car battery. A beamer. The walls of São Paulo.{" "}
                  <br /> <br /> While wars kept burning in Iraq and Afghanistan,
                  we answered with light. <br /> <br /> A character appeared on
                  the buildings, tagging them in raw pixação style — aggressive
                  scribbles climbing the concrete. This time the tags were made
                  of photons. No spray, no stains.
                  <br /> <br /> No damage, no crime. Under the law, you
                  can&apos;t arrest light. Street VJ was a projection, a
                  protest, a disappearing graffiti just leaving traces in
                  memory.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="mt-16 flex justify-center">
              <div className="w-full md:w-3/4 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/1166457936?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="MayDay Berlin"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="w-full bg-nft-dark-blue">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-12 md:pt-16 pb-16 space-y-40">
          <article>
            {/* Title + Year */}
            <div>
              <h2 className="text-3xl text-tech-green md:text-5xl font-semibold tracking-wide">
                Funkhaus Mapping
              </h2>

              <div className="mt-2 text-sm text-white/40 tracking-widest">
                2013
              </div>
            </div>

            {/* Image + Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="src/assets/image/Projects_Funkhaus.webp"
                  alt="Project Funkhaus Mapping"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white/80 leading-relaxed text-lg text-justify">
                <p>
                  <strong className="text-dust-orange text-xl">
                    Funkhaus Mapping
                  </strong>{" "}
                  was developed for an event curated by Moviemiento inside the
                  former broadcasting complex of Funkhaus Grünau in Berlin.
                  Built in the 1930s, the facility served as part of the Nazi
                  radio infrastructure and later continued operating within the
                  East German media system under Soviet influence. <br /> <br />{" "}
                  After reunification, sections of the building were repurposed
                  for cultural uses before falling into partial abandonment. The
                  projection responded to this layered history without
                  illustrating it literally. Instead, it examined the building
                  as a site shaped by political transmission, cultural reuse,
                  and material decay — using light to articulate the tensions
                  between memory, architecture, and transformation.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="mt-16 flex justify-center">
              <div className="w-full md:w-3/4 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/1166484994"
                  title="MayDay Berlin"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
