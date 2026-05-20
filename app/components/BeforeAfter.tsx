"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const pairs = [
  {
    before: "/recursos/imagenes/vale/Antes/vale-2.jpeg",
    after: "/recursos/imagenes/vale/Despues/valeria-2.jpeg",
    label: "Nutrición & definición",
  },
  {
    before: "/recursos/imagenes/vale/Antes/vale-1.jpeg",
    after: "/recursos/imagenes/vale/Despues/valeria-1.jpeg",
    label: "Hidratación profunda",
  },
];

export default function BeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {pairs.map((pair) => (
        <div key={pair.label} className="flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 480 }}>
            <ReactCompareSlider
              style={{ width: "100%", height: "100%" }}
              handle={
                <div className="flex flex-col items-center gap-1 select-none">
                  <div className="w-0.5 h-16 bg-white/80" />
                  <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                    </svg>
                  </div>
                  <div className="w-0.5 h-16 bg-white/80" />
                </div>
              }
              itemOne={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src={pair.before}
                    alt="Antes"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Antes
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src={pair.after}
                    alt="Después"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Después
                  </div>
                </div>
              }
            />
          </div>
          <p className="text-center text-pink-500 font-semibold text-sm uppercase tracking-widest">
            {pair.label}
          </p>
        </div>
      ))}
    </div>
  );
}
