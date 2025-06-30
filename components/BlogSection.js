"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, User, ExternalLink } from "lucide-react"

const BlogSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())

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
  }, [])

  const blogPosts = [
    {
      image: "/images/blog/Emergency-Service.jpg",
      alt: "Eid celebration safety",
      category: "সামাজিক স্বাস্থ্য",
      date: "২৮",
      month: "মে",
      title: "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে",
      description:
        "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে আপনার যাত্রা হোক নিরাপদ, উদযাপন হোক স্বস্তিদায়ক। ঈদের এই পবিত্র সময়ে সবার সুস্বাস্থ্য কামনা করি।",
      readTime: "৩ মিনিট পড়ুন",
      author: "প্রো-অ্যাক্টিভ হাসপাতাল",
      link: "/blog/eid-celebration-health-guide",
    },
    {
      image: "/images/blog/World-blood-cancer-Day.jpg",
      alt: "World Blood Cancer Day",
      category: "ক্যান্সার সচেতনতা",
      date: "২৮",
      month: "মে",
      title: "World Blood Cancer Day 2025",
      description:
        "২৮ মে | থিম: United by Unique প্রতিটি রক্তের ক্যান্সার রোগীর জন্য আমাদের একসাথে দাঁড়ানো প্রয়োজন। সচেতনতা বৃদ্ধি করুন, জীবন বাঁচান।",
      readTime: "৫ মিনিট পড়ুন",
      author: "ডা. হেমাটোলজি বিভাগ",
      link: "/blog/world-blood-cancer-day-2025",
    },
    {
      image: "/images/blog/Hiring.jpg",
      alt: "Hospital recruitment",
      category: "চাকরির সুযোগ",
      date: "২৫",
      month: "মে",
      title: "We're Hiring at Pro-Active Hospital!",
      description:
        "A Sister Concern of Pro-Active Medical College and Hospital Ltd. আমাদের সাথে যোগ দিন এবং স্বাস্থ্যসেবায় অবদান রাখুন। বিভিন্ন পদে আবেদনের সুযোগ।",
      readTime: "২ মিনিট পড়ুন",
      author: "এইচআর বিভাগ",
      link: "/blog/hospital-career-opportunities",
    },
    {
      image: "/images/blog/World-Thalassemia.jpg",
      alt: "World Thalassemia Day",
      category: "জেনেটিক রোগ",
      date: "৮",
      month: "মে",
      title: "বিশ্ব থ্যালাসেমিয়া দিবস ২০২৫",
      description:
        "থ্যালাসেমিয়া প্রতিরোধ শুরু হোক সচেতনতা থেকে। প্রতি বছর বিশ্বব্যাপী ১,০০,০০০-এরও বেশি শিশু থ্যালাসেমিয়া নিয়ে জন্মগ্রহণ করে।",
      readTime: "৪ মিনিট পড়ুন",
      author: "ডা. পেডিয়াট্রিক বিভাগ",
      link: "/blog/world-thalassemia-day-2025",
    },
    {
      image: "/images/blog/World-Safety-Day-At-Work.jpg",
      alt: "Workplace safety and AI",
      category: "কর্মক্ষেত্রে নিরাপত্তা",
      date: "২৮",
      month: "এপ্রিল",
      title: "কর্মক্ষেত্রে স্বাস্থ্য ও নিরাপত্তা নিশ্চিতকরণে কৃত্রিম বুদ্ধিমত্তা",
      description:
        "বিশ্ব কর্মক্ষেত্রে নিরাপত্তা ও স্বাস্থ্য দিবসে সবার জন্য নিরাপদ কাজের পরিবেশ নিশ্চিত করি। ডিজিটাল প্রযুক্তির যুগান্তকারী ভূমিকা।",
      readTime: "৬ মিনিট পড়ুন",
      author: "ডা. অকুপেশনাল হেলথ",
      link: "/blog/workplace-safety-ai-technology",
    },
    {
      image: "/images/blog/Bissho-Tikadan.jpg",
      alt: "World Immunization Week",
      category: "টিকাদান কর্মসূচি",
      date: "৩০",
      month: "এপ্রিল",
      title: "সুস্থ ভবিষ্যতের জন্য টিকা অপরিহার্য",
      description: "বিশ্ব টিকা সপ্তাহ উপলক্ষে ২৪ থেকে ৩০ এপ্রিল, সকাল ১০টা থেকে বিশেষ টিকাদান কর্মসূচি। সবার জন্য নিরাপদ ও কার্যকর টিকা।",
      readTime: "৩ মিনিট পড়ুন",
      author: "ডা. ইমিউনোলজি বিভাগ",
      link: "/blog/world-immunization-week-2025",
    },
  ]

  const displayedPosts = blogPosts.slice(0, 6)

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#017381]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#025a65]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#017381]/3 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Medical cross patterns */}
        <div className="absolute top-20 left-20 w-16 h-2 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute top-28 left-28 w-2 h-16 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-1.5 bg-[#025a65]/10 rounded-full"></div>
        <div className="absolute bottom-38 right-38 w-1.5 h-12 bg-[#025a65]/10 rounded-full"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-16 w-32 h-32 bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-gradient-to-br from-[#025a65]/10 to-[#034a52]/10 rounded-2xl rotate-12 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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

        {/* Blog Cards Grid */}
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

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm hover:bg-[#025a65] px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 border border-white/20">
                        {post.category}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl h-16 w-16 flex flex-col items-center justify-center shadow-lg border border-white/50">
                        <span className="font-bold text-lg text-[#017381]">{post.date}</span>
                        <span className="text-xs font-medium text-gray-600">{post.month}</span>
                      </div>
                    </div>

                    {/* Read More Icon */}
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
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.description}</p>

                    {/* Author and Read Time */}
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

                    {/* Read More Button */}
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

        {/* View All Button */}
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
