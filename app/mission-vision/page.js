"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Shield, Users, Award, Target, Lightbulb, HandHeart } from "lucide-react"

export default function MissionVisionPage() {
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

  const missionPoints = [
    "Gradually establish a first-class modern hospital with 250 beds.",
    "Ensure high-quality healthcare services and advanced medical equipment.",
    "Develop medical colleges, nursing schools, and other healthcare institutions.",
    "Train and develop skilled doctors, nurses, and healthcare professionals.",
    "Enhance the hospital's organizational structure for better management.",
  ]

  const values = [
    { title: "INTEGRITY", subtitle: "Do What's Right", icon: Shield, color: "bg-[#017381]" },
    { title: "INCLUSION", subtitle: "Welcome Everyone", icon: Users, color: "bg-[#025a65]" },
    { title: "TEAMWORK", subtitle: "Thrive Together", icon: HandHeart, color: "bg-[#017381]" },
    { title: "CARE", subtitle: "Best Possible Care", icon: Heart, color: "bg-[#025a65]" },
    { title: "RESPECT", subtitle: "Be Open & Honest", icon: Award, color: "bg-[#017381]" },
    { title: "KINDNESS", subtitle: "Lead With Compassion", icon: Heart, color: "bg-[#025a65]" },
    { title: "EXCELLENCE", subtitle: "Deliver Results", icon: Target, color: "bg-[#017381]" },
    { title: "ACCOUNTABILITY", subtitle: "Own It", icon: CheckCircle, color: "bg-[#025a65]" },
    { title: "CLIENT SATISFACTION", subtitle: "Smile", icon: Lightbulb, color: "bg-[#017381]" },
    { title: "SAFETY", subtitle: "A Safe you is a Safe Me", icon: Shield, color: "bg-[#025a65]" },
  ]

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Vision */}
     


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
              Mission & Vision
            </h1>
             <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#b8e6ea]">VISION</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                To provide high-quality healthcare by establishing modern hospitals, medical colleges, and institutions,
                ensuring skilled professionals and excellence in medical services.
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">MISSION</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 flex items-start gap-4 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#017381] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">VALUES</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
                Our core values guide every decision we make and every service we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 hover:scale-105 hover:shadow-2xl group cursor-pointer border-0 shadow-lg"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div
                          className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-[#017381] mb-2">{value.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{value.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
