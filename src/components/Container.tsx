import clsx from 'clsx'


export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'mx-[12.5%] px-4 sm:px-6 md:px-0 lg:max-w-[47.5%] print:ml-0 print:max-w-[62.5%] print:p-0',
        className,
      )}
      {...props}
    />
  )
}
