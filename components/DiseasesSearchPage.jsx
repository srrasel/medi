"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import SearchInput from "./SearchInput"

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function DiseasesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleAlphabetClick = (letter) => {
    router.push(`/diseases?query=${letter.toLowerCase()}`)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/diseases?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    
    <div className=" py-6">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Alphabet Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Find Diseases & Conditions By Alphabet</h2>

            <div className="grid grid-cols-9 gap-3">
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant="outline"
                  size="sm"
                  className="w-12 h-12 rounded-full border-2  border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-black-700 font-medium bg-transparent cursor-pointer transition-all"
                  onClick={() => handleAlphabetClick(letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Search Diseases and Conditions</h2>

            <SearchInput />

            <p className="text-gray-600 leading-relaxed">
              Quickly find the information you need. Search our database to explore detailed information on various
              diseases and conditions, including symptoms, causes, and treatment options.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
