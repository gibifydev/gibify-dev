import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import Script from 'next/script'
import { roboto } from '@/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://gibify.dev'),
  title: {
    template: '%s | Gibify',
    default: 'Gibify'
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
    title: 'Gibify',
    card: 'summary_large_image',
  },
  verification: {
    google: 'sZBNKj3ES3N4nxR1SuSwD-gt9GHerVOkvr1vX7b3G_E',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
