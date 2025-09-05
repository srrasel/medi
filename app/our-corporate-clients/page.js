"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function CorporateClientPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/clients")

        if (!response.ok) {
          throw new Error("Failed to fetch clients")
        }

        const data = await response.json()

        // Transform Strapi data to match component expectations
        const transformedClients = data.map((client) => ({
          src: client.image || "/generic-company-logo.png",
          alt: `${client.title} Logo`,
          name: client.tilte,
        }))

        setClients(transformedClients)
      } catch (err) {
        console.error("Error fetching clients:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading clients...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading clients: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#017381] text-white rounded hover:bg-[#025a65] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Vision */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Corporate Clients
            <span className="block text-[#b8e6ea]">& Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            We partner with leading organizations to deliver high-quality healthcare services through modern hospitals,
            medical colleges, and skilled professionals.
          </p>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Esteemed Clients</h2>
          {clients.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={client.src || "/placeholder.svg"}
                    alt={client.alt}
                    width={120}
                    height={120}
                    className="mb-4 object-contain"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>No clients found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
