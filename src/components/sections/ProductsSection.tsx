'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    title: 'Cánulas de Liposucción',
    description: 'Sistema de cánulas diseñadas para liposucción de alta precisión. Disponibles en múltiples calibres y longitudes.',
    image: '/images/products/canulas.jpg',
    tag: 'Best Seller',
  },
  {
    title: 'Kit Mamoplastia',
    description: 'Set completo de instrumentos para cirugía de aumento y reducción mamaria, con acabados de alta resistencia.',
    image: '/images/products/mamoplastia.jpg',
    tag: 'Kit Completo',
  },
  {
    title: 'Kit Abdominoplastia',
    description: 'Instrumental especializado para procedimientos de abdominoplastia con ergonomía optimizada.',
    image: '/images/products/abdominoplastia.jpg',
    tag: 'Kit Completo',
  },
  {
    title: 'Valvas Quirúrgicas',
    description: 'Valvas de retracción en acero inoxidable de grado médico, diseñadas para exposición óptima del campo operatorio.',
    image: '/images/products/valvas.jpg',
    tag: 'Instrumental',
  },
  {
    title: 'Pinzas de Precisión',
    description: 'Pinzas quirúrgicas de alta precisión para procedimientos estéticos y reconstructivos.',
    image: '/images/products/pinzas.jpg',
    tag: 'Instrumental',
  },
  {
    title: 'Equipo de Liposucción',
    description: 'Máquina y accesorios para procedimientos de liposucción asistida, con tecnología nacional de vanguardia.',
    image: '/images/products/liposuccion.jpg',
    tag: 'Equipo',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

export function ProductsSection() {
  return (
    <section id="productos" className="py-28 px-6 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-blue-600 mb-4 block">
            Catálogo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">
            Línea de <span className="blue-gradient">Productos</span>
          </h2>
          <p className="text-blue-800/55 max-w-xl mx-auto">
            Instrumentos y equipos diseñados específicamente para las demandas de la
            cirugía plástica y estética moderna.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll slider / Desktop: grid */}
        <div className="sm:hidden -mx-6 px-6">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {products.map((product) => (
              <article
                key={product.title}
                className="group rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-sm flex-shrink-0 snap-start"
                style={{ width: '72vw' }}
              >
                <div className="relative bg-blue-50" style={{ height: '44vw' }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="72vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,31,60,0.4), transparent)' }} />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-blue-700/90 text-white backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-blue-950 mb-1 text-sm">{product.title}</h3>
                  <p className="text-xs text-blue-800/55 leading-relaxed mb-3">{product.description}</p>
                  <a href="#contacto" className="inline-flex items-center gap-1 text-xs text-blue-600 tracking-wide">
                    Solicitar información <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* Scroll hint dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {products.map((p) => (
              <div key={p.title} className="w-1.5 h-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.article
              key={product.title}
              variants={cardVariants}
              className="group rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-300 bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100"
            >
              <div className="relative h-56 overflow-hidden bg-blue-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,31,60,0.4), transparent)' }} />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-blue-700/90 text-white backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-blue-800/55 leading-relaxed mb-4">{product.description}</p>
                <a href="#contacto" className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 transition-colors tracking-wide">
                  Solicitar información <span className="text-base leading-none">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-blue-800/50 text-sm mb-4">
            ¿No encuentras lo que necesitas? Fabricamos a medida.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3 rounded-full border border-blue-600/50 text-blue-700 text-sm hover:bg-blue-700 hover:text-white transition-all duration-200 tracking-wide"
          >
            Consultar Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
