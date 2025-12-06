"use client"

import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { FileText, Search } from "lucide-react"

export default function ResearchPage() {
  const [publications, setPublications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch("https://api.pmchl.com/api/research-publications")
        if (!response.ok) throw new Error("Failed to fetch publications")
        const data = await response.json()
        setPublications(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setPublications([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPublications()
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index")
          setVisibleCards((prev) => new Set([...prev, Number.parseInt(index)]))
        }
      })
    }, observerOptions)

    if (!isLoading && publications.length > 0) {
      const elements = document.querySelectorAll(".publication-card")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [isLoading, publications, searchQuery])

  // Filter publications based on search
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      return (
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })
  }, [publications, searchQuery])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800">Loading research publications...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Research & Publications
            <span className="block text-[#b8e6ea]">Academic Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Explore our latest research, case studies, and academic publications from our expert team
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search research, publications, titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPublications.map((publication, index) => {
              const isVisible = visibleCards.has(index)

              return (
                <Link key={publication.id} href={`/research/${publication.id}`} className="group">
                  <div
                    data-index={index}
                    className={`publication-card bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer h-full flex flex-col ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Publication Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={publication.image || "/placeholder.svg?height=400&width=600&query=research"}
                        alt={publication.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                      {/* Publication Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#017381]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                          Research
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <FileText className="w-6 h-6 text-white" />
                      </div>

                      {/* Publication Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300 line-clamp-2">
                          {publication.title}
                        </h3>
                      </div>
                    </div>

                    {/* Publication Info */}
                    <div className="p-8 flex flex-col flex-grow">
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {publication.content?.replace(/<[^>]*>/g, "") || "No description available"}
                      </p>

                      {/* Date Section */}
                      <div className="mb-6 mt-auto">
                        <p className="text-sm text-gray-500">
                          Published:{" "}
                          {new Date(publication.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No publications found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria</p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
