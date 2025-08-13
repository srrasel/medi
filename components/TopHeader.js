"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

const TopHeader = ({ isScrolled }) => {
  const [headerData, setHeaderData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://admin.pmchl.com/api/top-headers?populate=*")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.data && data.data.length > 0) {
          setHeaderData(data.data[0]) // Get the first header data
        } else {
          throw new Error("No header data found")
        }
      } catch (err) {
        console.error("Error fetching header data:", err)
        setError(err.message)
        setHeaderData({
          Emergency: "01902556060",
          Hotline: "09666-997997",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchHeaderData()
  }, [])

  const displayData = headerData || {
    Emergency: "01902556060",
    Hotline: "09666-997997",
  }

  return (
    <div
      className={`bg-gradient-to-r from-[#017381] via-[#025a65] to-[#034a52] text-white transition-all duration-500 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Contact Info */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-[#b8e6ea]" />
              <span className="text-slate-200">Emergency:</span>
              <Link
                href={`tel:${displayData.Emergency?.replace(/[^0-9]/g, "")}`}
                className="font-bold hover:text-[#b8e6ea] transition-colors"
              >
                {displayData.Emergency}
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-[#b8e6ea]" />
              <span className="text-slate-200">24/7 Service Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <MessageCircle className="w-4 h-4 text-[#b8e6ea]" />
              <span className="text-slate-200">Hotline:</span>
              <Link
                href={`tel:${displayData.Hotline?.replace(/[^0-9]/g, "")}`}
                className="font-bold hover:text-[#b8e6ea] transition-colors"
              >
                {displayData.Hotline}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
