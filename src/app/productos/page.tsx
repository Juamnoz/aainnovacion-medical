import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products, SITE_URL } from '@/lib/products'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Catalogo de Instrumentos Quirurgicos | +1000 Productos',
  description:
    'Catalogo completo de instrumentos quirurgicos para cirugia plastica: canulas de liposuccion, kits de mamoplastia, rinoplastia, blefaroplastia, equipos y mas. Fabricados en Medellin, Colombia.',
  alternates: { canonical: `${SITE_URL}/productos` },
  openGraph: {
    title: 'Catalogo de Instrumentos Quirurgicos | AA Innovacion Medica',
    description:
      'Mas de 1000 instrumentos quirurgicos fabricados en Medellin. Canulas, kits quirurgicos, equipos de liposuccion y mas.',
    url: `${SITE_URL}/productos`,
    images: [{ url: '/images/logo.jpg', width: 1200, height: 630 }],
  },
}

function ProductCatalogJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Catalogo de Instrumentos Quirurgicos',
    description: 'Catalogo completo de instrumentos quirurgicos para cirugia plastica y estetica.',
    url: `${SITE_URL}/productos`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/productos/${product.slug}`,
        name: product.title,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Productos', item: `${SITE_URL}/productos` },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function ProductosPage() {
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <>
      <Navbar />
      <ProductCatalogJsonLd />
      <main className="pt-24 pb-20 px-6 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              Catalogo Completo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">
              Instrumentos <span className="blue-gradient">Quirurgicos</span>
            </h1>
            <p className="text-blue-800/55 max-w-2xl mx-auto">
              Mas de 1000 productos quirurgicos fabricados en Medellin, Colombia. Personalizables con
              tu logo y marca. Reconocidos por la AMWC con registro INVIMA.
            </p>
          </div>

          {/* Categories */}
          {categories.map((category) => {
            const categoryProducts = products.filter((p) => p.category === category)
            return (
              <section key={category} className="mb-16">
                <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b border-blue-100 pb-3">
                  {category}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/productos/${product.slug}`}
                      className="group rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-300 bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="relative h-48 bg-blue-50">
                        <Image
                          src={product.images[0]}
                          alt={`${product.title} - Instrumental quirurgico fabricado en Medellin`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-blue-700/90 text-white backdrop-blur-sm">
                          {product.tag}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-sm text-blue-800/55 leading-relaxed mb-3">
                          {product.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs text-blue-600 tracking-wide">
                          Ver producto <span className="text-base leading-none">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}

          {/* CTA */}
          <div className="text-center mt-12 p-10 rounded-3xl bg-blue-50 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-950 mb-3">
              No encuentras lo que necesitas?
            </h2>
            <p className="text-blue-800/55 mb-6 max-w-lg mx-auto">
              Fabricamos instrumentos a medida. Contactanos para una cotizacion personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contacto"
                className="px-8 py-3 rounded-full bg-blue-700 text-white text-sm hover:bg-blue-800 transition-colors tracking-wide"
              >
                Solicitar Cotizacion
              </a>
              <a
                href="https://wa.me/573015249497?text=Hola%2C%20me%20interesa%20conocer%20sus%20productos%20quir%C3%BArgicos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-green-300 text-green-700 text-sm hover:bg-green-50 transition-colors tracking-wide"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
