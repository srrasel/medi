"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Search, User, Phone, MessageCircle, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const aboutItems = [
    { name: "Mission and Vision", href: "/mission-vision" },
    { name: "CEO Message", href: "/ceo-message" },
  ]

  const servicesItems = [
    { name: "All Services", href: "/all-services" },
    { name: "Health Package", href: "/health-package" },
  ]

  const newsItems = [
    { name: "All Videos", href: "/all-videos" },
    { name: "Gallery", href: "/gallery" },
    { name: "Success Stories", href: "/success-stories" },
  ]

  return (
    <header className="bg-white shadow-xl border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-[#b8e6ea]" />
                <span className="text-slate-200">Emergency:</span>
                <Link href="tel:01902556060" className="ml-1 font-semibold hover:text-[#b8e6ea] transition-colors">
                  01902556060
                </Link>
              </div>
              <div className="hidden lg:flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-[#b8e6ea]" />
                <span className="text-slate-200">Signborad Mor, Siddhirgonj, Narayangonj</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-sm">
                <MessageCircle className="w-4 h-4 mr-2 text-[#b8e6ea]" />
                <span className="text-slate-200">Hotline:</span>
                <Link href="tel:09666997997" className="ml-1 font-semibold hover:text-[#b8e6ea] transition-colors">
                  09666-997997
                </Link>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm">
                Patient Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/98 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Pro-Active Hospital Logo"
                    width={400}
                    height={102}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Customer Care */}
             

              {/* Book Appointment Button */}
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* Search & User Icons */}
              <div className="hidden lg:flex items-center space-x-2">
                <button className="p-3 text-[#017381] hover:text-white hover:bg-[#017381] rounded-xl transition-all duration-300">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-3 text-[#017381] hover:text-white hover:bg-[#017381] rounded-xl transition-all duration-300">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 text-[#017381] hover:text-white hover:bg-[#017381] rounded-xl transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center py-4">
            <ul className="flex items-center space-x-8 text-gray-700">
              <li>
                <Link
                  href="/"
                  className="relative px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="relative group">
                <button className="flex items-center px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold">
                  About
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <ul className="space-y-2">
                      {aboutItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 block py-3 px-4 rounded-lg font-medium"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/all-consultants"
                  className="relative px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold group"
                >
                  Our Consultants
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <button className="flex items-center px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <ul className="space-y-2">
                      {servicesItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 block py-3 px-4 rounded-lg font-medium"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/department"
                  className="relative px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold group"
                >
                  Department
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              {/* News & Media Dropdown */}
              <li className="relative group">
                <button className="flex items-center px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold">
                  News & Media
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <ul className="space-y-2">
                      {newsItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 block py-3 px-4 rounded-lg font-medium"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/our-corporate-clients"
                  className="relative px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold group"
                >
                  Corporate Clients
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="relative px-4 py-2 hover:text-[#017381] transition-all duration-300 font-semibold group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#017381] to-[#025a65] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-white">
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile About Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  >
                    About
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "about" && (
                    <div className="mt-2 ml-4 space-y-2 bg-white rounded-lg p-3 shadow-lg">
                      {aboutItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 py-2 px-3 rounded-lg"
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
                  className="block text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Consultants
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "services" && (
                    <div className="mt-2 ml-4 space-y-2 bg-white rounded-lg p-3 shadow-lg">
                      {servicesItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 py-2 px-3 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/department"
                  className="block text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Department
                </Link>

                {/* Mobile News & Media Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("news")}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  >
                    News & Media
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === "news" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "news" && (
                    <div className="mt-2 ml-4 space-y-2 bg-white rounded-lg p-3 shadow-lg">
                      {newsItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 py-2 px-3 rounded-lg"
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
                  className="block text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corporate Clients
                </Link>

                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-[#017381] hover:bg-[#017381]/5 transition-all duration-300 font-semibold py-3 px-4 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Action Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <Link
                    href="tel:01902556070"
                    className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Customer Care: 01902556070</span>
                  </Link>
                  <div className="flex space-x-3">
                    <button className="flex-1 p-4 text-[#017381] hover:text-white hover:bg-[#017381] rounded-xl transition-all duration-300 flex items-center justify-center border border-[#017381]">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="flex-1 p-4 text-[#017381] hover:text-white hover:bg-[#017381] rounded-xl transition-all duration-300 flex items-center justify-center border border-[#017381]">
                      <User className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
