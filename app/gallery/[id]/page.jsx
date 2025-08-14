"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Share2, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"

export default function SingleGalleryPage() {
  const params = useParams()
  const [gallery, setGallery] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("https://admin.pmchl.com/api/galleries?populate=*")
        if (!response.ok) {
          throw new Error("Failed to fetch gallery data")
        }
        const data = await response.json()

        // Find the specific gallery by ID
        const currentGallery = data.data.find((g) => g.id.toString() === params.id)
        if (!currentGallery) {
          throw new Error("Gallery not found")
        }

        // Transform gallery data
        const transformedGallery = {
          id: currentGallery.id,
          title: currentGallery.Title || "Gallery",
          images: [
            // Add main image if exists
            ...(currentGallery.image
              ? [
                  {
                    id: `main-${currentGallery.image.documentId}`,
                    url: currentGallery.image.url,
                    alt: currentGallery.image.alternativeText || currentGallery.Title || "Gallery Image",
                    width: currentGallery.image.width,
                    height: currentGallery.image.height,
                    formats: currentGallery.image.formats,
                    isMain: true,
                  },
                ]
              : []),
            // Add gallery images
            ...(currentGallery.Galleryimages?.map((img) => ({
              id: img.documentId,
              url: img.url,
              alt: img.alternativeText || `${currentGallery.Title} Image` || "Gallery Image",
              width: img.width,
              height: img.height,
              formats: img.formats,
              isMain: false,
            })) || []),
          ],
        }

        setGallery(transformedGallery)
      } catch (err) {
        console.error("Error fetching gallery:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchGalleryData()
    }
  }, [params.id])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") {
        setLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      } else if (e.key === "ArrowRight") {
        navigateImage("next")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentImageIndex, gallery])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction) => {
    if (!gallery?.images) return

    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.images.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: gallery?.title || "Gallery",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381]"></div>
      </div>
    )
  }

  if (error || !gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The requested gallery could not be found."}</p>
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-[#017381] text-white rounded-lg hover:bg-[#025a65] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/gallery"
                className="inline-flex items-center text-[#017381] hover:text-[#025a65] transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Gallery
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{gallery.title}</h1>
                <p className="text-gray-600">{gallery.images.length} Images</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-[#017381] transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Images Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {gallery.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gallery.images.map((image, index) => (
                <div key={image.id} className="relative group cursor-pointer" onClick={() => openLightbox(index)}>
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Image
                      src={image.formats?.medium?.url || image.url}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    {/* Main image badge */}
                    {image.isMain && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#017381] text-white px-2 py-1 rounded-full text-xs font-medium">
                          Cover
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Image info */}
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 truncate">{image.alt}</p>
                    <p className="text-xs text-gray-400">
                      {image.width} × {image.height}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this gallery.</p>
            </div>
          )}
        </div>
      </div>

      {lightboxOpen && gallery.images[currentImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-60 text-white">
            <span className="bg-black/50 px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {gallery.images.length}
            </span>
          </div>

          {/* Previous Button */}
          {gallery.images.length > 1 && (
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
          )}

          {/* Next Button */}
          {gallery.images.length > 1 && (
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={gallery.images[currentImageIndex].formats?.large?.url || gallery.images[currentImageIndex].url}
              alt={gallery.images[currentImageIndex].alt}
              width={gallery.images[currentImageIndex].width}
              height={gallery.images[currentImageIndex].height}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-lg font-medium">{gallery.images[currentImageIndex].alt}</p>
            <p className="text-sm text-gray-300">
              {gallery.images[currentImageIndex].width} × {gallery.images[currentImageIndex].height}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
