import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react" // Import ArrowRight icon

const healthPackages = [
  {
    id: 1,
    title: "Primary Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_03.jpg",
    slug: "primary-executive-health-package", // Added slug
  },
  {
    id: 2,
    title: "Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_04-1.jpg",
    slug: "executive-health-package", // Added slug
  },
  {
    id: 3,
    title: "Senior Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_05.jpg",
    slug: "senior-executive-health-package", // Added slug
  },
  {
    id: 4,
    title: "Gastro Liver Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_06.jpg",
    slug: "gastro-liver-health-package", // Added slug
  },
  {
    id: 5,
    title: "Executive Renal Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_07.jpg",
    slug: "executive-renal-health-package", // Added slug
  },
  {
    id: 6,
    title: "Renal Screening Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_08.jpg",
    slug: "renal-screening-package", // Added slug
  },
  {
    id: 7,
    title: "Diabetic Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_09.jpg",
    slug: "diabetic-health-package", // Added slug
  },
  {
    id: 8,
    title: "Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_10.jpg",
    slug: "cardiac-health-package", // Added slug
  },
  {
    id: 9,
    title: "Master Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_11.jpg",
    slug: "master-cardiac-health-package", // Added slug
  },
  {
    id: 10,
    title: "Cancer Health Package (Female)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_12.jpg",
    slug: "cancer-health-package-female", // Added slug
  },
  {
    id: 11,
    title: "Cancer Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_13.jpg",
    slug: "cancer-health-package-male", // Added slug
  },
  {
    id: 12,
    title: "Arthritis Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_14.jpg",
    slug: "arthritis-health-package-male", // Added slug
  },
  {
    id: 13,
    title: "Female Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_15.jpg",
    slug: "female-above-40-health-package", // Added slug
  },
  {
    id: 14,
    title: "Male Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_16.jpg",
    slug: "male-above-40-health-package", // Added slug
  },
  {
    id: 15,
    title: "Female Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_17-1.jpg",
    slug: "female-below-40-health-package", // Added slug
  },
  {
    id: 16,
    title: "Male Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_18.jpg",
    slug: "male-below-40-health-package", // Added slug
  },
  {
    id: 17,
    title: "Women Wellness Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_19.jpg",
    slug: "women-wellness-health-package", // Added slug
  },
  {
    id: 18,
    title: "Pre-Marital Health (Male) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_20.jpg",
    slug: "pre-marital-health-male-package", // Added slug
  },
  {
    id: 19,
    title: "Pre-Marital Health (Female) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_21.jpg",
    slug: "pre-marital-health-female-package", // Added slug
  },
  {
    id: 20,
    title: "Pre-Employment/ Academic/ VISA",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_22.jpg",
    slug: "pre-employment-academic-visa", // Added slug
  },
]

export default function HealthPackagesPage() {
  return (
   
        <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Vision */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
      
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Our Health 
                  <span className="block text-[#b8e6ea]">Packages</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
                Explore comprehensive health and wellness packages offered by Evercare Hospital Dhaka.
                  </p>
      
               
              </div>
            </section>

        {/* Health Packages Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col"
            >
              <Link href={`/health-package/${pkg.slug}`} className="block">
                <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#017381] transition-colors duration-300 leading-tight mb-4 flex-grow">
                  {pkg.title}
                </h2>
                <Link href={`/health-package/${pkg.slug}`} className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>
      </div>
    
  )
}

// Optional: Generate metadata for the page
export async function generateMetadata() {
  return {
    title: "Health Packages - Evercare Hospital Dhaka",
    description: "Explore comprehensive health and wellness packages offered by Evercare Hospital Dhaka.",
  }
}
