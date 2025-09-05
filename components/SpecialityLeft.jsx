"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const SpecialityLeft = () => {
  const [specialityData, setSpecialityData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpecialityData = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/specialities")

        if (!response.ok) {
          throw new Error("Failed to fetch speciality data")
        }

        const result = await response.json()
        setSpecialityData(result[0])
      } catch (err) {
        console.error("Error fetching speciality data:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSpecialityData()
  }, [])

  if (loading) {
    return (
      <div className="flex w-full lg:w-2/5">
        <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 animate-pulse">
          <div className="absolute top-8 left-8 bg-gray-300 rounded-2xl px-5 py-3 w-48 h-12"></div>
          <div className="absolute bottom-8 left-8 right-8 bg-gray-300 rounded-2xl p-6 h-24"></div>
        </div>
      </div>
    )
  }

  if (error || !specialityData) {
    return (
      <div className="flex w-full lg:w-2/5">
        <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Failed to load speciality information</p>
        </div>
      </div>
    )
  }

  const imageUrl = specialityData.Image|| "/images/image-our-specialities.jpg"
  const topText = specialityData.Category || "World-Class Care"
  const name = specialityData.Name || "Pro Active Hospital"
  const shortDescription = specialityData.ShortDescription || "Best Hospital in Narayanganj, Dhaka"

  return (
    <div className="flex w-full lg:w-2/5">
      <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} - Our Specialities`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Floating Badge */}
        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#017381]">{topText}</span>
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold text-[#017381] mb-2">{name}</h3>
          <p className="text-sm text-gray-600">{shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default SpecialityLeft
