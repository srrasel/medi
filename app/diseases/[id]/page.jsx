"use client"
import React, { useEffect, useState } from "react"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function SingleDiseasePage() {
  const { slug } = useParams()
  const [disease, setDisease] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDisease = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/diseases/${slug}`)
        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.message)
        }
        const data = await res.json()
        setDisease(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchDisease()
  }, [slug])

  if (loading) return <p className="text-center py-20">Loading...</p>
  if (error) return <p className="text-center py-20 text-red-600">Error: {error}</p>
  if (!disease) return <p className="text-center py-20">Disease not found</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden"> 
        <div className="absolute inset-0 overflow-hidden"> 
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div> 
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div> 
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> 
          {/* Back Button */} 
          <div className="mb-8"> 
            <Link href="/diseases" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" /> Back to Diseases
            </Link> 
          </div> 
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{disease.name}</h1> 
            <div className="flex items-center justify-center gap-8 text-sm text-white/80"> 
              <div className="flex items-center gap-2"> 
                <Calendar className="w-4 h-4" /> 
                <span>{new Date(disease.createdAt).toLocaleDateString()}</span> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>

      {/* Content */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="p-6">
            <div className="flex justify-between border-b pb-4 mb-4">
              <div className="flex gap-4">
                <Image
                  src={disease.image || "/placeholder.svg"}
                  alt={disease.name}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
            <span className="text-gray-500 text-sm">{new Date(disease.createdAt).toLocaleDateString()}</span>
            <h3 className="font-bold text-lg mb-2 mt-4">About This Disease</h3>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: disease.Description }} />
          </div>
        </div>
      </section>
    </div>
  )
}
