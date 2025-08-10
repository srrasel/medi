"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Stethoscope, Award, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import WhyChooseUsSection from "./WhyChppseUs"

const departments = [
  {
    name: "Department of Gynaecology",
    slug: "gynaecology",
    image: "/images/গাইনোকোলজি.jpg",
    link: "/department/gynaecology/",
    category: "Women's Health",
    icon: Heart,
    description:
      "Comprehensive women's health care including pregnancy, childbirth, and reproductive health services with expert gynecologists.",
    services: ["Pregnancy Care", "Reproductive Health", "Gynecological Surgery", "Family Planning"],
    doctors: 8,
    established: "2015",
  },
  {
    name: "Department of Neonatology",
    slug: "neonatology",
    image: "/images/NICU-1-Final.jpeg",
    link: "/department/neonatology/",
    category: "Pediatric Care",
    icon: Users,
    description:
      "Specialized care for newborns, particularly premature and critically ill infants with state-of-the-art NICU facilities.",
    services: ["NICU Care", "Premature Baby Care", "Newborn Surgery", "Pediatric Cardiology"],
    doctors: 6,
    established: "2016",
  },
  {
    name: "Department of Ophthalmology",
    slug: "ophthalmology",
    image: "/images/OPTHALMOLOGY_Final.jpg",
    link: "/department/department-of-opthalmolog/",
    category: "Eye Care",
    icon: Stethoscope,
    description:
      "Complete eye care services including vision correction, eye surgery, and treatment of various eye diseases.",
    services: ["Cataract Surgery", "Retinal Treatment", "Glaucoma Care", "Pediatric Ophthalmology"],
    doctors: 5,
    established: "2014",
  },
  {
    name: "Department of Intensive Care",
    slug: "intensive-care",
    image: "/images/ICU-5.jpg",
    link: "/department/department-of-intensive-care/",
    category: "Critical Care",
    icon: Heart,
    description:
      "Advanced critical care for patients requiring intensive monitoring and life support with 24/7 expert medical team.",
    services: ["ICU Care", "Ventilator Support", "Cardiac Monitoring", "Post-Surgery Care"],
    doctors: 12,
    established: "2013",
  },
  {
    name: "Department of Endocrinology",
    slug: "endocrinology",
    image: "/images/Endocrinology.jpg",
    link: "/department/department-of-endocrinology/",
    category: "Hormone Care",
    icon: Award,
    description: "Treatment of hormone-related disorders including diabetes, thyroid, and metabolic conditions.",
    services: ["Diabetes Care", "Thyroid Treatment", "Hormone Therapy", "Metabolic Disorders"],
    doctors: 4,
    established: "2017",
  },
  {
    name: "Department of Hematology",
    slug: "hematology",
    image: "/images/Medical-Specialty-1109x675-1.jpg",
    link: "/department/department-of-hematology/",
    category: "Blood Care",
    icon: Heart,
    description: "Specialized care for blood disorders, cancers of the blood, and bone marrow diseases.",
    services: ["Blood Cancer Treatment", "Anemia Care", "Bone Marrow Disorders", "Blood Transfusion"],
    doctors: 3,
    established: "2018",
  },
  {
    name: "Department of Neuromedicine",
    slug: "neuromedicine",
    image: "/images/spinal-disorder-2.jpg",
    link: "/department/department-of-nuromedicine/",
    category: "Neurological Care",
    icon: Stethoscope,
    description: "Comprehensive neurological care for brain, spine, and nervous system disorders.",
    services: ["Stroke Treatment", "Epilepsy Care", "Parkinson's Disease", "Spinal Disorders"],
    doctors: 7,
    established: "2015",
  },
  {
    name: "Department of Internal Medicine",
    slug: "internal-medicine",
    image: "/images/internal-medicine.jpg",
    link: "/department/department-of-internal-medicine/",
    category: "General Medicine",
    icon: Users,
    description: "Primary care and treatment of adult diseases affecting internal organs and systems.",
    services: ["General Consultation", "Chronic Disease Management", "Preventive Care", "Health Screening"],
    doctors: 15,
    established: "2012",
  },
  {
    name: "Department of Physical Medicine",
    slug: "physical-medicine",
    image: "/images/physical_Medicine.jpg",
    link: "/department/department-of-physical-medicine/",
    category: "Rehabilitation",
    icon: Award,
    description: "Comprehensive rehabilitation services for recovery from injuries, surgeries, and chronic conditions.",
    services: ["Physiotherapy", "Occupational Therapy", "Pain Management", "Sports Medicine"],
    doctors: 6,
    established: "2016",
  },
  {
    name: "Department of Hepatobiliary",
    slug: "hepatobiliary",
    image: "/images/liverdiagram.png",
    link: "/department/department-of-hepatobiliary/",
    category: "Liver Care",
    icon: Heart,
    description: "Specialized treatment for liver, gallbladder, and bile duct diseases and disorders.",
    services: ["Liver Disease Treatment", "Gallbladder Surgery", "Bile Duct Procedures", "Liver Transplant"],
    doctors: 4,
    established: "2019",
  },
  {
    name: "Department of Gastroenterology",
    slug: "gastroenterology",
    image: "/images/Gastroenterology-1.jpg",
    link: "/department/department-of-gastroenterology/",
    category: "Digestive Care",
    icon: Stethoscope,
    description: "Treatment of digestive system disorders including stomach, intestines, liver, and pancreas.",
    services: ["Endoscopy", "Colonoscopy", "Liver Disease", "Inflammatory Bowel Disease"],
    doctors: 5,
    established: "2014",
  },
  {
    name: "Department of Radioncology",
    slug: "radioncology",
    image: "/images/1585218080116.png",
    link: "/department/department-of-radioncology/",
    category: "Cancer Care",
    icon: Users,
    description: "Advanced radiation therapy and cancer treatment with state-of-the-art equipment.",
    services: ["Radiation Therapy", "Cancer Treatment", "Tumor Management", "Palliative Care"],
    doctors: 3,
    established: "2020",
  },
  {
    name: "Department of Radiology and Imaging",
    slug: "radiology-imaging",
    image: "/images/lab2.jpg",
    link: "/department/department-of-radi-oncology/",
    category: "Diagnostic Imaging",
    icon: Award,
    description: "Comprehensive diagnostic imaging services including CT, MRI, X-ray, and ultrasound.",
    services: ["CT Scan", "MRI", "X-Ray", "Ultrasound", "Mammography"],
    doctors: 8,
    established: "2013",
  },
  {
    name: "Department of Paediatric Surgery",
    slug: "paediatric-surgery",
    image: "/images/padeatric.jpg",
    link: "/department/department-of-paediatric-surgery/",
    category: "Pediatric Surgery",
    icon: Heart,
    description: "Specialized surgical care for infants, children, and adolescents with expert pediatric surgeons.",
    services: ["Pediatric Surgery", "Neonatal Surgery", "Minimally Invasive Surgery", "Emergency Surgery"],
    doctors: 4,
    established: "2017",
  },
  {
    name: "Department of Paediatric Medicine",
    slug: "paediatric-medicine",
    image: "/images/padeatric.jpg",
    link: "/department/paediatrics/",
    category: "Child Care",
    icon: Users,
    description: "Comprehensive medical care for children from birth to adolescence with specialized pediatricians.",
    services: ["Child Health Check-ups", "Vaccination", "Growth Monitoring", "Pediatric Emergency"],
    doctors: 10,
    established: "2013",
  },
  {
    name: "Department of Pathology and BioChemistry",
    slug: "pathology-biochemistry",
    image: "/images/Department-of-Phatology-and-Biochemistry.jpg",
    link: "/department/gastroenterology/",
    category: "Laboratory",
    icon: Stethoscope,
    description: "Advanced laboratory services for accurate diagnosis and monitoring of various medical conditions.",
    services: ["Blood Tests", "Tissue Analysis", "Biochemical Tests", "Microbiology"],
    doctors: 6,
    established: "2012",
  },
  {
    name: "Department of Critical Care",
    slug: "critical-care",
    image: "/images/patient-intensive-care.jpg",
    link: "/department/department-of-critical-care/",
    category: "Emergency Care",
    icon: Heart,
    description: "24/7 emergency and critical care services for life-threatening conditions and medical emergencies.",
    services: ["Emergency Medicine", "Trauma Care", "Critical Care", "Ambulance Service"],
    doctors: 14,
    established: "2012",
  },
  {
    name: "Department of General Surgery",
    slug: "general-surgery",
    image: "/images/Critical-Care-Final.png",
    link: "/department/department-of-general-surgery/",
    category: "Surgical Care",
    icon: Award,
    description: "Comprehensive surgical services including general, laparoscopic, and minimally invasive procedures.",
    services: ["General Surgery", "Laparoscopic Surgery", "Emergency Surgery", "Day Care Surgery"],
    doctors: 12,
    established: "2012",
  },
  {
    name: "Department of Nephrology",
    slug: "nephrology",
    image: "/images/Nephrology.jpg",
    link: "/department/nephrology/",
    category: "Kidney Care",
    icon: Users,
    description: "Specialized care for kidney diseases, dialysis services, and kidney transplantation.",
    services: ["Dialysis", "Kidney Disease Treatment", "Kidney Transplant", "Hypertension Management"],
    doctors: 5,
    established: "2014",
  },
  {
    name: "Department of Urology",
    slug: "urology",
    image: "/images/urology.jpg",
    link: "/department/urology/",
    category: "Urological Care",
    icon: Stethoscope,
    description:
      "Treatment of urinary tract and male reproductive system disorders with advanced urological procedures.",
    services: ["Kidney Stone Treatment", "Prostate Surgery", "Urinary Tract Surgery", "Male Infertility"],
    doctors: 4,
    established: "2015",
  },
  {
    name: "Department of Cardiology",
    slug: "cardiology",
    image: "/images/CCU-2-Final.jpeg",
    link: "/department/cardiology/",
    category: "Heart Care",
    icon: Heart,
    description: "Comprehensive cardiac care including diagnosis, treatment, and prevention of heart diseases.",
    services: ["Heart Surgery", "Angioplasty", "Cardiac Catheterization", "Heart Failure Treatment"],
    doctors: 8,
    established: "2013",
  },
  {
    name: "Department of ENT, Head and Neck Surgery",
    slug: "ent-head-neck-surgery",
    image: "/images/neck-hear.jpg",
    link: "/department/ent-ear-nose-throat/",
    category: "ENT Surgery",
    icon: Award,
    description: "Treatment of ear, nose, throat, head, and neck disorders with advanced surgical techniques.",
    services: ["ENT Surgery", "Hearing Tests", "Sinus Surgery", "Voice Disorders"],
    doctors: 6,
    established: "2014",
  },
  {
    name: "Department of Dental Surgery",
    slug: "dental-surgery",
    image: "/images/Dental-1.jpg",
    link: "/department/dental-surgery/",
    category: "Dental Care",
    icon: Users,
    description: "Comprehensive dental care including preventive, restorative, and surgical dental procedures.",
    services: ["Dental Surgery", "Orthodontics", "Root Canal", "Dental Implants"],
    doctors: 7,
    established: "2013",
  },
]

