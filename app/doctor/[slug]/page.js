"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Stethoscope, ArrowLeft, Calendar, Clock, User, Mail, Phone, Send, FileText } from "lucide-react"

export default function DoctorPage() {
  const { slug } = useParams()
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    const fetchDoctor = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/doctors/${slug}`)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setDoctor(data)
      } catch (e) {
        console.error("Failed to fetch doctor:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctor()
  }, [slug])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("")

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setFormStatus("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctor?.id,
          doctorName: doctor?.name,
          doctorSpecialty: doctor?.specialty,
          ...formData,
        }),
      })

      if (response.ok) {
        setFormStatus("Appointment request submitted successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        setFormStatus(`Failed to submit appointment request: ${errorData.message || response.statusText}`)
      }
    } catch (error) {
      setFormStatus(`An error occurred: ${error.message}. Please try again later.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading doctor details...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
          <Link href="/all-consultants" className="mt-4 inline-flex items-center text-[#017381] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Doctors
          </Link>
        </div>
      </div>
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Doctor not found</h2>
          <Link href="/all-consultants" className="mt-4 inline-flex items-center text-[#017381] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Doctors
          </Link>
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/all-consultants"
            className="inline-flex items-center text-white hover:text-[#b8e6ea] mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Doctors
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{doctor.name}</h1>
              <h2 className="text-2xl font-semibold text-[#b8e6ea] mb-4">{doctor.specialty}</h2>
              <p className="text-lg leading-relaxed max-w-2xl">{doctor.qualifications}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details and Appointment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Doctor Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About {doctor.name}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-[#017381]" />
                  <p>
                    <span className="font-semibold">Specialty:</span> {doctor.specialty}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#017381]" />
                  <p>
                    <span className="font-semibold">Qualifications:</span> {doctor.qualifications}
                  </p>
                </div>
              </div>

              {doctor.bio && (
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 text-[#017381]" />
                    <h4 className="text-xl font-semibold text-gray-800">Biography</h4>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{doctor.bio}</p>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Book an Appointment</h4>
                <p className="text-gray-600">
                  Schedule a consultation with {doctor.name} by filling out the form. Our team will confirm your
                  appointment soon.
                </p>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Preferred Date *
                  </label>
                  <div className="mt-1 relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Preferred Time *
                  </label>
                  <div className="mt-1 relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                    rows="4"
                    placeholder="Any additional information or specific concerns"
                  />
                </div>

                {formStatus && (
                  <div className={`text-sm ${formStatus.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                    {formStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
