import Image from "next/image"
import { notFound } from "next/navigation"
import { Heart, Users, Stethoscope, Award } from "lucide-react"

const departments = [
  {
    name: "Department of Gynaecology",
    image: "/images/গাইনোকোলজি.jpg",
    link: "/gynaecology/",
    category: "Women's Health",
    icon: Heart,
    slug: "gynaecology",
  },
  {
    name: "Department of Neonatology",
    image: "/images/NICU-1-Final.jpeg",
    link: "/neonatology/",
    category: "Pediatric Care",
    icon: Users,
    slug: "neonatology",
  },
  {
    name: "Department of Opthalmology",
    image: "/images/OPTHALMOLOGY_Final.jpg",
    link: "/department-of-opthalmolog/",
    category: "Eye Care",
    icon: Stethoscope,
    slug: "opthalmology",
  },
  {
    name: "Department of Intensive Care",
    image: "/images/ICU-5.jpg",
    link: "/department-of-intensive-care/",
    category: "Critical Care",
    icon: Heart,
    slug: "intensive-care",
  },
  {
    name: "Department of Endocrinology",
    image: "/images/Endocrinology.jpg",
    link: "/department-of-endocrinology/",
    category: "Hormone Care",
    icon: Award,
    slug: "endocrinology",
  },
  {
    name: "Department of Hematology",
    image: "/images/Medical-Specialty-1109x675-1.jpg",
    link: "/department-of-hematology/",
    category: "Blood Care",
    icon: Heart,
    slug: "hematology",
  },
  {
    name: "Department of Neuromedicine",
    image: "/images/spinal-disorder-2.jpg",
    link: "/department-of-nuromedicine/",
    category: "Neurological Care",
    icon: Stethoscope,
    slug: "neuromedicine",
  },
  {
    name: "Department of Internal Medicine",
    image: "/images/internal-medicine.jpg",
    link: "/department-of-internal-medicine/",
    category: "General Medicine",
    icon: Users,
    slug: "internal-medicine",
  },
  {
    name: "Department of Physical Medicine",
    image: "/images/physical_Medicine.jpg",
    link: "/department-of-physical-medicine/",
    category: "Rehabilitation",
    icon: Award,
    slug: "physical-medicine",
  },
  {
    name: "Department of Hepatobiliary",
    image: "/images/liverdiagram.png",
    link: "/department-of-hepatobiliary/",
    category: "Liver Care",
    icon: Heart,
    slug: "hepatobiliary",
  },
  {
    name: "Department of Gastroenterology",
    image: "/images/Gastroenterology-1.jpg",
    link: "/department-of-gastroenterology/",
    category: "Digestive Care",
    icon: Stethoscope,
    slug: "gastroenterology",
  },
  {
    name: "Department of Radioncology",
    image: "/images/1585218080116.png",
    link: "/department-of-radioncology/",
    category: "Cancer Care",
    icon: Users,
    slug: "radioncology",
  },
  {
    name: "Department of Radiology and Imaging",
    image: "/images/lab2.jpg",
    link: "/department-of-radi-oncology/",
    category: "Diagnostic Imaging",
    icon: Award,
    slug: "radiology-imaging",
  },
  {
    name: "Department of Paediatric Surgery",
    image: "/images/padeatric.jpg",
    link: "/department-of-paediatric-surgery/",
    category: "Pediatric Surgery",
    icon: Heart,
    slug: "paediatric-surgery",
  },
  {
    name: "Department of Paediatric Medicine",
    image: "/images/padeatric.jpg",
    link: "/paediatrics/",
    category: "Child Care",
    icon: Users,
    slug: "paediatric-medicine",
  },
  {
    name: "Department of Pathology and BioChemistry",
    image: "/images/Department-of-Phatology-and-Biochemistry.jpg",
    link: "/gastroenterology/",
    category: "Laboratory",
    icon: Stethoscope,
    slug: "pathology-biochemistry",
  },
  {
    name: "Department of Critical Care",
    image: "/images/patient-intensive-care.jpg",
    link: "/department-of-critical-care/",
    category: "Emergency Care",
    icon: Heart,
    slug: "critical-care",
  },
  {
    name: "Department of General Surgery",
    image: "/images/Critical-Care-Final.png",
    link: "/department-of-general-surgery/",
    category: "Surgical Care",
    icon: Award,
    slug: "general-surgery",
  },
  {
    name: "Department of Nephrology",
    image: "/images/Nephrology.jpg",
    link: "/nephrology/",
    category: "Kidney Care",
    icon: Users,
    slug: "nephrology",
  },
  {
    name: "Department of Urology",
    image: "/images/urology.jpg",
    link: "/urology/",
    category: "Urological Care",
    icon: Stethoscope,
    slug: "urology",
  },
  {
    name: "Department of Cardiology",
    image: "/images/CCU-2-Final.jpeg",
    link: "/cardiology/",
    category: "Heart Care",
    icon: Heart,
    slug: "cardiology",
  },
  {
    name: "Department of ENT, Head and Neck Surgery",
    image: "/images/neck-hear.jpg",
    link: "/ent-ear-nose-throat/",
    category: "ENT Surgery",
    icon: Award,
    slug: "ent-head-neck-surgery",
  },
  {
    name: "Department of Dental Surgery",
    image: "/images/Dental-1.jpg",
    link: "/dental-surgery/",
    category: "Dental Care",
    icon: Users,
    slug: "dental-surgery",
  },
]

export default async function SingleDepartmentPage({ params }) {
  const { slug } = await params

  // Find the department by slug
  const department = departments.find((dept) => dept.slug === slug)

  // If department not found, return 404
  if (!department) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Department Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Department Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">{department.name}</h1>
          </div>

          {/* Department Image */}
          <div className="relative w-full h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={department.image || "/placeholder.svg"}
              alt={department.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all departments
export async function generateStaticParams() {
  return departments.map((department) => ({
    slug: department.slug,
  }))
}

// Generate metadata for each department page
export async function generateMetadata({ params }) {
  const { slug } = await params
  const department = departments.find((dept) => dept.slug === slug)

  if (!department) {
    return {
      title: "Department Not Found",
    }
  }

  return {
    title: `${department.name} - Pro-Active Hospital`,
    description: `${department.name} at Pro-Active Hospital - ${department.category}`,
  }
}
