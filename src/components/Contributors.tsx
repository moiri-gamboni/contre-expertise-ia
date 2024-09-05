import React from 'react'
import { Container } from '@/components/Container'
import { Association, AssociationList } from '@/components/AssociationList'

import openAILogo from '@/images/associations/open_ai.svg'
import openAIWhiteLogo from '@/images/associations/open_ai_white.svg'

export const associations: Array<Association> = [
  {
    title: 'Open AI',
    image: openAILogo,
    url: '#',
    background: 'light',
  },
  {
    title: 'Open AI2',
    image: openAIWhiteLogo,
    url: '#',
    background: 'dark',
  },
  {
    title: 'Open AI3',
    image: openAILogo,
    url: '#',
    background: 'light',
  },
]

export default function Contributors() {
  return (
    <section
      id="contributors"
      aria-labelledby="contributors-title"
      className="pb-16 sm:pb-20 lg:pb-32"
    >
      <Container className="text-center">
        <p
          id="contributors-title"
          className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900"
        >
          Les associations qui ont contribué à ce projet
        </p>
      </Container>
      <AssociationList associations={associations} />
    </section>
  )
}
