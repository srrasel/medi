"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Stethoscope, Award, Users, Heart, Eye, Brain, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [cardsPerView, setCardsPerView] = useState(4)

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

  const doctors = [
    {
      id: 1,
      name: "Prof. Dr. Abdul Hannan",
      specialty: "Child Specialist",
      qualifications:
        "MBBS, FCPS(Ped), Trained in Epidem: & Biostat: (Pakistan), Fellow, Pediatric Cardiology (USA), Trained in Eco-cardiography (Madraz)",
      image: "/images/package/Pro_Dr_Abdul_Hannad.jpg",
      link: "/doctor/1",
      category_id: 15,
      icon: Users,
      experience: "15+ Years",
      rating: "4.9",
      availability: "Available Today",
      position: "Professor & Head of Department",
      reviews: 127,
    },
    {
      id: 2,
      name: "Prof. Dr. Md. Tazul Islam",
      specialty: "Psychiatry",
      qualifications:
        "MBBS, FCPS, Post Fellowship Training (Bangkok, Thailand), Post Fellowship Training JICA, Japan, World Bank Fellowship, Srilanka",
      image: "/images/package/dr.-tazul.jpg",
      link: "/doctor/2",
      category_id: 11,
      icon: Brain,
      experience: "20+ Years",
      rating: "4.8",
      availability: "Available Tomorrow",
      position: "Professor of Psychiatry",
      reviews: 89,
    },
    {
      id: 3,
      name: "Prof. Dr. A.S.M. Qamrul Hasan",
      specialty: "Neuro Surgery Specialist",
      qualifications: "MBBS, MS (Neuro), WHO Fellow (Indoesia), Brain & Spine Specialist & Surgeon",
      image: "/images/package/Prof_Dr_A_S_M_Kamrul_Hasan.jpg",
      link: "/doctor/3",
      category_id: 18,
      icon: Brain,
      experience: "18+ Years",
      rating: "4.9",
      availability: "Available Today",
      position: "Professor of Neurosurgery",
      reviews: 156,
    },
    {
      id: 4,
      name: "Prof. Dr. Md. Abdus Salam",
      specialty: "General & Laparoscopic Surgery",
      qualifications: "MBBS, MS (General Surgery), General & Laparoscopic Surgeon",
      image: "/images/package/Prof_Dr_M_A_Salaam.jpg",
      link: "/doctor/4",
      category_id: 38,
      icon: Stethoscope,
      experience: "22+ Years",
      rating: "4.8",
      availability: "Available Today",
      position: "Professor of Surgery",
      reviews: 203,
    },
    {
      id: 5,
      name: "Prof. Dr. A, B, M, Younus",
      specialty: "Blood Disease & Medicine Specialist",
      qualifications:
        "MBBS (India), MPhil (Hons), FCPS (Hematology), Blood Cancer and Anemia Specialist Professor and former Chairman, Department of Hematology Bangabandhu Sheikh Mujib Medical University",
      image: "/images/package/Prof.-Dr.-A-B-M-Younus.jpg",
      link: "/doctor/5",
      category_id: 46,
      icon: Heart,
      experience: "25+ Years",
      rating: "4.9",
      availability: "Available Tomorrow",
      position: "Professor of Hematology",
      reviews: 178,
    },
    {
      id: 12,
      name: "Dr. Mahfuza Akter",
      specialty: "Opthalmology (Eye)",
      qualifications: "MBBS (Dhaka), BCS (Health), DO (DU), FCPS (Eye)",
      image: "/images/package/Mahfuza-Akter.jpg",
      link: "/doctor/12",
      category_id: 42,
      icon: Activity,
      experience: "20+ Years",
      rating: "4.9",
      availability: "Available Today",
      position: "Professor of Cardiology",
      reviews: 245,
    },
    {
      id: 7,
      name: "Prof. Dr. G.M. Faruque",
      specialty: "Opthalmology (Eye)",
      qualifications: "MBBS, BCS, (Health), MS (Ophth), D.O. (DU)",
      image: "/images/package/GM-Faruk.jpg",
      link: "/doctor/7",
      category_id: 42,
      icon: Eye,
      experience: "16+ Years",
      rating: "4.8",
      availability: "Available Today",
      position: "Professor of Ophthalmology",
      reviews: 134,
    },
    {
      id: 8,
      name: "Prof. Dr. Gobinda Chandra Saha",
      specialty: "General & Laparoscopic Surgery",
      qualifications: "MBBS, FCPS (Surgery), MS (General Surgery) FRCS (Glasgow, UK)",
      image: "/images/package/Prof.-Dr.-Govinda-Chandra-Das-1.jpg",
      link: "/doctor/8",
      category_id: 38,
      icon: Stethoscope,
      experience: "19+ Years",
      rating: "4.8",
      availability: "Available Tomorrow",
      position: "Professor of Surgery",
      reviews: 167,
    },
    {
      id: 9,
      name: "Dr. Sk. Mahmud Hasan",
      specialty: "Neuro Surgery Specialist",
      qualifications: "MBBS (DMC), BCS (Health), MS (Neurosurgery), National Institute of Neuroscience Hospital, Dhaka",
      image: "/images/package/dr.-Sheikh-mahmud.jpg",
      link: "/doctor/9",
      category_id: 18,
      icon: Brain,
      experience: "12+ Years",
      rating: "4.7",
      availability: "Available Today",
      position: "Assistant Professor",
      reviews: 98,
    },
    {
      id: 10,
      name: "Dr. Md. Mahmud Hasan",
      specialty: "Urology Specialist",
      qualifications: "MBBS, BCS (Health) MS (Urology) Assistant Professor",
      image: "/images/package/Mahmud-Hasan.jpg",
      link: "/doctor/10",
      category_id: 28,
      icon: Stethoscope,
      experience: "10+ Years",
      rating: "4.7",
      availability: "Available Tomorrow",
      position: "Assistant Professor",
      reviews: 76,
    },
    {
      id: 11,
      name: "Dr. Abul Hasnat Russel",
      specialty: "Neuro Medicine Specialist",
      qualifications:
        "MBBS, BCS (Health), MD (Neurology) Sir Salimullah Medical College Mitford Hospital, Dhaka Medicine & Neuromedicine Specialist Consultant",
      image: "/images/package/Dr.Hasnat.jpg",
      link: "/doctor/11",
      category_id: 24,
      icon: Brain,
      experience: "14+ Years",
      rating: "4.8",
      availability: "Available Today",
      position: "Consultant Neurologist",
      reviews: 112,
    },
   
  ]

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
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 -ml-7"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 -mr-7"
            disabled={currentIndex >= totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
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
                          width={300}
                          height={300}
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

                        {/* Name and Position - Made smaller */}
                        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#017381] transition-colors leading-tight">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium mb-4">{doctor.position}</p>

                        {/* Experience and Reviews */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-[#017381]" />
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#017381]" />
                            <span>{doctor.reviews} reviews</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex">
                          <Link
                            href={doctor.link}
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
