"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function DynamicPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupData, setPopupData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const response = await fetch(
          "https://methodical-kindness-fc585984ed.strapiapp.com/api/popups?populate=*"
        )
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
    // Show popup when data is loaded (on every homepage load as requested)
    if (!isLoading && popupData?.data?.length > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000) // 1 second delay

      return () => clearTimeout(timer)
    }
  }, [isLoading, popupData])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen || isLoading || error || !popupData?.data?.length) {
    return null
  }

  // Get the first popup and extract image data
  const popup = popupData.data[0]
  const imageData = popup.Image
  const imageUrl = imageData?.url
  const altText = imageData?.alternativeText || "Popup Image"
  const imageWidth = imageData?.width || 800
  const imageHeight = imageData?.height || 600

  if (!imageUrl) {
    console.error("No valid image URL found in popup data")
    return null
  }

  // Construct the full image URL
  const fullImageUrl = imageUrl.startsWith('http') 
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

        {/* Popup Image Content */}
        <div className="relative w-full h-auto">
          <Image
            src={fullImageUrl}
            alt={altText}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}