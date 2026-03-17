"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GallerySection from "@/components/gallery/GallerySection";

import { images1, images2, images3 } from "@/data/imageGalleries";

export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeImages, setActiveImages] = useState(images1);

  const handleOpen = (images: typeof images1, index: number) => {
    setActiveImages(images);
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-almost-black text-white">
      {/* HEADER */}
      <div className="relative h-[60vh] w-full">
        <img
          src="/image/gallery/gallery-cover.jpg"
          alt="Gallery Cover"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative z-10 font-digital text-6xl md:text-8xl text-tech-green tracking-widest">
            IMAGE GALLERY
          </h1>
        </div>
      </div>
      {/* INTRO TEXT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-left text-justify">
        <p className="text-white/70 leading-relaxed text-lg">
          <strong className="font-semibold text-2xl text-dust-orange">
            Public spaces
          </strong>{" "}
          are the world&apos;s largest exhibition galleries. Street artists
          operate within environments shaped by regulation, surveillance, and
          social tension, where expression is often restricted or criminalized.
          To exhibit in the street is to negotiate visibility, challenge
          automated perceptions, and accept risk. <br />
          <br />
          These works cannot, in the eyes of law, be considered vandalism, yet
          they confront the cultural suspicion often directed toward
          interventions in public space. They engage the street as both site and
          medium — testing its limits, questioning its rules, and activating its
          surfaces.{" "}
          <strong className="font-semibold  text-dust-orange">
            Below is a selection developed within this context.
          </strong>
        </p>
      </section>

      {/* GALLERY SECTIONS */}
      <GallerySection
        title="FEAR AND LOATHING IN FRANKFURT"
        year="2020"
        description="Due to the first COVID-19 lockdown in Germany, the project Outer-Act
          wandered through an unusually deserted Frankfurt after the light art
          festival Luminale was canceled at the last minute. The crisis became
          the focus of political concerns and affected the foundations of global
          economies."
        images={images3}
        onImageClick={handleOpen}
      />

      <GallerySection
        title="LIGHTING THE AGE OF ENLIGHTEMENT"
        year="2019"
        description={
          <>
            Conceived as a “Sanctuary of Arts and Science” by Friedrich Wilhelm
            IV of Prussia, the{" "}
            <a
              href="https://www.museumsinsel-berlin.de/en/buildings/overview-of-the-buildings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-purple underline hover:opacity-80 transition-opacity"
            >
              Museum Island
            </a>{" "}
            in Berlin, embodies the ideals of the Enlightenment. Beneath its
            colonnade, Outer-Act introduces new ideals through light, casting a
            contemporary layer onto the architecture and creating an
            intersection between art and technology.
          </>
        }
        images={images2}
        onImageClick={handleOpen}
      />

      <GallerySection
        title="BORN UNDER THE BRIDGE"
        year="2019"
        description="Outer-Act debuted in 2019 at Berliner Rathausbrücke through a series of early experiments. Though not yet equipped with motion-detection devices and based on a simple looping sequence, the character on display captured the attention of passersby, revealing signs of interaction even in its initial form."
        images={images1}
        onImageClick={handleOpen}
      />

      {/* LIGHTBOX/CAROUSEL*/}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
          bg-tranparent
          border-none 
          w-full 
          max-w-5xl 
          px-4 sm:px-6
          [&>button]:text-white
    "
        >
          <Carousel
            opts={{ startIndex: selectedIndex }}
            className="relative w-full"
          >
            <CarouselContent>
              {activeImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-[65vh] sm:h-[75vh]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="
          left-2 sm:-left-6
          top-1/2 -translate-y-1/2
          z-20
          h-10 w-10 sm:h-12 sm:w-12
          bg-black/40 backdrop-blur-sm
          text-white border-none
          hover:bg-white hover:text-black
          transition
        "
            />

            <CarouselNext
              className="
          right-2 sm:-right-6
          top-1/2 -translate-y-1/2
          z-20
          h-10 w-10 sm:h-12 sm:w-12
          bg-black/40 backdrop-blur-sm
          text-white border-none
          hover:bg-white hover:text-black
          transition
        "
            />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
