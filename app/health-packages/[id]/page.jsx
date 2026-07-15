import HealthPackageIdClient from "./HealthPackageIdClient"

export const dynamic = "force-dynamic"

export default function Page({ params }) {
  return <HealthPackageIdClient params={Promise.resolve(params)} />
}
