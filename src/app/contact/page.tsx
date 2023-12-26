import { Metadata } from "next";
import { SocialLinks } from "@/components/contact-page/social-links";
import { ConatctForm } from "@/components/contact-page/contact-form";

export const metadata: Metadata = {
  title: 'Contact'
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10">
      <div>
        <ConatctForm />
        <SocialLinks />
      </div>

    </main>
  )
}