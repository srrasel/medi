import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiUrl = "https://api.pmchl.com/api/diseases"
    console.log(`Fetching diseases from: ${apiUrl}`)

    const response = await fetch(apiUrl)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API error: ${response.status} - ${errorText}`)
      return NextResponse.json({ message: "Failed to fetch doctors", error: errorText }, { status: response.status })
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      console.error("Diseases response was not an array", data)
      return NextResponse.json({ message: "Diseases response was not an array" }, { status: 500 })
    }

    const transformedDiseases = data
      .filter((item) => item && item.id)
      .map((item) => ({
        id: item.id,
        name: item.Name,
        description: item.description,
        image: item.image || "/placeholder.svg",
        link: `/diseases/${item.id}`,
      }))

    return NextResponse.json(transformedDiseases)
  } catch (error) {
    console.error("Error in /api/diseases:", error)
    return NextResponse.json({ message: "Error fetching doctors", error: error.message }, { status: 500 })
  }
}
