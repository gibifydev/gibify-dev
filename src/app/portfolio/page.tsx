import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Portfolio'
}

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-w-5xl px-4">
        Portfolio, em breve terá Portfolio
      </h1>
    </main>
  )
}