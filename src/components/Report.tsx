import { Container } from '@/components/Container'
import ReportContent from '@/contre-expertise/processed.mdx'

export function Report() {
  return (
    <Container className="text-lg text-pretty tracking-tight text-slate-700">
      <ReportContent />
    </Container>
  )
}
