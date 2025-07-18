"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageGallery() {
  const images = [
    { src: "/images/g1.jpg", alt: "Gallery Image 1" },
    { src: "/images/g2.jpg", alt: "Gallery Image 2" },
    { src: "/images/g3.jpg", alt: "Gallery Image 3" },
    { src: "/images/g4.jpg", alt: "Gallery Image 4" },
    { src: "/images/g5.jpg", alt: "Gallery Image 5" },
  ]

  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "Escape":
          setSelectedImage(null)
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
      }
    }

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const openLightbox = (index) => {
    setSelectedImage(index)
    setIsLoading(true)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setIsLoading(false)
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setIsLoading(true)
    setSelectedImage((selectedImage + 1) % images.length)
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setIsLoading(true)
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-lg">
                Our Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Moments of <span className="block text-[#017381]">Care & Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our hospital facilities, patient care, and community engagement through these captured moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=600"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg?height=800&width=1200"}
                  alt={images[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onLoad={handleImageLoad}
                  priority
                />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <p className="text-sm font-medium">{images[selectedImage].alt}</p>
              <p className="text-xs text-gray-300 text-center mt-1">
                {selectedImage + 1} of {images.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsLoading(true)
                    setSelectedImage(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === selectedImage ? "bg-white" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
