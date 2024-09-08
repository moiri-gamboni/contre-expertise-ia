import React from 'react'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import StyledLink from './StyledLink'
import { MDXComponents } from 'mdx/types'

async function getMDXSource(num: number) {
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

export async function ReferenceContent({ sourceNumber }: { sourceNumber: number }) {
  const source = await getMDXSource(sourceNumber)
  return <MDXRemote source={source} components={{ ...components }} />
}
