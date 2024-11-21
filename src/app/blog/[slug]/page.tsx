import path from 'node:path';
import fs from 'node:fs';
import data from "../../../data/articles.json";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const article = data.articles.find((article) => article.id === params.slug);
  return {
    title: article?.title,
  }
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = data.articles.find((article) => article.id === params.slug);
  const filePath = article ? path.join(process.cwd(), article.content) : "";
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-[1024px] mx-auto" >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  )
}
