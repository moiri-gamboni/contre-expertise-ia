import Image, { ImageProps, StaticImageData } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'
import { SectionHeading } from './SectionHeading'

interface Person {
  name: string
  role: string
  image?: StaticImageData
}

const experts: Array<Person> = [
  {
    name: 'Antonio Littel',
    role: 'Frontend Developer',
    image: avatarImage3,
  },
  {
    name: 'Lynn Nolan',
    role: 'Growth Marketer',
    // image: avatarImage4,
  },
  {
    name: 'Krista Prosacco',
    role: 'Professional Designer',
    image: avatarImage9,
  },
  {
    name: 'Cameron Considine',
    role: 'Entrepreneur',
    image: avatarImage7,
  },
  {
    name: 'Regina Wisoky',
    role: 'Design Student',
    image: avatarImage11,
  },
  {
    name: 'Vernon Cummerata',
    role: 'UI Engineer',
    image: avatarImage8,
  },
  {
    name: 'Steven Hackett',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen',
    role: 'Startup Founder',
    image: avatarImage10,
  },
  {
    name: 'Leah Kiehn',
    role: 'Creative Director',
    image: avatarImage6,
  },
  {
    name: 'Steven Hackett',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen',
    role: 'Startup Founder',
    image: avatarImage10,
  },
  {
    name: 'Leah Kiehn',
    role: 'Creative Director',
    image: avatarImage6,
  },
  {
    name: 'Antonio Littel',
    role: 'Frontend Developer',
    image: avatarImage3,
  },
  {
    name: 'Lynn Nolan',
    role: 'Growth Marketer',
    image: avatarImage4,
  },
  {
    name: 'Krista Prosacco',
    role: 'Professional Designer',
    image: avatarImage9,
  },
  {
    name: 'Cameron Considine',
    role: 'Entrepreneur',
    image: avatarImage7,
  },
  {
    name: 'Regina Wisoky',
    role: 'Design Student',
    image: avatarImage11,
  },
  {
    name: 'Vernon Cummerata',
    role: 'UI Engineer',
    image: avatarImage8,
  },
  {
    name: 'Steven Hackett',
    role: 'Bootcamp Instructor',
    image: avatarImage5,
  },
  {
    name: 'Carla Schoen',
    role: 'Startup Founder',
    image: avatarImage10,
  },
]

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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
