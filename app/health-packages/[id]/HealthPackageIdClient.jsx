"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function SingleHealthPackagePage({ params }) {
  const { id } = use(params)
  const [healthPackage, setHealthPackage] = useState(null)
  const [relatedPackages, setRelatedPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to extract plain text from HTML
  const extractTextFromHTML = (htmlString) => {
    if (!htmlString) return ""
    return htmlString.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  }

  useEffect(() => {
    const fetchHealthPackages = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/health-packages")

        if (!response.ok) {
          throw new Error("Failed to fetch health packages")
        }

        const packages = await response.json()

        // Transform API data
        const transformedPackages = packages.map((pkg) => ({
          id: pkg.id,
          title: pkg.Title || "Untitled Package",
          description: pkg.ShortDescription || extractTextFromHTML(pkg.Description),
          fullDescription: pkg.Description || "",
          image: pkg.Image || "/health-package.png",
          features: [
            "Comprehensive Health Assessment",
            "Professional Medical Consultation",
            "Detailed Health Report",
            "Follow-up Recommendations",
          ],
        }))

        const currentPackage = transformedPackages.find(
          (pkg) => pkg.id.toString() === id.toString(),
        )

        if (!currentPackage) {
          setError("Health package not found.")
          return
        }

        setHealthPackage(currentPackage)
        setRelatedPackages(
          transformedPackages.filter((pkg) => pkg.id.toString() !== id.toString()).slice(0, 3),
        )
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading health package details...</p>
      </div>
    )
  }

  if (error || !healthPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Health Package Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/health-packages"
            className="inline-flex items-center gap-2 bg-[#017381] text-white px-6 py-3 rounded-lg hover:bg-[#025a65]"
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
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/health-packages"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Health Packages
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Package Info */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{healthPackage.title}</h1>
              <p className="text-lg mb-8 text-white/90">{healthPackage.description}</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-md">
                {healthPackage.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-xl p-4 flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#b8e6ea]" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Image */}
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={healthPackage.image}
                  alt={healthPackage.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
                  src={healthPackage.image}
                  alt={healthPackage.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                               <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Details</h2>

            {healthPackage.fullDescription && (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: healthPackage.fullDescription }}
              />
            )}

            
          </div>
        </div>
      </section>
    </div>
  )
}
