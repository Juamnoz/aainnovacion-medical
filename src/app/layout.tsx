import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/products'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AA Innovacion Medica | Instrumentos Quirurgicos Personalizados · Medellin',
    template: '%s | AA Innovacion Medica',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'instrumentos quirurgicos',
    'canulas liposuccion',
    'cirugia plastica',
    'fabricantes Medellin',
    'kit mamoplastia',
    'kit abdominoplastia',
    'kit rinoplastia',
    'kit blefaroplastia',
    'equipo liposuccion',
    'instrumental quirurgico Colombia',
    'pinzas quirurgicas',
    'tijeras microcirugia',
    'instrumental personalizado',
    'dispositivos medicos Colombia',
    'fabricante instrumental quirurgico',
    'kit implante capilar',
    'instrumentos cirugia plastica Medellin',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'AA Innovacion Medica | Instrumentos Quirurgicos Personalizados',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'AA Innovacion Medica - Instrumentos Quirurgicos Fabricados en Medellin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AA Innovacion Medica | Instrumentos Quirurgicos Personalizados',
    description: SITE_DESCRIPTION,
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'TU_CODIGO_DE_VERIFICACION_GOOGLE',
  },
  icons: {
    icon: '/images/logo-round.png',
    apple: '/images/logo-round.png',
  },
}

function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'AA Innovacion Medica',
    alternateName: 'AA Innovacion Medica S.A.S',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpg`,
    image: `${SITE_URL}/images/logo.jpg`,
    telephone: ['+573145115573', '+573015249497'],
    email: 'ventas@innovacionmedical.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellin',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.2442,
      longitude: -75.5812,
    },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'AdministrativeArea', name: 'Latinoamerica' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'COP',
    paymentAccepted: 'Transferencia bancaria, Efectivo',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Instrumentos Quirurgicos',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Canulas de Liposuccion',
          description: 'Canulas de aspiracion en multiples calibres y longitudes',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Kits Quirurgicos',
          description: 'Kits completos para mamoplastia, abdominoplastia, rinoplastia, blefaroplastia',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Equipos de Liposuccion',
          description: 'Maquinas y accesorios para liposuccion asistida',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Instrumental de Microcirugia',
          description: 'Pinzas, tijeras, portaagujas y disectores de precision',
        },
      ],
    },
    sameAs: [],
    knowsAbout: [
      'Instrumentos quirurgicos',
      'Cirugia plastica',
      'Liposuccion',
      'Mamoplastia',
      'Rinoplastia',
      'Blefaroplastia',
      'Microcirugia',
    ],
    award: 'Reconocimiento AMWC - Aesthetic & Anti-Aging Medicine World Congress',
    certification: [
      {
        '@type': 'Certification',
        name: 'Registro INVIMA',
        issuedBy: { '@type': 'Organization', name: 'INVIMA Colombia' },
      },
      {
        '@type': 'Certification',
        name: 'Buenas Practicas de Manufactura (BPM)',
      },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'AA Innovacion Medica',
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'es-CO',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
