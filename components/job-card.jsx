"use client"

import Link from "next/link"
import Image from "next/image"

export default function JobCard({ job }) {
  const title = job.Title || job.title || "Untitled Position"
  const description = job.Description || job.description || ""
  const image = job.Image || job.image
  const location = job.Location || job.location
  const salaryRaw = job.Salary ?? job.salary
  const salary =
    salaryRaw !== null && salaryRaw !== undefined && salaryRaw !== ""
      ? Number(salaryRaw)
      : null

  const formatSalary = (amount) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        {location && <p className="text-sm text-gray-500 mb-3">{location}</p>}

        <div className="mb-4">
          {salary !== null && !Number.isNaN(salary) ? (
            <>
              <p className="text-2xl font-bold text-[#017381]">{formatSalary(salary)}</p>
              <p className="text-sm text-gray-500">per month</p>
            </>
          ) : (
            <p className="text-lg font-semibold text-[#017381]">Salary Negotiable</p>
          )}
        </div>

        {description && (
          <div
            className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <Link href={`/careers/${job.id}`}>
          <button className="w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
