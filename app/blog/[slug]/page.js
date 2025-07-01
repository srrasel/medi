"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
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
} from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "eid-celebration-health-guide",
    title: "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে - স্বাস্থ্যকর উদযাপনের গাইড",
    excerpt:
      "ঈদের এই পবিত্র সময়ে কীভাবে স্বাস্থ্যকর উপায়ে উদযাপন করবেন এবং পরিবারের সবার সুস্বাস্থ্য নিশ্চিত করবেন।",
    image: "/images/blog/Emergency-Service.jpg",
    category: {
      name: "সামাজিক স্বাস্থ্য",
      slug: "social-health",
      color: "#017381",
    },
    author: {
      name: "ডা. মোহাম্মদ রহিম",
      slug: "dr-mohammad-rahim",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "২৮ মে | থিম: United by Unique। প্রতিটি রক্তের ক্যান্সার রোগীর জন্য আমাদের একসাথে দাঁড়ানো প্রয়োজন।",
    image: "/images/blog/World-blood-cancer-Day.jpg",
    category: {
      name: "ক্যান্সার সচেতনতা",
      slug: "cancer-awareness",
      color: "#dc2626",
    },
    author: {
      name: "ডা. আব্দুল হান্নান",
      slug: "dr-abdul-hannan",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "A Sister Concern of Pro-Active Medical College and Hospital Ltd. আমাদের সাথে যোগ দিন এবং স্বাস্থ্যসেবায় অবদান রাখুন।",
    image: "/images/blog/Hiring.jpg",
    category: {
      name: "চাকরির সুযোগ",
      slug: "career-opportunities",
      color: "#059669",
    },
    author: {
      name: "এইচআর বিভাগ",
      slug: "hr-department",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "থ্যালাসেমিয়া প্রতিরোধ শুরু হোক সচেতনতা থেকে। প্রতি বছর বিশ্বব্যাপী ১,০০,০০০-এরও বেশি শিশু থ্যালাসেমিয়া নিয়ে জন্মগ্রহণ করে।",
    image: "/images/blog/World-Thalassemia.jpg",
    category: {
      name: "জেনেটিক রোগ",
      slug: "genetic-diseases",
      color: "#7c3aed",
    },
    author: {
      name: "ডা. তাজুল ইসলাম",
      slug: "dr-tazul-islam",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "বিশ্ব কর্মক্ষেত্রে নিরাপত্তা ও স্বাস্থ্য দিবসে সবার জন্য নিরাপদ কাজের পরিবেশ নিশ্চিত করি।",
    image: "/images/blog/World-Safety-Day-At-Work.jpg",
    category: {
      name: "কর্মক্ষেত্রে নিরাপত্তা",
      slug: "workplace-safety",
      color: "#ea580c",
    },
    author: {
      name: "ডা. অকুপেশনাল হেলথ",
      slug: "dr-occupational-health",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "বিশ্ব টিকা সপ্তাহ উপলক্ষে ২৪ থেকে ৩০ এপ্রিল, সকাল ১০টা থেকে বিশেষ টিকাদান কর্মসূচি।",
    image: "/images/blog/Bissho-Tikadan.jpg",
    category: {
      name: "টিকাদান কর্মসূচি",
      slug: "vaccination-program",
      color: "#0891b2",
    },
    author: {
      name: "ডা. ইমিউনোলজি বিভাগ",
      slug: "dr-immunology-dept",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "রমজান মাসে ডায়াবেটিস রোগীদের জন্য বিশেষ খাদ্যাভ্যাস ও ওষুধ সেবনের নিয়মাবলী।",
    image: "/images/doctor-placeholder.png",
    category: {
      name: "ডায়াবেটিস",
      slug: "diabetes",
      color: "#dc2626",
    },
    author: {
      name: "ডা. এন্ডোক্রাইনোলজি বিভাগ",
      slug: "dr-endocrinology-dept",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "শিশুর সুস্থ বৃদ্ধির জন্য সঠিক পুষ্টি ও খাদ্যাভ্যাস সম্পর্কে বিস্তারিত গাইড।",
    image: "/images/doctor-placeholder.png",
    category: {
      name: "শিশু স্বাস্থ্য",
      slug: "child-health",
      color: "#059669",
    },
    author: {
      name: "ডা. পেডিয়াট্রিক বিভাগ",
      slug: "dr-pediatric-dept",
      image: "/images/doctor-placeholder.png",
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
    excerpt:
      "হৃদরোগ প্রতিরোধে খাদ্যাভ্যাস, ব্যায়াম ও জীবনযাত্রার গুরুত্বপূর্ণ পরিবর্তনসমূহ।",
    image: "/images/doctor-placeholder.png",
    category: {
      name: "হৃদরোগ",
      slug: "heart-disease",
      color: "#dc2626",
    },
    author: {
      name: "ডা. কার্ডিওলজি বিভাগ",
      slug: "dr-cardiology-dept",
      image: "/images/doctor-placeholder.png",
    },
    publishedAt: "৫ মার্চ, ২০২৫",
    readTime: "৬ মিনিট পড়ুন",
    views: 1123,
    likes: 145,
    tags: ["হৃদরোগ", "প্রতিরোধ", "জীবনযাত্রা", "ব্যায়াম"],
    featured: false,
  },
];

export default function SingleBlogPage({ params }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Find the blog post by slug
  const blogPost = blogPosts.find((post) => post.slug === params.slug);

  // Sample content for posts (since content isn't provided in the array, we'll use a fallback)
  const defaultContent = `
    <p>এই ব্লগ পোস্টটি আপনার স্বাস্থ্য ও জীবনযাত্রার উন্নতির জন্য গুরুত্বপূর্ণ তথ্য প্রদান করে।</p>
    <h2>বিষয়বস্তু</h2>
    <p>এখানে বিস্তারিত তথ্য ও পরামর্শ প্রদান করা হয়েছে যা আপনার জীবনযাত্রার উন্নতিতে সহায়ক হবে।</p>
    <ul>
      <li>স্বাস্থ্যকর জীবনযাপনের টিপস</li>
      <li>পুষ্টি ও খাদ্যাভ্যাস</li>
      <li>নিয়মিত ব্যায়ামের গুরুত্ব</li>
    </ul>
    <h2>জরুরি পরামর্শ</h2>
    <p>যেকোনো স্বাস্থ্য সমস্যার জন্য নিকটস্থ চিকিৎসকের সাথে যোগাযোগ করুন।</p>
    <div class="emergency-contact">
      <h3>জরুরি যোগাযোগ:</h3>
      <p><strong>অ্যাম্বুলেন্স:</strong> ০১৯০২৫৫৬০৬০</p>
      <p><strong>হটলাইন:</strong> ০৯৬৬৬-৯৯৭৯৯৭</p>
      <p><strong>কাস্টমার কেয়ার:</strong> ০১৯০২৫৫৬০৭০</p>
    </div>
  `;

  // Initialize state with post data if available
  useEffect(() => {
    if (blogPost) {
      setLikeCount(blogPost.likes || 0);
      setViewCount(blogPost.views || 0);
      setShareCount(45); // Default share count, as no share data in blogPosts
    }
  }, [blogPost]);

  // Reading progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector(".article-content");
      if (article) {
        const scrollTop = window.scrollY;
        const docHeight = article.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost?.title || "Blog Post";
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("লিংক কপি হয়েছে!");
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
      setShareCount((prev) => prev + 1);
    }
    setShowShareMenu(false);
  };

  // If no blog post is found, show a fallback message
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900">
            ব্লগ পোস্ট পাওয়া যায়নি
          </h1>
          <p className="mt-4 text-gray-600">
            দুঃখিত, আপনি যে ব্লগ পোস্টটি খুঁজছেন তা পাওয়া যায়নি। অনুগ্রহ করে{" "}
            <Link
              href="/blog"
              className="text-[#017381] hover:underline cursor-interactive"
            >
              ব্লগ পেজে ফিরে যান
            </Link>{" "}
            এবং অন্য একটি পোস্ট নির্বাচন করুন।
          </p>
        </div>
      </div>
    );
  }

  // Generate related posts (excluding the current post)
  const relatedPosts = blogPosts
    .filter((post) => post.id !== blogPost.id && post.category.slug === blogPost.category.slug)
    .slice(0, 3);

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
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </button>

                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-full transition-all duration-300 cursor-magnetic cursor-pulse ${
                    isBookmarked
                      ? "bg-[#017381] text-white hover:bg-[#025a65]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Bookmark
                    className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
                  />
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
                          onClick={() => handleShare("facebook")}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-600 transition-colors cursor-interactive cursor-glow"
                        >
                          <Facebook className="w-5 h-5" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sky-50 text-sky-600 transition-colors cursor-interactive cursor-glow"
                        >
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-700 transition-colors cursor-interactive cursor-glow"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare("copy")}
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
            <div className="max-w-4xl">
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
                  src={blogPost.image || "/placeholder.svg"}
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
                    dangerouslySetInnerHTML={{
                      __html: blogPost.content || defaultContent,
                    }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      ট্যাগসমূহ:
                    </h3>
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
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                      />
                      <span>
                        {isLiked ? "পছন্দ হয়েছে" : "পছন্দ করুন"} ({likeCount})
                      </span>
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
                      <h3 className="text-xl font-bold text-[#017381] mb-2">
                        {blogPost.author.name}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {blogPost.author.title || "বিশেষজ্ঞ"}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {blogPost.author.bio ||
                          "এই লেখক স্বাস্থ্য ও চিকিৎসা বিষয়ে বিশেষজ্ঞ।"}
                      </p>
                      <button className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-magnetic cursor-pulse medical">
                        লেখকের প্রোফাইল দেখুন
                      </button>
                    </div>
                  </div>

                  {/* Table of Contents (Simplified) */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 medical-card-hover">
                    <h3 className="text-xl font-bold text-[#017381] mb-6">
                      এই আর্টিকেলে যা আছে
                    </h3>
                    <nav className="space-y-3">
                      <a
                        href="#section-1"
                        className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide"
                      >
                        বিষয়বস্তু
                      </a>
                      <a
                        href="#section-2"
                        className="block text-gray-600 hover:text-[#017381] transition-colors cursor-interactive cursor-slide"
                      >
                        জরুরি পরামর্শ
                      </a>
                    </nav>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 shadow-2xl cursor-interactive emergency">
                    <h3 className="text-xl font-bold mb-4">জরুরি যোগাযোগ</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:01902556060"
                        className="flex items-center gap-3 text-red-100 hover:text-white transition-colors emergency cursor-glow"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90">অ্যাম্বুলেন্স</div>
                          <div className="font-bold">01902556060</div>
                        </div>
                      </a>
                      <a
                        href="tel:09666997997"
                        className="flex items-center gap-3 text-red-100 hover:text-white transition-colors emergency cursor-glow"
                      >
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#017381] mb-6">
              সম্পর্কিত আর্টিকেল
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              আরও স্বাস্থ্য বিষয়ক তথ্য ও পরামর্শ পড়ুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
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
                      {post.category.name}
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
  );
}