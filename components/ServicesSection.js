import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const ServicesSection = () => {
  const services = [
    {
      title: "ICU",
      image_url: "/images/ICU-Final.jpeg",
      read_more_link: "https://pmchl.com/service-item/icu/",
    },
    {
      title: "CCU",
      image_url: "/images/CCU-Final.jpeg",
      read_more_link: "https://pmchl.com/service-item/ambulance-service-2/",
    },
    {
      title: "NICU",
      image_url: "/images/NICU-Final.jpeg",
      read_more_link: "https://pmchl.com/service-item/nicu/",
    },
    {
      title: "PICU",
      image_url: "/images/464683711_1058648339603436_1958753658212568146_n-1.jpg",
      read_more_link: "https://pmchl.com/service-item/picu/",
    },
    {
      title: "Dialysis",
      image_url: "/images/Dialysis-1-scaled.jpg",
      read_more_link: "https://pmchl.com/service-item/dialysis/",
    },
    {
      title: "Physiotherapy",
      image_url: "/images/Physioteraphy-scaled.jpg",
      read_more_link: "https://pmchl.com/service-item/physiotherapy/",
    },
    {
      title: "Endoscopy",
      image_url: "/images/Endoscopy-scaled.jpg",
      read_more_link: "https://pmchl.com/service-item/endoscopy-2/",
    },
    {
      title: "CT-Scan",
      image_url: "/images/CT-Scan-scaled.jpg",
      read_more_link: "https://pmchl.com/service-item/endoscopy/",
    },
    {
      title: "Cash & Billing",
      image_url: "/images/Cash-Billing-scaled.jpg",
      read_more_link: "https://pmchl.com/service-item/hdu/",
    },
  ]

  return (
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What we do</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our state-of-the-art facility is equipped with the latest medical technology, and our team of experienced
              professionals is committed to delivering personalized, compassionate care.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image_url || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <a
                  href={service.read_more_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
          <div className="relative z-10 p-8 lg:p-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Experience healthcare redefined with excellence and care.
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our comprehensive medical services are designed to provide you with the highest quality care in a
                comfortable and supportive environment.
              </p>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 hover:shadow-lg">
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
