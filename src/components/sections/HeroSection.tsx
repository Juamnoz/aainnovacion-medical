'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-24">
      {/* YouTube background video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/J1-P9hHFg78?autoplay=1&mute=1&loop=1&playlist=J1-P9hHFg78&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
          allow="autoplay; encrypted-media"
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, calc(100vh * 16/9))',
            height: 'max(100%, calc(100vw * 9/16))',
            border: 'none',
            opacity: 0.5,
          }}
          title="background"
        />
        {/* White overlay to keep text readable */}
        <div className="absolute inset-0 bg-white/60" />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          {/* Badge + mini metro */}
          <div className="inline-flex flex-col items-center gap-1.5">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-blue-700 border border-blue-600/30 rounded-full px-4 py-2 bg-blue-50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Fabricantes en Medellín, Colombia
            </span>

            {/* Metro animation strip */}
            <div className="relative w-64 h-10 rounded-full overflow-hidden border border-green-100 bg-gradient-to-b from-sky-50 to-green-50">
              {/* Overhead wire */}
              <div className="absolute top-1.5 left-0 right-0 h-px bg-gray-400/30" />
              {/* Rail */}
              <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gray-400/25 rounded-full" />
              {/* Train */}
              <motion.div
                className="absolute bottom-2.5"
                animate={{ x: ['270px', '-300px'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
              >
                <svg viewBox="0 0 220 18" height="18" width="220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Locomotive */}
                  <rect x="0" y="2" width="42" height="13" rx="2" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
                  <rect x="0" y="2" width="42" height="4" rx="1.5" fill="#16a34a"/>
                  <rect x="0" y="9"  width="42" height="1.5" fill="#facc15"/>
                  <rect x="-4" y="4" width="5" height="11" rx="2" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
                  <rect x="-4" y="4" width="5" height="3.5" rx="1" fill="#16a34a"/>
                  <rect x="-4" y="9" width="5" height="1.2" fill="#facc15"/>
                  <rect x="-2.5" y="12" width="2" height="1.5" rx="0.4" fill="#fef9c3" stroke="#eab308" strokeWidth="0.3"/>
                  <rect x="4"  y="3.5" width="5" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="11" y="3.5" width="5" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="18" y="3.5" width="5" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="27" y="3.5" width="5" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <circle cx="8"  cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>
                  <circle cx="34" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>

                  {/* Wagon 1 */}
                  <rect x="44" y="2" width="54" height="13" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
                  <rect x="44" y="2" width="54" height="4"   rx="1"   fill="#16a34a"/>
                  <rect x="44" y="9" width="54" height="1.5" fill="#facc15"/>
                  <rect x="48" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="56" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="66" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="76" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <circle cx="52" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>
                  <circle cx="90" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>

                  {/* Wagon 2 */}
                  <rect x="100" y="2" width="54" height="13" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
                  <rect x="100" y="2" width="54" height="4"   rx="1"   fill="#16a34a"/>
                  <rect x="100" y="9" width="54" height="1.5" fill="#facc15"/>
                  <rect x="104" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="112" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="122" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="132" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <circle cx="108" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>
                  <circle cx="146" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>

                  {/* Wagon 3 */}
                  <rect x="156" y="2" width="54" height="13" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
                  <rect x="156" y="2" width="54" height="4"   rx="1"   fill="#16a34a"/>
                  <rect x="156" y="9" width="54" height="1.5" fill="#facc15"/>
                  <rect x="160" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="168" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="178" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <rect x="188" y="3.5" width="6" height="3.5" rx="0.6" fill="#bae6fd" stroke="#93c5fd" strokeWidth="0.3"/>
                  <circle cx="164" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>
                  <circle cx="206" cy="16" r="2" fill="#374151" stroke="#6b7280" strokeWidth="0.4"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6">
          <span className="block text-blue-950">Instrumental</span>
          <span className="block blue-gradient">Personalizado</span>
          <span className="block text-blue-950">con tu Marca</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg sm:text-xl text-blue-800/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          +1000 productos quirúrgicos fabricados en Medellín, personalizados con tu logo.
          Reconocidos por la AMWC · Entrega express · Precio de fabricante.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#productos"
            className="px-8 py-4 rounded-full bg-blue-700 text-white font-semibold text-sm tracking-wide hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-700/20"
          >
            Ver Productos
          </a>
          <a
            href="#nosotros"
            className="px-8 py-4 rounded-full border border-blue-200 text-blue-700 text-sm tracking-wide hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            Conocer Más
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — fuera del flujo del contenido, anclado al fondo */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-blue-400 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
