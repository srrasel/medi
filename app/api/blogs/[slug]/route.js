import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { slug } = params

  try {
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
    const baseUrl = strapiApiUrl.replace("/api", "")
    const fetchUrl = `${strapiApiUrl}/blogs?filters[Slug][$eq]=${slug}&populate=*`

    console.log(`Fetching blog post: ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { message: `Failed to fetch blog post with slug "${slug}"`, error: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data.data || data.data.length === 0) {
      return NextResponse.json({ message: "Blog post not found" }, { status: 404 })
    }

    const item = data.data[0]

    const imageUrl = item.Image?.formats?.medium?.url || item.Image?.url
    const fullImageUrl = imageUrl ? `${imageUrl}` : "/placeholder.svg"

    const transformedPost = {
      id: item.id,
      slug: item.Slug,
      title: item.Title,
      content: item.Content,
      image: fullImageUrl,
      author: item.Author || "Unknown Author",
      publishedAt: new Date(item.publishedAt).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      readTime: "৫ মিনিট পড়ুন",
    }

    return NextResponse.json(transformedPost)
  } catch (error) {
    console.error(`Error in /api/blogs/[slug]:`, error)
    return NextResponse.json(
      { message: "Error fetching blog post details", error: error.message },
      { status: 500 }
    )
  }
}
