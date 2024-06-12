import Image, { ImageProps, StaticImageData } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import { experts, Person } from '@/contre-expertise/experts'

function Expert(expert: Person) {
  return (
    <>
      {expert.image ?
        <Image
          className="mx-auto h-24 w-24 rounded-full"
          src={expert.image}
          alt={`portrait of ${expert.name}`}
        /> :
        <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />
      }
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {expert.name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{expert.role}</p>
    </>
  )
}

export default function Experts() {
  return (
    <section
      id="experts"
      aria-labelledby="experts-title"
      className="scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-20 lg:pt-32 mb-8"
    >
      <Container className="text-left">
        <SectionHeading number="4" id="experts-title">
          Experts signataires
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Tous ces experts sont concerné·e·s par les risques de l'IA
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Nous avons l'honneur de présenter une liste distinguée d'experts qui
          ont approuvé notre contre-rapport. Ces signataires représentent une
          diversité de domaines, y compris l'intelligence artificielle,
          l'éthique, les politiques publiques et la technologie. Leur expertise
          collective et leur soutien soulignent la crédibilité et l'importance
          de nos conclusions. En unissant nos forces, nous visons à promouvoir
          une approche plus responsable et éthique du développement et de la
          régulation de l'IA en France.
        </p>
      </Container>
      <div className="bg-white pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {experts.map((expert) => (
              <li key={expert.name}>
                <Expert {...expert} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
