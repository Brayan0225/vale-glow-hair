"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLightbox from "./AppLightbox";

const images = [
  { src: "/recursos/imagenes/vale/valeria-2.jpeg", label: "Rizos definidos ✨" },
  { src: "/recursos/imagenes/vale/valeria-3.jpeg", label: "Nutrición profunda" },
  { src: "/recursos/imagenes/vale/valeria-4.jpeg", label: "Brillo natural" },
  { src: "/recursos/imagenes/vale/valeria-5.jpeg", label: "Hidratación" },
  { src: "/recursos/imagenes/reseñas/resena-1.jpeg", label: "Clienta feliz 🩷" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Imagen grande */}
        <motion.div
          variants={item}
          className="col-span-1 row-span-2 md:row-span-2 relative overflow-hidden rounded-3xl cursor-pointer"
          style={{ minHeight: 320 }}
          whileHover="hover"
          onClick={() => setIndex(0)}
        >
          <motion.div
            className="w-full h-full"
            variants={{ hover: { scale: 1.07 } }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image src={images[0].src} alt={images[0].label} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <motion.span
            className="absolute bottom-4 left-4 text-white text-sm font-semibold"
            variants={{ hover: { opacity: 1, y: 0 } }}
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            {images[0].label}
          </motion.span>
          {/* Icono lupa */}
          <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Imágenes pequeñas */}
        {images.slice(1).map((img, i) => (
          <motion.div
            key={img.src}
            variants={item}
            className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            whileHover="hover"
            onClick={() => setIndex(i + 1)}
          >
            <motion.div
              className="w-full h-full"
              variants={{ hover: { scale: 1.09 } }}
              transition={{ duration: 0.45, ease: "easeOut" as const }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image src={img.src} alt={img.label} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <motion.span
              className="absolute bottom-3 left-3 text-white text-xs font-semibold"
              variants={{ hover: { opacity: 1, y: 0 } }}
              initial={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
            >
              {img.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      <AppLightbox
        open={index >= 0}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
        onClose={() => setIndex(-1)}
      />
    </>
  );
}
