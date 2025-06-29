"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Stethoscope,
  Award,
  Users,
  Heart,
  Phone,
  Clock,
} from "lucide-react"
import Image from "next/image"

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const elements = document.querySelectorAll(".doctor-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const doctors = [
    {
      id: 1,
      name: "Prof. Dr. Abdul Hannan",
      image: "/images/Pro_Dr_Abdul_Hannad.jpg",
      specialty: "Pediatric Cardiology",
      position: "Professor & Pediatric Cardiologist",
      experience: "15+ years",
      rating: "4.8",
      reviews: "127",
      location: "PMCH Hospital",
      availability: "Available Today",
      qualifications:
        "MBBS, FCPS(Ped),Trained in Epidem: & Biostat: (Pakistan),Fellow, Pediatric Cardiology (USA),Trained in Eco-cardiography (Madraz).",
      profile_url: "https://pmchl.com/doctor-item/prof-dr-abdul-hannan/",
      icon: Heart,
    },
    {
      id: 2,
      name: "Prof. Dr. Md. Tazul Islam",
      image: "/images/dr.-tazul.jpg",
      specialty: "Internal Medicine",
      position: "Professor & Consultant",
      experience: "20+ years",
      rating: "4.9",
      reviews: "203",
      location: "PMCH Hospital",
      availability: "Available Tomorrow",
      qualifications:
        "MBBS, FCPS, Post Fellowship Training (Bangkok, Thailand) Post Fellowship Training JICA, Japan, World Bank Fellowship, Srilanka",
      profile_url: "https://pmchl.com/doctor-item/professor-dr-md-tazul-islam/",
      icon: Stethoscope,
    },
    {
      id: 3,
      name: "Prof. Dr. A.S.M. Qamrul Hasan",
      image: "/images/Prof_Dr_A_S_M_Kamrul_Hasan.jpg",
      specialty: "Neurosurgery",
      position: "Brain & Spine Specialist & Surgeon",
      experience: "18+ years",
      rating: "4.7",
      reviews: "156",
      location: "PMCH Hospital",
      availability: "Available Today",
      qualifications: "MBBS, MS (Neuro), WHO Fellow (Indoesia),Brain & Spine Specialist & Surgeon.",
      profile_url: "https://pmchl.com/doctor-item/prof-dr-a-s-m-qamrul-hasan-2/",
      icon: Award,
    },
    {
      id: 4,
      name: "Prof. Dr. Md. Abdus Salam",
      image: "/images/Prof_Dr_M_A_Salaam.jpg",
      specialty: "General Surgery",
      position: "General & Laparoscopic Surgeon",
      experience: "16+ years",
      rating: "4.6",
      reviews: "142",
      location: "PMCH Hospital",
      availability: "Available Today",
      qualifications: "MBBS, MS (General Surgery),General & Laparoscopic Surgeon.",
      profile_url: "https://pmchl.com/doctor-item/prof-dr-md-abdus-salam/",
      icon: Users,
    },
    {
      id: 5,
      name: "Prof. Dr. A, B, M, Younus",
      image: "/images/Prof.-Dr.-A-B-M-Younus.jpg",
      specialty: "Hematology",
      position: "Blood Cancer and Anemia Specialist",
      experience: "22+ years",
      rating: "4.9",
      reviews: "189",
      location: "PMCH Hospital",
      availability: "Available Tomorrow",
      qualifications:
        "MBBS (India), MPhil (Hons), FCPS (Hematology), Blood Cancer and Anemia Specialist Professor and former Chairman, Department of Hematology Bangabandhu Sheikh Mujib Medical University",
      profile_url: "https://pmchl.com/doctor-item/prof-dr-a-b-m-younus/",
      icon: Heart,
    },
    {
      id: 6,
      name: "Prof. Dr. Colonel Mohammad Nizamul Hossain Sowdagar",
      image: "/images/Professor_Dr._Colonel_Mohammad_Nizamul_Hossain_Sowdagar-transformed.jpeg",
      specialty: "Cardiology",
      position: "Professor & Cardiologist",
      experience: "19+ years",
      rating: "4.8",
      reviews: "174",
      location: "PMCH Hospital",
      availability: "Available Today",
      qualifications: "MBBS (DU), D-Card(BSMMU), G-Med(AFMI) FCPS(Cardiology), FNIC (NHF&RI), FSCAI (USA)",
      profile_url: "https://pmchl.com/doctor-item/professor-dr-colonel-mohammad-nizamul-hossain-sowdagar/",
      icon: Stethoscope,
    },
    {
      id: 7,
      name: "Prof. Dr. G.M. Faruque",
      image: "/images/GM-Faruk.jpg",
      specialty: "Ophthalmology",
      position: "Professor & Eye Specialist",
      experience: "17+ years",
      rating: "4.7",
      reviews: "198",
      location: "PMCH Hospital",
      availability: "Available Today",
      qualifications: "MBBS, BCS, (Health), MS (Ophth), D.O. (DU)",
      profile_url: "https://pmchl.com/doctor-item/professor-dr-g-m-faruque/",
      icon: Award,
    },
    {
      id: 8,
      name: "Prof. Dr. Gobinda Chandra Saha",
      image: "/images/Prof.-Dr.-Govinda-Chandra-Das-1.jpg",
      specialty: "General Surgery",
      position: "Professor & Surgeon",
      experience: "21+ years",
      rating: "4.8",
      reviews: "167",
      location: "PMCH Hospital",
      availability: "Available Tomorrow",
      qualifications: "MBBS, FCPS (Surgery), MS (General Surgery) FRCS (Glasgow, UK)",
      profile_url: "https://pmchl.com/doctor-item/professor-dr-gobinda-chandra-saha/",
      icon: Users,
    },
  ]

  // 4 columns for desktop, responsive for other devices
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 768) return 2 // Small tablet
      if (window.innerWidth < 1024) return 3 // Tablet
      return 4 // Desktop - 4 columns
    }
    return 4
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const totalSlides = Math.max(0, doctors.length - cardsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const transformPercent = -(currentIndex * (100 / cardsPerView))

  return (
    <div className="relative py-24 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/4 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Medical cross patterns in white */}
        <div className="absolute top-20 left-20 w-16 h-2 bg-white/10 rounded-full"></div>
        <div className="absolute top-28 left-28 w-2 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-1.5 bg-white/8 rounded-full"></div>
        <div className="absolute bottom-38 right-38 w-1.5 h-12 bg-white/8 rounded-full"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-16 w-32 h-32 bg-white/5 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-white/3 rounded-2xl rotate-12 animate-pulse delay-700"></div>

        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
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

        

        {/* Navigation Controls - Desktop */}
        <div className="hidden lg:flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30"
              disabled={currentIndex >= totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-105 font-bold border border-white/30">
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center items-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors border border-white/30 ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 disabled:opacity-50"
            disabled={currentIndex >= totalSlides - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Doctors Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out pb-4"
            style={{
              transform: `translateX(${transformPercent}%)`,
            }}
          >
            {doctors.map((doctor, index) => {
              const IconComponent = doctor.icon
              const isVisible = visibleCards.has(index)

              return (
                <div key={doctor.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
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
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                      {/* Specialty Icon */}
                      <div className="absolute top-4 left-4 p-3 bg-[#017381]/90 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      {/* Availability Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border shadow-lg ${
                            doctor.availability.includes("Today")
                              ? "bg-green-500/90 text-white border-green-400"
                              : "bg-yellow-500/90 text-white border-yellow-400"
                          }`}
                        >
                          {doctor.availability}
                        </span>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-2 border border-white/50 shadow-lg">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
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
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#017381] transition-colors leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium mb-4">{doctor.position}</p>

                      {/* Experience and Reviews */}
                      

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        
                        <a
                          href={doctor.profile_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gray-100 hover:bg-[#017381]/10 text-[#017381] px-4 py-3 rounded-xl font-bold transition-all duration-300 text-center border border-gray-200 hover:border-[#017381]/20"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile All Doctors Button */}
        <div className="flex lg:hidden justify-center mt-12">
          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-105 font-bold border border-white/30">
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Slide Indicators */}
        <div className="hidden lg:flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border border-white/30 ${
                index === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      
      </div>
    </div>
  )
}

export default DoctorsSection
