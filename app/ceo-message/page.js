"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock, Users, Award, Stethoscope, Building2, Phone, Star } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
export default function CEOMessagePage() {
   const pathname = usePathname();
  useEffect(() => {
     
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  const credentials = [
    "MPhil, MPH, MBBS",
    "Former National Consultant, BRAC Health Program(BHP), BRAC",
    "Former Commandant, Armed Forces Medical Institute",
    "Former Commandant, Combined Military Hospital(CMH), Chittagong",
    "Former Director, Dhaka Medical College Hospital",
    "Former Director, Rajshahi Medical College Hospital",
    "Former Director, Kurmitola General Hospital",
    "Former Director, DNCC Dedicated Covid-19 Hospital",
  ]

  const services = [
    {
      title: "24/7 Intensive Care Unit (ICU) & Coronary Care Unit (CCU)",
      description: "Providing advanced critical care for life-threatening conditions.",
      icon: Heart,
    },
    {
      title: "Neonatal & Pediatric Intensive Care Units (NICU & PICU)",
      description: "Ensuring specialized care for our youngest and most vulnerable patients.",
      icon: Users,
    },
    {
      title: "Round-the-Clock Operating Theaters (OTs)",
      description: "Ready for emergency and scheduled surgical procedures at any time.",
      icon: Clock,
    },
    {
      title: "Inpatient & Outpatient Departments (IPD & OPD)",
      description:
        "Offering expert consultations, diagnostics and long-term care solutions. We also provide Physiotherapy & Dialysis Services.",
      icon: Building2,
    },
    {
      title: "Emergency & Trauma Services",
      description: "With a dedicated team available 24/7 to respond to any medical crisis.",
      icon: Phone,
    },
  ]

  const pillars = [
    { name: "Excellence", icon: Award },
    { name: "Integrity", icon: Shield },
    { name: "Kindness", icon: Heart },
    { name: "Inclusion", icon: Users },
    { name: "Respect", icon: Star },
    { name: "Safety", icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* CEO Photo */}
              <div className="flex-shrink-0">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Image
                    src="/images/Brig.-Gen.-Dr.-AKM-Nasir-Uddin-Retd.-2-1.jpg?height=300&width=300"
                    alt="Brigadier General (Dr.) AKM Nasir Uddin"
                    width={400}
                    height={400}
                    className="w-72 h-72 rounded-full object-cover border-4 border-white/30"
                  />
                </div>
              </div>

              {/* CEO Info */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  Message From CEO
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#b8e6ea]">
                  Brigadier General (Dr.) AKM Nasir Uddin (retd.)
                </h2>
                <p className="text-lg md:text-xl mb-4 text-slate-200">MPhil, MPH, MBBS</p>
                <p className="text-lg font-medium text-white/90">CEO (Chief Executive Officer)</p>
                <p className="text-base text-slate-300 mt-2">Pro-Active Hospital</p>
                <p className="text-sm text-slate-400 italic">
                  (A Sister Concern Of Pro-Active Medical College And Hospital Ltd.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">Brigadier General (Dr.) AKM Nasir Uddin (retd.)</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
            </div>

           
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed text-slate-700 mb-6">MPhil, MPH, MBBS

Former National Consultant, BRAC Health Program(BHP), BRAC

Former Commandant, Armed Forces Medical Institute

Former Commandant, Combined Military Hospital(CMH), Chittagong

Former Director, Dhaka Medical College Hospital

Former Director, Rajshahi Medical College Hospital

Former Director, Kurmitola General Hospital

Former Director, DNCC Dedicated Covid-19 Hospital</p>
                     <p className="text-xl leading-relaxed text-slate-700 mb-6">
                      Pro-Active Hospital (A sister concern of Pro-Active Medical College &amp; Hospital Ltd.), a leading
tertiary level multidisciplinary hospital. This hospital is dedicated to providing comprehensive and
life-saving healthcare services to its clients.

                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      At Pro-Active Hospital, we believe that every life matters and we are committed to delivering
                      exceptional, patient-centered care through our state-of-the-art medical facilities and highly
                      skilled healthcare professionals.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 mb-8">
                      Our Hospital is built on the pillar of excellence, integrity, kindness, inclusion, respect and
                      safety.
                    </p>

  <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      We take pride in offering a full spectrum of emergency and specialized services, ensuring that
                      critical care is always within reach. Our hospital is equipped with:
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      We are more than just a hospital – we are a trusted partner in your health journey. Whether you
                      need urgent medical attention, specialized treatment, or preventive care, our mission is to ensure
                      quality, safety and compassion in every service we provide.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      As we embrace the future of healthcare, we are committed to continuous innovation, medical
                      research and advanced technology to provide you with the best possible treatment outcomes. We
                      invited you to stay connected with us, provide feedback and be a part of our mission to create a
                      healthier and stronger community.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      Thank you for your trust in Pro-Active Hospital. We are here for you-24/7, always ready to serve
                      and save lives.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 mb-4">
                      Stay safe, blessed and healthy. Let us take care of you.
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <p className="text-xl font-semibold text-[#017381]">Thank you</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center">
                          <Stethoscope className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">
                            Brigadier General (Dr.) AKM Nasir Uddin (retd.)
                          </p>
                          <p className="text-slate-600">CEO, Pro-Active Hospital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </section>

    
   


    
    </div>
  )
}
