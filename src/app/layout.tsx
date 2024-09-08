import { type Metadata } from 'next'
import { Bricolage_Grotesque, Chivo_Mono, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
  preload: true,
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-bricolage',
  preload: true,
})

const chivo = Chivo_Mono({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-chivo',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Everything Starts as a Square - Get lost in the world of icon design',
  description:
    'A book and video course that teaches you how to design your own icons from scratch.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        bricolage.variable,
        chivo.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
