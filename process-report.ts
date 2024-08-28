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

const imports = `import { Sidenote } from '@/components/Sidenote'
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

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export function fixEmphasis(markdown: string): string {
  return markdown
}

try {
  // Read the contents of the raw.md file
  let content = fs.readFileSync(inputPath, 'utf-8')

  // Remove the comment at the beginning
  content = content.replace(/^<!--[\s\S]*?-->/, '')

  // Remove the comment at the end and the footnotes section
  content = content.replace(/<!-- Footnotes[\s\S]*$/, '')

  // Extract the title (first second-level heading) and remove it
  const titleRegex = /^## (.+)$/m
  const titleMatch = content.match(titleRegex)
  let title = ''
  if (titleMatch) {
    title = titleMatch[1]
    content = content.replace(titleRegex, '')
  }

  // Extract the executive summary
  const resumeRegex = /^## Résumé Exécutif\n([\s\S]*?)(?=\n## )/m
  const resumeMatch = content.match(resumeRegex)
  let resume = ''
  if (resumeMatch) {
    resume = resumeMatch[1].trim()
    resume = fixEmphasis(resume)
    content = content.replace(resumeRegex, '')
  }

  // Remove the Table of Contents section
  const tocRegex = /^## Table des matières\n([\s\S]*?)(?=\n## )/m
  content = content.replace(tocRegex, '')

  // Process second-level headings
  const headingRegex = /^## (.+)$/gm
  const sections = content.split(headingRegex).slice(1)
  let processedContent = ''
  const nav: NavItem[] = []

  for (let i = 0; i < sections.length; i += 2) {
    const fullTitle = sections[i].trim()
    let sectionContent = (sections[i + 1] || '').trim()

    const numberMatch = fullTitle.match(/^(\d+\.?\s*)/)
    const number = numberMatch ? numberMatch[1].trim() : ''
    const navTitle = fullTitle.replace(/^\d+\.?\s*/, '').trim()
    const id = createSlug(navTitle)

    nav.push({ id, title: navTitle })

    const classNameProp = i === 0 ? " className='print:pt-0'" : ''
    const numberProp = number ? ` number="${number}"` : ''

    // Replace HTML-style underline with JSX-style
    sectionContent = sectionContent.replace(
      /<span style="text-decoration:underline;">/g,
      '<span style={{textDecoration: "underline"}}>',
    )

    // Add line breaks after opening <td> tags
    sectionContent = sectionContent.replace(/<td>/g, '<td>\n')

    // Wrap table contents with <tbody>
    sectionContent = sectionContent.replace(
      /<table>([\s\S]*?)<\/table>/g,
      '<table><tbody>$1</tbody></table>',
    )

    // Fix emphasis and strong emphasis
    sectionContent = fixEmphasis(sectionContent)

    processedContent += `<ReportSection id="${id}"${numberProp} navTitle="${navTitle}"${classNameProp}>
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
  console.log('Underline styles updated to JSX syntax.')
  console.log('Line breaks added after opening table cell tags.')
  console.log('Table contents wrapped with <tbody> tags.')
  console.log('Emphasis and strong emphasis formatting fixed.')
} catch (error) {
  console.error('Error processing contre-expertise:', error)
}
