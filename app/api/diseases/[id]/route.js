import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { slug } = params

  try {
    const fetchUrl = "https://api.pmchl.com/api/diseases"

    console.log(`Attempting to fetch disease with slug "${slug}": ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API error: ${response.status} - ${errorText}`)
      return NextResponse.json(
        { message: `Failed to fetch disease with slug "${slug}"`, error: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()

    const diseasesArray = Array.isArray(data) ? data : []

    if (!Array.isArray(diseasesArray)) {
      return NextResponse.json({ message: "Invalid diseases response" }, { status: 500 })
    }

    const item = diseasesArray.find((doc) => doc && doc.slug === slug)

    if (!item) {
      return NextResponse.json({ message: "disease not found" }, { status: 404 })
    }

    const transformeddisease = {
      id: item.id,
      name: item.Name,
      Description: item.Description,
      image: item.Image,
      createdAt: item.createdAt,
      link: `/disease/${item.id}`,
    }

    return NextResponse.json(transformeddisease)
  } catch (error) {
    console.error(`Error in /api/diseases/[id]:`, error)
    return NextResponse.json({ message: "Error fetching disease details", error: error.message }, { status: 500 })
  }
}
