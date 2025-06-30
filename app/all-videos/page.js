"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, Clock, Calendar, ArrowLeft, Search, Filter, ChevronDown } from 'lucide-react'

export default function VideosPage() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

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

    const elements = document.querySelectorAll(".video-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, searchQuery])

  const allVideos = [
    {
      id: "mLajU0eBIV8",
      title: "বিশ্ব হিমোফিলিয়া দিবস-২০২৫",
      category: "স্বাস্থ্য সচেতনতা",
      duration: "5:30",
      publishedAt: "২০২৫-০৪-১৭",
      thumbnail: `https://img.youtube.com/vi/mLajU0eBIV8/maxresdefault.jpg`,
      description: "বিশ্ব হিমোফিলিয়া দিবস উপলক্ষে বিশেষ আলোচনা। হিমোফিলিয়া রোগ সম্পর্কে সচেতনতা বৃদ্ধি।"
    },
    {
      id: "y2Zwq4oijMg",
      title: "স্বাভাবিক ডেলিভারি—এখন ব্যথাহীন! সুস্থ মা, নিরাপদ সন্তান।",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "8:45",
      publishedAt: "২০২৫-০৪-১৫",
      thumbnail: `https://img.youtube.com/vi/y2Zwq4oijMg/maxresdefault.jpg`,
      description: "আধুনিক চিকিৎসা পদ্ধতিতে ব্যথাহীন স্বাভাবিক প্রসব সম্পর্কে বিস্তারিত তথ্য।"
    },
    {
      id: "SoXibqSYDzs",
      title: "সকল স্বাস্থ্যসেবা নিয়ে প্রো-অ্যাকটিভ মেডিকেল কলেজ এন্ড হসপিটাল লিঃ সবসময় আপনার পাশে🩺",
      category: "হাসপাতাল সেবা",
      duration: "6:20",
      publishedAt: "২০২৫-০৪-১০",
      thumbnail: `https://img.youtube.com/vi/SoXibqSYDzs/maxresdefault.jpg`,
      description: "প্রো-অ্যাকটিভ হাসপাতালের সকল স্বাস্থ্যসেবা সম্পর্কে বিস্তারিত পরিচিতি।"
    },
    {
      id: "AjQlE7DU3Lc",
      title: "মহান শ্রমিক দিবস উপলক্ষে শ্রমিকদের মানসিক স্বাস্থ্য নিয়ে বিশেষ আলোচনা🩺",
      category: "মানসিক স্বাস্থ্য",
      duration: "12:15",
      publishedAt: "২০২৫-০৫-০১",
      thumbnail: `https://img.youtube.com/vi/AjQlE7DU3Lc/maxresdefault.jpg`,
      description: "শ্রমিকদের মানসিক স্বাস্থ্য নিয়ে বিশেষজ্ঞ চিকিৎসকদের পরামর্শ ও আলোচনা।"
    },
    {
      id: "uppZWNDLFHs",
      title: "শ্রমিকদের স্বাস্থ্য ঝুঁকি ও স্বাস্থ্য নিরাপত্তা নিয়ে বিশেষ আলোচনা🩺",
      category: "কর্মক্ষেত্রে স্বাস্থ্য",
      duration: "10:30",
      publishedAt: "২০২৫-০৫-০১",
      thumbnail: `https://img.youtube.com/vi/uppZWNDLFHs/maxresdefault.jpg`,
      description: "কর্মক্ষেত্রে স্বাস্থ্য ঝুঁকি ও নিরাপত্তা বিষয়ে বিশেষজ্ঞ মতামত।"
    },
    {
      id: "CukTfOAhe_I",
      title: "সকল স্বাস্থ্যসেবা নিয়ে ২৪ ঘন্টা আপনার পাশে প্রো-অ্যাকটিভ মেডিকেল কলেজ হসপিটাল🩺",
      category: "হাসপাতাল সেবা",
      duration: "7:45",
      publishedAt: "২০২৫-০৪-০৮",
      thumbnail: `https://img.youtube.com/vi/CukTfOAhe_I/maxresdefault.jpg`,
      description: "২৪ ঘন্টা জরুরি সেবা ও সকল বিভাগের চিকিৎসা সুবিধা সম্পর্কে তথ্য।"
    },
    {
      id: "LQOPBvm4c8Q",
      title: "Pro-Active Medical College & Hospital Ltd",
      category: "হাসপাতাল পরিচিতি",
      duration: "4:20",
      publishedAt: "২০২৫-০৩-২৫",
      thumbnail: `https://img.youtube.com/vi/LQOPBvm4c8Q/maxresdefault.jpg`,
      description: "প্রো-অ্যাকটিভ মেডিকেল কলেজ ও হাসপাতালের সার্বিক পরিচিতি।"
    },
    {
      id: "vPtK83Hmi9s",
      title: "প্রো-অ্যাকটিভ টিকা কেন্দ্রে জাতীয় ভিটামিন 'এ' প্লাস ক্যাম্পেইন ২০২৩",
      category: "টিকাদান কর্মসূচি",
      duration: "3:15",
      publishedAt: "২০২৩-০৬-১৫",
      thumbnail: `https://img.youtube.com/vi/vPtK83Hmi9s/maxresdefault.jpg`,
      description: "জাতীয় ভিটামিন 'এ' প্লাস ক্যাম্পেইনে প্রো-অ্যাকটিভ টিকা কেন্দ্রের অংশগ্রহণ।"
    },
    {
      id: "QV-jaTHCW8A",
      title: "আরও একটি সফলতার গল্প | Success Story | Dr. Priyanka Podder | PMCHL",
      category: "সফলতার গল্প",
      duration: "6:50",
      publishedAt: "২০২৫-০৩-২০",
      thumbnail: `https://img.youtube.com/vi/QV-jaTHCW8A/maxresdefault.jpg`,
      description: "ডা. প্রিয়াংকা পোদ্দারের চিকিৎসায় রোগীর সফল আরোগ্যের গল্প।"
    },
    {
      id: "MGthXS3bdjg",
      title: "টিউবে বাচ্চা ছিলো এবং ফেটে গিয়ে প্রচুর রক্তক্ষরণ হয়। প্রো-অ্যাকটিভে সফল অপারশেন❤",
      category: "সফলতার গল্প",
      duration: "5:25",
      publishedAt: "২০২৫-০৩-১৮",
      thumbnail: `https://img.youtube.com/vi/MGthXS3bdjg/maxresdefault.jpg`,
      description: "জটিল গর্ভকালীন জরুরি অবস্থায় প্রো-অ্যাকটিভে সফল অপারেশনের গল্প।"
    },
    {
      id: "3M52Hd1W4mg",
      title: "প্রো-অ্যাকটিভ মেডিকেল কলেজ হসপিটালের বিশেষজ্ঞ ডাক্তারগণের তালিকা 🩺Specialist Doctor List",
      category: "ডাক্তার পরিচিতি",
      duration: "9:30",
      publishedAt: "২০২৫-০৩-১৫",
      thumbnail: `https://img.youtube.com/vi/3M52Hd1W4mg/maxresdefault.jpg`,
      description: "প্রো-অ্যাকটিভ হাসপাতালের সকল বিশেষজ্ঞ চিকিৎসকদের পরিচিতি।"
    },
    {
      id: "HLrYEckYMa0",
      title: "ডাঃ নাজিয়া সুলতানা, ল্যাপারোস্কপিক সার্জন ও ইনফার্টিলিটি স্পেশালিস্ট, সিনিয়র স্পেশালিস্ট PMCHL",
      category: "ডাক্তার পরিচিতি",
      duration: "7:20",
      publishedAt: "২০২৫-০৩-১২",
      thumbnail: `https://img.youtube.com/vi/HLrYEckYMa0/maxresdefault.jpg`,
      description: "ডাঃ নাজিয়া সুলতানা, ল্যাপারোস্কপিক সার্জন ও বন্ধ্যাত্ব বিশেষজ্ঞের পরিচিতি।"
    },
    {
      id: "YAjf68Kzo7k",
      title: "জরায়ু ক্যান্সারের কারণ, লক্ষণ ও প্রতিকার | Dr. Priyanka Podder | PMCHL",
      category: "ক্যান্সার সচেতনতা",
      duration: "11:45",
      publishedAt: "২০২৫-০৩-১০",
      thumbnail: `https://img.youtube.com/vi/YAjf68Kzo7k/maxresdefault.jpg`,
      description: "জরায়ু ক্যান্সার সম্পর্কে বিস্তারিত তথ্য ও প্রতিরোধের উপায়।"
    },
    {
      id: "JPpfsWun8Z0",
      title: "প্রচন্ড মাথা ব্যাথায় ভুগছিলো। প্রো-অ্যাকটিভে নিউরো বিশেষজ্ঞ এর চিকিৎসায় ১ দিনেই আল্লাহর রহমতে সুস্থ",
      category: "সফলতার গল্প",
      duration: "4:30",
      publishedAt: "২০২৫-০৩-০৮",
      thumbnail: `https://img.youtube.com/vi/JPpfsWun8Z0/maxresdefault.jpg`,
      description: "নিউরোলজি বিভাগে দ্রুত চিকিৎসায় রোগীর আরোগ্যের গল্প।"
    },
    {
      id: "9kbtxqJWyLs",
      title: "নরমাল ডেলিভারীর সাফল্য | Success Story | Dr. Priyanka Podder | PMCHL",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "5:15",
      publishedAt: "২০২৫-০৩-০৫",
      thumbnail: `https://img.youtube.com/vi/9kbtxqJWyLs/maxresdefault.jpg`,
      description: "স্বাভাবিক প্রসবে সফলতার আরেকটি গল্প।"
    },
    {
      id: "9gbwRsNcvKQ",
      title: "সফল নরমাল ডেলিভারীতে রোগীর আত্মতৃপ্তি | Success Story | Dr. Priyanka Podder | PMCHL",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "6:10",
      publishedAt: "২০২৫-০৩-০৩",
      thumbnail: `https://img.youtube.com/vi/9gbwRsNcvKQ/maxresdefault.jpg`,
      description: "নরমাল ডেলিভারিতে রোগীর সন্তুষ্টি ও কৃতজ্ঞতার বহিঃপ্রকাশ।"
    },
    {
      id: "-pK3zHpKOTw",
      title: "নরমাল ডেলিভারীর টিপস | Tips For Normal Delivery | Dr. Priyanka Podder | PMCHL",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "8:25",
      publishedAt: "২০২৫-০৩-০১",
      thumbnail: `https://img.youtube.com/vi/-pK3zHpKOTw/maxresdefault.jpg`,
      description: "স্বাভাবিক প্রসবের জন্য গুরুত্বপূর্ণ টিপস ও পরামর্শ।"
    },
    {
      id: "N7a5dlsIdAo",
      title: "কিডনী জটিলতা সহ মাত্র ৩২ সপ্তাহেই জটিল অবস্থায় প্রো-অ্যাকটিভ হসপিটালে সফল সিজার | Success Story",
      category: "সফলতার গল্প",
      duration: "7:40",
      publishedAt: "২০২৫-০২-২৮",
      thumbnail: `https://img.youtube.com/vi/N7a5dlsIdAo/maxresdefault.jpg`,
      description: "জটিল গর্ভাবস্থায় কিডনি সমস্যা সহ সফল সিজারিয়ান অপারেশন।"
    },
    {
      id: "xowFbUicRIo",
      title: "রক্তের গ্রুপ জানা কেন জরুরী? ডাঃ প্রিয়াংকা পোদ্দার | PMCHL",
      category: "স্বাস্থ্য সচেতনতা",
      duration: "6:30",
      publishedAt: "২০২৫-০২-২৫",
      thumbnail: `https://img.youtube.com/vi/xowFbUicRIo/maxresdefault.jpg`,
      description: "রক্তের গ্রুপ জানার গুরুত্ব ও প্রয়োজনীয়তা সম্পর্কে আলোচনা।"
    },
    {
      id: "F-0bYyYKfGQ",
      title: "সন্তান প্রসবের পর কিভাবে মায়ের যত্ন নিবেন?",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "9:15",
      publishedAt: "২০২৫-০২-২২",
      thumbnail: `https://img.youtube.com/vi/F-0bYyYKfGQ/maxresdefault.jpg`,
      description: "প্রসবোত্তর মায়ের যত্ন ও পরিচর্যার বিস্তারিত গাইডলাইন।"
    },
    {
      id: "5JrUeiAwRJs",
      title: "নিরাপদ মাতৃত্বের টিপস | Tips For Safe motherhood | Dr. Priyanka Podder | PMCHL",
      category: "মাতৃত্ব ও শিশু স্বাস্থ্য",
      duration: "10:20",
      publishedAt: "২০২৫-০২-২০",
      thumbnail: `https://img.youtube.com/vi/5JrUeiAwRJs/maxresdefault.jpg`,
      description: "নিরাপদ মাতৃত্বের জন্য প্রয়োজনীয় টিপস ও পরামর্শ।"
    }
  ]

  const categories = [
    { name: "সব ক্যাটেগরি", slug: "all", count: allVideos.length },
    { name: "স্বাস্থ্য সচেতনতা", slug: "স্বাস্থ্য সচেতনতা", count: 3 },
    { name: "মাতৃত্ব ও শিশু স্বাস্থ্য", slug: "মাতৃত্ব ও শিশু স্বাস্থ্য", count: 7 },
    { name: "হাসপাতাল সেবা", slug: "হাসপাতাল সেবা", count: 2 },
    { name: "সফলতার গল্প", slug: "সফলতার গল্প", count: 5 },
    { name: "ডাক্তার পরিচিতি", slug: "ডাক্তার পরিচিতি", count: 2 },
    { name: "মানসিক স্বাস্থ্য", slug: "মানসিক স্বাস্থ্য", count: 1 },
    { name: "ক্যান্সার সচেতনতা", slug: "ক্যান্সার সচেতনতা", count: 1 },
    { name: "টিকাদান কর্মসূচি", slug: "টিকাদান কর্মসূচি", count: 1 },
  ]

  // Filter videos based on category and search
  const filteredVideos = allVideos.filter((video) => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>

          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Medical Videos
              <span className="block text-[#b8e6ea]">& Health Education</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
              Watch educational videos, success stories, and expert medical advice from our healthcare professionals
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search videos, health topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 mx-auto px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Filter className="w-4 h-4" />
                  Filter by Category
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>

                {showFilters && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 min-w-96">
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.slug}
                          onClick={() => {
                            setSelectedCategory(category.slug)
                            setShowFilters(false)
                          }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedCategory === category.slug
                              ? "bg-[#017381] text-white"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing {filteredVideos.length} videos
              {selectedCategory !== "all" && (
                <span className="ml-2 px-3 py-1 bg-[#017381]/10 text-[#017381] rounded-full text-sm font-medium">
                  {categories.find((cat) => cat.slug === selectedCategory)?.name}
                </span>
              )}
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => {
              const isVisible = visibleCards.has(index)
              return (
                <Link href={`/videos/${video.id}`} key={video.id}>
                  <article
                    data-index={index}
                    className={`video-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=300&width=500"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-8 h-8 text-[#017381] ml-1" fill="currentColor" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#017381]/90 backdrop-blur-sm hover:bg-[#025a65] px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/20">
                          {video.category}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-[#017381] transition-colors duration-300 leading-tight line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{video.description}</p>

                      {/* Published Date */}
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

          {/* No Results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No videos found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
