import Link from 'next/link'
import { Container } from '@/components/Container'
import Resume from '@/contre-expertise/resume.mdx'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 md:pt-36"
    >
      <Container centered className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Résumé Exécutif
        </p>
        <Resume/>
      </Container>
    </section>
  )
}
