import { GridPattern } from '@/components/GridPattern'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative border-t pb-10 pt-5 sm:pb-20 sm:pt-10">
      <div className="relative text-center text-base text-slate-600">
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  )
}
