'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/573015249497?text=Hola%2C%20me%20interesa%20conocer%20sus%20productos%20quir%C3%BArgicos"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.744 3.046 9.378L1.054 31.29l6.118-1.96a15.922 15.922 0 008.832 2.67C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.39 1.1-2.282 2.104-3.148 2.178-.792.068-1.548.382-5.216-1.088-4.414-1.77-7.216-6.27-7.434-6.562-.216-.29-1.77-2.354-1.77-4.49s1.12-3.186 1.518-3.62c.398-.434.868-.542 1.158-.542.29 0 .578.002.832.016.266.014.624-.1.978.746.362.868 1.23 3.006 1.338 3.224.108.216.18.47.036.76-.144.29-.216.47-.434.724-.216.252-.456.564-.652.758-.216.216-.442.45-.19.884.252.434 1.12 1.848 2.406 2.994 1.652 1.472 3.044 1.928 3.478 2.144.434.216.686.18.938-.108.252-.29 1.084-1.264 1.374-1.698.29-.434.578-.362.978-.216.398.144 2.534 1.196 2.968 1.412.434.216.724.326.832.506.108.18.108 1.048-.282 2.148z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
