import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/Tooltip'
import fs from 'fs/promises'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface ReferenceProps {
  sourceNumbers: number[]
  children: React.ReactNode
}

async function getMDXSource(num: number) {
  const filePath = path.join(
    process.cwd(),
    'src',
    'contre-expertise',
    'bibliography',
    `${num}.mdx`,
  )
  return await fs.readFile(filePath, 'utf8')
}

export async function Reference({ sourceNumbers, children }: ReferenceProps) {
  const sources = await Promise.all(sourceNumbers.map(getMDXSource))

  return (
    <Tooltip placement="top-start">
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
