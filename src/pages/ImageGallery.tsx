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
import { motion } from "framer-motion";
import galleryCover from "@/assets/image/gallery/gallery-cover.jpg";

const images = [
  {
    src: "src/assets/image/gallery/outer-act_fkm_01.jpg",
    title: "Urban Fragment I",
  },
  {
    src: "src/assets/image/gallery/outer-act_fkm_03.jpg",
    title: "Urban Fragment II",
  },
  {
    src: "src/assets/image/gallery/outer-act_fkm_04.jpg",
    title: "Urban Fragment III",
  },
  {
    src: "src/assets/image/gallery/outer-act_fkm_16.jpg",
    title: "Urban Fragment IV",
  },
  {
    src: "src/assets/image/gallery/outer-act_fkm_18.jpg",
    title: "Urban Fragment V",
  },
  {
    src: "src/assets/image/gallery/outer-act_fkm_21.jpg",
    title: "Urban Fragment VI",
  },
];

export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-almost-black text-white">
      {/* HEADER */}
      <div className="relative h-[60vh] w-full">
        <img
          src={galleryCover}
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

      {/* GALLERY SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl text-tech-green md:text-3xl font-semibold uppercase tracking-wide">
          FEAR AND LOATHING IN FRANKFURT
        </h2>
        <div className="mt-2 text-sm text-white/40 tracking-widest">2020</div>

        <p className="my-6 text-white/70 text-lg leading-relaxed text-left text-justify">
          Due to the first COVID-19 lockdown in Germany, the project Outer-Act
          wandered through an unusually deserted Frankfurt after the light art
          festival Luminale was canceled at the last minute.
        </p>

        {/* MOSAIC GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => handleOpen(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-60"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX / CAROUSEL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
      bg-transparent 
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
              {images.map((image, index) => (
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

            {/* MOBILE POSITION */}
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
