import English from "@/components/English/page"
import Portuguese from "@/components/Portuguese/page"
import Spanish from "@/components/Spanish/page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | The Gibi'
}

export default function HomePage({ searchParams }: Readonly<{searchParams: { lang: string }}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 mt-[20%]">
      {searchParams.lang === "en" ? <English /> : searchParams.lang === "es" ? <Spanish /> : <Portuguese />}
    </main>
  )
}
