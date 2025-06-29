"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Ambulance, Headphones, Clock, Navigation, Building2 } from "lucide-react"

export default function ContactPage() {
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

  const contactInfo = [
    {
      title: "Customer Care",
      value: "01902556070",
      icon: Headphones,
      description: "General inquiries and patient support",
      color: "bg-[#017381]",
      href: "tel:01902556070",
    },
    {
      title: "Ambulance Service",
      value: "01902556060",
      icon: Ambulance,
      description: "24/7 Emergency ambulance service",
      color: "bg-red-600",
      href: "tel:01902556060",
    },
    {
      title: "Hotline",
      value: "09666-997997",
      icon: Phone,
      description: "24/7 Medical emergency hotline",
      color: "bg-[#025a65]",
      href: "tel:09666997997",
    },
  ]

  const quickServices = [
    { name: "Emergency Services", available: "24/7", icon: Ambulance },
    { name: "Outpatient Department", available: "8:00 AM - 10:00 PM", icon: Clock },
    { name: "Diagnostic Services", available: "24/7", icon: Building2 },
    { name: "Pharmacy", available: "24/7", icon: Phone },
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
              Contact Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#b8e6ea]">Pro-Active Hospital</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
              We&apos;re here to help you 24/7. Reach out to us for any medical assistance or inquiries.
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

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                Contact us through any of the following channels. Our dedicated team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <Card
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 hover:scale-105 hover:shadow-2xl group cursor-pointer border-0 shadow-lg"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#017381] mb-3">{contact.title}</h3>
                      <a
                        href={contact.href}
                        className="text-3xl font-bold text-slate-800 hover:text-[#017381] transition-colors duration-300 block mb-3"
                      >
                        {contact.value}
                      </a>
                      <p className="text-slate-600 leading-relaxed">{contact.description}</p>
                      <a
                        href={contact.href}
                        className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Call Now
                        <Phone className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Location Info */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Our Location</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full mb-8"></div>

                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#017381] mb-2">Hospital Address</h3>
                          <p className="text-lg text-slate-700 leading-relaxed">
                            Signborad Mor, Siddhirgonj, Narayangonj
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center flex-shrink-0">
                          <Navigation className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#017381] mb-2">Easy to Find</h3>
                          <p className="text-slate-700 leading-relaxed">
                            Located at the heart of Narayangonj, easily accessible by all modes of transportation. Look
                            for our prominent signboard at Signborad Mor.
                          </p>
                        </div>
                      </div>

                      <button className="w-full mt-6 bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                        <Navigation className="w-5 h-5" />
                        Get Directions
                      </button>
                    </CardContent>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-300">
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="h-96 bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-[#017381] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#017381] mb-2">Interactive Map</h3>
                        <p className="text-slate-600">
                          Signborad Mor, Siddhirgonj
                          <br />
                          Narayangonj, Bangladesh
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     

    </div>
  )
}
