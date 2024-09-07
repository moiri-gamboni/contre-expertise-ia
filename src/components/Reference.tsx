import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/Tooltip'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import StyledLink from './StyledLink'

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
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error(`Error reading file for reference ${num}:`, error)
    return `Reference ${num} not found.`
  }
}

const components = {
  a: ({ href = '#', ...props }) => (
    <StyledLink className="break-words" href={href} {...props} />
  ),
}

export function Reference({ children }: ReferenceProps) {
  const sourceNumbers = parseReferenceNumbers(children)
  const sources = sourceNumbers.map(getMDXSource)

  return (
    <Tooltip placement='top-start'>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className="min-w-96 w-min rounded-md border border-brand-600 bg-white px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] tracking-tight text-slate-700 focus:outline-none">
        {sources.map((source, index) => (
          <React.Fragment key={sourceNumbers[index]}>
            <MDXRemote source={source} components={{ ...components }} />
            {index < sources.length - 1 && <hr className="my-2" />}
          </React.Fragment>
        ))}
      </TooltipContent>
    </Tooltip>
  )
}
