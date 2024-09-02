// src/components/Insert.tsx
import React from 'react'
import clsx from 'clsx'

export function Insert({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
        className={clsx(
        'w-full rounded-2xl border-2 border-brand-500 bg-brand-50 px-6 pt-2 pb-6 mt-4 shadow-sm print:break-inside-avoid',
        className
        )}
        {...props}
      />
  )
}
