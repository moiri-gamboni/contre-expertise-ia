import { Container } from '@/components/Container'

interface PartProps {
  title: string
  slug: string
  contentHTML: string
}

export function Part({ title, slug, contentHTML }: PartProps) {
  return (
    <section
      id={slug}
      aria-label={title}
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container
        className="text-lg tracking-tight text-slate-700"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </section>
  )
}
