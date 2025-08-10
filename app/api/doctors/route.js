import { NextResponse } from "next/server"

// Alternative endpoint that fetches ALL doctors using pagination
export async function GET() {
  try {
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    
    let allDoctors = []
    let page = 1
    let hasMore = true
    const pageSize = 100 // Fetch 100 doctors per request
    
    while (hasMore) {
      const fetchUrl = `${strapiApiUrl}/doctors?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      console.log(`Fetching page ${page} from Strapi: ${fetchUrl}`)
      
      const response = await fetch(fetchUrl)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Strapi response not OK: ${response.status} - ${errorText}`)
        throw new Error(`Failed to fetch doctors from Strapi: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Strapi response 'data' field is missing or not an array.")
      }

      // Add doctors from this page
      allDoctors = [...allDoctors, ...data.data]
      
      // Check if there are more pages
      const pagination = data.meta?.pagination
      if (pagination) {
        hasMore = page < pagination.pageCount
        console.log(`Page ${page}/${pagination.pageCount} - Got ${data.data.length} doctors (Total so far: ${allDoctors.length})`)
      } else {
        // If no pagination info, check if we got fewer results than requested
        hasMore = data.data.length === pageSize
      }
      
      page++
      
      // Safety check to prevent infinite loops
      if (page > 50) {
        console.warn("Stopped fetching after 50 pages to prevent infinite loop")
        hasMore = false
      }
    }

    console.log(`Total doctors fetched from all pages: ${allDoctors.length}`)

    const transformedDoctors = allDoctors.map((item) => {
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

    console.log(`Transformed ${transformedDoctors.length} doctors for frontend`)
    return NextResponse.json(transformedDoctors)
    
  } catch (error) {
    console.error("Error in /api/doctors/all:", error)
    return NextResponse.json(
      { message: "Error fetching all doctors", error: error.message },
      { status: 500 }
    )
  }
}
