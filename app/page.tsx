import Image from "next/image";
import Gallery from "./components/Gallery";

const WA_NUMBER = "573003980014";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;
const WA_MSG = encodeURIComponent("Hola Vale! Quiero saber más sobre los tratamientos capilares 🌿");
const WA_LINK = `${WA_BASE}?text=${WA_MSG}`;

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #120608 0%, #2d0a18 60%, #1a0612 100%)" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #e91e8c, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #c2185b, transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-7 text-center md:text-left order-2 md:order-1">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-px bg-pink-500"></span>
              <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">100% Natural</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Tu cabello
              <br />
              <span className="neon-text">merece brillar</span>
            </h1>

            <p className="text-pink-100/70 text-lg leading-relaxed max-w-md">
              Tratamientos capilares naturales para nutrir, reparar y resaltar
              la belleza de tu cabello. Especial para rizos y todo tipo de cabello.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp text-white font-bold text-base px-8 py-4 rounded-full inline-flex items-center justify-center gap-3">
                <WhatsAppIcon />
                Pedir ahora
              </a>
              <a href="#resultados"
                className="border border-pink-500/40 text-pink-300 font-medium text-base px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-pink-500/10 transition-colors">
                Ver resultados
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white">100%</p>
                <p className="text-pink-300/60 text-xs">Natural</p>
              </div>
              <div className="w-px h-8 bg-pink-500/30" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white">★ 5.0</p>
                <p className="text-pink-300/60 text-xs">Reseñas</p>
              </div>
              <div className="w-px h-8 bg-pink-500/30" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white">Envíos</p>
                <p className="text-pink-300/60 text-xs">Disponibles</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, #e91e8c, transparent 70%)" }}
            />
            <div className="relative">
              <Image
                src="/recursos/imagenes/logos/logo_completo.jpeg"
                alt="Vale Glow Hair"
                width={380}
                height={460}
                className="rounded-3xl shadow-2xl relative z-10"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-xl z-20">
                ✨ Resultados visibles
              </div>
              <div className="absolute -top-4 -right-4 bg-[#120608] border border-pink-500/40 text-pink-300 text-xs font-semibold px-4 py-2 rounded-2xl shadow-xl z-20">
                🌿 Hecho con amor
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── PRODUCTO ──────────────────────────────────────── */}
      <section id="producto" className="py-20 px-6 bg-[#fdf6f0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-500 font-semibold text-sm uppercase tracking-widest">El secreto</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#120608] mt-2">
              Nutrición desde la raíz
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/recursos/imagenes/vale/valeria-1.jpeg"
                alt="Resultado Vale Glow Hair"
                width={500}
                height={600}
                className="rounded-3xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                100% Natural
              </div>
            </div>

            <div className="space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 items-start card-hover bg-white rounded-2xl p-5 shadow-sm">
                  <span className="text-3xl">{b.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#120608] text-lg">{b.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ────────────────────────────────────── */}
      <section id="resultados" className="py-20 px-6" style={{ background: "#120608" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest">Antes y después</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 inline-block transition-transform duration-300 hover:scale-110 cursor-default">
              Resultados reales
            </h2>
            <p className="text-pink-200/70 mt-3">Fotos de clientas reales, sin filtros</p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────── */}
      <section id="testimonios" className="py-20 px-6 bg-[#fdf6f0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-500 font-semibold text-sm uppercase tracking-widest">Lo que dicen</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#120608] mt-2">
              Nuestras clientas hablan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">
              <Image
                src="/recursos/imagenes/reseñas/resena-1.jpeg"
                alt="Reseña clienta 1"
                width={500}
                height={700}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">
              <Image
                src="/recursos/imagenes/reseñas/resena-2.jpeg"
                alt="Reseña clienta 2"
                width={500}
                height={700}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO COMPRAR ──────────────────────────────────── */}
      <section id="comprar"
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #2d0a18 0%, #120608 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest">Fácil y rápido</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-14">
            Cómo pedir tu tratamiento
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-sm -mt-2">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-white text-lg">{s.title}</h3>
                <p className="text-pink-200/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp text-white font-bold text-xl px-14 py-5 rounded-full inline-flex items-center gap-3">
            <WhatsAppIcon size={28} />
            Escríbeme ahora
          </a>
          <p className="text-pink-300/50 text-sm mt-4">3003980014</p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-[#0a0306] py-10 px-6 text-center">
        <Image
          src="/recursos/imagenes/logos/logo_redondo_fondo_negro.jpeg"
          alt="Vale Glow Hair"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4"
        />
        <p className="font-heading text-pink-400 text-xl font-bold">Vale Glow Hair</p>
        <p className="text-pink-200/50 text-sm mt-1">Nutrición capilar 100% natural</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.instagram.com/vale_glowhair" target="_blank" rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors text-sm flex items-center gap-2">
            <InstagramIcon />
            @vale_glowhair
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors text-sm flex items-center gap-2">
            <WhatsAppIcon size={16} />
            3003980014
          </a>
        </div>
        <p className="text-pink-200/30 text-xs mt-8">
          Hecho con amor para Vale Glow Hair
        </p>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ───────────────────────── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: "linear-gradient(135deg, #e91e8c, #c2185b)", boxShadow: "0 4px 20px rgba(233,30,140,0.5)" }}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>

    </main>
  );
}

// ── DATA ──────────────────────────────────────────────────

const benefits = [
  {
    icon: "🌿",
    title: "100% ingredientes naturales",
    desc: "Sin químicos agresivos. Solo lo mejor de la naturaleza para tu cabello.",
  },
  {
    icon: "💧",
    title: "Hidratación profunda",
    desc: "Penetra desde la raíz para nutrir y reparar cada hebra.",
  },
  {
    icon: "✨",
    title: "Brillo y definición",
    desc: "Rizos definidos y cabello brillante desde la primera aplicación.",
  },
  {
    icon: "📦",
    title: "Envíos a todo el país",
    desc: "Recibe tu tratamiento en la puerta de tu casa.",
  },
];



const steps = [
  {
    icon: "💬",
    title: "Escríbeme",
    desc: "Mándame un mensaje por WhatsApp contándome cómo es tu cabello.",
  },
  {
    icon: "🌿",
    title: "Elegimos tu tratamiento",
    desc: "Te recomiendo el producto ideal según tus necesidades.",
  },
  {
    icon: "📦",
    title: "Recíbelo en casa",
    desc: "Hacemos el envío a donde estés y empiezas a brillar.",
  },
];

// ── ICONS ─────────────────────────────────────────────────

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
