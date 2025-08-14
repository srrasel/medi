export async function GET() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/heroes?populate=*`

    const res = await fetch(apiUrl)

    if (!res.ok) {
      throw new Error(`Strapi API responded with ${res.status}`)
    }

    const { data } = await res.json()

    if (!data || data.length === 0) {
      return Response.json({ error: 'No hero data found' }, { status: 404 })
    }

    const hero = data[0]
    const attributes = hero || {}

    const transformMedia = (mediaField) => {
      return mediaField?.url
        ? {
            url: mediaField.url,
            name: mediaField.name || null,
            mime: mediaField.mime || null,
            size: mediaField.size || null,
          }
        : null
    }

    const transformedData = {
      id: hero.id,
      videoDesktop: transformMedia(attributes.videoDesktop),
      videoMobile: transformMedia(attributes.videoMobile),
    }

    return Response.json(transformedData)
  } catch (error) {
    console.error('Error in /api/hero:', error)
    return Response.json(
      { error: 'Failed to fetch hero data', details: error.message },
      { status: 500 }
    )
  }
}
