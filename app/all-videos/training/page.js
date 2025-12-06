"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, Clock, Calendar, ArrowLeft, Search, Filter, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function TrainingVideosPage() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  // default category is Training
  const [selectedCategory, setSelectedCategory] = useState("Training")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/videos")
        if (!response.ok) {
          throw new Error("Failed to fetch videos")
        }
        const data = await response.json()
        const sortedData = data.sort((a, b) => b.id - a.id)
        const transformedVideos = sortedData.map((video) => {
          const videoId = extractYouTubeId(video.VideoUrl)
          const description = video.Description
          const publishedDate = new Date(video.createdAt).toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          return {
            id: video.id,
            title: video.Title,
            category: video.Category,
            duration: "N/A",
            publishedAt: publishedDate,
            thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            description: description,
            videoUrl: video.Videourl,
          }
        })
        setVideos(transformedVideos)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  const extractYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : ""
  }

  const categories = [
    { name: "সব ক্যাটেগরি", slug: "all", count: videos.length },
    ...Array.from(new Set(videos.map((v) => v.category)))
      .filter(Boolean)
      .map((cat) => ({
        name: cat,
        slug: cat,
        count: videos.filter((v) => v.category === cat).length,
      })),
  ]

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index")
          setVisibleCards((prev) => new Set([...prev, Number.parseInt(index)]))
        }
      })
    }, observerOptions)
    const elements = document.querySelectorAll(".video-card")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selectedCategory, searchQuery, videos])

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#017381] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading videos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">⚠</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Error Loading Videos</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Videos</h1>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8">Educational training videos for medical professionals.</p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-600">Showing {filteredVideos.length} videos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => {
              const isVisible = visibleCards.has(index)
              return (
                <Link href={`/videos/${video.id}`} key={video.id}>
                  <article
                    data-index={index}
                    className={`video-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={600}
                        height={400}
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=300&width=500"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-8 h-8 text-[#017381] ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#017381]/90 backdrop-blur-sm hover:bg-[#025a65] px-4 py-2 text-white text-sm font-bold rounded-full border border-white/20">
                          {video.category}
                        </span>
                      </div>
                      {video.duration !== "N/A" && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-[#017381] transition-colors duration-300 line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3" dangerouslySetInnerHTML={{ __html: video.description }} />
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2 text-[#017381]" />
                          <span className="font-medium text-gray-700">{video.publishedAt}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Play className="w-4 h-4 mr-1 text-[#017381]" />
                          <span>Watch Video</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
