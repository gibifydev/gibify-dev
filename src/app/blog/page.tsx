import path from 'node:path';
import fs from 'node:fs';
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'As defesas espirituais dentro do castelo de sua mente - Como ENRIQUECER com PAZ DE ESPÍRITO de NAPOLEON HIL',
}

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), 'public/13f672b5835680738233d85ad5a8b474.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-[1024px] mx-auto" >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  )
}