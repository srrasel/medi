"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Banner() {
  const [bannerData, setBannerData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        setLoading(true)
        const fetchUrl = "https://api.pmchl.com/api/banners"

        const res = await fetch(fetchUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)

        const json = await res.json()
        console.log("[v0] Fetched banner data:", json)

        if (!json || json.length === 0) throw new Error("No banner data found")

        const latestBanner = json[0]
        setBannerData(latestBanner)
      } catch (err) {
        console.error("[v0] Failed to fetch banner:", err)
        setError(err instanceof Error ? err.message : "Unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchBanner()
  }, [])

  if (loading) {
    return (
      <div className="h-[600px] bg-gray-300 flex items-center justify-center">
        <div className="text-gray-600">Loading banner...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-[600px] bg-red-50 text-red-600 flex items-center justify-center p-5">
        <div className="text-center">
          <div className="font-semibold">Error loading banner</div>
          <div className="text-sm mt-1">{error}</div>
        </div>
      </div>
    )
  }

  if (!bannerData) return null

  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={bannerData.Image || "/placeholder.svg"}
        alt="Banner"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
      <h2></h2>
    </div>
  )
}
