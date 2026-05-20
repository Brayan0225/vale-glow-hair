"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pairs = [
  {
    before: { src: "/recursos/imagenes/vale/Antes/vale-2.jpeg", label: "Cabello seco y sin vida" },
    after: { src: "/recursos/imagenes/vale/Despues/valeria-2.jpeg", label: "Rizos definidos y brillantes" },
  },
  {
    before: { src: "/recursos/imagenes/vale/Antes/vale-1.jpeg", label: "Sin tratamiento" },
    after: { src: "/recursos/imagenes/vale/Despues/valeria-1.jpeg", label: "Nutrida y radiante" },
  },
];

export default function BeforeAfter() {
  return (
    <div className="flex flex-col gap-12">
      {pairs.map((pair, i) => (
        <motion.div
          key={i}
          className="grid grid-cols-2 gap-2 md:gap-4 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          {/* ANTES */}
          <div className="relative group overflow-hidden" style={{ height: 480 }}>
            <Image
              src={pair.before.src}
              alt="Antes"
              fill
              className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-4 left-4">
              <span className="bg-black/70 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Antes
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/80 text-sm">{pair.before.label}</p>
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="relative group overflow-hidden" style={{ height: 480 }}>
            <Image
              src={pair.after.src}
              alt="Después"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                Después
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-semibold text-sm">{pair.after.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
