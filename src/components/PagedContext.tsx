'use client'

import { createContext } from 'react'

export const PagedContext = createContext(false)

export default function PagedProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PagedContext.Provider value={true}>{children}</PagedContext.Provider>
}
