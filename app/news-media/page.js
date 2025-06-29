"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Calendar, User, Tag, Search, Filter, ChevronDown, Eye, Heart } from 'lucide-react'

export default function BlogPage() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const postsPerPage = 9

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

    const elements = document.querySelectorAll(".blog-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, searchQuery, currentPage])

  // Sample blog data with dynamic URLs
  const blogPosts = [
    {
      id: 1,
      slug: "eid-celebration-health-guide",
      title: "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে - স্বাস্থ্যকর উদযাপনের গাইড",
      excerpt: "ঈদের এই পবিত্র সময়ে কীভাবে স্বাস্থ্যকর উপায়ে উদযাপন করবেন এবং পরিবারের সবার সুস্বাস্থ্য নিশ্চিত করবেন।",
      image: "/images/eid-celebration.jpg",
      category: {
        name: "সামাজিক স্বাস্থ্য",
        slug: "social-health",
        color: "#017381",
      },
      author: {
        name: "ডা. মোহাম্মদ রহিম",
        slug: "dr-mohammad-rahim",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "২৮ মে, ২০২৫",
      readTime: "৮ মিনিট পড়ুন",
      views: 1234,
      likes: 127,
      tags: ["ঈদ", "স্বাস্থ্য", "পুষ্টি", "ডায়াবেটিস", "শিশু স্বাস্থ্য"],
      featured: true,
    },
    {
      id: 2,
      slug: "world-blood-cancer-day-2025",
      title: "World Blood Cancer Day 2025 - একসাথে দাঁড়ান, জীবন বাঁচান",
      excerpt: "২৮ মে | থিম: United by Unique। প্রতিটি রক্তের ক্যান্সার রোগীর জন্য আমাদের একসাথে দাঁড়ানো প্রয়োজন।",
      image: "/images/blood-cancer-day.jpg",
      category: {
        name: "ক্যান্সার সচেতনতা",
        slug: "cancer-awareness",
        color: "#dc2626",
      },
      author: {
        name: "ডা. আব্দুল হান্নান",
        slug: "dr-abdul-hannan",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "২৮ মে, ২০২৫",
      readTime: "৫ মিনিট পড়ুন",
      views: 892,
      likes: 89,
      tags: ["ক্যান্সার", "রক্তের ক্যান্সার", "সচেতনতা", "চিকিৎসা"],
      featured: false,
    },
    {
      id: 3,
      slug: "hospital-career-opportunities",
      title: "We're Hiring at Pro-Active Hospital - আমাদের সাথে যোগ দিন",
      excerpt: "A Sister Concern of Pro-Active Medical College and Hospital Ltd. আমাদের সাথে যোগ দিন এবং স্বাস্থ্যসেবায় অবদান রাখুন।",
      image: "/images/hospital-hiring.jpg",
      category: {
        name: "চাকরির সুযোগ",
        slug: "career-opportunities",
        color: "#059669",
      },
      author: {
        name: "এইচআর বিভাগ",
        slug: "hr-department",
        image: "/images/hr-placeholder.jpg",
      },
      publishedAt: "২৫ মে, ২০২৫",
      readTime: "২ মিনিট পড়ুন",
      views: 567,
      likes: 45,
      tags: ["চাকরি", "নিয়োগ", "ক্যারিয়ার", "হাসপাতাল"],
      featured: false,
    },
    {
      id: 4,
      slug: "world-thalassemia-day-2025",
      title: "বিশ্ব থ্যালাসেমিয়া দিবস ২০২৫ - সচেতনতা থেকে প্রতিরোধ",
      excerpt: "থ্যালাসেমিয়া প্রতিরোধ শুরু হোক সচেতনতা থেকে। প্রতি বছর বিশ্বব্যাপী ১,০০,০০০-এরও বেশি শিশু থ্যালাসেমিয়া নিয়ে জন্মগ্রহণ করে।",
      image: "/images/thalassemia-day.jpg",
      category: {
        name: "জেনেটিক রোগ",
        slug: "genetic-diseases",
        color: "#7c3aed",
      },
      author: {
        name: "ডা. তাজুল ইসলাম",
        slug: "dr-tazul-islam",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "৮ মে, ২০২৫",
      readTime: "৪ মিনিট পড়ুন",
      views: 743,
      likes: 67,
      tags: ["থ্যালাসেমিয়া", "জেনেটিক", "প্রতিরোধ", "শিশু স্বাস্থ্য"],
      featured: false,
    },
    {
      id: 5,
      slug: "workplace-safety-ai-technology",
      title: "কর্মক্ষেত্রে স্বাস্থ্য ও নিরাপত্তা নিশ্চিতকরণে কৃত্রিম বুদ্ধিমত্তা",
      excerpt: "বিশ্ব কর্মক্ষেত্রে নিরাপত্তা ও স্বাস্থ্য দিবসে সবার জন্য নিরাপদ কাজের পরিবেশ নিশ্চিত করি।",
      image: "/images/workplace-safety.jpg",
      category: {
        name: "কর্মক্ষেত্রে নিরাপত্তা",
        slug: "workplace-safety",
        color: "#ea580c",
      },
      author: {
        name: "ডা. অকুপেশনাল হেলথ",
        slug: "dr-occupational-health",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "২৮ এপ্রিল, ২০২৫",
      readTime: "৬ মিনিট পড়ুন",
      views: 456,
      likes: 34,
      tags: ["কর্মক্ষেত্র", "নিরাপত্তা", "AI", "প্রযুক্তি"],
      featured: false,
    },
    {
      id: 6,
      slug: "world-immunization-week-2025",
      title: "সুস্থ ভবিষ্যতের জন্য টিকা অপরিহার্য - বিশ্ব টিকা সপ্তাহ",
      excerpt: "বিশ্ব টিকা সপ্তাহ উপলক্ষে ২৪ থেকে ৩০ এপ্রিল, সকাল ১০টা থেকে বিশেষ টিকাদান কর্মসূচি।",
      image: "/images/vaccination-week.jpg",
      category: {
        name: "টিকাদান কর্মসূচি",
        slug: "vaccination-program",
        color: "#0891b2",
      },
      author: {
        name: "ডা. ইমিউনোলজি বিভাগ",
        slug: "dr-immunology-dept",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "৩০ এপ্রিল, ২০২৫",
      readTime: "৩ মিনিট পড়ুন",
      views: 678,
      likes: 78,
      tags: ["টিকা", "ইমিউনাইজেশন", "প্রতিরোধ", "স্বাস্থ্য"],
      featured: false,
    },
    {
      id: 7,
      slug: "diabetes-management-ramadan",
      title: "রমজানে ডায়াবেটিস নিয়ন্ত্রণ - বিশেষজ্ঞ পরামর্শ",
      excerpt: "রমজান মাসে ডায়াবেটিস রোগীদের জন্য বিশেষ খাদ্যাভ্যাস ও ওষুধ সেবনের নিয়মাবলী।",
      image: "/images/diabetes-ramadan.jpg",
      category: {
        name: "ডায়াবেটিস",
        slug: "diabetes",
        color: "#dc2626",
      },
      author: {
        name: "ডা. এন্ডোক্রাইনোলজি বিভাগ",
        slug: "dr-endocrinology-dept",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "১৫ মার্চ, ২০২৫",
      readTime: "৭ মিনিট পড়ুন",
      views: 1456,
      likes: 156,
      tags: ["ডায়াবেটিস", "রমজান", "খাদ্যাভ্যাস", "ওষুধ"],
      featured: true,
    },
    {
      id: 8,
      slug: "child-nutrition-growth",
      title: "শিশুদের পুষ্টি ও বৃদ্ধি - মা-বাবার জানা প্রয়োজন",
      excerpt: "শিশুর সুস্থ বৃদ্ধির জন্য সঠিক পুষ্টি ও খাদ্যাভ্যাস সম্পর্কে বিস্তারিত গাইড।",
      image: "/images/child-nutrition.jpg",
      category: {
        name: "শিশু স্বাস্থ্য",
        slug: "child-health",
        color: "#059669",
      },
      author: {
        name: "ডা. পেডিয়াট্রিক বিভাগ",
        slug: "dr-pediatric-dept",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "১০ মার্চ, ২০২৫",
      readTime: "৫ মিনিট পড়ুন",
      views: 987,
      likes: 123,
      tags: ["শিশু", "পুষ্টি", "বৃদ্ধি", "খাদ্য"],
      featured: false,
    },
    {
      id: 9,
      slug: "heart-health-prevention",
      title: "হৃদরোগ প্রতিরোধে জীবনযাত্রার পরিবর্তন",
      excerpt: "হৃদরোগ প্রতিরোধে খাদ্যাভ্যাস, ব্যায়াম ও জীবনযাত্রার গুরুত্বপূর্ণ পরিবর্তনসমূহ।",
      image: "/images/heart-health.jpg",
      category: {
        name: "হৃদরোগ",
        slug: "heart-disease",
        color: "#dc2626",
      },
      author: {
        name: "ডা. কার্ডিওলজি বিভাগ",
        slug: "dr-cardiology-dept",
        image: "/images/doctor-placeholder.jpg",
      },
      publishedAt: "৫ মার্চ, ২০২৫",
      readTime: "৬ মিনিট পড়ুন",
      views: 1123,
      likes: 145,
      tags: ["হৃদরোগ", "প্রতিরোধ", "জীবনযাত্রা", "ব্যায়াম"],
      featured: false,
    },
  ]

  const categories = [
    { name: "সব ক্যাটেগরি", slug: "all", count: blogPosts.length },
    { name: "সামাজিক স্বাস্থ্য", slug: "social-health", count: 1 },
    { name: "ক্যান্সার সচেতনতা", slug: "cancer-awareness", count: 1 },
    { name: "চাকরির সুযোগ", slug: "career-opportunities", count: 1 },
    { name: "জেনেটিক রোগ", slug: "genetic-diseases", count: 1 },
    { name: "কর্মক্ষেত্রে নিরাপত্তা", slug: "workplace-safety", count: 1 },
    { name: "টিকাদান কর্মসূচি", slug: "vaccination-program", count: 1 },
    { name: "ডায়াবেটিস", slug: "diabetes", count: 1 },
    { name: "শিশু স্বাস্থ্য", slug: "child-health", count: 1 },
    { name: "হৃদরোগ", slug: "heart-disease", count: 1 },
  ]

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category.slug === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

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
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-[#017381]/20 medical-card-hover cursor-interactive cursor-magnetic"
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
                        style={{ backgroundColor: post.category.color }}
                      >
                        {post.category.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ফিচার্ড
                      </span>
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
                          <Heart className="w-4 h-4 text-[#017381]" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-medium text-gray-700">{post.author.name}</span>
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
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => {
                      setSelectedCategory(category.slug)
                      setCurrentPage(1)
                    }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-interactive cursor-glow ${
                      selectedCategory === category.slug
                        ? "bg-gradient-to-r from-[#017381] to-[#025a65] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#017381]/20"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-interactive"
              >
                <Filter className="w-4 h-4" />
                <span>ফিল্টার</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-gray-600">
              <span className="font-medium">{filteredPosts.length}</span> টি আর্টিকেল পাওয়া গেছে
              {searchQuery && (
                <span>
                  {" "}
                  "<span className="font-medium text-[#017381]">{searchQuery}</span>" এর জন্য
                </span>
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentPosts.map((post, index) => (
              <article
                key={post.id}
                data-index={index}
                className={`blog-card medical-card medical-card-hover group cursor-interactive cursor-magnetic cursor-glow bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden h-64">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      onError={(e) => {
                        e.target.src = `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(post.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Link
                        href={`/blog/category/${post.category.slug}`}
                        className="px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-glow"
                        style={{ backgroundColor: post.category.color }}
                      >
                        {post.category.name}
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#017381]" />
                        <span className="text-xs font-medium text-gray-700">{post.views}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        <span className="text-xs font-medium text-gray-700">{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-[#017381] transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-[#017381]" />
                        <span>{post.publishedAt}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1 text-[#017381]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <Link
                        href={`/blog/author/${post.author.slug}`}
                        className="font-medium text-gray-700 hover:text-[#017381] transition-colors cursor-interactive"
                      >
                        {post.author.name}
                      </Link>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Link
                          key={tagIndex}
                          href={`/blog/tag/${tag}`}
                          className="px-3 py-1 bg-gray-100 hover:bg-[#017381]/10 text-gray-600 hover:text-[#017381] rounded-full text-xs font-medium transition-colors cursor-interactive cursor-glow"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 ripple-effect cursor-pulse cursor-shadow-grow">
                        বিস্তারিত পড়ুন
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

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
