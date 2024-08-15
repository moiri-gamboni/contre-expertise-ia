import { StaticImageData } from "next/image"
import Image from "next/image"
import { useContext } from "react"
import { PagedContext } from "./PagedContext"

export interface Person {
  name: string
  role: string
  image?: StaticImageData
}

function Expert(expert: Person) {
  const paged = useContext(PagedContext)
  return (
    <>
      {expert.image ? (
        <Image
          className="mx-auto h-24 w-24 rounded-full"
          src={expert.image}
          alt={`portrait of ${expert.name}`}
          loading={paged ? 'eager' : 'lazy'}
        />
      ) : (
        <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />
      )}
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {expert.name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{expert.role}</p>
    </>
  )
}

export function ExpertList({ experts }: { experts: Person[] }) {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 print:grid-cols-5 print:max-w-none print:mx-0"
    >
      {experts.map((expert) => (
        <li key={expert.name} className="print:break-inside-avoid">
          <Expert {...expert} />
        </li>
      ))}
    </ul>
  )
}
