import Link from "next/link"

export default function Portuguese() {
  return (
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
      <code>Sou formado em Gestão da Tecnologia da Informação pela Faculdade Unicesumar de Maringá e Pós Graduado em Engenharia de Softaware pela Universidade Metropoliana de SP.</code>
    </p>

    < br />
    <p className="text-xl mb-10">
      Atualmente trabalho como Desenvolvedor de Software Frontend (Web, Mobile e Desktop).
    </p>

    <Link href="/contact" className="text-green-600 border border-green-600 py-4 px-6 rounded-full">Entre em contato</Link>
  </div>
  )
}
