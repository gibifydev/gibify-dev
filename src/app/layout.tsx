import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import Script from 'next/script'
import { inter } from '@/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://gibify.dev'),
  title: {
    template: '%s | The Gibi',
    default: 'The Gibi'
  },
  description: 'Frontend Developer - Next.js | React.js | Electron.js | Typescript | Javascript | Shopify',
  openGraph: {
    title: 'Gibify',
    description: 'Frontend Developer - Next.js | React.js | Electron.js | Typescript | Javascript | Shopify',
    url: 'https://gibify.dev',
    siteName: 'Gibify',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'The Gibi',
    card: 'summary_large_image',
  },
  verification: {
    google: 'sZBNKj3ES3N4nxR1SuSwD-gt9GHerVOkvr1vX7b3G_E',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PJSG9JS52H" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PJSG9JS52H');
        `}
        </Script>
        <Navbar />
        <main className='max-w-[1024px] mx-auto mt-5 lg:mt-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
