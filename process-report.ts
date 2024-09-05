import fs from 'fs'
import path from 'path'

const inputPath = path.join(__dirname, 'src', 'contre-expertise', 'raw.md')
const outputPath = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'processed.mdx',
)
const metadataPath = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'metadata.json',
)
const resumePath = path.join(__dirname, 'src', 'contre-expertise', 'resume.mdx')
const bibliographyDir = path.join(
  __dirname,
  'src',
  'contre-expertise',
  'bibliography',
)

const imports = `import { Reference } from '@/components/Reference'
import { Insert } from '@/components/Insert'
import { ReportSection } from '@/components/ReportSection'

`

interface NavItem {
  id: string
  title: string
}

interface Metadata {
  title: string
  nav: NavItem[]
}

function createSlug(title: string) {
  // Convert to lowercase
  let slug = title.toLowerCase()

  // Replace spaces and separators with hyphens
  slug = slug.replace(/[\s_]+/g, '-')

  // Remove characters that aren't alphanumeric, hyphens, or accented letters
  slug = slug.replace(/[^\p{L}\p{N}-]/gu, '')

  // Remove leading and trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '')

  // Replace multiple consecutive hyphens with a single hyphen
  slug = slug.replace(/-{2,}/g, '-')

  // If the slug doesn't start with a letter (including accented), prepend 'id-'
  if (!/^[\p{L}]/u.test(slug)) {
    slug = 'id-' + slug
  }

  // Ensure the slug is not empty and starts with a letter
  if (slug === '' || !/^[\p{L}]/u.test(slug)) {
    return 'id-' + Math.random().toString(36).substring(2, 10)
  }

  return slug
}

function processInserts(content: string, noteCounter: number): string {
  const noteRegex = /\\\[Encart\\\]([\s\S]+?)\\\[Fin Encart\\\]/gm

  return content.replace(noteRegex, (match, p1) => {
    const processedNote = `<Insert>\n${p1.trim()}\n</Insert>`
    noteCounter++
    return processedNote
  })
}

function extractBibliography(content: string): string[] {
  const bibliographyRegex =
    /# Bibliographie {#bibliographie}\n([\s\S]*?)(?=\n\[|\n$)/
  const bibliographyMatch = content.match(bibliographyRegex)

  if (bibliographyMatch && bibliographyMatch[1]) {
    return bibliographyMatch[1]
      .trim()
      .split('\n')
      .filter((item) => item.trim() !== '')
  }

  return []
}

function createBibliographyFiles(items: string[]) {
  if (!fs.existsSync(bibliographyDir)) {
    fs.mkdirSync(bibliographyDir, { recursive: true })
  }

  items.forEach((item, index) => {
    const filePath = path.join(bibliographyDir, `${index + 1}.mdx`)
    fs.writeFileSync(filePath, item.trim())
  })
}

try {
  // Read the contents of the raw.md file
  let content = fs.readFileSync(inputPath, 'utf-8')

  // Extract bibliography items
  const bibliographyItems = extractBibliography(content)
  createBibliographyFiles(bibliographyItems)

  // TODO: extract footnotes as sidenotes
  // Remove the footnotes section
  content = content.replace(/^\n\[\^\d+\]:  .+\n$/gm, '')

  // Extract the title (first heading) and remove it
  const reTitle = /^# (.+?)$/m
  const titleMatch = content.match(reTitle)
  const title = titleMatch?.[1] ?? ''
  content = content.replace(reTitle, '')

  // Extract the executive summary
  const reResume = /^# Résumé Exécutif {#résumé-exécutif}$([\s\S]+?)(?=^\n# )/m
  const resumeMatch = content.match(reResume)
  const resume = resumeMatch?.[1] ?? ''
  content = content.replace(reResume, '')

  // TODO: generate links automatically
  // Remove the Table of Contents section
  const tocRegex =
    /^# Table des matières {#table-des-matières}$([\s\S]*?)(?=^\n# )/m
  content = content.replace(tocRegex, '')
  // Remove heading links
  content = content.replace(/^(#+ .+?) \{.+\}?$/gm, '$1')

  // Process headings
  const sections = content.split(/^# (.+)$/gm).slice(1)
  let processedContent = ''
  const nav: NavItem[] = []

  let noteCounter = 1
  for (let i = 0; i < sections.length; i += 2) {
    const titleMatch = sections[i].match(/^([\d\.]*) ?(.+?)$/)
    let sectionContent = sections[i + 1].trim()

    const number = titleMatch?.[1] ?? ''
    const title = titleMatch?.[2] ?? ''
    const id = createSlug(title)

    nav.push({ id, title })

    const classNameProp = i === 0 ? "className='print:pt-0'" : ''
    const numberProp = number ? `number="${number}"` : ''

    // // Replace HTML-style underline with JSX-style
    // sectionContent = sectionContent.replace(
    //   /<span style="text-decoration:underline;">/g,
    //   '<span style={{textDecoration: "underline"}}>',
    // )

    // // Add line breaks after opening <td> tags
    // sectionContent = sectionContent.replace(/<td>/g, '<td>\n')

    // // Wrap table contents with <tbody>
    // sectionContent = sectionContent.replace(
    //   /<table>([\s\S]*?)<\/table>/g,
    //   '<table><tbody>$1</tbody></table>',
    // )

    // Process inserts
    sectionContent = processInserts(sectionContent, noteCounter)

    processedContent += `<ReportSection id="${id}" ${numberProp} navTitle="${title}" ${classNameProp}>
${sectionContent}
</ReportSection>

`
  }

  // Create metadata object
  const metadata: Metadata = { title, nav }

  // Write metadata to JSON file
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

  // Write the executive summary to resume.mdx
  fs.writeFileSync(resumePath, resume)

  // Add the import statements at the beginning of the file
  content = imports + processedContent

  // Write the processed contents to the processed.mdx file
  fs.writeFileSync(outputPath, content)

  console.log('Contre-expertise processed successfully!')
  console.log('Metadata extracted and saved.')
  console.log('Executive summary extracted and saved.')
  console.log('Sections processed and wrapped in ReportSection components.')
  // console.log('Underline styles updated to JSX syntax.')
  // console.log('Line breaks added after opening table cell tags.')
  // console.log('Table contents wrapped with <tbody> tags.')
  console.log('Inserts processed and wrapped in a component.')
  console.log('Bibliography items extracted and saved as separate MDX files.')
} catch (error) {
  console.error('Error processing contre-expertise:', error)
}
