import { Container } from '@/components/Container'
import { Report } from '@/components/Report'
import Script from 'next/script'
import '@/styles/paged.css'
import PagedProvider from '@/components/PagedContext'
import metadata from '@/contre-expertise/metadata.json'

export default function FullReport() {
  return (
    <PagedProvider>
      <Script src="scripts/paged.polyfill.min.js" />
      <section
        id="cover"
        aria-label="Page de garde"
        className="cover flex h-screen items-center print:break-after-page"
      >
        <Container className="text-pretty text-center text-lg tracking-tight text-slate-700">
          <h1 className="font-display text-6xl font-bold tracking-tight text-slate-900">
            {metadata.title}
          </h1>
        </Container>
      </section>
      <Report />
    </PagedProvider>
  )
}
