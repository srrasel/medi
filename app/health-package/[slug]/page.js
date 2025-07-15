import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"

// Define the health packages data
const healthPackages = [
  {
    id: 1,
    title: "Primary Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_03.jpg",
    slug: "primary-executive-health-package",
    description:
      "A comprehensive health check-up designed for executives, focusing on early detection and prevention of common health issues.",
    features: ["Full Body Check-up", "Blood & Urine Tests", "ECG & X-Ray", "Consultation with General Physician"],
  },
  {
    id: 2,
    title: "Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_04-1.jpg",
    slug: "executive-health-package",
    description:
      "An advanced health package for busy professionals, offering in-depth diagnostics and personalized health advice.",
    features: [
      "Advanced Blood Profile",
      "Cardiac Screening",
      "Liver & Kidney Function Tests",
      "Specialist Consultations",
    ],
  },
  {
    id: 3,
    title: "Senior Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_05.jpg",
    slug: "senior-executive-health-package",
    description:
      "Tailored for senior executives, this package includes extensive screenings for age-related conditions and chronic disease management.",
    features: ["Comprehensive Geriatric Assessment", "Bone Density Scan", "Cancer Markers", "Nutrition Counseling"],
  },
  {
    id: 4,
    title: "Gastro Liver Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_06.jpg",
    slug: "gastro-liver-health-package",
    description:
      "Focused on digestive health, this package provides thorough evaluation of gastrointestinal and liver functions.",
    features: [
      "Liver Function Tests",
      "Hepatitis Screening",
      "Upper GI Endoscopy (optional)",
      "Gastroenterologist Consultation",
    ],
  },
  {
    id: 5,
    title: "Executive Renal Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_07.jpg",
    slug: "executive-renal-health-package",
    description:
      "Designed for kidney health, this package includes detailed tests to assess renal function and detect kidney diseases early.",
    features: ["Kidney Function Tests", "Urine Microalbumin", "Renal Ultrasound", "Nephrologist Consultation"],
  },
  {
    id: 6,
    title: "Renal Screening Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_08.jpg",
    slug: "renal-screening-package",
    description:
      "A basic screening package for kidney health, ideal for routine check-ups and early detection of potential issues.",
    features: ["Creatinine & Urea", "Urine Routine & Microscopic", "Blood Pressure Check", "General Physician Review"],
  },
  {
    id: 7,
    title: "Diabetic Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_09.jpg",
    slug: "diabetic-health-package",
    description:
      "A specialized package for individuals with diabetes or those at risk, focusing on blood sugar control and complication prevention.",
    features: ["HbA1c", "Fasting & Post-Prandial Glucose", "Lipid Profile", "Endocrinologist Consultation"],
  },
  {
    id: 8,
    title: "Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_10.jpg",
    slug: "cardiac-health-package",
    description:
      "Comprehensive cardiac evaluation to assess heart health and identify risk factors for cardiovascular diseases.",
    features: ["ECG & Echocardiogram", "Lipid Profile", "Cardiac Enzyme Tests", "Cardiologist Consultation"],
  },
  {
    id: 9,
    title: "Master Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_11.jpg",
    slug: "master-cardiac-health-package",
    description:
      "An in-depth cardiac assessment for a complete understanding of your heart's condition, including advanced imaging.",
    features: [
      "Stress Test (ETT)",
      "Cardiac CT Angiography (optional)",
      "Holter Monitoring",
      "Senior Cardiologist Consultation",
    ],
  },
  {
    id: 10,
    title: "Cancer Health Package (Female)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_12.jpg",
    slug: "cancer-health-package-female",
    description: "Early cancer detection package for women, including screenings for common female-specific cancers.",
    features: ["Mammography", "Pap Smear", "Tumor Markers (e.g., CA 125)", "Gynecologist/Oncologist Consultation"],
  },
  {
    id: 11,
    title: "Cancer Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_13.jpg",
    slug: "cancer-health-package-male",
    description: "Early cancer detection package for men, including screenings for common male-specific cancers.",
    features: [
      "PSA (Prostate Specific Antigen)",
      "Colonoscopy (optional)",
      "Tumor Markers (e.g., AFP)",
      "Urologist/Oncologist Consultation",
    ],
  },
  {
    id: 12,
    title: "Arthritis Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_14.jpg",
    slug: "arthritis-health-package-male",
    description:
      "A specialized package for men to assess joint health and detect early signs of arthritis and related conditions.",
    features: ["Rheumatoid Factor (RF)", "ESR & CRP", "Uric Acid", "Orthopedic/Rheumatologist Consultation"],
  },
  {
    id: 13,
    title: "Female Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_15.jpg",
    slug: "female-above-40-health-package",
    description:
      "Comprehensive health assessment for women over 40, addressing age-specific health concerns and preventive care.",
    features: ["Hormone Profile", "Bone Density Scan", "Thyroid Function Tests", "Gynecologist Consultation"],
  },
  {
    id: 14,
    title: "Male Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_16.jpg",
    slug: "male-above-40-health-package",
    description:
      "Comprehensive health assessment for men over 40, addressing age-specific health concerns and preventive care.",
    features: ["Prostate Health Screening", "Testosterone Levels", "Cardiac Risk Assessment", "Urologist Consultation"],
  },
  {
    id: 15,
    title: "Female Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_17-1.jpg",
    slug: "female-below-40-health-package",
    description:
      "A foundational health package for women under 40, focusing on general wellness and early health monitoring.",
    features: ["Basic Blood Tests", "Thyroid Screening", "General Physical Exam", "Gynecologist Consultation"],
  },
  {
    id: 16,
    title: "Male Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_18.jpg",
    slug: "male-below-40-health-package",
    description:
      "A foundational health package for men under 40, focusing on general wellness and early health monitoring.",
    features: [
      "Basic Blood Tests",
      "Liver & Kidney Screening",
      "General Physical Exam",
      "General Physician Consultation",
    ],
  },
  {
    id: 17,
    title: "Women Wellness Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_19.jpg",
    slug: "women-wellness-health-package",
    description: "A holistic wellness package for women of all ages, promoting overall health and well-being.",
    features: [
      "Hormone Balance Check",
      "Nutritional Assessment",
      "Stress Management Counseling",
      "Wellness Coach Consultation",
    ],
  },
  {
    id: 18,
    title: "Pre-Marital Health (Male) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_20.jpg",
    slug: "pre-marital-health-male-package",
    description: "Essential health screening for men before marriage, ensuring good health for a healthy future.",
    features: [
      "Infectious Disease Screening",
      "Blood Group & Rh Factor",
      "Genetic Counseling",
      "General Health Assessment",
    ],
  },
  {
    id: 19,
    title: "Pre-Marital Health (Female) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_21.jpg",
    slug: "pre-marital-health-female-package",
    description: "Essential health screening for women before marriage, ensuring good health for a healthy future.",
    features: [
      "Infectious Disease Screening",
      "Blood Group & Rh Factor",
      "Thalassemia Screening",
      "Gynecological Check-up",
    ],
  },
  {
    id: 20,
    title: "Pre-Employment/ Academic/ VISA",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_22.jpg",
    slug: "pre-employment-academic-visa",
    description: "Standard health check-up required for employment, academic admissions, or visa applications.",
    features: ["General Physical Examination", "Chest X-Ray", "Basic Blood Tests", "Medical Certificate Issuance"],
  },
]

