'use client'

import { useState } from 'react'
import Image from 'next/image'

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blue-50 mb-3">
        <Image
          src={images[active]}
          alt={`${title} - Vista ${active + 1} - Instrumental quirurgico AA Innovacion Medica Medellin`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative h-16 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                i === active
                  ? 'border-blue-600 shadow-md'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${title} miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
