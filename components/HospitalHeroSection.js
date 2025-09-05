"use client"

import { useEffect, useState } from "react"
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

  // Use default values while loading
  const videoDesktopUrl =  "/images/ff.mp4"
  const videoMobileUrl =  "/images/ff.mp4"

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
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
      <div className="absolute inset-0  flex flex-col items-center justify-end pb-4 md:pb-4 p-4">
        <div className="container mx-auto text-center text-white">
          {/* Search Form - positioned at bottom */}
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

          {/* Buttons - positioned below search */}
          <SegmentedButtonGroup />
        </div>
      </div>
    </div>
  )
}