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
      My experience encompasses technologies geared towards the Web and cross-platform Desktop adn Mobile applications, allowing me to adapt to constantly changing development environments.
      </p>

      < br />
      <p className="text-xl">
        <code>I hold a degree in Information Technology Management from Unicesumar University of Maringá and a Postgraduate degree in Software Engineering from the Metropolitan University of São Paulo.</code>
      </p>

      < br />
      <p className="text-xl mb-10">
      I currently work as a Frontend Software Developer (Web, Mobile, and Desktop).
      </p>

      <Link href="/contact" className="text-green-600 border border-green-600 py-4 px-6 rounded-full">Contact me</Link>
    </div>
  )
}
