import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Gibify'
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:6">
      <div>
        <h1 className="text-3xl lg:text-5xl pb-8">
          Olá, seja bem vindo. 😀
          <br /> Sou Evandro Gibicoski, conhecido como <code>Gibi</code>
        </h1>
        <p className="text-xl">
          Como desenvolvedor de software, tenho uma paixão por criar soluções de software.
          Minha experiência abrange tecnologias voltadas para a Web e aplicativos Desktop multiplataforma, permitindo-me adaptar-me em ambientes de desenvolvimento em constante mudança.
        </p>

        < br />
        <p className="text-xl">
          Sou formado em <code>Gestão da Tecnologia da Informação</code> pela <code>Faculdade Unicesumar de Maringá</code> e <code>Pós Graduado(MBA) em Engenharia de Softaware</code> pela <code>Universidade Metropoliana de SP</code>
        </p>

        < br />
        <p className="text-xl">
          Atualmente trabalho como Desenvolvedor de Software Frontend (Web e Desktop)
        </p>
      </div>
    </main>
  )
}
