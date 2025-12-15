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
      {job.Image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={job.Image || "/placeholder.svg"}
            alt={job.Title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Job Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{job.Title}</h3>

        {/* Salary
        <div className="mb-4">
          <p className="text-2xl font-bold text-[#017381]">{formatSalary(job.salary)}</p>
          <p className="text-sm text-gray-500">per month</p>
        </div> */}

        {/* Description */}
        
          <div
                      className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: job.Description }}
                    />

        {/* Toggle Button */}
        

        <Link href={`/careers/${job.id}`}>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
