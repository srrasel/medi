"use client"

import { useState, useEffect } from "react"
import JobCard from "@/components/job-card"

export default function CareersPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.pmchl.com/api/carrier-jobs")
        if (!response.ok) throw new Error("Failed to fetch jobs")
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#017381] via-[#025a65] to-[#034a52]  text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Join Our Team</h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance">
            Explore exciting career opportunities and grow with us
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Loading job opportunities...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700">Error loading jobs: {error}</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No job openings available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
