import English from "@/components/English/page"
import Portuguese from "@/components/Portuguese/page"
import { Metadata } from "next"
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | The Gibi'
}

export default function HomePage({ searchParams }: {searchParams: { lang: string }}) {
console.log("props", searchParams)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:6">
      {searchParams.lang === "en"? <English /> : <Portuguese />}
    </main>
  )
}
