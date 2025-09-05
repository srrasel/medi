"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
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
  ArrowLeft,
  CheckCircle,
  Star,
} from "lucide-react"

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug
  const [isVisible, setIsVisible] = useState(false)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Icon mapping for categories
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
    default: Heart,
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://api.pmchl.com/api/services")
        if (!response.ok) {
          throw new Error("Failed to fetch services")
        }
        const data = await response.json()

        const transformedServices = data.map((service) => {
          const descriptionText = service.ShortDescription || "No description available"
          const longDescription = service.Description || service.ShortDescription || "No description available"

          const serviceSlug = service.Name.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")

          return {
            title: service.Name,
            slug: serviceSlug,
            shortDescription: descriptionText,
            longDescription: longDescription,
            description: descriptionText,
            image_url: service.Image || "/placeholder.svg",
            category: service.category || "General",
            icon: iconMap[service.category] || iconMap.default,
          }
        })

        setServices(transformedServices)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#017381] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Error Loading Service</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link
            href="/services"
            className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const service = services.find((srv) => srv.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            {" "}
            The service you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/services"
            className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = service.icon
  const relatedServices = services.filter((srv) => srv.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Services
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <div
              className={`text-white transition-all duration-1000 text-center lg:text-left ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="bg-[#b8e6ea]/20 backdrop-blur-sm text-[#b8e6ea] px-4 py-2 rounded-full text-sm font-bold border border-[#b8e6ea]/30">
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{service.title}</h1>
              <p className="text-xl leading-relaxed font-light mb-8 text-white/90">{service.description}</p>

              {/* Service Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <CheckCircle className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-lg font-bold">24/7</span>
                  </div>
                  <p className="text-white/80">Available</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <Star className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-lg font-bold">Expert</span>
                  </div>
                  <p className="text-white/80">Care Team</p>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Comprehensive service details with long description */}
            <div className=" gap-12 mb-16">
              {/* Main Content */}
              <div className="lg">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">About {service.title}</h2>
                  <div className="prose prose-lg max-w-none">
                    <div
                      className="text-gray-600 leading-relaxed text-lg mb-6"
                      dangerouslySetInnerHTML={{ __html: service.longDescription }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="text-center">
              <img
                src={service.image_url || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
