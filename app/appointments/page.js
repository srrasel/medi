"use client"

import { useState } from "react"
import { useActionState } from "react"
import { sendAppointmentEmail } from "@/actions/send-appointment-email"
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Heart,
  Users,
  Award,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Ambulance,
} from "lucide-react"

export default function AppointmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("consultation")

  const [state, formAction, isPending] = useActionState(sendAppointmentEmail, { success: false, message: "" })

  const departments = [
    "Department of Gynaecology",
    "Department of Cardiology",
    "Department of Neurology",
    "Department of Orthopedics",
    "Department of Pediatrics",
    "Department of Internal Medicine",
    "Department of Ophthalmology",
    "Department of ENT",
    "Department of Dermatology",
    "Department of Psychiatry",
  ]

  const doctors = [
    "Prof. Dr. Abdul Hannan - Child Specialist",
    "Prof. Dr. Md. Tazul Islam - Psychiatry",
    "Prof. Dr. A.S.M. Qamrul Hasan - Neuro Surgery",
    "Prof. Dr. Md. Abdus Salam - General Surgery",
    "Prof. Dr. A, B, M, Younus - Blood Disease Specialist",
    "Prof. Dr. Colonel Mohammad Nizamul Hossain - Cardiology",
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ]

  const contactServices = [
    {
      title: "Customer Care",
      phone: "01902556070",
      description: "General inquiries and patient support",
      icon: Phone,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      available: "24/7 Available",
    },
    {
      title: "Ambulance Service",
      phone: "01902556060",
      description: "24/7 Emergency ambulance service",
      icon: Ambulance,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      available: "Emergency Only",
    },
    {
      title: "Medical Hotline",
      phone: "09666-997997",
      description: "24/7 Medical emergency hotline",
      icon: Heart,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      available: "24/7 Available",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-full border border-white/30 shadow-lg">
              Book Your Appointment
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Schedule Your Visit
            <span className="block text-[#b8e6ea]">Expert Care Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Book an appointment with our experienced medical professionals and get the healthcare you deserve
          </p>
        </div>
      </section>

      
      {/* Appointment Booking Form */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
              <p className="text-xl text-gray-600">Fill out the form below to schedule your visit</p>
            </div>

            {/* Success/Error Messages */}
            {state && (state.success || state.error) && (
              <div
                className={`mb-8 p-4 rounded-xl ${state.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
              >
                <div className={`flex items-center space-x-2 ${state.success ? "text-green-800" : "text-red-800"}`}>
                  {state.success ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <span className="font-medium">{state.success ? state.message : state.error}</span>
                </div>
              </div>
            )}

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#017381] to-[#025a65] p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Appointment Details</h3>
                <p className="text-[#b8e6ea]">Please provide your information and preferred appointment time</p>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <form action={formAction} className="space-y-6">
                  {/* Hidden input for appointment type */}
                  <input type="hidden" name="appointmentType" value={appointmentType} />

                  {/* Appointment Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Appointment Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: "consultation", label: "General Consultation", icon: Stethoscope },
                        { value: "emergency", label: "Emergency Visit", icon: AlertCircle },
                        { value: "followup", label: "Follow-up", icon: CheckCircle },
                      ].map((type) => {
                        const IconComponent = type.icon
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setAppointmentType(type.value)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center space-x-3 ${
                              appointmentType === type.value
                                ? "border-[#017381] bg-[#017381]/5 text-[#017381]"
                                : "border-gray-200 hover:border-[#017381]/50 text-gray-600"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="font-medium">{type.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                        placeholder="Enter your age"
                      />
                    </div>
                  </div>

                  {/* Department and Doctor Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                      <div className="relative">
                        <select
                          name="department"
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300 appearance-none"
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept, index) => (
                            <option key={index} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Doctor</label>
                      <div className="relative">
                        <select
                          name="doctor"
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300 appearance-none"
                        >
                          <option value="">Any Available Doctor</option>
                          {doctors.map((doctor, index) => (
                            <option key={index} value={doctor}>
                              {doctor}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                      <div className="relative">
                        <select
                          name="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300 appearance-none"
                          required
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300 resize-none"
                      placeholder="Please describe your symptoms or reason for visit..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Calendar className="w-6 h-6" />
                      <span>{isPending ? "Sending..." : "Book Appointment"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Our Medical Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get immediate assistance from our healthcare professionals through multiple contact channels
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-opacity-50 transform hover:-translate-y-2`}
                >
                  <div className="text-center">
                    <div
                      className={`p-6 bg-gradient-to-r ${service.color} text-white rounded-3xl inline-block mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>
                    <div className="mb-4">
                      <a
                        href={`tel:${service.phone}`}
                        className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block`}
                      >
                        {service.phone}
                      </a>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>{service.available}</span>
                      </div>
                    </div>
                    <a
                      href={`tel:${service.phone}`}
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-xl text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group-hover:shadow-2xl`}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <AlertCircle className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Emergency?</h2>
            <p className="text-xl mb-8 text-red-100">
              For immediate medical attention, don&apos;t wait for an appointment. Call our emergency services now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01902556060"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Ambulance className="w-6 h-6" />
                <span>Call Ambulance: 01902556060</span>
              </a>
              <a
                href="tel:09666997997"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Emergency Hotline: 09666-997997</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visit Our Hospital</h2>
              <p className="text-xl text-gray-600">Find us easily with our location and contact details</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#017381]/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#017381]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hospital Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Signboard Mor, Siddhirgonj
                      <br />
                      Narayangonj, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#017381]/10 rounded-xl">
                    <Clock className="w-6 h-6 text-[#017381]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Operating Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 9:00 AM - 5:00 PM</p>
                      <p className="text-red-600 font-semibold">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#017381]/10 rounded-xl">
                    <Mail className="w-6 h-6 text-[#017381]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email Contact</h3>
                    <p className="text-gray-600">info@proactivehospital.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#017381]/5 to-[#025a65]/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Users className="w-8 h-8 text-[#017381] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#017381] mb-1">150+</div>
                    <div className="text-gray-600">Expert Doctors</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Heart className="w-8 h-8 text-[#017381] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#017381] mb-1">24/7</div>
                    <div className="text-gray-600">Emergency Care</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Stethoscope className="w-8 h-8 text-[#017381] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#017381] mb-1">25+</div>
                    <div className="text-gray-600">Departments</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Award className="w-8 h-8 text-[#017381] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#017381] mb-1">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
