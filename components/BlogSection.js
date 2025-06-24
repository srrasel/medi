"use client"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      alt: "Modern medical facility",
      category: "Healthcare",
      date: "15",
      month: "Dec",
      title: "Advanced Medical Technology in Modern Healthcare",
      description:
        "Discover how cutting-edge technology is revolutionizing patient care and medical treatments in today's healthcare landscape.",
      readTime: "5 mins read",
      author: "Dr. Sarah Johnson",
    },
    {
      image: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?w=500&h=300&fit=crop",
      alt: "Patient consultation",
      category: "Patient Care",
      date: "12",
      month: "Dec",
      title: "The Importance of Preventive Healthcare",
      description:
        "Learn why regular check-ups and preventive measures are crucial for maintaining optimal health and preventing serious conditions.",
      readTime: "4 mins read",
      author: "Dr. Michael Chen",
    },
    {
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop",
      alt: "Medical research",
      category: "Research",
      date: "08",
      month: "Dec",
      title: "Breakthrough in Cardiac Treatment Methods",
      description:
        "Exploring the latest innovations in cardiovascular medicine and how they're improving patient outcomes worldwide.",
      readTime: "6 mins read",
      author: "Prof. Dr. Emily Rodriguez",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                Medical Insights
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Latest from Our Medical Blog
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Stay informed with the latest medical insights, healthcare innovations, and expert advice from our team of
              specialists.
            </p>
          </div>
          <div className="flex items-end justify-start lg:justify-end">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-3">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-sm font-medium rounded-full transition-colors duration-300">
                    {post.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 rounded-2xl h-16 w-16 flex flex-col items-center justify-center shadow-lg">
                    <span className="font-bold text-lg">{post.date}</span>
                    <span className="text-xs font-medium">{post.month}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>

                {/* Author and Read Time */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stay Updated with Medical Insights</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest healthcare news, medical breakthroughs, and expert advice
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
