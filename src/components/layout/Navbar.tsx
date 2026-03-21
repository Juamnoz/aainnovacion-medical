'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Para Quién', href: '#audiencia' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        borderBottom: `1px solid rgba(29, 78, 216, ${borderOpacity})`,
        backdropFilter: 'blur(12px)',
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-blue-600/30">
            <Image
              src="/images/logo.jpg"
              alt="AA Innovación Médica"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold tracking-wider text-blue-950 hidden sm:block">
            AA INNOVACIÓN MÉDICA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-blue-800/70 hover:text-blue-700 transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-5 py-2 rounded-full border border-blue-600/60 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-200 tracking-wide"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
