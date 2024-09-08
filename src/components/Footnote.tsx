import React from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/Tooltip'
import FakeLink from '@/components/FakeLink'

interface FootnoteProps {
  number: number
  children: string
}

export async function Footnote({ number, children }: FootnoteProps) {
  return (
    <Tooltip placement="top-start">
      <TooltipTrigger asChild>
        <FakeLink className="pl-[0.2rem]">
          <sup>{number}</sup>
        </FakeLink>
      </TooltipTrigger>
      <TooltipContent className="max-w-[30%] rounded-md border border-brand-600 bg-white px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] tracking-tight text-slate-700 focus:outline-none">
        {children}
      </TooltipContent>
    </Tooltip>
  )
}
