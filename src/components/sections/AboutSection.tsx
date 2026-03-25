'use client'

import { motion } from 'framer-motion'
import { Shield, Award, MapPin, Zap } from 'lucide-react'

const stats = [
  { value: '+1000', label: 'Productos en catálogo' },
  { value: '100%', label: 'Personalización disponible' },
  { value: '48h', label: 'Tiempo de entrega express' },
  { value: '15+', label: 'Años de experiencia' },
]

const pillars = [
  {
    icon: Shield,
    title: 'Tu Logo, Tu Marca',
    description:
      'Personalizamos cada instrumento con tu logo y branding. Tu identidad en cada cánula y cada kit.',
  },
  {
    icon: Award,
    title: 'Reconocidos por la AMWC',
    description:
      'Avalados por el congreso médico más grande del mundo. Calidad certificada a nivel internacional.',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description:
      'Tiempos de entrega express. Fabricación ágil sin sacrificar la precisión ni la calidad.',
  },
  {
    icon: MapPin,
    title: 'Fabricado en Colombia',
    description:
      'Taller propio en Medellín con tecnología láser. Precio de fabricante, sin intermediarios.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export function AboutSection() {
  return (
    <section id="nosotros" className="py-28 px-6 relative overflow-hidden bg-white">
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-[0.06]"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(59,130,246,1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 mb-4 block">
            Quiénes Somos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            Instrumentos quirúrgicos<br />
            <span className="blue-gradient">con tu identidad</span>
          </h2>
          <p className="text-blue-800/60 text-lg leading-relaxed mb-8">
            En AA Innovación Médica fabricamos más de 1000 productos quirúrgicos y los personalizamos
            completamente — con tu logo, tus medidas y tu marca. Cirujanos plásticos y clínicas de
            toda Colombia y Latinoamérica confían en nuestra fabricación propia en Medellín.
          </p>

          {/* Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {/* AMWC Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-yellow-300 bg-yellow-50">
              <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sello-amwc.png"
                  alt="Sello AMWC"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-yellow-900">Reconocidos por la AMWC</p>
                <p className="text-xs text-yellow-800/70">Congreso médico más grande del mundo</p>
              </div>
            </div>

            {/* INVIMA Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-green-200 bg-green-50">
              <div className="w-16 h-8 flex-shrink-0 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.invima.gov.co/web/image/website/18/logo/Invima?unique=d025cd0"
                  alt="INVIMA"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-900">Registro INVIMA</p>
                <p className="text-xs text-green-800/60">Dispositivos médicos certificados</p>
              </div>
            </div>

            {/* BPM Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-blue-200 bg-blue-50">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-blue-700" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-950">Buenas Prácticas de Manufactura</p>
                <p className="text-xs text-blue-800/55">Fabricación bajo estándares BPM</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-blue-100 rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              className="bg-white p-8 text-center"
            >
              <div className="text-4xl font-bold blue-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-blue-800/50 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-blue-100 hover:border-blue-300 bg-blue-50/50 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-blue-950 mb-2">{pillar.title}</h3>
                <p className="text-sm text-blue-800/55 leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
