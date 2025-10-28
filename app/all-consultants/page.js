"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const queryFromUrl = searchParams.get("query")
    if (queryFromUrl) {
      setSearchQuery(queryFromUrl)
    }
  }, [searchParams])

  // Fetch doctors data from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("/api/doctors") // Fetch from your existing API route
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setDoctors(data)
      } catch (e) {
        console.error("Failed to fetch doctors for all-consultants page:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, []) // Empty dependency array means this runs once on mount

  // Dynamically generate categories from fetched doctors
  const categories = useMemo(() => {
    const uniqueSpecialties = new Set(doctors.map((doctor) => doctor.specialty).filter(Boolean))
    return Array.from(uniqueSpecialties)
      .map((specialty, index) => ({
        id: index, // Simple ID, could be more robust if Strapi had a dedicated specialties collection
        name: specialty,
        count: doctors.filter((d) => d.specialty === specialty).length,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [doctors])

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

    // Observe elements after doctors are loaded and filtered
    if (!loading && doctors.length > 0) {
      const elements = document.querySelectorAll(".doctor-card")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [loading, doctors, selectedCategory, searchQuery]) // Re-run effect when these dependencies change

  // Filter doctors based on category and search
  const filteredDoctors = useMemo(() => {
    return doctors
      .filter((doctor) => {
        const matchesCategory = selectedCategory === "all" || doctor.specialty === selectedCategory
        const matchesSearch =
          searchQuery === "" ||
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        // Sort by position in ascending order (lower position numbers first)
        // Handle cases where position might be null or undefined
        const posA = a.position ?? Number.MAX_SAFE_INTEGER
        const posB = b.position ?? Number.MAX_SAFE_INTEGER
        return posA - posB
      })
  }, [doctors, selectedCategory, searchQuery])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800">Loading doctors...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
          <p className="text-gray-600">Please check your network connection or Strapi API URL.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Expert Doctors
            <span className="block text-[#b8e6ea]">& Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Meet our team of highly qualified medical professionals dedicated to providing exceptional care across
            various specialties.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors, specialties, or qualifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 cursor-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => {
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={doctor.id}
                  data-index={index}
                  className={`doctor-card medical-card medical-card-hover group cursor-interactive cursor-magnetic cursor-glow bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Specialty Badge */}
                    

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>

                    {/* Doctor Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300 line-clamp-2">
                        {doctor.name}
                      </h3>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{doctor.qualifications}</p>

                    {/* Specialty */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Specialty:</h4>
                      <span className="px-3 py-1 bg-[#017381]/10 text-[#017381] rounded-full text-[16px] font-medium ">
                        {doctor.specialty}
                      </span>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={doctor.link} /* Use the 'link' directly from the fetched data */
                        className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center cursor-magnetic cursor-pulse medical"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No doctors found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-magnetic"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
