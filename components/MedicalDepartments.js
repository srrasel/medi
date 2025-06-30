"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Stethoscope, Heart, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MedicalDepartments = () => {
  const [hoveredDepartment, setHoveredDepartment] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())

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
  }, [])

  const departments = [
    {
      name: "Department of Gynaecology",
      image: "/images/গাইনোকোলজি.jpg",
      link: "/department/gynaecology/",
      category: "Women's Health",
      icon: Heart,
    },
    {
      name: "Department of Neonatology",
      image: "/images/NICU-1-Final.jpeg",
      link: "/department/neonatology/",
      category: "Pediatric Care",
      icon: Users,
    },
    {
      name: "Department of Opthalmology",
      image: "/images/OPTHALMOLOGY_Final.jpg",
      link: "/department/ophthalmology/",
      category: "Eye Care",
      icon: Stethoscope,
    },
    {
      name: "Department of Intensive Care",
      image: "/images/ICU-5.jpg",
      link: "/department/intensive-care/",
      category: "Critical Care",
      icon: Heart,
    },
  ]

  const displayedDepartments = departments.slice(0, 6)
  const featuredImages = departments.map((dept) => dept.image)

  const getDepartmentDescription = (name) => {
    const descriptions = {
      "Department of Gynaecology":
        "Comprehensive women's health care including pregnancy, childbirth, and reproductive health services.",
      "Department of Neonatology": "Specialized care for newborns, particularly premature and critically ill infants.",
      "Department of Opthalmology":
        "Complete eye care services including vision correction, eye surgery, and treatment of eye diseases.",
      "Department of Intensive Care":
        "Advanced critical care for patients requiring intensive monitoring and life support.",
      "Department of Endocrinology":
        "Treatment of hormone-related disorders including diabetes, thyroid, and metabolic conditions.",
      "Department of Hematology":
        "Specialized care for blood disorders, cancers of the blood, and bone marrow diseases.",
    }

    return descriptions[name] || "Expert medical care and treatment in this specialized field of medicine."
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 overflow-hidden">
      {/* Background Shapes and Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#017381]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#025a65]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#017381]/3 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#017381]/10 to-[#025a65]/10 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-[#025a65]/10 to-[#034a52]/10 rounded-2xl rotate-12 animate-pulse delay-700"></div>

        {/* Medical cross patterns */}
        <div className="absolute top-1/4 left-10 w-16 h-2 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute top-1/4 left-18 w-2 h-16 bg-[#017381]/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-20 w-12 h-1.5 bg-[#025a65]/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-26 w-1.5 h-12 bg-[#025a65]/10 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-semibold tracking-wider uppercase px-6 py-2 rounded-full shadow-lg">
              Medical Departments
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Care Across
            <span className="block text-[#017381]">Every Specialty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our hospital&apos;s specialized departments, each dedicated to delivering top-tier medical care
            with a focus on your unique health needs and comprehensive treatment solutions.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "23+", label: "Medical Departments", icon: Stethoscope },
            { number: "100+", label: "Expert Doctors", icon: Users },
            { number: "24/7", label: "Emergency Care", icon: Heart },
            { number: "50+", label: "Years Experience", icon: Award },
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-[#017381]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#017381] mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Departments List */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#017381] mb-4">Our Specialized Departments</h3>
              <p className="text-gray-600">
                Each department is equipped with state-of-the-art technology and staffed by experienced medical
                professionals.
              </p>
            </div>

            <div className="space-y-4">
              {displayedDepartments.map((dept, index) => {
                const IconComponent = dept.icon
                const isVisible = visibleCards.has(index)

                return (
                  <a
                    key={index}
                    data-index={index}
                    href={dept.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`department-card group relative rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border block backdrop-blur-sm ${
                      hoveredDepartment === index
                        ? "bg-gradient-to-r from-[#017381] to-[#025a65] text-white border-[#017381] shadow-xl scale-105"
                        : "bg-white/90 border-gray-100 hover:bg-gradient-to-r hover:from-[#017381] hover:to-[#025a65] hover:text-white hover:border-[#017381]"
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredDepartment(index)}
                    onMouseLeave={() => setHoveredDepartment(null)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-5 flex-1">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                          <Image
                            src={dept.image || "/placeholder.svg"}
                            alt={dept.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`p-2 rounded-lg transition-colors ${
                                hoveredDepartment === index ? "bg-white/20" : "bg-[#017381]/10 group-hover:bg-white/20"
                              }`}
                            >
                              <IconComponent
                                className={`w-4 h-4 transition-colors ${
                                  hoveredDepartment === index ? "text-white" : "text-[#017381] group-hover:text-white"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                                hoveredDepartment === index
                                  ? "bg-white/20 text-white"
                                  : "bg-[#017381]/10 text-[#017381] group-hover:bg-white/20 group-hover:text-white"
                              }`}
                            >
                              {dept.category}
                            </span>
                          </div>

                          <h4
                            className={`text-lg font-bold mb-3 transition-colors ${
                              hoveredDepartment === index ? "text-white" : "text-gray-800 group-hover:text-white"
                            }`}
                          >
                            {dept.name}
                          </h4>

                          <p
                            className={`text-sm leading-relaxed transition-colors ${
                              hoveredDepartment === index
                                ? "text-slate-200"
                                : "text-gray-600 group-hover:text-slate-200"
                            }`}
                          >
                            {getDepartmentDescription(dept.name)}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`ml-4 p-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                          hoveredDepartment === index
                            ? "bg-white/20 rotate-45 scale-110"
                            : "bg-gray-100 group-hover:bg-white/20 group-hover:rotate-45 group-hover:scale-110"
                        }`}
                      >
                        <ExternalLink
                          className={`w-5 h-5 transition-colors ${
                            hoveredDepartment === index ? "text-white" : "text-gray-600 group-hover:text-white"
                          }`}
                        />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* View All Departments Button */}
            <div className="pt-8">
              <Link
                href="/departments"
                className="group bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-3 w-fit"
              >
                <span>View All Departments</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Enhanced Images Gallery */}
          <div className="relative">
            {/* Main Gallery Grid */}
            <div className="relative h-[800px]">
              {/* Large Featured Image */}
              <div className="absolute top-0 left-0 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group">
                <Image
                  src={featuredImages[0] || "/placeholder.svg"}
                  alt="Medical department"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-2/5 h-1/3 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group ml-4">
                <Image
                  src={featuredImages[1] || "/placeholder.svg"}
                  alt="Medical equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Middle Left Image */}
              <div className="absolute top-1/2 left-0 w-2/5 h-1/3 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group -translate-y-1/2 mt-4">
                <Image
                  src={featuredImages[2] || "/placeholder.svg"}
                  alt="Patient care"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Middle Right Large Image */}
              <div className="absolute top-1/3 right-0 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group ml-4 mt-4">
                <Image
                  src={featuredImages[3] || "/placeholder.svg"}
                  alt="Medical consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom Left Image */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/4 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group">
                <Image
                  src={ "/images/Endocrinology.jpg"|| "/placeholder.svg"}
                  alt="Medical professional"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/4 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white group ml-4">
                <Image
                  src={"/images/Medical-Specialty-1109x675-1.jpg" || "/placeholder.svg"}
                  alt="Medical facility"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-r from-[#017381] to-[#025a65] shadow-2xl animate-pulse flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#025a65] to-[#034a52] shadow-2xl animate-pulse delay-500 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>

            <div className="absolute top-1/3 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#017381]/80 to-[#025a65]/80 shadow-xl animate-pulse delay-1000 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-1/4 -right-4 w-14 h-14 rounded-full bg-gradient-to-r from-[#025a65]/80 to-[#034a52]/80 shadow-xl animate-pulse delay-700 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#017381]/5 rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalDepartments
