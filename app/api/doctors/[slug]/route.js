import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { slug } = params

  try {
    const fetchUrl = "https://api.pmchl.com/api/doctors"

    console.log(`Attempting to fetch doctor with slug "${slug}": ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API error: ${response.status} - ${errorText}`)
      return NextResponse.json(
        { message: `Failed to fetch doctor with slug "${slug}"`, error: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()

    const doctorsArray = Array.isArray(data) ? data : []

    if (!Array.isArray(doctorsArray)) {
      return NextResponse.json({ message: "Invalid doctors response" }, { status: 500 })
    }

    const item = doctorsArray.find((doc) => doc && doc.slug === slug)

    if (!item) {
      return NextResponse.json({ message: "Doctor not found" }, { status: 404 })
    }

    const transformedDoctor = {
      id: item.id,
      name: item.Name,
      specialty: item.Specialty,
      qualifications: item.Qualifications,
      position: item.Position,
      bio: item.Bio, // HTML content
      image: item.image,
      link: `/doctor/${item.slug}`,
    }

    return NextResponse.json(transformedDoctor)
  } catch (error) {
    console.error(`Error in /api/doctors/[slug]:`, error)
    return NextResponse.json({ message: "Error fetching doctor details", error: error.message }, { status: 500 })
  }
}
