"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Users,
  Heart,
  Eye,
  Brain,
  Activity,
  Syringe,
  HandHeart,
  Monitor,
  SmileIcon as Tooth,
  UserCheck,
  Apple,
  AlertTriangle,
  Pill,
  ScanLine,
  Ear,
  User,
  Droplets,
  Shield,
  Baby,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Helper function to map specialty to icon
const getSpecialtyIcon = (specialty) => {
  switch (specialty) {
    case "Child Specialist":
      return Users
    case "Psychiatry":
    case "Neuro Surgery Specialist":
    case "Neuro Medicine Specialist":
      return Brain
    case "General & Laparoscopic Surgery":
    case "Urology Specialist":
      return Stethoscope
    case "Blood Disease & Medicine Specialist":
      return Heart
    case "Opthalmology (Eye)":
      return Eye
    case "Anesthesia and Pain Medicine":
      return Syringe
    case "Cancer Care Centre":
      return HandHeart
    case "Cardiology Care Centre":
      return Heart
    case "Cardiothoracic & Vascular Surgery":
      return Activity
    case "Cardiothoracic Anaesthesia":
      return Monitor
    case "Counselling Centre":
      return Users
    case "Critical Care Units":
      return Shield
    case "Dental & Maxillofacial Surgery":
      return Tooth
    case "Dermatology & Venereology":
      return UserCheck
    case "Diabetology & Endocrinology":
      return Pill
    case "Diagnostic & Interventional Radiology":
      return ScanLine
    case "Dietetics & Nutrition":
      return Apple
    case "ENT & Head Neck Surgery":
      return Ear
    case "Department of Gynaecology":
      return User
    case "Department of Neonatology":
      return Baby
    case "Department of Intensive Care":
      return Activity
    case "Department of Hematology":
      return Droplets
    case "Accident & Emergency":
      return AlertTriangle
    default:
      return Stethoscope // Default icon
  }
}

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [cardsPerView, setCardsPerView] = useState(4)
  const [isHovered, setIsHovered] = useState(false)
  const autoPlayRef = useRef(null)

  // Auto-play configuration
  const AUTO_PLAY_INTERVAL = 3000 // 3 seconds
  const TRANSITION_DURATION = 700 // Should match CSS transition duration

  // Fetch doctors data from API - SIMPLIFIED since API route now handles all doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        console.log("Fetching doctors from API...")
        const response = await fetch("/api/doctors")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(`Successfully fetched ${data.length} doctors from API`)
        setDoctors(data)
      } catch (e) {
        console.error("Error fetching doctors:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  // Intersection Observer for animations
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

    if (!loading && doctors.length > 0) {
      const elements = document.querySelectorAll(".doctor-card")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [loading, doctors])

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640)
          setCardsPerView(1) // Mobile
        else if (window.innerWidth < 768)
          setCardsPerView(2) // Small tablet
        else if (window.innerWidth < 1024)
          setCardsPerView(3) // Tablet
        else setCardsPerView(4) // Desktop
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (!loading && doctors.length > 0 && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxSlides = Math.max(1, doctors.length - cardsPerView + 1)
          return (prevIndex + 1) % maxSlides
        })
      }, AUTO_PLAY_INTERVAL)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [loading, doctors.length, isHovered, cardsPerView])

  // Navigation functions for infinite loop
  const nextSlide = () => {
    const maxSlides = Math.max(1, doctors.length - cardsPerView + 1)
    setCurrentIndex((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    const maxSlides = Math.max(1, doctors.length - cardsPerView + 1)
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  // Calculate transform for infinite loop
  const getTransformPercent = () => {
    return -(currentIndex * (100 / cardsPerView))
  }

  // Handle mouse enter/leave for pausing auto-play
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  if (loading) {
    return (
      <div className="relative py-24 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden text-center text-white">
        Loading doctors...
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative py-24 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden text-center text-red-300">
        Error: {error}
      </div>
    )
  }

  const maxSlides = Math.max(1, doctors.length - cardsPerView + 1)

  return (
    <div className="relative py-24 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/4 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* Medical cross patterns */}
        <div className="absolute top-20 left-20 w-16 h-2 bg-white/10 rounded-full"></div>
        <div className="absolute top-28 left-28 w-2 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-1.5 bg-white/8 rounded-full"></div>
        <div className="absolute bottom-38 right-38 w-1.5 h-12 bg-white/8 rounded-full"></div>
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-16 w-32 h-32 bg-white/5 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-white/3 rounded-2xl rotate-12 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full border border-white/30 shadow-lg">
              Our Medical Team
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Meet The Experts
            <span className="block text-[#b8e6ea]">Who Care For You</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Our doctors understand that healthcare is personal, and they take the time to get to know each patient,
            listen to their concerns, and involve them in every step of their care journey.
          </p>
        </div>

       

        {/* Doctors Carousel with Side Navigation */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 border border-white/30 -ml-7"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 border border-white/30 -mr-7"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out pb-4"
              style={{
                transform: `translateX(${getTransformPercent()}%)`,
              }}
            >
              {doctors.map((doctor, index) => {
                const IconComponent = getSpecialtyIcon(doctor.specialty)
                const isVisible = visibleCards.has(index)

                return (
                  <div key={doctor.id || index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
                    <div
                      data-index={index}
                      className={`doctor-card bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 border border-white/20 hover:border-white/40 group h-full hover:bg-white ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Doctor Image */}
                      <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                        <Image
                          src={
                            doctor.image || "/placeholder.svg?height=400&width=400&query=professional doctor portrait"
                          }
                          alt={doctor.name || "Doctor Image"}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        {/* Specialty Icon */}
                        <div className="absolute top-4 left-4 p-3 bg-[#017381]/90 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div className="p-6">
                        {/* Specialty Badge */}
                        <div className="mb-4">
                          <span className="text-[#017381] text-xs font-bold bg-[#017381]/10 px-3 py-1.5 rounded-full border border-[#017381]/20">
                            {doctor.specialty}
                          </span>
                        </div>
                        {/* Name and Position */}
                        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#017381] transition-colors leading-tight">
                          {doctor.name}
                        </h3>
                      
                        {/* Action Button */}
                        <div className="flex">
                          <Link
                            href={doctor.link || "#"}
                            className="w-full bg-gray-100 hover:bg-[#017381]/10 text-[#017381] px-4 py-3 rounded-xl font-bold transition-all duration-300 text-center border border-gray-200 hover:border-[#017381]/20"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border border-white/30 ${
                index === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

       

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{doctors.length}+</div>
            <div className="text-slate-200">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-slate-200">Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1500+</div>
            <div className="text-slate-200">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8</div>
            <div className="text-slate-200">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorsSection
