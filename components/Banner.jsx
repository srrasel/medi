'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Banner() {
  const [bannerUrl, setBannerUrl] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        setLoading(true)
        const strapiBaseUrl = 'https://methodical-kindness-fc585984ed.strapiapp.com'
        const fetchUrl = `${strapiBaseUrl}/api/banners?populate=*`

        const res = await fetch(fetchUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!res.ok) throw new Error(`Failed to fetch banner: ${res.status}`)

        const json = await res.json()
        

        const latestBanner = json.data?.[0]
        const imageUrl =
          latestBanner?.BannerImage?.url || latestBanner?.BannerImage?.url

        if (!imageUrl) throw new Error('Banner image URL not found')

        const fullUrl = imageUrl.startsWith('http')
          ? imageUrl
          : `${strapiBaseUrl}${imageUrl}`

        setBannerUrl(fullUrl)
      } catch (err) {
        console.error('Failed to fetch banner:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBanner()
  }, [])

  if (loading) {
    return (
      <div style={{ height: '600px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading banner...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ height: '600px', backgroundColor: '#ffebee', color: '#d32f2f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        Error: {error}
      </div>
    )
  }

  if (!bannerUrl) return null

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Image
        src={bannerUrl}
        alt="Banner"
        fill
        style={{ objectFit: 'cover' }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
  )
}
