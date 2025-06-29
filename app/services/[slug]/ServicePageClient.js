"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Heart, Activity, Baby, Users, Droplets, Dumbbell, Search, Scan, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const iconMap = {
  Heart,
  Activity,
  Baby,
  Users,
  Droplets,
  Dumbbell,
  Search,
  Scan,
  CreditCard,
}

export default function ServicePageClient({ params, services }) {
  const [service, setService] = useState(null)

  useEffect(() => {
    const foundService = services.find((s) => s.slug === params.slug)
    setService(foundService)
  }, [params.slug, services])

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-xl mb-8">The service you&#39;re looking for doesn&#39;t exist.</p>
          <Link
            href="/"
            className="bg-white text-[#017381] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[service.icon]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-[#b8e6ea] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full mr-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {service.category}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1>

              <p className="text-xl text-[#b8e6ea] leading-relaxed mb-8">{service.description}</p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#017381] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Department
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#017381] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our {service.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-[#017381] rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced medical team provides the highest quality care using state-of-the-art equipment and
                  proven medical practices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-[#025a65] rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient-Centered</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize patient comfort and family support, ensuring a caring environment throughout the
                  treatment process.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#017381] to-[#025a65] p-8 rounded-2xl text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Need Our {service.title} Services?</h3>
              <p className="text-xl mb-6 text-[#b8e6ea]">
                Contact our medical team for consultations, appointments, or emergency services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-[#017381] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call Now: +880-1234-567890
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#017381] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
