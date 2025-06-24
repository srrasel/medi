"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Star, MapPin, Calendar } from "lucide-react"

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const doctors = [
    {
        "id": 1,
        "name": "Prof. Dr. Abdul Hannan",
        "image": "/images/Pro_Dr_Abdul_Hannad.jpg",
        "specialty": "Pediatric Cardiology",
        "position": "Professor & Pediatric Cardiologist",
        "experience": "15+ years",
        "rating": "4.8",
        "reviews": "127",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, FCPS(Ped),Trained in Epidem: & Biostat: (Pakistan),Fellow, Pediatric Cardiology (USA),Trained in Eco-cardiography (Madraz).",
        "profile_url": "https://pmchl.com/doctor-item/prof-dr-abdul-hannan/"
    },
    {
        "id": 2,
        "name": "Prof. Dr. Md. Tazul Islam",
        "image": "/images/dr.-tazul.jpg",
        "specialty": "Internal Medicine",
        "position": "Professor & Consultant",
        "experience": "20+ years",
        "rating": "4.9",
        "reviews": "203",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS, FCPS, Post Fellowship Training (Bangkok, Thailand) Post Fellowship Training JICA, Japan, World Bank Fellowship, Srilanka",
        "profile_url": "https://pmchl.com/doctor-item/professor-dr-md-tazul-islam/"
    },
    {
        "id": 3,
        "name": "Prof. Dr. A.S.M. Qamrul Hasan",
        "image": "/images/Prof_Dr_A_S_M_Kamrul_Hasan.jpg",
        "specialty": "Neurosurgery",
        "position": "Brain & Spine Specialist & Surgeon",
        "experience": "18+ years",
        "rating": "4.7",
        "reviews": "156",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, MS (Neuro), WHO Fellow (Indoesia),Brain & Spine Specialist & Surgeon.",
        "profile_url": "https://pmchl.com/doctor-item/prof-dr-a-s-m-qamrul-hasan-2/"
    },
    {
        "id": 4,
        "name": "Prof. Dr. Md. Abdus Salam",
        "image": "/images/Prof_Dr_M_A_Salaam.jpg",
        "specialty": "General Surgery",
        "position": "General & Laparoscopic Surgeon",
        "experience": "16+ years",
        "rating": "4.6",
        "reviews": "142",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, MS (General Surgery),General & Laparoscopic Surgeon.",
        "profile_url": "https://pmchl.com/doctor-item/prof-dr-md-abdus-salam/"
    },
    {
        "id": 5,
        "name": "Prof. Dr. A, B, M, Younus",
        "image": "/images/Prof.-Dr.-A-B-M-Younus.jpg",
        "specialty": "Hematology",
        "position": "Blood Cancer and Anemia Specialist",
        "experience": "22+ years",
        "rating": "4.9",
        "reviews": "189",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS (India), MPhil (Hons), FCPS (Hematology), Blood Cancer and Anemia Specialist Professor and former Chairman, Department of Hematology Bangabandhu Sheikh Mujib Medical University",
        "profile_url": "https://pmchl.com/doctor-item/prof-dr-a-b-m-younus/"
    },
    {
        "id": 6,
        "name": "Prof. Dr. Colonel Mohammad Nizamul Hossain Sowdagar",
        "image": "/images/Professor_Dr._Colonel_Mohammad_Nizamul_Hossain_Sowdagar-transformed.jpeg",
        "specialty": "Cardiology",
        "position": "Professor & Cardiologist",
        "experience": "19+ years",
        "rating": "4.8",
        "reviews": "174",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS (DU), D-Card(BSMMU), G-Med(AFMI) FCPS(Cardiology), FNIC (NHF&RI), FSCAI (USA)",
        "profile_url": "https://pmchl.com/doctor-item/professor-dr-colonel-mohammad-nizamul-hossain-sowdagar/"
    },
    {
        "id": 7,
        "name": "Prof. Dr. G.M. Faruque",
        "image": "/images/GM-Faruk.jpg",
        "specialty": "Ophthalmology",
        "position": "Professor & Eye Specialist",
        "experience": "17+ years",
        "rating": "4.7",
        "reviews": "198",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, BCS, (Health), MS (Ophth), D.O. (DU)",
        "profile_url": "https://pmchl.com/doctor-item/professor-dr-g-m-faruque/"
    },
    {
        "id": 8,
        "name": "Prof. Dr. Gobinda Chandra Saha",
        "image": "/images/Prof.-Dr.-Govinda-Chandra-Das-1.jpg",
        "specialty": "General Surgery",
        "position": "Professor & Surgeon",
        "experience": "21+ years",
        "rating": "4.8",
        "reviews": "167",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS, FCPS (Surgery), MS (General Surgery) FRCS (Glasgow, UK)",
        "profile_url": "https://pmchl.com/doctor-item/professor-dr-gobinda-chandra-saha/"
    },
    {
        "id": 9,
        "name": "Dr. Sk. Mahmud Hasan",
        "image": "/images/dr.-Sheikh-mahmud.jpg",
        "specialty": "Neurosurgery",
        "position": "Assistant Professor & Neurosurgeon",
        "experience": "12+ years",
        "rating": "4.6",
        "reviews": "134",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS (DMC), BCS (Health), MS (Neurosurgery), National Institute of Neuroscience Hospital, Dhaka",
        "profile_url": "https://pmchl.com/doctor-item/dr-sk-mahmud-hasan/"
    },
    {
        "id": 10,
        "name": "Dr. Md. Mahmud Hasan",
        "image": "/images/Mahmud-Hasan.jpg",
        "specialty": "Urology",
        "position": "Assistant Professor & Urologist",
        "experience": "10+ years",
        "rating": "4.5",
        "reviews": "98",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS, BCS (Health) MS (Urology) Assistant Professor",
        "profile_url": "https://pmchl.com/doctor-item/dr-md-mahmud-hasan/"
    },
    {
        "id": 11,
        "name": "Dr. Abul Hasnat Russel",
        "image": "/images/Dr.Hasnat.jpg",
        "specialty": "Neurology",
        "position": "Medicine & Neuromedicine Specialist Consultant",
        "experience": "14+ years",
        "rating": "4.6",
        "reviews": "112",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, BCS (Health), MD (Neurology), Sir Salimullah Medical College Mitford Hospital, Dhaka",
        "profile_url": "https://pmchl.com/doctor-item/dr-abul-hasnat-russeldr-abul-hasnat-russel-mbbs-bcs-health-md-neurology-sir-salimullah-medical-college-mitford-hospital-dhaka-medicine-neuromedicine-specialist-consultant-visiting-hour-sa/"
    },
    {
        "id": 12,
        "name": "Dr. Mahfuza Akter",
        "image": "/images/Mahfuza-Akter.jpg",
        "specialty": "Ophthalmology",
        "position": "Eye Specialist",
        "experience": "11+ years",
        "rating": "4.5",
        "reviews": "89",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS (Dhaka), BCS (Health), DO (DU), FCPS (Eye)",
        "profile_url": "https://pmchl.com/doctor-item/dr-mahfuza-akter/"
    },
    {
        "id": 13,
        "name": "Dr. Md. Zahidul Hasan",
        "image": "/images/Jahidul.jpg",
        "specialty": "Pediatrics",
        "position": "Neonatal Specialist",
        "experience": "13+ years",
        "rating": "4.7",
        "reviews": "105",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, DCH, MCPS (Pead), FCPS (Neonatal)",
        "profile_url": "https://pmchl.com/doctor-item/dr-md-zahidul-hasan/"
    },
    {
        "id": 14,
        "name": "Dr. Md. Afruzul Alom",
        "image": "/images/Dr_Afruzul.jpg",
        "specialty": "Pediatric Surgery",
        "position": "Pediatric Surgeon",
        "experience": "10+ years",
        "rating": "4.4",
        "reviews": "78",
        "location": "PMCH Hospital",
        "availability": "Available Tomorrow",
        "qualifications": "MBBS, MS (Pediatric Surgery)",
        "profile_url": "https://pmchl.com/doctor-item/dr-aysha-afroz/"
    },
    {
        "id": 15,
        "name": "Dr. Md. Habibur Rahman",
        "image": "/images/Habibur-Rahman-Sir-1.jpg",
        "specialty": "Cardiology",
        "position": "Cardiologist",
        "experience": "12+ years",
        "rating": "4.6",
        "reviews": "94",
        "location": "PMCH Hospital",
        "availability": "Available Today",
        "qualifications": "MBBS, MD (Cardiology)",
        "profile_url": "https://pmchl.com/doctor-item/dr-md-habibur-rahman/"
    }
]

  // Calculate slides for different screen sizes
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const totalSlides = Math.max(0, doctors.length - cardsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Calculate the transform percentage
  const transformPercent = -(currentIndex * (100 / cardsPerView))

  return (
    <div className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center lg:text-left lg:flex lg:justify-between lg:items-end mb-12 lg:mb-16">
          <div className="lg:max-w-2xl mb-8 lg:mb-0">
            <div className="mb-4 lg:mb-6">
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                Our Medical Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
              Meet the experts who care for you
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Our doctors understand that healthcare is personal, and they take the time to get to know each patient,
              listen to their concerns, and involve them in every step of their care journey.
            </p>
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold ml-4">
              All Doctors
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center items-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentIndex >= totalSlides - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Doctors Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out pb-4"
            style={{
              transform: `translateX(${transformPercent}%)`,
            }}
          >
            {doctors.map((doctor) => (
              <div key={doctor.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 lg:px-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group h-full">
                  {/* Doctor Image */}
                  <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          doctor.availability.includes("Today")
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {doctor.availability}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-800">{doctor.rating}</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Specialty Badge */}
                    <div className="mb-3">
                      <span className="text-blue-700 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {doctor.specialty}
                      </span>
                    </div>

                    {/* Name and Position */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-3">{doctor.position}</p>

                    {/* Experience and Reviews */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{doctor.reviews} reviews</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-sm">
                        Book Appointment
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile All Doctors Button */}
        <div className="flex lg:hidden justify-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg font-semibold">
            All Doctors
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Slide Indicators */}
        <div className="hidden lg:flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorsSection
