"use client"

import Image from "next/image"

export default function ImageGallery() {
  const images = [
    { src: "/images/g1.jpg", alt: "Gallery Image 1" },
    { src: "/images/g2.jpg", alt: "Gallery Image 2" },
    { src: "/images/g3.jpg", alt: "Gallery Image 3" },
    { src: "/images/g4.jpg", alt: "Gallery Image 4" },
    { src: "/images/g5.jpg", alt: "Gallery Image 5" },
  ]

  return (
  
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-lg">
              Our Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Moments of
            <span className="block text-[#017381]">Care & Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our hospital facilities, patient care, and community engagement through these captured moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
