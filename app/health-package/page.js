"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

const healthPackages = [
  {
    id: 1,
    title: "Primary Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_03.jpg",
    link: "https://pmchl.com/package-item/primary-executive-health-package/",
  },
  {
    id: 2,
    title: "Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_04-1.jpg",
    link: "https://pmchl.com/package-item/executive-health-package/",
  },
  {
    id: 3,
    title: "Senior Executive Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_05.jpg",
    link: "https://pmchl.com/package-item/senior-executive-health-package/",
  },
  {
    id: 4,
    title: "Gastro Liver Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_06.jpg",
    link: "https://pmchl.com/package-item/gastro-liver-health-package/",
  },
  {
    id: 5,
    title: "Executive Renal Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_07.jpg",
    link: "https://pmchl.com/package-item/executive-renal-health-package/",
  },
  {
    id: 6,
    title: "Renal Screening Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_08.jpg",
    link: "https://pmchl.com/package-item/renal-screening-package/",
  },
  {
    id: 7,
    title: "Diabetic Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_09.jpg",
    link: "https://pmchl.com/package-item/diabetic-health-package/",
  },
  {
    id: 8,
    title: "Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_10.jpg",
    link: "https://pmchl.com/package-item/cardiac-health-package/",
  },
  {
    id: 9,
    title: "Master Cardiac Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_11.jpg",
    link: "https://pmchl.com/package-item/master-cardiac-health-package/",
  },
  {
    id: 10,
    title: "Cancer Health Package (Female)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_12.jpg",
    link: "https://pmchl.com/package-item/cancer-health-package-female/",
  },
  {
    id: 11,
    title: "Cancer Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_13.jpg",
    link: "https://pmchl.com/package-item/cancer-health-package-male/",
  },
  {
    id: 12,
    title: "Arthritis Health Package (Male)",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_14.jpg",
    link: "https://pmchl.com/package-item/arthritis-health-package-male/",
  },
  {
    id: 13,
    title: "Female Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_15.jpg",
    link: "https://pmchl.com/package-item/female-above-40-health-package/",
  },
  {
    id: 14,
    title: "Male Above 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_16.jpg",
    link: "https://pmchl.com/package-item/male-above-40-health-package/",
  },
  {
    id: 15,
    title: "Female Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_17-1.jpg",
    link: "https://pmchl.com/package-item/female-below-40-health-package/",
  },
  {
    id: 16,
    title: "Male Below 40 Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_18.jpg",
    link: "https://pmchl.com/package-item/male-below-40-health-package/",
  },
  {
    id: 17,
    title: "Women Wellness Health Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_19.jpg",
    link: "https://pmchl.com/package-item/women-wellness-health-package/",
  },
  {
    id: 18,
    title: "Pre-Marital Health (Male) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_20.jpg",
    link: "https://pmchl.com/package-item/pre-merital-health-male-package/",
  },
  {
    id: 19,
    title: "Pre-Marital Health (Female) Package",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_21.jpg",
    link: "https://pmchl.com/package-item/pre-merital-health-female-package/",
  },
  {
    id: 20,
    title: "Pre-Employment/ Academic/ VISA",
    image: "/images/package/Pro-Active-Hospital-Health-Package-Magazine_Page_22.jpg",
    link: "https://pmchl.com/package-item/pre-employment-academic-visa/",
  },
]

export default function HealthPackagesPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState("")

  const openFullScreen = (image, title) => {
    setSelectedImage(image)
    setSelectedTitle(title)
    document.body.style.overflow = "hidden"
  }

  const closeFullScreen = () => {
    setSelectedImage(null)
    setSelectedTitle("")
    document.body.style.overflow = "unset"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Health Packages</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive health screening packages designed for your wellness and peace of mind
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer medical-card-hover"
              onClick={() => openFullScreen(pkg.image, pkg.title)}
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Package Title */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#017381] transition-colors duration-300 line-clamp-2">
                  {pkg.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Click to view details</span>
                  <div className="w-8 h-8 bg-[#017381] rounded-full flex items-center justify-center group-hover:bg-[#025a65] transition-colors duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex justify-center items-start pt-4 overflow-y-auto"
          onClick={closeFullScreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullScreen}
            className="fixed top-4 right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title - Positioned over image */}
          <div className="fixed top-4 left-4 right-16 z-60">
            <h2 className="text-white text-lg md:text-xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
              {selectedTitle}
            </h2>
          </div>

          {/* Image Container - Max width 700px, positioned from start */}
          <div className="w-full max-w-[700px] px-4 pt-16">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={selectedTitle} width={800} height={600}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
