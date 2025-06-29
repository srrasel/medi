"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Heart, Activity, Baby, Users, Droplets, Dumbbell, Search, Scan, CreditCard } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {
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

    const elements = document.querySelectorAll(".service-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
          <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Our state-of-the-art facility is equipped with the latest medical technology, and our team of experienced
            professionals is committed to delivering personalized, compassionate care that exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isVisible = visibleCards.has(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`service-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer group border border-gray-100 hover:border-[#017381]/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image_url || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `/placeholder.svg?height=256&width=400&text=${service.title}`
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
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{service.description}</p>

                  
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
