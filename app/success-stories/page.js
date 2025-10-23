"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Heart, Users, Award, Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function SuccessStoriesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [successVideos, setSuccessVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const videosPerPage = 6

useEffect(() => {
  const fetchSuccessStories = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://api.pmchl.com/api/success-stories", {
        cache: "no-store" // always fetch latest
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch success stories: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("API Response:", data)

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid API response format")
      }

      // Transform API data
      const transformedStories = data.map((story) => {
        // Extract YouTube video ID
        const videoId = story.Video.includes("youtu.be/")
          ? story.Video.split("youtu.be/")[1].split("?")[0]
          : story.Video.includes("youtube.com/watch?v=")
            ? story.Video.split("v=")[1].split("&")[0]
            : story.Video

        return {
          id: videoId,
          title: story.Title,
          description: story.Description,
          category: story.Category,
        }
      })

      // ✅ Sort stories by title ascending (or replace with another logic)
      const sortedStories = transformedStories.sort((a, b) => {
        // Example: sort alphabetically by title
        return a.title.localeCompare(b.title)
      })

      console.log("Sorted stories:", sortedStories)
      setSuccessVideos(sortedStories)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching success stories:", err)
    } finally {
      setLoading(false)
    }
  }

  fetchSuccessStories()
}, [])


  const totalPages = Math.ceil(successVideos.length / videosPerPage)
  const startIndex = (currentPage - 1) * videosPerPage
  const currentVideos = successVideos.slice(startIndex, startIndex + videosPerPage)

  const stats = [
    { number: "1000+", label: "Success Stories", icon: Heart },
    { number: "50,000+", label: "Patients Treated", icon: Users },
    { number: "15+", label: "Medical Specialties", icon: Award },
    { number: "24/7", label: "Emergency Care", icon: Star },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#017381] mx-auto"></div>
          <p className="mt-4 text-xl text-[#017381]">Loading success stories...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Success Stories</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
              Real stories of hope, healing, and triumph from our patients and their families. Witness the difference
              quality healthcare makes in people&apos;s lives.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-white to-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Patient Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                Watch inspiring stories of recovery, hope, and the exceptional care provided by our medical team
              </p>
            </div>

            {successVideos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-slate-600">No success stories available at the moment.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {currentVideos.map((video, index) => (
                    <Card
                      key={video.id}
                      className="hover:scale-105 hover:shadow-2xl group cursor-pointer border-0 shadow-lg overflow-hidden transition-all duration-300"
                    >
                      <div className="relative">
                        <div className="aspect-video bg-black rounded-t-lg overflow-hidden">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            loading="lazy"
                          ></iframe>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#017381] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {video.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#017381] mb-3 group-hover:text-[#025a65] transition-colors duration-300">
                          {video.title}
                        </h3>
                        <div className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{__html:video.description}} />
                        <div className="flex items-center gap-2 text-[#017381] font-semibold">
                          <Play className="w-4 h-4" />
                          <span>Watch Story</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-[#017381] rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                            currentPage === page
                              ? "bg-[#017381] text-white shadow-lg"
                              : "bg-white text-[#017381] hover:bg-[#017381] hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-[#017381] rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
