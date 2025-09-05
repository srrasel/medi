"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Play, Share2, ThumbsUp, Eye } from "lucide-react"

export default function VideoPage() {
  const params = useParams()
  const videoId = params.id // Strapi video ID, not YouTube
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Extract YouTube video ID
  const extractYouTubeId = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  // Format date in Bengali
  const formatDateToBengali = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
    return `${year}-${month}-${day}`.replace(/\d/g, (d) => bengaliNumerals[+d])
  }

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/videos")
        if (!response.ok) throw new Error("Failed to fetch videos")

        const data = await response.json()
        const transformed = data.map((v) => {
          const ytId = extractYouTubeId(v.VideoUrl)
          return {
            id: v.id, // Strapi ID
            ytId,
            title: v.Title,
            category: v.Category,
            description: v.Description,
            duration: "N/A",
            views: "N/A",
            likes: "N/A",
            publishedAt: formatDateToBengali(v.createdAt),
            thumbnail: ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : null,
          }
        })

        const foundVideo = transformed.find((v) => String(v.id) === String(videoId))
        setVideo(foundVideo || null)

        if (foundVideo) {
          const related = transformed
            .filter((v) => v.id !== foundVideo.id && v.category === foundVideo.category)
            .slice(0, 3)
          setRelatedVideos(related)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (videoId) fetchVideos()
  }, [videoId])

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>
  if (error) return <div className="flex h-screen items-center justify-center text-red-600">{error}</div>
  if (!video) return <div className="flex h-screen items-center justify-center">Video not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden"> 
        <div className="absolute inset-0 overflow-hidden"> 
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div> 
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div> </div>
           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> {/* Back Button */} 
            <div className="mb-8"> 
              <Link href="/all-videos" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group" >
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" /> Back to Videos </Link> </div> 
               <div className="max-w-4xl mx-auto text-center text-white">
                 <div className="flex items-center justify-center gap-4 mb-6"> 
                  <span className="bg-[#b8e6ea]/20 backdrop-blur-sm text-[#b8e6ea] px-4 py-2 rounded-full text-sm font-bold border border-[#b8e6ea]/30"> {video.category} </span> </div> 
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{video.title}</h1> 
                  <div className="flex items-center justify-center gap-8 text-sm text-white/80"> 
                  <div className="flex items-center gap-2"> 
                    <Calendar className="w-4 h-4" /> <span>{video.publishedAt}</span> </div> 
                    {video.duration !== "N/A" && ( <div className="flex items-center gap-2"> <Clock className="w-4 h-4" />
                     <span>{video.duration}</span> </div> )} {video.views !== "N/A" && ( <div className="flex items-center gap-2"> 
                      <Eye className="w-4 h-4" /> <span>{video.views} views</span> </div> )} </div> 
                      </div> 
                    </div> 
                </section>

      {/* Video */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div>

        
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.ytId}?rel=0`}
              title={video.title}
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between border-b pb-4 mb-4">
              <div className="flex gap-4">
                {video.likes !== "N/A" && (
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-500">
                    <ThumbsUp className="w-4 h-4" /> {video.likes}
                  </button>
                )}
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
              <span className="text-gray-500 text-sm">{video.publishedAt}</span>
            </div>
            <h3 className="font-bold text-lg mb-2">About this video</h3>
            <div className="text-gray-700" dangerouslySetInnerHTML={{__html:video.description}}/>
          </div>
        </div>
       </div>
        {/* Related */}
        {relatedVideos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#017381] mb-6">Related Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedVideos.map((rv) => (
                <Link key={rv.id} href={`/videos/${rv.id}`}>
                  <article className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
                    <div className="relative h-40">
                      <img src={rv.thumbnail} alt={rv.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold line-clamp-2">{rv.title}</h3>
                      <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html:rv.description}}/>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
