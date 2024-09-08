import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import React from "react";

interface StyledLinkProps extends LinkProps {
  className?: string,
  children: React.ReactNode
}

export default function StyledLink({
  className,
  children,
  ...props
}: StyledLinkProps) {
  return (
    <NextLink
      className={clsx(className, "font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800 hover:decoration-brand-800 hover:decoration-2 print:break-inside-avoid")}
      {...props}
    >
      {children}
    </NextLink>
  )
}
