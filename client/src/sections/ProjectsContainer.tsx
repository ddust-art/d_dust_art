import { ArrowRight } from "lucide-react";

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
            <p className="mt-6 text-white/80 text-lg leading-relaxed text-left text-justify">
              The following works are urban art projects carried out in public
              spaces or within abandoned and/or decaying buildings. Due to the
              flexibility that light offers in transitioning between different
              media, and to sidestep laws that consider traditional street art a
              form of vandalism, these works use video projection as a means of
              communication to explore various themes related to the urban
              environment and technology. They are not funded by any institution
              or artistic event; instead, they represent a commitment to free
              expression and themes selected by the artist.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      {/* Moving Stills */}
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
                  An economically leading country slowly entering a recession
                  make their citizens raise some questions: "How can our poorer
                  neighbors have a higher GDP than ours?" <br /> <br />
                  Even traditional methods that have worked for a long time have
                  their expiration date. Even monuments sculpted for eternity
                  suggesting movement deserve a fresh look. Tradition conserved
                  just by restoration is doomed to decay. <br />
                  <br />
                  <strong className="text-dust-orange text-xl">
                    Moving Stills
                  </strong>{" "}
                  forces images and objects condemned to eternal stillness,
                  through light, vision, and imagination, to surrender to
                  changes. The world turns, ideas change. <br /> <br />
                  In collaboration with digital artist{" "}
                  <a
                    href="https://ionee.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>Ionee Waterhouse</strong>
                  </a>
                  .
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

            {/* 
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
            */}
          </article>
        </div>
      </section>
      {/* Outer-Act */}
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
                  Urban areas with swollen populations can be the loneliest
                  places on the planet. Millions of people who never look each
                  other in the eyes are forced to follow systematic rules of
                  survival in a circuitous, pendulous cycle. <br /> <br /> Those
                  who do not follow the rules, who live on the cycle's margins
                  are often ignored. In a fast passed society where the central
                  communication happens in the speed of the light through the
                  fiber optics there is no time to waste with those on the slow
                  margins. <br />
                  <br /> May technological magic serve as the bait that
                  interrupts automated behavior and instigates interaction with
                  those who have been rejected.{" "}
                  <strong className="text-dust-orange text-xl">
                    Outer-Act
                  </strong>{" "}
                  is a work of interactive street art.
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
              <div className="flex flex-col items-center gap-4 text-white/80 leading-relaxed text-sm">
                <a
                  href="https://www.youtube.com/watch?v=YBSBs3MdB5k&vr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/40 px-8 py-3 text-sm tracking-widest 
               transition-all duration-500 
               hover:bg-light-purple hover:text-white hover:border-light-purple"
                >
                  <span>WATCH IT IN VR360°</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-white/60 tracking-wide text-center max-w-md">
                  Best experienced in 4K • Activate fullscreen for full
                  immersion • Move the mobile or drag the image with the cursor
                  to change the camera's perspective
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* MayDay Berlin */}
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
                  May 1st in Berlin has two meanings: celebrations and protests.{" "}
                  The celebration is an ancient Nordic ritual commemorating the
                  first harvests of the year and the beginning of spring. It is
                  also marked by International Workers' Day and the global
                  struggle for better working conditions. <br /> <br /> Divided
                  into these two themes, the projection mapped onto the walls of
                  central celebrations, called MayDay, is like a cry urging
                  participants to celebrate without forgetting major problems
                  faced by the city's workers, such as the skyrocketing rents in
                  a market controlled by oligarchs. It also pays tribute to
                  those who lost their lives in the struggle for better labor
                  rights. <br /> <br /> A collective work, in collaboration with
                  video artist{" "}
                  <a
                    href="https://www.instagram.com/sapatoazul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>Mari Rizzo</strong>
                  </a>
                  , under the name{" "}
                  <strong className="text-dust-orange text-xl">
                    Lebenspixel
                  </strong>
                  .
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
      {/* Street VJ */}
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
                  A beamer connected to a car battery moves around São Paulo
                  projecting onto its gray buildings. In the image, a hooded
                  character tags the walls with luminous{" "}
                  <a
                    href="https://ionee.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>
                      <i>pixação</i>
                    </strong>
                  </a>
                  . <br /> <br />
                  But on July 4, 2010, Independence Day in the United States,
                  the character, with his beamer-pistole, shoots on the concrete
                  images of the American wars taking place in Iraq and
                  Afghanistan. <br /> <br /> Today we know the results and false
                  reasons that started these wars: no weapons of mass
                  destruction were found in Iraq. After a 20-year war, with
                  thousands of lives lost and trillions of dollars spent, the US
                  withdraws its troops from Afghanistan and the Taliban takes
                  over the government. <br /> <br />
                  <strong className="text-dust-orange text-xl">
                    Street VJ
                  </strong>{" "}
                  is a form of itinerant street art which, like <i>pixação</i>,
                  expresses anarchic nonconformity and/or uncomfortable
                  political themes across the streets.
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
                  One of the few indoor projects,{" "}
                  <strong className="text-dust-orange text-xl">
                    Funkhaus Mapping
                  </strong>{" "}
                  was developed at the former{" "}
                  <a
                    href="https://de.wikipedia.org/wiki/Funkhaus_Gr%C3%BCnau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple underline hover:opacity-80 transition-opacity"
                  >
                    <strong>Funkhaus Grünau</strong>
                  </a>{" "}
                  broadcasting complex in Berlin. Built in the late 1920s, this
                  listed building originally served as part of the Nazi radio
                  infrastructure and later continued operating within the East
                  German media system under Soviet influence. <br /> <br />
                  Between 2012 and 2014, sections of the complex were repurposed
                  for cultural use; however, these activities were halted
                  following complaints from the affluent local neighborhood.
                  Currently held by a Hamburg investor seeking a massive return
                  on investment, the building remains in a state of abandonment.
                  <br /> <br /> The projection responded to this layered history
                  without literal illustration. Instead, like the the cultural
                  associations and artists striving to revitalize the building,
                  the mapping used light in a utopian manner—acting as the blood
                  flowing through the construction&apos;s veins, bringing oxygen
                  to its structures to ensure its survival
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