export default function SingleHealthPackagePage({ params }) {
  const { slug } = params
  const healthPackage = healthPackages.find((pkg) => pkg.slug === slug)

  if (!healthPackage) {
    notFound() // Use Next.js notFound for 404 handling
  }

  // Filter out the current package to show related ones (up to 3)
  const relatedPackages = healthPackages.filter((pkg) => pkg.slug !== slug).slice(0, 3)

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
              href="/health-package"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Health Packages
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Package Info */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{healthPackage.title}</h1>
              <p className="text-xl leading-relaxed font-light mb-8 text-white/90">{healthPackage.description}</p>
              {/* Package Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {healthPackage.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-left flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#b8e6ea] flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Package Image */}
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={healthPackage.image || "/placeholder.svg"}
                  alt={healthPackage.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Inquiry Section */}
      {/* Service Details Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <Image
                        src={healthPackage.image || "/placeholder.svg"}
                        alt={healthPackage.title}
                        width={800}
                        height={600}
                          />
      
                  
                </div>
              </div>
            </section>

    
    </div>
  )
}

// Generate static paths for all health packages
export async function generateStaticParams() {
  return healthPackages.map((pkg) => ({
    slug: pkg.slug,
  }))
}

// Generate metadata for each health package page
export async function generateMetadata({ params }) {
  const { slug } = params
  const healthPackage = healthPackages.find((pkg) => pkg.slug === slug)

  if (!healthPackage) {
    return {
      title: "Health Package Not Found",
    }
  }

  return {
    title: `${healthPackage.title} - Evercare Hospital Dhaka`,
    description: healthPackage.description,
  }
}
