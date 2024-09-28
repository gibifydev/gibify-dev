import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { inter } from '@/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://thegibi.dev'),
  title: {
    template: '%s | The Gibi',
    default: 'The Gibi'
  },
  description: 'Software Developer - Next.js | React.js | Electron.js | Typescript | Javascript',
  openGraph: {
    title: 'The Gibi',
    description: 'Software Developer - Next.js | React.js | Electron.js | Typescript | Javascript',
    url: 'https://thegibi.dev',
    siteName: 'The Gibi',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/8S6A6284.jpg',
        width: 1200,
        height: 630,
        alt: 'Evandro Gibicoski',
      },
    ],
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
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.className}`}>
      <body className='bg-white dark:bg-black antialiased h-full w-full'>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PJSG9JS52H" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PJSG9JS52H');
        `}
        </Script>
        <main className='overflow-x-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
