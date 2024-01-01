import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Gibify'
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-w-5xl px-4">
        Olá, seja bem vindo. <br /> Sou Evandro Gibicoski.
      </h1>
    </main>
  )
}
