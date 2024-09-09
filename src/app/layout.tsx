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
  title: 'IA : Nos craintes pour la France',
  description: "Contre-expertise au rapport de la Commission de l'IA.",
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
