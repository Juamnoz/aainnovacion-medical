import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProductBySlug, SITE_URL } from '@/lib/products'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { ProductGallery } from './product-gallery'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const title = `${product.title} | Instrumentos Quirurgicos Medellin`
  const description = product.longDescription.slice(0, 160)

  return {
    title,
    description,
    keywords: product.keywords,
    alternates: { canonical: `${SITE_URL}/productos/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/productos/${product.slug}`,
      images: product.images.map((img) => ({
        url: img,
        width: 800,
        height: 600,
        alt: `${product.title} - AA Innovacion Medica`,
      })),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description,
      images: [product.images[0]],
    },
  }
}

function ProductJsonLd({ product }: { product: NonNullable<ReturnType<typeof getProductBySlug>> }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.longDescription,
    image: product.images.map((img) => `${SITE_URL}${img}`),
    brand: {
      '@type': 'Brand',
      name: 'AA Innovacion Medica',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'AA Innovacion Medica',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Medellin',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'COP',
      seller: {
        '@type': 'Organization',
        name: 'AA Innovacion Medica',
      },
      areaServed: { '@type': 'Country', name: 'Colombia' },
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Productos', item: `${SITE_URL}/productos` },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: `${SITE_URL}/productos/${product.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <ProductJsonLd product={product} />
      <main className="pt-24 pb-20 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-blue-800/50">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/productos" className="hover:text-blue-700 transition-colors">
                  Productos
                </Link>
              </li>
              <li>/</li>
              <li className="text-blue-950 font-medium">{product.title}</li>
            </ol>
          </nav>

          {/* Product */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} title={product.title} />

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 w-fit mb-4">
                {product.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
                {product.title}
              </h1>
              <p className="text-blue-800/60 leading-relaxed mb-6">{product.longDescription}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-blue-800/70">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs flex-shrink-0">
                    ✓
                  </span>
                  Personalizable con tu logo y marca
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-800/70">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs flex-shrink-0">
                    ✓
                  </span>
                  Fabricado en Medellin, Colombia
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-800/70">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs flex-shrink-0">
                    ✓
                  </span>
                  Registro INVIMA · Certificacion BPM
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-800/70">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs flex-shrink-0">
                    ✓
                  </span>
                  Entrega express en 48 horas
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/573015249497?text=${encodeURIComponent(`Hola, me interesa el producto: ${product.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition-colors tracking-wide shadow-lg shadow-green-600/20"
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-blue-200 text-blue-700 text-sm hover:bg-blue-50 transition-colors tracking-wide"
                >
                  Solicitar Cotizacion
                </a>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-24">
              <h2 className="text-2xl font-bold text-blue-950 mb-8">Productos Relacionados</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/productos/${rel.slug}`}
                    className="group rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-300 bg-white transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-44 bg-blue-50">
                      <Image
                        src={rel.images[0]}
                        alt={`${rel.title} - Instrumental quirurgico`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-blue-950 group-hover:text-blue-700 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-sm text-blue-800/55 mt-1 line-clamp-2">{rel.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
