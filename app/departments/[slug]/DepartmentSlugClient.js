"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Heart, Users, Stethoscope, ArrowLeft, Clock, CheckCircle, Award } from "lucide-react"

// Function to generate URL-friendly slugs
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Function to extract text from rich text array
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



// Function to get category icon
const getCategoryIcon = (category) => {
  const iconMap = {
    "Women's Health": Heart,
    "Pediatric Care": Users,
    "Eye Care": Stethoscope,
    "Critical Care": Heart,
    "Hormone Care": Award,
    "Blood Care": Heart,
    "Neurological Care": Stethoscope,
    "General Medicine": Users,
    Rehabilitation: Award,
    "Liver Care": Heart,
    "Digestive Care": Stethoscope,
    "Cancer Care": Users,
    "Diagnostic Imaging": Award,
    "Pediatric Surgery": Heart,
    "Child Care": Users,
    Laboratory: Stethoscope,
    "Emergency Care": Heart,
    "Surgical Care": Award,
    "Kidney Care": Users,
    "Urological Care": Stethoscope,
    "Heart Care": Heart,
    "ENT Surgery": Award,
    "Dental Care": Users,
  }
  return iconMap[category] || Stethoscope
}

export default function DepartmentPage() {
  const params = useParams()
  const slug = params.slug
  const [department, setDepartment] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/departments")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Response:", data)

        if (data && Array.isArray(data)) {
          // Transform API data and find matching department by slug
          const transformedDepartments = data.map((dept) => ({
            id: dept.id,
            name: dept.Title || "Unnamed Department",
            slug: generateSlug(dept.Title || "unnamed-department"),
            category: dept.Category || "General",
            description:
              dept.ShortDescription || extractTextFromRichText(dept.Description) || "No description available",
            fullDescription:
              extractTextFromRichText(dept.Description) || dept.ShortDescription || "No description available",
            doctors: dept.DoctorsCount || 0,
            established: dept.Established_Year || new Date().getFullYear(),
            image: dept.Image,
            icon: getCategoryIcon(dept.Category),
            services: ["Consultation", "Treatment", "Emergency Care", "Follow-up Care"], // Default services since not in API
          }))

          console.log("Transformed departments:", transformedDepartments)
          console.log("Looking for slug:", slug)
          console.log(
            "Available slugs:",
            transformedDepartments.map((d) => d.slug),
          )

          const foundDepartment = transformedDepartments.find((dept) => dept.slug === slug)

          if (foundDepartment) {
            setDepartment(foundDepartment)
          } else {
            setError(
              `Department with slug "${slug}" not found. Available slugs: ${transformedDepartments.map((d) => d.slug).join(", ")}`,
            )
          }
        } else {
          setError("No departments data received from API")
        }
      } catch (err) {
        console.error("Error fetching department:", err)
        setError(`Failed to load department: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchDepartment()
  }, [slug])

  useEffect(() => {
    if (department) {
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    }
  }, [department])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#017381] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading department...</p>
        </div>
      </div>
    )
  }

  if (error || !department) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-4">
            {error || "The department you're looking for doesn't exist or may have been moved."}
          </p>
          <Link
            href="/departments"
            className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Departments
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = department.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Departments
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Department Info */}
            <div
              className={`text-white transition-all duration-1000 text-center lg:text-left ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="bg-[#b8e6ea]/20 backdrop-blur-sm text-[#b8e6ea] px-4 py-2 rounded-full text-sm font-bold border border-[#b8e6ea]/30">
                  {department.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{department.name}</h1>
              <p className="text-xl leading-relaxed font-light mb-8 text-white/90">{department.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <Users className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-2xl font-bold">{department.doctors}</span>
                  </div>
                  <p className="text-white/80">Expert Doctors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <Clock className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-2xl font-bold">{department.established}</span>
                  </div>
                  <p className="text-white/80">Established</p>
                </div>
              </div>
            </div>

            {/* Department Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "/department.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{department.fullDescription}</p>
            </div>


            {/* Department Image */}
            <div className="text-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl inline-block">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  width={800}
                  height={600}
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = "/department.png"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
