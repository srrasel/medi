"use client"
import { useState } from "react"
import { Menu, X, ChevronDown, Search, User, Mail, Phone, MessageCircle, Calendar, MapPin } from "lucide-react"
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


  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <Image
                  src="/images/logo.png"
                  alt="Unico Hospitals Logo"
                  width={400}
                  height={100}
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                
              </Link>
            </div>

            {/* Contact Info & Actions */}
            <div className="flex items-center space-x-2 lg:space-x-6">
              {/* Phone */}
              <Link
                href="tel:09677667766"
                className="hidden md:flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm group"
              >
                <div className="p-2 bg-green-50 rounded-lg mr-3 group-hover:bg-green-100 transition-colors">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">	Hotline</div>
                  <div className="font-semibold">09666-997997</div>
                </div>
              </Link>

              {/* Mobile Phone */}
              <Link
                href="tel:09677667766"
                className="md:hidden flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span>Call</span>
              </Link>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {/* Book Appointment Button */}
                <button className="hidden lg:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl items-center text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </button>

                {/* Ask Question Button */}
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2.5 rounded-xl flex items-center text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Ask Question</span>
                  <span className="sm:hidden">Ask</span>
                </button>

                {/* Search & User Icons */}
                <div className="hidden lg:flex items-center space-x-2">
                  <button className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
                    <User className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center py-4">
          <ul className="flex items-center space-x-8 text-gray-700">
            <li>
              <Link
                href="/"
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
              {/* About Dropdown */}
            <li className="relative group">
              <button className="flex items-center px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold">
                About
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <ul className="space-y-2">
                    {aboutItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 block py-2.5 px-3 rounded-lg"
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
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                Our Consultants
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

               {/* services Dropdown */}
            <li className="relative group">
              <button className="flex items-center px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold">
                Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <ul className="space-y-2">
                    {servicesItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 block py-2.5 px-3 rounded-lg"
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
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                Department
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/news-media"
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                News & Media
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
              <li>
              <Link
                href="/our-corporate-clients"
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
               Corporate Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative px-4 py-2 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

          
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Home
              </Link>
              <Link
                href="/doctors"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Doctors
              </Link>

              {/* Mobile Department Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("department")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Department
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "department" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "department" && (
                  <div className="mt-2 ml-4 space-y-2">
                    {departments.slice(0, 8).map((dept, index) => (
                      <Link
                        key={index}
                        href={dept.href}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                      >
                        {dept.name}
                      </Link>
                    ))}
                    <Link
                      href="/department"
                      className="block text-sm text-blue-600 font-medium mt-3 py-2 px-3 rounded-lg bg-blue-50"
                    >
                      All Departments →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "services" && (
                  <div className="mt-2 ml-4 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Clinical Services</h4>
                      <div className="space-y-1">
                        {services.clinical.slice(0, 5).map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-blue-50"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/services"
                      className="block text-sm text-blue-600 font-medium mt-3 py-2 px-3 rounded-lg bg-blue-50"
                    >
                      All Services →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/packages"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Packages
              </Link>
              <Link
                href="/news-events"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                News & Events
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
              >
                Contact
              </Link>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "about" && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="flex-1 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
