'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

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
      '/images/products/canulas-6.png',
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

/* ── Quick View Modal ── */
function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActiveImg((p) => (p + 1) % product.images.length)
      if (e.key === 'ArrowLeft') setActiveImg((p) => (p - 1 + product.images.length) % product.images.length)
    },
    [onClose, product.images.length],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col sm:flex-row"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-blue-100 flex items-center justify-center text-blue-800 hover:bg-blue-50 transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        {/* Image side */}
        <div className="relative sm:w-3/5 bg-blue-50 flex-shrink-0">
          <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[activeImg]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((p) => (p - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-800 hover:bg-white transition-colors shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4l-5 5 5 5" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImg((p) => (p + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-800 hover:bg-white transition-colors shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 4l5 5-5 5" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {product.images.map((img, i) => (
                <motion.button
                  key={img}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImg ? 'border-blue-600 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`${product.title} ${i + 1}`} fill className="object-cover" sizes="80px" />
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {/* Info side */}
        <div className="p-8 sm:w-2/5 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 w-fit mb-4"
          >
            {product.tag}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-2xl font-bold text-blue-950 mb-3"
          >
            {product.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-blue-800/60 leading-relaxed mb-6"
          >
            {product.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-3"
          >
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-700 text-white text-sm hover:bg-blue-800 transition-colors tracking-wide shadow-lg shadow-blue-700/25"
            >
              Solicitar Cotizacion
            </a>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-blue-200 text-blue-700 text-sm hover:bg-blue-50 transition-colors tracking-wide"
            >
              Consultar por WhatsApp
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-[11px] text-blue-400 mt-6"
          >
            {product.images.length} fotos disponibles · Usa las flechas para navegar
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: () => void }) {
  const [activeImg, setActiveImg] = useState(0)
  const hasGallery = product.images.length > 1

  return (
    <>
      <div className="relative h-56 overflow-hidden bg-blue-50 cursor-pointer" onClick={onQuickView}>
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
        {/* Quick view hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-blue-800 shadow-lg">
            Ver detalle
          </span>
        </motion.div>
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
        <h3
          className="font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors cursor-pointer"
          onClick={onQuickView}
        >
          {product.title}
        </h3>
        <p className="text-sm text-blue-800/55 leading-relaxed mb-4">{product.description}</p>
        <button
          onClick={onQuickView}
          className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 transition-colors tracking-wide"
        >
          Ver producto <span className="text-base leading-none">→</span>
        </button>
      </div>
    </>
  )
}

function MobileProductCard({ product, onQuickView }: { product: Product; onQuickView: () => void }) {
  const [activeImg, setActiveImg] = useState(0)
  const hasGallery = product.images.length > 1

  return (
    <article
      className="group rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-sm flex-shrink-0 snap-start"
      style={{ width: '72vw' }}
    >
      <div className="relative bg-blue-50 cursor-pointer" style={{ height: '44vw' }} onClick={onQuickView}>
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
        <button onClick={onQuickView} className="inline-flex items-center gap-1 text-xs text-blue-600 tracking-wide">
          Ver producto <span>→</span>
        </button>
      </div>
    </article>
  )
}

export function ProductsSection() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

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
              <MobileProductCard key={product.title} product={product} onQuickView={() => setQuickViewProduct(product)} />
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
              <ProductCard product={product} onQuickView={() => setQuickViewProduct(product)} />
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

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
