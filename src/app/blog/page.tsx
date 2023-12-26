import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog'
}

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-w-5xl px-4">
        Blog, em breve terá conteúdo
      </h1>
    </main>
  )
}