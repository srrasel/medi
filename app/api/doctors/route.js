import { NextResponse } from "next/server"

export async function GET() {
  try {
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    const fetchUrl = `${strapiApiUrl}/doctors?populate=*`

    console.log(`Attempting to fetch from Strapi: ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Strapi response not OK: ${response.status} - ${errorText}`)
      throw new Error(`Failed to fetch doctors from Strapi: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log("Raw Strapi data received (JSON):", JSON.stringify(data, null, 2))

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Strapi response 'data' field is missing or not an array.")
    }

    const transformedDoctors = data.data.map((item) => {
      const imageUrl = item.image?.url
        ? `${item.image.url}`
        : "/placeholder.svg"

      return {
        id: item.id,
        name: item.Name,
        specialty: item.Specialty,
        qualifications: item.Qualifications,
        position: item.Position,
        image: imageUrl,
        link: `/doctor/${item.slug}`,
      }
    })

    return NextResponse.json(transformedDoctors)
  } catch (error) {
    console.error("Error in /api/doctors:", error)
    return NextResponse.json(
      { message: "Error fetching doctors", error: error.message },
      { status: 500 }
    )
  }
}
