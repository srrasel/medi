import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { slug } = await params

  try {
    const fetchUrl = `https://api.pmchl.com/api/news`

    console.log(`Fetching blog post: ${fetchUrl}`)

    const response = await fetch(fetchUrl)

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { message: `Failed to fetch blog post with slug "${slug}"`, error: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "Blog post not found" }, { status: 404 })
    }

    const item = data.find(
      (post) =>
        post.slug === slug ||
        post.id.toString() === slug ||
        post.Title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug,
    )

    if (!item) {
      return NextResponse.json({ message: "Blog post not found" }, { status: 404 })
    }

    const transformedPost = {
      id: item.id,
      slug: item.slug || item.id.toString(),
      title: item.Title,
      content: item.Description,
      image: item.Image,
      author: item.Author || "Unknown Author",
      category: item.Category,
      publishedAt: new Date(item.createdAt).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      readTime: "৫ মিনিট পড়ুন",
    }

    return NextResponse.json(transformedPost)
  } catch (error) {
    console.error(`Error in /api/blogs/[slug]:`, error)
    return NextResponse.json({ message: "Error fetching blog post details", error: error.message }, { status: 500 })
  }
}
