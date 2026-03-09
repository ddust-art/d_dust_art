import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GalleryImage = {
  src: string;
  title: string;
};

type GallerySectionProps = {
  title: string;
  year: string;
  description: ReactNode;
  images: GalleryImage[];
  onImageClick: (images: GalleryImage[], index: number) => void;
};

export default function GallerySection({
  title,
  year,
  description,
  images,
  onImageClick,
}: GallerySectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="text-2xl text-tech-green md:text-3xl font-semibold uppercase tracking-wide">
        {title}
      </h2>
      <div className="mt-2 text-sm text-white/40 tracking-widest">{year}</div>

      <p className="my-6 text-white/70 text-lg leading-relaxed text-left text-justify">
        {description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => {
              onImageClick(images, index);
            }}
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
  );
}
