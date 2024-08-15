'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import { experts, Person } from '@/contre-expertise/experts'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

import { useContext } from 'react'
import { PagedContext } from '@/components/PagedContext'
import { associations } from '@/contre-expertise/associations'
import { Button } from './Button'

function Expert(expert: Person) {
  const paged = useContext(PagedContext)
  return (
    <>
      {expert.image ? (
        <Image
          className="mx-auto h-24 w-24 rounded-full"
          src={expert.image}
          alt={`portrait of ${expert.name}`}
          loading={paged ? 'eager' : 'lazy'}
        />
      ) : (
        <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />
      )}
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {expert.name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{expert.role}</p>
    </>
  )
}

function ExpertList({ experts }: { experts: Person[] }) {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 print:grid-cols-5 print:max-w-none print:mx-0"
    >
      {experts.map((expert) => (
        <li key={expert.name} className="print:break-inside-avoid">
          <Expert {...expert} />
        </li>
      ))}
    </ul>
  )
}

export default function Signataires() {
  const [toDisplay, setToDisplay] = useState(6)
  const paged = useContext(PagedContext)
  
  // calculate the number of experts to display based on the screen size
  useEffect(() => {
    const fullConfig = resolveConfig(tailwindConfig)
    const updateToDisplay = () => {
      const width = window.innerWidth
      if (paged) {
        setToDisplay(experts.length)
      } else if (
        width >= Number.parseInt(fullConfig.theme.screens.xl.slice(0, -2))
      ) {
        setToDisplay(12)
      } else if (
        width >= Number.parseInt(fullConfig.theme.screens.lg.slice(0, -2))
      ) {
        setToDisplay(10)
      } else if (
        width >= Number.parseInt(fullConfig.theme.screens.md.slice(0, -2))
      ) {
        setToDisplay(8)
      } else if (
        width >= Number.parseInt(fullConfig.theme.screens.sm.slice(0, -2))
      ) {
        setToDisplay(6)
      } else {
        setToDisplay(4)
      }
    }
    updateToDisplay()
    window.addEventListener('resize', updateToDisplay)
    return () => window.removeEventListener('resize', updateToDisplay)
  }, [paged])

  return (
    <section
      id="signataires"
      aria-labelledby="signataires-title"
      className="mb-8 scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-20 lg:pt-32"
    >
      <Container className="text-left">
        <SectionHeading number="4" id="signataires-title">
          Signataires
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
      <div className="bg-white pt-24 mb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ExpertList experts={experts.slice(0, toDisplay)} />
          <Disclosure
            as="div"
            className="mt-14 flex justify-center"
            defaultOpen={paged}
          >
            <Transition
              enter="duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="duration-300 ease-out"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <DisclosurePanel className="w-full origin-top transition">
                <ExpertList experts={experts.slice(toDisplay)} />
              </DisclosurePanel>
            </Transition>
            <DisclosureButton className="group h-5">
              <div className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700 group-data-[open]:hidden">
                Voir plus de signataires
                <ChevronDownIcon className="ml-2 size-5 fill-slate-900 group-data-[hover]:fill-slate-700" />
              </div>
            </DisclosureButton>
          </Disclosure>
        </div>
      </div>
      <Container className="text-left">
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
