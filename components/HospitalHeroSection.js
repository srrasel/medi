"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Phone, MapPin, Calendar, Stethoscope, Ambulance, ArrowRight } from "lucide-react"

const HospitalHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "WELCOME TO",
      subtitle: "PRO-ACTIVE HOSPITAL",
      description: "Excellence in Healthcare - Your Health, Our Priority",
      image: "/images/Cover-Page-Copy.jpg",
      phone_numbers: null,
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
      phone_numbers: null,
    },
  ]

  const quickActions = [
    {
      title: "Find a Doctor",
      description: "Expert medical professionals at your service",
      icon: <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />,
      href: "/doctors",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Locate Us",
      description: "Find our hospital location and directions",
      icon: <MapPin className="w-6 h-6 md:w-7 md:h-7" />,
      href: "/contact",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "Book Appointment",
      description: "Schedule your consultation today",
      icon: <Calendar className="w-6 h-6 md:w-7 md:h-7" />,
      href: "/contact",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

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
      <div className="relative h-[65vh] sm:h-[75vh] lg:h-[85vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image - Clean without overlays */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg?height=800&width=1200"}
                alt="Pro-Active Hospital"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout */}
                <div className="block lg:hidden text-center">
                  <div className="max-w-sm sm:max-w-md mx-auto bg-gradient-to-br from-indigo-600/95 to-purple-700/95 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="overflow-hidden">
                      <h1
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight transform transition-all duration-1000 delay-300 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.title}
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <h2
                        className={`text-lg sm:text-xl font-semibold text-yellow-300 mb-3 transform transition-all duration-1000 delay-400 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.subtitle}
                      </h2>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className={`text-sm sm:text-base text-indigo-100 mb-6 leading-relaxed transform transition-all duration-1000 delay-500 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.description}
                      </p>
                    </div>
                    <div className="overflow-hidden flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        className={`group bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        } transition-all duration-1000 delay-700`}
                      >
                        <Stethoscope className="w-4 h-4" />
                        <span>Find Consultant</span>
                      </button>
                      {slide.phone_numbers && (
                        <a
                          href={`tel:${slide.phone_numbers[0]}`}
                          className={`group bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 ${
                            index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                          } transition-all duration-1000 delay-800`}
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block max-w-6xl">
                  <div className="bg-gradient-to-br from-slate-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl shadow-2xl">
                    <div className="overflow-hidden">
                      <h1
                        className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight transform transition-all duration-1000 delay-300 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.title}
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <h2
                        className={`text-2xl lg:text-3xl font-semibold text-emerald-400 mb-4 transform transition-all duration-1000 delay-400 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.subtitle}
                      </h2>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className={`text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-500 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {slide.description}
                      </p>
                    </div>
                    <div className="overflow-hidden flex gap-4">
                      <button
                        className={`group bg-white text-slate-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-3 ${
                          index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        } transition-all duration-1000 delay-700`}
                      >
                        <Stethoscope className="w-5 h-5" />
                        <span>Find Consultant</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      {slide.phone_numbers && (
                        <a
                          href={`tel:${slide.phone_numbers[0]}`}
                          className={`group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-3 ${
                            index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                          } transition-all duration-1000 delay-800`}
                        >
                          <Phone className="w-5 h-5" />
                          <span>Emergency Call</span>
                        </a>
                      )}
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
                index === currentSlide ? "bg-white scale-125 border-white shadow-lg" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions Section with Beautiful Background */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#017381] to-[#025a65]"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#017381]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#025a65]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#017381]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="block lg:hidden py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#017381] mb-2">Quick Access</h2>
              <p className="text-gray-600">Get the care you need, when you need it</p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer ${action.bgColor} hover:shadow-2xl p-6 rounded-3xl transition-all duration-500 border border-gray-100 hover:border-opacity-50 transform hover:-translate-y-2`}
                >
                  <div className="flex items-center space-x-5">
                    <div
                      className={`p-4 bg-gradient-to-r ${action.gradient} text-white rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors mb-2">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{action.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-700 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Emergency Hotline */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <Ambulance className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Emergency Hotline</h3>
                      <p className="text-orange-100">24/7 Medical Support</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <a
                      href="tel:01902556070"
                      className="block text-2xl font-bold hover:text-orange-100 transition-colors"
                    >
                      01902556070
                    </a>
                    <a
                      href="tel:09666997997"
                      className="block text-lg font-semibold text-orange-100 hover:text-white transition-colors"
                    >
                      09666997997
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#017381] mb-4">Quick Access to Care</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get the medical attention you need with our comprehensive healthcare services
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer ${action.bgColor} hover:shadow-2xl p-8 rounded-3xl transition-all duration-500 border border-gray-100 hover:border-opacity-50 transform hover:-translate-y-4`}
                >
                  <div className="text-center">
                    <div
                      className={`p-6 bg-gradient-to-r ${action.gradient} text-white rounded-3xl inline-block mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}
                    >
                      {action.icon}
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{action.description}</p>
                    <div className="flex items-center justify-center text-gray-700 font-semibold group-hover:opacity-100 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Desktop Emergency Hotline */}
              <div className="group cursor-pointer bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="p-6 bg-white/20 rounded-3xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Ambulance className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Emergency Hotline</h3>
                  <a
                    href="tel:01902556070"
                    className="block text-3xl font-bold mb-2 hover:text-orange-100 transition-colors"
                  >
                    01902556070
                  </a>
                  <a
                    href="tel:09666997997"
                    className="block text-xl font-semibold mb-4 text-orange-100 hover:text-white transition-colors"
                  >
                    09666997997
                  </a>
                  <p className="text-orange-100">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalHeroSection
