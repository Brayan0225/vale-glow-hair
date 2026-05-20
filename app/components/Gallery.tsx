"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLightbox from "./AppLightbox";

const images = [
  { src: "/recursos/imagenes/vale/valeria-2.jpeg", label: "Rizos definidos ✨" },
  { src: "/recursos/imagenes/vale/valeria-3.jpeg", label: "Nutrición profunda" },
  { src: "/recursos/imagenes/vale/valeria-4.jpeg", label: "Brillo natural" },
  { src: "/recursos/imagenes/vale/valeria-5.jpeg", label: "Hidratación" },
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
        className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4"
        style={{ height: "auto" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Imagen 0 — móvil: ancho completo | PC: col 1 filas 1-2 */}
        <GalleryItem img={images[0]} index={0} onClick={setIndex}
          className="col-span-2 md:col-span-1 md:row-span-2"
          style={{ aspectRatio: "16/9", minHeight: 220 } as React.CSSProperties}
          labelSize="text-sm"
        />

        {/* Imagen 1 — móvil: col 1 | PC: col 2 fila 1 */}
        <GalleryItem img={images[1]} index={1} onClick={setIndex}
          className="col-span-1"
          style={{ aspectRatio: "1/1" }}
        />

        {/* Imagen 2 — móvil: col 2 | PC: col 3 fila 1 */}
        <GalleryItem img={images[2]} index={2} onClick={setIndex}
          className="col-span-1"
          style={{ aspectRatio: "1/1" }}
        />

        {/* Imagen 3 — móvil: ancho completo | PC: cols 2-3 fila 2 */}
        <GalleryItem img={images[3]} index={3} onClick={setIndex}
          className="col-span-2"
          style={{ aspectRatio: "16/7" }}
          labelSize="text-sm"
        />
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

function GalleryItem({
  img, index, onClick, className = "", style = {}, labelSize = "text-xs",
}: {
  img: { src: string; label: string };
  index: number;
  onClick: (i: number) => void;
  className?: string;
  style?: React.CSSProperties;
  labelSize?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
      }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
      style={style}
      whileHover="hover"
      onClick={() => onClick(index)}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hover: { scale: 1.07 } }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
      >
        <Image src={img.src} alt={img.label} fill className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.span
        className={`absolute bottom-3 left-3 text-white font-semibold ${labelSize}`}
        variants={{ hover: { opacity: 1, y: 0 } }}
        initial={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.25 }}
      >
        {img.label}
      </motion.span>
    </motion.div>
  );
}
