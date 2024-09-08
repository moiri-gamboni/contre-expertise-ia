import React from 'react'
import { Container } from '@/components/Container'

interface ExpertProps {
  name: string
  role: string
  comment?: string
  children: React.ReactNode
}

export function Expert({ name, role, comment, children }: ExpertProps) {
  return (
    <li>
      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
        <figcaption className="relative flex items-center justify-between ">
          <div>
            <div className="font-display text-lg font-bold text-slate-900">
              {name}
            </div>
            <div className="text-left text-sm text-slate-500">
              {role.split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < role.split('\\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            <div className="text-base">
              <i>{children}</i>
            </div>
          </div>
        </figcaption>
        {comment && (
          <blockquote className="relative mt-2 border-t border-slate-100 pt-2">
            <p className="text-base tracking-tight text-slate-900 ">
              {comment}
            </p>
          </blockquote>
        )}
      </figure>
    </li>
  )
}

export function Experts({ children }: { children: React.ReactNode }) {
  const expertArray = React.Children.toArray(children)
  const experts: React.ReactNode[][] = [[], []]


  expertArray.forEach((expert, index) => {
    experts[index % 2].push(expert)
  })

  return (
    <ul
      role="list"
      className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-8 lg:max-w-none lg:grid-cols-2"
    >
      {experts.map((column, columnIndex) => (
        <li key={columnIndex}>
          <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
            {column.map((expert, expertIndex) => (
              <React.Fragment key={expertIndex}>{expert}</React.Fragment>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
