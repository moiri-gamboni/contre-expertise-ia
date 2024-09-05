import Link from 'next/link'
import { Container } from '@/components/Container'
import ResumeContent from '@/contre-expertise/resume.mdx'

export function Resume() {
  return (
    <section id="resume" aria-label="resume" className="pb-16 pt-20 md:pt-36">
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Résumé Exécutif
        </p>
        <ResumeContent />
      </Container>
    </section>
  )
}
