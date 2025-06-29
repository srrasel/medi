"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Heart, Users, Award, Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function SuccessStoriesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const videosPerPage = 6

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [currentPage])

  const successVideos = [
    {
      id: "SWVrdPDFsh8",
      title: "Cardiac Surgery Success Story",
      description: "A remarkable recovery journey of our cardiac patient",
      category: "Cardiac Care",
    },
    {
      id: "qLHjlVuHdu0",
      title: "Emergency Care Excellence",
      description: "Life-saving emergency treatment and patient recovery",
      category: "Emergency Care",
    },
    {
      id: "OnwBQDz2Ysg",
      title: "Pediatric Care Success",
      description: "Specialized pediatric treatment and family testimonial",
      category: "Pediatric Care",
    },
    {
      id: "1DtNChSLuX0",
      title: "Orthopedic Recovery",
      description: "Complete rehabilitation and mobility restoration",
      category: "Orthopedic Care",
    },
    {
      id: "QR7UvlfV8g0",
      title: "Cancer Treatment Journey",
      description: "Comprehensive cancer care and patient triumph",
      category: "Oncology",
    },
    {
      id: "WeFhXz7J2Nw",
      title: "Maternity Care Excellence",
      description: "Safe delivery and maternal care success story",
      category: "Maternity Care",
    },
    {
      id: "iIEbjo6JcQ4",
      title: "Neurological Recovery",
      description: "Advanced neurological treatment and rehabilitation",
      category: "Neurology",
    },
    {
      id: "DBJEWsSyfM8",
      title: "ICU Success Story",
      description: "Critical care excellence and patient recovery",
      category: "Critical Care",
    },
    {
      id: "h1SoZ_Dljp4",
      title: "Surgical Excellence",
      description: "Complex surgical procedure and successful outcome",
      category: "Surgery",
    },
    {
      id: "TOsYhMAbYks",
      title: "Dialysis Patient Journey",
      description: "Long-term dialysis care and quality of life improvement",
      category: "Nephrology",
    },
    {
      id: "JPpfsWun8Z0",
      title: "Physiotherapy Success",
      description: "Complete rehabilitation and mobility restoration",
      category: "Rehabilitation",
    },
    {
      id: "VukGuSF-cUI",
      title: "Family Care Story",
      description: "Comprehensive family healthcare and support",
      category: "Family Care",
    },
    {
      id: "Zre9DB-8FDM",
      title: "Medical Excellence",
      description: "Outstanding medical care and patient satisfaction",
      category: "General Medicine",
    },
    {
      id: "6NE8JvAIn8Q",
      title: "Community Health Impact",
      description: "Our commitment to community healthcare excellence",
      category: "Community Care",
    },
  ]

  const totalPages = Math.ceil(successVideos.length / videosPerPage)
  const startIndex = (currentPage - 1) * videosPerPage
  const currentVideos = successVideos.slice(startIndex, startIndex + videosPerPage)

  const stats = [
    { number: "1000+", label: "Success Stories", icon: Heart },
    { number: "50,000+", label: "Patients Treated", icon: Users },
    { number: "15+", label: "Medical Specialties", icon: Award },
    { number: "24/7", label: "Emergency Care", icon: Star },
  ]

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
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              All Videos
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
              Real stories of hope, healing, and triumph from our patients and their families. Witness the difference
              quality healthcare makes in people's lives.
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
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Patient Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                Watch inspiring stories of recovery, hope, and the exceptional care provided by our medical team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {currentVideos.map((video, index) => (
                <Card
                  key={video.id}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 hover:scale-105 hover:shadow-2xl group cursor-pointer border-0 shadow-lg overflow-hidden"
                  style={{ transitionDelay: `${index * 150}ms` }}
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
                    <p className="text-slate-600 leading-relaxed mb-4">{video.description}</p>
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
          </div>
        </div>
      </section>

     

      
    </div>
  )
}
