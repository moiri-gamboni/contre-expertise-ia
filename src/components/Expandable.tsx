'use client'

import { Transition } from '@headlessui/react'
import { Children, createContext, useContext, useState } from 'react'

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m17 14-5 5-5-5M12 18.5V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ExpandableContext = createContext({
  isExpanded: false,
  expand: () => {},
})

export function Expandable({ expanded = false, ...props }: { expanded?: boolean } & React.ComponentPropsWithoutRef<'div'>) {
  let [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true)
        },
      }}
    >
      <div {...props} data-expanded={isExpanded ? '' : undefined} />
    </ExpandableContext.Provider>
  )
}

export function ExpandableItems({
  children,
  limit = 2,
}: {
  children: React.ReactNode
  limit?: number
}) {
  let { isExpanded } = useContext(ExpandableContext)
  const prefersReducedMotion = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  
  return (
    <>
      {Children.toArray(children).slice(0, limit)}

      <Transition
        show={isExpanded}
        enter={prefersReducedMotion ? "" : "transition-opacity duration-300"}
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div>
          {Children.toArray(children).slice(
            limit,
            isExpanded ? undefined : limit,
          )}
        </div>
      </Transition>
    </>
  )
}

export function ExpandableButton({ children }: { children: React.ReactNode }) {
  let { isExpanded, expand } = useContext(ExpandableContext)

  return (
    !isExpanded && (
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
          onClick={expand}
        >
          {children}
          <ArrowDownIcon className="ml-2 h-6 w-6" />
        </button>
      </div>
    )
  )
}
