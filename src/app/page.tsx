import HeroSession from "@/components/HeroSession"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | The Gibi'
}

export default function HomePage({ searchParams }: Readonly<{searchParams: { lang: string }}>) {
  return (
    <div className="min-h-screen">
     <HeroSession />
    </div>
  )
}
