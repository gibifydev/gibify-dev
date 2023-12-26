import { Metadata } from "next";
import { SocialMediaLinks } from "@/components/contact-page/social-media-links";

export const metadata: Metadata = {
  title: 'Contact'
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <SocialMediaLinks />
    </main>
  )
}