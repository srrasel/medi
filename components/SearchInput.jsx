"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchInput() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/diseases?query=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center py-2 mx-auto">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search diseases and conditions..."
          className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-3 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  )
}
