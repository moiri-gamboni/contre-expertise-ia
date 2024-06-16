import clsx from 'clsx'
import { SectionHeading } from '@/components/SectionHeading'

interface ReportSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  number: string
  navTitle: string
}

export function ReportSection({
  id,
  number,
  navTitle,
  children,
  ...props
}: ReportSectionProps) {
  const titleId = `${id}-title`
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-20 lg:pt-32 print:break-after-avoid"
      {...props}
    >
      <SectionHeading
        id={titleId}
        number={number}
      >
        {navTitle}
      </SectionHeading>
      {children}
    </section>
  )
}
