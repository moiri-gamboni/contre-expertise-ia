import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: ({alt, ...props }) => <Image alt={alt} {...props} />,
    // MDX is already nested under h2, so we need to adjust h-level
    h2: (props) => (
      <h3
        className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900"
        {...props}
      />
    ),
    h3: (props) => (
      <h4
        className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900"
        {...props}
      />
    ),
    p: (props) => <p className="mt-4" {...props} />,
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
    li: (props) => <li className="pl-4 marker:text-brand-600" {...props} />,
    a: ({ href="#", ...props }) => (
      <Link className="font-medium text-brand-600 hover:text-brand-800" href={href} {...props} />
    ),
  }
}
