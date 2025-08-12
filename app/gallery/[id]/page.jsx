"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

export default function SingleImagePage() {
  const params = useParams()
  const [image, setImage] = useState(null)
  const [relatedImages, setRelatedImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch("https://admin.pmchl.com/api/galleries?populate=*")
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images")
        }
        const data = await response.json()

        // Flatten all images from all galleries
        const allImages = []
        data.data.forEach((gallery) => {
          // Add main image if exists
          if (gallery.image) {
            allImages.push({
              id: `${gallery.documentId}-main`,
              url: gallery.image.url,
              alt: gallery.image.alternativeText || `Gallery Image`,
              width: gallery.image.width,
              height: gallery.image.height,
              formats: gallery.image.formats,
              galleryId: gallery.documentId,
              isMain: true,
            })
          }

          // Add gallery images
          if (gallery.Galleryimages && gallery.Galleryimages.length > 0) {
            gallery.Galleryimages.forEach((img) => {
              allImages.push({
                id: `${gallery.documentId}-${img.documentId}`,
                url: img.url,
                alt: img.alternativeText || `Gallery Image`,
                width: img.width,
                height: img.height,
                formats: img.formats,
                galleryId: gallery.documentId,
                isMain: false,
              })
            })
          }
        })

        // Find the specific image
        const currentImage = allImages.find((img) => img.id === params.id)
        if (!currentImage) {
          throw new Error("Image not found")
        }

        setImage(currentImage)

        // Get related images (exclude current image)
        const related = allImages.filter((img) => img.id !== params.id).slice(0, 6)
        setRelatedImages(related)
      } catch (err) {
        console.error("Error fetching image:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchImageData()
    }
  }, [params.id])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.alt,
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

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = image.url
    link.download = image.alt || "gallery-image"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381]"></div>
      </div>
    )
  }

  if (error || !image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Image Not Found</h2>
          <p className="text-gray-600 mb-6">{error || "The requested image could not be found."}</p>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/gallery"
              className="inline-flex items-center text-[#017381] hover:text-[#025a65] transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Gallery
            </Link>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-[#017381] transition-colors duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 bg-[#017381] text-white rounded-lg hover:bg-[#025a65] transition-colors duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <Image
                src={image.formats?.large?.url || image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-contain max-h-[70vh]"
                priority
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{image.alt}</h1>
              <div className="flex items-center text-gray-600 space-x-6">
                <span>
                  Dimensions: {image.width} × {image.height}
                </span>
                {image.isMain && (
                  <span className="bg-[#017381] text-white px-3 py-1 rounded-full text-sm">Featured</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Images */}
      {relatedImages.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More from Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {relatedImages.map((relatedImage) => (
                <Link
                  key={relatedImage.id}
                  href={`/gallery/${relatedImage.id}`}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <Image
                    src={relatedImage.formats?.thumbnail?.url || relatedImage.url}
                    alt={relatedImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
