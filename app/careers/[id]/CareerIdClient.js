"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, AlertCircle, Upload } from "lucide-react"
import { apiJsonList } from "@/lib/api"

export default function JobDetailsPage({ params }) {
  const { id } = use(params)

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [formState, setFormState] = useState({ success: false, message: "", error: "" })

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true)
        const jobs = await apiJsonList("/api/carrier-jobs")
        const foundJob = jobs.find((j) => String(j.id) === String(id))
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsPending(true)
    setFormState({ success: false, message: "", error: "" })

    try {
      const formData = new FormData(event.currentTarget)

      const response = await fetch("/api/send-job-application", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setFormState({ success: true, message: result.message, error: "" })
        event.currentTarget.reset()
      } else {
        setFormState({ success: false, message: "", error: result.error })
      }
    } catch {
      setFormState({
        success: false,
        message: "",
        error: "Something went wrong. Please try again.",
      })
    } finally {
      setIsPending(false)
    }
  }

  const formatSalary = (salary) => {
    const amount = Number(salary)
    if (salary === null || salary === undefined || salary === "" || Number.isNaN(amount)) {
      return "Negotiable"
    }
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#017381]"></div>
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
            className="inline-flex items-center gap-2 text-[#017381] hover:text-[#025a65] font-semibold mb-8"
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

  const title = job.Title || job.title || "Untitled Position"
  const description = job.Description || job.description || ""
  const image = job.Image || job.image
  const location = job.Location || job.location
  const salary = job.Salary ?? job.salary

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[#017381] font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Careers
          </Link>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {image && (
            <div className="mb-8 rounded-lg overflow-hidden bg-gray-100 h-64 md:h-96 relative">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}

          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              {location && <p className="text-lg text-gray-600">{location}</p>}
            </div>
            <a
              href="#apply-form"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shrink-0"
            >
              Apply Now
            </a>
          </div>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Posted Date</h3>
              <p className="text-lg font-semibold text-gray-900">
                {job.createdAt
                  ? new Date(job.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Salary</h3>
              <p className="text-lg font-semibold text-gray-900">{formatSalary(salary)}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Job ID</h3>
              <p className="text-lg font-semibold text-gray-900">#{job.id}</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
            {description ? (
              <div
                className="text-gray-600 text-sm leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-gray-500">No description available.</p>
            )}
          </div>

          <div id="apply-form" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm scroll-mt-24">
            <div className="bg-gradient-to-r from-[#017381] to-[#025a65] p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">Apply for this Position</h2>
              <p className="text-[#b8e6ea]">Submit your application for: {title}</p>
            </div>

            <div className="p-6 md:p-8">
              {(formState.success || formState.error) && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    formState.success
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      formState.success ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {formState.success ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span className="font-medium">
                      {formState.success ? formState.message : formState.error}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="jobId" value={job.id} />
                <input type="hidden" name="position" value={title} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      id="experience"
                      name="experience"
                      type="text"
                      placeholder="e.g. 3 years"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={5}
                    placeholder="Tell us why you're a good fit for this role..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent resize-y"
                  />
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload CV / Resume
                  </label>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017381] focus:border-transparent file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-[#017381]/10 file:text-[#017381] file:font-medium"
                  />
                  <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
                    <Upload className="w-3 h-3" />
                    PDF, DOC, or DOCX (optional)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200"
                >
                  {isPending ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
