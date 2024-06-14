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

function Expert(expert: Person) {
  return (
    <>
      {expert.image ? (
        <Image
          className="mx-auto h-24 w-24 rounded-full"
          src={expert.image}
          alt={`portrait of ${expert.name}`}
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
      className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:mx-0 lg:max-w-none xl:grid-cols-6"
    >
      {experts.map((expert) => (
        <li key={expert.name}>
          <Expert {...expert} />
        </li>
      ))}
    </ul>
  )
}

export default function Experts({ expanded = false }) {
  const [toDisplay, setToDisplay] = useState(6)
  
  // calculate the number of experts to display based on the screen size
  useEffect(() => {
    const fullConfig = resolveConfig(tailwindConfig)
    const updateToDisplay = () => {
      const width = window.innerWidth
      if (width >= Number.parseInt(fullConfig.theme.screens.xl.slice(0, -2))) {
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
  }, [])

  return (
    <section
      id="experts"
      aria-labelledby="experts-title"
      className="mb-8 scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-20 lg:pt-32"
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
          <ExpertList experts={experts.slice(0, toDisplay)} />
          <Disclosure
            as="div"
            className="mt-14 flex justify-center"
            defaultOpen={expanded}
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
    </section>
  )
}
