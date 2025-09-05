import { NextResponse } from "next/server"

export async function GET() {
  try {
    const fetchUrl = "https://api.pmchl.com/api/news"

    console.log(`Attempting to fetch from API: ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to fetch blog posts: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error("API response is not an array.")
    }

    const transformedPosts = data.map((item) => {
      return {
        id: item.id,
        image: item.Image || "/placeholder.svg",
        alt: item.Title,
        title: item.Title,
        slug: item.id, // Using id as slug since no slug field provided
        content: item.Description,
        author: item.Author,
        category: item.Category,
        date: new Date(item.createdAt).getDate().toString(),
        month: new Date(item.createdAt).toLocaleString("en-US", { month: "short" }),
        readTime: "5 min read",
        link: `/blog/${item.id}`,
      }
    })

    return NextResponse.json(transformedPosts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ message: "Error fetching blog posts", error: error.message }, { status: 500 })
  }
}
