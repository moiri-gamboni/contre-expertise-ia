'use client'

import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import effisciencesLogo from '@/images/associations/effisciences.svg'
import openAILogo from '@/images/associations/open_ai.svg'
import openAIWhiteLogo from '@/images/associations/open_ai_white.svg'
import { Button } from "./Button";

import { useContext } from 'react'
import { PagedContext } from '@/components/PagedContext'

interface Association {
  title: string
  image: StaticImageData
  url: string
  background: 'light' | 'dark'
}

const associations: Array<Association> = [
  {
    title: 'Effisciences',
    image: effisciencesLogo,
    url: '#',
    background: 'light',
  },
  {
    title: 'Open AI',
    image: openAILogo,
    url: '#',
    background: 'light',
  },
  {
    title: 'Effisciences2',
    image: effisciencesLogo,
    url: '#',
    background: 'dark',
  },
  {
    title: 'Open AI2',
    image: openAIWhiteLogo,
    url: '#',
    background: 'dark',
  },
]

export default function Associations() {
  const paged = useContext(PagedContext)
  return (
    <section
      id="associations"
      aria-labelledby="associations-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="5" id="associations-title">
          Associations
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Toutes ces associations partagent notre engagement pour une IA
          responsable et éthique.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Nous sommes fiers de présenter une liste d'associations qui
          soutiennent notre contre-rapport. Ces organisations, actives dans
          divers domaines tels que l'éthique, la technologie, et les politiques
          publiques, apportent une richesse de perspectives et de valeurs à
          notre initiative. Leur engagement et leur appui renforcent notre appel
          à une révision de la stratégie de l'IA en France, mettant en avant la
          nécessité d'une approche plus transparente, éthique et orientée vers
          le bien public.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        {/* <div className="bg-white py-24 sm:py-32"> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-1 gap-2 overflow-hidden p-1 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3">
            {associations.map((association) => (
              <Button
                variant="card"
                color={association.background}
                key={association.title}
                href={association.url}
                className="print:break-inside-avoid"
              >
                <Image
                  className="h-20 w-full object-contain "
                  src={association.image}
                  alt={`${association.title} logo`}
                  style={{ fill: 'white' }}
                  unoptimized // image optimization should be disabled for SVGs
                  loading={paged ? 'eager' : 'lazy'}
                />
              </Button>
            ))}
          </div>
        </div>
        {/* </div> */}
      </Container>
    </section>
  )
}
