"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Copy, Heart, MessageCircle, Bookmark, ChevronRight, Eye, ThumbsUp, Download, PrinterIcon as Print, Phone } from 'lucide-react'

export default function SingleBlogPage({ params }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(127)
  const [shareCount, setShareCount] = useState(45)
  const [viewCount, setViewCount] = useState(1234)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  // Sample blog data - in real app, this would come from API/CMS
  const blogPost = {
    id: 1,
    title: "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে - স্বাস্থ্যকর উদযাপনের গাইড",
    slug: "eid-celebration-health-guide",
    excerpt: "ঈদের এই পবিত্র সময়ে কীভাবে স্বাস্থ্যকর উপায়ে উদযাপন করবেন এবং পরিবারের সবার সুস্বাস্থ্য নিশ্চিত করবেন।",
    content: `
      <p>ঈদুল ফিতর আমাদের জীবনে আনন্দ ও খুশির বার্তা নিয়ে আসে। এই পবিত্র উৎসবে আমরা পরিবার-পরিজন ও বন্ধুবান্ধবদের সাথে মিলিত হই, সুস্বাদু খাবার উপভোগ করি এবং আনন্দে মেতে উঠি। তবে এই উদযাপনের সময় আমাদের স্বাস্থ্যের প্রতিও যত্নবান থাকতে হবে।</p>

      <h2>ঈদের খাবার ও স্বাস্থ্য</h2>
      <p>ঈদের বিশেষ খাবারগুলো আমাদের ঐতিহ্যের অংশ। তবে অতিরিক্ত মিষ্টি ও তৈলাক্ত খাবার স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে। এজন্য:</p>
      
      <ul>
        <li><strong>পরিমিত খাবার গ্রহণ:</strong> সেমাই, পায়েস, বিরিয়ানি - সবকিছুই পরিমিত পরিমাণে খান</li>
        <li><strong>পানি পান:</strong> পর্যাপ্ত পানি পান করুন, বিশেষ করে মিষ্টি খাবারের পর</li>
        <li><strong>ফল ও সবজি:</strong> খাবারের তালিকায় তাজা ফল ও সবজি রাখুন</li>
        <li><strong>নিয়মিত খাবার:</strong> একসাথে অনেক না খেয়ে অল্প অল্প করে বারবার খান</li>
      </ul>

      <h2>ডায়াবেটিস রোগীদের জন্য বিশেষ পরামর্শ</h2>
      <p>ডায়াবেটিস রোগীদের ঈদের সময় বিশেষ সতর্কতা অবলম্বন করতে হবে:</p>
      
      <blockquote>
        "ঈদের আনন্দে ভাগ নিন, কিন্তু আপনার স্বাস্থ্যের কথা ভুলে যাবেন না। নিয়মিত ওষুধ সেবন ও রক্তের চিনির মাত্রা পরীক্ষা করুন।"
      </blockquote>

      <h2>শিশুদের স্বাস্থ্য সুরক্ষা</h2>
      <p>ঈদের সময় শিশুদের বিশেষ যত্ন নিতে হবে:</p>
      
      <ol>
        <li>অতিরিক্ত মিষ্টি খাওয়া থেকে বিরত রাখুন</li>
        <li>নিয়মিত হাত ধোয়ার অভ্যাস বজায় রাখুন</li>
        <li>পর্যাপ্ত ঘুমের ব্যবস্থা করুন</li>
        <li>বাইরের খাবার কম খাওয়ান</li>
      </ol>

      <h2>ভ্রমণের সময় স্বাস্থ্য সতর্কতা</h2>
      <p>ঈদের ছুটিতে অনেকেই গ্রামের বাড়ি বা বিভিন্ন স্থানে ভ্রমণ করেন। এসময় কিছু বিষয় মনে রাখবেন:</p>

      <div class="health-tips-box">
        <h3>ভ্রমণকালীন স্বাস্থ্য টিপস:</h3>
        <ul>
          <li>প্রয়োজনীয় ওষুধপত্র সাথে রাখুন</li>
          <li>পানি বিশুদ্ধতার বিষয়ে সতর্ক থাকুন</li>
          <li>যানবাহনে মাস্ক ব্যবহার করুন</li>
          <li>জরুরি চিকিৎসকের যোগাযোগ নম্বর সংরক্ষণ করুন</li>
        </ul>
      </div>

      <h2>মানসিক স্বাস্থ্য ও ঈদের আনন্দ</h2>
      <p>ঈদ শুধু শারীরিক নয়, মানসিক স্বাস্থ্যের জন্যও গুরুত্বপূর্ণ। পরিবার ও বন্ধুদের সাথে সময় কাটানো, দান-খয়রাত করা এবং আনন্দে অংশগ্রহণ করা মানসিক প্রশান্তি এনে দেয়।</p>

      <h2>জরুরি পরিস্থিতিতে করণীয়</h2>
      <p>ঈদের সময় যদি কোনো স্বাস্থ্য সমস্যা দেখা দেয়, তাহলে দেরি না করে চিকিৎসকের পরামর্শ নিন। প্রো-অ্যাক্টিভ হাসপাতালে ২৪/৭ জরুরি সেবা উপলব্ধ রয়েছে।</p>

      <div class="emergency-contact">
        <h3>জরুরি যোগাযোগ:</h3>
        <p><strong>অ্যাম্বুলেন্স:</strong> ০১৯০২৫৫৬০৬০</p>
        <p><strong>হটলাইন:</strong> ০৯৬৬৬-৯৯৭৯৯৭</p>
        <p><strong>কাস্টমার কেয়ার:</strong> ০১৯০২৫৫৬০৭০</p>
      </div>

      <p>ঈদ মুবারক! আপনার ও আপনার পরিবারের সুস্বাস্থ্য ও সুখ কামনা করি।</p>
    `,
    featuredImage: "/images/blog/Emergency-Service.jpg",
    image: "/images/blog/Emergency-Service.jpg",
    category: {
      name: "সামাজিক স্বাস্থ্য",
      slug: "social-health",
      color: "#017381"
    },
    author: {
      name: "ডা. মোহাম্মদ রহিম",
      title: "কমিউনিটি মেডিসিন বিশেষজ্ঞ",
      image: "/images/doctor-placeholder.jpg",
      bio: "কমিউনিটি মেডিসিন ও পাবলিক হেলথ বিশেষজ্ঞ। ১৫ বছরের অভিজ্ঞতা।"
    },
    publishedAt: "২৮ মে, ২০২৫",
    readTime: "৮ মিনিট পড়ুন",
    tags: ["ঈদ", "স্বাস্থ্য", "পুষ্টি", "ডায়াবেটিস", "শিশু স্বাস্থ্য"],
    relatedPosts: [
      {
        id: 2,
        title: "রমজানের পর স্বাস্থ্যকর জীবনযাত্রা",
        image: "/images/healthy-lifestyle.jpg",
        category: "জীবনযাত্রা",
        readTime: "৫ মিনিট"
      },
      {
        id: 3,
        title: "ডায়াবেটিস নিয়ন্ত্রণে খাদ্যাভ্যাস",
        image: "/images/diabetes-diet.jpg",
        category: "ডায়াবেটিস",
        readTime: "৬ মিনিট"
      },
      {
        id: 4,
        title: "শিশুদের পুষ্টি ও স্বাস্থ্য",
        image: "/images/child-nutrition.jpg",
        category: "শিশু স্বাস্থ্য",
        readTime: "৪ মিনিট"
      }
    ]
  }

  // Reading progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('.article-content')
      if (article) {
        const scrollTop = window.scrollY
        const docHeight = article.offsetHeight
        const winHeight = window.innerHeight
        const scrollPercent = scrollTop / (docHeight - winHeight)
        const scrollPercentRounded = Math.round(scrollPercent * 100)
        setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = blogPost.title
    
    let shareUrl = ''
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('লিংক কপি হয়েছে!')
        return
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
      setShareCount(prev => prev + 1)
    }
    setShowShareMenu(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#017381] to-[#025a65] transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="flex items-center gap-3 text-[#017381] hover:text-[#025a65] transition-colors cursor-interactive cursor-slide"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">ব্লগে ফিরে যান</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Eye className="w-4 h-4 text-[#017381]" />
                <span>{viewCount.toLocaleString()} ভিউ</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-all duration-300 cursor-magnetic cursor-pulse ${
                    isLiked 
                      ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-full transition-all duration-300 cursor-magnetic cursor-pulse ${
                    isBookmarked 
                      ? 'bg-[#017381] text-white hover:bg-[#025a65]' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-magnetic cursor-bounce"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[200px] z-50">
                      <div className="space-y-2">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-600 transition-colors cursor-interactive cursor-glow"
                        >
                          <Facebook className="w-5 h-5" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sky-50 text-sky-600 transition-colors cursor-interactive cursor-glow"
                        >
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-700 transition-colors cursor-interactive cursor-glow"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors cursor-interactive cursor-glow"
                        >
                          <Copy className="w-5 h-5" />
                          <span>লিংক কপি করুন</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="article-content">
        {/* Hero Section */}
        <div className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl ">
              {/* Category Badge */}
              <div className="mb-6">
                <Link
                  href={`/blog/category/${blogPost.category.slug}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-interactive cursor-glow"
                >
                  <Tag className="w-4 h-4" />
                  {blogPost.category.name}
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {blogPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#017381]" />
                  <span>{blogPost.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#017381]" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-[#017381]" />
                  <span>{likeCount} লাইক</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-[#017381]" />
                  <span>{shareCount} শেয়ার</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 cursor-interactive cursor-scale">
                <Image
                  src={blogPost.featuredImage || "/placeholder.svg"}
                  alt={blogPost.title}
                  width={1200}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="max-w-none">
                  {/* Article Body */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-[#017381] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#017381] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#025a65] prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-l-[#017381] prose-blockquote:bg-[#017381]/5 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">ট্যাগসমূহ:</h3>
                    <div className="flex flex-wrap gap-3">
                      {blogPost.tags.map((tag, index) => (
                        <Link
                          key={index}
                          href={`/blog/tag/${tag}`}
                          className="px-4 py-2 bg-gray-100 hover:bg-[#017381]/10 text-gray-700 hover:text-[#017381] rounded-full text-sm font-medium transition-all duration-300 cursor-interactive cursor-glow"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-magnetic cursor-pulse ${
                        isLiked
                          ? 'bg-red-100 text-red-600 hover:bg-red-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{isLiked ? 'পছন্দ হয়েছে' : 'পছন্দ করুন'} ({likeCount})</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full font-semibold transition-all duration-300 cursor-magnetic cursor-bounce">
                      <MessageCircle className="w-5 h-5" />
                      <span>মন্তব্য করুন</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full font-semibold transition-all duration-300 cursor-magnetic cursor-bounce">
                      <Print className="w-5 h-5" />
                      <span>প্রিন্ট করুন</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full font-semibold transition-all duration-300 cursor-magnetic cursor-bounce">
                      <Download className="w-5 h-5" />
                      <span>ডাউনলোড</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 medical-card-hover cursor-interactive">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={blogPost.author.image || "/placeholder.svg"}
                          alt={blogPost.author.name}
                          fill
                          className="rounded-full object-cover border-4 border-[#017381]/20"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#017381] mb-2">{blogPost.author.name}</h3>
                      <p className="text-gray-600 font-medium mb-3">{blogPost.author.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">{blogPost.author.bio}</p>
                      <button className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-magnetic cursor-pulse medical">
                        লেখকের প্রোফাইল দেখুন
                      </button>
                    </div>
                  </div>

                  {/* Table of Contents */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 medical-card-hover">
                    <h3 className="text-xl font-bold text-[#017381] mb-6">এই আর্টিকেলে যা আছে</h3>
                    <nav className="space-y-3">
                      <a href="#eid-food-health" className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide">
                        ঈদের খাবার ও স্বাস্থ্য
                      </a>
                      <a href="#diabetes-advice" className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide">
                        ডায়াবেটিস রোগীদের জন্য পরামর্শ
                      </a>
                      <a href="#child-health" className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide">
                        শিশুদের স্বাস্থ্য সুরক্ষা
                      </a>
                      <a href="#travel-health" className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide">
                        ভ্রমণের সময় স্বাস্থ্য সতর্কতা
                      </a>
                      <a href="#mental-health" className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide">
                        মানসিক স্বাস্থ্য ও ঈদের আনন্দ
                      </a>
                    </nav>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 shadow-2xl cursor-interactive emergency">
                    <h3 className="text-xl font-bold mb-4">জরুরি যোগাযোগ</h3>
                    <div className="space-y-3">
                      <a href="tel:01902556060" className="flex items-center gap-3 text-red-100 hover:text-white transition-colors emergency cursor-glow">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90">অ্যাম্বুলেন্স</div>
                          <div className="font-bold">01902556060</div>
                        </div>
                      </a>
                      <a href="tel:09666997997" className="flex items-center gap-3 text-red-100 hover:text-white transition-colors emergency cursor-glow">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90">হটলাইন</div>
                          <div className="font-bold">09666-997997</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#017381] mb-6">সম্পর্কিত আর্টিকেল</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              আরও স্বাস্থ্য বিষয়ক তথ্য ও পরামর্শ পড়ুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPost.relatedPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-[#017381]/20 medical-card-hover cursor-interactive cursor-magnetic"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#017381]/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-[#017381] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1 text-[#017381]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-magnetic cursor-bounce"
            >
              <span>সব আর্টিকেল দেখুন</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

  
    </div>
  )
}
