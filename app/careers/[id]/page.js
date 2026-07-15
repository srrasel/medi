import CareerIdClient from "./CareerIdClient"

export const dynamic = "force-dynamic"

export default function Page({ params }) {
  return <CareerIdClient params={Promise.resolve(params)} />
}
