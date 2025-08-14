"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronRight,
  Eye,
  ThumbsUp,
  Download,
  PrinterIcon as Print,
  Phone,
} from "lucide-react"
import RichTextRenderer from "@/components/RichTextRenderer"

export default function SingleBlogPage() {
  const { slug } = useParams()
  const [blogPost, setBlogPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [shareCount, setShareCount] = useState(0)
  const [viewCount, setViewCount] = useState(0)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    const fetchBlogPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/blogs/${slug}`)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBlogPost(data)
        setLikeCount(data.likes || 0)
        setViewCount(data.views || 0)
        setShareCount(45)
      } catch (e) {
        console.error("Failed to fetch blog post:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPost()
  }, [slug])

  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        if (blogPost) {
          const filtered = data.filter((post) => post.id !== blogPost.id)
          setRelatedPosts(filtered.slice(0, 3))
        } else {
          setRelatedPosts(data.slice(0, 3))
        }
      } catch (e) {
        console.error("Failed to fetch all blog posts for related section:", e)
      }
    }

    if (blogPost || !loading) fetchAllBlogPosts()
  }, [blogPost, loading])

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector(".article-content")
      if (article) {
        const scrollTop = window.scrollY
        const docHeight = article.offsetHeight
        const winHeight = window.innerHeight
        const scrollPercent = scrollTop / (docHeight - winHeight)
        const scrollPercentRounded = Math.round(scrollPercent * 100)
        setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)))
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = blogPost?.title || "Blog Post"
    let shareUrl = ""
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url)
        alert("লিংক কপি হয়েছে!")
        return
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
      setShareCount((prev) => prev + 1)
    }
    setShowShareMenu(false)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading blog post...</div>
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">Error: {error}</div>
  }

  if (!blogPost) {
    return <div className="min-h-screen flex items-center justify-center">ব্লগ পোস্ট পাওয়া যায়নি</div>
  }

  const defaultContent = `
    <p>এই ব্লগ পোস্টটি আপনার স্বাস্থ্য ও জীবনযাত্রার উন্নতির জন্য গুরুত্বপূর্ণ তথ্য প্রদান করে।</p>
    <h2 id="section-1">বিষয়বস্তু</h2>
    <ul>
      <li>স্বাস্থ্যকর জীবনযাপনের টিপস</li>
      <li>পুষ্টি ও খাদ্যাভ্যাস</li>
      <li>নিয়মিত ব্যায়ামের গুরুত্ব</li>
    </ul>
    <h2 id="section-2">জরুরি পরামর্শ</h2>
    <p>যেকোনো স্বাস্থ্য সমস্যার জন্য নিকটস্থ চিকিৎসকের সাথে যোগাযোগ করুন।</p>
  `

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#017381] to-[#025a65]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Blog Header */}
      <div className="container mx-auto py-10 px-4">
        <Link href="/blog" className="text-[#017381] flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" />
          <span>ব্লগে ফিরে যান</span>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <div className="flex items-center gap-6 text-gray-600 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {blogPost.publishedAt}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blogPost.readTime}
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            {likeCount} লাইক
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4" />
            {shareCount} শেয়ার
          </div>
        </div>

        <div className="relative w-[700px] h-[700px] mb-10 rounded-xl ">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Article Content */}
        <RichTextRenderer
          content={blogPost.content || defaultContent} />
        {/* Tags */}
        {blogPost.tags?.length > 0 && (
          <div className="mb-12">
            <h3 className="font-semibold mb-2">ট্যাগসমূহ:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, i) => (
                <Link key={i} href={`/blog/tag/${tag}`} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-20 mt-20">
          <button onClick={handleLike} className="btn">
            <Heart className="w-5 h-5" /> {isLiked ? "পছন্দ হয়েছে" : "পছন্দ করুন"} ({likeCount})
          </button>
          <button className="btn">
            <MessageCircle className="w-5 h-5" />
            মন্তব্য করুন
          </button>
          <button className="btn">
            <Print className="w-5 h-5" />
            প্রিন্ট করুন
          </button>
          <button className="btn">
            <Download className="w-5 h-5" />
            ডাউনলোড
          </button>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">সম্পর্কিত আর্টিকেল</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block shadow-lg rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
