'use client'

import { useContext } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Container } from "./Container";
import { Button } from "./Button";
import { PagedContext } from "./PagedContext";

export interface Association {
  title: string
  image: StaticImageData
  url: string
  background: 'light' | 'dark'
}

export function AssociationList({associations}: {associations: Array<Association>}) {
  const paged = useContext(PagedContext)
  return <Container className="mt-16">
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
              loading={paged ? 'eager' : 'lazy'} />
          </Button>
        ))}
      </div>
    </div>
  </Container>;
}
