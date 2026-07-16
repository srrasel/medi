"use client"

import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import SegmentedButtonGroup from "./SegmentedButtonGroup"

export default function HospitalHeroSection() {
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const searchTerm = formData.get("search_api_fulltext")

    if (searchTerm) {
      router.push(`/all-consultants?query=${encodeURIComponent(searchTerm)}`)
    }
  }

  const videoUrl = "/images/ff.mp4"

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-[#017381]">
      {/* Single video — metadata only so first paint is not blocked by full file transfer */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-4 p-4 bg-black/20">
        <div className="container mx-auto text-center text-white">
          <div className="search-block w-full max-w-xl mx-auto mb-6 py-12">
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center bg-[#025863]/20 backdrop-blur-sm rounded-full shadow-lg border border-[#025863]/30 hover:border-[#025863]/50 transition-all duration-300"
            >
              <input
                type="text"
                name="search_api_fulltext"
                placeholder="Search for doctors & specialities..."
                className="w-full py-4 pl-6 pr-16 rounded-full bg-transparent text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-[#025863]/50 border border-transparent"
                aria-label="Search for doctors and specialities"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#025863] text-white rounded-full hover:bg-[#025863]/90 transition-all duration-300 shadow-md"
                aria-label="Submit search"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          <SegmentedButtonGroup />
        </div>
      </div>
    </div>
  )
}
