"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Heart, Activity, Baby, Users, Droplets, Dumbbell, Search, Scan, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://admin.pmchl.com/api/services?populate=*")
        if (!response.ok) {
          throw new Error("Failed to fetch services")
        }
        const data = await response.json()
        setServices(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

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
  }, [services])

  const extractDescription = (description) => {
    if (!description || description.length === 0) return ""
    return description.map((block) => block.children?.map((child) => child.text).join("") || "").join(" ")
  }

  const getImageUrl = (image) => {
    if (!image) return "/placeholder.svg"
    return image.formats?.medium?.url || image.formats?.small?.url || image.url
  }

  const getIconByCategory = (category) => {
    const iconMap = {
      "Critical Care": Heart,
      "Cardiac Care": Activity,
      "Neonatal Care": Baby,
      "Pediatric Care": Users,
      Nephrology: Droplets,
      Rehabilitation: Dumbbell,
      Diagnostics: Search,
      Imaging: Scan,
      Administrative: CreditCard,
    }
    return iconMap[category] || Heart
  }

  if (loading) {
    return (
      <div className="relative bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-xl">Loading services...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-xl">Error loading services: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-white text-[#017381] text-sm font-semibold tracking-wider uppercase px-6 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block text-[#b8e6ea]">Healthcare Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = getIconByCategory(service.category)
            const isVisible = visibleCards.has(index)
            const description = extractDescription(service.Description)
            const imageUrl = getImageUrl(service.Image)

            return (
              <div
                key={service.id}
                data-index={index}
                className={`service-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer group border border-gray-100 hover:border-[#017381]/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={service.Name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `/placeholder.svg?height=256&width=400&text=${service.Name}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#017381] text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300">
                      {service.Name}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{description}</p>
                  <Link
                    href={`/services/${service.Name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:gap-4 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
