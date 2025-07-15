import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { slug } = params

  try {
    const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://promchl.onrender.com/api"
    const fetchUrl = `${strapiBaseUrl}/doctors?filters[slug][$eq]=${slug}&populate=*`

    console.log(`Attempting to fetch doctor with slug "${slug}": ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Strapi error: ${response.status} - ${errorText}`)
      return NextResponse.json(
        { message: `Failed to fetch doctor with slug "${slug}"`, error: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data.data || data.data.length === 0) {
      return NextResponse.json({ message: "Doctor not found" }, { status: 404 })
    }

    const item = data.data[0]

    const imageUrl = item.image?.url
      ? `${item.image.url}`
      : "/placeholder.svg"

    const transformedDoctor = {
      id: item.id,
      name: item.Name,
      specialty: item.Specialty,
      qualifications: item.Qualifications,
      position: item.Position,
      image: imageUrl,
      link: `/doctor/${item.slug}`,
    }

    return NextResponse.json(transformedDoctor)
  } catch (error) {
    console.error(`Error in /api/doctors/[slug]:`, error)
    return NextResponse.json(
      { message: "Error fetching doctor details", error: error.message },
      { status: 500 }
    )
  }
}
