"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export default function DynamicPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupData, setPopupData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
         const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
        const response = await fetch( `${strapiBaseUrl}/popups?populate=*`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setPopupData(data)
      } catch (err) {
        setError(err.message)
        console.error("Error fetching popup data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPopupData()
  }, [])

  useEffect(() => {
    if (!isLoading && popupData?.data?.length > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, popupData])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen || isLoading || error || !popupData?.data?.length) {
    return null
  }

  // Access nested Strapi data structure
  const popup = popupData.data[0]
  const popupUrl = popup?.URL || "#"
  const imageData = popup?.Image

  if (!imageData) {
    console.error("No image data found in popup")
    return null
  }

  const imageUrl = imageData.url
  const altText = imageData.alternativeText || "Popup Image"
  const imageWidth = imageData.width || 800
  const imageHeight = imageData.height || 600

  if (!imageUrl) {
    console.error("No valid image URL found in popup data")
    return null
  }

  // Handle both relative and absolute URLs
  const fullImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `https://methodical-kindness-fc585984ed.strapiapp.com${imageUrl}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-gray-600 hover:bg-gray-100 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Popup Image Content with Link */}
        <Link href={popupUrl} className="block">
          <div className="relative w-full h-auto cursor-pointer hover:opacity-95 transition-opacity">
            <Image
              src={fullImageUrl || "/placeholder.svg"}
              alt={altText}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
