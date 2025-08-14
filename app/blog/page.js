"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Calendar, Search, Filter, ChevronDown, Eye, Heart, ExternalLink, User } from "lucide-react" // Added ExternalLink and User

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const postsPerPage = 9

  // Fetch blog posts data from API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("/api/blogs") // Fetch from your existing API route
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBlogPosts(data)
      } catch (e) {
        console.error("Failed to fetch blog posts for blog listing page:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, []) // Empty dependency array means this runs once on mount

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

    // Observe elements after posts are loaded and filtered
    if (!loading && blogPosts.length > 0) {
      const elements = document.querySelectorAll(".blog-card")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [loading, blogPosts, selectedCategory, searchQuery, currentPage]) // Re-run effect when these dependencies change

  // Dynamically generate categories from fetched blog posts
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map((post) => post.category?.name).filter(Boolean))
    const categoryList = Array.from(uniqueCategories)
      .map((categoryName, index) => ({
        name: categoryName,
        slug: blogPosts.find((post) => post.category?.name === categoryName)?.category?.slug || `category-${index}`,
        count: blogPosts.filter((p) => p.category?.name === categoryName).length,
        color: blogPosts.find((post) => post.category?.name === categoryName)?.category?.color || "#017381", // Use existing color or default
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    return [{ name: "সব ক্যাটেগরি", slug: "all", count: blogPosts.length, color: "#017381" }, ...categoryList]
  }, [blogPosts])

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category?.slug === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags || []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) // Ensure tags is an array
      return matchesCategory && matchesSearch
    })
  }, [blogPosts, selectedCategory, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Featured posts (now derived from fetched data)
  const featuredPosts = useMemo(() => {
    return blogPosts.filter((post) => post.featured).slice(0, 2) // Limit to 2 featured posts
  }, [blogPosts])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800">Loading blog posts...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
          <p className="text-gray-600">Please check your network connection or Strapi API URL.</p>
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            স্বাস্থ্য ব্লগ
            <span className="block text-[#b8e6ea]">ও মেডিকেল গাইড</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            আমাদের বিশেষজ্ঞ চিকিৎসকদের পরামর্শ, স্বাস্থ্য সচেতনতা এবং সর্বশেষ চিকিৎসা গবেষণার খবর পান
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="স্বাস্থ্য বিষয়ক তথ্য খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 cursor-glow"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#017381] mb-4">ফিচার্ড আর্টিকেল</h2>
              <p className="text-xl text-gray-600">গুরুত্বপূর্ণ স্বাস্থ্য তথ্য ও পরামর্শ</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Link
                  key={post.id}
                  href={post.link}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-[#017381]/20 cursor-interactive cursor-magnetic"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-sm border border-white/20"
                        style={{ backgroundColor: post.category?.color || "#017381" }}
                      >
                        {post.category?.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">ফিচার্ড</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#017381] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#017381]" />
                          <span>{post.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#017381]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-[#017381]" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.author?.image || "/placeholder.svg"}
                        alt={post.author?.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-medium text-gray-700">{post.author?.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Main Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentPosts.map((post, index) => (
              <article
                key={post.id}
                data-index={index}
                className={`blog-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Link href={post.link}>
                  {" "}
                  {/* Changed to post.link */}
                  <div className="relative overflow-hidden h-64">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      onError={(e) => {
                        e.target.src = `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(post.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge (from BlogSection) */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm hover:bg-[#025a65] px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/20">
                        {post.category?.name}
                      </span>
                    </div>

                    {/* Date Badge (from BlogSection) */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl h-16 w-16 flex flex-col items-center justify-center shadow-lg border border-white/50">
                        <span className="font-bold text-lg text-[#017381]">{post.date}</span>
                        <span className="text-xs font-medium text-gray-600">{post.month}</span>
                      </div>
                    </div>

                    {/* Read More Icon (from BlogSection) */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 bg-[#017381]/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-[#017381] transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                    {/* Author and Read Time (from BlogSection) */}
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

                    {/* Read More Button (from BlogSection) */}
                    <div className="mt-6">
                      <div className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group-hover:opacity-100">
                        বিস্তারিত পড়ুন
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">কোনো আর্টিকেল পাওয়া যায়নি</h3>
              <p className="text-gray-600 mb-8">অনুগ্রহ করে আপনার অনুসন্ধান বা ফিল্টার মান পরিবর্তন করুন</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setCurrentPage(1)
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-magnetic"
              >
                ফিল্টার পরিষ্কার করুন
              </button>
            </div>
          )}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-white text-[#017381] rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-[#017381]/20 cursor-magnetic"
              >
                পূর্ববর্তী
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-12 h-12 rounded-full font-semibold transition-all duration-300 cursor-interactive ${
                      currentPage === page
                        ? "bg-[#017381] text-white shadow-lg"
                        : "bg-white text-[#017381] hover:bg-[#017381] hover:text-white border border-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-white text-[#017381] rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-[#017381]/20 cursor-magnetic"
              >
                পরবর্তী
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
