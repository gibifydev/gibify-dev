import Link from "next/link"

export default function Portuguese() {
  return (
    <div className="p-4">
    <h1 className="text-3xl lg:text-5xl pb-8">
      Olá, seja bem vindo. 😀
      <br /> Sou Evandro Gibicoski, conhecido como <code>Gibi</code>
    </h1>
    <p className="text-xl">
    Como desenvolvedor de software, sou apaixonado por criar soluções inovadoras. 
    Minha experiência abrange tecnologias voltadas para a Web e aplicativos Desktop multiplataforma, permitindo-me adaptar a ambientes de desenvolvimento em constante evolução.
    </p>

    < br />
    <p className="text-xl">
      <code>Sou formado em Gestão da Tecnologia da Informação pela Faculdade Unicesumar de Maringá e Pós-Graduado em Engenharia de Software pela Universidade Metropolitana de SP.</code>
    </p>

    < br />
    <p className="text-xl mb-10">
      Atualmente, trabalho como <strong>Desenvolvedor Especialista</strong> no <a href="https://www.grupoboticario.com.br/" target="_blank" className="text-[#78866B] font-semibold">Grupo Boticário</a>.
    </p>

    <Link href="/contact" className="text-[#78866B] border border-[#78866B] py-4 w-full px-6 rounded-full font-semibold">Entre em contato</Link>
  </div>
  )
}
