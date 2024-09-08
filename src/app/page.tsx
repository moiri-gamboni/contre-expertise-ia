import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Resume } from '@/components/Resume'
import { NavBar } from '@/components/NavBar'
import { Report } from '@/components/Report'

export default function Home() {
  return (
    <>
      <Hero />
      <Resume />
      <NavBar />
      <Report />
      <Footer />
    </>
  )
}
