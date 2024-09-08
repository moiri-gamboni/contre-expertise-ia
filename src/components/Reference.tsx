import React from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/Tooltip'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import StyledLink from './StyledLink'
import { MDXComponents } from 'mdx/types'

interface ReferenceProps {
  children: string
}

function parseReferenceNumbers(referenceText: string): number {
  const regex = /\[(\d+)/
  const match = referenceText.match(regex)?.[1] ?? ''
  return Number.parseInt(match)
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

const components: MDXComponents = {
  a: ({ href = '#', children, ...props }) => (
    <StyledLink className="break-words" href={href} {...props}>
      {children}
    </StyledLink>
  ),
}

export async function Reference({ children }: ReferenceProps) {
  const sourceNumber = parseReferenceNumbers(children)
  const source = getMDXSource(sourceNumber)

  return (
    <Tooltip placement="top-start">
      <TooltipTrigger asChild>
          <StyledLink className='no-underline' href="#">{children}</StyledLink>
      </TooltipTrigger>
      <TooltipContent className="max-w-[30%] rounded-md border border-brand-600 bg-white px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] tracking-tight text-slate-700 focus:outline-none">
        <MDXRemote source={source} components={{ ...components }} />
      </TooltipContent>
    </Tooltip>
  )
}
