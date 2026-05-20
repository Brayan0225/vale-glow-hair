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
      {/* MÓVIL: img full / 2 cols / img full */}
      <motion.div
        className="flex flex-col gap-4 md:hidden"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <GalleryItem img={images[0]} index={0} onClick={setIndex}
          className="w-full" style={{ aspectRatio: "4/3" }} labelSize="text-sm" />
        <div className="grid grid-cols-2 gap-4">
          <GalleryItem img={images[1]} index={1} onClick={setIndex}
            className="" style={{ aspectRatio: "1/1" }} />
          <GalleryItem img={images[2]} index={2} onClick={setIndex}
            className="" style={{ aspectRatio: "1/1" }} />
        </div>
        <GalleryItem img={images[3]} index={3} onClick={setIndex}
          className="w-full" style={{ aspectRatio: "4/3" }} labelSize="text-sm" />
      </motion.div>

      {/* PC: 1 tall izq + 2 arriba der + 1 wide abajo der */}
      <motion.div
        className="hidden md:grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "300px 300px" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <GalleryItem img={images[0]} index={0} onClick={setIndex}
          className="row-span-2" style={{}} labelSize="text-sm" />
        <GalleryItem img={images[1]} index={1} onClick={setIndex}
          className="" style={{}} />
        <GalleryItem img={images[2]} index={2} onClick={setIndex}
          className="" style={{}} />
        <GalleryItem img={images[3]} index={3} onClick={setIndex}
          className="col-span-2" style={{}} labelSize="text-sm" />
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
