import { Container } from '@/components/Container'
import Risques from './sections/risques.mdx'
import Conflits from './sections/conflits.mdx'
import Solutions from './sections/solutions.mdx'
import { ReportSection } from './ReportSection'

export default function Report() {
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
