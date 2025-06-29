"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Stethoscope, Heart, Users, Award } from "lucide-react"
import Image from "next/image"

const MedicalDepartments = () => {
  const [hoveredDepartment, setHoveredDepartment] = useState(null)
  const [showAll, setShowAll] = useState(false)
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
  }, [showAll])

  const departments = [
    {
      name: "Department of Gynaecology",
      image: "/images/গাইনোকোলজি.jpg",
      link: "https://pmchl.com/department-item/gynaecology/",
      category: "Women's Health",
      icon: Heart,
    },
    {
      name: "Department of Neonatology",
      image: "/images/NICU-1-Final.jpeg",
      link: "https://pmchl.com/department-item/neonatology/",
      category: "Pediatric Care",
      icon: Users,
    },
    {
      name: "Department of Opthalmology",
      image: "/images/OPTHALMOLOGY_Final.jpg",
      link: "https://pmchl.com/department-item/department-of-opthalmolog/",
      category: "Eye Care",
      icon: Stethoscope,
    },
    {
      name: "Department of Intensive Care",
      image: "/images/ICU-5.jpg",
      link: "https://pmchl.com/department-item/department-of-intensive-care/",
      category: "Critical Care",
      icon: Heart,
    },
    {
      name: "Department of Endocrinology",
      image: "/images/Endocrinology.jpg",
      link: "https://pmchl.com/department-item/department-of-endocrinology/",
      category: "Hormone Care",
      icon: Award,
    },
    {
      name: "Department of Hematology",
      image: "/images/Medical-Specialty-1109x675-1.jpg",
      link: "https://pmchl.com/department-item/department-of-hematology/",
      category: "Blood Care",
      icon: Heart,
    },
    {
      name: "Department of Neuromedicine",
      image: "/images/spinal-disorder-2.jpg",
      link: "https://pmchl.com/department-item/department-of-nuromedicine/",
      category: "Neurological Care",
      icon: Stethoscope,
    },
    {
      name: "Department of Internal Medicine",
      image: "/images/internal-medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-internal-medicine/",
      category: "General Medicine",
      icon: Users,
    },
    {
      name: "Department of Physical Medicine",
      image: "/images/physical_Medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-physical-medicine/",
      category: "Rehabilitation",
      icon: Award,
    },
    {
      name: "Department of Hepatobiliary",
      image: "/images/liverdiagram.png",
      link: "https://pmchl.com/department-item/department-of-hepatobiliary/",
      category: "Liver Care",
      icon: Heart,
    },
    {
      name: "Department of Gastroenterology",
      image: "/images/Gastroenterology-1.jpg",
      link: "https://pmchl.com/department-item/department-of-gastroenterology/",
      category: "Digestive Care",
      icon: Stethoscope,
    },
    {
      name: "Department of Radioncology",
      image: "/images/1585218080116.png",
      link: "https://pmchl.com/department-item/department-of-radioncology/",
      category: "Cancer Care",
      icon: Users,
    },
    {
      name: "Department of Radiology and Imaging",
      image: "/images/lab2.jpg",
      link: "https://pmchl.com/department-item/department-of-radi-oncology/",
      category: "Diagnostic Imaging",
      icon: Award,
    },
    {
      name: "Department of Paediatric Surgery",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/department-of-paediatric-surgery/",
      category: "Pediatric Surgery",
      icon: Heart,
    },
    {
      name: "Department of Paediatric Medicine",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/paediatrics/",
      category: "Child Care",
      icon: Users,
    },
    {
      name: "Department of Pathology and BioChemistry",
      image: "/images/Department-of-Phatology-and-Biochemistry.jpg",
      link: "https://pmchl.com/department-item/gastroenterology/",
      category: "Laboratory",
      icon: Stethoscope,
    },
    {
      name: "Department of Critical Care",
      image: "/images/patient-intensive-care.jpg",
      link: "https://pmchl.com/department-item/department-of-critical-care/",
      category: "Emergency Care",
      icon: Heart,
    },
    {
      name: "Department of General Surgery",
      image: "/images/Critical-Care-Final.png",
      link: "https://pmchl.com/department-item/department-of-general-surgery/",
      category: "Surgical Care",
      icon: Award,
    },
    {
      name: "Department of Nephrology",
      image: "/images/Nephrology.jpg",
      link: "https://pmchl.com/department-item/nephrology/",
      category: "Kidney Care",
      icon: Users,
    },
    {
      name: "Department of Urology",
      image: "/images/urology.jpg",
      link: "https://pmchl.com/department-item/urology/",
      category: "Urological Care",
      icon: Stethoscope,
    },
    {
      name: "Department of Cardiology",
      image: "/images/CCU-2-Final.jpeg",
      link: "https://pmchl.com/department-item/cardiology/",
      category: "Heart Care",
      icon: Heart,
    },
    {
      name: "Department of ENT, Head and Neck Surgery",
      image: "/images/neck-hear.jpg",
      link: "https://pmchl.com/department-item/ent-ear-nose-throat/",
      category: "ENT Surgery",
      icon: Award,
    },
    {
      name: "Department of Dental Surgery",
      image: "/images/Dental-1.jpg",
      link: "https://pmchl.com/department-item/dental-surgery/",
      category: "Dental Care",
      icon: Users,
    },
  ]

  const displayedDepartments = showAll ? departments : departments.slice(0, 8)
  const featuredImages = departments.slice(0, 6).map((dept) => dept.image)

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
      "Department of Neuromedicine": "Comprehensive neurological care for brain, spine, and nervous system disorders.",
      "Department of Internal Medicine":
        "Primary care and treatment of adult diseases affecting internal organs and systems.",
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
  with a focus on your unique health needs and comprehensive treatment solutions. </p>
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

            <div
              className={`space-y-4 transition-all duration-500 ${
                showAll ? "max-h-none" : "max-h-[800px] overflow-hidden"
              }`}
            >
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

            {/* Show More/Less Button */}
            <div className="pt-8 flex gap-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-3"
              >
                <span>{showAll ? "Show Less Departments" : `View All ${departments.length} Departments`}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </div>

          {/* Enhanced Images Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 h-[700px]">
              {/* First Column */}
              <div className="space-y-6">
                <div className="h-52 rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-4 border-white">
                  <Image
                    src={featuredImages[0] || "/placeholder.svg"}
                    alt="Medical department"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-64 rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-4 border-white">
                  <Image
                    src={featuredImages[1] || "/placeholder.svg"}
                    alt="Medical equipment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-6 pt-12">
                <div className="h-80 rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-4 border-white">
                  <Image
                    src={featuredImages[2] || "/placeholder.svg"}
                    alt="Patient care"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-48 rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-4 border-white">
                  <Image
                    src={featuredImages[3] || "/placeholder.svg"}
                    alt="Medical consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Floating Images */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-white rotate-12 hover:rotate-0">
              <Image
                src={featuredImages[4] || "/placeholder.svg"}
                alt="Medical professional"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-white -rotate-12 hover:rotate-0">
              <Image
                src={featuredImages[5] || "/placeholder.svg"}
                alt="Medical facility"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute bottom-1/3 -right-2 w-6 h-6 bg-gradient-to-r from-[#025a65] to-[#034a52] rounded-full shadow-lg animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalDepartments
