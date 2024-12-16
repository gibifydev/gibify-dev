import { Metadata } from "next"
import data from "../../data/articles.json"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Aqui eu reúno escritos, frases e pensamentos que encontro no meu dia a dia, fruto das minhas pesquisas e leituras no decorrer da vida.',
}

export default async function BlogPage() {

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-10 max-w-[1024px] mx-auto" >
      <h1 className="text-2xl mb-4">
        Olá! Eu sou Evandro Gibicoski, o Gibi. Espero que goste o que vai encontrar aqui 😊
      </h1>
      <h3 className="text-xl mb-20">
        Aqui eu reúno escritos, frases e pensamentos que encontro no meu dia a dia, 
        fruto das minhas pesquisas e leituras no decorrer da vida.</h3>
      <ul className="flex flex-col gap-4">
        {data.articles.map((article) => (
        <li key={article.id} className="border px-6 py-3 rounded-full hover:border-neutral-950 cursor-pointer">
          <a href={article.url} target="_blank">{article.title}</a>
        </li>
        ))}
      </ul>
    </main>
  )
}
