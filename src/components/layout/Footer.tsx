import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-blue-100 px-6 py-12 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-blue-400/30">
                <Image
                  src="/images/logo.jpg"
                  alt="AA Innovación Médica"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-white tracking-wide">AA Innovación Médica</span>
            </div>
            <p className="text-sm text-blue-300/70 leading-relaxed max-w-xs">
              Fabricantes de instrumentos quirúrgicos de alta precisión para cirugía plástica y estética.
              Orgullosamente hechos en Medellín, Colombia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-blue-300/60">
              {['Nosotros', 'Productos', 'Para Quién', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-blue-300/60">
              <li>Medellín, Antioquia</li>
              <li>Colombia</li>
              <li className="pt-1">
                <a href="tel:+573145115573" className="hover:text-white transition-colors">
                  +57 314 511 5573
                </a>
              </li>
              <li>
                <a href="tel:+573015249497" className="hover:text-white transition-colors">
                  +57 301 524 9497
                </a>
              </li>
              <li>
                <a href="mailto:ventas@innovacionmedical.com" className="hover:text-white transition-colors">
                  ventas@innovacionmedical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-400/50 border-t border-blue-800">
          <p>© {new Date().getFullYear()} AA Innovación Médica. Todos los derechos reservados.</p>
          <p>Medellín, Colombia · Fabricación Nacional</p>
        </div>

        {/* Dev credit */}
        <div className="mt-4 text-center text-[11px] text-blue-500/30">
          Desarrollado por <span className="text-blue-400/50 font-medium">AIC Studio</span> · Medellín, Colombia
        </div>
      </div>
    </footer>
  )
}
