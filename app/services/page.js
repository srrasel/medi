"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Activity,
  Baby,
  Users,
  Droplets,
  Dumbbell,
  Search,
  Scan,
  CreditCard,
  Filter,
  ChevronDown,
  ArrowRight,
  Clock,
  CheckCircle,
  Star,
  Phone,
} from "lucide-react"

export default function ServicesPage() {
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

    const elements = document.querySelectorAll(".service-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, searchQuery])

  const services = [
    {
      title: "ICU",
      description:
        "Intensive Care Unit providing critical care for life-threatening conditions with advanced monitoring systems.",
      image_url: "/images/ICU-Final.jpeg",
      read_more_link: "/services/icu",
      icon: Heart,
      category: "Critical Care",
    },
    {
      title: "CCU",
      description:
        "Coronary Care Unit specialized in treating heart conditions with state-of-the-art cardiac monitoring.",
      image_url: "/images/CCU-Final.jpeg",
      read_more_link: "/services/ccu",
      icon: Activity,
      category: "Cardiac Care",
    },
    {
      title: "NICU",
      description: "Neonatal Intensive Care Unit providing specialized care for premature and critically ill newborns.",
      image_url: "/images/NICU-Final.jpeg",
      read_more_link: "/services/nicu",
      icon: Baby,
      category: "Neonatal Care",
    },
    {
      title: "PICU",
      description:
        "Pediatric Intensive Care Unit offering comprehensive critical care services for children and infants.",
      image_url: "/images/464683711_1058648339603436_1958753658212568146_n-1.jpg",
      read_more_link: "/services/picu",
      icon: Users,
      category: "Pediatric Care",
    },
    {
      title: "Dialysis",
      description: "Advanced dialysis services for patients with kidney failure, providing life-sustaining treatment.",
      image_url: "/images/Dialysis-1-scaled.jpg",
      read_more_link: "/services/dialysis",
      icon: Droplets,
      category: "Nephrology",
    },
    {
      title: "Physiotherapy",
      description:
        "Comprehensive physiotherapy services for rehabilitation, pain management, and mobility improvement.",
      image_url: "/images/Physioteraphy-scaled.jpg",
      read_more_link: "/services/physiotherapy",
      icon: Dumbbell,
      category: "Rehabilitation",
    },
    {
      title: "Endoscopy",
      description: "Advanced endoscopic procedures for diagnosis and treatment of gastrointestinal conditions.",
      image_url: "/images/Endoscopy-scaled.jpg",
      read_more_link: "/services/endoscopy",
      icon: Search,
      category: "Diagnostics",
    },
    {
      title: "CT-Scan",
      description: "High-resolution CT scanning services for accurate diagnosis and detailed imaging.",
      image_url: "/images/CT-Scan-scaled.jpg",
      read_more_link: "/services/ct-scan",
      icon: Scan,
      category: "Imaging",
    },
    {
      title: "Cash & Billing",
      description: "Streamlined billing and payment services with transparent pricing and multiple payment options.",
      image_url: "/images/Cash-Billing-scaled.jpg",
      read_more_link: "/services/cash-billing",
      icon: CreditCard,
      category: "Administrative",
    },
  ]

  const categories = [
    { name: "All Services", slug: "all", count: services.length },
    { name: "Critical Care", slug: "Critical Care", count: 1 },
    { name: "Cardiac Care", slug: "Cardiac Care", count: 1 },
    { name: "Neonatal Care", slug: "Neonatal Care", count: 1 },
    { name: "Pediatric Care", slug: "Pediatric Care", count: 1 },
    { name: "Nephrology", slug: "Nephrology", count: 1 },
    { name: "Rehabilitation", slug: "Rehabilitation", count: 1 },
    { name: "Diagnostics", slug: "Diagnostics", count: 1 },
    { name: "Imaging", slug: "Imaging", count: 1 },
    { name: "Administrative", slug: "Administrative", count: 1 },
  ]

  // Filter services based on category and search
  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Medical Services
            <span className="block text-[#b8e6ea]">& Specialties</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Comprehensive healthcare services with advanced medical technology and expert care for all your medical
            needs
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, treatments, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
             

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
      </section>

  

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
      

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={service.title}
                  data-index={index}
                  className={`service-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image_url || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {service.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Service Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    {/* Service Features */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Advanced Technology</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span>Expert Medical Team</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-3">
                      <Link
                        href={service.read_more_link}
                        className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No services found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              
            </div>
          )}
        </div>
      </section>

    
    </div>
  )
}
