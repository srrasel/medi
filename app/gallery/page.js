"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch("https://admin.pmchl.com/api/galleries?populate=*")
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images")
        }
        const data = await response.json()

        // Flatten all images from all galleries
        const allImages = []
        data.data.forEach((gallery, galleryIndex) => {
          // Add main image if exists
          if (gallery.image) {
            allImages.push({
              id: `${gallery.documentId}-main`,
              url: gallery.image.url,
              alt: gallery.image.alternativeText || `Gallery Image ${allImages.length + 1}`,
              width: gallery.image.width,
              height: gallery.image.height,
              formats: gallery.image.formats,
              galleryId: gallery.documentId,
              isMain: true,
            })
          }

          // Add gallery images
          if (gallery.Galleryimages && gallery.Galleryimages.length > 0) {
            gallery.Galleryimages.forEach((img, imgIndex) => {
              allImages.push({
                id: `${gallery.documentId}-${img.documentId}`,
                url: img.url,
                alt: img.alternativeText || `Gallery Image ${allImages.length + 1}`,
                width: img.width,
                height: img.height,
                formats: img.formats,
                galleryId: gallery.documentId,
                isMain: false,
              })
            })
          }
        })

        setImages(allImages)
      } catch (err) {
        console.error("Error fetching gallery:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryImages()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Gallery</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

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
            Moments of <span className="block text-[#017381]">Care & Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our hospital facilities, patient care, and community engagement through these captured moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <Link
              key={image.id}
              href={`/gallery/${image.id}`}
              className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
            >
              <Image
                src={image.formats?.medium?.url || image.url || "/placeholder.svg?height=400&width=600"}
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
            </Link>
          ))}
        </div>

        {images.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No gallery images found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
