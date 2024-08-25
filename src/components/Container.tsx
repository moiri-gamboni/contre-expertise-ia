import clsx from 'clsx'

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  centered?: boolean;
}

export function Container({
  className,
  centered = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        centered ? 'mx-auto' : 'mx-[12.5%]',
        'px-4 sm:px-6 md:px-0 lg:max-w-[47.5%] print:ml-0 print:max-w-[62.5%] print:p-0',
        className,
      )}
      {...props}
    />
  )
}
