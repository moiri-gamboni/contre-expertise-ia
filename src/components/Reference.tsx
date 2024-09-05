import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/Tooltip'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface ReferenceProps {
  children: string
}

function parseReferenceNumbers(referenceText: string): number[] {
  const regex = /\[(\d+)/g
  const matches = [...referenceText.matchAll(regex)].map((match) =>
    parseInt(match[1], 10),
  )
  return [...new Set(matches)]
}

function getMDXSource(num: number): string {
  const filePath = path.join(
    process.cwd(),
    'src',
    'contre-expertise',
    'bibliography',
    `${num}.mdx`,
  )
  return fs.readFileSync(filePath, 'utf8')
}

export function Reference({ children }: ReferenceProps) {
  const sourceNumbers = parseReferenceNumbers(children)
  const sources = sourceNumbers.map(getMDXSource)

  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className="w-min rounded-md border border-brand-600 bg-white/80 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] text-base font-bold tracking-tight text-brand-700 backdrop-blur-sm focus:outline-none">
        {sources.map((source, index) => (
          <React.Fragment key={sourceNumbers[index]}>
            <MDXRemote source={source} />
            {index < sources.length - 1 && <hr className="my-2" />}
          </React.Fragment>
        ))}
      </TooltipContent>
    </Tooltip>
  )
}
