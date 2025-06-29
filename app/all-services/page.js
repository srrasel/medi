"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Activity, Baby, Users, Droplets, Dumbbell, Search, Scan, CreditCard, ExternalLink } from "lucide-react"
import Image from "next/image"
export default function AllServicesPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "ICU",
      image_url: "/images/ICU-Final.jpeg",
      icon: Heart,
      description:
        "Intensive Care Unit providing critical care for life-threatening conditions with advanced monitoring and life support systems.",
    },
    {
      title: "CCU",
      image_url: "/images/CCU-Final.jpeg",
      icon: Activity,
      description:
        "Coronary Care Unit specialized in treating heart conditions with state-of-the-art cardiac monitoring equipment.",
    },
    {
      title: "NICU",
      image_url: "/images/NICU-Final.jpeg",
      icon: Baby,
      description: "Neonatal Intensive Care Unit providing specialized care for premature and critically ill newborns.",
    },
    {
      title: "PICU",
      image_url: "/images/464683711_1058648339603436_1958753658212568146_n-1.jpg",
      icon: Users,
      description:
        "Pediatric Intensive Care Unit offering comprehensive critical care services for children and infants.",
    },
    {
      title: "Dialysis",
      image_url: "/images/Dialysis-1-scaled.jpg",
      icon: Droplets,
      description:
        "Advanced dialysis services for patients with kidney failure, providing life-sustaining treatment with modern equipment.",
    },
    {
      title: "Physiotherapy",
      image_url: "/images/Physioteraphy-scaled.jpg",
      icon: Dumbbell,
      description:
        "Comprehensive physiotherapy services for rehabilitation, pain management, and mobility improvement.",
    },
    {
      title: "Endoscopy",
      image_url: "/images/Endoscopy-scaled.jpg",
      icon: Search,
      description:
        "Advanced endoscopic procedures for diagnosis and treatment of gastrointestinal and respiratory conditions.",
    },
    {
      title: "CT-Scan",
      image_url: "/images/CT-Scan-scaled.jpg",
      icon: Scan,
      description:
        "High-resolution CT scanning services for accurate diagnosis and detailed imaging of internal structures.",
    },
    {
      title: "Cash & Billing",
      image_url: "/images/Cash-Billing-scaled.jpg",
      icon: CreditCard,
      description: "Streamlined billing and payment services with transparent pricing and multiple payment options.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              All Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
              Comprehensive healthcare services with state-of-the-art medical facilities and expert care
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-white to-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Our Medical Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                Pro-Active Hospital offers a comprehensive range of medical services with cutting-edge technology and
                expert healthcare professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 hover:scale-105 hover:shadow-2xl group cursor-pointer border-0 shadow-lg overflow-hidden"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image_url || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = `/placeholder.svg?height=256&width=400&text=${service.title}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">{service.description}</p>

                   
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#017381] mb-2">24/7</h3>
                <p className="text-slate-600">Emergency Services</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#017381] mb-2">50+</h3>
                <p className="text-slate-600">Expert Doctors</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#017381] mb-2">9+</h3>
                <p className="text-slate-600">Specialized Services</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#017381] mb-2">100%</h3>
                <p className="text-slate-600">Modern Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

   

     
    </div>
  )
}
