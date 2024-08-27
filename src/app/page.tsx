import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Report } from '@/components/Report'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <Report />
      <Footer />
    </>
  )
}
