import ResearchIdServer from "./ResearchIdServer"

export const dynamic = "force-dynamic"

export default function Page({ params }) {
  return <ResearchIdServer params={Promise.resolve(params)} />
}