export default function MedicalSpecialties() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 12
  const totalSlides = Math.ceil(departments.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentDepartments = () => {
    const startIndex = currentSlide * itemsPerSlide
    return departments.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#017381]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#025a65]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#017381]/2 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

     <WhyChooseUsSection />

      {/* Our Specialities Section */}
      <section className="relative z-10 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            {/* Left Side - Image */}
            <div className="flex w-full lg:w-2/5">
              <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/image-our-specialities.jpg"
                  alt="Our Specialities - Evercare Hospital Dhaka"
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
                    <span className="text-sm font-bold text-[#017381]">World-Class Care</span>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <h3 className="text-lg font-bold text-[#017381] mb-2">Pro Active Hospital</h3>
                  <p className="text-sm text-gray-600">
                    Best Hospital in Narayanganj, Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Specialities */}
            <div className="w-full lg:w-3/5">
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Our Specialities</h2>
              </div>

              {/* Carousel Container */}
              <div className="relative">
                {/* Specialties Grid */}
                <div className="overflow-hidden">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <div className="flex">
                      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="min-w-full">
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                            {departments
                              .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                              .map((department, index) => {
                                const IconComponent = department.icon
                                return (
                                  <Link
                                    key={index}
                                    href={department.link}
                                    className="group bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#017381]/30 hover:bg-gradient-to-br hover:from-[#017381] hover:to-[#025a65] min-h-[120px] flex flex-col justify-center"
                                  >
                                    <div className="flex flex-col items-center space-y-3">
                                      <div className="w-14 h-14 bg-[#017381]/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                        <IconComponent className="w-7 h-7 text-[#017381] group-hover:text-white transition-colors duration-300" />
                                      </div>
                                      <h3 className="text-base font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 leading-tight text-center">
                                        {department.name}
                                      </h3>
                                    </div>
                                  </Link>
                                )
                              })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8">
                  {/* Navigation Buttons */}
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

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index ? "bg-[#017381] scale-125" : "bg-gray-300 hover:bg-[#017381]/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <div className="text-sm text-gray-600 font-medium">
                    {currentSlide + 1} of {totalSlides}
                  </div>
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-10">
                  <Link
                    href="/department"
                    className="group bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-3"
                  >
                    <span>View All Specialities</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
