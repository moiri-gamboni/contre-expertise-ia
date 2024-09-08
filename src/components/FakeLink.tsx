import React from "react";
import clsx from "clsx";

interface FakeLinkProps {
  className?: string,
  children: React.ReactNode
}

export default function FakeLink({
  className,
  children,
}: FakeLinkProps) {
  return (
    <span
      className={clsx(
        className,
        'cursor-pointer font-semibold text-brand-700 hover:text-brand-800 hover:decoration-brand-800 hover:decoration-2 print:break-inside-avoid',
      )}
    >
      {children}
    </span>
  )
}
