'use client'

import Associations from '@/components/Associations'
import { Container } from '@/components/Container'
import Experts from '@/components/Experts'
import { Report } from '@/components/Report'
import Script from 'next/script'
import '@/styles/paged.css'
import { PagedContext } from '@/components/PagedContext'

export default function FullReport() {
  return (
    <PagedContext.Provider value={true}>
      <Script src="scripts/paged.polyfill.min.js" />
      <section
        id="cover"
        aria-label="Page de garde"
        className="cover flex h-screen items-center print:break-after-page"
      >
        <Container className="text-center text-lg tracking-tight text-slate-700">
          <h1 className="font-display text-6xl font-bold tracking-tight text-slate-900">
            Contre-expertise IA
          </h1>
        </Container>
      </section>
      <Report />
      <Experts />
      <Associations />
    </PagedContext.Provider>
  )
}
