'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Building2, Microscope } from 'lucide-react'

const audiences = [
  {
    icon: Stethoscope,
    title: 'Cirujanos Plásticos',
    description:
      'Instrumentos diseñados con feedback de especialistas en cirugía plástica y estética para maximizar el control, la ergonomía y los resultados clínicos.',
    points: [
      'Ergonomía adaptada para procedimientos de larga duración',
      'Acabados de alta resistencia y fácil esterilización',
      'Instrumentos personalizables bajo pedido',
    ],
  },
  {
    icon: Building2,
    title: 'Clínicas de Cirugía',
    description:
      'Soluciones integrales para dotar quirófanos y consultorios con instrumental completo y kits especializados a precio directo de fabricante.',
    points: [
      'Kits completos por especialidad',
      'Precios de fabricante sin intermediarios',
      'Soporte técnico y reposición garantizados',
    ],
  },
  {
    icon: Microscope,
    title: 'Distribuidores Médicos',
    description:
      'Programa de distribución para mayoristas y distribuidores del sector salud en Colombia y Latinoamérica con condiciones preferenciales.',
    points: [
      'Catálogo amplio para diferentes especialidades',
      'Condiciones comerciales preferenciales',
      'Certificaciones y documentación completa',
    ],
  },
]

export function AudienceSection() {
  return (
    <section id="audiencia" className="py-28 px-6 relative overflow-hidden bg-white">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(29,78,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 mb-4 block">
            Nuestros Clientes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">
            Diseñado para <span className="blue-gradient">Profesionales</span>
          </h2>
          <p className="text-blue-800/55 max-w-xl mx-auto">
            Trabajamos directamente con los especialistas que más exigen al instrumental quirúrgico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, i) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 rounded-2xl border border-blue-100 hover:border-blue-300 bg-blue-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{audience.title}</h3>
                <p className="text-blue-800/55 text-sm leading-relaxed mb-6">
                  {audience.description}
                </p>
                <ul className="space-y-2">
                  {audience.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-blue-800/55">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
