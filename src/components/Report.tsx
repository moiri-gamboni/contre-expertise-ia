import { Container } from '@/components/Container'
import Risques from '@/contre-expertise/risques.mdx'
import Conflits from '@/contre-expertise/conflits.mdx'
import Solutions from '@/contre-expertise/solutions.mdx'
import { ReportSection } from '@/components/ReportSection'

export function Report() {
  return (
    <Container className="text-lg tracking-tight text-slate-700">
      <ReportSection id="risques" number="1" navTitle="Risques de l’IA">
        <Risques />
      </ReportSection>
      <ReportSection id="conflits" number="2" navTitle="Conflits d’intérêts">
        <Conflits />
      </ReportSection>
      <ReportSection id="solutions" number="3" navTitle="Solutions">
        <Solutions />
      </ReportSection>
    </Container>
  )
}
