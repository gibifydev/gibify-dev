import { GoogleGeminiEffectDemo } from "@/components/acerternity-ui/google-gemini-effect"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Portfolio'
}

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <GoogleGeminiEffectDemo />
    </main>
  )
}