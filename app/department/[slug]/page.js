"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Heart,
  Users,
  Stethoscope,
  ArrowLeft,
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  Mail,
  Award,
} from "lucide-react"

export default function DepartmentPage() {
  const params = useParams()
  const slug = params.slug
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const departments = [
    {
      name: "Department of Gynaecology",
      slug: "gynaecology",
      image: "/images/গাইনোকোলজি.jpg",
      link: "/gynaecology/",
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
      link: "/neonatology/",
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
      link: "/department-of-opthalmolog/",
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
      link: "/department-of-intensive-care/",
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
      link: "/department-of-endocrinology/",
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
      link: "/department-of-hematology/",
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
      link: "/department-of-nuromedicine/",
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
      link: "/department-of-internal-medicine/",
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
      link: "/department-of-physical-medicine/",
      category: "Rehabilitation",
      icon: Award,
      description:
        "Comprehensive rehabilitation services for recovery from injuries, surgeries, and chronic conditions.",
      services: ["Physiotherapy", "Occupational Therapy", "Pain Management", "Sports Medicine"],
      doctors: 6,
      established: "2016",
    },
    {
      name: "Department of Hepatobiliary",
      slug: "hepatobiliary",
      image: "/images/liverdiagram.png",
      link: "/department-of-hepatobiliary/",
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
      link: "/department-of-gastroenterology/",
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
      link: "/department-of-radioncology/",
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
      link: "/department-of-radi-oncology/",
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
      link: "/department-of-paediatric-surgery/",
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
      link: "/paediatrics/",
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
      link: "/gastroenterology/",
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
      link: "/department-of-critical-care/",
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
      link: "/department-of-general-surgery/",
      category: "Surgical Care",
      icon: Award,
      description:
        "Comprehensive surgical services including general, laparoscopic, and minimally invasive procedures.",
      services: ["General Surgery", "Laparoscopic Surgery", "Emergency Surgery", "Day Care Surgery"],
      doctors: 12,
      established: "2012",
    },
    {
      name: "Department of Nephrology",
      slug: "nephrology",
      image: "/images/Nephrology.jpg",
      link: "/nephrology/",
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
      link: "/urology/",
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
      link: "/cardiology/",
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
      link: "/ent-ear-nose-throat/",
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
      link: "/dental-surgery/",
      category: "Dental Care",
      icon: Users,
      description: "Comprehensive dental care including preventive, restorative, and surgical dental procedures.",
      services: ["Dental Surgery", "Orthodontics", "Root Canal", "Dental Implants"],
      doctors: 7,
      established: "2013",
    },
  ]

  const department = departments.find((dept) => dept.slug === slug)

  if (!department) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-8">The department you're looking for doesn't exist or may have been moved.</p>
          <Link
            href="/departments"
            className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Departments
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = department.icon
  const relatedDepartments = departments.filter((dept) => dept.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/department"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Departments
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Department Info */}
            <div
              className={`text-white transition-all duration-1000 text-center lg:text-left ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="bg-[#b8e6ea]/20 backdrop-blur-sm text-[#b8e6ea] px-4 py-2 rounded-full text-sm font-bold border border-[#b8e6ea]/30">
                  {department.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{department.name}</h1>
              <p className="text-xl leading-relaxed font-light mb-8 text-white/90">{department.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <Users className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-2xl font-bold">{department.doctors}</span>
                  </div>
                  <p className="text-white/80">Expert Doctors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    <Clock className="w-6 h-6 text-[#b8e6ea]" />
                    <span className="text-2xl font-bold">{department.established}</span>
                  </div>
                  <p className="text-white/80">Established</p>
                </div>
              </div>
            </div>

            {/* Department Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
               <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                   width={800}
  height={600}
 
                    />

          </div>
        </div>
      </section>

     

     
    </div>
  )
}
