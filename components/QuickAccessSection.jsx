"use client"

import Link from "next/link"
import { Stethoscope, MapPin, Calendar, Ambulance, ArrowRight } from "lucide-react"

const iconMap = {
  Stethoscope,
  MapPin,
  Calendar,
  Ambulance,
}

export default function QuickAccessSection() {
  const quickAccessItems = [
    {
      title: "Find a Doctor",
      description: "Expert medical professionals at your service",
      icon: "Stethoscope",
      link: "/all-consultants",
      cardBgFrom: "from-[#017381]",
      cardBgTo: "to-[#025a65]",
      iconBgClass: "bg-white/20",
      iconTextClass: "text-white",
      titleTextClass: "text-white",
      descTextClass: "text-slate-200",
      arrowColorClass: "text-white",
    },
    {
      title: "Locate Us",
      description: "Find our hospital location and directions",
      icon: "MapPin",
      link: "/contact-us",
      cardBgFrom: "from-[#4CAF50]",
      cardBgTo: "to-[#66BB6A]",
      iconBgClass: "bg-white/20",
      iconTextClass: "text-white",
      titleTextClass: "text-white",
      descTextClass: "text-green-100",
      arrowColorClass: "text-white",
    },
    {
      title: "Book Appointment",
      description: "Schedule your consultation today",
      icon: "Calendar",
      link: "/doctors",
      cardBgFrom: "from-[#673AB7]",
      cardBgTo: "to-[#7E57C2]",
      iconBgClass: "bg-white/20",
      iconTextClass: "text-white",
      titleTextClass: "text-white",
      descTextClass: "text-purple-100",
      arrowColorClass: "text-white",
    },
    {
      title: "Emergency Hotline",
      description: "24/7 Medical Support",
      icon: "Ambulance",
      link: "tel:01902556070",
      hotline1: "01902556070",
      hotline2: "09666997997",
      cardBgFrom: "from-[#EF5350]",
      cardBgTo: "to-[#E53935]",
      iconTextClass: "text-white",
      titleTextClass: "text-white",
      descTextClass: "text-red-100",
      arrowColorClass: "text-white",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-100 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-lg">
              Quick Access
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Quick Access to
            <span className="block text-[#017381]">Care & Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get the medical attention you need with our comprehensive healthcare services and easy access points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {quickAccessItems.map((item, index) => {
            const IconComponent = iconMap[item.icon]

            // Special rendering for Emergency (no nested <a>)
            if (item.icon === "Ambulance") {
              return (
                <a
                  key={index}
                  href={item.link}
                  className={`group cursor-pointer bg-gradient-to-br ${item.cardBgFrom} ${item.cardBgTo} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col justify-center items-center text-white text-center`}
                >
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div
                      className={`p-6 ${item.iconTextClass} rounded-3xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {IconComponent && <IconComponent className="w-10 h-10" aria-hidden="true" />}
                    </div>
                    <h3 className={`font-bold text-2xl mb-4 ${item.titleTextClass}`}>{item.title}</h3>
                    <div className="block text-3xl font-bold mb-2 text-white">{item.hotline1}</div>
                    <div className="block text-xl font-semibold mb-4 text-red-100">{item.hotline2}</div>
                    <p className={`${item.descTextClass}`}>{item.description}</p>
                  </div>
                </a>
              )
            }

            // Normal cards with Next.js Link
            return (
              <Link
                key={index}
                href={item.link}
                className={`group cursor-pointer bg-gradient-to-br ${item.cardBgFrom} ${item.cardBgTo} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col justify-between text-white`}
              >
                <div className="p-6 flex flex-col h-full">
                  <div
                    className={`p-4 ${item.iconTextClass} rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {IconComponent && <IconComponent className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />}
                  </div>
                  <h3 className={`font-bold text-2xl ${item.titleTextClass} mb-3`}>{item.title}</h3>
                  <p className={`${item.descTextClass} leading-relaxed mb-4 flex-grow`}>{item.description}</p>
                  <div className="flex items-center font-semibold group-hover:opacity-100 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight
                      className={`w-5 h-5 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ${item.arrowColorClass}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
