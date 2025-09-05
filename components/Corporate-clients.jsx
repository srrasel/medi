"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from "lucide-react"

export default function CorporateClients() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 6 // Display 6 logos per slide on larger screens

  const [formState, setFormState] = useState({ success: false, message: "", isPending: false })

  // Fetch clients data from API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/clients")
        if (!response.ok) {
          throw new Error("Failed to fetch clients")
        }
        const data = await response.json()

        const transformedClients = data.map((client, index) => ({
          src: client.image || `/placeholder.svg?height=60&width=120&query=client+logo`,
          alt: `${client.title} Logo`,
          name: client.title,
        }))

        setClients(transformedClients)
      } catch (err) {
        setError(err.message)
        console.error("Error fetching clients:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [])

  const totalSlides = Math.ceil(clients.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Autoplay effect
  useEffect(() => {
    if (clients.length === 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [currentSlide, totalSlides, clients.length])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormState({ ...formState, isPending: true })

    const formData = new FormData(e.target)
    const name = formData.get("name")
    const mobile = formData.get("mobile")

    // Simulate form submission
    setTimeout(() => {
      setFormState({
        success: true,
        message: "Thank you! We will contact you soon.",
        isPending: false,
      })
      e.target.reset()
    }, 1000)
  }

  if (loading) {
    return (
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Corporate
              <span className="block text-[#017381]">Clients</span>
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381]"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Corporate
              <span className="block text-[#017381]">Clients</span>
            </h2>
            <p className="text-red-600">Error loading clients: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#017381]/3 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#025a65]/3 rounded-full blur-3xl opacity-20 delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full shadow-lg">
                Our Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Corporate
              <span className="block text-[#017381]">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are proud to partner with leading organizations, providing exceptional healthcare services and building
              strong, trusted relationships.
            </p>
          </div>

          {clients.length > 0 && (
            <>
              {/* Carousel Container */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="min-w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                          {clients
                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                            .map((client, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                              >
                                <img
                                  src={client.src || "/placeholder.svg"}
                                  alt={client.alt}
                                  className="w-30 h-15 object-contain transition-all duration-300"
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-10">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="w-12 h-12 rounded-full bg-white border-2 border-[#017381]/20 flex items-center justify-center hover:bg-[#017381] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-400 shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === totalSlides - 1}
                      className="w-12 h-12 rounded-full bg-white border-2 border-[#017381]/20 flex items-center justify-center hover:bg-[#017381] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-400 shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="pt-32">
        {/* Request a Callback Form Section */}
        <div className="w-full -translate-y-1/2 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center max-w-3xl mx-auto border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-[#017381] mb-4">
                Could not find what you are looking for?
              </h3>
              <p className="text-lg text-gray-600 mb-8">Request a Callback</p>

              {/* Success/Error Messages */}
              {formState && (formState.success || formState.error) && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    formState.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center space-x-2 ${formState.success ? "text-green-800" : "text-red-800"}`}
                  >
                    {formState.success ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="font-medium">{formState.success ? formState.message : formState.error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017381] text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#017381] text-gray-800"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={formState.isPending}
                    className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:from-[#025a65] hover:to-[#034a52] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState.isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
