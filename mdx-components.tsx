import Image, { ImageProps } from 'next/image'
import StyledLink from '@/components/StyledLink'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: ({ alt, ...props }) => (
      <Image alt={alt} {...props} className="print:break-inside-avoid" />
    ),
    // MDX is already nested under h2, so we need to adjust h-level
    h2: (props) => (
      <h3
        className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900 print:break-after-avoid"
        {...props}
      />
    ),
    h3: (props) => (
      <h4
        className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 print:break-after-avoid"
        {...props}
      />
    ),
    p: (props) => <p className="mt-4 break-words" {...props} />,
    ul: (props) => (
      <ul
        role="list"
        className="ml-8 mt-4 list-outside list-disc space-y-3"
        {...props}
      />
    ),
    ol: (props) => (
      <ul
        role="list"
        className="ml-8 mt-4 list-outside list-decimal space-y-3"
        {...props}
      />
    ),
    li: (props) => <li className="pl-4 marker:text-brand-700" {...props} />,
    a: ({ href = '#', children, ...props }) => <StyledLink href={href} {...props} >{children}</StyledLink>,
    blockquote: (props) => (
      <blockquote
        className="my-8 border-s-4 border-s-slate-200 ps-4 font-medium italic text-slate-900 print:break-inside-avoid [&_p:first-of-type]:before:content-[open-quote] [&_p:last-of-type]:after:content-[close-quote]"
        style={{
          quotes: '"\\201C""\\201D""\\2018""\\2019"',
        }}
        {...props}
      />
    ),
  }
}
