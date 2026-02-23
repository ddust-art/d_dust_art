import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  return (
    <section
      id="projects"
      className="w-full py-24 bg-gradient-to-b from-black to-purple-sky text-black"
    >
      {/* Intro / text */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-tech-green font-bold mb-6">Projects</h2>

        <p className="text-lg text-white leading-relaxed">
          Whether in the form of{" "}
          <strong className="font-bold text-dust-orange">actions</strong>, such
          as unexpected and interactive happenings, or in the form of{" "}
          <strong className="font-bold text-dust-orange">exhibitions</strong>,
          such as pure public presentations, the works performed on the streets
          “de-automate” routine perception and provoke multiple and varied
          feelings ranging from amusement to aversion.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-6 max-w-6xl mx-auto px-6">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full relative" //relative to overlay arrows
          onMouseEnter={() => {
            plugin.current?.stop();
          }}
          onMouseLeave={() => {
            plugin.current?.play();
          }}
        >
          {/* Navigation Arrows */}
          <CarouselPrevious
            onMouseDown={(e) => e.stopPropagation()} //avoid clicking the link of <a> below
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center
              bg-black/30 backdrop-blur-sm border-none text-white hover:bg-white/60 hover:text-black transition"
          />

          <CarouselNext
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 flex items-center justify-center
              bg-black/30 backdrop-blur-sm border-none text-white hover:bg-white/60 hover:text-black transition "
          />

          <CarouselContent>
            {/* Item 1 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
              <a href="/outer-act" className="block relative group">
                <img
                  src="src/assets/image/Card_01_MSI_V3.jpg"
                  alt="Project Outer-Act"
                  className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0 

"
                />

                {/* SVG Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="src/assets/vector/Outer-Act_Logo_GREEN_WEB.svg"
                    alt="Logo Outer-Act"
                    className="w-4/5"
                  />
                </div>
              </a>
            </CarouselItem>
            {/* Item 2 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
              <a href="/outer-act" className="block relative group">
                <img
                  src="src/assets/image/Project_Moving_Stills_image.jpg"
                  alt="Project Moving Stills"
                  className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0"
                />

                {/* SVG Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="src/assets/image/Projects_Moving Stills_Title.png"
                    alt="Logo Outer-Act"
                    className="w-full"
                  />
                </div>
              </a>
            </CarouselItem>
            {/* Item 3 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
              <a href="/outer-act" className="block relative group">
                <img
                  src="src/assets/image/Projects_1_Mai.jpg"
                  alt="Project Outer-Act"
                  className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0"
                />

                {/* SVG Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="src/assets/vector/Projects_1 May_Title.svg"
                    alt="Logo Outer-Act"
                    className="w-full"
                  />
                </div>
              </a>
            </CarouselItem>
            {/* Item 4 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
              <a href="/outer-act" className="block relative group">
                <img
                  src="src/assets/image/Projects_Street_VJ.webp"
                  alt="Project Outer-Act"
                  className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0"
                />

                {/* SVG Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="src/assets/image/Projects_Street_VJ_Title.webp"
                    alt="Logo Outer-Act"
                    className="w-full"
                  />
                </div>
              </a>
            </CarouselItem>
            {/* Item 5 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-full">
              <a href="/outer-act" className="block relative group">
                <img
                  src="src/assets/image/Projects_Funkhaus.webp"
                  alt="Project Outer-Act"
                  className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0"
                />

                {/* SVG Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="src/assets/image/Projects_Funkhaus_Title.webp"
                    alt="Logo Outer-Act"
                    className="w-full"
                  />
                </div>
              </a>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 border border-white px-8 py-3 uppercase tracking-wide text-sm text-white hover:bg-dark-purple hover:border-dark-purple transition"
        >
          <span>See Projects</span> <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
