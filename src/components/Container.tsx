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
        centered ? 'sm:mx-auto' : 'sm:mx-[12.5%]',
        'px-4 lg:px-0 lg:max-w-[47.5%] print:ml-0 print:max-w-[62.5%] print:p-0',
        className,
      )}
      {...props}
    />
  )
}
