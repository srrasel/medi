import { Suspense } from "react"
import ResearchDetailContent from "@/components/research-detail-content"

export default async function ResearchDetailPage({ params }) {
  const { id } = await params

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-[#017381] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-600">Loading publication details...</p>
          </div>
        </div>
      }
    >
      <ResearchDetailContent id={id} />
    </Suspense>
  )
}
