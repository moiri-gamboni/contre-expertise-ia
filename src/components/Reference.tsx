import * as React from 'react'
import clsx from 'clsx'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/Tooltip'

// Higher-order component to style the Tooltip components
function withReferenceStyles<T extends React.ElementType>(WrappedComponent: T) {
  return React.forwardRef<
    React.ElementRef<T>,
    React.ComponentPropsWithoutRef<T> & { className?: string }
  >(function ReferenceComponent({ className, ...props }, ref) {
    return (
      <WrappedComponent
        ref={ref}
        className={clsx(
          'rounded-md border border-brand-600 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.1)-1px)] text-base font-bold tracking-tight text-brand-700 focus:outline-none w-min backdrop-blur-sm bg-white/80',
          className,
        )}
        {...(props as any)}
      />
    )
  })
}

// Reference Tooltip components
export const Reference = Tooltip
export const ReferenceTrigger = TooltipTrigger
export const ReferenceContent = withReferenceStyles(TooltipContent)
