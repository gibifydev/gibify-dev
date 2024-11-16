import { Metadata } from "next"
import data from "../../data/articles.json"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'As defesas espirituais dentro do castelo de sua mente - Como ENRIQUECER com PAZ DE ESPÍRITO de NAPOLEON HIL',
}

export default async function BlogPage() {

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-10 max-w-[1024px] mx-auto" >
      <h1 className="text-2xl mb-20">Olá 😊! <br />Aqui eu reúno escritos, frases e pensamentos que encontro no meu dia a dia, fruto das minhas pesquisas e leituras sobre a vida.</h1>
      <ul>
        {data.articles.map((article) => (
        <li key={article.id} className="flex flex-col gap-2">
          <a href={`/blog/${article.id}`} className="border px-6 py-3 rounded-full hover:border-neutral-950">{article.title}</a>
        </li>
        ))}
      </ul>
    </main>
  )
}