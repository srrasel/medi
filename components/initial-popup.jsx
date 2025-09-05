"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DynamicPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupData, setPopupData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const response = await fetch("https://api.pmchl.com/api/popups")
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
    if (!isLoading && popupData && popupData.length > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, popupData])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen || isLoading || error || !popupData || popupData.length === 0) {
    return null
  }

  const popup = popupData[0]
  const imageUrl = popup.Image
  const linkUrl = popup.Link || "#"

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
        <Link href={linkUrl} className="block">
          <div className="relative w-full h-auto cursor-pointer hover:opacity-95 transition-opacity">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Popup Image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
