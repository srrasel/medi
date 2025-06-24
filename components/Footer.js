"use client"
import { MapPin, Phone, Video, FileText, Play, Clock, Users, Award, Shield, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Professional top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-emerald-500 via-purple-500 to-blue-600"></div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Trust Indicators Bar */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" variants={itemVariants}>
          {[
            { icon: Heart, label: "24/7 Emergency", value: "Always Available", color: "from-red-500 to-pink-500" },
            { icon: Users, label: "Expert Doctors", value: "50+ Specialists", color: "from-blue-500 to-cyan-500" },
            { icon: Shield, label: "Advanced Care", value: "Modern Equipment", color: "from-emerald-500 to-teal-500" },
            {
              icon: Award,
              label: "Years of Service",
              value: "Trusted Since 2010",
              color: "from-purple-500 to-indigo-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-2xl`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-center">
                <div className="text-sm font-bold text-white">{item.value}</div>
                <div className="text-xs text-white/80">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Hospital Information - Enhanced */}
          <motion.div variants={itemVariants} className="xl:col-span-1">
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hospital Logo & Name */}
              <motion.div
                className="flex items-center space-x-4 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Image
                      src="/images/2.jpg"
                      alt="Pro-Active Medical College Hospital Logo"
                      width={80}
                      height={80}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-300 via-emerald-300 to-blue-300 bg-clip-text text-transparent leading-tight">
                    PRO-ACTIVE
                  </div>
                  <div className="text-sm text-gray-300 font-semibold tracking-wider uppercase">
                    Medical College Hospital Ltd
                  </div>
                </div>
              </motion.div>

              {/* Address Section */}
              <motion.div
                className="mb-8 p-4 bg-white/5 rounded-2xl"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Hospital Address</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      E-197/7, Mizmizi, Shahebpara, (Signboard)
                      <br />
                      Siddirganj, Narayangonj, Bangladesh
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information - Organized */}
              <div className="space-y-4">
                <h5 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  Contact Information
                </h5>

                {/* Emergency Hotline */}
                <motion.div
                  className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <div className="text-red-300 text-xs font-semibold uppercase tracking-wide">
                        Emergency Hotline
                      </div>
                      <a href="tel:09666997997" className="text-white font-bold hover:text-red-300 transition-colors">
                        09666-997997
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* General Mobile */}
                <motion.div
                  className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-purple-300 text-xs font-semibold uppercase tracking-wide">
                        General Mobile
                      </div>
                      <a
                        href="tel:01902556070"
                        className="text-white font-bold hover:text-purple-300 transition-colors"
                      >
                        01902556070
                      </a>
                    </div>
                  </div>
                </motion.div>

               

               
              </div>
            </motion.div>
          </motion.div>

          {/* Videos Section - Enhanced */}
          <motion.div variants={itemVariants} className="xl:col-span-1">
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                Featured Videos
              </h4>

              <div className="space-y-6">
                {[
                  {
                    title: "Hospital Tour & Advanced Facilities",
                    thumbnail: "/placeholder.svg?height=160&width=280",
                    duration: "3:45",
                    views: "2.1K views",
                  },
                  {
                    title: "24/7 Emergency Services Overview",
                    thumbnail: "/placeholder.svg?height=160&width=280",
                    duration: "2:30",
                    views: "1.8K views",
                  },
                  
                ].map((video, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-2">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {video.title}
                      </h5>
                      <p className="text-gray-400 text-xs">{video.views}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Latest Posts Section - Enhanced */}
          <motion.div variants={itemVariants} className="xl:col-span-1">
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl h-full"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Latest Updates
              </h4>

              <div className="space-y-4">
                {[
                  { text: "ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে আপনার যাত্রা হোক নিরাপদ, উদযাপন হোক স্বস্তিদায়ক।", type: "celebration" },
                  { text: "World Blood Cancer Day 2025", type: "awareness" },
                  { text: "We're Hiring at Pro-Active Hospital!", type: "hiring" },
                  { text: "A Sister Concern of Pro-Active Medical College and Hospital Ltd.", type: "info" },
                ].map((post, index) => {
                  const getPostColor = (type) => {
                    switch (type) {
                      case "celebration":
                        return "from-yellow-500/10 to-orange-500/10"
                      case "awareness":
                        return "from-red-500/10 to-pink-500/10"
                      case "hiring":
                        return "from-green-500/10 to-emerald-500/10"
                      case "technology":
                        return "from-purple-500/10 to-indigo-500/10"
                      default:
                        return "from-blue-500/10 to-cyan-500/10"
                    }
                  }

                  return (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r ${getPostColor(post.type)} rounded-xl p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-current rounded-full mt-2 flex-shrink-0 opacity-60"></div>
                        <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                          {post.text}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Footer Bottom */}
        <motion.div
          className="pt-12 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-gray-300 text-sm font-medium">Committed to Excellence in Healthcare</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              ©2025 Pro-Active Medical College Hospital Ltd. All Rights Reserved
            </p>
            <div className="flex justify-center items-center gap-6 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="/sitemap" className="hover:text-gray-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
