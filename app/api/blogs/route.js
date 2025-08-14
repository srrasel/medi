import { NextResponse } from "next/server"

export async function GET() {
  try {
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    const fetchUrl = `${strapiApiUrl}/blogs?populate=*`

    console.log(`Attempting to fetch from Strapi: ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to fetch blog posts: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Strapi response 'data' field is missing or not an array.")
    }

    const transformedPosts = data.data.map((item) => {
      const imageUrl = item.Image?.formats?.medium?.url || item.Image?.url
      const fullImageUrl = imageUrl ? `${imageUrl}` : "/placeholder.svg"

      return {
        id: item.id,
        image: fullImageUrl,
        alt: item.Title,
        title: item.Title,
        slug: item.Slug,
        content: item.Content,
        author: item.Author,
        date: new Date(item.publishedAt).getDate().toString(),
        month: new Date(item.publishedAt).toLocaleString("en-US", { month: "short" }),
        readTime: "5 min read", // fallback as no 'readTime' field exists
        link: `/blog/${item.Slug}`,
      }
    })

    return NextResponse.json(transformedPosts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ message: "Error fetching blog posts", error: error.message }, { status: 500 })
  }
}
