"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Play, Share2, ThumbsUp, Eye } from "lucide-react"

export default function VideoPage() {
  const params = useParams()
  const videoId = params.id
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Helper function to extract YouTube video ID from URL
  const extractVideoId = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  // Helper function to extract text from rich text description
  const extractDescription = (descriptionArray) => {
    if (!descriptionArray || !Array.isArray(descriptionArray)) return ""
    return descriptionArray.map((block) => block.children?.map((child) => child.text).join("") || "").join(" ")
  }

  // Helper function to format date to Bengali
  const formatDateToBengali = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()

    // Convert to Bengali numerals
    const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
    const bengaliDate = `${year}-${month}-${day}`.replace(/\d/g, (digit) => bengaliNumerals[Number.parseInt(digit)])

    return bengaliDate
  }

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://admin.pmchl.com/api/videos?populate=*")

        if (!response.ok) {
          throw new Error("Failed to fetch videos")
        }

        const data = await response.json()

        // Transform API data to match component structure
        const transformedVideos = data.data
          .map((video) => {
            const youtubeId = extractVideoId(video.Videourl)
            return {
              id: youtubeId,
              title: video.Title,
              category: video.Category,
              duration: "N/A", // Not available in API
              publishedAt: formatDateToBengali(video.publishedAt),
              thumbnail: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null,
              description: extractDescription(video.Description),
              views: "N/A", // Not available in API
              likes: "N/A", // Not available in API
              videoUrl: video.Videourl,
            }
          })
          .filter((video) => video.id) // Filter out videos without valid YouTube IDs

        // Find the current video
        const foundVideo = transformedVideos.find((v) => v.id === videoId)
        setVideo(foundVideo)

        if (foundVideo) {
          // Get related videos from same category
          const related = transformedVideos
            .filter((v) => v.id !== videoId && v.category === foundVideo.category)
            .slice(0, 3)
          setRelatedVideos(related)
        }
      } catch (err) {
        console.error("Error fetching videos:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (videoId) {
      fetchVideos()
    }
  }, [videoId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading video...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error loading video</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link href="/all-videos" className="inline-flex items-center text-[#017381] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Videos
          </Link>
        </div>
      </div>
    )
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Video not found</h2>
          <Link href="/all-videos" className="mt-4 inline-flex items-center text-[#017381] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Videos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/all-videos"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Videos
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-[#b8e6ea]/20 backdrop-blur-sm text-[#b8e6ea] px-4 py-2 rounded-full text-sm font-bold border border-[#b8e6ea]/30">
                {video.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{video.title}</h1>

            <div className="flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{video.publishedAt}</span>
              </div>
              {video.duration !== "N/A" && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{video.duration}</span>
                </div>
              )}
              {video.views !== "N/A" && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Video Player */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-8">
                {/* Video Actions */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    {video.likes !== "N/A" && (
                      <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                        <span>{video.likes}</span>
                      </button>
                    )}
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {video.views !== "N/A" && `${video.views} views • `}
                    {video.publishedAt}
                  </div>
                </div>

                {/* Video Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">About this video</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{video.description}</p>
                </div>
              </div>
            </div>

            {/* Related Videos */}
            {relatedVideos.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-[#017381] mb-8 text-center">Related Videos</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedVideos.map((relatedVideo) => (
                    <Link href={`/videos/${relatedVideo.id}`} key={relatedVideo.id}>
                      <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#017381]/20">
                        <div className="relative h-48">
                          <img
                            src={relatedVideo.thumbnail || "/placeholder.svg"}
                            alt={relatedVideo.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg?height=200&width=300"
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-[#017381] ml-1" fill="currentColor" />
                            </div>
                          </div>

                          <div className="absolute bottom-4 left-4">
                            <span className="bg-[#017381] text-white px-3 py-1 rounded-full text-sm font-bold">
                              {relatedVideo.category}
                            </span>
                          </div>

                          {relatedVideo.duration !== "N/A" && (
                            <div className="absolute top-4 right-4">
                              <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                                {relatedVideo.duration}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#017381] transition-colors line-clamp-2">
                            {relatedVideo.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{relatedVideo.description}</p>
                          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                            {relatedVideo.views !== "N/A" && <span>{relatedVideo.views} views</span>}
                            <span>{relatedVideo.publishedAt}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
