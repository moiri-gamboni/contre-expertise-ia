import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

import path from 'path'
import fs from 'fs'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import { Part } from '@/components/Part'

const bookDirectory = path.join(process.cwd(), 'book')

async function getParts() {
  const fileNames = fs.readdirSync(bookDirectory)
  const parts = fileNames.map(async (fileName) => {
    const fullPath = path.join(bookDirectory, fileName)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContent)
    const title = matterResult.data['title'] as string
    const slug = matterResult.data['slug'] as string

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return { fileName, contentHtml, title, slug, ...matterResult.data }
  })
  return await Promise.all(parts)
}

export default async function Home() {
  const allPartsData = await getParts()
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      {allPartsData.map((part) => (
        <Part
          key={part.fileName}
          title={part.title}
          slug={part.slug}
          contentHTML={part.contentHtml}
        />
      ))}
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
