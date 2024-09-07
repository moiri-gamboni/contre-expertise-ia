import clsx from 'clsx'

export function SectionHeading({
  number,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'> & { number?: string }) {
  return (
    <h2
      className={clsx(
        className,
        'font-display my-4 inline-flex items-baseline rounded-full px-4 py-1 text-brand-700 ring-1 ring-inset ring-brand-700 print:break-inside-avoid',
      )}
      {...props}
    >
      {number && (
        <>
          <span className="font-mono text-2xl sm:text-3xl lg:text-4xl" aria-hidden="true">
            {number.padStart(2, '0')}
          </span>
          <span className="ml-3 h-3.5 md:h-4 lg:h-5 w-px bg-blue-600/20" />
        </>
      )}
      <span
        className={clsx(
          'text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight',
          number && 'ml-3',
        )}
      >
        {children}
      </span>
    </h2>
  )
}
