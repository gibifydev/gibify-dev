import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import Script from 'next/script'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gibify.dev'),
  title: {
    template: '%s | Gibify Dev',
    default: 'Gibify Dev'
  },
  description: 'Frontend Developer - Next.js | React.js | Electron.js | Typescript | Javascript | Shopify',
  openGraph: {
    title: 'Gibify Dev',
    description: 'Frontend Developer - Next.js | React.js | Electron.js | Typescript | Javascript | Shopify',
    url: 'https://gibify.dev',
    siteName: 'Gibify Dev',
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
    title: 'Gibify Dev',
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
    <html lang="en" className={clsx('', {})}>
      <body className={inter.variable}>
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
