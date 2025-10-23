"use client"

import { useState } from "react"
import Link from "next/link"

export default function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatSalary = (salary) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(salary)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Job Image */}
      {job.image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={job.image || "/placeholder.svg"}
            alt={job.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Job Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{job.title}</h3>

        {/* Salary */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-[#017381]">{formatSalary(job.salary)}</p>
          <p className="text-sm text-gray-500">per month</p>
        </div>

        {/* Description */}
        <p className={`text-gray-600 text-sm leading-relaxed mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>
          {job.description}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#017381] hover:text-[#017381] font-semibold text-sm mb-4 transition-colors"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>

        <Link href={`/careers/${job.id}`}>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
