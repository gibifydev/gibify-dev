import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Gibify Dev'
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-w-5xl px-4">
        Olá, seja bem vindo. Sou Evandro Gibicoski, <br /> conhecido como <code>gibi</code>,
        por isso Gibify, junção do nickname gibi e a palavra identify, gibi + ify = gibify.  <br />
        gibi meu apelido e ify meu identificador, como sou identificado.
      </h1>
    </main>
  )
}
