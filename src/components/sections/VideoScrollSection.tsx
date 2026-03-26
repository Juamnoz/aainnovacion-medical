'use client'

import { useRef, useEffect } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

export function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetTimeRef = useRef(0)
  const displayTimeRef = useRef(0)
  const rafRef = useRef<number>(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window

    if (isMobile) {
      // Móvil: simplemente reproducir con autoplay nativo
      video.play().catch(() => {})
      return
    }

    // Desktop: scroll scrubbing
    const LERP = 0.08

    const tick = () => {
      if (video.readyState >= 2 && isFinite(video.duration) && video.duration > 0) {
        displayTimeRef.current += (targetTimeRef.current - displayTimeRef.current) * LERP
        if (Math.abs(video.currentTime - displayTimeRef.current) > 0.001) {
          video.currentTime = displayTimeRef.current
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const initVideo = () => {
      video.pause()
      const t = scrollYProgress.get() * (video.duration || 0)
      targetTimeRef.current = t
      displayTimeRef.current = t
    }

    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (isFinite(video.duration) && video.duration > 0) {
        targetTimeRef.current = v * video.duration
      }
    })

    if (video.readyState >= 1) {
      initVideo()
    } else {
      video.addEventListener('loadedmetadata', initVideo, { once: true })
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      unsubscribe()
    }
  }, [scrollYProgress])

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.12], [40, 0])
  const subtitleOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1])
  const labelOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/video-despiece-canula.mp4"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,31,60,0.55) 0%, rgba(13,31,60,0.15) 40%, rgba(13,31,60,0.15) 60%, rgba(13,31,60,0.75) 100%)',
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="text-xs tracking-[0.3em] uppercase text-blue-300 mb-4"
          >
            Tecnología de Precisión
          </motion.p>
          <motion.h2
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Ingeniería al<br />
            <span className="blue-gradient">Servicio del Cirujano</span>
          </motion.h2>
        </div>

        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-blue-200/70">
            Personalización completa · Tu logo · +1000 productos
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-blue-500"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  )
}
