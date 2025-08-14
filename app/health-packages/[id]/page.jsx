"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"

export default function SingleHealthPackagePage({ params }) {
  const { id } = params
  const [healthPackage, setHealthPackage] = useState(null)
  const [relatedPackages, setRelatedPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  // Function to get best image URL
  const getImageUrl = (imageObj) => {
    if (!imageObj) return "/health-package.png"

    // Try different possible image URL structures
    return (
      imageObj.url ||
      imageObj.formats?.large?.url ||
      imageObj.formats?.medium?.url ||
      imageObj.formats?.small?.url ||
      "/health-package.png"
    )
  }

  useEffect(() => {
    const fetchHealthPackages = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://admin.pmchl.com/api/health-packages?populate=*")

        if (!response.ok) {
          throw new Error("Failed to fetch health packages")
        }

        const result = await response.json()
        const packages = result.data || []

        console.log("API Response:", packages)
        console.log("Looking for ID:", id)

        // Transform API data to match component structure
        const transformedPackages = packages.map((pkg) => {
          return {
            id: pkg.id,
            title: pkg.Title || "Untitled Package",
            description: pkg.ShortDescription || extractTextFromRichText(pkg.Description),
            fullDescription: extractTextFromRichText(pkg.Description),
            image: getImageUrl(pkg.Image),
            features: [
              "Comprehensive Health Assessment",
              "Professional Medical Consultation",
              "Detailed Health Report",
              "Follow-up Recommendations",
            ],
          }
        })

        console.log(
          "Available IDs:",
          transformedPackages.map((pkg) => pkg.id),
        )

        const currentPackage = transformedPackages.find((pkg) => pkg.id.toString() === id.toString())

        if (!currentPackage) {
          console.error(
            `Package with ID "${id}" not found. Available IDs:`,
            transformedPackages.map((pkg) => pkg.id),
          )
          setError(
            `Health package not found. Available package IDs: ${transformedPackages.map((pkg) => pkg.id).join(", ")}`,
          )
          return
        }

        setHealthPackage(currentPackage)

        const related = transformedPackages.filter((pkg) => pkg.id.toString() !== id.toString()).slice(0, 3)
        setRelatedPackages(related)
      } catch (err) {
        console.error("Error fetching health packages:", err)
        setError("Failed to load health package details")
      } finally {
        setLoading(false)
      }
    }

    fetchHealthPackages()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading health package details...</p>
        </div>
      </div>
    )
  }

  if (error || !healthPackage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Health Package Not Found</h1>
          <p className="text-gray-600 mb-6">{error || "The requested health package could not be found."}</p>
          <Link
            href="/health-packages"
            className="inline-flex items-center gap-2 bg-[#017381] text-white px-6 py-3 rounded-lg hover:bg-[#025a65] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Health Packages
          </Link>
        </div>
      </div>
    )
  }

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
              href="/health-packages"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Health Packages
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Package Info */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{healthPackage.title}</h1>
              <p className="text-xl leading-relaxed font-light mb-8 text-white/90">{healthPackage.description}</p>
              {/* Package Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {healthPackage.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-left flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#b8e6ea] flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Package Image */}
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={healthPackage.image || "/placeholder.svg"}
                  alt={healthPackage.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  onError={(e) => {
                    e.target.src = "/health-package.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src={healthPackage.image || "/placeholder.svg"}
              alt={healthPackage.title}
              width={800}
              height={600}
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
              onError={(e) => {
                e.target.src = "/health-package.png"
              }}
            />
            {healthPackage.fullDescription && (
              <div className="mt-8 text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Details</h2>
                <p className="text-gray-600 leading-relaxed">{healthPackage.fullDescription}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      
    </div>
  )
}
