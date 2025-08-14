"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, User, ExternalLink } from "lucide-react"
import RichTextRenderer from "./RichTextRenderer"

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        const sortedPosts = data.sort((a, b) => {
          const idA = Number.parseInt(a.id) || 0
          const idB = Number.parseInt(b.id) || 0
          return idB - idA // Descending order (highest ID first)
        })

        setBlogPosts(sortedPosts)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

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

    if (!loading && blogPosts.length > 0) {
      const elements = document.querySelectorAll(".blog-card")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [loading, blogPosts])

  const displayedPosts = blogPosts.slice(0, 6)

  if (loading) {
    return (
      <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden text-center text-gray-700">
        Loading blog posts...
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden text-center text-red-600">
        Error: {error}
      </div>
    )
  }

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#017381]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#025a65]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#017381]/3 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute top-20 left-20 w-16 h-2 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute top-28 left-28 w-2 h-16 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-1.5 bg-[#025a65]/10 rounded-full"></div>
        <div className="absolute bottom-38 right-38 w-1.5 h-12 bg-[#025a65]/10 rounded-full"></div>

        <div className="absolute top-1/4 right-16 w-32 h-32 bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-gradient-to-br from-[#025a65]/10 to-[#034a52]/10 rounded-2xl rotate-12 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-lg">
              Medical Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest Health
            <span className="block text-[#017381]">News & Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get advice from our expert doctors, health awareness and the latest medical research news. Essential
            information and advice for your good health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displayedPosts.map((post, index) => {
            const isVisible = visibleCards.has(index)

            return (
              <Link href={post.link} key={index}>
                <article
                  data-index={index}
                  className={`blog-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image || "/placeholder.svg"}
                      alt={post.alt}
                      width={500}
                      height={300}
                      onError={(e) => {
                        e.target.src = `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(post.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm hover:bg-[#025a65] px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/20">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl h-16 w-16 flex flex-col items-center justify-center shadow-lg border border-white/50">
                        <span className="font-bold text-lg text-[#017381]">{post.date}</span>
                        <span className="text-xs font-medium text-gray-600">{post.month}</span>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 bg-[#017381]/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-[#017381] transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <RichTextRenderer content={post.content.slice(0, 1)} />

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2 text-[#017381]" />
                        <span className="font-medium text-gray-700">{post.author}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1 text-[#017381]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group-hover:opacity-100">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>

        <div className="text-center mb-20">
          <Link
            href="/blog"
            className="group bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center mx-auto gap-3 w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
