import React from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/Tooltip'
import FakeLink from '@/components/FakeLink'
import { ReferenceContent } from './ReferenceContent'

interface ReferenceProps {
  children: string
}

function parseReferenceNumbers(referenceText: string): number {
  const regex = /\[(\d+)/
  const match = referenceText.match(regex)?.[1] ?? ''
  return Number.parseInt(match)
}

export function Reference({ children }: ReferenceProps) {
  const sourceNumber = parseReferenceNumbers(children)
  return (
    <Tooltip placement="top-start">
      <TooltipTrigger asChild>
        <FakeLink>
          {children}
        </FakeLink>
      </TooltipTrigger>
      <TooltipContent className="max-w-[30%] rounded-md border border-brand-600 bg-white px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] tracking-tight text-slate-700 focus:outline-none">
        <ReferenceContent sourceNumber={sourceNumber} />
      </TooltipContent>
    </Tooltip>
  )
}
