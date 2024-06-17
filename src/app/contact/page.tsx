import { Metadata } from "next";
import { SocialLinks } from "@/components/contact-page/social-links";
import { ConatctFormInPortuguese } from "@/components/contact-page/contact-form-in-portuguese";
import { ConatctFormInEnglish } from "@/components/contact-page/contact-form-in-english";


export const metadata: Metadata = {
  title: 'Contact'
}

export default function ContactPage({ searchParams }: Readonly<{searchParams: { lang: string }}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10">
      <div >
        {searchParams.lang === "pt" ? <ConatctFormInPortuguese /> : <ConatctFormInEnglish />}
        <SocialLinks />
      </div>

    </main>
  )
}