"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, Download, Loader2, AlertCircle } from "lucide-react"
import PDFViewer from "@/components/pdf-viewer"

export default function ResearchDetailContent({ id }) {
  const [publication, setPublication] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showPDF, setShowPDF] = useState(false)

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await fetch("https://api.pmchl.com/api/research-publications")
        if (!response.ok) throw new Error("Failed to fetch publication")
        const data = await response.json()
        const pub = data.find((p) => p.id === Number.parseInt(id))
        if (!pub) throw new Error("Publication not found")
        setPublication(pub)
        setError(null)
      } catch (err) {
        setError(err.message)
        setPublication(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPublication()
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#017381]" />
          <p className="text-gray-600">Loading publication details...</p>
        </div>
      </div>
    )
  }

  if (error || !publication) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600 mb-6">{error || "Publication not found"}</p>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 bg-[#017381] text-white px-6 py-3 rounded-xl hover:bg-[#025a65] transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-[#017381] hover:text-[#025a65] transition-colors mb-4 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">{publication.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>
              Published:{" "}
              {new Date(publication.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {publication.updatedAt && (
              <span>
                Updated:{" "}
                {new Date(publication.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </div>

        {/* Image Section */}
        {publication.image && (
          <div
            className="mb-8 rounded-3xl overflow-hidden bg-gray-200 shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => publication.pdf && setShowPDF(true)}
          >
             <PDFViewer pdfUrl={publication.pdf} title={publication.title} />
          </div>
        )}

       
        {/* PDF Viewer */}
        {showPDF && publication.pdf && (
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <button
                onClick={() => setShowPDF(false)}
                className="text-[#017381] hover:text-[#025a65] font-semibold flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Close PDF
              </button>
            </div>
            <PDFViewer pdfUrl={publication.pdf} title={publication.title} />
          </div>
        )}
      </div>
    </main>
  )
}
