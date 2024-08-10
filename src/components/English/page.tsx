import Link from "next/link"

export default function English() {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl pb-8">
      Hello, welcome. 😀
      <br /> I am Evandro Gibicoski, known as <code>Gibi</code>
      </h1>
      <p className="text-xl">
      As a software developer, I have a passion for creating software solutions. 
      My experience encompasses technologies geared towards the Web and cross-platform Desktop and Mobile applications, allowing me to adapt to constantly changing development environments.
      </p>

      < br />
      <p className="text-xl">
        <code>I hold a degree in Information Technology Management from Unicesumar University of Maringá and a Postgraduate degree in Software Engineering from the Metropolitana University of São Paulo.</code>
      </p>

      < br />
      <p className="text-xl mb-10">
      I currently work as a <strong>Developer Specialist</strong> at <a href="https://www.grupoboticario.com.br/en/home-en/" target="_blank" className="text-[#78866B] font-semibold">Grupo Boticário</a>.
      </p>

      <Link href="/contact" className="text-[#78866B] border border-[#78866B] py-4 px-6 rounded-full font-semibold">Contact me</Link>
    </div>
  )
}
