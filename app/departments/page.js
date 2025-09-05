"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Stethoscope, Award, Search, ExternalLink, Clock } from "lucide-react"

export default function DepartmentPage() {
  const [departments, setDepartments] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Generate slug from name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  // Extract text from rich text array
  const extractTextFromRichText = (richTextArray) => {
    if (!richTextArray || !Array.isArray(richTextArray)) return ""

    return richTextArray
      .map((block) => {
        if (block.children && Array.isArray(block.children)) {
          return block.children.map((child) => child.text || "").join("")
        }
        return ""
      })
      .join(" ")
      .trim()
  }

  // Get image URL from Cloudinary structure
  const getImageUrl = (imageObj) => {
    if (!imageObj) return "/department.png"

    // Try different image formats in order of preference
    return (
      imageObj.url ||
      imageObj.formats?.large?.url ||
      imageObj.formats?.medium?.url ||
      imageObj.formats?.small?.url ||
      "/department.png"
    )
  }

  // Fetch departments from API
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/departments")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Response:", data)

        if (data && Array.isArray(data)) {
          // Transform API data to match component structure
          const transformedDepartments = data.map((dept) => ({
            id: dept.id,
            name: dept.Title || "Department",
            slug: generateSlug(dept.Title || "department"),
            image: getImageUrl(dept.Image),
            category: dept.Category || "General",
            description:
              dept.ShortDescription || extractTextFromRichText(dept.Description) || "No description available",
            fullDescription: extractTextFromRichText(dept.Description),
            doctors: dept.DoctorsCount || 0,
            established: dept.Established_Year || new Date().getFullYear(),
            icon: getIconForCategory(dept.Category),
            services: generateServicesForCategory(dept.Category), // Generate basic services since not in API
          }))

          setDepartments(transformedDepartments)

          // Generate categories dynamically
          const uniqueCategories = [...new Set(transformedDepartments.map((dept) => dept.category))]
          const categoryList = [
            { name: "All Departments", slug: "all", count: transformedDepartments.length },
            ...uniqueCategories.map((cat) => ({
              name: cat,
              slug: cat,
              count: transformedDepartments.filter((dept) => dept.category === cat).length,
            })),
          ]

          setCategories(categoryList)
        } else {
          console.error("Invalid API response structure:", data)
          setError("Invalid data format received from API")
        }
      } catch (err) {
        console.error("Error fetching departments:", err)
        setError(`Failed to load departments: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchDepartments()
  }, [])

  // Get icon for category
  const getIconForCategory = (category) => {
    const iconMap = {
      "Women's Health": Heart,
      "Pediatric Care": Users,
      "Eye Care": Stethoscope,
      "Critical Care": Heart,
      "Hormone Care": Award,
      "Blood Care": Heart,
      "Neurological Care": Stethoscope,
      "General Medicine": Users,
      "Emergency Care": Heart,
      "Heart Care": Heart,
      "Kidney Care": Stethoscope,
      "Dental Care": Users,
    }
    return iconMap[category] || Stethoscope
  }

  // Generate basic services for category
  const generateServicesForCategory = (category) => {
    const serviceMap = {
      "Women's Health": ["Pregnancy Care", "Gynecological Surgery", "Family Planning", "Reproductive Health"],
      "Pediatric Care": ["Newborn Care", "Child Development", "Pediatric Surgery", "Vaccination"],
      "Eye Care": ["Vision Testing", "Eye Surgery", "Glaucoma Treatment", "Cataract Surgery"],
      "Critical Care": ["ICU Care", "Life Support", "Emergency Surgery", "24/7 Monitoring"],
      "Hormone Care": ["Diabetes Care", "Thyroid Treatment", "Hormone Therapy", "Metabolic Disorders"],
      "Blood Care": ["Blood Testing", "Transfusion", "Cancer Treatment", "Bone Marrow Care"],
      "Neurological Care": ["Brain Surgery", "Spine Treatment", "Stroke Care", "Neurological Testing"],
      "General Medicine": ["Primary Care", "Health Checkups", "Chronic Disease Management", "Preventive Care"],
    }
    return serviceMap[category] || ["Consultation", "Treatment", "Surgery", "Follow-up Care"]
  }

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

    const elements = document.querySelectorAll(".department-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [departments, selectedCategory, searchQuery])

  // Filter departments based on category and search
  const filteredDepartments = departments.filter((dept) => {
    const matchesCategory = selectedCategory === "all" || dept.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#017381] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading departments...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Error Loading Departments</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#017381] text-white px-6 py-2 rounded-lg hover:bg-[#025a65] transition-colors"
          >
            Try Again
          </button>
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
            Medical Departments
            <span className="block text-[#b8e6ea]">& Specialties</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Discover our comprehensive range of medical departments, each staffed with expert physicians and equipped
            with state-of-the-art technology
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search departments, services, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept, index) => {
              const IconComponent = dept.icon
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={dept.slug}
                  data-index={index}
                  className={`department-card group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Department Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "/department.png"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {dept.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Department Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300 line-clamp-2">
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  {/* Department Info */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{dept.description}</p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.services.slice(0, 3).map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-3 py-1 bg-[#017381]/10 text-[#017381] rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                        {dept.services.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{dept.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Department Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#017381]" />
                        <span>{dept.doctors} Doctors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#017381]" />
                        <span>Est. {dept.established}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/departments/${dept.slug}`}
                        className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredDepartments.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No departments found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
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
