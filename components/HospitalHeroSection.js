"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Phone, Stethoscope } from "lucide-react"

const HospitalHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "WELCOME TO",
      subtitle: "PRO-ACTIVE HOSPITAL",
      description: "Excellence in Healthcare - Your Health, Our Priority",
      image: "/images/Cover-Page-Copy.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
    {
      title: "24/7 ICU SUPPORT",
      subtitle: "INTENSIVE CARE UNIT",
      description: "Advanced critical care with state-of-the-art monitoring",
      image: "/images/ICU-2-scaled-1-scaled.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
    {
      title: "24/7 CCU SUPPORT",
      subtitle: "CORONARY CARE UNIT",
      description: "Specialized cardiac care with expert medical team",
      image: "/images/CCU.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
    {
      title: "24/7 NICU SUPPORT",
      subtitle: "NEONATAL INTENSIVE CARE",
      description: "Specialized care for our youngest patients",
      image: "/images/nicu_2.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
    {
      title: "24/7 DIALYSIS SUPPORT",
      subtitle: "KIDNEY CARE CENTER",
      description: "Advanced dialysis services with modern equipment",
      image: "/images/Dialysis.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
    {
      title: "24/7 EMERGENCY SERVICE",
      subtitle: "ALWAYS HERE FOR YOU",
      description: "Immediate medical attention when you need it most",
      image: "/images/Emergency-1.jpg",
      phone_numbers: ["01902556070", "09666997997"],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-[85vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg?height=800&width=1200"}
                alt="Pro-Active Hospital"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  <div className="max-w-sm sm:max-w-md mx-auto text-center">
                    <div className="overflow-hidden">
                      <h1
                        className={`text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight transform transition-all duration-1000 delay-300 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                      >
                        {slide.title}
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <h2
                        className={`text-xl sm:text-2xl font-bold text-cyan-400 mb-4 transform transition-all duration-1000 delay-400 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                      >
                        {slide.subtitle}
                      </h2>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className={`text-base sm:text-lg text-gray-100 mb-8 leading-relaxed transform transition-all duration-1000 delay-500 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                      >
                        {slide.description}
                      </p>
                    </div>
                    <div className="overflow-hidden flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        className={`group bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        } transition-all duration-1000 delay-700`}
                      >
                        <Stethoscope className="w-4 h-4" />
                        <span>Find Consultant</span>
                      </button>
                      <a
                        href={`tel:${slide.phone_numbers[0]}`}
                        className={`group bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        } transition-all duration-1000 delay-800`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block max-w-4xl">
                  <div className="overflow-hidden">
                    <h1
                      className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight transform transition-all duration-1000 delay-300 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                      style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
                    >
                      {slide.title}
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h2
                      className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-6 transform transition-all duration-1000 delay-400 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                    >
                      {slide.subtitle}
                    </h2>
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className={`text-xl lg:text-2xl text-gray-100 mb-10 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                      style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                    >
                      {slide.description}
                    </p>
                  </div>
                  <div className="overflow-hidden flex gap-6">
                    <button
                      className={`group bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      } transition-all duration-1000 delay-700`}
                    >
                      <Stethoscope className="w-5 h-5" />
                      <span>Find Consultant</span>
                    </button>
                    <a
                      href={`tel:${slide.phone_numbers[0]}`}
                      className={`group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      } transition-all duration-1000 delay-800`}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Emergency Call</span>
                    </a>
                  </div>

                  {/* Contact Numbers */}
                  <div
                    className={`mt-8 transform transition-all duration-1000 delay-900 ${
                      index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="text-gray-200 text-lg mb-2" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                      24/7 Emergency Hotline:
                    </p>
                    <div className="flex gap-4 text-xl font-bold text-white">
                      <a
                        href={`tel:${slide.phone_numbers[0]}`}
                        className="hover:text-cyan-400 transition-colors"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                      >
                        {slide.phone_numbers[0]}
                      </a>
                      <span className="text-gray-300">|</span>
                      <a
                        href={`tel:${slide.phone_numbers[1]}`}
                        className="hover:text-cyan-400 transition-colors"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                      >
                        {slide.phone_numbers[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/50 backdrop-blur-sm ${
                index === currentSlide
                  ? "bg-cyan-500 scale-125 border-white shadow-lg"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HospitalHeroSection
