"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function HospitalHeroSection() {
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Load data immediately but don't block rendering
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hero")
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error("Failed to load hero data:", err)
        // Fallback to default values if API fails
        setData({
          videoDesktop: { url: "/images/medi.mp4" },
          videoMobile: { url: "/images/medi.mp4" }
        })
      }
    }

    fetchData()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const searchTerm = formData.get("search_api_fulltext")

    if (searchTerm) {
      router.push(`/all-consultants?query=${encodeURIComponent(searchTerm)}`)
    }
  }

  // Use default values while loading
  const videoDesktopUrl = data?.videoDesktop?.url || "/images/medi.mp4"
  const videoMobileUrl = data?.videoMobile?.url || "/images/medi.mp4"

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
      {/* Preload videos in the document head */}
      <link rel="preload" href={videoDesktopUrl} as="video" media="(min-width: 768px)" />
      <link rel="preload" href={videoMobileUrl} as="video" media="(max-width: 767px)" />
      
      {/* Desktop Video Background with eager loading */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Force early loading
        loading="eager"
      >
        <source src={videoDesktopUrl} type="video/mp4" />
      </video>

      {/* Mobile Video Background with eager loading */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Force early loading
        loading="eager"
      >
        <source src={videoMobileUrl} type="video/mp4" />
      </video>

      {/* Overlay - render immediately */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
        <div className="container mx-auto text-center text-white">
          {/* Search Form - critical content renders first */}
          <div className="search-block max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="relative flex items-center bg-white rounded-full shadow-lg">
              <input
                type="text"
                name="search_api_fulltext"
                placeholder="Search for doctors & specialities..."
                className="w-full py-4 pl-6 pr-16 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#017381] border border-transparent"
                aria-label="Search for doctors and specialities"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#017381] to-[#025a65] text-white rounded-full hover:from-[#025a65] hover:to-[#034a52] transition-all duration-300"
                aria-label="Submit search"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a href="#">
              <button className="px-6 py-3 bg-white text-[#017381] rounded-full font-semibold shadow-md hover:bg-gray-100 transition-colors">
                Find a Doctor
              </button>
            </a>
            <a href="#">
              <button className="px-6 py-3 border border-white text-white rounded-full font-semibold shadow-md hover:bg-white/20 transition-colors">
                Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}