"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const reviews = [
  {
    name: "Vane",
    tag: "Clienta GLOW",
    quote: "Llegó mi salvación 😭🤍 Jamás había visto mis rizos así de definidos.",
    screenshot: "/recursos/imagenes/reseñas/resena-1.jpeg",
    stars: 5,
  },
  {
    name: "Clienta",
    tag: "Clienta verificada",
    quote: "En términos de dar, la dio toda. El color y la textura... Maigaaaa. Me encantó, divino.",
    screenshot: "/recursos/imagenes/reseñas/resena-2.jpeg",
    stars: 5,
  },
];

export default function Testimonials() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {reviews.map((r, i) => (
        <motion.div
          key={r.name + i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative rounded-3xl overflow-hidden border border-pink-500/20 bg-[#1a0810] shadow-2xl flex flex-col"
        >
          {/* Quote superior */}
          <div className="p-7 flex flex-col gap-4" style={{ height: 220 }}>
            {/* Estrellas */}
            <div className="flex gap-1">
              {[...Array(r.stars)].map((_, j) => (
                <svg key={j} className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Comilla decorativa */}
            <svg className="w-8 h-8 text-pink-500/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-white/90 text-lg leading-relaxed font-medium italic">
              "{r.quote}"
            </p>

            {/* Autor */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 font-bold text-lg">
                {r.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                  <p className="text-pink-400 text-xs">{r.tag}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot como prueba */}
          <div
            className="relative overflow-hidden group cursor-zoom-in"
            style={{ height: 500 }}
            onClick={() => setLightboxIndex(i)}
          >
            <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Reseña real
            </div>
            <Image
              src={r.screenshot}
              alt={`Reseña de ${r.name}`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Icono ampliar */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0zM11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <Lightbox
      open={lightboxIndex >= 0}
      index={lightboxIndex}
      close={() => setLightboxIndex(-1)}
      slides={reviews.map((r) => ({ src: r.screenshot }))}
      styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
    />
    </>
  );
}
