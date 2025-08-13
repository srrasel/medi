"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Function to generate slug from title
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

export default function HealthPackagesPage() {
  const [healthPackages, setHealthPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHealthPackages = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://admin.pmchl.com/api/health-packages?populate=*")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (result.data && Array.isArray(result.data)) {
          const transformedPackages = result.data.map((pkg) => {
            let imageUrl = "/health-package.png" // Default fallback

            if (pkg.Image) {
              // Try main image URL first (usually the best quality)
              if (pkg.Image.url) {
                imageUrl = pkg.Image.url
              }
              // If no main URL, try format URLs
              else if (pkg.Image.formats) {
                imageUrl =
                  pkg.Image.formats.large?.url ||
                  pkg.Image.formats.medium?.url ||
                  pkg.Image.formats.small?.url ||
                  pkg.Image.formats.thumbnail?.url ||
                  imageUrl
              }
            }

            return {
              id: pkg.id,
              title: pkg.Title || "Health Package",
              shortDescription: pkg.ShortDescription || "",
              description: extractTextFromRichText(pkg.Description),
              image: imageUrl,
              slug: generateSlug(pkg.Title || `health-package-${pkg.id}`),
            }
          })

          setHealthPackages(transformedPackages)
        } else {
          console.warn("No health packages data found")
          setHealthPackages([])
        }
      } catch (err) {
        console.error("Error fetching health packages:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHealthPackages()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Health
              <span className="block text-[#b8e6ea]">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
              Explore comprehensive health and wellness packages offered by Pro Active Hospital.
            </p>
          </div>
        </section>

        {/* Loading Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse"
                >
                  <div className="w-full h-60 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Health
              <span className="block text-[#b8e6ea]">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
              Explore comprehensive health and wellness packages offered by Pro Active Hospital.
            </p>
          </div>
        </section>

        {/* Error Message */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Health Packages</h3>
              <p className="text-red-600 mb-4">Error: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Health
            <span className="block text-[#b8e6ea]">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Explore comprehensive health and wellness packages offered by Pro Active Hospital.
          </p>
        </div>
      </section>

      {/* Health Packages Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {healthPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No health packages available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col"
                >
                  <Link href={`/health-packages/${pkg.id}`} className="block">
                    <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/health-package.png"
                        }}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#017381] transition-colors duration-300 leading-tight mb-4 flex-grow">
                      {pkg.title}
                    </h2>
                    {pkg.shortDescription && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.shortDescription}</p>
                    )}
                    <Link href={`/health-packages/${pkg.id}`} className="mt-auto">
                      <button className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
