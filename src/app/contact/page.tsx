import { Metadata } from "next";
import { SocialMediaLinks } from "@/components/contact-page/social-media-links";
import { ConatctForm } from "@/components/contact-page/contact-form";

export const metadata: Metadata = {
  title: 'Contact'
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-10">
      <div>
        <ConatctForm />
        <SocialMediaLinks />
      </div>

    </main>
  )
}