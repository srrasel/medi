"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function JobDetailsPage({ params }) {
  const { id } = use(params)

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/carrier-jobs")
        if (!response.ok) throw new Error("Failed to fetch jobs")
        const data = await response.json()
        const foundJob = data.find((j) => j.id === Number.parseInt(id))
        if (!foundJob) throw new Error("Job not found")
        setJob(foundJob)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [id])

  const formatSalary = (salary) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(salary)
  }


  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading job details...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error || !job) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back to Careers
          </Link>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-700">{error || "Job not found"}</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[#017381]  font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Job Details */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Job Image */}
          {job.image && (
            <div className="mb-8 rounded-lg overflow-hidden bg-gray-100 h-96">
              <img src={job.image || "/placeholder.svg"} alt={job.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Job Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{job.title}</h1>
            
          </div>
            <div className="mt-8  mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Posted Date</h3>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(job.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Salary</h3>
              <p className="text-lg font-semibold text-[#017381]">{formatSalary(job.salary)}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Job ID</h3>
              <p className="text-lg font-semibold text-gray-900">#{job.id}</p>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{job.description}</p>
          </div>

          {/* Job Meta Information */}
        

          {/* Apply Section */}
          
        </div>
      </section>
    </main>
  )
}
