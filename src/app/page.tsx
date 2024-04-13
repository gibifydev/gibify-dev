import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Gibify'
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:6">
      <div>
        <h1 className="text-3xl lg:text-5xl pb-8">
          Olá, seja bem vindo. <br /> Sou Evandro Gibicoski.
        </h1>
        <p className="text-xl">
          Como desenvolvedor de software, tenho uma paixão profunda por resolver problemase criar soluções de software.
          Minha experiência abrange linguagens de programação e tecnologias voltadas para a Web e aplicativos Desktop multiplataforma, permitindo-me adaptar-me e prosperar em ambientes de desenvolvimento em constante mudança.
          Estou sempre buscando novos desafios e oportunidades para expandir ainda mais minhas habilidades e contribuir para projetos inovadores.
        </p>
      </div>
    </main>
  )
}
