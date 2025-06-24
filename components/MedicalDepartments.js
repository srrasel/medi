"use client"
import { useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const MedicalDepartments = () => {
  const [hoveredDepartment, setHoveredDepartment] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const departments = [
    {
      name: "Department of Gynaecology",
      image: "/images/গাইনোকোলজি.jpg",
      link: "https://pmchl.com/department-item/gynaecology/",
    },
    {
      name: "Department of Neonatology",
      image: "/images/NICU-1-Final.jpeg",
      link: "https://pmchl.com/department-item/neonatology/",
    },
    {
      name: "Department of Opthalmology",
      image: "/images/OPTHALMOLOGY_Final.jpg",
      link: "https://pmchl.com/department-item/department-of-opthalmolog/",
    },
    {
      name: "Department of Intensive Care",
      image: "/images/ICU-5.jpg",
      link: "https://pmchl.com/department-item/department-of-intensive-care/",
    },
    {
      name: "Department of Endocrinology",
      image: "/images/Endocrinology.jpg",
      link: "https://pmchl.com/department-item/department-of-endocrinology/",
    },
    {
      name: "Department of Hematology",
      image: "/images/Medical-Specialty-1109x675-1.jpg",
      link: "https://pmchl.com/department-item/department-of-hematology/",
    },
    {
      name: "Department of Neuromedicine",
      image: "/images/spinal-disorder-2.jpg",
      link: "https://pmchl.com/department-item/department-of-nuromedicine/",
    },
    {
      name: "Department of Internal Medicine",
      image: "/images/internal-medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-internal-medicine/",
    },
    {
      name: "Department of Physical Medicine",
      image: "/images/physical_Medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-physical-medicine/",
    },
    {
      name: "Department of Hepatobiliary",
      image: "/images/liverdiagram.png",
      link: "https://pmchl.com/department-item/department-of-hepatobiliary/",
    },
    {
      name: "Department of Gastroenterology",
      image: "/images/Gastroenterology-1.jpg",
      link: "https://pmchl.com/department-item/department-of-gastroenterology/",
    },
    {
      name: "Department of Radioncology",
      image: "/images/1585218080116.png",
      link: "https://pmchl.com/department-item/department-of-radioncology/",
    },
    {
      name: "Department of Radiology and Imaging",
      image: "/images/lab2.jpg",
      link: "https://pmchl.com/department-item/department-of-radi-oncology/",
    },
    {
      name: "Department of Paediatric Surgery",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/department-of-paediatric-surgery/",
    },
    {
      name: "Department of Paediatric Medicine",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/paediatrics/",
    },
    {
      name: "Department of Pathology and BioChemistry",
      image: "/images/Department-of-Phatology-and-Biochemistry.jpg",
      link: "https://pmchl.com/department-item/gastroenterology/",
    },
    {
      name: "Department of Critical Care",
      image: "/images/patient-intensive-care.jpg",
      link: "https://pmchl.com/department-item/department-of-critical-care/",
    },
    {
      name: "Department of General Surgery",
      image: "/images/Critical-Care-Final.png",
      link: "https://pmchl.com/department-item/department-of-general-surgery/",
    },
    {
      name: "Department of Nephrology",
      image: "/images/Nephrology.jpg",
      link: "https://pmchl.com/department-item/nephrology/",
    },
    {
      name: "Department of Urology",
      image: "/images/urology.jpg",
      link: "https://pmchl.com/department-item/urology/",
    },
    {
      name: "Department of Cardiology",
      image: "/images/CCU-2-Final.jpeg",
      link: "https://pmchl.com/department-item/cardiology/",
    },
    {
      name: "Department of ENT, Head and Neck Surgery",
      image: "/images/neck-hear.jpg",
      link: "https://pmchl.com/department-item/ent-ear-nose-throat/",
    },
    {
      name: "Department of Dental Surgery",
      image: "/images/Dental-1.jpg",
      link: "https://pmchl.com/department-item/dental-surgery/",
    },
  ]

  // Show first 8 departments initially, or all if showAll is true
  const displayedDepartments = showAll ? departments : departments.slice(0, 8)

  // Get featured images for the gallery from the first few departments
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
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4 block">Departments</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Expert care across every specialty</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our hospital&apos;s specialized departments, each dedicated to delivering top-tier medical care with a focus on your unique needs.

          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Departments List */}
          <div className="space-y-4">
            <div
              className={`space-y-4 transition-all duration-500 ${showAll ? "max-h-none" : "max-h-[600px] overflow-hidden"}`}
            >
              {displayedDepartments.map((dept, index) => (
                <a
                  key={index}
                  href={dept.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border block ${
                    hoveredDepartment === index
                      ? "bg-blue-700 text-white border-blue-700 shadow-lg"
                      : "bg-white border-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  }`}
                  onMouseEnter={() => setHoveredDepartment(index)}
                  onMouseLeave={() => setHoveredDepartment(null)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={dept.image || "/placeholder.svg"} alt={dept.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`text-lg font-semibold mb-2 transition-colors ${
                            hoveredDepartment === index ? "text-white" : "text-gray-800 group-hover:text-white"
                          }`}
                        >
                          {dept.name}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed transition-colors ${
                            hoveredDepartment === index ? "text-blue-100" : "text-gray-600 group-hover:text-blue-100"
                          }`}
                        >
                          {getDepartmentDescription(dept.name)}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`ml-4 p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                        hoveredDepartment === index
                          ? "bg-white/20 rotate-45"
                          : "bg-gray-100 group-hover:bg-white/20 group-hover:rotate-45"
                      }`}
                    >
                      <ExternalLink
                        className={`w-4 h-4 transition-colors ${
                          hoveredDepartment === index ? "text-white" : "text-gray-600 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Show More/Less Button */}
            <div className="pt-8 flex gap-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-3"
              >
                <span>{showAll ? "Show Less" : `View All ${departments.length} Departments`}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* First Column */}
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Image
                    src={featuredImages[0] || "/placeholder.svg"}
                    alt="Medical department"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-60 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Image
                    src={featuredImages[1] || "/placeholder.svg"}
                    alt="Medical equipment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-4 pt-8">
                <div className="h-72 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Image
                    src={featuredImages[2] || "/placeholder.svg"}
                    alt="Patient care"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Image
                    src={featuredImages[3] || "/placeholder.svg"}
                    alt="Medical consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Images */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
              <Image
                src={featuredImages[4] || "/placeholder.svg"}
                alt="Medical professional"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 border-4 border-white">
              <Image
                src={featuredImages[5] || "/placeholder.svg"}
                alt="Medical facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalDepartments
