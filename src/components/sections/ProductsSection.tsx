'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Product {
  title: string
  description: string
  images: string[]
  tag: string
}

const products: Product[] = [
  {
    title: 'Canulas de Liposuccion',
    description: 'Sistema de canulas disenadas para liposuccion de alta precision. Disponibles en multiples calibres y longitudes.',
    images: [
      '/images/products/canulas-1.png',
      '/images/products/canulas-2.png',
      '/images/products/canulas-3.png',
      '/images/products/canulas-4.png',
      '/images/products/canulas-5.png',
    ],
    tag: 'Best Seller',
  },
  {
    title: 'Kit Mamoplastia',
    description: 'Set completo de instrumentos para cirugia de aumento y reduccion mamaria, con acabados de alta resistencia.',
    images: [
      '/images/products/kit-mamoplastia/1.png',
      '/images/products/kit-mamoplastia/2.png',
      '/images/products/kit-mamoplastia/3.png',
      '/images/products/kit-mamoplastia/4.png',
    ],
    tag: 'Kit Completo',
  },
  {
    title: 'Kit Abdominoplastia',
    description: 'Instrumental especializado para procedimientos de abdominoplastia con ergonomia optimizada.',
    images: [
      '/images/products/kit-abdominoplastia/1.png',
      '/images/products/kit-abdominoplastia/2.png',
    ],
    tag: 'Kit Completo',
  },
  {
    title: 'Kit Rinoplastia',
    description: 'Kit completo de instrumentos para rinoplastia con pinzas, cinceles y especulos de alta precision.',
    images: [
      '/images/products/kit-rinoplastia/1.png',
      '/images/products/kit-rinoplastia/2.png',
      '/images/products/kit-rinoplastia/3.png',
    ],
    tag: 'Kit Completo',
  },
  {
    title: 'Kit Blefaroplastia',
    description: 'Instrumental completo para cirugia de parpados con tijeras, pinzas y portaagujas de microcirugia.',
    images: [
      '/images/products/kit-blefaroplastia/1.png',
      '/images/products/kit-blefaroplastia/2.png',
      '/images/products/kit-blefaroplastia/3.png',
      '/images/products/kit-blefaroplastia/4.png',
    ],
    tag: 'Kit Completo',
  },
  {
    title: 'Equipo de Liposuccion',
    description: 'Maquina y accesorios para procedimientos de liposuccion asistida, con tecnologia nacional de vanguardia.',
    images: [
      '/images/products/equipo-lipo/1.png',
      '/images/products/equipo-lipo/2.png',
      '/images/products/equipo-lipo/3.png',
    ],
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

function ProductCard({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0)
  const hasGallery = product.images.length > 1

  return (
    <>
      <div className="relative h-56 overflow-hidden bg-blue-50">
        <Image
          src={product.images[activeImg]}
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
      {hasGallery && (
        <div className="flex gap-1.5 px-6 pt-3">
          {product.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className={`relative h-12 flex-1 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeImg ? 'border-blue-600 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`${product.title} ${i + 1}`} fill className="object-cover" sizes="100px" />
            </button>
          ))}
        </div>
      )}
      <div className="p-6 pt-3">
        <h3 className="font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-blue-800/55 leading-relaxed mb-4">{product.description}</p>
        <a href="#contacto" className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 transition-colors tracking-wide">
          Solicitar informacion <span className="text-base leading-none">→</span>
        </a>
      </div>
    </>
  )
}

function MobileProductCard({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0)
  const hasGallery = product.images.length > 1

  return (
    <article
      className="group rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-sm flex-shrink-0 snap-start"
      style={{ width: '72vw' }}
    >
      <div className="relative bg-blue-50" style={{ height: '44vw' }}>
        <Image
          src={product.images[activeImg]}
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
      {hasGallery && (
        <div className="flex gap-1 px-4 pt-2">
          {product.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className={`relative h-10 flex-1 rounded-md overflow-hidden border-2 transition-all ${
                i === activeImg ? 'border-blue-600' : 'border-transparent opacity-60'
              }`}
            >
              <Image src={img} alt={`${product.title} ${i + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
      <div className="p-4 pt-2">
        <h3 className="font-semibold text-blue-950 mb-1 text-sm">{product.title}</h3>
        <p className="text-xs text-blue-800/55 leading-relaxed mb-3">{product.description}</p>
        <a href="#contacto" className="inline-flex items-center gap-1 text-xs text-blue-600 tracking-wide">
          Solicitar informacion <span>→</span>
        </a>
      </div>
    </article>
  )
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
            Catalogo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">
            Linea de <span className="blue-gradient">Productos</span>
          </h2>
          <p className="text-blue-800/55 max-w-xl mx-auto">
            Instrumentos y equipos disenados especificamente para las demandas de la
            cirugia plastica y estetica moderna.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll slider */}
        <div className="sm:hidden -mx-6 px-6">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {products.map((product) => (
              <MobileProductCard key={product.title} product={product} />
            ))}
          </div>
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
              <ProductCard product={product} />
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
            No encuentras lo que necesitas? Fabricamos a medida.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3 rounded-full border border-blue-600/50 text-blue-700 text-sm hover:bg-blue-700 hover:text-white transition-all duration-200 tracking-wide"
          >
            Consultar Catalogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
