"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock, Users, Award, Stethoscope, Building2, Phone, Star } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function BoardChairmanMessagePage() {
  const [chairmanData, setChairmanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchChairmanData = async () => {
      try {
        const response = await fetch('https://methodical-kindness-fc585984ed.strapiapp.com/api/board-chairman-message?populate=*');
        const data = await response.json();
        if (data.data) {
          setChairmanData(data.data);
        } else {
          setError("No data found");
        }
      } catch (err) {
        setError("Failed to fetch Board Chairman data");
        console.error("Error fetching Board Chairman data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChairmanData();
  }, []);

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
  }, [pathname, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="animate-pulse text-[#017381] text-xl">Loading Board Chairman message...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!chairmanData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-[#017381] text-xl">No Board Chairman data available</div>
      </div>
    );
  }

  // Helper function to render rich text content
  const renderMessageContent = () => {
    return chairmanData.MessageContent.map((paragraph, index) => {
      if (paragraph.children[0].text.trim() === "") return null;
      
      return (
        <p key={index} className="text-lg leading-relaxed text-slate-700 mb-6">
          {paragraph.children[0].text}
        </p>
      );
    });
  };

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
              {/* Chairman Photo */}
              <div className="flex-shrink-0">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Image
                    src={chairmanData.profileImage.url}
                    alt={chairmanData.Name}
                    width={400}
                    height={400}
                    className="w-72 h-72 rounded-full object-cover border-4 border-white/30"
                    priority
                  />
                </div>
              </div>

              {/* Chairman Info */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  Message From Board Chairman
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#b8e6ea]">
                  {chairmanData.Name}
                </h2>
                <p className="text-lg md:text-xl mb-4 text-slate-200">{chairmanData.QualificationsSummary}</p>
                <p className="text-lg font-medium text-white/90">{chairmanData.Position}</p>
                <p className="text-base text-slate-300 mt-2">{chairmanData.HospitalName}</p>
                <p className="text-sm text-slate-400 italic">
                  {chairmanData.sisterConcernText}
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

      {/* Message Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#017381] mb-6">{chairmanData.Name}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#017381] to-[#025a65] mx-auto rounded-full"></div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                      {renderMessageContent()}
                      
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <p className="text-xl font-semibold text-[#017381]">Thank you</p>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#017381] to-[#025a65] rounded-full flex items-center justify-center">
                            <Stethoscope className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {chairmanData.Name}
                            </p>
                            <p className="text-slate-600">{chairmanData.Position}, {chairmanData.HospitalName}</p>
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