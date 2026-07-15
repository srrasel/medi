import VideoIdClient from "./VideoIdClient"

export async function generateStaticParams() {
  try {
    const response = await fetch("https://api.pmchl.com/api/videos", {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return []
    }

    const videos = await response.json()

    return videos.map((video) => ({
      id: String(video.id),
    }))
  } catch {
    return []
  }
}

export default function Page() {
  return <VideoIdClient />
}
