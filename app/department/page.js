"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Stethoscope, Award, Search, Filter, ChevronDown, ExternalLink, ArrowRight, MapPin, Phone, Clock } from 'lucide-react'

export default function DepartmentPage() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

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
  }, [selectedCategory, searchQuery])

  const departments = [
    {
      name: "Department of Gynaecology",
      slug: "gynaecology",
      image: "/images/গাইনোকোলজি.jpg",
      link: "https://pmchl.com/department-item/gynaecology/",
      category: "Women's Health",
      icon: Heart,
      description: "Comprehensive women's health care including pregnancy, childbirth, and reproductive health services with expert gynecologists.",
      services: ["Pregnancy Care", "Reproductive Health", "Gynecological Surgery", "Family Planning"],
      doctors: 8,
      established: "2015"
    },
    {
      name: "Department of Neonatology",
      slug: "neonatology",
      image: "/images/NICU-1-Final.jpeg",
      link: "https://pmchl.com/department-item/neonatology/",
      category: "Pediatric Care",
      icon: Users,
      description: "Specialized care for newborns, particularly premature and critically ill infants with state-of-the-art NICU facilities.",
      services: ["NICU Care", "Premature Baby Care", "Newborn Surgery", "Pediatric Cardiology"],
      doctors: 6,
      established: "2016"
    },
    {
      name: "Department of Ophthalmology",
      slug: "ophthalmology",
      image: "/images/OPTHALMOLOGY_Final.jpg",
      link: "https://pmchl.com/department-item/department-of-opthalmolog/",
      category: "Eye Care",
      icon: Stethoscope,
      description: "Complete eye care services including vision correction, eye surgery, and treatment of various eye diseases.",
      services: ["Cataract Surgery", "Retinal Treatment", "Glaucoma Care", "Pediatric Ophthalmology"],
      doctors: 5,
      established: "2014"
    },
    {
      name: "Department of Intensive Care",
      slug: "intensive-care",
      image: "/images/ICU-5.jpg",
      link: "https://pmchl.com/department-item/department-of-intensive-care/",
      category: "Critical Care",
      icon: Heart,
      description: "Advanced critical care for patients requiring intensive monitoring and life support with 24/7 expert medical team.",
      services: ["ICU Care", "Ventilator Support", "Cardiac Monitoring", "Post-Surgery Care"],
      doctors: 12,
      established: "2013"
    },
    {
      name: "Department of Endocrinology",
      slug: "endocrinology",
      image: "/images/Endocrinology.jpg",
      link: "https://pmchl.com/department-item/department-of-endocrinology/",
      category: "Hormone Care",
      icon: Award,
      description: "Treatment of hormone-related disorders including diabetes, thyroid, and metabolic conditions.",
      services: ["Diabetes Care", "Thyroid Treatment", "Hormone Therapy", "Metabolic Disorders"],
      doctors: 4,
      established: "2017"
    },
    {
      name: "Department of Hematology",
      slug: "hematology",
      image: "/images/Medical-Specialty-1109x675-1.jpg",
      link: "https://pmchl.com/department-item/department-of-hematology/",
      category: "Blood Care",
      icon: Heart,
      description: "Specialized care for blood disorders, cancers of the blood, and bone marrow diseases.",
      services: ["Blood Cancer Treatment", "Anemia Care", "Bone Marrow Disorders", "Blood Transfusion"],
      doctors: 3,
      established: "2018"
    },
    {
      name: "Department of Neuromedicine",
      slug: "neuromedicine",
      image: "/images/spinal-disorder-2.jpg",
      link: "https://pmchl.com/department-item/department-of-nuromedicine/",
      category: "Neurological Care",
      icon: Stethoscope,
      description: "Comprehensive neurological care for brain, spine, and nervous system disorders.",
      services: ["Stroke Treatment", "Epilepsy Care", "Parkinson's Disease", "Spinal Disorders"],
      doctors: 7,
      established: "2015"
    },
    {
      name: "Department of Internal Medicine",
      slug: "internal-medicine",
      image: "/images/internal-medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-internal-medicine/",
      category: "General Medicine",
      icon: Users,
      description: "Primary care and treatment of adult diseases affecting internal organs and systems.",
      services: ["General Consultation", "Chronic Disease Management", "Preventive Care", "Health Screening"],
      doctors: 15,
      established: "2012"
    },
    {
      name: "Department of Physical Medicine",
      slug: "physical-medicine",
      image: "/images/physical_Medicine.jpg",
      link: "https://pmchl.com/department-item/department-of-physical-medicine/",
      category: "Rehabilitation",
      icon: Award,
      description: "Comprehensive rehabilitation services for recovery from injuries, surgeries, and chronic conditions.",
      services: ["Physiotherapy", "Occupational Therapy", "Pain Management", "Sports Medicine"],
      doctors: 6,
      established: "2016"
    },
    {
      name: "Department of Hepatobiliary",
      slug: "hepatobiliary",
      image: "/images/liverdiagram.png",
      link: "https://pmchl.com/department-item/department-of-hepatobiliary/",
      category: "Liver Care",
      icon: Heart,
      description: "Specialized treatment for liver, gallbladder, and bile duct diseases and disorders.",
      services: ["Liver Disease Treatment", "Gallbladder Surgery", "Bile Duct Procedures", "Liver Transplant"],
      doctors: 4,
      established: "2019"
    },
    {
      name: "Department of Gastroenterology",
      slug: "gastroenterology",
      image: "/images/Gastroenterology-1.jpg",
      link: "https://pmchl.com/department-item/department-of-gastroenterology/",
      category: "Digestive Care",
      icon: Stethoscope,
      description: "Treatment of digestive system disorders including stomach, intestines, liver, and pancreas.",
      services: ["Endoscopy", "Colonoscopy", "Liver Disease", "Inflammatory Bowel Disease"],
      doctors: 5,
      established: "2014"
    },
    {
      name: "Department of Radioncology",
      slug: "radioncology",
      image: "/images/1585218080116.png",
      link: "https://pmchl.com/department-item/department-of-radioncology/",
      category: "Cancer Care",
      icon: Users,
      description: "Advanced radiation therapy and cancer treatment with state-of-the-art equipment.",
      services: ["Radiation Therapy", "Cancer Treatment", "Tumor Management", "Palliative Care"],
      doctors: 3,
      established: "2020"
    },
    {
      name: "Department of Radiology and Imaging",
      slug: "radiology-imaging",
      image: "/images/lab2.jpg",
      link: "https://pmchl.com/department-item/department-of-radi-oncology/",
      category: "Diagnostic Imaging",
      icon: Award,
      description: "Comprehensive diagnostic imaging services including CT, MRI, X-ray, and ultrasound.",
      services: ["CT Scan", "MRI", "X-Ray", "Ultrasound", "Mammography"],
      doctors: 8,
      established: "2013"
    },
    {
      name: "Department of Paediatric Surgery",
      slug: "paediatric-surgery",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/department-of-paediatric-surgery/",
      category: "Pediatric Surgery",
      icon: Heart,
      description: "Specialized surgical care for infants, children, and adolescents with expert pediatric surgeons.",
      services: ["Pediatric Surgery", "Neonatal Surgery", "Minimally Invasive Surgery", "Emergency Surgery"],
      doctors: 4,
      established: "2017"
    },
    {
      name: "Department of Paediatric Medicine",
      slug: "paediatric-medicine",
      image: "/images/padeatric.jpg",
      link: "https://pmchl.com/department-item/paediatrics/",
      category: "Child Care",
      icon: Users,
      description: "Comprehensive medical care for children from birth to adolescence with specialized pediatricians.",
      services: ["Child Health Check-ups", "Vaccination", "Growth Monitoring", "Pediatric Emergency"],
      doctors: 10,
      established: "2013"
    },
    {
      name: "Department of Pathology and BioChemistry",
      slug: "pathology-biochemistry",
      image: "/images/Department-of-Phatology-and-Biochemistry.jpg",
      link: "https://pmchl.com/department-item/gastroenterology/",
      category: "Laboratory",
      icon: Stethoscope,
      description: "Advanced laboratory services for accurate diagnosis and monitoring of various medical conditions.",
      services: ["Blood Tests", "Tissue Analysis", "Biochemical Tests", "Microbiology"],
      doctors: 6,
      established: "2012"
    },
    {
      name: "Department of Critical Care",
      slug: "critical-care",
      image: "/images/patient-intensive-care.jpg",
      link: "https://pmchl.com/department-item/department-of-critical-care/",
      category: "Emergency Care",
      icon: Heart,
      description: "24/7 emergency and critical care services for life-threatening conditions and medical emergencies.",
      services: ["Emergency Medicine", "Trauma Care", "Critical Care", "Ambulance Service"],
      doctors: 14,
      established: "2012"
    },
    {
      name: "Department of General Surgery",
      slug: "general-surgery",
      image: "/images/Critical-Care-Final.png",
      link: "https://pmchl.com/department-item/department-of-general-surgery/",
      category: "Surgical Care",
      icon: Award,
      description: "Comprehensive surgical services including general, laparoscopic, and minimally invasive procedures.",
      services: ["General Surgery", "Laparoscopic Surgery", "Emergency Surgery", "Day Care Surgery"],
      doctors: 12,
      established: "2012"
    },
    {
      name: "Department of Nephrology",
      slug: "nephrology",
      image: "/images/Nephrology.jpg",
      link: "https://pmchl.com/department-item/nephrology/",
      category: "Kidney Care",
      icon: Users,
      description: "Specialized care for kidney diseases, dialysis services, and kidney transplantation.",
      services: ["Dialysis", "Kidney Disease Treatment", "Kidney Transplant", "Hypertension Management"],
      doctors: 5,
      established: "2014"
    },
    {
      name: "Department of Urology",
      slug: "urology",
      image: "/images/urology.jpg",
      link: "https://pmchl.com/department-item/urology/",
      category: "Urological Care",
      icon: Stethoscope,
      description: "Treatment of urinary tract and male reproductive system disorders with advanced urological procedures.",
      services: ["Kidney Stone Treatment", "Prostate Surgery", "Urinary Tract Surgery", "Male Infertility"],
      doctors: 4,
      established: "2015"
    },
    {
      name: "Department of Cardiology",
      slug: "cardiology",
      image: "/images/CCU-2-Final.jpeg",
      link: "https://pmchl.com/department-item/cardiology/",
      category: "Heart Care",
      icon: Heart,
      description: "Comprehensive cardiac care including diagnosis, treatment, and prevention of heart diseases.",
      services: ["Heart Surgery", "Angioplasty", "Cardiac Catheterization", "Heart Failure Treatment"],
      doctors: 8,
      established: "2013"
    },
    {
      name: "Department of ENT, Head and Neck Surgery",
      slug: "ent-head-neck-surgery",
      image: "/images/neck-hear.jpg",
      link: "https://pmchl.com/department-item/ent-ear-nose-throat/",
      category: "ENT Surgery",
      icon: Award,
      description: "Treatment of ear, nose, throat, head, and neck disorders with advanced surgical techniques.",
      services: ["ENT Surgery", "Hearing Tests", "Sinus Surgery", "Voice Disorders"],
      doctors: 6,
      established: "2014"
    },
    {
      name: "Department of Dental Surgery",
      slug: "dental-surgery",
      image: "/images/Dental-1.jpg",
      link: "https://pmchl.com/department-item/dental-surgery/",
      category: "Dental Care",
      icon: Users,
      description: "Comprehensive dental care including preventive, restorative, and surgical dental procedures.",
      services: ["Dental Surgery", "Orthodontics", "Root Canal", "Dental Implants"],
      doctors: 7,
      established: "2013"
    },
  ]

  const categories = [
    { name: "All Departments", slug: "all", count: departments.length },
    { name: "Women's Health", slug: "Women's Health", count: 1 },
    { name: "Pediatric Care", slug: "Pediatric Care", count: 2 },
    { name: "Eye Care", slug: "Eye Care", count: 1 },
    { name: "Critical Care", slug: "Critical Care", count: 1 },
    { name: "Hormone Care", slug: "Hormone Care", count: 1 },
    { name: "Blood Care", slug: "Blood Care", count: 1 },
    { name: "Neurological Care", slug: "Neurological Care", count: 1 },
    { name: "General Medicine", slug: "General Medicine", count: 1 },
    { name: "Rehabilitation", slug: "Rehabilitation", count: 1 },
    { name: "Liver Care", slug: "Liver Care", count: 1 },
    { name: "Digestive Care", slug: "Digestive Care", count: 1 },
    { name: "Cancer Care", slug: "Cancer Care", count: 1 },
    { name: "Diagnostic Imaging", slug: "Diagnostic Imaging", count: 1 },
    { name: "Pediatric Surgery", slug: "Pediatric Surgery", count: 1 },
    { name: "Child Care", slug: "Child Care", count: 1 },
    { name: "Laboratory", slug: "Laboratory", count: 1 },
    { name: "Emergency Care", slug: "Emergency Care", count: 1 },
    { name: "Surgical Care", slug: "Surgical Care", count: 1 },
    { name: "Kidney Care", slug: "Kidney Care", count: 1 },
    { name: "Urological Care", slug: "Urological Care", count: 1 },
    { name: "Heart Care", slug: "Heart Care", count: 1 },
    { name: "ENT Surgery", slug: "ENT Surgery", count: 1 },
    { name: "Dental Care", slug: "Dental Care", count: 1 },
  ]

  // Filter departments based on category and search
  const filteredDepartments = departments.filter((dept) => {
    const matchesCategory = selectedCategory === "all" || dept.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Medical Departments
            <span className="block text-[#b8e6ea]">& Specialties</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Discover our comprehensive range of medical departments, each staffed with expert physicians and equipped with state-of-the-art technology
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search departments, services, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 cursor-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-interactive">
              <div className="w-16 h-16 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#017381] mb-2">{departments.length}+</h3>
              <p className="text-gray-600 font-medium">Medical Departments</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-interactive">
              <div className="w-16 h-16 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#017381] mb-2">150+</h3>
              <p className="text-gray-600 font-medium">Expert Doctors</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-interactive">
              <div className="w-16 h-16 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#017381] mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Emergency Care</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-interactive">
              <div className="w-16 h-16 bg-gradient-to-r from-[#017381] to-[#025a65] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#017381] mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>


      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept, index) => {
              const IconComponent = dept.icon
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={dept.slug}
                  data-index={index}
                  className={`department-card medical-card medical-card-hover group cursor-interactive cursor-magnetic cursor-glow bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Department Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {dept.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Department Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300 line-clamp-2">
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  {/* Department Info */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{dept.description}</p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.services.slice(0, 3).map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-3 py-1 bg-[#017381]/10 text-[#017381] rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                        {dept.services.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{dept.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Department Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#017381]" />
                        <span>{dept.doctors} Doctors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#017381]" />
                        <span>Est. {dept.established}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/department/${dept.slug}`}
                        className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center cursor-magnetic cursor-pulse medical"
                      >
                        View Details
                      </Link>
                     
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredDepartments.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No departments found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-magnetic"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      
    </div>
  )
}