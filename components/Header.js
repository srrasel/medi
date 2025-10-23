"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Search, User, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TopHeader from "./TopHeader"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const aboutItems = [
    { name: "Mission and Vision", href: "/mission-vision"},
    //   { name: "Message From Board Chairman", href: "/board-chairman-message"},
    // { name: "Message From EC Chairman", href: "/ec-chairmain-message"},
    { name: "CEO Message", href: "/ceo-message"},
    { name: "Careers", href: "/careers" },
  ]


  const servicesItems = [
    { name: "All Services", href: "/services", description: "Complete medical services" },
    { name: "Health Package", href: "/health-packages", description: "Comprehensive health plans" },
  ]

  const newsItems = [
    { name: "News", href: "/blog", description: "Medical news" },
    { name: "All Videos", href: "/all-videos", description: "Medical education videos" },
    { name: "Gallery", href: "/gallery", description: "Hospital photo gallery" },
    { name: "Success Stories", href: "/success-stories", description: "Patient testimonials" },
  ]

  return (
    <>
      {/* Top Info Bar - Only visible when not scrolled */}
     <TopHeader isScrolled={isScrolled} />

      {/* Main Header - Sticky */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200" : "bg-white shadow-xl"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-500 ${
                isScrolled ? "py-4" : "py-6"
              }`}
            >
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                <Link href="/" className="group flex items-center space-x-4">
                  <div className="relative">
                    {/* Logo Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#017381]/20 to-[#025a65]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <Image
                      src="/images/logoa.png"
                      alt="Pro-Active Hospital"
                      width={isScrolled ? 300 : 350}
                      height={isScrolled ? 76 : 89}
                      className="relative transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>

              {/* Navigation Menu */}
              <nav className="flex items-center space-x-1">
                <Link
                  href="/"
                  className="relative px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300 group"
                >
                  Home
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* About Dropdown */}
                <div className="relative group">
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300">
                    About
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                     
                      <div className="space-y-2">
                        {aboutItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 group"
                          >
                            <div className="font-semibold text-gray-800 group-hover:text-[#017381] transition-colors">
                              {item.name}
                            </div>
                          
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/all-consultants"
                  className="relative px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300 group"
                >
                  Consultants
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300">
                    Services
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6">
                     
                      <div className="space-y-2">
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 group"
                          >
                            <div className="font-semibold text-gray-800 group-hover:text-[#017381] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/departments"
                  className="relative px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300 group"
                >
                  Departments
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* News & Media Dropdown */}
                <div className="relative group">
                  <button className="flex items-center px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300">
                    Media
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6">
                      
                      <div className="space-y-2">
                        {newsItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 group"
                          >
                            <div className="font-semibold text-gray-800 group-hover:text-[#017381] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/our-corporate-clients"
                  className="relative px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300 group"
                >
                  Clients
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="/contact"
                  className="relative px-4 py-2 text-gray-700 hover:text-[#017381] font-semibold transition-all duration-300 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {/* Search Button */}
               

                

                {/* Book Appointment Button */}
                <Link
                  href="/appointments"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl flex items-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Calendar className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-4">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logoa.png"
                  alt="Pro-Active Hospital"
                  width={280}
                  height={71}
                  className="transition-all duration-300"
                />
              </Link>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-3">
                {/* Mobile Book Appointment */}
                <Link
                  href="/appointments"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center text-sm font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  Appointment
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-3 text-[#017381] hover:text-white hover:bg-gradient-to-r hover:from-[#017381] hover:to-[#025a65] rounded-xl transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-100 bg-gradient-to-br from-slate-50 to-white">
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="block text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🏠 Home
                  </Link>

                  {/* Mobile About Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown("about")}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    >
                      <span>📋 About</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === "about" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "about" && (
                      <div className="mt-2 ml-4 space-y-1 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                        {aboutItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 py-3 px-4 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/all-consultants"
                    className="block text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    👨‍⚕️ Our Consultants
                  </Link>

                  {/* Mobile Services Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown("services")}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    >
                      <span>🏥 Services</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "services" && (
                      <div className="mt-2 ml-4 space-y-1 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 py-3 px-4 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/departments"
                    className="block text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🏢 Departments
                  </Link>

                  {/* Mobile News Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleDropdown("news")}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    >
                      <span>📰 Media</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === "news" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "news" && (
                      <div className="mt-2 ml-4 space-y-1 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                        {newsItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 py-3 px-4 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/our-corporate-clients"
                    className="block text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🏢 Corporate Clients
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-gray-700 hover:text-[#017381] hover:bg-gradient-to-r hover:from-[#017381]/5 hover:to-[#025a65]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    📞 Contact
                  </Link>

                  {/* Mobile Emergency Contact */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <Link
                      href="tel:01902556070"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Emergency: 01902556070</span>
                    </Link>

                    

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
