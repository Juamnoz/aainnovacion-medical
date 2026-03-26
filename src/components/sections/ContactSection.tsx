'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Medellín, Antioquia, Colombia',
    sub: 'Fabricación y distribución nacional',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 314 511 5573',
    sub: 'Lunes a viernes, 8am – 6pm',
    href: 'tel:+573145115573',
  },
  {
    icon: Phone,
    label: 'Teléfono 2',
    value: '+57 301 524 9497',
    sub: 'Lunes a viernes, 8am – 6pm',
    href: 'tel:+573015249497',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'ventas@innovacionmedical.com',
    sub: 'Respuesta en menos de 24h',
    href: 'mailto:ventas@innovacionmedical.com',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun – Vie: 8:00 – 18:00',
    sub: 'Sábados con cita previa',
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-28 px-6 relative overflow-hidden bg-blue-50/40">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)',
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
            Contáctanos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-4">
            Hablemos de tu <span className="blue-gradient">Proyecto</span>
          </h2>
          <p className="text-blue-800/55 max-w-xl mx-auto">
            Cuéntanos qué necesitas. Fabricamos a medida, asesoramos y entregamos
            directamente a tu clínica o quirófano.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div
                  className="flex items-start gap-4 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 bg-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-800/50 tracking-wide uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-blue-950">{item.value}</p>
                    <p className="text-sm text-blue-800/50 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a href={item.href} className="block">{content}</a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/573015249497?text=Hola%2C%20me%20interesa%20conocer%20sus%20productos%20quirúrgicos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-green-50 border border-green-200 hover:bg-green-100 hover:border-green-400 transition-all duration-200 group"
            >
              <MessageCircle size={20} className="text-green-600" />
              <span className="font-medium text-green-700 group-hover:text-green-800 transition-colors">
                Escribir por WhatsApp
              </span>
            </motion.a>
          </motion.div>

          {/* Map + form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Map embed */}
            <div className="flex-1 min-h-64 rounded-2xl overflow-hidden border border-blue-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.47!2d-75.6247!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8468b1b4e1f7c3a1%3A0x0!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación AA Innovación Médica – Medellín"
              />
            </div>

            {/* Quick quote form */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6">
              <h3 className="font-semibold text-blue-950 mb-4">Solicitar cotización rápida</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-blue-50 border border-blue-100 text-blue-950 placeholder-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-blue-50 border border-blue-100 text-blue-950 placeholder-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <textarea
                  placeholder="Describa los productos o instrumentos que necesita..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-blue-50 border border-blue-100 text-blue-950 placeholder-blue-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <button
                  type="button"
                  className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide bg-blue-700 text-white hover:bg-blue-600 transition-all duration-200"
                >
                  Enviar Solicitud
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
